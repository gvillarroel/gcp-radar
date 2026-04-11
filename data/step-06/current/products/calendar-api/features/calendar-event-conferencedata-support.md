---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.894Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Calendar event conferenceData support"
feature_slug: "calendar-event-conferencedata-support"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update"
keywords:
  - "conferencedata"
  - "conference"
  - "via"
  - "event"
  - "calendar"
  - "added"
  - "for"
  - "api"
---

# Calendar event conferenceData support

Product: Calendar API
Coverage: LOW

## Step 02 Summary

Calendar API added conference support for event data via conferenceData, including Hangouts and Google Meet features such as reading, copying, creating, and clearing conference data.

## Extended Definition

Calendar API added conference support for event data via conferenceData, including Hangouts and Google Meet features such as reading, copying, creating, and clearing conference data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update)

## Supporting Pages

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.
- There are three types of conferenceData currently supported, as denoted by the conferenceData.conferenceSolution.key.type : Hangouts for consumers ( eventHangout ) Classic Hangouts for Google Workspace users (deprecated; eventNamedHangout ) Google Meet ( hangoutsMeet ) You can learn which conference type is supported for any given calendar of a user by looking at the conferenceProperties.allowedConferenceSolutionTypes in the calendars and calendarList collections.
- Besides the type , the conferenceSolution also provides the name and the iconUri fields that you can use to represent the conference solution as shown below: JavaScript const solution = event . conferenceData . conferenceSolution ; const content = document . getElementById ( "content" ); const text = document . createTextNode ( "Join " + solution . name ); const icon = document . createElement ( "img" ); icon . src = solution . iconUri ; content . appendChild ( icon ); content . appendChild ( text ); You can create a new conference for an event by providing a createRequest with a newly generated requestId which can be a random string .
- Important: You must perform a full sync of all events before enabling the conference data support (by setting of the conferenceDataVersion request parameter to 1 for event modifications) when adding conference support into your existing app that stores events locally.

### CalendarList \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource representations { "kind" : "calendar#calendarListEntry" , "etag" : etag , "id" : string , "summary" : string , "description" : string , "location" : string , "timeZone" : string , "dataOwner" : string , "summaryOverride" : string , "colorId" : string , "backgroundColor" : string , "foregroundColor" : string , "hidden" : boolean , "selected" : boolean , "accessRole" : string , "defaultReminders" : [ { "method" : string , "minutes" : integer } ], "notificationSettings" : { "notifications" : [ { "type" : string , "method" : string } ] } , "primary" : boolean , "deleted" : boolean , "conferenceProperties" : { "allowedConferenceSolutionTypes" : [ string ] } , "autoAcceptInvitations" : boolean } Property name Value Description Notes accessRole string The effective access role that the authenticated user has on the calendar.
- Optional. writable conferenceProperties nested object Conferencing properties for this calendar, for example what types of conferences are allowed. conferenceProperties. allowedConferenceSolutionTypes[] list The types of conference solutions that are supported for this calendar.
- Possible values are: " eventCreation " - Notification sent when a new event is put on the calendar. " eventChange " - Notification sent when an event is changed. " eventCancellation " - Notification sent when an event is cancelled. " eventResponse " - Notification sent when an attendee responds to the event invitation. " agenda " - An agenda with the events of the day (sent out in the morning).
- Read-only. notificationSettings object The notifications that the authenticated user is receiving for this calendar. writable notificationSettings. notifications[] list The list of notifications set for this calendar. notificationSettings.notifications[]. method string The method used to deliver the notification.

### CalendarList: update \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization This request requires authorization with at least one of the following scopes: Scope https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.app.created https://www.googleapis.com/auth/calendar.calendarlist For more information, see the authentication and authorization page.
- Possible values are: " eventCreation " - Notification sent when a new event is put on the calendar. " eventChange " - Notification sent when an event is changed. " eventCancellation " - Notification sent when an event is cancelled. " eventResponse " - Notification sent when an attendee responds to the event invitation. " agenda " - An agenda with the events of the day (sent out in the morning).
- The attribute is only returned when the calendar is hidden, in which case the value is true . writable notificationSettings object The notifications that the authenticated user is receiving for this calendar. writable notificationSettings.notifications[]. method string The method used to deliver the notification.
- Request body In the request body, supply a CalendarList resource with the following properties: Property name Value Description Notes Optional Properties backgroundColor string The main color of the calendar in the hexadecimal format " #0088aa ".

