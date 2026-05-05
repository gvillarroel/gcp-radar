# RESPECT NULLS modifier in analytic functions

Product: BigQuery
Feature slug: `respect-nulls-modifier-in-analytic-functions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery standard SQL supports the RESPECT NULLS modifier in FIRST_VALUE, LAST_VALUE, and NTH_VALUE.

## Lifecycle

- Latest feature date: 2017-11-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls)
