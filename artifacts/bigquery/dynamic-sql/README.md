# Dynamic SQL

Product: BigQuery
Feature slug: `dynamic-sql`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dynamic SQL lets BigQuery generate and execute SQL statements at runtime with EXECUTE IMMEDIATE; BigQuery supports dynamic SQL to generate and execute SQL statements at runtime.

## Lifecycle

- Latest feature date: 2020-10-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/approximate_aggregate_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
