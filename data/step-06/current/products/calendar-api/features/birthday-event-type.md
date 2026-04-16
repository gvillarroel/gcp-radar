---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.089Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Birthday event type"
feature_slug: "birthday-event-type"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/event-types"
  - "https://developers.google.com/workspace/calendar/api/v3/reference"
  - "https://developers.google.com/workspace/calendar/api/guides/calendar-status"
keywords:
  - "birthday"
  - "event"
  - "type"
  - "calendar"
  - "supports"
  - "eventtype"
  - "creating"
  - "managing"
---

# Birthday event type

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API supports a birthday eventType for creating, managing, filtering, and watching birthday events as special recurring all-day events.

## Extended Definition

The Calendar API supports a birthday eventType for creating, managing, filtering, and watching birthday events as special recurring all-day events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)

## Supporting Pages

### Event types \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/event-types](https://developers.google.com/workspace/calendar/api/guides/event-types)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The API supports the watch method to subscribe to changes on birthday events on Google Calendar. eventTypes can be set to 'birthday' to subscribe to updates on birthday events.
- Google Calendar API supports get , instances , and list methods for reading birthday events. eventTypes can be set to 'birthday' to list only birthday events.
- If no type is specified, all event types, including birthdays, will be subscribed to.
- If no type is specified, birthdays will be listed alongside all other event types.

### API Reference \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- Source ID: `site-api-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter . import POST /calendars/ calendarId /events/import Imports an event.
- Note that only default events can be moved; birthday , focusTime , fromGmail , outOfOffice and workingLocation events cannot be moved.
- Deprecated behavior: If a non- default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped. insert POST /calendars/ calendarId /events Creates an event. instances GET /calendars/ calendarId /events/ eventId /instances Returns instances of the specified recurring event. list GET /calendars/ calendarId /events Returns events on the specified calendar. move POST /calendars/ calendarId /events/ eventId /move Moves an event to another calendar, i.e. changes an event's organizer.
- Resource types Acl CalendarList Calendars Channels Colors Events Freebusy Settings Acl For Acl Resource details, see the resource representation page.

### "Manage focus time, out of office, and working location events \_|\_ Google\

- URL: [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To list status events, use the events.list method, specifying one or more of the following values in the eventTypes field: 'focusTime' 'outOfOffice' 'workingLocation' Then, in the returned Event objects, inspect that the eventType field has the requested value, and refer to the corresponding field for details about the status created by the user in Google Calendar: focusTimeProperties outOfOfficeProperties workingLocationProperties Subscribe to changes on status events You can subscribe to changes on status events in the Events resource of the Calendar API.
- Use the events.watch method, specifying the calendarId of the Calendar to subscribe to and one or more of the following values in the eventTypes field: 'focusTime' 'outOfOffice' 'workingLocation' Create and update Calendar status events To create a status event, you create an instance of the Events resource using the events.insert method, setting the required fields for the event type.
- Secondary calendars can't have status events. / Creates a focus time event. / function createFocusTime () { const event = { start : { dateTime : '2023-11-14T10:00:00+01:00' }, end : { dateTime : '2023-11-14T12:00:00+01:00' }, eventType : 'focusTime' , focusTimeProperties : { chatStatus : 'doNotDisturb' , autoDeclineMode : 'declineOnlyNewConflictingInvitations' , declineMessage : 'Declined because I am in focus time.' , } } createEvent ( event ); } / Creates an out of office event. / function createOutOfOffice () { const event = { start : { dateTime : '2023-11-15T10:00:00+01:00' }, end : { dateTime : '2023-11-15T18:00:00+01:00' }, eventType : 'outOfOffice' , outOfOfficeProperties : { autoDeclineMode : 'declineOnlyNewConflictingInvitations' , declineMessage : 'Declined because I am on vacation.' , } } createEvent ( event ); } / Creates a working location event. / function createWorkingLocation () { const event = { start : { date : "2023-06-01" }, end : { date : "2023-06-02" }, eventType : "workingLocation" , visibility : "public" , transparency : "transparent" , workingLocationProperties : { type : 'customLocation' , customLocation : { label : "a custom location" }, } } createEvent ( event ); } / Creates a Calendar event.
- See https://developers.google.com/workspace/calendar/api/v3/reference/events#resource / function parseWorkingLocation ( event ) { if ( event . eventType != "workingLocation" ) { throw new Error ( "'" + event . summary + "' is not a working location event." ); } var location = 'No Location' ; const workingLocation = event . workingLocationProperties ; if ( workingLocation ) { if ( workingLocation . type === 'homeOffice' ) { location = 'Home' ; } if ( workingLocation . type === 'officeLocation' ) { location = workingLocation . officeLocation . label ; } if ( workingLocation . type === 'customLocation' ) { location = workingLocation . customLocation . label ; } } return ${ event . start . date } : ${ location } ; } Run the code sample Above the code editor, select the function to run from the drop-down menu, and click Run .

