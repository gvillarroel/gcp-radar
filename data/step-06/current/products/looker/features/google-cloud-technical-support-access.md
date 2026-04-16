---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.502Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Google Cloud Technical Support access"
feature_slug: "google-cloud-technical-support-access"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "technical"
  - "access"
  - "available"
  - "looker"
  - "core"
  - "instances"
  - "lets"
  - "admins"
---

# Google Cloud Technical Support access

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Technical Support access is available for Looker (Google Cloud core) instances; Google Cloud Technical Support access lets admins configure support access duration and support user roles.

## Extended Definition

Google Cloud Technical Support access is available for Looker (Google Cloud core) instances; Google Cloud Technical Support access lets admins configure support access duration and support user roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Automated Gemini in Looker enablement and user management Note: This setting is not available for Looker (Google Cloud core) instances.
- Some settings are available only for Looker (original) instances or only for Looker (Google Cloud core) instances.
- Login Consent Configuration Note: This setting is available only for Looker (Google Cloud core) instances.
- Message Configuration Note: This setting is available only for Looker (Google Cloud core) instances.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- For example, the looker.instances.login permission lets a principal log in to Looker (Google Cloud core) instances.
- Home Documentation Data analytics Looker Guides Send feedback Looker (Google Cloud core) access control with IAM Stay organized with collections Save and categorize content based on your preferences.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) SAML If you have multiple authentication systems in place, you can specify more than one system to merge by in this field.
- Additionally, Looker (Google Cloud core) customers who are using OIDC with a private connections instance, must ensure that their networks are set up to allow access to the OIDC provider.
- Note: Customers who use Looker (Google Cloud core) should be aware of their responsibility for controlling access and permissions when using third-party identity providers.
- Planning considerations Consider using the Alternate Login for Specified Users option to allow Looker admins to access Looker without OpenID Connect.

