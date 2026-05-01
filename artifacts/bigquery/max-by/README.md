# MAX_BY

Product: BigQuery
Feature slug: `max-by`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

MAX_BY returns a value associated with the maximum of another expression as a synonym for ANY_VALUE(x HAVING MAX y).

## Lifecycle

- Latest feature date: 2023-08-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
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
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls)
