# Additional OAuth scopes

Product: Calendar API
Feature slug: `additional-oauth-scopes`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

The Calendar API supports four new OAuth scopes that let applications request more limited access to calendar data.

## Lifecycle

- Latest feature date: 2018-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth), [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors), [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview))
- auth (evidence: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth), [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors), [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview))
- authorization (evidence: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth), [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors), [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview))
- permission (evidence: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth), [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors), [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview))
- token (evidence: [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth), [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors), [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview))

## Official Evidence

- [https://developers.google.com/workspace/calendar/api/auth](https://developers.google.com/workspace/calendar/api/auth)
- [https://developers.google.com/workspace/calendar/api/guides/errors](https://developers.google.com/workspace/calendar/api/guides/errors)
- [https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
