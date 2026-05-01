# Apache Iceberg external table time travel

Product: BigQuery
Feature slug: `apache-iceberg-external-table-time-travel`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery can query retained snapshots of Apache Iceberg external tables with FOR SYSTEM_TIME AS OF.

## Lifecycle

- Latest feature date: 2025-09-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- constraint
- credential
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
