---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.091Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Custom attachments"
feature_slug: "custom-attachments"
latest_feature_date: "2022-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/overview"
  - "https://developers.google.com/workspace/calendar/api/auth"
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
keywords:
  - "custom"
  - "attachments"
  - "calendar"
  - "supports"
  - "events"
---

# Custom attachments

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API supports custom attachments on calendar events.

## Extended Definition

The Calendar API supports custom attachments on calendar events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)
- [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)

## Supporting Pages

### Google Calendar API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This metadata includes user-specific properties of the calendar, such as its color or notifications for new events.
- Calendar A collection of events.
- Following is a list of common terms used in the Google Calendar API: Event An event on a calendar containing information such as the title, start and end times, and attendees.
- Home Google Workspace Google Calendar Guides Send feedback Google Calendar API overview Stay organized with collections Save and categorize content based on your preferences.

### Choose Google Calendar API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Calendar API supports the following scopes: Scope Meaning https://www.googleapis.com/auth/calendar See, edit, share, and permanently delete all the calendars you can access using Google Calendar. https://www.googleapis.com/auth/calendar.readonly See and download any calendar you can access using your Calendar. https://www.googleapis.com/auth/calendar.freebusy View your availability in your calendars. https://www.googleapis.com/auth/calendar.events View and edit events on all your calendars. https://www.googleapis.com/auth/calendar.events.readonly View events on all your calendars. https://www.googleapis.com/auth/calendar.settings.readonly View your Calendar settings. https://www.googleapis.com/auth/calendar.addons.execute Run as a Calendar add-on. https://www.googleapis.com/auth/calendar.addons.current.event.read See the events you open in Google Calendar. https://www.googleapis.com/auth/calendar.addons.current.event.write Edit the events you open in Google Calendar. https://www.googleapis.com/auth/calendar.events.owned See, create, change, and delete events on Google calendars you own. https://www.googleapis.com/auth/calendar.events.owned.readonly See the events on Google calendars you own. https://www.googleapis.com/auth/calendar.events.freebusy See the availability on Google calendars you have access to. https://www.googleapis.com/auth/calendar.app.created Make secondary Google calendars, and see, create, change, and delete events on them. https://www.googleapis.com/auth/calendar.calendarlist See, add, and remove Google calendars you're subscribed to. https://www.googleapis.com/auth/calendar.calendarlist.readonly See the list of Google calendars you're subscribed to. https://www.googleapis.com/auth/calendar.calendars See and change the properties of Google calendars you have access to, and create secondary calendars. https://www.googleapis.com/auth/calendar.calendars.readonly See the title, description, default time zone, and other properties of Google calendars you have access to. https://www.googleapis.com/auth/calendar.acls See and change the sharing permissions of Google calendars you own. https://www.googleapis.com/auth/calendar.acls.readonly See the sharing permissions of Google calendars you own. https://www.googleapis.com/auth/calendar.events.public.readonly See the events on public calendars.
- Home Google Workspace Google Calendar Guides Send feedback Choose Google Calendar API scopes Stay organized with collections Save and categorize content based on your preferences.
- Calendar API scopes To define the level of access granted to your app, you need to identify and declare authorization scopes .
- This document contains Google Calendar API-specific authorization and authentication information.

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- The following code example demonstrates how to update an existing event to add an attachment: Java public static void addAttachment ( Calendar calendarService , Drive driveService , String calendarId , String eventId , String fileId ) throws IOException { File file = driveService . files (). get ( fileId ). execute (); Event event = calendarService . events (). get ( calendarId , eventId ). execute (); List<EventAttachment> attachments = event . getAttachments (); if ( attachments == null ) { attachments = new ArrayList<EventAttachment> (); } attachments . add ( new EventAttachment () . setFileUrl ( file . getAlternateLink ()) . setMimeType ( file . getMimeType ()) . setTitle ( file . getTitle ())); Event changes = new Event () . setAttachments ( attachments ); calendarService . events (). patch ( calendarId , eventId , changes ) . setSupportsAttachments ( true ) . execute (); } PHP function addAttachment($calendarService, $driveService, $calendarId, $eventId, $fileId) { $file = $driveService->files->get($fileId); $event = $calendarService->events->get($calendarId, $eventId); $attachments = $event->attachments; $attachments[] = array( 'fileUrl' => $file->alternateLink, 'mimeType' => $file->mimeType, 'title' => $file->title ); $changes = new Google Service Calendar Event(array( 'attachments' => $attachments )); $calendarService->events->patch($calendarId, $eventId, $changes, array( 'supportsAttachments' => TRUE )); } Python def add attachment ( calendarService , driveService , calendarId , eventId , fileId ): file = driveService . files () . get ( fileId = fileId ) . execute () event = calendarService . events () . get ( calendarId = calendarId , eventId = eventId ) . execute () attachments = event . get ( 'attachments' , []) attachments . append ({ 'fileUrl' : file [ 'alternateLink' ], 'mimeType' : file [ 'mimeType' ], 'title' : file [ 'title' ] }) changes = { 'attachments' : attachments } calendarService . events () . patch ( calendarId = calendarId , eventId = eventId , body = changes , supportsAttachments = True ) . execute () Important: You must perform a full sync of all events before enabling the supportsAttachments parameter for event modifications when adding attachments support into your existing app that stores events locally.
- Reminders () . setUseDefault ( false ) . setOverrides ( Arrays . asList ( reminderOverrides )); event . setReminders ( reminders ); String calendarId = "primary" ; event = service . events (). insert ( calendarId , event ). execute (); System . out . printf ( "Event created: %s\n" , event . getHtmlLink ()); JavaScript // Refer to the JavaScript quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/js // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' } ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 } ] } }; const request = gapi . client . calendar . events . insert ({ 'calendarId' : 'primary' , 'resource' : event }); request . execute ( function ( event ) { appendPre ( 'Event created: ' + event . htmlLink ); }); Node.js // Refer to the Node.js quickstart on how to setup the environment: // https://developers.google.com/workspace/calendar/quickstart/node // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any // stored credentials. const event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google\'s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : false , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, }; calendar . events . insert ({ auth : auth , calendarId : 'primary' , resource : event , }, function ( err , event ) { if ( err ) { console . log ( 'There was an error contacting the Calendar service: ' + err ); return ; } console . log ( 'Event created: %s' , event . htmlLink ); }); PHP $event = new Google Service Calendar Event(array( 'summary' => 'Google I/O 2015', 'location' => '800 Howard St., San Francisco, CA 94103', 'description' => 'A chance to hear more about Google\'s developer products.', 'start' => array( 'dateTime' => '2015-05-28T09:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'end' => array( 'dateTime' => '2015-05-28T17:00:00-07:00', 'timeZone' => 'America/Los Angeles', ), 'recurrence' => array( 'RRULE:FREQ=DAILY;COUNT=2' ), 'attendees' => array( array('email' => 'lpage@example.com'), array('email' => 'sbrin@example.com'), ), 'reminders' => array( 'useDefault' => FALSE, 'overrides' => array( array('method' => 'email', 'minutes' => 24 60), array('method' => 'popup', 'minutes' => 10), ), ), )); $calendarId = 'primary'; $event = $service->events->insert($calendarId, $event); printf('Event created: %s\n', $event->htmlLink); Python Refer to the Python quickstart on how to setup the environment: https://developers.google.com/workspace/calendar/quickstart/python Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any stored credentials. event = { 'summary' : 'Google I/O 2015' , 'location' : '800 Howard St., San Francisco, CA 94103' , 'description' : 'A chance to hear more about Google \' s developer products.' , 'start' : { 'dateTime' : '2015-05-28T09:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'end' : { 'dateTime' : '2015-05-28T17:00:00-07:00' , 'timeZone' : 'America/Los Angeles' , }, 'recurrence' : [ 'RRULE:FREQ=DAILY;COUNT=2' ], 'attendees' : [ { 'email' : 'lpage@example.com' }, { 'email' : 'sbrin@example.com' }, ], 'reminders' : { 'useDefault' : False , 'overrides' : [ { 'method' : 'email' , 'minutes' : 24 60 }, { 'method' : 'popup' , 'minutes' : 10 }, ], }, } event = service . events () . insert ( calendarId = 'primary' , body = event ) . execute () print 'Event created: %s ' % ( event . get ( 'htmlLink' )) Ruby event = Google :: Apis :: CalendarV3 :: Event . new ( summary : 'Google I/O 2015' , location : '800 Howard St., San Francisco, CA 94103' , description : 'A chance to hear more about Google \' s developer products.' , start : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T09:00:00-07:00' , time zone : 'America/Los Angeles' ), end : Google :: Apis :: CalendarV3 :: EventDateTime . new ( date time : '2015-05-28T17:00:00-07:00' , time zone : 'America/Los Angeles' ), recurrence : [ 'RRULE:FREQ=DAILY;COUNT=2' ] , attendees : [ Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'lpage@example.com' ), Google :: Apis :: CalendarV3 :: EventAttendee . new ( email : 'sbrin@example.com' ) ] , reminders : Google :: Apis :: CalendarV3 :: Event :: Reminders . new ( use default : false , overrides : [ Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'email' , minutes : 24 60 ), Google :: Apis :: CalendarV3 :: EventReminder . new ( reminder method : 'popup' , minutes : 10 ) ] ) ) result = client . insert event ( 'primary' , event ) puts "Event created: #{ result . html link } " Add Drive attachments to events You can attach Google Drive files such as meeting notes in Docs, budgets in Sheets, presentations in Slides, or any other relevant Google Drive files to your calendar events.
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.
- Add an event To create an event, call the events.insert() method providing at least these parameters: calendarId is the calendar identifier and can either be the email address of the calendar on which to create the event or a special keyword 'primary' which will use the primary calendar of the logged in user.

