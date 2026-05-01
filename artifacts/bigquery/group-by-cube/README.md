# GROUP BY CUBE

Product: BigQuery
Feature slug: `group-by-cube`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports the GROUP BY CUBE clause for producing aggregated data across grouping set permutations; BigQuery queries support the GROUP BY CUBE clause for aggregating over grouping set permutations.

## Lifecycle

- Latest feature date: 2024-02-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
