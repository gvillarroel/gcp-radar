# Conference data for Hangouts and Google Meet

Product: Calendar API
Feature slug: `conference-data-for-hangouts-and-google-meet`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

The Calendar API supports Hangouts and Google Meet conference data in events through the conferenceData field, including reading, copying, creating, and clearing conference details.

## Lifecycle

- Latest feature date: 2017-07-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events), [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars), [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList))
- allow (evidence: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events), [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars), [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList))
- auth (evidence: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events), [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars), [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList))
- key (evidence: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events), [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars), [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList))
- role (evidence: [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events), [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars), [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList))

## Official Evidence

- [https://developers.google.com/workspace/calendar/api/guides/create-events](https://developers.google.com/workspace/calendar/api/guides/create-events)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
