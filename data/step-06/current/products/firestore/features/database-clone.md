---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.414Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Database clone"
feature_slug: "database-clone"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/native/docs/reference/libraries"
  - "https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html"
  - "https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope"
keywords:
  - "database"
  - "clone"
  - "firestore"
  - "cloning"
  - "is"
  - "available"
  - "at"
  - "the"
---

# Database clone

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore database cloning is available at the General Availability level; Firestore databases can be cloned into a new database from a selected timestamp.

## Extended Definition

Firestore database cloning is available at the General Availability level; Firestore databases can be cloned into a new database from a selected timestamp.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/native/docs/reference/libraries](https://docs.cloud.google.com/firestore/native/docs/reference/libraries)
- [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope)

## Supporting Pages

### Firestore client libraries | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/reference/libraries](https://docs.cloud.google.com/firestore/native/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore client libraries Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/native/docs/reference/libraries API Reference Documentation · Source Code · GitHub Issue Tracker · Stack Overflow · The Firebase Admin SDKs bundle the Google Cloud client libraries for Firestore alongside client libraries and SDKs for several other Firebase features.
- Using one of the Admin SDKs, you can initialize access to Firestore and several other services from a single SDK.

### google.cloud.firestore_v1.base_client — google-cloud-firestore documentation

- URL: [https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html](https://googleapis.dev/python/firestore/latest/_modules/google/cloud/firestore_v1/base_client.html)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- google.cloud.firestore v1.base client — google-cloud-firestore documentation Source URL: https://googleapis.dev/python/firestore/latest/ modules/google/cloud/firestore v1/base client.html [docs]class BaseClient(ClientWithProject): &quot;&quot;&quot;Client for interacting with Google Cloud Firestore API. .. note:: Since the Cloud Firestore API requires the gRPC transport, no ` http` argument is accepted by this class.
- Args: project (Optional[str]): The project which the client acts on behalf of.

### ApiScope | Firestore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ApiScope Firestore Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ApiScope API Scope defines the APIs (Firestore Native, or Firestore in Datastore Mode) that are supported for queries. ...
- Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples ...

