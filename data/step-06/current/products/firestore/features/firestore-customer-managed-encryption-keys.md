---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.873Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore customer-managed encryption keys"
feature_slug: "firestore-customer-managed-encryption-keys"
latest_feature_date: "2024-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/cmek"
  - "https://docs.cloud.google.com/firestore/docs/cmek"
  - "https://docs.cloud.google.com/firestore/native/docs/editions-overview"
keywords:
  - "firestore"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "supports"
  - "cmek"
---

# Firestore customer-managed encryption keys

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports customer-managed encryption keys (CMEK).

## Extended Definition

Firestore supports customer-managed encryption keys (CMEK).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
- Source ID: `site-docs-reference-required-4`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore, see Use CMEK .
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Firestore.
- Customer-managed encryption keys (CMEK) By default, all the data at rest in Firestore is encrypted using Google's default encryption .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore in Native mode \_\

- URL: [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore, see Use CMEK .
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Firestore.
- Customer-managed encryption keys (CMEK) By default, all the data at rest in Firestore is encrypted using Google's default encryption .
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore database, including reads, writes, and queries, return a FAILED PRECONDITION error with the The customer-managed encryption key required by the requested resource is not accessible message.

### "Firestore editions overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic, basic indexing on all document fields Change data capture Triggers Triggers Observability Cloud Monitoring Query Explain Query Insights Database Center Cloud Monitoring Query Explain Query Insights Database Center Data protection Scheduled backups Point-in-time recovery Scheduled backups Point-in-time recovery Encryption Google-owned and Google-managed encryption key Customer-managed encryption keys Google-owned and Google-managed encryption key Customer-managed encryption keys Storage SSD Hybrid storage (SSD & HDD) Performance Best Good Committed Use Discounts 20% for 1 year; 40% for 3 years 20% for 1 year; 40% for 3 years Data access modes Firestore supports the following data access modes to read and write data: Firestore with MongoDB compatibility mode : this interface supports Firestore with MongoDB compatibility and lets you re-use existing MongoDB drivers, tools, and open-source ecosystem integrations with Firestore.
- Document Size Limits 4 MiB with MongoDB compatibility 1 MiB with Firestore in Native mode 1 MiB Supports Firestore with MongoDB compatibility Yes No Supports Firestore in Native mode: server-side, web, and mobile SDKs with real-time and offline support Yes (Preview) Yes Indexing Fully customizable, with support for advanced indexes like unique, dense, and sparse.
- Firestore in Native mode : this interface supports all of the latest and most innovative capabilities of Firestore, including real-time synchronization and offline caching in the Firestore client libraries.
- It supports the Firestore with MongoDB compatibility API along with the Firestore APIs and Firebase SDKs to perform real-time and offline queries.

