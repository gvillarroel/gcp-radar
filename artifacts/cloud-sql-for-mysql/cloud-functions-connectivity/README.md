# Cloud Functions connectivity

Product: Cloud SQL for MySQL
Feature slug: `cloud-functions-connectivity`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports connections from Cloud Functions.

## Lifecycle

- Latest feature date: 2018-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions), [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-functions](https://docs.cloud.google.com/sql/docs/mysql/connect-functions)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
