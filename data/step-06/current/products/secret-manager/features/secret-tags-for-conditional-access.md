---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.978Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret tags for conditional access"
feature_slug: "secret-tags-for-conditional-access"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/access-control"
  - "https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs"
  - "https://docs.cloud.google.com/secret-manager/docs/best-practices"
keywords:
  - "secret"
  - "tags"
  - "for"
  - "conditional"
  - "access"
  - "can"
  - "be"
  - "attached"
---

# Secret tags for conditional access

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Tags can be attached to secrets to conditionally grant or deny access based on tag presence.

## Extended Definition

Tags can be attached to secrets to conditionally grant or deny access based on tag presence.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- [https://docs.cloud.google.com/secret-manager/docs/best-practices](https://docs.cloud.google.com/secret-manager/docs/best-practices)

## Supporting Pages

### Access control with IAM | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access control with IAM Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/access-control For example, you can grant a service account the Secret Manager Admin role (roles/secretmanager.admin) on a single secret.
- IAM Conditions allow you to define and enforce conditional, attribute-based access control for some Google Cloud resources, including Secret Manager resources.

### Access control with IAM | Secret Manager Documentation | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs](https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant a service account the Secret Manager Secret Accessor role (roles/secretmanager.secretAccessor) on a single secret.
- Access control with IAM Secret Manager Documentation Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/regional-secrets/access-control-rs The role roles/owner includes the secretmanager.versions.access permission, but the roles/editor and roles/viewer do not.
- If a principal only needs to access a single secret&#x27;s value, don&#x27;t grant that principal the ability to access all secrets.

### Secret Manager best practices | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/best-practices](https://docs.cloud.google.com/secret-manager/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secret Manager best practices Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/best-practices For information, see Use Secret Manager with other products.
- Choose the automatic replication policy when creating secrets unless your workload has specific location requirements (enforceable using the constraints/gcp.resourceLocations constraint).
- Reference secrets by their version number rather than using the latest alias.
- Typically this means configuring your application with a specific secret version that is read on startup.

