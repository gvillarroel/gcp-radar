---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.853Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Standard SQL AEAD functions"
feature_slug: "bigquery-standard-sql-aead-functions"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
keywords:
  - "AEAD key handling"
  - "AEAD.ENCRYPT"
  - "AEAD.DECRYPT"
  - "Standard SQL AEAD"
  - "AEAD functions"
  - "BigQuery AEAD"
  - "encryption functions"
---

# BigQuery Standard SQL AEAD functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added support for AEAD encryption functions.

## Extended Definition

BigQuery Standard SQL added support for AEAD encryption functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)

## Supporting Pages

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states BigQuery GoogleSQL supports AEAD and explains the AEAD-related encryption/decryption and keyset operations that the feature is built on.

Evidence snippets:
- Using one of these functions to decrypt a ciphertext that encodes the wrong data type, such as using AEAD.DECRYPT STRING to decrypt ciphertext that encodes a BYTES value, causes undefined behavior and may result in an error.
- AEAD encryption functions allow you to create keysets that contain keys for encryption and decryption, use these keys to encrypt and decrypt individual values in a table, and rotate keys within a keyset.
- Additional data AEAD encryption functions support the use of an additional data argument, also known as associated data (AD) or additional authenticated data.
- AEAD.DECRYPT STRING can decrypt ciphertext that encodes a STRING value; AEAD.DECRYPT BYTES can decrypt ciphertext that encodes a BYTES value.

