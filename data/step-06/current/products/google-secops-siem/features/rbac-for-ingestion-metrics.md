---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.496Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "RBAC for ingestion metrics"
feature_slug: "rbac-for-ingestion-metrics"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "rbac"
  - "ingestion"
  - "metrics"
  - "restricts"
  - "visibility"
  - "health"
  - "based"
  - "user"
---

# RBAC for ingestion metrics

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

RBAC for ingestion metrics restricts visibility of ingestion health data based on a user's business scope.

## Extended Definition

RBAC for ingestion metrics restricts visibility of ingestion health data based on a user's business scope.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "Impact of data RBAC on Google SecOps features \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-impact)
- Source ID: `site-docs-reference-required-1`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Impact of data RBAC on Google SecOps features Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that restricts user access to data based on individual user roles within an organization.
- Before data RBAC is enabled, all users have visibility into all detections, regardless of any scope tagging.
- The specific scope associated with a dashboard determines the level of interaction permitted for global and scoped users : Global users : Maintain full visibility and management capabilities across all dashboards, regardless of scope.
- IOC matches and ATI data derived from customer logs require global scope for visibility and aren't available to users with restricted scopes.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .
- Enable data RBAC Enabling data RBAC applies all assigned scopes to rules and reference lists, making sure users see only the data relevant to their scopes.
- Enable data RBAC after assigning scopes: setting up and assigning scopes in advance provides immediate data access to users when data RBAC is enabled.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data RBAC overview Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that uses individual user roles to restrict user access to data within an organization.
- For example, a user might be allowed to access a specific feature (feature RBAC) and then, within that feature, their access to specific data might be restricted based on their role (data RBAC).
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.
- Restricted viewer roles/chroniclesiem.restrictedViewer Similar to the Viewer role, but all data displayed in the dashboard is filtered according to the user's assigned log scope (Data RBAC).

