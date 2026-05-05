# KEYS.REWRAP_KEYSET

Product: BigQuery
Feature slug: `keys-rewrap-keyset`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

KEYS.REWRAP_KEYSET rewraps a keyset directly in BigQuery.

## Lifecycle

- Latest feature date: 2022-11-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
