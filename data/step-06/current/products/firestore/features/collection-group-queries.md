---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.441Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Collection group queries"
feature_slug: "collection-group-queries"
latest_feature_date: "2019-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore"
  - "https://docs.cloud.google.com/firestore/docs/release-notes"
keywords:
  - "collection"
  - "group"
  - "queries"
  - "firestore"
  - "supports"
  - "across"
  - "all"
  - "collections"
---

# Collection group queries

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore supports queries across all collections that share the same collection ID.

## Extended Definition

Cloud Firestore supports queries across all collections that share the same collection ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore)
- [https://docs.cloud.google.com/firestore/docs/release-notes](https://docs.cloud.google.com/firestore/docs/release-notes)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### Interface Firestore (3.36.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore)
- Source ID: `site-java-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- To unblock other clients, the Firestore backend automatically releases all locks after 60 seconds of inactivity and fails all transactions that last longer than 270 ...
- Interface Firestore (3.36.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore If it fails to commit after 5 attempts, the transaction will fail.
- Running a transaction places locks all consumed documents.

### Firestore release notes | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/release-notes](https://docs.cloud.google.com/firestore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Firestore release notes Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/docs/release-notes Support for Firestore point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now generally available (GA). ...
- For documents with many fields that don&#x27;t require indexing, you can now add collection-level index exemptions on all fields in a collection ...

