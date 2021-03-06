interface Window {
  ohyay: {
    // ==== The following APIs are available when the <iframe> is loaded ====

    // Set a listener that is called when the ohyay API is loaded
    setApiLoadedListener(listener: () => void): void;

    // Register a handler that is called with the "Post Message" action of the Website element
    // is invoked. The 'arg' parameter is the value of the "Post Message Arg" property of the
    // Website element.
    registerMessageHandler(handler: (arg: string) => void): void;

    // ==== The following APIs are available only after the API is loaded ====

    // Add a new element to the specified room. Returns the id of the new element.
    addElement(roomId: string, type: string, data: Partial<AnyElement>): Promise<string>;

    // Assigns a participant to the specified element.
    addParticipant(elementId: string, userId: string, streamId?: string): Promise<string>;

    // Add a new room to the workspace. Returns the id of the new room.
    addRoom(data: Partial<Room>): Promise<string>;

    getCurrentRoomId(): Promise<string>;

    getCurrentUserId(): Promise<string>;

    getRoomElements(roomId: string, ...tagsOrTitles: string[]): Promise<Partial<AnyElement>[]>;

    getRoomById(roomId: string): Promise<Room>;

    getRooms(...tags: string[]): Promise<Room[]>;

    getRoomUsers(roomId: string, ...tags: string[]): Promise<{ [id: string]: User }>;

    getUser(userId: string): Promise<User | null>;

    getWorkspaceElements(...tags: string[]): Promise<Partial<AnyElement>[]>;

    getWorkspaceUsers(...tags: string[]): Promise<{ [id: string]: User }>;

    getElementTyes(): Promise<string[]>;

    // Gets all properties for an element.  Values in the returned object are either the
    // the default value of the properties, or 'invokable', indicating a an invokable Action.
    getElementTypeInfo(type: string): Promise<{ [prop: string]: string }>;

    // Invoke an Action on an the specified element.
    invoke(elementId: string, invokableId: string): Promise<void>;

    removeElement(roomId: string, elementId: string): Promise<boolean>;

    // Unassigns a participant from the specified element.
    removeParticipant(elementId: string, userId: string, streamId?: string): Promise<string>;

    removeRoom(roomId: string): Promise<boolean>;

    updateElement(elementId: string, update: Partial<AnyElement>): Promise<boolean>;

    updateRoom(roomId: string, update: Partial<Room>): Promise<boolean>;

    updateUser(userId: string, update: Partial<User>): Promise<boolean>;
  }
}

interface User {
  currentRoomId: string,
  name: string,
  tags: { [tag: string]: boolean }
}

interface Element_analog_clock {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  // The color of the hour hand
  handHourColor: string;

  // The color of the minute hand
  handMinuteColor: string;

  // The color of the second hand
  handSecondColor: string;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // Use the timezone of the participant in the specified element
  timezoneForUserInElementId: string;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Enable a fixed timezone for this clock
  useUtcOffset: boolean;

  // The offset from UTC in minutes
  utcOffset: number;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_audio {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // Play this video automatically when any user enters the room
  autoplay: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Whether the media should restart automatically when playback is finished
  loop: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  pausedAtPosition: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // How fast the media should play. A number from 0.0 - 1.0.
  playbackRate: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show play/pause controls to admins or everyone
  showControls: string;

  // Show the browser's native controls. Only for unsynced media
  showNativeControls: boolean;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  startTime: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Do not play in sync, let the user control their own playback with native controls only. Play/pause/reset will not do anything, only the user can control their own video
  unsyncedPlayback: boolean;

  uploading: boolean;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Pause playback of the media for this element.
  pause(): void;

  // Start playing the media for this element.
  play(): void;

  // Delete this element from the scene.
  remove(): void;

  // Reset the play position of the media back to the beginning.
  reset(): void;

  // Stop the playback of the media for this element.
  stop(): void;
}

interface Element_backpack_item {
  _elementData: object;

  _elementDataOwnerId: string;

  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // The participant element with user to show this backpack item for
  participantElementId: string;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // The tag of a backpack item to show in this element
  tagFilter: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_button {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  action: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // When the Apply on Condition is satisfied, apply the Action persistently to the database for all users.
  applyForAllUsers: boolean;

  applyOnCondition: string;

  // The ARIA label for this element
  ariaLabel: string;

  // Only allow one participant to be running the Action at a time
  atomic: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Only allow clicking on the non-transparent parts of the image
  clickOnlyNonTransparent: boolean;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  imageUrl: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // EXPERIMENTAL. Execute sandboxed JavaScript script
  jsScript: string;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // The URL to navigate the participant to when the element is clicked
  linkUrl: string;

  // The room to navigate to when the participant clicks the element
  linkedSceneId: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Repeatedly apply the action (for animations etc)
  repeatAction: boolean;

  // How much to delay between repeats of the action
  repeatDelay: number;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The text to be displayed in this element
  text: string;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Run the action for this button
  doAction(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_buzzer {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Controls whether or not the buzzer can be pressed
  enabled: boolean;

  // A URL pointing to an image to be shown when the buzzer has been buzzed. Click "..." to upload a new image
  enabledUrl: string;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  highlightDuration: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // A URL pointing to an image to be shown when the buzzer has not been buzzed. Click "..." to upload a new image
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_chat {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Setting a channel links chat elements across the workspace. Put the same value into other chat elements to link them to the same channel.
  chatChannel: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Disable input into this element
  disableInput: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  // The background color header of the chat element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  headerColor: string;

  // The size of the font of the header in pixels. It is scaled according to the room width and height
  headerFontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  headerFontWeight: string;

  // The color of the header text of the chat element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  headerTextColor: string;

  // The title to display in the header of the chat element
  headerTitle: string;

  // The background color header of the chat element when there is an unread message. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  headerUnreadColor: string;

  hoverAction: string;

  // Background color of the chat input box
  inputBackgroundColor: string;

  // Color of the text in the chat input box
  inputColor: string;

  // The size of the textbox of the message in pixels. It is scaled according to the room width and height
  inputFontSize: number;

  // Color of the placeholder text in the chat input box
  inputPlaceholderColor: string;

  // Placeholder text in the chat input box
  inputPlaceholderText: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The color of links in messages. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  linkColor: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Background color of the area that shows the messages in the chat box
  messageBackgroundColor: string;

  // Color of messages that appear in the chat box
  messageColor: string;

  // The size of the font of the message in pixels. It is scaled according to the room width and height
  messageFontSize: number;

  // The line height of the font of the message, as a multiplier (e.g. 1.5)
  messageLineHeight: number;

  // Color of sender of messages that appear in the chat box
  messageSenderColor: string;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Background color of the reactions bar
  reactionBarBackgroundColor: string;

  // A comma-separated list of the chat reaction emojis
  reactionEmojis: string;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show the header to participants
  showHeader: boolean;

  // Allows participants to minimize the chat down to just its header
  showMinimize: boolean;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The label to put after the participant count in the chat header
  userCountSuffix: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Remove all the existing chat messages across all chats in the workspace.
  clearAllMessagesInAllChatsAcrossWorkspace(): void;

  // Remove all the existing chat messages.
  clearMessages(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Download the messages.
  downloadMessages(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_circle {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_clock {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show seconds in the display
  showSeconds: boolean;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Enable a fixed timezone for this clock
  useUtcOffset: boolean;

  // The offset from UTC in minutes
  utcOffset: number;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_closed_caption_display {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_closed_caption_input {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_countdown {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The target time to count down towards
  countdownTime: string;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_doorbell {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // The alternate text for the image (eg the `alt` attribute in HTML)
  altText: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // URL to post a message to when a user rings the doorbell.
  discordUrl: string;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Allow participants to edit the contents of this element
  enableUserEdit: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  imageSegment: object;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Only allow clicking on the non-transparent parts of the image
  linkOnlyNonTransparent: boolean;

  // For a link, does the link open in the same tab or make a new tab/window?
  linkOpensInSameWindow: boolean;

  // The URL to navigate the participant to when the element is clicked
  linkUrl: string;

  // The room to navigate to when the participant clicks the element
  linkedSceneId: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Elements to use as a mask to this one
  maskElementIds: object;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // The list of phone numbers to message.
  phoneNumbers: object;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Notifies when a user enters the room.
  ringOnUserEnter: boolean;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // URL to post a message to when a user rings the doorbell.
  slackUrl: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  uploading: boolean;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Create a jigsaw puzzle out of this image. Resize your image element to the final size of the jigsaw then hit this button.
  jigsawImage(): void;

  // Delete this element from the scene.
  remove(): void;

  // Ring the doorball
  ring(): void;

  // Use a lasso tool to cut out parts of this image
  segmentImage(): void;
}

interface Element_double_image {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // The alternate text for the image (eg the `alt` attribute in HTML)
  altText: string;

  altUrl: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Allow participants to edit the contents of this element
  enableUserEdit: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Show the alternate URL instead of the main one
  flipped: boolean;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  imageSegment: object;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Only allow clicking on the non-transparent parts of the image
  linkOnlyNonTransparent: boolean;

  // For a link, does the link open in the same tab or make a new tab/window?
  linkOpensInSameWindow: boolean;

  // The URL to navigate the participant to when the element is clicked
  linkUrl: string;

  // The room to navigate to when the participant clicks the element
  linkedSceneId: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Elements to use as a mask to this one
  maskElementIds: object;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  uploading: boolean;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Flip the image
  flip(): void;

  // Create a jigsaw puzzle out of this image. Resize your image element to the final size of the jigsaw then hit this button.
  jigsawImage(): void;

  // Delete this element from the scene.
  remove(): void;

  // Use a lasso tool to cut out parts of this image
  segmentImage(): void;
}

interface Element_feedback {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  feedback: object;

  // The prompt text to show in the feedback dialog
  feedbackPrompt: string;

  // The title to show in the feedback dialog
  feedbackTitle: string;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  imageUrl: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The text to be displayed in this element
  text: string;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Clears all stored feedback
  clearFeedback(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Downloads all stored feedback
  downloadFeedback(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_grid_video_chat {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  assignedStreams: object;

  // Put this grid chat in audience mode where it holds all participants in the room and displays "Audicence Participants" number of participants with video or audio unmuted.
  audienceMode: boolean;

  // The number of audience members to show
  audienceParticipants: number;

  // The amount of time to wait before rotating audience members (in seconds)
  audienceRotationTime: number;

  // The order in which participants join this element versus others. 0 is the highest priority (i.e. first assigned) and larger numbers are lower priority.
  autoJoinPriority: number;

  // The type of stream (camera or screenshare) that can autojoin this element
  autoJoinStreamType: string;

  // If set, comma-separated list of tags. Only participants with these tags are allowed to autojoin.
  autoJoinTagFilter: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // Blurs the contents of this element in space recordings
  blurInRecording: boolean;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to break out into another room with the participant in this element
  breakoutButtonId: string;

  // How much of a circle the participants are placed on
  circleLayoutArcLength: number;

  // Where on the circle the arc should start
  circleLayoutArcStart: number;

  // How far from the circle center participants should be placed
  circleLayoutCenterDistance: number;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Disable the follow feature from the participant in this element
  disableFollow: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enableParticipantPopOut: boolean;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Allow participants to whisper to each other. Other participants in the room cannot hear the whispers.
  enableWhisper: boolean;

  // The CSS filter to non-participants outside of this chat (e.g. "grayscale() blur(5px)"). Useful if you want to create different "rooms" within the same room.
  externalFilter: string;

  // The audio volume of this chat to non-participants outside of this chat. A number from 0.0 - 1.0. Useful if you want to create different "rooms" of audio within the same room.
  externalVolume: number;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The width of each participant element using a Fixed Size layout
  fixedLayoutParticipantWidth: number;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  // Whether admins can listen in on this video chat while they are not in the chat
  hideHostPeek: boolean;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  // The audio volume of this chat to participants inside of this chat. A number from 0.0 - 1.0. Useful if you want to create different "rooms" of audio within the same space.
  internalVolume: number;

  isNotesElement: boolean;

  // Whether participants will automatically pop into this slot, or must click, or must be manually assigned
  joinMode: string;

  // How much of a curve the participants should be layed out in
  layoutBend: number;

  // How participants should be layed out in this chat
  layoutMode: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // The maximum width or height (in pixels) of a participant element in the grid.
  maxParticipantSize: number;

  // The maximum number of people allowed inside this video chat
  maxParticipants: number;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // Allow participants to click to enter the nook
  nookClickToEnter: boolean;

  nookImageUrl: string;

  // Put participants that enter this grid chat into a "nook" for a more private conversation
  nookSceneId: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // The aspect ratio of the videos of the participants (e.g. 1.33 for 4:3)
  participantAspectRatio: number;

  // The background color for participants in this chat. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  participantBackgroundColor: string;

  // The border color for participant videos
  participantBorderColor: string;

  // The border radius for participant videos. Could be in pixels (eg. 5px) or percentage (eg. 50%).
  participantBorderRadius: string;

  // The style of the border
  participantBorderStyle: string;

  // The border width for participant videos. Could be in pixels (e.g. 5px) or percentage (e.g. 50%).
  participantBorderWidth: number;

  // The shadow for participants in this chat. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (eg. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  participantBoxShadow: string;

  // The radius of the corners for participants in pixels
  participantCornerRadius: number;

  // Whether participants should be completely round
  participantCornersElliptic: boolean;

  // The number of participants currently in the grid chat
  participantCount: number;

  // The horizontal alignment of participants using a Fixed Size layout
  participantHorizontalAlignment: string;

  // How participants should aligned in the box
  participantLinearLayoutAlignment: string;

  // The margin between participant videos, in pixels. It is scaled according to the room width and height
  participantMargin: number;

  // Add a drop shadow to each participant.
  participantShadow: boolean;

  // The blur of the shadow in pixels
  participantShadowBlur: number;

  // The color of the shadow
  participantShadowColor: string;

  // The X-axis offset of the shadow in pixels
  participantShadowX: number;

  // The Y-axis offset of the shadow in pixels
  participantShadowY: number;

  // Show the audio level for the participant as a flashing border.
  participantShowAudioLevel: boolean;

  // The color of the flashing border for the participant audio level.
  participantShowAudioLevelColor: string;

  // The width of the glow for the participant audio level.
  participantShowAudioLevelGlowWidth: number;

  // The width of the flashing border for the participant audio level.
  participantShowAudioLevelWidth: number;

  // How often participants should upload image thumbnails
  participantThumbnailInterval: number;

  // Only show a thumbnail image for the participant instead of video. Room needs to have Participant Thumbnail Interval set to a non-zero value for this to work.
  participantThumbnailOnly: boolean;

  // The thumbnail resolution that participants will publish
  participantThumbnailQuality: string;

  // The vertical alignment of participants using a Fixed Size layout
  participantVerticalAlignment: string;

  participants: object;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Prompt the participant to enable camera and/or microphone when joining this element
  promptForCameraAndMic: boolean;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Tag filter of users to remove when removeUsers is invoked
  removeUsersTagFilter: string;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow admins to control the audio and fullscreening of participants
  showAdminControls: boolean;

  // Automatically show the full names of participants
  showParticipantFullNames: boolean;

  // Automatically show the names of participants
  showParticipantNames: boolean;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;

  // Remove any user that is currently assigned to, or active in, the element
  removeAssignedUsers(): void;

  // Remove the current user that is currently assigned to, or active in, the element
  removeCurrentUsers(): void;

  // Remove any user tagged with the tag in "remove users tag" property
  removeTaggedUsers(): void;
}

interface Element_iframe {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Give the site loaded by this iframe the access to the ohyay API.
  allowApiAccess: boolean;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // An asset for the content of this iframe (allows for easier script editing)
  assetUrl: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  controllerStreamId: string;

  controllerUserId: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // A string to pass to as the argument to the call to postMessage to the iframe contents
  postMessageArg: string;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // How often the iframe should auto-refresh, in seconds.
  refreshInterval: number;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Call postMessage to send a message to the content of this iframe
  postMessage(): void;

  // Force reload the contents of this iframe
  reload(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_image {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // The alternate text for the image (eg the `alt` attribute in HTML)
  altText: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Allow participants to edit the contents of this element
  enableUserEdit: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  imageSegment: object;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Only allow clicking on the non-transparent parts of the image
  linkOnlyNonTransparent: boolean;

  // For a link, does the link open in the same tab or make a new tab/window?
  linkOpensInSameWindow: boolean;

  // The URL to navigate the participant to when the element is clicked
  linkUrl: string;

  // The room to navigate to when the participant clicks the element
  linkedSceneId: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Elements to use as a mask to this one
  maskElementIds: object;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  uploading: boolean;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Create a jigsaw puzzle out of this image. Resize your image element to the final size of the jigsaw then hit this button.
  jigsawImage(): void;

  // Delete this element from the scene.
  remove(): void;

  // Use a lasso tool to cut out parts of this image
  segmentImage(): void;
}

interface Element_participant {
  _participantId: string;

  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  assignedParticipantId: string;

  assignedStreamId: string;

  // Mute the audio of the participant
  audioMuted: boolean;

  // The audio volume of the participant. A number from 0.0 - 1.0.
  audioVolume: number;

  // The order in which participants join this element versus others. 0 is the highest priority (i.e. first assigned) and larger numbers are lower priority.
  autoJoinPriority: number;

  // The type of stream (camera or screenshare) that can autojoin this element
  autoJoinStreamType: string;

  // If set, comma-separated list of tags. Only participants with these tags are allowed to autojoin.
  autoJoinTagFilter: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // Blurs the contents of this element in space recordings
  blurInRecording: boolean;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to break out into another room with the participant in this element
  breakoutButtonId: string;

  // Whether the element should try to chrome key out a range of colors
  chromaKeyOut: boolean;

  // The maximum blue value to key out
  chromaKeyOutBlueMax: number;

  // The minimum blue value to key out
  chromaKeyOutBlueMin: number;

  // The maximum green value to key out
  chromaKeyOutGreenMax: number;

  // The minimum green value to key out
  chromaKeyOutGreenMin: number;

  // The maximum red value to key out
  chromaKeyOutRedMax: number;

  // The minimum red value to key out
  chromaKeyOutRedMin: number;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Disable the follow feature from the participant in this element
  disableFollow: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Allow participants to whisper to each other. Other participants in the room cannot hear the whispers.
  enableWhisper: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  // Whether or not the element has a participant
  hasParticipant: boolean;

  // The color of the highlight border for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  highlightColor: string;

  // Whether the element should be highlighted with a border
  highlighted: boolean;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether this element can only be dragged/rotated by this participant
  interactableOnlyBySelf: boolean;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Whether participants will automatically pop into this slot, or must click, or must be manually assigned
  joinMode: string;

  // The animation to use when a participant joins the room
  joinTransition: string;

  // The animation to use when a participant leaves the room
  leaveTransition: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Elements to use as a mask to this one
  maskElementIds: object;

  // If set, will create a duplicate video stream of the specific participant element
  mirrorParticipantElementId: string;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The horizontal alignment of the name and subtitle
  overlayTextAlign: string;

  // The vertical alignment of the name and subtitle
  overlayVerticalAlign: string;

  // Only the participant in the given element can interact with this element
  owningParticipantElement: string;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // The name to overlay on the participant
  participantName: string;

  // The subtitle to overlay on the participant
  participantSubtitle: string;

  // Only show a thumbnail image for the participant instead of video. Room needs to have Participant Thumbnail Interval set to a non-zero value for this to work.
  participantThumbnailOnly: boolean;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Prompt the participant to enable camera and/or microphone when joining this element
  promptForCameraAndMic: boolean;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow admins to control the audio and fullscreening of participants
  showAdminControls: boolean;

  // Show the audio level for the participant as a flashing border.
  showAudioLevel: boolean;

  // The color of the flashing border for the participant audio level.
  showAudioLevelColor: string;

  // The width of the glow for the participant audio level.
  showAudioLevelGlowWidth: number;

  // The width of the flashing border for the participant audio level.
  showAudioLevelWidth: number;

  // Automatically show the full name of participant
  showParticipantFullName: boolean;

  // Automatically show the name of participant
  showParticipantName: boolean;

  // Whether to automatically show a shared volume slider on shares.
  showShareVolume: boolean;

  streamId: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // The zoom of the video
  zoom: number;

  // The zoom left position of the video
  zoomLeftOffset: number;

  // The zoom top position of the video
  zoomTopOffset: number;

  // Capture an image of the current video and add to a Picture Strip element in Video Capture mode.
  captureImage(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;

  // Remove any user that is currently assigned to, or active in, the slot
  removeAssignedUser(): void;

  // Pick two colors to set up a Chroma Key Out
  setupChromaKeyOut(): void;
}

interface Element_participant_count {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  // The margin for the columns of names.
  columnMargin: number;

  // The width for the columns of names. 0 is autosize.
  columnWidth: number;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The count of participants in this element.
  count: number;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // How to display the count of participants
  displayMode: string;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // How many fake participants to put in this element
  fakeParticipantCount: number;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // The size of the icon for paricipant in room pixels
  iconSize: number;

  iconUrl: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // The room to navigate to when the participant clicks the element
  linkedSceneId: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // The list of rooms to count
  sceneIds: object;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The comma-separated list of workspace IDs.
  workspaceIds: string;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_participant_mixer {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // The number of participants to play audio for
  participantCount: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // The amount of time to wait before rotating participants (in seconds)
  rotationTime: number;

  // The list of rooms to mix participants' audio
  sceneIds: object;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_path {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  createdAt: number;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  lineWidth: number;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  packedPoints: string;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  points: object;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_picture_strip {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Number of seconds before pictures in the picture strip fade out
  fadeOutDelaySecs: number;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // The maximum number of pictures to display.
  maxDisplayedPictureCount: number;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // Whether to run as a picture strip of a photo both (along with a Take Picture element), or display captures taken by Participant Videos via the Capture Image invokable.
  mode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Remove all previous video captures from this room.
  clearVideoCaptures(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Download all photos in this picture strip
  downloadPhotos(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_poll {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  enabled: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  optionBackgroundColor: string;

  optionBorderRadius: string;

  optionColor: string;

  // Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  optionHoverBackgroundColor: string;

  optionMargin: number;

  optionPadding: number;

  // Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  optionResultBackgroundColor: string;

  // Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  optionSelectedBackgroundColor: string;

  options: object;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  question: string;

  // Font size for the question
  questionFontSize: number;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  showPollResults: boolean;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  votes: object;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;

  // Reset the voting for this poll
  reset(): void;

  // Show the results of the poll to all users
  showResults(): void;
}

interface Element_question_board {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Allow participants to ask questions anonymously
  allowAnon: boolean;

  // Allow down voting for questions
  allowDownVoting: boolean;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  // Background color of the header bar
  headerBgColor: string;

  // Text color for question board header
  headerColor: string;

  // Text to display in question board header
  headerTitle: string;

  // Background color of the header bar if there are unread questions
  headerUnreadBgColor: string;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // The placeholder text to display in the text field
  placeholderText: string;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show a header bar on the question board
  showHeader: boolean;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Clears all questions from the board
  clearQuestions(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_randomSource {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Set a fixed random seed so all the random numbers are always in the same order.
  randomSeed: string;

  // Exclusive maximum of this random source
  rangeMax: number;

  // Inclusive minimum of this random source
  rangeMin: number;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_rectangle {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_remote_audio {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // Select "Yes" to have the media autoplay and "No" to stop it
  autoplay: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  // Allows participants to click the element to play/pause
  clickToPlayPause: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Hides the static background when the media is loading
  disableLoadingStatic: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Whether the media should restart automatically when playback is finished
  loop: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  playing: boolean;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Time to seek to when seek is invoked
  seekTime: number;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show media controls to participants
  showControls: boolean;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The number of seconds to fade in/out the volume
  volumeFadeTime: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Start playing the media for this element.
  pause(): void;

  // Start playing the media for this element.
  play(): void;

  // Delete this element from the scene.
  remove(): void;

  // Seeks to the time set in seekTime
  seek(): void;

  // Stop playing the media for this element.
  stop(): void;
}

interface Element_remote_video {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // Select "Yes" to have the media autoplay and "No" to stop it
  autoplay: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  // Allows participants to click the element to play/pause
  clickToPlayPause: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Hides the static background when the media is loading
  disableLoadingStatic: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Whether the media should restart automatically when playback is finished
  loop: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  playing: boolean;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Time to seek to when seek is invoked
  seekTime: number;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show media controls to participants
  showControls: boolean;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The number of seconds to fade in/out the volume
  volumeFadeTime: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Start playing the media for this element.
  pause(): void;

  // Start playing the media for this element.
  play(): void;

  // Delete this element from the scene.
  remove(): void;

  // Seeks to the time set in seekTime
  seek(): void;

  // Stop playing the media for this element.
  stop(): void;
}

interface Element_remote_youtube {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  playing: boolean;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The video to start playing
  videoUrl: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_scene_preview {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Whether to allow the participants to interact with elements in the room preview
  allowInteraction: boolean;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Whether clicking on the room preview should take you to the room
  linkToScene: boolean;

  // The URL to navigate the participant to when the element is clicked
  linkUrl: string;

  // The volume adjustment for the live music for the previewed room
  liveMusicVolume: number;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // The volume adjustment for the participants in the previewed room
  participantAudioVolume: number;

  // How often participants should upload image thumbnails
  participantThumbnailInterval: number;

  // Only show a thumbnail image for the participant instead of video. Room needs to have Participant Thumbnail Interval set to a non-zero value for this to work.
  participantThumbnailOnly: boolean;

  // The thumbnail resolution that participants will publish
  participantThumbnailQuality: string;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // The room to preview in this element
  scenePreviewId: string;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_scheduled_time {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // The time of the event in milliseconds since Jan 1 1970 UTC
  eventTime: number;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // The date of the event to displayed to the participant in their own timezone
  scheduledDate: string;

  // The time of the event to displayed to the participant in their own timezone
  scheduledTime: string;

  // A string used to format the displayed time
  scheduledTimeDisplay: string;

  // How to display this scheduled time (formatting syntax is http://blog.stevenlevithan.com/archives/date-time-format)
  scheduledTimeFormatString: string;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_shuffle_users {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  // Configuration for shuffling
  config: string;

  // If enabled show a confirmation dialog before running.
  confirmOnRun: string;

  // If confirm is enabled, the popup text on the confirmation dialog.
  confirmText: string;

  // Comma-separated list of choices for the confirmation dialog (ok,cancel).
  confirmTextChoices: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The text to be displayed in this element
  text: string;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Do the breakout.
  breakout(): void;

  // Clear history of matched users/rooms
  clearHistory(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_stopwatch {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  resumeTime: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Whether the timer is currently running.
  running: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show a reset button that can be clicked by any user
  showResetButton: boolean;

  // The start time in ms since epoch for this timer.
  startTime: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;

  // Reset the timer
  reset(): void;

  // Start or stop the timer
  startStop(): void;
}

interface Element_take_picture {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  // Number of seconds to cool down after taking picture
  cooldownSecs: number;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // Number of seconds to count down before taking picture
  countdownSecs: number;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  imageUrl: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The text to be displayed in this element
  text: string;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;

  // Take a picture of this scene
  takePicture(): void;
}

interface Element_text {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // Try to automatically size the text to fit the box
  autoFitText: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Copies the text to the clipboard when clicked
  clickCopyToClipboard: boolean;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // Allow participants to edit the contents of this element
  enableUserEdit: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // For a link, does the link open in the same tab or make a new tab/window?
  linkOpensInSameWindow: boolean;

  // The URL to navigate the participant to when the element is clicked
  linkUrl: string;

  // The room to navigate to when the participant clicks the element
  linkedSceneId: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // The maximum number of characters allowed to be input
  maxChars: number;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The text to be displayed in this element
  text: string;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_timer {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  resumeTime: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Whether the timer is currently running.
  running: boolean;

  // The seconds remaining when a timer is running.
  secondsRemaining: number;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // The negative time after the timer hits zero.
  showNegativeTime: boolean;

  // Show a reset button that can be clicked by any user
  showResetButton: boolean;

  // The start time in ms since epoch for this timer.
  startTime: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // The duration of the timer in seconds
  timerDuration: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;

  // Reset the timer
  reset(): void;

  // Start or stop the timer
  startStop(): void;
}

interface Element_triangle {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_user_search {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Placeholder text in search box.
  placeholderText: string;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // The list of rooms to search for participants. Leave blank to search all rooms
  sceneIds: object;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show all participants in the space when the search input is focused
  showAllUsers: boolean;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_video {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // Play this video automatically when any user enters the room
  autoplay: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Whether the media should restart automatically when playback is finished
  loop: boolean;

  // Elements to use as a mask to this one
  maskElementIds: object;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  pausedAtPosition: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // How fast the media should play. A number from 0.0 - 1.0.
  playbackRate: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show play/pause controls to admins or everyone
  showControls: string;

  // Show the browser's native controls. Only for unsynced media
  showNativeControls: boolean;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  startTime: number;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // Do not play in sync, let the user control their own playback with native controls only. Play/pause/reset will not do anything, only the user can control their own video
  unsyncedPlayback: boolean;

  uploading: boolean;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Pause playback of the media for this element.
  pause(): void;

  // Start playing the media for this element.
  play(): void;

  // Delete this element from the scene.
  remove(): void;

  // Reset the play position of the media back to the beginning.
  reset(): void;

  // Stop the playback of the media for this element.
  stop(): void;
}

interface Element_waiting_list {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Allow users to remove themselves after signing up.
  allowRemove: boolean;

  // Allow admins to reorder to list.
  allowReorder: boolean;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // The text color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  color: string;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // Allow participants to be notified via SMS by admins
  enableNotifications: boolean;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // The font to use for this element. Uses comma-separated CSS syntax (e.g. "Verdana, Arial, Helvetica"). Click on '...' to pick a font.
  fontFamily: string;

  // The size of the font for this element in pixels. It is scaled according to the room width and height
  fontSize: number;

  // The weight of the font for this element in pixels in CSS syntax (e.g. "bold" or "500")
  fontWeight: string;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  // The color of highlighted participants in the queue
  highlightColor: string;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // The height of lines of text in the element in CSS syntax (e.g. "16px" or "1.5")
  lineHeight: string;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  queuedUsers: object;

  // The number of digits to show in the rank.
  rankDigits: number;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show the rank the user.
  showRank: boolean;

  // Show the time the participant started waiting
  showTime: boolean;

  // The base time for Show Time
  showTimeSince: number;

  // If set, show how much time has passed for each user since Start Date and Time.
  startDate: string;

  // If set, show how much time has passed for each user since Start Date and Time.
  startTime: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // The horizontal alignment of the text
  textAlign: string;

  // Decoration. Try "underline", "overline", "line-through"
  textDecoration: string;

  // The shadow for this text in this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  textShadow: string;

  // The blur of the shadow
  textShadowBlur: number;

  // The color of the shadow
  textShadowColor: string;

  // Add a text shadow to this text in this element
  textShadowEnabled: boolean;

  // The X-axis offset of the shadow
  textShadowX: number;

  // The Y-axis offset of the shadow
  textShadowY: number;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // The vertical alignment of the text
  verticalAlign: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // Whether the text should wrap
  wordWrap: boolean;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Remove all the existing wait list users.
  clearWaitList(): void;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Join the wait list
  joinWaitList(): void;

  // Delete this element from the scene.
  remove(): void;
}

interface Element_web_media {
  _title: string;

  // The keyboard shortcut access key for this element
  accessKey: string;

  // Animate changes to the size or position of this element
  animateTransitions: boolean;

  // What type of timing curve to use for animations of this element
  animateTransitionsCurve: string;

  // How long to animation changes to size and position of this element (in seconds)
  animateTransitionsDuration: number;

  // The ARIA label for this element
  ariaLabel: string;

  // Select "Yes" to have the media autoplay and "No" to stop it
  autoplay: boolean;

  // The background color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  backgroundColor: string;

  backpackShareId: string;

  backpackUserId: string;

  // A CSS-specifier for the border of this element (e.g. "solid 1px white"). Override all other border properties.
  border: string;

  // The border color for the element. Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  borderColor: string;

  // A CSS-specifier for border radius for this element. Could be in pixels (e.g. 5px) or percentage (e.g. 50%). Overrides Corner Radius.
  borderRadius: string;

  // The style of the border
  borderStyle: string;

  // The width of the border
  borderWidth: number;

  // The shadow for this element. Specified in CSS format with pixels and color: "horizontal-offset vertical-offset blur color" (e.g. "1px 1px 5px rgba(0, 0, 0, 0.5)")
  boxShadow: string;

  // Allows participants to make the element fullscreen for themselves
  clickToFullscreen: boolean;

  // Allows participants to click the element to play/pause
  clickToPlayPause: boolean;

  colorMatrix: string;

  copySourceId: string;

  // The radius of the corners for this element in pixels
  cornerRadius: number;

  // Make your element completely round
  cornersElliptic: boolean;

  // The size of the custom cursor in pixels
  cursorSize: number;

  cursorUrl: string;

  // The CSS matrix3d transform to apply to the element. Hold down 'd' to edit visually...
  deformation: object;

  // Enable participants to delete this element from the room
  deletable: boolean;

  // Hides the static background when the media is loading
  disableLoadingStatic: boolean;

  // Enable participants to drag this element around the room. All participants will see the element being dragged around in real-time.
  draggable: boolean;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapX: number;

  // If greater than 0, snaps the dragging coordinates to a grid of this many pixels.
  draggableGridSnapY: number;

  // The velocity multiplier for the dragging of this element.
  draggableVelocity: number;

  // How much to scale this element while the participant is dragging it along the y-axis
  draggableYScaleFactor: number;

  // If enabled, participants can pop the element into a new, independently draggable and resizable window. Useful for images and screenshares.
  enablePopOut: boolean;

  // A CSS filter to be applied to the element (e.g. "blur(5px)"). Overrides all other filtering.
  filter: string;

  // Adjust the blue level
  filterBlue: number;

  // Adjust the amount of blur
  filterBlur: number;

  // Adjust the brightness. 0 is completely dark, 1 is normal, 1+ is extra bright.
  filterBrightness: number;

  // Adjust the contrast. 0 is completely flat, 1 is normal, 1+ is extra high contrast.
  filterContrast: number;

  // Adjust the green level
  filterGreen: number;

  // Rotate the hue.
  filterHue: number;

  // Adjust the red level
  filterRed: number;

  // Adjust the saturation
  filterSaturate: number;

  // Adjust the sepia level
  filterSepia: number;

  // Whether or not this element should occupy the entire room
  fullscreen: boolean;

  // Whether this element, when fullscreened, should fully cover its space (clipping if necessary), or fit inside the its space.
  fullscreenMode: string;

  // How much of the full screen element should be offset from center in the X axis
  fullscreenOffsetX: number;

  // How much of the full screen element should be offset from center in the Y axis
  fullscreenOffsetY: number;

  // How much of the full screen this element should cover when fullscreened. A number from 0.0 - 1.0.
  fullscreenPercentage: number;

  // The alpha/opacity of the scrim behind the fullscreen element. A number from 0.0 - 1.0.
  fullscreenScrimOpacity: number;

  // The height of the element. It is scaled according to the room width and height
  h: number;

  hoverAction: string;

  // Whether this element can only be dragged/rotated/etc by the participant in the specified element
  interactableByParticipantElementId: string;

  // Whether this element can only be dragged/rotated/etc by users with the specified tags. Separate tags with commas.
  interactableByUserTags: string;

  // Whether the element is brought to the front of all other elements when interacted with
  interactionBringsToFront: boolean;

  isNotesElement: boolean;

  // Locks the element so it cannot be selected in the editor by clicking on it
  locked: boolean;

  // Whether the media should restart automatically when playback is finished
  loop: boolean;

  // Set CSS mix-blend-mode, controlling how the element blends with its parent
  mixBlendMode: string;

  // The opacity (aka alpha) of the element. A number from 0.0 - 1.0 (where 0.0 is transparent and 1.0 is opaque).
  opacity: number;

  // The amount of internal padding this element should have, in pixels. It is scaled according to the room width and height
  padding: number;

  // Add a perspective shadow to the element
  perspectiveShadow: boolean;

  // The angle of the shadow in degrees
  perspectiveShadowAngle: number;

  // The blur of the shadow in pixels
  perspectiveShadowBlur: number;

  // The color of the shadow
  perspectiveShadowColor: string;

  // The height of the shadow as a percentage of the element size
  perspectiveShadowHeight: number;

  // The offset of the shadow as a percentage of the element size
  perspectiveShadowOffset: number;

  // The width of the shadow as a percentage of the element size
  perspectiveShadowWidth: number;

  playing: boolean;

  // Only affect elements tagged with this tag.
  propertyAffectorTagFilter: string;

  // The X position for affecting properties where 0.5 is the center.
  propertyAffectorX: number;

  // The Y position for affecting properties where 0.5 is the middle.
  propertyAffectorY: number;

  propertyAffectors: object;

  // Whether the participants can resize this element
  resizable: boolean;

  // The maximum height for resizing
  resizableMaxHeight: number;

  // The maximum width for resizing
  resizableMaxWidth: number;

  // The minimum height for resizing
  resizableMinHeight: number;

  // The minimum width for resizing
  resizableMinWidth: number;

  // Whether the participants can rotate this element on the room. All participants will see the element being rotated in real-time.
  rotatable: boolean;

  // Time to seek to when seek is invoked
  seekTime: number;

  // Add a drop shadow to this element
  shadow: boolean;

  // The blur of the shadow in pixels
  shadowBlur: number;

  // The color of the shadow
  shadowColor: string;

  // The spread of the shadow in pixels
  shadowSpread: number;

  // The X-axis offset of the shadow in pixels
  shadowX: number;

  // The Y-axis offset of the shadow in pixels
  shadowY: number;

  // Show media controls to participants
  showControls: boolean;

  // Whether this element should fully cover its space (clipping if necessary) or fit inside the its space
  sizeMode: string;

  // Allow users to take this item and put it in their backpack
  takeable: boolean;

  // A CSS transform to be applied to the element (e.g. "rotate(90deg)"). Overrides other transform properties.
  transform: string;

  // A CSS transform-origin to be applied to the element (e.g. "50% 50%").
  transformOrigin: string;

  // The perspective view for a 3D transformed element as a % of the room width
  transformPerspective: number;

  // The 3D rotation around the X-axis
  transformRotateX: number;

  // The 3D rotation around the Y-axis
  transformRotateY: number;

  // The 3D rotation around the Z-axis
  transformRotateZ: number;

  // The scaling along the X-axis
  transformScaleX: number;

  // The scaling along the Y-axis
  transformScaleY: number;

  // The skew along the X-axis
  transformSkewX: number;

  // The skew along the Y-axis
  transformSkewY: number;

  type: string;

  // Specifies where UI (e.g. popout buttons) for the element will appear
  uiAlignment: string;

  // URL pointing to a specific asset
  url: string;

  // Make the element visible to participants
  visible: boolean;

  visibleForCondition: string;

  // Show this element only when there are a certain number of participants in the room
  visibleForNumberOfParticipants: number;

  // Show this element only when there are a certain number of participants in the specified room. If empty, uses the current room.
  visibleForNumberOfParticipantsInSceneId: string;

  // The ID of the participant element this element is bound to. It will only show it that element has an online participant.
  visibleForParticipantElementId: string;

  // The audio volume of the media. A number from 0.0 - 1.0.
  volume: number;

  // The number of seconds to fade in/out the volume
  volumeFadeTime: number;

  // The width of the element. It is scaled according to the room width and height
  w: number;

  // The X coordinate for the position of the element. It is scaled according to the room width and height
  x: number;

  // The Y coordinate for the position of the element. It is scaled according to the room width and height
  y: number;

  // The z-index of the element, controlling which element is on top of other elements
  zIndex: number;

  // Create a duplicate of this element and add it to the scene.
  clone(): void;

  // Create a duplicate of this element and ask the user where to put it.
  cloneWithLocationPrompt(): void;

  // Start playing the media for this element.
  pause(): void;

  // Start playing the media for this element.
  play(): void;

  // Delete this element from the scene.
  remove(): void;

  // Seeks to the time set in seekTime
  seek(): void;

  // Stop playing the media for this element.
  stop(): void;
}

interface Room {
  id: string;

  // Allow participants to paint on the room
  allowPainting: boolean;

  // The volume of audio reactions.
  audioReactionVolume: number;

  // Auto play live music
  autoplayLiveMusic: boolean;

  // The background specification
  backgroundSpec: object;

  // Enable backpack functionality for this room
  backpackEnabled: boolean;

  copySourceId: string;

  // The default font family.
  defaultFontFamily: string;

  // The default video resolution that participants will publish to the workspace. For spaces with smaller participant elements, use lower quality for better performance.
  defaultParticipantVideoQuality: string;

  // The state of the door to this Room
  doorState: string;

  elementGroups: object;

  // Allows participants in the scene to send audio reactions.
  enableAudioReactions: boolean;

  // Allows participants in the room to send reactions
  enableReactions: boolean;

  // Allow all participants to share their screen (overrides the workspace setting)
  enableScreenshare: boolean;

  enableScreenshareEmails: string;

  // Enable a select set of participants to share their screen (overrides the workspace setting). Allows all participants if empty.
  enableScreenshareUserIds: object;

  // Enable a select set of participants to share their screen based on user tags.
  enableScreenshareUserTags: object;

  // Changes audio volume of participants based on distance from each other on screen
  enableSpatialAudioVolume: boolean;

  externalBroadcasts: object;

  // The height of the room in pixels
  h: number;

  // Select "Yes" to hide the activity feed icon and box (if it is enabled in the workspace).
  hideFeed: boolean;

  // Select "Yes" to hide the navigation menu on the left (if it is enabled in the workspace).
  hideSceneWalker: boolean;

  liveMusicUrl: string;

  // The volume of the background live music. A number from 0.0 - 1.0.
  liveMusicVolume: number;

  // The color of the margin around the room canvas Uses CSS color syntax (eg "red", "blue") or RGB (e.g. "#ff0000" or "rgba(255, 0, 0, 1)")
  marginColor: string;

  // Maximum number of people who can be in the room at one time. Others who try to join will get an error message.
  maxParticipants: number;

  // The mood playlist to use
  mood: string;

  navThumbnail: string;

  // The room in the navigator that hold the participants in this room.
  navigationParentSceneId: string;

  // Make this a lobby-style room where people do not send live video streams in
  noVideo: boolean;

  notesAreLocked: boolean;

  // The number of fake participants to show in the room for testing
  numFakeParticipants: number;

  // Allows video chat participants to be dragged from element to element in the room
  participantDraggingMode: string;

  // The background color for dragged participant drop targets
  participantDropTargetBackgroundColor: string;

  // The CSS border style for dragged participant drop targets
  participantDropTargetBorder: string;

  participantThumbnailInterval: number;

  participantThumbnailQuality: string;

  // A list of user tags for participants who will publish at higher quality
  participantVideoHighQualityOverride: object;

  // Disable space-wide music, even if no music is playing in this scene
  pauseWorkspaceMusic: boolean;

  // How high the reaction emojis will float in the canvas: 0 being the bottom of the screen and 1 being the top
  reactionEmojiHeight: number;

  // A comma-separated list of the reaction emojis
  reactionEmojis: string;

  // A list of custom reaction images
  reactionImages: object;

  // The maximum inflation for reaction emojis
  reactionMaxInflation: number;

  // Allow participants to choose custom reactions to send to all other participants
  reactionsAllowCustom: boolean;

  // Allow participants to send text reactions to all other participants
  reactionsAllowText: boolean;

  // Send reactions sent from this room to the specified target room
  reactionsTargetSceneId: string;

  // Controls the default opacity of the reactions UI for all participants
  reactionsUiOpacity: number;

  // How much of the width of the canvas the reactions can occupy: 0 being just the right side and 1 being the whole canvas
  reactionsWidth: number;

  // Only allow select users or users with specific tags to access the room
  restrictAccess: boolean;

  // User emails for specific users who are allowed to access the room
  restrictUserIds: object;

  // User emails for specific users who are allowed to access the room
  restrictUserTags: object;

  // Displays the mouse pointers of all participants in the room
  showPointers: boolean;

  // Displays participant's own name under a custom mouse pointer
  showPointersOwnNameOnCustom: boolean;

  // Restrict mouse pointers to users with these tags
  showPointersTagFilter: object;

  // How far on the room participants can hear each other as a percentage of the room size
  spatialAudioVolumeDistance: number;

  // If set, do not show the live preview in this room when broadcasting
  suppressLivePreview: boolean;

  // A list of tags that can be used for searching/scripting/etc
  tags: object;

  // The title of the scene
  title: string;

  // Specifies the effect to use when transitioning to this room
  transition: string;

  // The width of the room in pixels
  w: number;

  // Select "Yes" to have the Room available in the Room Menu and "No" to hide it
  walkable: boolean;

  // If room is hidden from navigator by default, show it for these users.
  walkableUserIds: object;

  // If room is hidden from navigator by default, show it for users with these tags.
  walkableUserTags: object;

  // Remove all participants assigned manually or via click
  clearAssignedParticipants(): void;

  // Close the door to this room. Other users will be warned before entering. The door will be automatically opened after the last user leaves the room.
  closeDoor(): void;

  // Invite other users to this scene.
  inviteUsers(): void;

  // Lock the door to this room. Other users will be unable to enter. The door will be automatically opened after the last user leaves the room.
  lockDoor(): void;

  // Merge Rooms
  mergeOtherScenesIntoHere(): void;

  // Force current user to go back in their browser history
  navigateCurrentUserBack(): void;

  // Force all users in this scene to go to their previous scene
  navigateUsersBack(): void;

  // Open the door to this room so anyone can enter.
  openDoor(): void;

  // Play the live music for this room.
  playSceneLiveMusic(): void;

  // Use a lasso tool to cut out parts of the background
  segmentImage(): void;

  // Send a text announcement to all users in the workspace.
  sendAnnouncement(): void;

  // Show the room navigator to the user
  showNavigation(): void;

  // Start recording this room
  startSceneRecording(): void;

  // Stop the live music for this room.
  stopSceneLiveMusic(): void;

  // Stop recording this room
  stopSceneRecording(): void;

  // View the transcript of closed captions
  viewCaptions(): void;
}


type ElementKind =
  Element_analog_clock |
  Element_audio |
  Element_backpack_item |
  Element_button |
  Element_buzzer |
  Element_chat |
  Element_circle |
  Element_clock |
  Element_closed_caption_display |
  Element_closed_caption_input |
  Element_countdown |
  Element_doorbell |
  Element_double_image |
  Element_feedback |
  Element_grid_video_chat |
  Element_iframe |
  Element_image |
  Element_participant |
  Element_participant_count |
  Element_participant_mixer |
  Element_path |
  Element_picture_strip |
  Element_poll |
  Element_question_board |
  Element_randomSource |
  Element_rectangle |
  Element_remote_audio |
  Element_remote_video |
  Element_remote_youtube |
  Element_scene_preview |
  Element_scheduled_time |
  Element_shuffle_users |
  Element_stopwatch |
  Element_take_picture |
  Element_text |
  Element_timer |
  Element_triangle |
  Element_user_search |
  Element_video |
  Element_waiting_list |
  Element_web_media;

interface ElementCommon {
  id: string;
  tags: {[key:string]: boolean}
  bounds: {x: number, y: number, w: number, h: number}
  title: string
}

type AnyElement = ElementCommon & ElementKind;
