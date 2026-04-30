# IGNORE NULLS modifier in analytic functions

Product: BigQuery
Feature slug: `ignore-nulls-modifier-in-analytic-functions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery standard SQL supports the IGNORE NULLS modifier in FIRST_VALUE, LAST_VALUE, and NTH_VALUE.

## Lifecycle

- Latest feature date: 2017-11-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
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

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls)
