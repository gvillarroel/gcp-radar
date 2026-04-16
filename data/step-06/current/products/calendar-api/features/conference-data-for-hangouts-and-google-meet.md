---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.105Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Conference data for Hangouts and Google Meet"
feature_slug: "conference-data-for-hangouts-and-google-meet"
latest_feature_date: "2017-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/create-events"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendars"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList"
keywords:
  - "conference"
  - "hangouts"
  - "meet"
  - "calendar"
  - "supports"
  - "events"
  - "through"
  - "conferencedata"
---

# Conference data for Hangouts and Google Meet

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API supports Hangouts and Google Meet conference data in events through the conferenceData field, including reading, copying, creating, and clearing conference details.

## Extended Definition

The Calendar API supports Hangouts and Google Meet conference data in events through the conferenceData field, including reading, copying, creating, and clearing conference details.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)

## Supporting Pages

### Create events \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are three types of conferenceData currently supported, as denoted by the conferenceData.conferenceSolution.key.type : Hangouts for consumers ( eventHangout ) Classic Hangouts for Google Workspace users (deprecated; eventNamedHangout ) Google Meet ( hangoutsMeet ) You can learn which conference type is supported for any given calendar of a user by looking at the conferenceProperties.allowedConferenceSolutionTypes in the calendars and calendarList collections.
- For example, to request conference generation for an existing event: JavaScript const eventPatch = { conferenceData : { createRequest : { requestId : "7qxalsvy0e" } } }; gapi . client . calendar . events . patch ({ calendarId : "primary" , eventId : "7cbh8rpc10lrc0ckih9tafss99" , resource : eventPatch , sendUpdates : "all" , conferenceDataVersion : 1 }). execute ( function ( event ) { console . log ( "Conference created for event: %s" , event . htmlLink ); }); The immediate response to this call might not yet contain the fully-populated conferenceData ; this is indicated by a status code of pending in the status field.
- Add video and phone conferences to events You can associate events with Hangouts and Google Meet conferences to allow your users to meet remotely via a phone call or a video call.
- If you wish to schedule multiple Calendar events with the same conference details, you can copy the entire conferenceData from one event to another.

### CalendarList \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The possible values are: "eventHangout" "eventNamedHangout" "hangoutsMeet" Optional. dataOwner string The email of the owner of the calendar.
- Resource representations { "kind" : "calendar#calendarListEntry" , "etag" : etag , "id" : string , "summary" : string , "description" : string , "location" : string , "timeZone" : string , "dataOwner" : string , "summaryOverride" : string , "colorId" : string , "backgroundColor" : string , "foregroundColor" : string , "hidden" : boolean , "selected" : boolean , "accessRole" : string , "defaultReminders" : [ { "method" : string , "minutes" : integer } ], "notificationSettings" : { "notifications" : [ { "type" : string , "method" : string } ] } , "primary" : boolean , "deleted" : boolean , "conferenceProperties" : { "allowedConferenceSolutionTypes" : [ string ] } , "autoAcceptInvitations" : boolean } Property name Value Description Notes accessRole string The effective access role that the authenticated user has on the calendar.
- Possible values are: " eventCreation " - Notification sent when a new event is put on the calendar. " eventChange " - Notification sent when an event is changed. " eventCancellation " - Notification sent when an event is cancelled. " eventResponse " - Notification sent when an attendee responds to the event invitation. " agenda " - An agenda with the events of the day (sent out in the morning).
- Optional. writable conferenceProperties nested object Conferencing properties for this calendar, for example what types of conferences are allowed. conferenceProperties. allowedConferenceSolutionTypes[] list The types of conference solutions that are supported for this calendar.

### Calendars \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The possible values are: "eventHangout" "eventNamedHangout" "hangoutsMeet" Optional. dataOwner string The email of the owner of the calendar.
- Resource representations { "kind": "calendar#calendar", "etag": etag , "id": string , "summary": string , "description": string , "location": string , "timeZone": string , "dataOwner": string , "conferenceProperties": { "allowedConferenceSolutionTypes": [ string ] }, "autoAcceptInvitations": boolean } Property name Value Description Notes autoAcceptInvitations boolean Whether this calendar automatically accepts invitations.
- Only valid for resource calendars. conferenceProperties nested object Conferencing properties for this calendar, for example what types of conferences are allowed. conferenceProperties. allowedConferenceSolutionTypes[] list The types of conference solutions that are supported for this calendar.
- Use calendars.clear for clearing all events on primary calendars. get Returns metadata for a calendar. insert Creates a secondary calendar.

