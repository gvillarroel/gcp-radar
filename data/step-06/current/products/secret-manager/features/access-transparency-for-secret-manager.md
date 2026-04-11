---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.982Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Access Transparency for Secret Manager"
feature_slug: "access-transparency-for-secret-manager"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs"
  - "https://docs.cloud.google.com/secret-manager/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
keywords:
  - "access"
  - "transparency"
  - "for"
  - "secret"
  - "manager"
  - "entered"
  - "preview"
---

# Access Transparency for Secret Manager

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Access Transparency entered Preview for Secret Manager.

## Extended Definition

Access Transparency entered Preview for Secret Manager.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)

## Supporting Pages

### Access control with IAM | Secret Manager Documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can grant a service account the Secret Manager Secret Accessor role (roles/secretmanager.secretAccessor) on a single secret.
- Access control with IAM Secret Manager Documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs The role roles/owner includes the secretmanager.versions.access permission, but the roles/editor and roles/viewer do not.
- If a principal only needs to access a single secret&#x27;s value, don&#x27;t grant that principal the ability to access all secrets.

### Access control with IAM | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control with IAM Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/access-control For example, you can grant a service account the Secret Manager Admin role (roles/secretmanager.admin) on a single secret.
- IAM Conditions allow you to define and enforce conditional, attribute-based access control for some Google Cloud resources, including Secret Manager resources.

### Class SecretManagerServiceAsyncClient (2.25.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Class SecretManagerServiceAsyncClient (2.25.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager v1.services.secret manager service.SecretManagerServiceAsyncClient Manages secrets and operations using those secrets.

