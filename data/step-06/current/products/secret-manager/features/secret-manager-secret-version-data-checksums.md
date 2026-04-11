---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.981Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager secret version data checksums"
feature_slug: "secret-manager-secret-version-data-checksums"
latest_feature_date: "2022-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "secret"
  - "manager"
  - "version"
  - "checksums"
  - "added"
  - "for"
  - "when"
  - "adding"
---

# Secret Manager secret version data checksums

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager added support for data checksums when adding or accessing a secret version.

## Extended Definition

Secret Manager added support for data checksums when adding or accessing a secret version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get](https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Method: projects.secrets.versions.get | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get](https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.secrets.versions.get Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get GET https://secretmanager.googleapis.com/v1beta1/{name=projects/ /secrets/ /versions/ }

### Class SecretManagerServiceAsyncClient (2.25.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.25.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

### Class SecretManagerServiceAsyncClient (2.26.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.26.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1beta1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

