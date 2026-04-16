---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.688Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Role-based access control"
feature_slug: "role-based-access-control"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "role"
  - "based"
  - "access"
  - "control"
  - "lets"
  - "administrators"
  - "tailor"
  - "chronicle"
---

# Role-based access control

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Lets administrators tailor access to Chronicle features by assigning role-based permissions to users.

## Extended Definition

Lets administrators tailor access to Chronicle features by assigning role-based permissions to users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference-required-1`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- Google Security Operations includes the following predefined roles: Administrator—Manages the role-based access control policies for your enterprise.
- Important: This document describes the Google SecOps roles and groups available in the Google SecOps RBAC feature that don't use IAM for feature access control.
- The available roles are: Default ViewerWithNoDetectAccess Viewer Editor Administrator Once you have added your user or group IDs and selected the appropriate role from the ASSIGN ROLE drop-down menu, click ASSIGN .

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data RBAC overview Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that uses individual user roles to restrict user access to data within an organization.
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.
- For example, a user might be allowed to access a specific feature (feature RBAC) and then, within that feature, their access to specific data might be restricted based on their role (data RBAC).
- To restrict a user to certain scopes, you must assign them the Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) role along with a predefined or a custom role.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- To assign a scope to the user, add conditions to the Chronicle Restricted Data Access role that is assigned to the user (does not apply to global access roles).
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- Click Add IAM condition against the Chronicle Restricted Data Access role.

