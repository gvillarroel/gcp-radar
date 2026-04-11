---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.431Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore query builder"
feature_slug: "firestore-query-builder"
latest_feature_date: "2022-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/firestore/native/docs/reference/libraries"
  - "https://docs.cloud.google.com/firestore/native/docs/security/iam"
keywords:
  - "firestore"
  - "query"
  - "builder"
  - "includes"
  - "in"
  - "the"
  - "console"
  - "for"
---

# Firestore query builder

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore includes a query builder in the console for filtering and comparing documents.

## Extended Definition

Firestore includes a query builder in the console for filtering and comparing documents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/firestore/native/docs/reference/libraries](https://docs.cloud.google.com/firestore/native/docs/reference/libraries)
- [https://docs.cloud.google.com/firestore/native/docs/security/iam](https://docs.cloud.google.com/firestore/native/docs/security/iam)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### Firestore client libraries | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/reference/libraries](https://docs.cloud.google.com/firestore/native/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore client libraries Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/native/docs/reference/libraries API Reference Documentation · Source Code · GitHub Issue Tracker · Stack Overflow · The Firebase Admin SDKs bundle the Google Cloud client libraries for Firestore alongside client libraries and SDKs for several other Firebase features.
- Using one of the Admin SDKs, you can initialize access to Firestore and several other services from a single SDK.

### Security for server client libraries | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/security/iam](https://docs.cloud.google.com/firestore/native/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security for server client libraries Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/native/docs/security/iam With IAM, every API method in Firestore requires that the account making the API request has the appropriate permissions to use the resource.
- Permissions are granted by setting policies that grant roles to a user, group, or service account.

