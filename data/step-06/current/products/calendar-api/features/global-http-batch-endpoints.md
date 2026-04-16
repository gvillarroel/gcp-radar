---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.102Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Global HTTP batch endpoints"
feature_slug: "global-http-batch-endpoints"
latest_feature_date: "2018-03-22"
deprecation_date: "2019-03-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/batch"
  - "https://developers.google.com/workspace/calendar/api/guides/errors"
  - "https://developers.google.com/workspace/calendar/api/guides/calendar-status"
keywords:
  - "global"
  - "http"
  - "batch"
  - "endpoints"
  - "calendar"
  - "deprecated"
  - "scheduled"
  - "discontinuation"
---

# Global HTTP batch endpoints

Product: Calendar API
Coverage: MEDIUM

## Step 02 Summary

Calendar API support for Global HTTP batch endpoints is deprecated and scheduled for discontinuation; deprecated on 2019-03-25.

## Extended Definition

Calendar API support for Global HTTP batch endpoints is deprecated and scheduled for discontinuation; deprecated on 2019-03-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/batch](https://developers.google.com/workspace/calendar/api/guides/batch)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)

## Supporting Pages

### Send batch requests \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/batch](https://developers.google.com/workspace/calendar/api/guides/batch)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format of a batch request A batch request is a single standard HTTP request containing multiple Google Calendar API calls, using the multipart/mixed content type.
- The Google Calendar API supports batching, to allow your client to put several API calls into a single HTTP request.
- HTTP/1.1 200 Content-Length: response total content length Content-Type: multipart/mixed; boundary=batch foobarbaz --batch foobarbaz Content-Type: application/http Content-ID: <response-item1:12930812@barnyard.example.com> HTTP/1.1 200 OK Content-Type application/json Content-Length: response part 1 content length ETag: "etag/pony" { "kind": "farm#animal", "etag": "etag/pony", "selfLink": "/farm/v1/animals/pony", "animalName": "pony", "animalAge": 34, "peltColor": "white" } --batch foobarbaz Content-Type: application/http Content-ID: <response-item2:12930812@barnyard.example.com> HTTP/1.1 200 OK Content-Type: application/json Content-Length: response part 2 content length ETag: "etag/sheep" { "kind": "farm#animal", "etag": "etag/sheep", "selfLink": "/farm/v1/animals/sheep", "animalName": "sheep", "animalAge": 5, "peltColor": "green" } --batch foobarbaz Content-Type: application/http Content-ID: <response-item3:12930812@barnyard.example.com> HTTP/1.1 304 Not Modified ETag: "etag/animals" --batch foobarbaz-- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example batch request POST /batch/farm/v1 HTTP/1.1 Authorization: Bearer your auth token Host: www.googleapis.com Content-Type: multipart/mixed; boundary=batch foobarbaz Content-Length: total content length --batch foobarbaz Content-Type: application/http Content-ID: <item1:12930812@barnyard.example.com> GET /farm/v1/animals/pony --batch foobarbaz Content-Type: application/http Content-ID: <item2:12930812@barnyard.example.com> PUT /farm/v1/animals/sheep Content-Type: application/json Content-Length: part content length If-Match: "etag/sheep" { "animalName": "sheep", "animalAge": "5" "peltColor": "green", } --batch foobarbaz Content-Type: application/http Content-ID: <item3:12930812@barnyard.example.com> GET /farm/v1/animals If-None-Match: "etag/animals" --batch foobarbaz-- Example batch response This is the response to the example request in the previous section.

### Handle API errors \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This error can also occur if a request attempts to delete an event that has already been deleted. { "error": { "errors": [ { "domain": "calendar", "reason": "fullSyncRequired", "message": "Sync token is no longer valid, a full sync is required.", "locationType": "parameter", "location": "syncToken", } ], "code": 410, "message": "Sync token is no longer valid, a full sync is required." } } or { "error": { "errors": [ { "domain": "calendar", "reason": "updatedMinTooLongAgo", "message": "The requested minimum modification time lies too far in the past.", "locationType": "parameter", "location": "updatedMin", } ], "code": 410, "message": "The requested minimum modification time lies too far in the past." } } or { "error": { "errors": [ { "domain": "global", "reason": "deleted", "message": "Resource has been deleted" } ], "code": 410, "message": "Resource has been deleted" } } Suggested action: For the syncToken or updatedMin parameters, wipe the store and re-sync.
- 409: Conflict A batched item inside an events.batch operation can't be executed due to an operational conflict with other requested batched items. { "error": { "errors": [ { "domain": "global", "reason": "conflict", "message": "Conflict" } ], "code": 409, "message": "Conflict" } } Suggested action: Exclude all successfully finished and all definitely failed batched items and retry the remaining ones in a different events.batch or corresponding single event operations.
- Here are some examples: when the requested resource (with the provided ID) has never existed when accessing a calendar that the user can not access { "error": { "errors": [ { "domain": "global", "reason": "notFound", "message": "Not Found" } ], "code": 404, "message": "Not Found" } } Suggested action: Use exponential backoff .
- The Calendar API returns two levels of error information: HTTP error codes and messages in the header A JSON object in the response body with additional details that can help you determine how to handle the error.

### "Manage focus time, out of office, and working location events \_|\_ Google\

- URL: [https://developers.google.com/workspace/calendar/api/guides/calendar-status](https://developers.google.com/workspace/calendar/api/guides/calendar-status)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://developers.google.com/workspace/calendar/api/v3/reference/events#resource / function parseWorkingLocation ( event ) { if ( event . eventType != "workingLocation" ) { throw new Error ( "'" + event . summary + "' is not a working location event." ); } var location = 'No Location' ; const workingLocation = event . workingLocationProperties ; if ( workingLocation ) { if ( workingLocation . type === 'homeOffice' ) { location = 'Home' ; } if ( workingLocation . type === 'officeLocation' ) { location = workingLocation . officeLocation . label ; } if ( workingLocation . type === 'customLocation' ) { location = workingLocation . customLocation . label ; } } return ${ event . start . date } : ${ location } ; } Run the code sample Above the code editor, select the function to run from the drop-down menu, and click Run .
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/list / function listEvents ( eventType = 'default' ) { const calendarId = 'primary' // Query parameters for the list request. const optionalArgs = { eventTypes : [ eventType ], showDeleted : false , singleEvents : true , timeMax : '2023-04-01T00:00:00+01:00' , timeMin : '2023-03-27T00:00:00+01:00' , } try { var response = Calendar .
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/get / function readEvent () { const calendarId = 'primary' ; // Replace with a valid eventId. const eventId = "sample-event-id" ; try { var response = Calendar .
- See https://developers.google.com/workspace/calendar/api/v3/reference/events/insert / function createEvent ( event ) { const calendarId = 'primary' ; try { var response = Calendar .

