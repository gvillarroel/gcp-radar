# KEYS.ROTATE_WRAPPED_KEYSET

Product: BigQuery
Feature slug: `keys-rotate-wrapped-keyset`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

KEYS.ROTATE_WRAPPED_KEYSET rotates a wrapped keyset directly in BigQuery.

## Lifecycle

- Latest feature date: 2022-11-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- allow (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
