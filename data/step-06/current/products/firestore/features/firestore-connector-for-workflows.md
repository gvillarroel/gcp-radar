---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.436Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore connector for Workflows"
feature_slug: "firestore-connector-for-workflows"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore"
keywords:
  - "firestore"
  - "connector"
  - "for"
  - "workflows"
  - "lets"
  - "call"
  - "operations"
  - "directly"
---

# Firestore connector for Workflows

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

A connector lets Workflows call Firestore operations directly.

## Extended Definition

A connector lets Workflows call Firestore operations directly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### google.cloud.firestore_v1.base_client — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- Source ID: `site-python-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.base client — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/base client.html [docs]class BaseClient(ClientWithProject): &quot;&quot;&quot;Client for interacting with Google Cloud Firestore API. .. note:: Since the Cloud Firestore API requires the gRPC transport, no ` http` argument is accepted by this class.

### Interface Firestore (3.36.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore)
- Source ID: `site-java-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- To unblock other clients, the Firestore backend automatically releases all locks after 60 seconds of inactivity and fails all transactions that last longer than 270 ...
- Interface Firestore (3.36.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Firestore If it fails to commit after 5 attempts, the transaction will fail.

