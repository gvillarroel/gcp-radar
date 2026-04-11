---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.902Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Custom security profiles API management"
feature_slug: "custom-security-profiles-api-management"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
keywords:
  - "security profile REST endpoint"
  - "custom security score categories API"
  - "create custom security profile API"
  - "score views in UI and API"
  - "security scores API"
  - "security profile API"
  - "scores API"
  - "security profiles API"
---

# Custom security profiles API management

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Security profiles can be created through the security scores API for custom security scoring categories, with score views available in the UI.

## Extended Definition

In Apigee Advanced API Security, custom security profiles are a managed entity for risk assessment workflows, and users can create, update, delete, list/get, attach, and detach them. The feature also includes viewing security scores and security monitoring conditions, with access controlled by specific Apigee IAM roles such as Apigee Security Admin, Organization Admin, Security Viewer, and related roles. Evidence for API endpoint behavior is limited to role/task descriptions, so endpoint mechanics are not fully specified in the provided excerpt.

## Evidence Summary

The page excerpt provides a permissions matrix for security-profile and security-score related tasks, confirming which IAM roles are required for create/update/delete and view/list operations.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)

## Supporting Pages

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly lists create/update/delete operations for custom security profiles and profile retrieval permissions, which helps define profile management controls.

Evidence snippets:
- Risk Assessment Task Required Role(s) Create, update, or delete a custom security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Attach or detach a security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View security scores Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List all security profiles or get a profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Create, update, or delete a security monitoring condition Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring conditions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin Required roles and permissions for abuse detection The table below shows the required roles and permissions to perform tasks related to abuse detection .

