---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.437Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "not-in query operator"
feature_slug: "not-in-query-operator"
latest_feature_date: "2020-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/firestore/docs/release-notes"
  - "https://docs.cloud.google.com/firestore/native/docs/reference/libraries"
keywords:
  - "not"
  - "in"
  - "query"
  - "operator"
  - "firestore"
  - "supports"
  - "the"
---

# not-in query operator

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore supports the not-in query operator.

## Extended Definition

Firestore supports the not-in query operator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/firestore/docs/release-notes](https://docs.cloud.google.com/firestore/docs/release-notes)
- [https://docs.cloud.google.com/firestore/native/docs/reference/libraries](https://docs.cloud.google.com/firestore/native/docs/reference/libraries)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### Firestore release notes | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/release-notes](https://docs.cloud.google.com/firestore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore release notes Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/docs/release-notes Support for Firestore point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now generally available (GA). ...
- For documents with many fields that don&#x27;t require indexing, you can now add collection-level index exemptions on all fields in a collection ...

### Firestore client libraries | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/reference/libraries](https://docs.cloud.google.com/firestore/native/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Firestore client libraries Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/native/docs/reference/libraries API Reference Documentation · Source Code · GitHub Issue Tracker · Stack Overflow · The Firebase Admin SDKs bundle the Google Cloud client libraries for Firestore alongside client libraries and SDKs for several other Firebase features.
- Using one of the Admin SDKs, you can initialize access to Firestore and several other services from a single SDK.

