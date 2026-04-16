---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.707Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Bulk delete"
feature_slug: "bulk-delete"
latest_feature_date: "2025-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing"
keywords:
  - "bulk"
  - "delete"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "supports"
  - "operations"
---

# Bulk delete

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports bulk delete operations in Preview.

## Extended Definition

Firestore with MongoDB compatibility supports bulk delete operations in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)

## Supporting Pages

### "Bulk delete data \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- Source ID: `site-iam-reference`
- Final score: 388
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To bulk delete the restaurants and reviews collections, your command looks as follows: gcloud firestore bulk-delete \ --collection-ids=restaurants,reviews \ --database='cymbal' Manage bulk delete operations After you start a bulk delete operation, Firestore with MongoDB compatibility assigns the operation a unique name.
- Otherwise, the following roles grant the necessary permissions for bulk delete operations: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Bulk Admin Note: These Datastore roles also grant permissions in Firestore.
- Caution: Bulk deleting data from Firestore with MongoDB compatibility incurs one delete operation per document deleted and some read operations based on a fraction of total documents read.
- The Firestore with MongoDB compatibility managed bulk delete service is available through the gcloud command-line tool and the Firestore REST API .

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, the following roles grant the necessary permissions for export and import operations and for access to Cloud Storage: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Import Export Admin Note: These Datastore roles also grant permissions in Firestore with MongoDB compatibility.
- Manage export and import operations After you start an export or import operation, Firestore with MongoDB compatibility assigns the operation a unique name.
- Export and import operations are charged for read units and write units at the rates listed in Firestore with MongoDB compatibility pricing .
- Firestore with MongoDB compatibility export operations generate a BigQuery table schema for each collection.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instead, the Firestore with MongoDB compatibility system polls Cloud KMS every 5 minutes to check if the key is still available and then performs encrypt and decrypt operations if the key is available.
- If an externally-managed key is unavailable, Firestore with MongoDB compatibility continues to support full database operations using a cached version of the key, for up to one hour.
- Warning: If an external key is deleted and cannot be recovered, any Firestore with MongoDB compatibility database encrypted with that key becomes permanently inaccessible.
- Caution: If a database remains disabled for more than 7 consecutive days, Firestore with MongoDB compatibility might automatically delete it.

### "Manage indexes \_|\_ Firestore with MongoDB compatibility \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- Source ID: `site-iam-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Term: Firestore with MongoDB compatibility supports several administrative operations that can take a long time to complete.
- To delete the index, use the gcloud firestore indexes composite delete command. gcloud firestore indexes composite delete INDEX NAME \ --database=' DATABASE ID ' Replace the following: INDEX NAME : the name of an index DATABASE ID : a database ID Index build time To build an index, Firestore with MongoDB compatibility must create the index and then backfill the index entries with existing data.
- Firestore with MongoDB compatibility includes features to execute and manage long- running operations.
- Before you begin Before you can create an index in Firestore with MongoDB compatibility, make sure that you are assigned any of the following roles: roles/datastore.owner roles/datastore.indexAdmin roles/editor roles/owner To grant a role, see Grant a single role .

