---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.687Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "DeleteSubject"
feature_slug: "deletesubject"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
keywords:
  - "deletesubject"
  - "adds"
  - "chronicle"
  - "rbac"
  - "method"
  - "removing"
  - "user"
  - "group"
---

# DeleteSubject

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds a Chronicle RBAC API method for removing user and group role assignments.

## Extended Definition

Adds a Chronicle RBAC API method for removing user and group role assignments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac](https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)

## Supporting Pages

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-reference-required-1`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To understand the core concepts of data RBAC, different access types, and the corresponding user roles, the working of labels and scopes, and the impact of data RBAC on Google SecOps features, see Overview of Data RBAC .
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- To assign a scope to the user, add conditions to the Chronicle Restricted Data Access role that is assigned to the user (does not apply to global access roles).

### "Migrate from legacy RBAC to feature RBAC \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac](https://docs.cloud.google.com/chronicle/docs/administration/migrate-from-legacy-rbac-to-feature-rbac)
- Source ID: `site-docs-reference-required-1`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you can access Google SecOps as a user with the Chronicle API Admin role: Sign in to Google SecOps as a user with the Chronicle API Admin predefined role.
- When run, they create new IAM policies equivalent to your existing configuration, as defined in Google SecOps on the SIEM Settings > Users and Groups page.
- You should see the following message: To manage users and groups, go to Identity Access Management (IAM) in the Google Cloud console.
- Open the SIEM Settings > Users and Groups page.

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference-required-1`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Users & Groups The Users & Groups page enables an administrator to configure RBAC.
- Permissions Permissions provide the authorization needed to perform a single controlled action in Google Security Operations, including (see the user interface for the complete list of permissions): View rule Modify rule Edit feedback Edit reference list View RBAC permissions If a user does not have permissions for an action, the associated feature is disabled.
- Before you begin RBAC reads the group information from the SAML response from the following case-insensitive default attribute names: group idpgroup group memberof If you use a custom attribute name, it must be provided to your Google Security Operations first to enable you to modify your RBAC settings.
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.

