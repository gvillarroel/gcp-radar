# Non-global log bucket analysis

Product: Error Reporting
Feature slug: `non-global-log-bucket-analysis`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Error Reporting can analyze log entries routed to a non-global-region log bucket when the log sink is in the same project as the bucket.

## Lifecycle

- Latest feature date: 2024-08-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting), [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))
- audit (evidence: [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting), [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting), [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))
- logging (evidence: [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting), [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting)
- [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)
- [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)
