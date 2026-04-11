---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.412Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Private Service Connect support for Firestore API endpoints"
feature_slug: "private-service-connect-support-for-firestore-api-endpoints"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html"
  - "https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html"
keywords:
  - "private"
  - "connect"
  - "for"
  - "firestore"
  - "api"
  - "endpoints"
  - "supports"
  - "using"
---

# Private Service Connect support for Firestore API endpoints

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore supports using Private Service Connect regional endpoints and backends to connect to its regional and multi-regional API endpoints.

## Extended Definition

Firestore supports using Private Service Connect regional endpoints and backends to connect to its regional and multi-regional API endpoints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)

## Supporting Pages

### google.cloud.firestore_v1.base_client — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.base client — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/base client.html [docs]class BaseClient(ClientWithProject): &quot;&quot;&quot;Client for interacting with Google Cloud Firestore API. .. note:: Since the Cloud Firestore API requires the gRPC transport, no ` http` argument is accepted by this class.

### ApiScope | Firestore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- ApiScope Firestore Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope API Scope defines the APIs (Firestore Native, or Firestore in Datastore Mode) that are supported for queries. ...

### google.cloud.firestore_v1.proto.query_pb2 — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/proto/query_pb2.html)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- google.cloud.firestore v1.proto.query pb2 — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/proto/query pb2.html source: google/cloud/firestore v1/proto/query.proto &quot;&quot;&quot;Generated protocol buffer code.&quot;&quot;&quot; from google.protobuf import descriptor as descriptor from google.protobuf import message as message from google.protobuf import reflection as reflection from google.protobuf import symbol database ...

