# _PARTITIONTIME support with wildcard queries over partitioned tables

Product: BigQuery
Feature slug: `partitiontime-support-with-wildcard-queries-over-partitioned-tables`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports the _PARTITIONTIME pseudocolumn in wildcard table queries over partitioned tables.

## Lifecycle

- Latest feature date: 2017-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- encrypt
- key
- kms
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-from-template)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
