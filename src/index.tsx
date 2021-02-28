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
          start: '18:30',
          end: '21:00',
          room: 'Panel',
          title: 'DEI Panel'
        }
      ]
    };


    let todays_events = schedule.friday;

    //let now = DateTime.now();

    let now = DateTime.fromISO('10:40');
    let upcoming_events = todays_events.filter(event => {
      let end = DateTime.fromISO(event.end);
      return end > now;
    });

    let current = upcoming_events.length > 0 ? upcoming_events[0] : null;
    let next = upcoming_events.length > 1 ? upcoming_events[1] : null;

    let elements: {[key: string]: string} = {
      "Upcoming Event Preview": "scene_preview_elem_Q8O6AQoe",
      "Upcoming Event Count": "participant_count_elem_59t0tB1i",
      "Upcoming Event Title": "text_elem_tbAgI2Tt",

      "Current Event Count": "participant_count_elem_ynaS4OZY",
      "Current Event Preview": "scene_preview_elem_xCDTq7OE",
      "Current Event Title": "text_elem_O0IvEjfN",
    }

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

    return Promise.all([update("Current", current), update("Upcoming", next)]);
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

/*
   log(ohyay);   // see all available varibles/functions in DevTools
   ohyay.logElementTypes(); // see all available element types in DevTools
   ohyay.logElementTypeInfo('text'); // see all properties for a 'text' element in DevTools

   ohyay.user.tags.newTag = true; // Add a tag to the current user

   log(ohyay.currentSceneId); // log the current room ID
   for (var sceneId in ohyay.scenes) { // loop over all rooms
   var s = ohyay.scenes[sceneId];
   log(s);
   s.title = s.title + ' [modified by script]'; // modify the room title of all rooms

   for (var elementId in s.elements) {
   var e = s.elements[elementId];
   log(e);
   e.title = e.title + ' [modified by script]'; // modify the element title of all elements
   }

   var newEl = ohyay.addElementToScene(s, 'text'); // add a new text element to every room
   newEl.text = 'hi';
   }
   ohyay.save(); // save changes to all scenes, elements, and the current user
 */
