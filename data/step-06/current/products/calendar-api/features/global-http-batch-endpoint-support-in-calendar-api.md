---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.892Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Global HTTP batch endpoint support in Calendar API"
feature_slug: "global-http-batch-endpoint-support-in-calendar-api"
latest_feature_date: "2018-03-22"
deprecation_date: "2019-03-25"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/batch"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert"
  - "https://developers.google.com/workspace/calendar/api/guides/errors"
keywords:
  - "global"
  - "batch"
  - "http"
  - "endpoint"
  - "in"
  - "calendar"
  - "for"
  - "api"
---

# Global HTTP batch endpoint support in Calendar API

Product: Calendar API
Coverage: LOW

## Step 02 Summary

Support for global HTTP batch endpoints in the Calendar API was deprecated and scheduled for full discontinuation; deprecated on 2019-03-25.

## Extended Definition

Support for global HTTP batch endpoints in the Calendar API was deprecated and scheduled for full discontinuation; deprecated on 2019-03-25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/batch](https://developers.google.com/workspace/calendar/api/guides/batch)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)

## Supporting Pages

### Send batch requests \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/batch](https://developers.google.com/workspace/calendar/api/guides/batch)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Format of a batch request A batch request is a single standard HTTP request containing multiple Google Calendar API calls, using the multipart/mixed content type.
- Note : The batch system for the Google Calendar API uses the same syntax as the OData batch processing system, but the semantics differ.
- The Google Calendar API supports batching, to allow your client to put several API calls into a single HTTP request.
- Example batch request POST /batch/farm/v1 HTTP/1.1 Authorization: Bearer your auth token Host: www.googleapis.com Content-Type: multipart/mixed; boundary=batch foobarbaz Content-Length: total content length --batch foobarbaz Content-Type: application/http Content-ID: <item1:12930812@barnyard.example.com> GET /farm/v1/animals/pony --batch foobarbaz Content-Type: application/http Content-ID: <item2:12930812@barnyard.example.com> PUT /farm/v1/animals/sheep Content-Type: application/json Content-Length: part content length If-Match: "etag/sheep" { "animalName": "sheep", "animalAge": "5" "peltColor": "green", } --batch foobarbaz Content-Type: application/http Content-ID: <item3:12930812@barnyard.example.com> GET /farm/v1/animals If-None-Match: "etag/animals" --batch foobarbaz-- Example batch response This is the response to the example request in the previous section.

### CalendarList: insert \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization This request requires authorization with at least one of the following scopes: Scope https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.calendarlist For more information, see the authentication and authorization page.
- Request HTTP request POST https://www.googleapis.com/calendar/v3/users/me/calendarList Parameters Parameter name Value Description Optional query parameters colorRgbFormat boolean Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB).
- The attribute is only returned when the calendar is hidden, in which case the value is true . writable notificationSettings object The notifications that the authenticated user is receiving for this calendar. writable notificationSettings.notifications[]. method string The method used to deliver the notification.
- Optional. writable defaultReminders[] list The default reminders that the authenticated user has for this calendar. writable defaultReminders[]. method string The method used by this reminder.

### Handle API errors \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Calendar API returns two levels of error information: HTTP error codes and messages in the header A JSON object in the response body with additional details that can help you determine how to handle the error.
- This error can also occur if a request attempts to delete an event that has already been deleted. { "error": { "errors": [ { "domain": "calendar", "reason": "fullSyncRequired", "message": "Sync token is no longer valid, a full sync is required.", "locationType": "parameter", "location": "syncToken", } ], "code": 410, "message": "Sync token is no longer valid, a full sync is required." } } or { "error": { "errors": [ { "domain": "calendar", "reason": "updatedMinTooLongAgo", "message": "The requested minimum modification time lies too far in the past.", "locationType": "parameter", "location": "updatedMin", } ], "code": 410, "message": "The requested minimum modification time lies too far in the past." } } or { "error": { "errors": [ { "domain": "global", "reason": "deleted", "message": "Resource has been deleted" } ], "code": 410, "message": "Resource has been deleted" } } Suggested action: For the syncToken or updatedMin parameters, wipe the store and re-sync.
- Shared properties (for example, guestsCanInviteOthers , guestsCanModify , or guestsCanSeeOtherGuests ) can only be set by the organizer. { "error": { "errors": [ { "domain": "calendar", "reason": "forbiddenForNonOrganizer", "message": "Shared properties can only be changed by the organizer of the event." } ], "code": 403, "message": "Shared properties can only be changed by the organizer of the event." } } Suggested actions: If you're using Events: insert , Events: import , or Events: update , and your request doesn't include any shared properties, this is equivalent to trying to set them to their default values.
- 403: Rate Limit Exceeded The user has reached Google Calendar API's maximum request rate per calendar or per authenticated user. { "error": { "errors": [ { "domain": "usageLimits", "reason": "rateLimitExceeded", "message": "Rate Limit Exceeded" } ], "code": 403, "message": "Rate Limit Exceeded" } } Suggested action: rateLimitExceeded errors can return either 403 or 429 error codes—currently they are functionally similar and should be responded to in the same way, by using exponential backoff .

