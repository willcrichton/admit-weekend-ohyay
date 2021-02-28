import _ from 'lodash';
import {DateTime} from 'luxon';

interface Expiration {
  templateSceneId: string
}

interface Room {
  id: string
  title: string
  expiration?: Expiration
}

interface Ohyay {
  getCurrentRoomId: () => Promise<string>;
  getRooms: () => Promise<Room[]>;
  getRoomElements: (id: string) => Promise<any[]>;
  updateElement: (elementId: string, update: any) => Promise<boolean>;
}

declare var ohyay: Ohyay;

async function main() {
  let current_room_id = await ohyay.getCurrentRoomId();
  let rooms = await ohyay.getRooms();

  let current_room = _.find(rooms, {id: current_room_id});
  if (!current_room) {
    throw `Room id ${current_room_id} does not exist`;
  }

  let callbacks: {[name: string]: () => void} = {
    "Map": map,
    "Evening Social - Hub": evening
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
          room: 'Panel',
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
      ]
    };

    // TODO: switch this by day
    let todays_events = schedule.friday;

    //let now = DateTime.now();
    let now = DateTime.fromISO('10:31');

    let pivot = _.findIndex(todays_events, event => DateTime.fromISO(event.end) > now);
    let prev = pivot > 0 ? todays_events[pivot - 1] : null;
    let current = pivot != -1 ? todays_events[pivot] : null;
    let next = pivot < todays_events.length - 1 ? todays_events[pivot + 1] : null;

    // TODO: should be able to look these up via getRoomElements, but it currently returns empty
    let elements: {[key: string]: string} = {
      "Upcoming Event Preview": "scene_preview_elem_Q8O6AQoe",
      "Upcoming Event Count": "participant_count_elem_59t0tB1i",
      "Upcoming Event Title": "text_elem_tbAgI2Tt",

      "Current Event Count": "participant_count_elem_ynaS4OZY",
      "Current Event Preview": "scene_preview_elem_xCDTq7OE",
      "Current Event Title": "text_elem_O0IvEjfN",

      "Previous Event Preview": "scene_preview_elem_Y9A_ud1M",
      "Previous Event Count": "participant_count_elem_quTJNWiy",
      "Previous Event Title": "text_elem_QYgDRVH3",

      "Controller": "iframe_elem_AMrais6H"
    };

    let update = async (kind: string, event: any | null) => {
      if (event) {
        let preview_room = _.find(rooms, {title: event.room});
        if (!preview_room) {
          throw `Invalid room id ${event.room}`;
        }

        let promise1 = ohyay.updateElement(elements[`${kind} Event Preview`], {scenePreviewId: preview_room.id});
        let promise2 = ohyay.updateElement(elements[`${kind} Event Count`], {sceneIds: {[preview_room.id]: true}});
        let promise3 = ohyay.updateElement(elements[`${kind} Event Title`], {text: event.title});

        let [response1, response2, response3] = await Promise.all([promise1, promise2, promise3]);
        if (!response1 || !response2 || !response3) {
          throw `Update to preview failed`;
        }
      }
    };

    let p = ohyay.updateElement(
      elements["Controller"],
      {tags: {previous: prev != null, current: current != null, upcoming: next != null}});

    await Promise.all([update("Previous", prev), update("Current", current), update("Upcoming", next), p]);
  }

  async function evening() {
    let elements = await ohyay.getRoomElements(current_room_id);

    rooms
      .filter(room => room.expiration !== undefined)
      .forEach(room => {
        let template_id = room.expiration!.templateSceneId;
        let template = _.find(rooms, {id: template_id});
        if (!template) {
          throw `Template ${template_id} could not be found`;
        }
        if (template.title.includes("Skribbl")) {
          let preview = {
            scenePreviewId: room.id,
            bounds: {
              x: 160.,
              y: 450.,
              w: 200.,
              h: 120.
            }
          };
          //ohyay.addElement(hub.id, "scene_preview", preview);
        }
      });
  }
}

window.addEventListener('message', ev => {
  if (ev.source == window.parent && ev.data.type == 'addApis') {
    main();
  }
});
