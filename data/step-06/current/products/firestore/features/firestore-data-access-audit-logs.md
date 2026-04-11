---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.433Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore Data Access audit logs"
feature_slug: "firestore-data-access-audit-logs"
latest_feature_date: "2021-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/firestore"
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam"
keywords:
  - "firestore"
  - "access"
  - "audit"
  - "logs"
  - "supports"
  - "read"
  - "and"
  - "write"
---

# Firestore Data Access audit logs

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

Firestore supports DATA_READ and DATA_WRITE Data Access audit logs; Firestore supports DATA_READ and DATA_WRITE Data Access audit logs in Preview.

## Extended Definition

Firestore supports DATA_READ and DATA_WRITE Data Access audit logs; Firestore supports DATA_READ and DATA_WRITE Data Access audit logs in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)

## Supporting Pages

### Class FirestoreAdminClient (2.22.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Class FirestoreAdminClient (2.22.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore admin v1.services.firestore admin.client.FirestoreAdminClient Project, Database, Namespace, Collection, Collection Group, and Document are used as defined in the Google Cloud Firestore API.

### Firestore roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/firestore](https://docs.cloud.google.com/iam/docs/roles-permissions/firestore)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Firestore roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/firestore This page lists the IAM roles and permissions for Firestore.

### Identity and Access Management (IAM) | Firestore with MongoDB compatibility | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management (IAM) Firestore with MongoDB compatibility Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam With IAM, every API method in Firestore requires that the account making the API request has the appropriate permissions to use the resource.

