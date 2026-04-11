---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.733Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Deterministic AEAD encryption SQL functions"
feature_slug: "deterministic-aead-encryption-sql-functions"
latest_feature_date: "2022-06-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "deterministic encrypt function"
  - "deterministic decrypt function"
  - "DETERMINISTIC_DECRYPT_STRING"
  - "DETERMINISTIC_DECRYPT_BYTES"
  - "deterministic AEAD functions"
  - "DETERMINISTIC_ENCRYPT"
  - "deterministic AEAD"
  - "DETERMINISTIC_* functions"
---

# Deterministic AEAD encryption SQL functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now includes GA deterministic encryption functions DETERMINISTIC_ENCRYPT, DETERMINISTIC_DECRYPT_BYTES, and DETERMINISTIC_DECRYPT_STRING for column-level encryption with aggregation and joins.

## Extended Definition

BigQuery provides deterministic AEAD SQL functions named `DETERMINISTIC_ENCRYPT`, `DETERMINISTIC_DECRYPT_STRING`, and `DETERMINISTIC_DECRYPT_BYTES` in its Standard SQL function set. `DETERMINISTIC_ENCRYPT` encrypts `STRING` data using deterministic AEAD with the primary cryptographic key from a keyset, and the decrypt functions recover plaintext (`STRING` or `BYTES`) from ciphertext using the matching key from that keyset. The snippets do not explicitly confirm broader claims such as GA status, release-date details, or join/aggregation-specific capabilities.

## Evidence Summary

The cited BigQuery SQL reference page defines the deterministic AEAD function names and explains their key-based encrypt/decrypt behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- DETERMINISTIC DECRYPT STRING Uses the matching key from a keyset to decrypt a BYTES ciphertext into a STRING plaintext, using deterministic AEAD.
- DETERMINISTIC ENCRYPT Encrypts STRING plaintext, using the primary cryptographic key in a keyset, using deterministic AEAD encryption.
- DETERMINISTIC DECRYPT BYTES Uses the matching key from a keyset to decrypt a BYTES ciphertext, using deterministic AEAD.
- DLP DETERMINISTIC ENCRYPT Encrypts data with a DLP compatible algorithm.

