---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.445Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Array-contains queries"
feature_slug: "array-contains-queries"
latest_feature_date: "2018-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient"
keywords:
  - "array"
  - "contains"
  - "queries"
  - "firestore"
  - "supports"
  - "that"
  - "match"
  - "documents"
---

# Array-contains queries

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore supports queries that match documents containing a specific array value.

## Extended Definition

Cloud Firestore supports queries that match documents containing a specific array value.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### Interface Firestore (3.36.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore)
- Source ID: `site-java-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- To unblock other clients, the Firestore backend automatically releases all locks after 60 seconds of inactivity and fails all transactions that last longer than 270 ...
- Interface Firestore (3.36.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore If it fails to commit after 5 attempts, the transaction will fail.
- Running a transaction places locks all consumed documents.

### Class FirestoreClient (3.33.3) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient)
- Source ID: `site-java-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreClient (3.33.3) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT apps at global scale.

