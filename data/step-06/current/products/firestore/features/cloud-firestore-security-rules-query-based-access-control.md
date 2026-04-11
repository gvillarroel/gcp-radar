---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.446Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Firestore Security Rules query-based access control"
feature_slug: "cloud-firestore-security-rules-query-based-access-control"
latest_feature_date: "2018-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam"
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
keywords:
  - "firestore"
  - "security"
  - "rules"
  - "query"
  - "based"
  - "access"
  - "control"
  - "can"
---

# Cloud Firestore Security Rules query-based access control

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Cloud Firestore Security Rules can evaluate query requests and enforce access based on query properties such as limit and orderBy; Cloud Firestore Security Rules can restrict reads and writes based on query parameters.

## Extended Definition

Cloud Firestore Security Rules can evaluate query requests and enforce access based on query properties such as limit and orderBy; Cloud Firestore Security Rules can restrict reads and writes based on query parameters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)

## Supporting Pages

### google.cloud.firestore_v1.proto.query_pb2 — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- Source ID: `site-python-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.proto.query pb2 — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/proto/query pb2.html source: google/cloud/firestore v1/proto/query.proto &quot;&quot;&quot;Generated protocol buffer code.&quot;&quot;&quot; from google.protobuf import descriptor as descriptor from google.protobuf import message as message from google.protobuf import reflection as reflection from google.protobuf import symbol database ...

### Identity and Access Management (IAM) | Firestore with MongoDB compatibility | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management (IAM) Firestore with MongoDB compatibility Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam With IAM, every API method in Firestore requires that the account making the API request has the appropriate permissions to use the resource.

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

