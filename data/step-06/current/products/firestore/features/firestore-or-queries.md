---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.430Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore OR queries"
feature_slug: "firestore-or-queries"
latest_feature_date: "2023-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient"
keywords:
  - "firestore"
  - "or"
  - "queries"
  - "supports"
---

# Firestore OR queries

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore supports OR queries.

## Extended Definition

Firestore supports OR queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### google.cloud.firestore_v1.proto.query_pb2 — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- google.cloud.firestore v1.proto.query pb2 — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/proto/query pb2.html source: google/cloud/firestore v1/proto/query.proto &quot;&quot;&quot;Generated protocol buffer code.&quot;&quot;&quot; from google.protobuf import descriptor as descriptor from google.protobuf import message as message from google.protobuf import reflection as reflection from google.protobuf import symbol database ...

### Class FirestoreClient (3.33.3) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class FirestoreClient (3.33.3) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.v1.FirestoreClient Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database that simplifies storing, syncing, and querying data for your mobile, web, and IoT apps at global scale.

