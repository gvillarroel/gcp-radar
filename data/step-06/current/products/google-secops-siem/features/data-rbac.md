---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.608Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Data RBAC"
feature_slug: "data-rbac"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
keywords:
  - "rbac"
  - "secops"
  - "lets"
  - "you"
  - "control"
  - "user"
  - "access"
  - "your"
---

# Data RBAC

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Google SecOps lets you control user access to data in your environment based on assigned roles.

## Extended Definition

Google SecOps lets you control user access to data in your environment based on assigned roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)

## Supporting Pages

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- The following is a high-level overview of the configuration process: Plan your implementation: identify the different types of data you want to restrict user access to.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data RBAC overview Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that uses individual user roles to restrict user access to data within an organization.
- Data RBAC administrators can create scopes and assign them to users to control their data access within Google SecOps.
- Access control with scopes and labels Google SecOps lets you control data access to users by using scopes.
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Impact of data RBAC on Google SecOps features Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that restricts user access to data based on individual user roles within an organization.
- Data RBAC controls user access according to their assigned scopes and ensures that users can access only authorized information.
- Access control : While feature RBAC determines who can create or edit a dashboard, data RBAC determines what specific data is visible within the charts and tables.
- Your data may still be visible on the SOAR side; therefore, ensure that appropriate access controls are in place.

