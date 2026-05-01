# GROUP BY GROUPING SETS

Product: BigQuery
Feature slug: `group-by-grouping-sets`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports the GROUP BY GROUPING SETS clause for producing aggregated data over one or more grouping sets; BigQuery queries support the GROUP BY GROUPING SETS clause for aggregating over one or more grouping sets.

## Lifecycle

- Latest feature date: 2024-02-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- permission

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
