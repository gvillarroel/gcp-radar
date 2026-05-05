# RANGE_BUCKET function

Product: BigQuery
Feature slug: `range-bucket-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

RANGE_BUCKET returns the 0-based upper-bound bucket position of a point within a sorted array.

## Lifecycle

- Latest feature date: 2019-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- auth (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions)
