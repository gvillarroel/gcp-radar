# Per-second instance billing

Product: App Engine flexible environment Python
Feature slug: `per-second-instance-billing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Engine flexible environment bills instance usage in per-second increments with a one-minute minimum.

## Lifecycle

- Latest feature date: 2017-09-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance](https://docs.cloud.google.com/appengine/docs/flexible/debugging-an-instance)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
