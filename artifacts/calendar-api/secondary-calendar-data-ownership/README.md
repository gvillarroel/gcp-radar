# Secondary calendar data ownership

Product: Calendar API
Feature slug: `secondary-calendar-data-ownership`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Secondary calendars now have a single data owner exposed through the read-only dataOwner field, with ownership-based restrictions on deletion, access changes, and calendar list removal.

## Lifecycle

- Latest feature date: 2025-10-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- role

## Official Evidence

- [https://developers.google.com/workspace/calendar/api/v3/reference](https://developers.google.com/workspace/calendar/api/v3/reference)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendarList](https://developers.google.com/workspace/calendar/api/v3/reference/calendarList)
- [https://developers.google.com/workspace/calendar/api/v3/reference/calendars](https://developers.google.com/workspace/calendar/api/v3/reference/calendars)
