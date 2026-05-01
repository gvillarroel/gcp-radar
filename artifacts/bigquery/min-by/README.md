# MIN_BY

Product: BigQuery
Feature slug: `min-by`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

MIN_BY returns a value associated with the minimum of another expression as a synonym for ANY_VALUE(x HAVING MIN y).

## Lifecycle

- Latest feature date: 2023-08-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- confidential
- constraint
- credential
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-function-calls)
