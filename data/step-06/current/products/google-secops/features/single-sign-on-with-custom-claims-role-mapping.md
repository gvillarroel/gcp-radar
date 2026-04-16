---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.676Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Single sign-on with custom claims role mapping"
feature_slug: "single-sign-on-with-custom-claims-role-mapping"
latest_feature_date: "2026-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
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

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Bindplane access can be managed through an identity provider with custom claims role mapping.

## Extended Definition

Bindplane access can be managed through an identity provider with custom claims role mapping.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)

## Supporting Pages

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Profile The Profile page displays the information from the user's profile (user ID, group ID, roles assigned) and some additional information about their organization (customer ID, Google Cloud project number, Google Cloud project ID).
- The available roles are: Default ViewerWithNoDetectAccess Viewer Editor Administrator Once you have added your user or group IDs and selected the appropriate role from the ASSIGN ROLE drop-down menu, click ASSIGN .
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- When deleting users or groups, make sure you retain at least one user or group that has the Administrator role and is in your IdP; otherwise, you'll lose administrator access.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- The script creates new custom roles for each permission group and assigns them to users for Cloud Identity customers or IdP groups for Workforce Identity Federation customers.
- Any calls made to the legacy SOAR API until September 30, 2026 will remain accessible in the SOAR Audit logs For Google SecOps customers, see Collect Google SecOps SOAR logs .

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This mapping is required to provide the service account or workload identity with the necessary access to SOC Roles and Environments.
- Can be v1alpha , v1beta , or v1 . project id : Your project ID (same project as you defined for your IAM permissions) location : The location of your project (region); same as the regional endpoints instance id : Your Google Security Operations SIEM customer ID.
- Optional: Create a staging integration If you're editing a custom integration or a component of a commercial integration, we recommend that you push the changes to a staging integration first.
- For more detailed information on mapping users and service accounts, see Map users in the platform using third-party identity or Map users in the platform using Cloud Identity .

