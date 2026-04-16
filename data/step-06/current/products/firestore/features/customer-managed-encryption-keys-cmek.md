---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.870Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/cmek"
  - "https://docs.cloud.google.com/firestore/native/docs/cmek"
  - "https://docs.cloud.google.com/datastore/docs/console/managing-datastore"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "firestore"
  - "supports"
  - "protecting"
---

# Customer-managed encryption keys (CMEK)

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports customer-managed encryption keys for protecting data.

## Extended Definition

Firestore supports customer-managed encryption keys for protecting data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore, see Use CMEK .
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Firestore.
- Customer-managed encryption keys (CMEK) By default, all the data at rest in Firestore is encrypted using Google's default encryption .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
- Source ID: `site-docs-reference-required-4`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore, see Use CMEK .
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Firestore.
- Customer-managed encryption keys (CMEK) By default, all the data at rest in Firestore is encrypted using Google's default encryption .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.

### "Managing Firestore in Datastore mode from the Console \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/console/managing-datastore](https://docs.cloud.google.com/datastore/docs/console/managing-datastore)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Datastore Guides Send feedback Managing Firestore in Datastore mode from the Console Stay organized with collections Save and categorize content based on your preferences.

