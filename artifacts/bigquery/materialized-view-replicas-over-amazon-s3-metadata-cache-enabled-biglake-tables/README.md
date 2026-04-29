# Materialized view replicas over Amazon S3 metadata cache-enabled BigLake tables

Product: BigQuery
Feature slug: `materialized-view-replicas-over-amazon-s3-metadata-cache-enabled-biglake-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery cross-cloud supports materialized view replicas over Amazon S3 metadata cache-enabled BigLake tables to improve performance and reduce egress costs; BigQuery supports materialized view replicas for materialized views on Amazon S3 metadata cache-enabled BigLake tables.

## Lifecycle

- Latest feature date: 2024-02-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- encrypt
- key
- kms
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-regression-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-regression-model)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
