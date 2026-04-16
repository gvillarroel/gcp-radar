---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.769Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/cmek"
  - "https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest"
  - "https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices"
  - "https://docs.cloud.google.com/datastore/docs/best-practices"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "let"
  - "datastore"
  - "be"
---

# Customer-managed encryption keys (CMEK)

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys; Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys.

## Extended Definition

Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys; Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest](https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest)
- [https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices](https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices)
- [https://docs.cloud.google.com/datastore/docs/best-practices](https://docs.cloud.google.com/datastore/docs/best-practices)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 393
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Datastore mode, see Use CMEK .
- Home Documentation Databases Datastore Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Datastore mode.
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.

### Server-Side Encryption \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest](https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest)
- Source ID: `site-iam-reference`
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- Key management With server-side encryption, you can either let Google manage cryptographic keys on your behalf or use customer-managed encryption keys (CMEK) to manage the keys yourself.
- Warning: Firestore in Datastore mode does not know if your data has already been encrypted client-side, nor does Datastore mode have any knowledge of your client-side encryption keys.
- Each Datastore mode object's data and metadata is encrypted and each encryption key is itself encrypted with a regularly rotated set of keystore master keys.
- In client-side encryption, you manage your own encryption keys and encrypt data before writing it to your database.

### Cloud Datastore best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices](https://docs.cloud.google.com/datastore/docs/cloud-datastore-best-practices)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you delete a large number of Datastore entities across a small range of keys then queries across this part of the index will be slower until compaction has completed.
- Deletions Avoid deleting large numbers of Datastore entities across a small range of keys.
- If you are using Datastore, you can get slow writes due to a hot tablet if you have a sudden increase in the write rate to a small range of keys that exceeds the capacity of a single tablet server.
- If you do have a key or indexed property that will be monotonically increasing then you can prepend a random hash to ensure that the keys are sharded onto multiple tablets.

### Best Practices \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/best-practices](https://docs.cloud.google.com/datastore/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you delete a large number of Datastore mode entities across a small range of keys then queries across this part of the index will be slower until compaction has completed.
- If you do have a key or indexed property that will be monotonically increasing then you can prepend a random hash to ensure that the keys are sharded onto multiple tablets.
- Deletions Avoid deleting large numbers of entities across a small range of keys.
- In order to retrieve expired entities, you would need to query against this indexed field, which likely lies in an overlapping part of the keyspace with index entries for the most recently deleted entities.

