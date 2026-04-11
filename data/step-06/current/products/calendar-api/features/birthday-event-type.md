---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.878Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Birthday event type"
feature_slug: "birthday-event-type"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
  - "https://developers.google.com/workspace/calendar/api/guides/errors"
keywords:
  - "new"
  - "birthday"
  - "type"
  - "event"
  - "calendar"
  - "added"
  - "the"
  - "api"
---

# Birthday event type

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API added the new birthday eventType for creating and managing recurring annual birthday events and filtering them via events.list and events.watch.

## Extended Definition

The Calendar API added the new birthday eventType for creating and managing recurring annual birthday events and filtering them via events.list and events.watch.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)

## Supporting Pages

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The API supports the watch method to subscribe to changes on birthday events on Google Calendar. eventTypes can be set to 'birthday' to subscribe to updates on birthday events.
- Paste the following into the code editor. const CALENDAR ID = ' CALENDAR ID ' 'primary' ; / Lists default events. / function listDefaultEvents () { listEvents ( 'default' ); } / Lists birthday events. / function listBirthdays () { listEvents ( 'birthday' ); } / Lists events from Gmail. / function listEventsFromGmail () { listEvents ( 'fromGmail' ); } / Lists events with the given event type.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/list / function listEvents ( eventType = undefined ) { // Query parameters for the list request. const optionalArgs = { eventTypes : eventType ? [ eventType ] : undefined , singleEvents : true , timeMax : '2024-07-30T00:00:00+01:00' , timeMin : '2024-07-29T00:00:00+01:00' , } try { var response = Calendar .
- The API allows creating birthday events using the insert method with the following specifications: eventType is set to 'birthday' . start and end fields need to define an all-day event which spans exactly one day. visibility field value must be 'private' . transparency field value must be 'transparent' .

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reminders () . setUseDefault ( false ) . setOverrides ( Arrays . asList ( reminderOverrides )); event . setReminders ( reminders ); String calendarId = "primary" ; event = service . events (). insert ( calendarId , event ). execute (); System . out . printf ( "Event created: %s\n" , event . getHtmlLink ()); JavaScript // Refer to the JavaScript quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/js // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' } ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 } ] } }; const request = gapi . client . calendar . events . insert ({ 'calendarId' : 'primary' , 'resource' : event }); request . execute ( function ( event ) { appendPre ( 'Event created: ' + event . htmlLink ); }); Node.js // Refer to the Node.js quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/node // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, }; calendar . events . insert ({ auth : auth , calendarId : 'primary' , resource : event , }, function ( err , event ) { if ( err ) { console . log ( 'There was an error contacting the Calendar service: ' + err ); return ; } console . log ( 'Event created: %s' , event . htmlLink ); }); PHP $event = new Google Service Calendar Event(array( 'summary' => 'Google I/O 2015', 'location' => '800 Howard St., San Francisco, CA 94103', 'description' => 'A chance to hear more about Google\'s developer products.', 'start' => array( 'dateTime' => '2015-05-28T09:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'end' => array( 'dateTime' => '2015-05-28T17:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'recurrence' => array( 'RRULE:FREQ=DAILY;COUNT=2' ), 'attendees' => array( array('email' => 'lpage@example.com'), array('email' => 'sbrin@example.com'), ), 'reminders' => array( 'useDefault' => FALSE, 'overrides' => array( array('method' => 'email', 'minutes' => 24 60), array('method' => 'popup', 'minutes' => 10), ), ), )); $calendarId = 'primary'; $event = $service->events->insert($calendarId, $event); printf('Event created: %s\n', $event->htmlLink); Python Refer to the Python quickstart on how to setup the environment: https://developers.google.com/workspace/calendar/quickstart/python Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any stored credentials. event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google \' s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : False , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, } event = service . events () . insert ( calendarId = 'primary' , body = event ) . execute () print 'Event created: %s ' % ( event . get ( 'htmlLink' )) Ruby event = Google :: Apis :: CalendarV3 :: Event . new ( summary : 'Google I/O 2015' , location : '800 Howard St., San Francisco, CA 94103' , description : 'A chance to hear more about Google \' s developer products.' , start : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T09:00:00-07:00' , time zone : 'America/Los Angeles' ), end : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T17:00:00-07:00' , time zone : 'America/Los Angeles' ), recurrence : [ 'RRULE:FREQ=DAILY;COUNT=2' ] , attendees : [ Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'lpage@example.com' ), Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'sbrin@example.com' ) ] , reminders : Google :: Apis :: CalendarV3 :: Event :: Reminders . new ( use default : false , overrides : [ Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'email' , minutes : 24 60 ), Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'popup' , minutes : 10 ) ] ) ) result = client . insert event ( 'primary' , event ) puts "Event created: #{ result . html link } " Add Drive attachments to events You can attach Google Drive files such as meeting notes in Docs, budgets in Sheets, presentations in Slides, or any other relevant Google Drive files to your calendar events.
- The following code example demonstrates how to update an existing event to add an attachment: Java public static void addAttachment ( Calendar calendarService , Drive driveService , String calendarId , String eventId , String fileId ) throws IOException { File file = driveService . files (). get ( fileId ). execute (); Event event = calendarService . events (). get ( calendarId , eventId ). execute (); List<EventAttachment> attachments = event . getAttachments (); if ( attachments == null ) { attachments = new ArrayList<EventAttachment> (); } attachments . add ( new EventAttachment () . setFileUrl ( file . getAlternateLink ()) . setMimeType ( file . getMimeType ()) . setTitle ( file . getTitle ())); Event changes = new Event () . setAttachments ( attachments ); calendarService . events (). patch ( calendarId , eventId , changes ) . setSupportsAttachments ( true ) . execute (); } PHP function addAttachment($calendarService, $driveService, $calendarId, $eventId, $fileId) { $file = $driveService->files->get($fileId); $event = $calendarService->events->get($calendarId, $eventId); $attachments = $event->attachments; $attachments[] = array( 'fileUrl' => $file->alternateLink, 'mimeType' => $file->mimeType, 'title' => $file->title ); $changes = new Google Service Calendar Event(array( 'attachments' => $attachments )); $calendarService->events->patch($calendarId, $eventId, $changes, array( 'supportsAttachments' => TRUE )); } Python def add attachment ( calendarService , driveService , calendarId , eventId , fileId ): file = driveService . files () . get ( fileId = fileId ) . execute () event = calendarService . events () . get ( calendarId = calendarId , eventId = eventId ) . execute () attachments = event . get ( 'attachments' , []) attachments . append ({ 'fileUrl' : file [ 'alternateLink' ], 'mimeType' : file [ 'mimeType' ], 'title' : file [ 'title' ] }) changes = { 'attachments' : attachments } calendarService . events () . patch ( calendarId = calendarId , eventId = eventId , body = changes , supportsAttachments = True ) . execute () Important: You must perform a full sync of all events before enabling the supportsAttachments parameter for event modifications when adding attachments support into your existing app that stores events locally.
- Besides the type , the conferenceSolution also provides the name and the iconUri fields that you can use to represent the conference solution as shown below: JavaScript const solution = event . conferenceData . conferenceSolution ; const content = document . getElementById ( "content" ); const text = document . createTextNode ( "Join " + solution . name ); const icon = document . createElement ( "img" ); icon . src = solution . iconUri ; content . appendChild ( icon ); content . appendChild ( text ); You can create a new conference for an event by providing a createRequest with a newly generated requestId which can be a random string .
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.

### Handle API errors \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This error can also occur if a request attempts to delete an event that has already been deleted. { "error": { "errors": [ { "domain": "calendar", "reason": "fullSyncRequired", "message": "Sync token is no longer valid, a full sync is required.", "locationType": "parameter", "location": "syncToken", } ], "code": 410, "message": "Sync token is no longer valid, a full sync is required." } } or { "error": { "errors": [ { "domain": "calendar", "reason": "updatedMinTooLongAgo", "message": "The requested minimum modification time lies too far in the past.", "locationType": "parameter", "location": "updatedMin", } ], "code": 410, "message": "The requested minimum modification time lies too far in the past." } } or { "error": { "errors": [ { "domain": "global", "reason": "deleted", "message": "Resource has been deleted" } ], "code": 410, "message": "Resource has been deleted" } } Suggested action: For the syncToken or updatedMin parameters, wipe the store and re-sync.
- Shared properties (for example, guestsCanInviteOthers , guestsCanModify , or guestsCanSeeOtherGuests ) can only be set by the organizer. { "error": { "errors": [ { "domain": "calendar", "reason": "forbiddenForNonOrganizer", "message": "Shared properties can only be changed by the organizer of the event." } ], "code": 403, "message": "Shared properties can only be changed by the organizer of the event." } } Suggested actions: If you're using Events: insert , Events: import , or Events: update , and your request doesn't include any shared properties, this is equivalent to trying to set them to their default values.
- 403: Rate Limit Exceeded The user has reached Google Calendar API's maximum request rate per calendar or per authenticated user. { "error": { "errors": [ { "domain": "usageLimits", "reason": "rateLimitExceeded", "message": "Rate Limit Exceeded" } ], "code": 403, "message": "Rate Limit Exceeded" } } Suggested action: rateLimitExceeded errors can return either 403 or 429 error codes—currently they are functionally similar and should be responded to in the same way, by using exponential backoff .
- This can mean that a required field or parameter has not been provided, the value supplied is invalid, or the combination of provided fields is invalid. { "error": { "errors": [ { "domain": "calendar", "reason": "timeRangeEmpty", "message": "The specified time range is empty.", "locationType": "parameter", "location": "timeMax", } ], "code": 400, "message": "The specified time range is empty." } } Suggested action: Because this is a permanent error, do not retry.

