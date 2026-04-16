---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.686Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "RBAC for ingestion metrics"
feature_slug: "rbac-for-ingestion-metrics"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "rbac"
  - "ingestion"
  - "metrics"
  - "role"
  - "based"
  - "access"
  - "control"
  - "now"
---

# RBAC for ingestion metrics

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Role-based access control now restricts visibility of ingestion metrics in the Data Ingestion and Health dashboard by business scope.

## Extended Definition

Role-based access control now restricts visibility of ingestion metrics in the Data Ingestion and Health dashboard by business scope.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- Important: This document describes the Google SecOps roles and groups available in the Google SecOps RBAC feature that don't use IAM for feature access control.
- Google Security Operations includes the following predefined roles: Administrator—Manages the role-based access control policies for your enterprise.
- RBAC applications include the following: Create and assign roles based on the job responsibilities.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data RBAC overview Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that uses individual user roles to restrict user access to data within an organization.
- For example, a user might be allowed to access a specific feature (feature RBAC) and then, within that feature, their access to specific data might be restricted based on their role (data RBAC).
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.
- Difference between data RBAC and feature RBAC Data RBAC and feature RBAC are both methods for controlling access within a system, but they focus on different aspects.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .
- The following operators let you create precise rules for controlling access to multiple scopes with a single IAM condition: ENDS WITH : checks if the scope name ends with a specific word.
- To assign a scope to the user, add conditions to the Chronicle Restricted Data Access role that is assigned to the user (does not apply to global access roles).

