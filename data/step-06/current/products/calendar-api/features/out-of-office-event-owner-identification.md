---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.096Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Out-of-office event owner identification"
feature_slug: "out-of-office-event-owner-identification"
latest_feature_date: "2021-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/calendar-status"
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
  - "https://developers.google.com/workspace/calendar/api/v3/reference"
keywords:
  - "out"
  - "office"
  - "event"
  - "owner"
  - "identification"
  - "calendar"
  - "lets"
  - "applications"
---

# Out-of-office event owner identification

Product: Calendar API
Coverage: MEDIUM

## Step 02 Summary

The Calendar API lets applications use the calendarId in the calendar resource endpoint to identify the owner of an out-of-office event.

## Extended Definition

The Calendar API lets applications use the calendarId in the calendar resource endpoint to identify the owner of an out-of-office event.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)

## Supporting Pages

### "Manage focus time, out of office, and working location events \_|\_ Google\

- URL: [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secondary calendars can't have status events. / Creates a focus time event. / function createFocusTime () { const event = { start : { dateTime : '2023-11-14T10:00:00+01:00' }, end : { dateTime : '2023-11-14T12:00:00+01:00' }, eventType : 'focusTime' , focusTimeProperties : { chatStatus : 'doNotDisturb' , autoDeclineMode : 'declineOnlyNewConflictingInvitations' , declineMessage : 'Declined because I am in focus time.' , } } createEvent ( event ); } / Creates an out of office event. / function createOutOfOffice () { const event = { start : { dateTime : '2023-11-15T10:00:00+01:00' }, end : { dateTime : '2023-11-15T18:00:00+01:00' }, eventType : 'outOfOffice' , outOfOfficeProperties : { autoDeclineMode : 'declineOnlyNewConflictingInvitations' , declineMessage : 'Declined because I am on vacation.' , } } createEvent ( event ); } / Creates a working location event. / function createWorkingLocation () { const event = { start : { date : "2023-06-01" }, end : { date : "2023-06-02" }, eventType : "workingLocation" , visibility : "public" , transparency : "transparent" , workingLocationProperties : { type : 'customLocation' , customLocation : { label : "a custom location" }, } } createEvent ( event ); } / Creates a Calendar event.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events#resource / function parseWorkingLocation ( event ) { if ( event . eventType != "workingLocation" ) { throw new Error ( "'" + event . summary + "' is not a working location event." ); } var location = 'No Location' ; const workingLocation = event . workingLocationProperties ; if ( workingLocation ) { if ( workingLocation . type === 'homeOffice' ) { location = 'Home' ; } if ( workingLocation . type === 'officeLocation' ) { location = workingLocation . officeLocation . label ; } if ( workingLocation . type === 'customLocation' ) { location = workingLocation . customLocation . label ; } } return ${ event . start . date } : ${ location } ; } Run the code sample Above the code editor, select the function to run from the drop-down menu, and click Run .
- Events . get ( calendarId , eventId ); var event = ( response . eventType === 'workingLocation' ) ? parseWorkingLocation ( response ) : response ; console . log ( event ); } catch ( exception ) { console . log ( exception . message ); } } / Lists focus time events. / function listFocusTimes () { listEvents ( 'focusTime' ); } / Lists out of office events. / function listOutOfOffices () { listEvents ( 'outOfOffice' ); } / Lists working location events. / function listWorkingLocations () { listEvents ( 'workingLocation' ); } / Lists events with the given event type.
- To list status events, use the events.list method, specifying one or more of the following values in the eventTypes field: 'focusTime' 'outOfOffice' 'workingLocation' Then, in the returned Event objects, inspect that the eventType field has the requested value, and refer to the corresponding field for details about the status created by the user in Google Calendar: focusTimeProperties outOfOfficeProperties workingLocationProperties Subscribe to changes on status events You can subscribe to changes on status events in the Events resource of the Calendar API.

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Explore event types in Google Apps Script Google Apps Script is a JavaScript-based cloud scripting language that lets you build business applications that integrate with Google Workspace.
- Focus time, out of office and working location The Google Calendar API can be used to create and manage events that show the status of Google Calendar users.
- Changing this value lets you read events on the calendars of other users you have access to.
- Events . get ( CALENDAR ID , ' EVENT ID ' ); console . log ( response ); } catch ( exception ) { console . log ( exception . message ); } } / Creates a default event. / function createDefaultEvent () { const event = { start : { dateTime : '2024-07-30T10:30:00+01:00' }, end : { dateTime : '2024-07-30T12:30:00+01:00' }, description : 'Created from Apps Script.' , eventType : 'default' , summary : 'Sample event' , } createEvent ( event ); } / Creates a birthday event. / function createBirthday () { const event = { start : { date : '2024-01-29' }, end : { date : '2024-01-30' }, eventType : 'birthday' , recurrence : [ "RRULE:FREQ=YEARLY" ], summary : "My friend's birthday" , transparency : "transparent" , visibility : "private" , } createEvent ( event ); } / Creates a Calendar event.

### API Reference \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deprecated behavior: If a non- default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped. insert POST /calendars/ calendarId /events Creates an event. instances GET /calendars/ calendarId /events/ eventId /instances Returns instances of the specified recurring event. list GET /calendars/ calendarId /events Returns events on the specified calendar. move POST /calendars/ calendarId /events/ eventId /move Moves an event to another calendar, i.e. changes an event's organizer.
- Method HTTP request Description URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted delete DELETE /calendars/ calendarId /events/ eventId Deletes an event. get GET /calendars/ calendarId /events/ eventId Returns an event based on its Google Calendar ID.
- Array fields, if specified, overwrite the existing arrays; this discards any previous array elements. quickAdd POST /calendars/ calendarId /events/quickAdd Creates an event based on a simple text string.
- Method HTTP request Description URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted get GET /colors Returns the color definitions for calendars and events.

