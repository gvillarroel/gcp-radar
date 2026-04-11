---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.886Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Event type field"
feature_slug: "event-type-field"
latest_feature_date: "2021-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
  - "https://developers.google.com/workspace/calendar/api/guides/calendar-status"
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
keywords:
  - "field"
  - "an"
  - "type"
  - "event"
  - "calendar"
  - "added"
  - "the"
  - "api"
---

# Event type field

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API added an eventType field on events to distinguish special event categories such as outOfOffice.

## Extended Definition

The Calendar API added an eventType field on events to distinguish special event categories such as outOfOffice.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)

## Supporting Pages

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The API allows creating birthday events using the insert method with the following specifications: eventType is set to 'birthday' . start and end fields need to define an all-day event which spans exactly one day. visibility field value must be 'private' . transparency field value must be 'transparent' .
- The API supports the watch method to subscribe to changes on birthday events on Google Calendar. eventTypes can be set to 'birthday' to subscribe to updates on birthday events.
- Default event Events with default event type are created and used as one of the main resources of Google Calendar API.
- This page explains the eventType property, and specifications of event types available in the Google Calendar API.

### "Manage focus time, out of office, and working location events \_|\_ Google\

- URL: [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To list status events, use the events.list method, specifying one or more of the following values in the eventTypes field: 'focusTime' 'outOfOffice' 'workingLocation' Then, in the returned Event objects, inspect that the eventType field has the requested value, and refer to the corresponding field for details about the status created by the user in Google Calendar: focusTimeProperties outOfOfficeProperties workingLocationProperties Subscribe to changes on status events You can subscribe to changes on status events in the Events resource of the Calendar API.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events#resource / function parseWorkingLocation ( event ) { if ( event . eventType != "workingLocation" ) { throw new Error ( "'" + event . summary + "' is not a working location event." ); } var location = 'No Location' ; const workingLocation = event . workingLocationProperties ; if ( workingLocation ) { if ( workingLocation . type === 'homeOffice' ) { location = 'Home' ; } if ( workingLocation . type === 'officeLocation' ) { location = workingLocation . officeLocation . label ; } if ( workingLocation . type === 'customLocation' ) { location = workingLocation . customLocation . label ; } } return ${ event . start . date } : ${ location } ; } Run the code sample Above the code editor, select the function to run from the drop-down menu, and click Run .
- Use the events.watch method, specifying the calendarId of the Calendar to subscribe to and one or more of the following values in the eventTypes field: 'focusTime' 'outOfOffice' 'workingLocation' Create and update Calendar status events To create a status event, you create an instance of the Events resource using the events.insert method, setting the required fields for the event type.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/list / function listEvents ( eventType = 'default' ) { const calendarId = 'primary' // Query parameters for the list request. const optionalArgs = { eventTypes : [ eventType ], showDeleted : false , singleEvents : true , timeMax : '2023-04-01T00:00:00+01:00' , timeMin : '2023-03-27T00:00:00+01:00' , } try { var response = Calendar .

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.
- Reminders () . setUseDefault ( false ) . setOverrides ( Arrays . asList ( reminderOverrides )); event . setReminders ( reminders ); String calendarId = "primary" ; event = service . events (). insert ( calendarId , event ). execute (); System . out . printf ( "Event created: %s\n" , event . getHtmlLink ()); JavaScript // Refer to the JavaScript quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/js // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' } ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 } ] } }; const request = gapi . client . calendar . events . insert ({ 'calendarId' : 'primary' , 'resource' : event }); request . execute ( function ( event ) { appendPre ( 'Event created: ' + event . htmlLink ); }); Node.js // Refer to the Node.js quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/node // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, }; calendar . events . insert ({ auth : auth , calendarId : 'primary' , resource : event , }, function ( err , event ) { if ( err ) { console . log ( 'There was an error contacting the Calendar service: ' + err ); return ; } console . log ( 'Event created: %s' , event . htmlLink ); }); PHP $event = new Google Service Calendar Event(array( 'summary' => 'Google I/O 2015', 'location' => '800 Howard St., San Francisco, CA 94103', 'description' => 'A chance to hear more about Google\'s developer products.', 'start' => array( 'dateTime' => '2015-05-28T09:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'end' => array( 'dateTime' => '2015-05-28T17:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'recurrence' => array( 'RRULE:FREQ=DAILY;COUNT=2' ), 'attendees' => array( array('email' => 'lpage@example.com'), array('email' => 'sbrin@example.com'), ), 'reminders' => array( 'useDefault' => FALSE, 'overrides' => array( array('method' => 'email', 'minutes' => 24 60), array('method' => 'popup', 'minutes' => 10), ), ), )); $calendarId = 'primary'; $event = $service->events->insert($calendarId, $event); printf('Event created: %s\n', $event->htmlLink); Python Refer to the Python quickstart on how to setup the environment: https://developers.google.com/workspace/calendar/quickstart/python Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any stored credentials. event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google \' s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : False , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, } event = service . events () . insert ( calendarId = 'primary' , body = event ) . execute () print 'Event created: %s ' % ( event . get ( 'htmlLink' )) Ruby event = Google :: Apis :: CalendarV3 :: Event . new ( summary : 'Google I/O 2015' , location : '800 Howard St., San Francisco, CA 94103' , description : 'A chance to hear more about Google \' s developer products.' , start : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T09:00:00-07:00' , time zone : 'America/Los Angeles' ), end : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T17:00:00-07:00' , time zone : 'America/Los Angeles' ), recurrence : [ 'RRULE:FREQ=DAILY;COUNT=2' ] , attendees : [ Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'lpage@example.com' ), Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'sbrin@example.com' ) ] , reminders : Google :: Apis :: CalendarV3 :: Event :: Reminders . new ( use default : false , overrides : [ Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'email' , minutes : 24 60 ), Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'popup' , minutes : 10 ) ] ) ) result = client . insert event ( 'primary' , event ) puts "Event created: #{ result . html link } " Add Drive attachments to events You can attach Google Drive files such as meeting notes in Docs, budgets in Sheets, presentations in Slides, or any other relevant Google Drive files to your calendar events.
- The following code example demonstrates how to update an existing event to add an attachment: Java public static void addAttachment ( Calendar calendarService , Drive driveService , String calendarId , String eventId , String fileId ) throws IOException { File file = driveService . files (). get ( fileId ). execute (); Event event = calendarService . events (). get ( calendarId , eventId ). execute (); List<EventAttachment> attachments = event . getAttachments (); if ( attachments == null ) { attachments = new ArrayList<EventAttachment> (); } attachments . add ( new EventAttachment () . setFileUrl ( file . getAlternateLink ()) . setMimeType ( file . getMimeType ()) . setTitle ( file . getTitle ())); Event changes = new Event () . setAttachments ( attachments ); calendarService . events (). patch ( calendarId , eventId , changes ) . setSupportsAttachments ( true ) . execute (); } PHP function addAttachment($calendarService, $driveService, $calendarId, $eventId, $fileId) { $file = $driveService->files->get($fileId); $event = $calendarService->events->get($calendarId, $eventId); $attachments = $event->attachments; $attachments[] = array( 'fileUrl' => $file->alternateLink, 'mimeType' => $file->mimeType, 'title' => $file->title ); $changes = new Google Service Calendar Event(array( 'attachments' => $attachments )); $calendarService->events->patch($calendarId, $eventId, $changes, array( 'supportsAttachments' => TRUE )); } Python def add attachment ( calendarService , driveService , calendarId , eventId , fileId ): file = driveService . files () . get ( fileId = fileId ) . execute () event = calendarService . events () . get ( calendarId = calendarId , eventId = eventId ) . execute () attachments = event . get ( 'attachments' , []) attachments . append ({ 'fileUrl' : file [ 'alternateLink' ], 'mimeType' : file [ 'mimeType' ], 'title' : file [ 'title' ] }) changes = { 'attachments' : attachments } calendarService . events () . patch ( calendarId = calendarId , eventId = eventId , body = changes , supportsAttachments = True ) . execute () Important: You must perform a full sync of all events before enabling the supportsAttachments parameter for event modifications when adding attachments support into your existing app that stores events locally.
- Besides the type , the conferenceSolution also provides the name and the iconUri fields that you can use to represent the conference solution as shown below: JavaScript const solution = event . conferenceData . conferenceSolution ; const content = document . getElementById ( "content" ); const text = document . createTextNode ( "Join " + solution . name ); const icon = document . createElement ( "img" ); icon . src = solution . iconUri ; content . appendChild ( icon ); content . appendChild ( text ); You can create a new conference for an event by providing a createRequest with a newly generated requestId which can be a random string .

