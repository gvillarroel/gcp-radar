# Clustering for non-partitioned tables

Product: BigQuery
Feature slug: `clustering-for-non-partitioned-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports clustering on tables that are not partitioned.

## Lifecycle

- Latest feature date: 2020-06-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-assignments](https://docs.cloud.google.com/bigquery/docs/information-schema-assignments)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
