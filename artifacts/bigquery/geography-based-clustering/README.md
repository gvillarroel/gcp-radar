# GEOGRAPHY-based clustering

Product: BigQuery
Feature slug: `geography-based-clustering`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports clustering tables by using a GEOGRAPHY column.

## Lifecycle

- Latest feature date: 2019-05-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- iam
- permission

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
