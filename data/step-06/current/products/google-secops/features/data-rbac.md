---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.847Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Data RBAC"
feature_slug: "data-rbac"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
keywords:
  - "rbac"
  - "lets"
  - "administrators"
  - "control"
  - "user"
  - "access"
  - "secops"
  - "based"
---

# Data RBAC

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Data RBAC lets administrators control user access to Google SecOps data based on assigned roles.

## Extended Definition

Data RBAC lets administrators control user access to Google SecOps data based on assigned roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)

## Supporting Pages

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data RBAC overview Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that uses individual user roles to restrict user access to data within an organization.
- Data RBAC administrators can create scopes and assign them to users to control their data access within Google SecOps.
- Access control with scopes and labels Google SecOps lets you control data access to users by using scopes.
- For example, a user might be allowed to access a specific feature (feature RBAC) and then, within that feature, their access to specific data might be restricted based on their role (data RBAC).

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .
- Enable data RBAC after assigning scopes: setting up and assigning scopes in advance provides immediate data access to users when data RBAC is enabled.
- Important: Before data RBAC is enabled, all users, regardless of assigned scopes, have global access and can view all data.

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- Important: This document describes the Google SecOps roles and groups available in the Google SecOps RBAC feature that don't use IAM for feature access control.
- Permissions Permissions provide the authorization needed to perform a single controlled action in Google Security Operations, including (see the user interface for the complete list of permissions): View rule Modify rule Edit feedback Edit reference list View RBAC permissions If a user does not have permissions for an action, the associated feature is disabled.
- If you migrated your instance to IAM, or if you're onboarding to Google SecOps on or after October 6, 2025, see Configure feature access control using IAM and Google SecOps permissions in IAM .

