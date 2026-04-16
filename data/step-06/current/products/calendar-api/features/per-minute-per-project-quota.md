---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:39:20.095Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Per-minute per-project quota"
feature_slug: "per-minute-per-project-quota"
latest_feature_date: "2021-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/quota"
  - "https://developers.google.com/workspace/calendar/api/guides/errors"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList"
keywords:
  - "per"
  - "minute"
  - "project"
  - "quota"
  - "calendar"
  - "provides"
  - "limit"
  - "requests"
---

# Per-minute per-project quota

Product: Calendar API
Coverage: MEDIUM

## Step 02 Summary

The Calendar API provides a quota limit for requests per minute per project.

## Extended Definition

The Calendar API provides a quota limit for requests per minute per project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/quota](https://developers.google.com/workspace/calendar/api/guides/quota)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)

## Supporting Pages

### Manage quotas \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/quota](https://developers.google.com/workspace/calendar/api/guides/quota)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Types of Calendar API usage quotas Two types of quotas are enforced: Per minute per project: This is the number of requests made by your Google Cloud project.
- Proper accounting with service accounts If your application is performing requests using domain-wide delegation , by default the service account is charged with regard to "per minute per project per user" quotas, and not the user you're impersonating.
- There are three important limitations to consider when using the Calendar API: API usage quotas are enforced per project and per user.
- Quotas are calculated per minute using a sliding window, so a rapid burst of traffic which exceeds your per-minute quota during one minute will result in rate limiting during the next window to ensure that, on average, your usage remains within the quotas.

### Handle API errors \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 403: Calendar usage limits exceeded The user reached one of the Google Calendar limits in place to protect Google users and infrastructure from abusive behavior. { "error": { "errors": [ { "domain": "usageLimits", "message": "Calendar usage limits exceeded.", "reason": "quotaExceeded" } ], "code": 403, "message": "Calendar usage limits exceeded." } } Suggested actions: Read more on the Calendar usage limits in the Google Workspace Administrator help .
- 403: Rate Limit Exceeded The user has reached Google Calendar API's maximum request rate per calendar or per authenticated user. { "error": { "errors": [ { "domain": "usageLimits", "reason": "rateLimitExceeded", "message": "Rate Limit Exceeded" } ], "code": 403, "message": "Rate Limit Exceeded" } } Suggested action: rateLimitExceeded errors can return either 403 or 429 error codes—currently they are functionally similar and should be responded to in the same way, by using exponential backoff .
- 429: Too many requests A rateLimitExceeded error occurs when the user has sent too many requests in a given amount of time. { "error": { "errors": [ { "domain": "usageLimits", "reason": "rateLimitExceeded", "message": "Rate Limit Exceeded" } ], "code": 429, "message": "Rate Limit Exceeded" } } Suggested action: rateLimitExceeded errors can return either 403 or 429 error codes—currently they are functionally similar and should be responded to in the same way, by using exponential backoff .
- 403: User Rate Limit Exceeded One of the limits from the Developer Console has been reached. { "error": { "errors": [ { "domain": "usageLimits", "reason": "userRateLimitExceeded", "message": "User Rate Limit Exceeded" } ], "code": 403, "message": "User Rate Limit Exceeded" } } Suggested actions: Make sure your app follows best practices from manage quotas .

### CalendarList \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource representations { "kind" : "calendar#calendarListEntry" , "etag" : etag , "id" : string , "summary" : string , "description" : string , "location" : string , "timeZone" : string , "dataOwner" : string , "summaryOverride" : string , "colorId" : string , "backgroundColor" : string , "foregroundColor" : string , "hidden" : boolean , "selected" : boolean , "accessRole" : string , "defaultReminders" : [ { "method" : string , "minutes" : integer } ], "notificationSettings" : { "notifications" : [ { "type" : string , "method" : string } ] } , "primary" : boolean , "deleted" : boolean , "conferenceProperties" : { "allowedConferenceSolutionTypes" : [ string ] } , "autoAcceptInvitations" : boolean } Property name Value Description Notes accessRole string The effective access role that the authenticated user has on the calendar.
- Private events will appear to users with reader access, but event details will be hidden. " writer " - Provides read and write access to the calendar.
- Private events will appear to users with writer access, and event details will be visible. " owner " - Provides manager access to the calendar.
- Possible values are: " freeBusyReader " - Provides read access to free/busy information. " reader " - Provides read access to the calendar.

