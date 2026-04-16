---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.491Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Single sign-on with custom claims role mapping"
feature_slug: "single-sign-on-with-custom-claims-role-mapping"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
keywords:
  - "single"
  - "sign"
  - "custom"
  - "claims"
  - "role"
  - "mapping"
  - "bindplane"
  - "access"
---

# Single sign-on with custom claims role mapping

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Bindplane access can be managed through an identity provider using custom claims role mapping.

## Extended Definition

Bindplane access can be managed through an identity provider using custom claims role mapping.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)

## Supporting Pages

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference-required-1`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Profile The Profile page displays the information from the user's profile (user ID, group ID, roles assigned) and some additional information about their organization (customer ID, Google Cloud project number, Google Cloud project ID).
- The available roles are: Default ViewerWithNoDetectAccess Viewer Editor Administrator Once you have added your user or group IDs and selected the appropriate role from the ASSIGN ROLE drop-down menu, click ASSIGN .
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- When deleting users or groups, make sure you retain at least one user or group that has the Administrator role and is in your IdP; otherwise, you'll lose administrator access.

### "Collect Chrome Enterprise Premium Context Access Aware Data \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a new role and assign a privilege, do the following: Select the newly created username.
- To assign the role to the user, do the following: Click Assign Users .
- Navigate to the newly created user and click Assign Role .
- Collect Chrome Enterprise Premium Context Access Aware Data Supported in: Google secops SIEM This document explains how you can connect your organization to Google Security Operations, enable the Identity-Aware Proxy (IAP) API, and set up feeds to ingest the following data to Google Security Operations.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference-required-1`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This mapping is required to provide the service account or workload identity with the necessary access to SOC Roles and Environments.
- Can be v1alpha , v1beta , or v1 . project id : Your project ID (same project as you defined for your IAM permissions) location : The location of your project (region); same as the regional endpoints instance id : Your Google Security Operations SIEM customer ID.
- Optional: Create a staging integration If you're editing a custom integration or a component of a commercial integration, we recommend that you push the changes to a staging integration first.
- For more detailed information on mapping users and service accounts, see Map users in the platform using third-party identity or Map users in the platform using Cloud Identity .

