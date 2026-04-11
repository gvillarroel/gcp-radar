---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.894Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "JSON-RPC protocol support in Calendar API"
feature_slug: "json-rpc-protocol-support-in-calendar-api"
latest_feature_date: "2018-03-22"
deprecation_date: "2019-03-25"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/performance"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert"
  - "https://developers.google.com/workspace/calendar/api/guides/errors"
keywords:
  - "protocol"
  - "using"
  - "json"
  - "rpc"
  - "in"
  - "calendar"
  - "for"
  - "api"
---

# JSON-RPC protocol support in Calendar API

Product: Calendar API
Coverage: LOW

## Step 02 Summary

Support for using the JSON-RPC protocol with the Calendar API was deprecated and scheduled for full discontinuation; deprecated on 2019-03-25.

## Extended Definition

Support for using the JSON-RPC protocol with the Calendar API was deprecated and scheduled for full discontinuation; deprecated on 2019-03-25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)

## Supporting Pages

### Performance tips \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/performance](https://developers.google.com/workspace/calendar/api/guides/performance)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- If you are using the Java API Client Library , use Data.NULL STRING instead; for details, see JSON null .
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag": " ETagString " "title": "" , / Clear the value of the title by setting it to the empty string. / "comment": null , / Delete the comment by replacing its value with null. / "characteristics": { "length": "short", "level": "10" , / Modify the level value. / "followers": ["Jo", "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy": "high" / Add a new characteristic. / }, } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag": " newETagString " "title": "" , / Title is cleared; deleted comment field is missing. / "characteristics": { "length": "short", "level": "10" , / Value is updated. / "followers": ["Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy": "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.

### CalendarList: insert \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization This request requires authorization with at least one of the following scopes: Scope https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.calendarlist For more information, see the authentication and authorization page.
- The attribute is only returned when the calendar is hidden, in which case the value is true . writable notificationSettings object The notifications that the authenticated user is receiving for this calendar. writable notificationSettings.notifications[]. method string The method used to deliver the notification.
- Request HTTP request POST https://www.googleapis.com/calendar/v3/users/me/calendarList Parameters Parameter name Value Description Optional query parameters colorRgbFormat boolean Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB).
- Optional. writable defaultReminders[] list The default reminders that the authenticated user has for this calendar. writable defaultReminders[]. method string The method used by this reminder.

### Handle API errors \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Calendar API returns two levels of error information: HTTP error codes and messages in the header A JSON object in the response body with additional details that can help you determine how to handle the error.
- Shared properties (for example, guestsCanInviteOthers , guestsCanModify , or guestsCanSeeOtherGuests ) can only be set by the organizer. { "error": { "errors": [ { "domain": "calendar", "reason": "forbiddenForNonOrganizer", "message": "Shared properties can only be changed by the organizer of the event." } ], "code": 403, "message": "Shared properties can only be changed by the organizer of the event." } } Suggested actions: If you're using Events: insert , Events: import , or Events: update , and your request doesn't include any shared properties, this is equivalent to trying to set them to their default values.
- 403: Rate Limit Exceeded The user has reached Google Calendar API's maximum request rate per calendar or per authenticated user. { "error": { "errors": [ { "domain": "usageLimits", "reason": "rateLimitExceeded", "message": "Rate Limit Exceeded" } ], "code": 403, "message": "Rate Limit Exceeded" } } Suggested action: rateLimitExceeded errors can return either 403 or 429 error codes—currently they are functionally similar and should be responded to in the same way, by using exponential backoff .
- This error can also occur if a request attempts to delete an event that has already been deleted. { "error": { "errors": [ { "domain": "calendar", "reason": "fullSyncRequired", "message": "Sync token is no longer valid, a full sync is required.", "locationType": "parameter", "location": "syncToken", } ], "code": 410, "message": "Sync token is no longer valid, a full sync is required." } } or { "error": { "errors": [ { "domain": "calendar", "reason": "updatedMinTooLongAgo", "message": "The requested minimum modification time lies too far in the past.", "locationType": "parameter", "location": "updatedMin", } ], "code": 410, "message": "The requested minimum modification time lies too far in the past." } } or { "error": { "errors": [ { "domain": "global", "reason": "deleted", "message": "Resource has been deleted" } ], "code": 410, "message": "Resource has been deleted" } } Suggested action: For the syncToken or updatedMin parameters, wipe the store and re-sync.

