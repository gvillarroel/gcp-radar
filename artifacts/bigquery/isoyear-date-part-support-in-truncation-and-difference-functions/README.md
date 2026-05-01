# ISOYEAR date part support in truncation and difference functions

Product: BigQuery
Feature slug: `isoyear-date-part-support-in-truncation-and-difference-functions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports the ISOYEAR date part in DATE_TRUNC, DATETIME_TRUNC, TIMESTAMP_TRUNC, DATE_DIFF, and DATETIME_DIFF.

## Lifecycle

- Latest feature date: 2018-01-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- constraint
- credential
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/date_functions)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
