// TODO #1: make participant count on events include transitive spaces

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
  let current_user_id = await ohyay.getCurrentUserId();
  let current_user = await ohyay.getUser(current_user_id);

  let find_room = (query: any) => {
    let room = _.find(rooms, query);
    if (!room) {
      throw `Could not find room ${JSON.stringify(query)}`;
    }

    return room;
  };

  let current_room = find_room({id: current_room_id});
  let current_room_elements = await ohyay.getRoomElements(current_room_id);

  let callbacks: {[name: string]: () => void} = {
    "Map - Events": map,
    "Map - Main": map,
    "Reception - Hub": reception,
  };

  callbacks[current_room.title]();

  async function map() {
    if (current_user!.name != 'Will Crichton') { return; }

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
          start: '17:00',
          end: '18:20',
          room: 'Reception - Hub',
          title: 'Department Reception',
        },
        {
          start: '18:20',
          end: '23:59',
          room: 'Evening Social - Hub',
          title: 'Social Events',
        }
      ],
      saturday: [
        {
          start: '09:45',
          end: '10:55',
          room: 'Panel - Student Q&A',
          title: 'Student Q&A'
        },
        {
          start: '10:55',
          end: '11:30',
          room: 'Housing Tour - Hub',
          title: 'Housing Tour'
        },
        {
          start: '11:55',
          end: '12:55',
          room: 'Women in CS Social',
          title: 'Women in CS Social'
        },
        {
          start: '12:55',
          end: '16:55',
          room: 'Meetings - Hub',
          title: 'Meetings with faculty',
        },
        {
          start: '16:55',
          end: '17:55',
          room: 'Inclusion in CS Social',
          title: 'Inclusion in CS Social',
        },
        {
          start: '17:55',
          end: '23:59',
          room: 'Saturday Social - Hub',
          title: 'Research Area Socials'
        }
      ],
    };

    let parse_time = (s: string) => DateTime.fromISO(s, {zone: 'America/Los_Angeles'});

    let response = await axios.get('https://mindover.computer/api/time');
    let now = DateTime.fromSeconds(response.data).setZone('America/Los_Angeles');
    //let now = parse_time('11:35');

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
      let promise1, promise2, promise3, promise4;

      if (event == null) {
        promise1 = ohyay.updateElement(get_element_id(`${kind} Event Preview`), {scenePreviewId: ''});
        promise2 = ohyay.updateElement(get_element_id(`${kind} Event Count`), {sceneIds: {}});
        promise3 = ohyay.updateElement(get_element_id(`${kind} Event Title`), {text: ''});
      } else {
        let preview_room = find_room({title: event.room});
        promise1 = ohyay.updateElement(get_element_id(`${kind} Event Preview`), {scenePreviewId: preview_room.id});
        promise2 = ohyay.updateElement(get_element_id(`${kind} Event Count`), {sceneIds: {[preview_room.id]: true}});
        promise3 = ohyay.updateElement(get_element_id(`${kind} Event Title`), {text: event.title});
      }

      let [response1, response2, response3, response4] = await Promise.all([promise1, promise2, promise3, promise4]);
      if (!response1 || !response2 || !response3 || !response4) {
        console.error(`Update to preview failed`);
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
      let static_solo_template = get_tagged_elts("static_solo_button_template");
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
          names: ['Dorsa Sadigh', 'Jeannette Bohg'],
          custom: true
        },
        {
          names: ['Clark Barrett', 'Caroline Trippel'],
        },
        {
          names: ['Fred Kjolstad', 'Sara Achour'],
          custom: true
        },
        {
          names: ['Alex Aiken'],
        },
        {
          names: ['James Landay', 'John Mitchell']
        },
        {
          names: ['Omer Reingold', 'Moses Charikar'],
          custom: true
        },
        {
          names: ['Zakir Durumeric']
        },
        {
          names: ['Phil Levis'],
          custom: true
        },
        {
          names: ['Juan Carlos Niebles']
        },
        {
          names: ['Chris Manning'],
        },
        /*{
          names: ['Kayvon Fatahalian'],
          custom: true
        },*/
        {
          names: ['Gordon Wetzstein']
        },
        {
          names: ['Don Knuth'],
          custom: true
        },
        {
          names: ['Monica Lam'],
          custom: true
        },
        {
          names: ['Teaching Faculty']
        },
      ];

      let num_room_templates = 5;

      let ncols = 6;
      let width = 180;
      let height = 48;
      let margin = 12;
      let offset = {x: 61, y: 240};
      let dynamic_slots = 22;

      let dynamic_faculty = _.range(dynamic_slots).map(i => ({dynamic: true}));

      let max_order_index = _.chain(rooms).map(room => room.orderIndex).max().value();

      let common_room_id = find_room({title: 'Reception - Common Table Elements'}).id;
      let common_elts = await ohyay.getRoomElements(common_room_id);

      let mixer_ids: {[key:number]: string} = {};
      let room_ids: {[key:number]: string} = {};

      let promises =
        _.chain(static_faculty.concat(dynamic_faculty as any))
         .chunk(ncols)
         .map((chunk, row) =>
           chunk.map(async (faculty, col) => {
             let pos = {
               x: (width + margin) * col + offset.x,
               y: (height + margin) * row + offset.y
             };

             // Find room for faculty, either custom if desired or randomly selected from generic templates
             let template_title: string;
             if (faculty.custom) {
               template_title = `Reception - ${_.sortBy(faculty.names).join(' / ')}`;
             } else {
               let template_idx = Math.round(Math.random() * (num_room_templates - 1)) + 1;
               template_title = `Reception - Template ${template_idx}`;
             }
             let template_room = find_room({title: template_title});

             // Create new room from template
             let navigationParentSceneId = find_room({title: 'Reception - Hub'}).id;
             let room_idx = row * ncols + col;
             let new_template =
               _.chain({})
                .merge(template_room)
                .merge({
                  title: `Reception - Generated ${room_idx}`,
                  orderIndex: max_order_index + room_idx,
                  navigationParentSceneId,
                  walkable: false
                })
                .value() as any;
             delete new_template.id;
             delete new_template.elements;
             let room_id = await ohyay.addRoom(new_template);

             // Copy elements into the new room
             let template_elts = await ohyay.getRoomElements(template_room.id);
             await ohyay.cloneElements(
               template_room.id, template_elts.map(elt => elt.id!), room_id);
             let common_elt_ids = common_elts.map(elt => elt.id!);
             let common_elt_new_ids = await ohyay.cloneElements(
               common_room_id, common_elt_ids, room_id);
             let elt_id_map = _.chain(common_elt_ids).zip(common_elt_new_ids).fromPairs().value();

             // Store mixer id to be updated later
             let mixer_id = _.find(common_elts, {title: 'Audio Mixer'})!.id!;
             let new_mixer_id = elt_id_map[mixer_id];
             mixer_ids[room_idx] = new_mixer_id;
             room_ids[room_idx] = room_id;

             let sceneIds = {[room_id]: true};
             let linkUrl = `#${room_id}`;
             let linkedSceneId = room_id;

             if ((faculty as any).dynamic) {
               let tags = {dynamic_button_template: false};
               return stamp_instance(dynamic_template, pos, {
                 Count: {tags, sceneIds, linkUrl, linkedSceneId},
                 Faculty: {tags, sceneIds, linkUrl, linkedSceneId},
                 Background: {tags, linkUrl},
               });
             } else if (faculty.names.length == 1) {
               let tags = {static_solo_button_template: false};
               return stamp_instance(static_solo_template, pos, {
                 Count: { sceneIds, tags, linkUrl },
                 Faculty: {
                   text: faculty.names[0] + '\n ',
                   tags, linkUrl
                 },
                 FacultySlot: { sceneIds, tags, linkUrl, linkedSceneId }
               });
             } else {
               let tags = {static_button_template: false}
               return stamp_instance(static_template, pos, {
                 Count: { sceneIds, tags, linkUrl },
                 Faculty: {
                   text: _.sortBy(faculty.names).join('\n'),
                   tags, linkUrl, linkedSceneId
                 }
               });
             }
         }))
         .flatten()
         .value();

      await Promise.all(promises);

      // Update room audio mixers to all rooms
      let N = promises.length;
      await Promise.all(_.range(N).map(idx => {
        //let other_idxs = [-2, -1, 1, 2].map(di => ((idx + di) % N + N) % N);
        let other_idxs = _.range(N);
        other_idxs.splice(idx, 1);
        let sceneIds =
          _.fromPairs(other_idxs.map(other_idx => [room_ids[other_idx], true]));
        return ohyay.updateElement(mixer_ids[idx], {sceneIds});
      }));

      // Update reception mixer to all rooms
      let reception_mixer = _.find(current_room_elements, {title: 'Reception Audio Mixer'})!.id!;
      let sceneIds = _.chain(room_ids).values().map(id => [id, true]).fromPairs().value();
      await ohyay.updateElement(reception_mixer, {sceneIds});
    };

    let cleanup_rooms = async () => {
      await Promise.all(rooms
        .filter(room => room.title.startsWith('Reception - Generated'))
        .map(room => ohyay.removeRoom(room.id)));
    };

    ReactDOM.render(<div>
      <button onClick={generate_seats}>Generate seats</button><br />
      <button onClick={cleanup_rooms}>Cleanup rooms</button>
    </div>, container_div);
  }
}

ohyay.setApiLoadedListener(main);
