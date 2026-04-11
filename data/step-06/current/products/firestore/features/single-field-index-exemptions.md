---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.446Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Single-field index exemptions"
feature_slug: "single-field-index-exemptions"
latest_feature_date: "2018-08-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html"
keywords:
  - "single"
  - "field"
  - "index"
  - "exemptions"
  - "firestore"
  - "supports"
  - "exempting"
  - "specific"
---

# Single-field index exemptions

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore supports exempting specific fields from automatic indexing.

## Extended Definition

Cloud Firestore supports exempting specific fields from automatic indexing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/release-notes](https://docs.cloud.google.com/firestore/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)

## Supporting Pages

### Firestore release notes | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/release-notes](https://docs.cloud.google.com/firestore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- For documents with many fields that don&#x27;t require indexing, you can now add collection-level index exemptions on all fields in a collection ...
- Firestore release notes Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/docs/release-notes Support for Firestore point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now generally available (GA). ...

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### google.cloud.firestore_v1.proto.query_pb2 — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- Source ID: `site-python-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.proto.query pb2 — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/proto/query pb2.html source: google/cloud/firestore v1/proto/query.proto &quot;&quot;&quot;Generated protocol buffer code.&quot;&quot;&quot; from google.protobuf import descriptor as descriptor from google.protobuf import message as message from google.protobuf import reflection as reflection from google.protobuf import symbol database ...

