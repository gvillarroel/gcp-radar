---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.705Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery wrapped keyset SQL functions"
feature_slug: "bigquery-wrapped-keyset-sql-functions"
latest_feature_date: "2022-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
keywords:
  - "wrapped keyset SQL functions"
  - "keyset rotation"
  - "keyset rotate"
  - "keyset rewrap"
  - "wrapped keysets"
  - "encrypt keyset"
  - "decrypt keyset"
  - "keyset SQL operations"
---

# BigQuery wrapped keyset SQL functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery introduced SQL functions for managing wrapped keysets, including create, rotate, rewrap, and encrypt/decrypt operations.

## Extended Definition

BigQuery wrapped keysets are presented as a more secure approach to keyset management in AEAD workflows, used when keysets need to be securely managed or transmitted over untrusted channels. The documentation states that wrapped keysets can encrypt and decrypt data without exposing keyset data, and that keyset rotation is performed by creating a new primary cryptographic key within the keyset. The provided excerpts do not explicitly verify all specific SQL function names for create/rewrap/encrypt/decrypt operations, so those exact entry points are only partially evidenced here.

## Evidence Summary

This page provides core definitions of wrapped keysets in BigQuery AEAD, including secure handling, encrypt/decrypt behavior, and the keyset rotation mechanism via a new primary key.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)

## Supporting Pages

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page introduces keysets, encryption/decryption, and key rotation concepts, but does not clearly document wrapped keyset SQL functions or APIs such as create/rewrap operations.

Evidence snippets:
- While there might be other ways to restrict access to field-level data, wrapped keysets provide a more secure mechanism for keyset management compared to raw keysets.
- Wrapped keysets If you need to securely manage a keyset or transmit it over an untrusted channel, consider using a wrapped keyset.
- Keyset rotation involves: Creating a new primary cryptographic key within every keyset.
- Wrapped keysets can encrypt and decrypt data without exposing the keyset data.

