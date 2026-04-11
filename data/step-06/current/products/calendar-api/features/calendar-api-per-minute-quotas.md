---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:07:28.884Z"
product_name: "Calendar API"
product_slug: "calendar-api"
feature_name: "Calendar API per-minute quotas"
feature_slug: "calendar-api-per-minute-quotas"
latest_feature_date: "2021-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/calendar/api/guides/quota"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update"
  - "https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert"
keywords:
  - "separate"
  - "minute"
  - "quotas"
  - "per"
  - "calendar"
  - "added"
  - "the"
  - "api"
---

# Calendar API per-minute quotas

Product: Calendar API
Coverage: LOW

## Step 02 Summary

The Calendar API added separate per-minute quotas for each project and each project-user pair.

## Extended Definition

The Calendar API added separate per-minute quotas for each project and each project-user pair.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/calendar/api/guides/quota](https://developers.google.com/workspace/calendar/api/guides/quota)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert)

## Supporting Pages

### Manage quotas \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/guides/quota](https://developers.google.com/workspace/calendar/api/guides/quota)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Types of Calendar API usage quotas Two types of quotas are enforced: Per minute per project: This is the number of requests made by your Google Cloud project.
- Quotas are calculated per minute using a sliding window, so a rapid burst of traffic which exceeds your per-minute quota during one minute will result in rate limiting during the next window to ensure that, on average, your usage remains within the quotas.
- There are three important limitations to consider when using the Calendar API: API usage quotas are enforced per project and per user.
- Proper accounting with service accounts If your application is performing requests using domain-wide delegation , by default the service account is charged with regard to "per minute per project per user" quotas, and not the user you're impersonating.

### CalendarList: update \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/update)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Authorization This request requires authorization with at least one of the following scopes: Scope https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.app.created https://www.googleapis.com/auth/calendar.calendarlist For more information, see the authentication and authorization page.
- Request body In the request body, supply a CalendarList resource with the following properties: Property name Value Description Notes Optional Properties backgroundColor string The main color of the calendar in the hexadecimal format " #0088aa ".
- Possible values are: " eventCreation " - Notification sent when a new event is put on the calendar. " eventChange " - Notification sent when an event is changed. " eventCancellation " - Notification sent when an event is cancelled. " eventResponse " - Notification sent when an attendee responds to the event invitation. " agenda " - An agenda with the events of the day (sent out in the morning).
- The attribute is only returned when the calendar is hidden, in which case the value is true . writable notificationSettings object The notifications that the authenticated user is receiving for this calendar. writable notificationSettings.notifications[]. method string The method used to deliver the notification.

### CalendarList: insert \_|\_ Google Calendar \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList/insert)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request HTTP request POST https://www.googleapis.com/calendar/v3/users/me/calendarList Parameters Parameter name Value Description Optional query parameters colorRgbFormat boolean Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB).
- Authorization This request requires authorization with at least one of the following scopes: Scope https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.calendarlist For more information, see the authentication and authorization page.
- Request body In the request body, supply a CalendarList resource with the following properties: Property name Value Description Notes Required Properties id string Identifier of the calendar.
- Optional Properties backgroundColor string The main color of the calendar in the hexadecimal format " #0088aa ".

