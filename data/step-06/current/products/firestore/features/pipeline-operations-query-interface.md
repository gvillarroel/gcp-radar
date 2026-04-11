---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.414Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Pipeline operations query interface"
feature_slug: "pipeline-operations-query-interface"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/firestore"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html"
keywords:
  - "pipeline"
  - "operations"
  - "query"
  - "interface"
  - "is"
  - "firestore"
  - "that"
  - "supports"
---

# Pipeline operations query interface

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Pipeline operations is a Firestore query interface that supports complex expressions and functions such as min, max, substring, regex_match, and array_contains_all.

## Extended Definition

Pipeline operations is a Firestore query interface that supports complex expressions and functions such as min, max, substring, regex_match, and array_contains_all.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)

## Supporting Pages

### google.cloud.firestore_v1.proto.query_pb2 — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.proto.query pb2 — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/proto/query pb2.html source: google/cloud/firestore v1/proto/query.proto &quot;&quot;&quot;Generated protocol buffer code.&quot;&quot;&quot; from google.protobuf import descriptor as descriptor from google.protobuf import message as message from google.protobuf import reflection as reflection from google.protobuf import symbol database ...

### Firestore roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/firestore This page lists the IAM roles and permissions for Firestore.

### google.cloud.firestore_v1.base_client — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- Source ID: `site-python-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.base client — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/base client.html [docs]class BaseClient(ClientWithProject): &quot;&quot;&quot;Client for interacting with Google Cloud Firestore API. .. note:: Since the Cloud Firestore API requires the gRPC transport, no ` http` argument is accepted by this class.

