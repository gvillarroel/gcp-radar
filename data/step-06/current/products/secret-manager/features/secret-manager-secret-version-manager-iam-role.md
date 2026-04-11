---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.986Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager Secret Version Manager IAM role"
feature_slug: "secret-manager-secret-version-manager-iam-role"
latest_feature_date: "2020-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager"
  - "https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "secret"
  - "manager"
  - "version"
  - "iam"
  - "role"
  - "this"
  - "allows"
  - "managing"
---

# Secret Manager Secret Version Manager IAM role

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

This IAM role allows managing secret versions.

## Extended Definition

This IAM role allows managing secret versions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager)
- [https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get](https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Secret Manager roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secret Manager roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager This page lists the IAM roles and permissions for Secret Manager.

### Method: projects.secrets.versions.get | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get](https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.secrets.versions.get Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get GET https://secretmanager.googleapis.com/v1beta1/{name=projects/ /secrets/ /versions/ }

### Class SecretManagerServiceAsyncClient (2.25.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.25.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

