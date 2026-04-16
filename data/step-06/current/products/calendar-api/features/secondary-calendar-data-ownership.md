---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.086Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Secondary calendar data ownership"
feature_slug: "secondary-calendar-data-ownership"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendars"
  - "https://developers.google.com/workspace/calendar/api/v3/reference"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList"
keywords:
  - "secondary"
  - "calendar"
  - "ownership"
  - "calendars"
  - "now"
  - "have"
  - "single"
  - "owner"
---

# Secondary calendar data ownership

Product: Calendar API
Coverage: MEDIUM

## Step 02 Summary

Secondary calendars now have a single data owner exposed through the read-only dataOwner field, with ownership-based restrictions on deletion, access changes, and calendar list removal.

## Extended Definition

Secondary calendars now have a single data owner exposed through the read-only dataOwner field, with ownership-based restrictions on deletion, access changes, and calendar list removal.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
- [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)

## Supporting Pages

### Calendars \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use calendars.clear for clearing all events on primary calendars. get Returns metadata for a calendar. insert Creates a secondary calendar.
- For example, if a service account is the data owner, data ownership cannot be transferred. patch Updates metadata for a calendar.
- Set only for secondary calendars.
- Resource representations { "kind": "calendar#calendar", "etag": etag , "id": string , "summary": string , "description": string , "location": string , "timeZone": string , "dataOwner": string , "conferenceProperties": { "allowedConferenceSolutionTypes": [ string ] }, "autoAcceptInvitations": boolean } Property name Value Description Notes autoAcceptInvitations boolean Whether this calendar automatically accepts invitations.

### API Reference \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if a service account is the data owner, data ownership cannot be transferred. patch PATCH /calendars/ calendarId Updates metadata for a calendar.
- Deprecated behavior: If a non- default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped. insert POST /calendars/ calendarId /events Creates an event. instances GET /calendars/ calendarId /events/ eventId /instances Returns instances of the specified recurring event. list GET /calendars/ calendarId /events Returns events on the specified calendar. move POST /calendars/ calendarId /events/ eventId /move Moves an event to another calendar, i.e. changes an event's organizer.
- Use calendars.clear for clearing all events on primary calendars. get GET /calendars/ calendarId Returns metadata for a calendar. insert POST /calendars Creates a secondary calendar.
- This operation deletes all events associated with the primary calendar of an account. delete DELETE /calendars/ calendarId Deletes a secondary calendar.

### CalendarList \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A calendar has a single data owner, but can have multiple users with owner role. autoAcceptInvitations boolean Whether this calendar automatically accepts invitations.
- Set only for secondary calendars.
- Resource representations { "kind" : "calendar#calendarListEntry" , "etag" : etag , "id" : string , "summary" : string , "description" : string , "location" : string , "timeZone" : string , "dataOwner" : string , "summaryOverride" : string , "colorId" : string , "backgroundColor" : string , "foregroundColor" : string , "hidden" : boolean , "selected" : boolean , "accessRole" : string , "defaultReminders" : [ { "method" : string , "minutes" : integer } ], "notificationSettings" : { "notifications" : [ { "type" : string , "method" : string } ] } , "primary" : boolean , "deleted" : boolean , "conferenceProperties" : { "allowedConferenceSolutionTypes" : [ string ] } , "autoAcceptInvitations" : boolean } Property name Value Description Notes accessRole string The effective access role that the authenticated user has on the calendar.
- Methods delete Removes a calendar from the user's calendar list. get Returns a calendar from the user's calendar list. insert Inserts an existing calendar into the user's calendar list. list Returns the calendars on the user's calendar list. patch Updates an existing calendar on the user's calendar list.

