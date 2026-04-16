---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.100Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Additional OAuth scopes"
feature_slug: "additional-oauth-scopes"
latest_feature_date: "2018-10-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/auth"
  - "https://developers.google.com/workspace/calendar/api/guides/errors"
  - "https://developers.google.com/workspace/calendar/api/guides/overview"
keywords:
  - "additional"
  - "oauth"
  - "scopes"
  - "calendar"
  - "supports"
  - "four"
  - "let"
  - "applications"
---

# Additional OAuth scopes

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API supports four new OAuth scopes that let applications request more limited access to calendar data.

## Extended Definition

The Calendar API supports four new OAuth scopes that let applications request more limited access to calendar data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)

## Supporting Pages

### Choose Google Calendar API scopes \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Calendar API supports the following scopes: Scope Meaning https://www.googleapis.com/auth/calendar See, edit, share, and permanently delete all the calendars you can access using Google Calendar. https://www.googleapis.com/auth/calendar.readonly See and download any calendar you can access using your Calendar. https://www.googleapis.com/auth/calendar.freebusy View your availability in your calendars. https://www.googleapis.com/auth/calendar.events View and edit events on all your calendars. https://www.googleapis.com/auth/calendar.events.readonly View events on all your calendars. https://www.googleapis.com/auth/calendar.settings.readonly View your Calendar settings. https://www.googleapis.com/auth/calendar.addons.execute Run as a Calendar add-on. https://www.googleapis.com/auth/calendar.addons.current.event.read See the events you open in Google Calendar. https://www.googleapis.com/auth/calendar.addons.current.event.write Edit the events you open in Google Calendar. https://www.googleapis.com/auth/calendar.events.owned See, create, change, and delete events on Google calendars you own. https://www.googleapis.com/auth/calendar.events.owned.readonly See the events on Google calendars you own. https://www.googleapis.com/auth/calendar.events.freebusy See the availability on Google calendars you have access to. https://www.googleapis.com/auth/calendar.app.created Make secondary Google calendars, and see, create, change, and delete events on them. https://www.googleapis.com/auth/calendar.calendarlist See, add, and remove Google calendars you're subscribed to. https://www.googleapis.com/auth/calendar.calendarlist.readonly See the list of Google calendars you're subscribed to. https://www.googleapis.com/auth/calendar.calendars See and change the properties of Google calendars you have access to, and create secondary calendars. https://www.googleapis.com/auth/calendar.calendars.readonly See the title, description, default time zone, and other properties of Google calendars you have access to. https://www.googleapis.com/auth/calendar.acls See and change the sharing permissions of Google calendars you own. https://www.googleapis.com/auth/calendar.acls.readonly See the sharing permissions of Google calendars you own. https://www.googleapis.com/auth/calendar.events.public.readonly See the events on public calendars.
- Configure OAuth 2.0 for authorization Configure the OAuth consent screen and choose scopes to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.
- Home Google Workspace Google Calendar Guides Send feedback Choose Google Calendar API scopes Stay organized with collections Save and categorize content based on your preferences.
- Calendar API scopes To define the level of access granted to your app, you need to identify and declare authorization scopes .

### Google Calendar API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Following is a list of common terms used in the Google Calendar API: Event An event on a calendar containing information such as the title, start and end times, and attendees.
- Home Google Workspace Google Calendar Guides Send feedback Google Calendar API overview Stay organized with collections Save and categorize content based on your preferences.
- The Google Calendar API is a RESTful API that can be accessed through explicit HTTP calls or using the Google Client Libraries.
- The metadata for a single calendar that appears on the calendar list is represented by a CalendarListEntry resource .

### Handle API errors \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Calendar API returns two levels of error information: HTTP error codes and messages in the header A JSON object in the response body with additional details that can help you determine how to handle the error.
- This error can also occur if a request attempts to delete an event that has already been deleted. { "error": { "errors": [ { "domain": "calendar", "reason": "fullSyncRequired", "message": "Sync token is no longer valid, a full sync is required.", "locationType": "parameter", "location": "syncToken", } ], "code": 410, "message": "Sync token is no longer valid, a full sync is required." } } or { "error": { "errors": [ { "domain": "calendar", "reason": "updatedMinTooLongAgo", "message": "The requested minimum modification time lies too far in the past.", "locationType": "parameter", "location": "updatedMin", } ], "code": 410, "message": "The requested minimum modification time lies too far in the past." } } or { "error": { "errors": [ { "domain": "global", "reason": "deleted", "message": "Resource has been deleted" } ], "code": 410, "message": "Resource has been deleted" } } Suggested action: For the syncToken or updatedMin parameters, wipe the store and re-sync.
- Shared properties (for example, guestsCanInviteOthers , guestsCanModify , or guestsCanSeeOtherGuests ) can only be set by the organizer. { "error": { "errors": [ { "domain": "calendar", "reason": "forbiddenForNonOrganizer", "message": "Shared properties can only be changed by the organizer of the event." } ], "code": 403, "message": "Shared properties can only be changed by the organizer of the event." } } Suggested actions: If you're using Events: insert , Events: import , or Events: update , and your request doesn't include any shared properties, this is equivalent to trying to set them to their default values.
- 403: Rate Limit Exceeded The user has reached Google Calendar API's maximum request rate per calendar or per authenticated user. { "error": { "errors": [ { "domain": "usageLimits", "reason": "rateLimitExceeded", "message": "Rate Limit Exceeded" } ], "code": 403, "message": "Rate Limit Exceeded" } } Suggested action: rateLimitExceeded errors can return either 403 or 429 error codes—currently they are functionally similar and should be responded to in the same way, by using exponential backoff .

