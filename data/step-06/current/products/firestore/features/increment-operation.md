---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.442Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Increment operation"
feature_slug: "increment-operation"
latest_feature_date: "2019-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.FirestoreOptions"
keywords:
  - "increment"
  - "operation"
  - "firestore"
  - "supports"
  - "incrementing"
  - "or"
  - "decrementing"
  - "numeric"
---

# Increment operation

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore supports incrementing or decrementing a numeric field by a specified amount.

## Extended Definition

Cloud Firestore supports incrementing or decrementing a numeric field by a specified amount.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.FirestoreOptions](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.FirestoreOptions)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### google.cloud.firestore_v1.base_client — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- Source ID: `site-python-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- google.cloud.firestore v1.base client — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/base client.html [docs]class BaseClient(ClientWithProject): &quot;&quot;&quot;Client for interacting with Google Cloud Firestore API. .. note:: Since the Cloud Firestore API requires the gRPC transport, no ` http` argument is accepted by this class.

### Class FirestoreOptions (3.33.3) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.FirestoreOptions](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.FirestoreOptions)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class FirestoreOptions (3.33.3) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.FirestoreOptions A Factory class to create new Firestore instances.

