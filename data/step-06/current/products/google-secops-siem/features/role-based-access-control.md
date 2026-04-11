---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.562Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Role-based access control"
feature_slug: "role-based-access-control"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "role"
  - "based"
  - "access"
  - "control"
  - "lets"
  - "administrators"
  - "tailor"
  - "to"
---

# Role-based access control

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Lets administrators tailor access to Chronicle features by assigning role-based permissions to users.

## Extended Definition

Lets administrators tailor access to Chronicle features by assigning role-based permissions to users.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- Google Security Operations includes the following predefined roles: Administrator—Manages the role-based access control policies for your enterprise.
- The available roles are: Default ViewerWithNoDetectAccess Viewer Editor Administrator Once you have added your user or group IDs and selected the appropriate role from the ASSIGN ROLE drop-down menu, click ASSIGN .
- If you migrated your instance to IAM, or if you're onboarding to Google SecOps on or after October 6, 2025, see Configure feature access control using IAM and Google SecOps permissions in IAM .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This feature enables you to control user access to data within your Google SecOps environment based on their assigned roles.
- Role-based access control (RBAC) has been added to manage access to data tables.
- The experiments comply with the Role-Based Access Control (RBAC) configuration of your environment, and they have streamlined configurations with clear actionable results and output.
- This enables administrators to manage feature access control for Google SecOps including SOAR by leveraging Google Cloud IAM instead of managing it separately for SIEM and SOAR.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- December 14, 2021 Feature Role-based access control (RBAC) Role-based access control (RBAC) enables you to tailor access to Chronicle features based on an employee's role in the organization.
- February 15, 2022 Feature DeleteSubject The DeleteSubject method has been added to the Chronicle Role-Based Access Control (RBAC) API.
- This feature enables you to control user access to data within your Google SecOps environment based on their assigned roles.
- Role-based access control (RBAC) has been added to manage access to data tables.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data RBAC overview Supported in: Google secops SIEM Data role-based access control ( data RBAC ) is a security model that uses individual user roles to restrict user access to data within an organization.
- For example, a user might be allowed to access a specific feature (feature RBAC) and then, within that feature, their access to specific data might be restricted based on their role (data RBAC).
- User roles for Dashboards Access to dashboards is controlled by two main factors: a user's functional role and their data access scope .
- Data RBAC administrators can create scopes and assign them to users to control their data access within Google SecOps.

