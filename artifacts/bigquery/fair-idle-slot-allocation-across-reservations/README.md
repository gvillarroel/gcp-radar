# Fair idle slot allocation across reservations

Product: BigQuery
Feature slug: `fair-idle-slot-allocation-across-reservations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Idle slots can be allocated fairly across reservations within a single admin project so each reservation receives an approximately equal share of available capacity; BigQuery can now distribute idle slots approximately equally across reservations within a single admin project.

## Lifecycle

- Latest feature date: 2025-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
