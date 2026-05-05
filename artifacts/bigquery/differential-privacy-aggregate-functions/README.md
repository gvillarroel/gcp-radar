# Differential privacy aggregate functions

Product: BigQuery
Feature slug: `differential-privacy-aggregate-functions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Differential privacy aggregate functions anonymize query results using differentially private AVG, COUNT, SUM, and PERCENTILE_CONT operations.

## Lifecycle

- Latest feature date: 2023-05-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate-dp-functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/navigation_functions)
