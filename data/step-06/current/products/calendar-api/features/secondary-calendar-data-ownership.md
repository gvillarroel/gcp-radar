---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.876Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Secondary calendar data ownership"
feature_slug: "secondary-calendar-data-ownership"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/v3/reference"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendars"
  - "https://developers.google.com/workspace/calendar/api/guides/overview"
keywords:
  - "secondary"
  - "single"
  - "introduced"
  - "ownership"
  - "owner"
  - "calendar"
  - "the"
  - "api"
---

# Secondary calendar data ownership

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API introduced a single data owner model for secondary calendars, with a read-only dataOwner field and owner-restricted actions.

## Extended Definition

The Calendar API introduced a single data owner model for secondary calendars, with a read-only dataOwner field and owner-restricted actions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
- [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)

## Supporting Pages

### API Reference \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Method HTTP request Description URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted get GET /users/me/settings/ setting Returns a single user setting. list GET /users/me/settings Returns all user settings for the authenticated user. watch POST /users/me/settings/watch Watch for changes to Settings resources.
- For example, if a service account is the data owner, data ownership cannot be transferred. patch PATCH /calendars/ calendarId Updates metadata for a calendar.
- Method HTTP request Description URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted delete DELETE /users/me/calendarList/ calendarId Removes a calendar from the user's calendar list. get GET /users/me/calendarList/ calendarId Returns a calendar from the user's calendar list. insert POST /users/me/calendarList Inserts an existing calendar into the user's calendar list. list GET /users/me/calendarList Returns the calendars on the user's calendar list. patch PATCH /users/me/calendarList/ calendarId Updates an existing calendar on the user's calendar list.
- Method HTTP request Description URIs relative to https://www.googleapis.com/calendar/v3, unless otherwise noted delete DELETE /calendars/ calendarId /acl/ ruleId Deletes an access control rule. get GET /calendars/ calendarId /acl/ ruleId Returns an access control rule. insert POST /calendars/ calendarId /acl Creates an access control rule. list GET /calendars/ calendarId /acl Returns the rules in the access control list for the calendar. patch PATCH /calendars/ calendarId /acl/ ruleId Updates an access control rule.

### Calendars \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if a service account is the data owner, data ownership cannot be transferred. patch Updates metadata for a calendar.
- Resource representations { "kind": "calendar#calendar", "etag": etag , "id": string , "summary": string , "description": string , "location": string , "timeZone": string , "dataOwner": string , "conferenceProperties": { "allowedConferenceSolutionTypes": [ string ] }, "autoAcceptInvitations": boolean } Property name Value Description Notes autoAcceptInvitations boolean Whether this calendar automatically accepts invitations.
- The possible values are: "eventHangout" "eventNamedHangout" "hangoutsMeet" Optional. dataOwner string The email of the owner of the calendar.
- This operation deletes all events associated with the primary calendar of an account. delete Deletes a secondary calendar.

### Google Calendar API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Following is a list of common terms used in the Google Calendar API: Event An event on a calendar containing information such as the title, start and end times, and attendees.
- The Google Calendar API is a RESTful API that can be accessed through explicit HTTP calls or using the Google Client Libraries.
- The metadata for a single calendar that appears on the calendar list is represented by a CalendarListEntry resource .
- To learn how to configure and run a simple Google Calendar API app, read the Quickstarts overview .

