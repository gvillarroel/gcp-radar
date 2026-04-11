---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.840Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/cmek"
  - "https://docs.cloud.google.com/datastore/docs/release-notes"
  - "https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest"
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
Coverage: LOW

## Step 02 Summary

Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys; Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys.

## Extended Definition

Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys; Customer-managed encryption keys let Datastore data be protected with user-managed encryption keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- [https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest](https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 296
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Datastore mode, see Use CMEK .
- Home Documentation Databases Datastore Guides Send feedback Customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Datastore mode.
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.

### Datastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/release-notes](https://docs.cloud.google.com/datastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- October 01, 2024 Feature You can now use customer-managed encryption keys (CMEK) in Datastore to protect your data.
- April 05, 2024 Feature Support for Customer-managed encryption keys (CMEK) .
- For more information, see Customer-managed encryption keys (CMEK) .
- Node.js Changes for @google-cloud/datastore 9.2.1 (2024-11-06) Bug Fixes Address edge cases for excluding large properties when using save ( #1356 ) ( ceaff7e ) Create a release ( #1353 ) ( 536873e ) November 06, 2024 Feature You can now use the managed bulk delete service to delete entities in bulk.

### Server-Side Encryption \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest](https://docs.cloud.google.com/datastore/docs/concepts/encryption-at-rest)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Key management With server-side encryption, you can either let Google manage cryptographic keys on your behalf or use customer-managed encryption keys (CMEK) to manage the keys yourself.
- Warning: Firestore in Datastore mode does not know if your data has already been encrypted client-side, nor does Datastore mode have any knowledge of your client-side encryption keys.
- Each Datastore mode object's data and metadata is encrypted and each encryption key is itself encrypted with a regularly rotated set of keystore master keys.
- In client-side encryption, you manage your own encryption keys and encrypt data before writing it to your database.

