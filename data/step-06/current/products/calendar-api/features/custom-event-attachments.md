---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.881Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Custom event attachments"
feature_slug: "custom-event-attachments"
latest_feature_date: "2022-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
  - "https://developers.google.com/workspace/calendar/api/guides/recurringevents"
keywords:
  - "attachments"
  - "custom"
  - "was"
  - "event"
  - "calendar"
  - "added"
  - "for"
  - "api"
---

# Custom event attachments

Product: Calendar API
Coverage: LOW

## Step 02 Summary

Calendar API support was added for custom attachments on events.

## Extended Definition

Calendar API support was added for custom attachments on events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- [https://developers.google.com/workspace/calendar/api/guides/recurringevents](https://developers.google.com/workspace/calendar/api/guides/recurringevents)

## Supporting Pages

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reminders () . setUseDefault ( false ) . setOverrides ( Arrays . asList ( reminderOverrides )); event . setReminders ( reminders ); String calendarId = "primary" ; event = service . events (). insert ( calendarId , event ). execute (); System . out . printf ( "Event created: %s\n" , event . getHtmlLink ()); JavaScript // Refer to the JavaScript quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/js // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' } ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 } ] } }; const request = gapi . client . calendar . events . insert ({ 'calendarId' : 'primary' , 'resource' : event }); request . execute ( function ( event ) { appendPre ( 'Event created: ' + event . htmlLink ); }); Node.js // Refer to the Node.js quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/node // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, }; calendar . events . insert ({ auth : auth , calendarId : 'primary' , resource : event , }, function ( err , event ) { if ( err ) { console . log ( 'There was an error contacting the Calendar service: ' + err ); return ; } console . log ( 'Event created: %s' , event . htmlLink ); }); PHP $event = new Google Service Calendar Event(array( 'summary' => 'Google I/O 2015', 'location' => '800 Howard St., San Francisco, CA 94103', 'description' => 'A chance to hear more about Google\'s developer products.', 'start' => array( 'dateTime' => '2015-05-28T09:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'end' => array( 'dateTime' => '2015-05-28T17:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'recurrence' => array( 'RRULE:FREQ=DAILY;COUNT=2' ), 'attendees' => array( array('email' => 'lpage@example.com'), array('email' => 'sbrin@example.com'), ), 'reminders' => array( 'useDefault' => FALSE, 'overrides' => array( array('method' => 'email', 'minutes' => 24 60), array('method' => 'popup', 'minutes' => 10), ), ), )); $calendarId = 'primary'; $event = $service->events->insert($calendarId, $event); printf('Event created: %s\n', $event->htmlLink); Python Refer to the Python quickstart on how to setup the environment: https://developers.google.com/workspace/calendar/quickstart/python Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any stored credentials. event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google \' s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : False , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, } event = service . events () . insert ( calendarId = 'primary' , body = event ) . execute () print 'Event created: %s ' % ( event . get ( 'htmlLink' )) Ruby event = Google :: Apis :: CalendarV3 :: Event . new ( summary : 'Google I/O 2015' , location : '800 Howard St., San Francisco, CA 94103' , description : 'A chance to hear more about Google \' s developer products.' , start : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T09:00:00-07:00' , time zone : 'America/Los Angeles' ), end : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T17:00:00-07:00' , time zone : 'America/Los Angeles' ), recurrence : [ 'RRULE:FREQ=DAILY;COUNT=2' ] , attendees : [ Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'lpage@example.com' ), Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'sbrin@example.com' ) ] , reminders : Google :: Apis :: CalendarV3 :: Event :: Reminders . new ( use default : false , overrides : [ Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'email' , minutes : 24 60 ), Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'popup' , minutes : 10 ) ] ) ) result = client . insert event ( 'primary' , event ) puts "Event created: #{ result . html link } " Add Drive attachments to events You can attach Google Drive files such as meeting notes in Docs, budgets in Sheets, presentations in Slides, or any other relevant Google Drive files to your calendar events.
- The following code example demonstrates how to update an existing event to add an attachment: Java public static void addAttachment ( Calendar calendarService , Drive driveService , String calendarId , String eventId , String fileId ) throws IOException { File file = driveService . files (). get ( fileId ). execute (); Event event = calendarService . events (). get ( calendarId , eventId ). execute (); List<EventAttachment> attachments = event . getAttachments (); if ( attachments == null ) { attachments = new ArrayList<EventAttachment> (); } attachments . add ( new EventAttachment () . setFileUrl ( file . getAlternateLink ()) . setMimeType ( file . getMimeType ()) . setTitle ( file . getTitle ())); Event changes = new Event () . setAttachments ( attachments ); calendarService . events (). patch ( calendarId , eventId , changes ) . setSupportsAttachments ( true ) . execute (); } PHP function addAttachment($calendarService, $driveService, $calendarId, $eventId, $fileId) { $file = $driveService->files->get($fileId); $event = $calendarService->events->get($calendarId, $eventId); $attachments = $event->attachments; $attachments[] = array( 'fileUrl' => $file->alternateLink, 'mimeType' => $file->mimeType, 'title' => $file->title ); $changes = new Google Service Calendar Event(array( 'attachments' => $attachments )); $calendarService->events->patch($calendarId, $eventId, $changes, array( 'supportsAttachments' => TRUE )); } Python def add attachment ( calendarService , driveService , calendarId , eventId , fileId ): file = driveService . files () . get ( fileId = fileId ) . execute () event = calendarService . events () . get ( calendarId = calendarId , eventId = eventId ) . execute () attachments = event . get ( 'attachments' , []) attachments . append ({ 'fileUrl' : file [ 'alternateLink' ], 'mimeType' : file [ 'mimeType' ], 'title' : file [ 'title' ] }) changes = { 'attachments' : attachments } calendarService . events () . patch ( calendarId = calendarId , eventId = eventId , body = changes , supportsAttachments = True ) . execute () Important: You must perform a full sync of all events before enabling the supportsAttachments parameter for event modifications when adding attachments support into your existing app that stores events locally.
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.
- There are three types of conferenceData currently supported, as denoted by the conferenceData.conferenceSolution.key.type : Hangouts for consumers ( eventHangout ) Classic Hangouts for Google Workspace users (deprecated; eventNamedHangout ) Google Meet ( hangoutsMeet ) You can learn which conference type is supported for any given calendar of a user by looking at the conferenceProperties.allowedConferenceSolutionTypes in the calendars and calendarList collections.

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/list / function listEvents ( eventType = undefined ) { // Query parameters for the list request. const optionalArgs = { eventTypes : eventType ? [ eventType ] : undefined , singleEvents : true , timeMax : '2024-07-30T00:00:00+01:00' , timeMin : '2024-07-29T00:00:00+01:00' , } try { var response = Calendar .
- Google Calendar API supports get , instances , and list methods for reading birthday events. eventTypes can be set to 'birthday' to list only birthday events.
- Google Calendar allows users to create generic events, as well as events that are designed for specific use cases and with custom properties.
- Google Calendar API doesn't allow creating birthday events with custom birthdayProperties , or updating these properties.

### Recurring events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/recurringevents](https://developers.google.com/workspace/calendar/api/guides/recurringevents)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The URL is of the form: https://www.googleapis.com/calendar/v3/calendars/calendarId/events/instanceId Use appropriate values in place of calendarId and instanceId .
- Id ); Python event = { 'summary' : 'Appointment' , 'location' : 'Somewhere' , 'start' : { 'dateTime' : '2011-06-03T10:00:00.000-07:00' , 'timeZone' : 'America/Los Angeles' }, 'end' : { 'dateTime' : '2011-06-03T10:25:00.000-07:00' , 'timeZone' : 'America/Los Angeles' }, 'recurrence' : [ 'RRULE:FREQ=WEEKLY;UNTIL=20110701T170000Z' , ], 'attendees' : [ { 'email' : 'attendeeEmail' , Other attendee's data... }, ... ], } recurring event = service . events () . insert ( calendarId = 'primary' , body = event ) . execute () print recurring event [ 'id' ] PHP $event = new Google Service Calendar Event(); $event->setSummary('Appointment'); $event->setLocation('Somewhere'); $start = new Google Service Calendar EventDateTime(); $start->setDateTime('2011-06-03T10:00:00.000-07:00'); $start->setTimeZone('America/Los Angeles'); $event->setStart($start); $end = new Google Service Calendar EventDateTime(); $end->setDateTime('2011-06-03T10:25:00.000-07:00'); $end->setTimeZone('America/Los Angeles'); $event->setEnd($end); $event->setRecurrence(array('RRULE:FREQ=WEEKLY;UNTIL=20110701T170000Z')); $attendee1 = new Google Service Calendar EventAttendee(); $attendee1->setEmail('attendeeEmail'); // ... $attendees = array($attendee1, // ... ); $event->attendees = $attendees; $recurringEvent = $service->events->insert('primary', $event); echo $recurringEvent->getId(); Ruby event = Google :: Apis :: CalendarV3 :: Event . new ( summary : 'Appointment' , location : 'Somewhere' , start : { date time : '2011-06-03T10:00:00.000-07:00' , time zone : 'America/Los Angeles' }, end : { date time : '2011-06-03T10:25:00.000-07:00' , time zone : 'America/Los Angeles' }, recurrence : [ 'RRULE:FREQ=WEEKLY;UNTIL=20110701T170000Z' ] attendees : [ { email : 'attendeeEmail' }, #... ] ) response = client . insert event ( 'primary' , event ) print response . id Access instances To see all the instances of a given recurring event you can use the events.instances() request.
- Updated ); Python First retrieve the instances from the API. instances = service . events () . instances ( calendarId = 'primary' , eventId = 'recurringEventId' ) . execute () Select the instance to cancel. instance = instances [ 'items' ][ 0 ] instance [ 'status' ] = 'cancelled' updated instance = service . events () . update ( calendarId = 'primary' , eventId = instance [ 'id' ], body = instance ) . execute () Print the updated date. print updated instance [ 'updated' ] PHP $events = $service->events->instances("primary", "eventId"); // Select the instance to cancel. $instance = $events->getItems()[0]; $instance->setStatus('cancelled'); $updatedInstance = $service->events->update('primary', $instance->getId(), $instance); // Print the updated date. echo $updatedInstance->getUpdated(); Ruby First retrieve the instances from the API. instances = client . list event instances ( 'primary' , 'recurringEventId' ) Select the instance to cancel. instance = instances . items [ 0 ] instance . status = 'cancelled' response = client . update event ( 'primary' , instance . id , instance ) print response . updated Modify all following instances In order to change all the instances of a recurring event on or after a given (target) instance, you must make two separate API requests.
- Protocol PUT /calendar/v3/calendars/primary/events/instanceId ... { "kind": "calendar#event", "id": "instanceId", "etag": "instanceEtag", "status": "cancelled", "htmlLink": "https://www.google.com/calendar/event?eid=instanceEid", "created": "2011-05-23T22:27:01.000Z", "updated": "2011-05-23T22:27:01.000Z", "summary": "Recurring event", "location": "Somewhere", "creator": { "email": "userEmail" }, "recurringEventId": "recurringEventId", "originalStartTime": "2011-06-03T10:00:00.000-07:00", "organizer": { "email": "userEmail", "displayName": "userDisplayName" }, "start": { "dateTime": "2011-06-03T10:00:00.000-07:00", "timeZone": "America/Los Angeles" }, "end": { "dateTime": "2011-06-03T10:25:00.000-07:00", "timeZone": "America/Los Angeles" }, "iCalUID": "eventUID", "sequence": 0, "attendees": [ { "email": "attendeeEmail", "displayName": "attendeeDisplayName", "responseStatus": "needsAction" }, ... { "email": "userEmail", "displayName": "userDisplayName", "responseStatus": "accepted", "organizer": true, "self": true } ], "guestsCanInviteOthers": false, "guestsCanSeeOtherGuests": false, "reminders": { "useDefault": true } } Java // First retrieve the instances from the API.

