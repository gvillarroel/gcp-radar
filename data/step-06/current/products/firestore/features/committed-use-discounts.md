---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.864Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/cuds"
  - "https://docs.cloud.google.com/firestore/native/docs/editions-overview"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "provide"
  - "discounted"
  - "pricing"
  - "firestore"
  - "read"
---

# Committed use discounts

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Committed use discounts provide discounted pricing for Firestore read, write, and delete operations in exchange for a one-year or three-year commitment.

## Extended Definition

Committed use discounts provide discounted pricing for Firestore read, write, and delete operations in exchange for a one-year or three-year commitment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds)
- [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)

## Supporting Pages

### Committed use discounts \_|\_ Firestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Committed use discounts Committed use discounts (CUDs) provide deeply discounted prices in exchange for your commitment to continuously spend a certain amount on Firestore operations — Read/Write/Delete — for one year or three years.
- As a basis for comparison, compute the on-demand cost of Firestore capacity, without the application of any commitment discounts: Read operations expenditure: 2 million document reads per hour $0.03 per 100,000 document reads = $0.60 per hour Write operations expenditure: 2 million document writes per hour $0.09 per 100,000 document writes = $1.80 per hour Total expenditure: $0.60 + $1.80 = $2.40 per hour Monthly cost based on on-demand pricing: $2.40 per hour 730 hours = $1,752 per month.
- As long as your use of Firestore Read/Write/Delete operations stays above your committed expenditure level, you receive the maximum possible discount for the length of the commitment.
- Firestore CUD pricing Firestore offers two levels of discounts, depending on the commitment period: 20% discount : You get this by committing to a 1-year term.

### "Firestore editions overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/editions-overview](https://docs.cloud.google.com/firestore/native/docs/editions-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic, basic indexing on all document fields Change data capture Triggers Triggers Observability Cloud Monitoring Query Explain Query Insights Database Center Cloud Monitoring Query Explain Query Insights Database Center Data protection Scheduled backups Point-in-time recovery Scheduled backups Point-in-time recovery Encryption Google-owned and Google-managed encryption key Customer-managed encryption keys Google-owned and Google-managed encryption key Customer-managed encryption keys Storage SSD Hybrid storage (SSD & HDD) Performance Best Good Committed Use Discounts 20% for 1 year; 40% for 3 years 20% for 1 year; 40% for 3 years Data access modes Firestore supports the following data access modes to read and write data: Firestore with MongoDB compatibility mode : this interface supports Firestore with MongoDB compatibility and lets you re-use existing MongoDB drivers, tools, and open-source ecosystem integrations with Firestore.
- Standard edition : provides the core Firestore capabilities including a standard query engine, automated indexing to help performance, and Firebase SDKs with real-time synchronization and offline queries.
- Firestore Enterprise edition measures operations conducted using tranches of bytes read and written whereas Standard edition measures the number of documents read or written.
- Firestore is available in the following editions: Enterprise edition : provides the most advanced Firestore capabilities, maximizing developer flexibility and control.

### "Class FirestoreAdminClient (2.23.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description FirestoreAdminClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description FirestoreAdminClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- However, calls to FirestoreAdmin.UpdateField][google.firestore.admin.v1.FirestoreAdmin.UpdateField] should provide a field mask to avoid changing any configuration that the caller isn't aware of.
- FirestoreAdminClient () Initialize request argument(s) pitr snapshot = firestore admin v1.PitrSnapshot() pitr snapshot.database = "database value" request = firestore admin v1.CloneDatabaseRequest( parent="parent value", database id="database id value", pitr snapshot=pitr snapshot, ) Make the request operation = client . clone database (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[google.cloud.firestore admin v1.types.CloneDatabaseRequest, dict] The request object.

