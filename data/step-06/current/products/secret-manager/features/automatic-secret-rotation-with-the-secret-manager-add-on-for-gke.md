---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.975Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Automatic secret rotation with the Secret Manager add-on for GKE"
feature_slug: "automatic-secret-rotation-with-the-secret-manager-add-on-for-gke"
latest_feature_date: "2025-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "automatic"
  - "secret"
  - "rotation"
  - "with"
  - "the"
  - "manager"
  - "add"
  - "on"
---

# Automatic secret rotation with the Secret Manager add-on for GKE

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods; The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods.

## Extended Definition

The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods; The GKE Secret Manager add-on can automatically and periodically push updated secrets to pods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Access control with IAM | Secret Manager Documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control with IAM Secret Manager Documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs The role roles/owner includes the secretmanager.versions.access permission, but the roles/editor and roles/viewer do not.
- For example, you can grant a service account the Secret Manager Secret Accessor role (roles/secretmanager.secretAccessor) on a single secret.
- If a principal only needs to access a single secret&#x27;s value, don&#x27;t grant that principal the ability to access all secrets.

### Class SecretManagerServiceAsyncClient (2.25.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.25.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

### Class SecretManagerServiceAsyncClient (2.26.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1beta1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.26.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1beta1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

