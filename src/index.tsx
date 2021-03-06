import _ from 'lodash';
import {DateTime} from 'luxon';
import axios from 'axios';
import ReactDOM from 'react-dom';
import React from 'react';

let ohyay = window.ohyay;

let container_div = document.getElementById('container');

async function main() {
  let current_room_id = await ohyay.getCurrentRoomId();
  let rooms: Room[] = await ohyay.getRooms();

  let current_room = _.find(rooms, {id: current_room_id}) as Room|undefined;
  if (!current_room) {
    throw `Room id ${current_room_id} does not exist`;
  }

  let current_room_elements = await ohyay.getRoomElements(current_room_id);

  let callbacks: {[name: string]: () => void} = {
    "Map": map,
    "Reception - Hub": reception,
  };

  callbacks[current_room.title]();

  async function map() {
    let schedule = {
      friday: [
        {
          start: '09:45',
          end: '10:20',
          title: 'Department welcome',
          room: 'Department Welcome'
        },
        {
          start: '10:30',
          end: '12:00',
          room: 'Information Sessions - Hub',
          title: 'Information Sessions'
        },
        {
          start: '12:00',
          end: '13:00',
          room: 'Panel - DEI',
          title: 'DEI Panel'
        },
        {
          start: '13:00',
          end: '17:00',
          room: 'Meetings - Hub',
          title: 'Meetings with faculty',
        },
        {
          start: '17:30',
          end: '18:30',
          room: 'Reception - Hub',
          title: 'Department Reception',
        },
        {
          start: '18:30',
          end: '23:59',
          room: 'Evening Social - Hub',
          title: 'Social Events'
        }
      ],
      saturday: [
        {
          start: '10:00',
          end: '11:00',
          room: 'Panel - Student Q&A',
          title: 'Student Q&A'
        },
        {
          start: '11:00',
          end: '11:30',
          room: 'Housing Tour - Hub',
          title: 'Housing Tour'
        },
        {
          start: '12:00',
          end: '13:00',
          room: 'Women in CS Social',
          title: 'Women in CS Social'
        },
        {
          start: '13:00',
          end: '17:00',
          room: 'Meetings - Hub',
          title: 'Meetings with faculty',
        },
        {
          start: '17:00',
          end: '18:00',
          room: 'Inclusion in CS Social',
          title: 'Inclusion in CS Social',
        },
        {
          start: '18:00',
          end: '23:59',
          room: 'Saturday Social - Hub',
          title: 'Research Area Socials'
        }
      ],
    };

    let parse_time = (s: string) => DateTime.fromISO(s, {zone: 'America/Los_Angeles'});

    let response = await axios.get('https://mindover.computer/api/time');
    let now = DateTime.fromSeconds(response.data).setZone('America/Los_Angeles');
    //let now = parse_time('18:01');

    let todays_events = now.weekdayLong == "Saturday" ? schedule.saturday : schedule.friday;

    let pivot = _.findIndex(todays_events, event => parse_time(event.end) > now);
    let prev = pivot > 0 ? todays_events[pivot - 1] : null;

    let current, next;
    if (pivot != -1 && now < parse_time(todays_events[pivot].start)) {
      current = null;
      next = todays_events[pivot];
    } else {
      current = pivot != -1 ? todays_events[pivot] : null;
      next = pivot < todays_events.length - 1 ? todays_events[pivot + 1] : null;
    }

    let get_element_id = (title: string) => {
      let elt = _.find(current_room_elements, {title}) as Element | undefined;
      if (!elt) {
        throw `Could not find element with title ${title}`;
      }

      return elt.id;
    };

    let update = async (kind: string, event: any | null) => {
      let promise1, promise2, promise3;

      if (event == null) {
        promise1 = ohyay.updateElement(get_element_id(`${kind} Event Preview`), {scenePreviewId: ''});
        promise2 = ohyay.updateElement(get_element_id(`${kind} Event Count`), {sceneIds: {}});
        promise3 = ohyay.updateElement(get_element_id(`${kind} Event Title`), {text: ''});
      } else {
        let preview_room = _.find(rooms, {title: event.room});
        if (!preview_room) {
          throw `Invalid room id ${event.room}`;
        }

        promise1 = ohyay.updateElement(get_element_id(`${kind} Event Preview`), {scenePreviewId: preview_room.id});
        promise2 = ohyay.updateElement(get_element_id(`${kind} Event Count`), {sceneIds: {[preview_room.id]: true}});
        promise3 = ohyay.updateElement(get_element_id(`${kind} Event Title`), {text: event.title});
      }

      let [response1, response2, response3] = await Promise.all([promise1, promise2, promise3]);
      if (!response1 || !response2 || !response3) {
        throw `Update to preview failed`;
      }
    };

    let p = ohyay.updateElement(
      get_element_id("Controller"),
      {tags: {previous: prev != null, current: current != null, upcoming: next != null}});

    await Promise.all([update("Previous", prev), update("Current", current), update("Upcoming", next), p]);
  }

  async function reception() {
    let generate_seats = async () => {
      let get_tagged_elts = (tag: string) => {
        let elts = _.filter(current_room_elements, elt => elt.tags && elt.tags[tag]);
        if (elts.length > 0) {
          return elts;
        } else {
          throw `Tag missing: ${tag}`;
        }
      };

      let static_template = get_tagged_elts("static_button_template");
      let dynamic_template = get_tagged_elts("dynamic_button_template");

      let stamp_instance = async (template: any, pos: {x: number, y: number}, params: any) => {
        let ox = _.chain(template).map(elt => elt.bounds.x).min().value();
        let oy = _.chain(template).map(elt => elt.bounds.y).min().value();

        await Promise.all(template.map((elt: AnyElement) => {
          let bounds = {
            x: elt.bounds.x - ox + pos.x,
            y: elt.bounds.y - oy + pos.y
          };
          let new_elt =
            _.chain({})
             .merge(elt)
             .merge(params[elt.title] || {})
             .merge({bounds, isNotesElement: false})
             .value();
          ohyay.addElement(current_room_id, new_elt.type, new_elt);
        }));
      };

      let static_faculty = [
        {
          names: ['Dorsa Sadigh', 'Jeannette Bohg']
        },
        {
          names: ['Clark Barrett', 'Sara Achour']
        },
        {
          names: ['Alex Aiken', 'Dawson Engler']
        },
        {
          names: ['Juan Carlos Niebles', 'Jiajun Wu']
        },
        {
          names: ['Chris Piech', 'James Landay']
        },
        {
          names: ['Dan Yamins', 'Noah Goodman']
        },
      ];

      let ncols = 3;
      let width = 165;
      let height = 48;
      let margin = 10;
      let static_offset = {x: 61, y: 240};
      let dynamic_offset = {x: 651, y: 240};
      let dynamic_slots = 12;

      let promises1 =
        _.chain(static_faculty)
         .chunk(ncols)
         .map((chunk, row) =>
           chunk.map((faculty, col) => {
             let pos = {
               x: (width + margin) * col + static_offset.x,
               y: (height + margin) * row + static_offset.y
             };
             return stamp_instance(static_template, pos, {
               Count: {
                 tags: {static_button_template: false}
               },
               Faculty: {
                 text: _.sortBy(faculty.names).join('\n'),
                 tags: {static_button_template: false}
               }
             });
         }))
         .flatten()
         .value();

      let promises2 =
        _.chain(_.range(dynamic_slots))
         .chunk(ncols)
         .map((chunk, row) =>
           chunk.map((_, col) => {
             let pos = {
               x: (width + margin) * col + dynamic_offset.x,
               y: (height + margin) * row + dynamic_offset.y
             };
             return stamp_instance(dynamic_template, pos, {
               Count: {
                 tags: {dynamic_button_template: false}
               },
               Faculty: {
                 tags: {dynamic_button_template: false}
               },
               Background: {
                 tags: {dynamic_button_template: false}
               }
             });
         }))
         .flatten()
         .value();

      await Promise.all(promises1.concat(promises2));
    };

    ReactDOM.render(<div>
      <button onClick={generate_seats}>Generate seats</button>
    </div>, container_div);
  }
}

ohyay.setApiLoadedListener(main);
