# Source column matching for data loads

Product: BigQuery
Feature slug: `source-column-matching-for-data-loads`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

CREATE EXTERNAL TABLE and LOAD DATA support matching source columns to schema columns by name or position.

## Lifecycle

- Latest feature date: 2026-01-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- audit
- auth
- key
- kms
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-external-hivepartitioned)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
