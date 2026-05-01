# Cloud Spanner federated queries

Product: BigQuery
Feature slug: `cloud-spanner-federated-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports federated queries against Cloud Spanner.

## Lifecycle

- Latest feature date: 2021-08-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries](https://docs.cloud.google.com/bigquery/docs/alloydb-federated-queries)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
