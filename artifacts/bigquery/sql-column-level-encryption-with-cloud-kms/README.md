# SQL column-level encryption with Cloud KMS

Product: BigQuery
Feature slug: `sql-column-level-encryption-with-cloud-kms`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports SQL column-level encryption using Cloud KMS to encrypt keysets within AEAD functions.

## Lifecycle

- Latest feature date: 2021-10-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- encrypt
- iam
- key
- kms
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/api-sql-translator](https://docs.cloud.google.com/bigquery/docs/api-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
