---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.979Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Delayed destruction of secret versions"
feature_slug: "delayed-destruction-of-secret-versions"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get"
  - "https://docs.cloud.google.com/secret-manager/docs/best-practices"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "delayed"
  - "destruction"
  - "of"
  - "secret"
  - "versions"
  - "can"
  - "be"
  - "scheduled"
---

# Delayed destruction of secret versions

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately; Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately.

## Extended Definition

Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately; Secret versions can be scheduled for destruction after a configurable delay instead of being destroyed immediately.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get](https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get)
- [https://docs.cloud.google.com/secret-manager/docs/best-practices](https://docs.cloud.google.com/secret-manager/docs/best-practices)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Method: projects.secrets.versions.get | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get](https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.secrets.versions.get Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1beta1/projects.secrets.versions/get GET https://secretmanager.googleapis.com/v1beta1/{name=projects/ /secrets/ /versions/ }

### Secret Manager best practices | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/best-practices](https://docs.cloud.google.com/secret-manager/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secret Manager best practices Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/best-practices For information, see Use Secret Manager with other products.
- Reference secrets by their version number rather than using the latest alias.
- Choose the automatic replication policy when creating secrets unless your workload has specific location requirements (enforceable using the constraints/gcp.resourceLocations constraint).
- Typically this means configuring your application with a specific secret version that is read on startup.

### Class SecretManagerServiceAsyncClient (2.26.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.26.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1beta1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

