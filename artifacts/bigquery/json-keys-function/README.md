# JSON_KEYS function

Product: BigQuery
Feature slug: `json-keys-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The JSON_KEYS function extracts unique JSON keys from a JSON expression; The BigQuery JSON_KEYS function extracts unique JSON keys from a JSON expression.

## Lifecycle

- Latest feature date: 2025-09-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aead_encryption_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions)
