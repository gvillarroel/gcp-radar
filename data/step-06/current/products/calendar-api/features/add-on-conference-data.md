---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.099Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Add-on conference data"
feature_slug: "add-on-conference-data"
latest_feature_date: "2019-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList"
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
keywords:
  - "add"
  - "conference"
  - "calendar"
  - "allows"
  - "attaching"
  - "type"
  - "addon"
  - "existing"
---

# Add-on conference data

Product: Calendar API
Coverage: MEDIUM

## Step 02 Summary

The Calendar API allows attaching conference data of type addOn to new or existing events through Events.insert and Events.update.

## Extended Definition

The Calendar API allows attaching conference data of type addOn to new or existing events through Events.insert and Events.update.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)

## Supporting Pages

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code example demonstrates how to update an existing event to add an attachment: Java public static void addAttachment ( Calendar calendarService , Drive driveService , String calendarId , String eventId , String fileId ) throws IOException { File file = driveService . files (). get ( fileId ). execute (); Event event = calendarService . events (). get ( calendarId , eventId ). execute (); List<EventAttachment> attachments = event . getAttachments (); if ( attachments == null ) { attachments = new ArrayList<EventAttachment> (); } attachments . add ( new EventAttachment () . setFileUrl ( file . getAlternateLink ()) . setMimeType ( file . getMimeType ()) . setTitle ( file . getTitle ())); Event changes = new Event () . setAttachments ( attachments ); calendarService . events (). patch ( calendarId , eventId , changes ) . setSupportsAttachments ( true ) . execute (); } PHP function addAttachment($calendarService, $driveService, $calendarId, $eventId, $fileId) { $file = $driveService->files->get($fileId); $event = $calendarService->events->get($calendarId, $eventId); $attachments = $event->attachments; $attachments[] = array( 'fileUrl' => $file->alternateLink, 'mimeType' => $file->mimeType, 'title' => $file->title ); $changes = new Google Service Calendar Event(array( 'attachments' => $attachments )); $calendarService->events->patch($calendarId, $eventId, $changes, array( 'supportsAttachments' => TRUE )); } Python def add attachment ( calendarService , driveService , calendarId , eventId , fileId ): file = driveService . files () . get ( fileId = fileId ) . execute () event = calendarService . events () . get ( calendarId = calendarId , eventId = eventId ) . execute () attachments = event . get ( 'attachments' , []) attachments . append ({ 'fileUrl' : file [ 'alternateLink' ], 'mimeType' : file [ 'mimeType' ], 'title' : file [ 'title' ] }) changes = { 'attachments' : attachments } calendarService . events () . patch ( calendarId = calendarId , eventId = eventId , body = changes , supportsAttachments = True ) . execute () Important: You must perform a full sync of all events before enabling the supportsAttachments parameter for event modifications when adding attachments support into your existing app that stores events locally.
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.
- There are three types of conferenceData currently supported, as denoted by the conferenceData.conferenceSolution.key.type : Hangouts for consumers ( eventHangout ) Classic Hangouts for Google Workspace users (deprecated; eventNamedHangout ) Google Meet ( hangoutsMeet ) You can learn which conference type is supported for any given calendar of a user by looking at the conferenceProperties.allowedConferenceSolutionTypes in the calendars and calendarList collections.
- Besides the type , the conferenceSolution also provides the name and the iconUri fields that you can use to represent the conference solution as shown below: JavaScript const solution = event . conferenceData . conferenceSolution ; const content = document . getElementById ( "content" ); const text = document . createTextNode ( "Join " + solution . name ); const icon = document . createElement ( "img" ); icon . src = solution . iconUri ; content . appendChild ( icon ); content . appendChild ( text ); You can create a new conference for an event by providing a createRequest with a newly generated requestId which can be a random string .

### CalendarList \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource representations { "kind" : "calendar#calendarListEntry" , "etag" : etag , "id" : string , "summary" : string , "description" : string , "location" : string , "timeZone" : string , "dataOwner" : string , "summaryOverride" : string , "colorId" : string , "backgroundColor" : string , "foregroundColor" : string , "hidden" : boolean , "selected" : boolean , "accessRole" : string , "defaultReminders" : [ { "method" : string , "minutes" : integer } ], "notificationSettings" : { "notifications" : [ { "type" : string , "method" : string } ] } , "primary" : boolean , "deleted" : boolean , "conferenceProperties" : { "allowedConferenceSolutionTypes" : [ string ] } , "autoAcceptInvitations" : boolean } Property name Value Description Notes accessRole string The effective access role that the authenticated user has on the calendar.
- Optional. writable conferenceProperties nested object Conferencing properties for this calendar, for example what types of conferences are allowed. conferenceProperties. allowedConferenceSolutionTypes[] list The types of conference solutions that are supported for this calendar.
- Methods delete Removes a calendar from the user's calendar list. get Returns a calendar from the user's calendar list. insert Inserts an existing calendar into the user's calendar list. list Returns the calendars on the user's calendar list. patch Updates an existing calendar on the user's calendar list.
- The attribute is only returned when the calendar is hidden, in which case the value is true . writable id string Identifier of the calendar. kind string Type of the resource ("calendar#calendarListEntry"). location string Geographic location of the calendar as free-form text.

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Events . get ( CALENDAR ID , ' EVENT ID ' ); console . log ( response ); } catch ( exception ) { console . log ( exception . message ); } } / Creates a default event. / function createDefaultEvent () { const event = { start : { dateTime : '2024-07-30T10:30:00+01:00' }, end : { dateTime : '2024-07-30T12:30:00+01:00' }, description : 'Created from Apps Script.' , eventType : 'default' , summary : 'Sample event' , } createEvent ( event ); } / Creates a birthday event. / function createBirthday () { const event = { start : { date : '2024-01-29' }, end : { date : '2024-01-30' }, eventType : 'birthday' , recurrence : [ "RRULE:FREQ=YEARLY" ], summary : "My friend's birthday" , transparency : "transparent" , visibility : "private" , } createEvent ( event ); } / Creates a Calendar event.
- Paste the following into the code editor. const CALENDAR ID = ' CALENDAR ID ' 'primary' ; / Lists default events. / function listDefaultEvents () { listEvents ( 'default' ); } / Lists birthday events. / function listBirthdays () { listEvents ( 'birthday' ); } / Lists events from Gmail. / function listEventsFromGmail () { listEvents ( 'fromGmail' ); } / Lists events with the given event type.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/list / function listEvents ( eventType = undefined ) { // Query parameters for the list request. const optionalArgs = { eventTypes : eventType ? [ eventType ] : undefined , singleEvents : true , timeMax : '2024-07-30T00:00:00+01:00' , timeMin : '2024-07-29T00:00:00+01:00' , } try { var response = Calendar .
- The API allows creating birthday events using the insert method with the following specifications: eventType is set to 'birthday' . start and end fields need to define an all-day event which spans exactly one day. visibility field value must be 'private' . transparency field value must be 'transparent' .

