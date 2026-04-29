# AutoML Tables CMEK support

Product: BigQuery
Feature slug: `automl-tables-cmek-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

AutoML Tables models support customer-managed encryption keys in available regions except the US and EU multi-regions.

## Lifecycle

- Latest feature date: 2023-03-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- encrypt
- iam
- key
- kms
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
