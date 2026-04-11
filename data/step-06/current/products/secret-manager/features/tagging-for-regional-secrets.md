---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:54.976Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Tagging for regional secrets"
feature_slug: "tagging-for-regional-secrets"
latest_feature_date: "2025-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"
  - "https://docs.cloud.google.com/secret-manager/docs/overview"
keywords:
  - "tagging"
  - "for"
  - "regional"
  - "secrets"
  - "tags"
  - "during"
  - "creation"
  - "and"
---

# Tagging for regional secrets

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Regional secrets support tags during creation and for existing secrets.

## Extended Definition

Regional secrets support tags during creation and for existing secrets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)

## Supporting Pages

### Secret Manager roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager](https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secret Manager roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/secretmanager This page lists the IAM roles and permissions for Secret Manager.

### Create a secret | Secret Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Create a secret Secret Manager Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets For more information about granting roles, see Manage access to projects, folders, and organizations.
- You can create secrets using the Google Cloud console, the Google Cloud CLI, the Secret Manager API, or the Secret Manager client libraries.

### Secret Manager overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ensure high availability and disaster recovery with secret replication: You can replicate your secrets across multiple regions to ensure high availability and disaster recovery for your applications regardless of their geographic location.
- Secret Manager overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/secret-manager/docs/overview You can segregate responsibilities for accessing, managing, auditing, and rotating secrets.
- You can choose between the following replication policies: Automatic replication: Google Cloud decides the regions considering availability and latency.

