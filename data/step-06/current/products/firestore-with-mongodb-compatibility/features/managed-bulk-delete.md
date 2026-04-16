---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:03.701Z"
product_name: "Firestore with MongoDB compatibility"
product_slug: "firestore-with-mongodb-compatibility"
feature_name: "Managed bulk delete"
feature_slug: "managed-bulk-delete"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints"
keywords:
  - "managed"
  - "bulk"
  - "delete"
  - "firestore"
  - "with"
  - "mongodb"
  - "compatibility"
  - "supports"
---

# Managed bulk delete

Product: Firestore with MongoDB compatibility
Coverage: MEDIUM

## Step 02 Summary

Firestore with MongoDB compatibility supports managed bulk deletion of data.

## Extended Definition

Firestore with MongoDB compatibility supports managed bulk deletion of data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)

## Supporting Pages

### "Bulk delete data \_|\_ Firestore with MongoDB compatibility \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- Source ID: `site-iam-reference`
- Final score: 387
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Firestore with MongoDB compatibility managed bulk delete service is available through the gcloud command-line tool and the Firestore REST API .
- To bulk delete the restaurants and reviews collections, your command looks as follows: gcloud firestore bulk-delete \ --collection-ids=restaurants,reviews \ --database='cymbal' Manage bulk delete operations After you start a bulk delete operation, Firestore with MongoDB compatibility assigns the operation a unique name.
- Otherwise, the following roles grant the necessary permissions for bulk delete operations: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Bulk Admin Note: These Datastore roles also grant permissions in Firestore.
- Caution: Bulk deleting data from Firestore with MongoDB compatibility incurs one delete operation per document deleted and some read operations based on a fraction of total documents read.

### "Customer-managed encryption keys (CMEK) \_|\_ Firestore with MongoDB compatibility\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the system detects that the key is unavailable, within 10 minutes any subsequent calls to the Firestore with MongoDB compatibility database, including reads, writes, and queries, return a INVALID ARGUMENT error with the following message: The customer-managed encryption key required by the requested resource is not accessible.
- For more information about CMEK in general, including when and why to enable it, see the following Cloud KMS documentation: Customer-managed encryption keys (CMEK) Best practices for using CMEKs For instructions on performing CMEK-related tasks with Firestore with MongoDB compatibility, see Use CMEK .
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) for Firestore with MongoDB compatibility.
- If an externally-managed key is unavailable, Firestore with MongoDB compatibility continues to support full database operations using a cached version of the key, for up to one hour.

### "Import and export data \_|\_ Firestore with MongoDB compatibility \_|\_\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
- Source ID: `site-iam-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Firestore with MongoDB compatibility managed export and import service is available through the gcloud command-line tool and the Firestore with MongoDB compatibility API ( REST , RPC ).
- This page describes how to export and import Firestore with MongoDB compatibility documents using the managed export and import service and Cloud Storage .
- Otherwise, the following roles grant the necessary permissions for export and import operations and for access to Cloud Storage: Firestore with MongoDB compatibility roles: Owner , Cloud Datastore Owner , or Cloud Datastore Import Export Admin Note: These Datastore roles also grant permissions in Firestore with MongoDB compatibility.
- Note: You must export specific collections if you plan to: Import only specific collections Load Firestore with MongoDB compatibility data into BigQuery Export all documents Google Cloud Console In the Google Cloud console, go to the Databases page.

### "Manage Firestore with MongoDB compatibility resources using custom constraints\

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test the custom organization policy Before you begin, you must know the following: Your organization ID Create the deleteProtectionRequired.yaml file as follows: name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == \"DELETE PROTECTION ENABLED\"" actionType : ALLOW displayName : Firestore with MongoDB compatibility Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- Don't allow creation of databases unless delete protection is enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.deleteProtectionRequired resourceTypes : - firestore.googleapis.com/Database methodTypes : - CREATE - UPDATE condition : "resource.deleteProtectionState == " DELETE PROTECTION ENABLED"" actionType : ALLOW displayName : Firestore with MongoDB compatibility Delete Protection Required description : To ensure the data security, Delete Protection is required to be enabled for Firestore databases.
- This makes sure that all CREATE and UPDATE methods on a Firestore with MongoDB compatibility database meet the constraint of deleteProtectionState being DELETE PROTECTION ENABLED .
- Manage Firestore with MongoDB compatibility resources using custom constraints This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: firestore.googleapis.com/Database To learn more about Organization Policy, see Custom organization policies .

