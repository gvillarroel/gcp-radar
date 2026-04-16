---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.448Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker (Google Cloud core) 90-day trial instances"
feature_slug: "looker-google-cloud-core-90-day-trial-instances"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect"
keywords:
  - "looker"
  - "core"
  - "90"
  - "day"
  - "trial"
  - "instances"
  - "now"
  - "available"
---

# Looker (Google Cloud core) 90-day trial instances

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) 90-day trial instances are now available.

## Extended Definition

Looker (Google Cloud core) 90-day trial instances are now available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)

## Supporting Pages

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- For example, the looker.instances.login permission lets a principal log in to Looker (Google Cloud core) instances.
- Three predefined roles for Looker (Google Cloud core) users are available.

### Admin settings - SAML authentication \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-saml)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) OIDC If you have more than one system in place, you can specify more than one system to merge by in this field.
- If you are using Looker (Google Cloud core) , the Bypass Login Page option is available automatically if SAML is used as the primary authentication method, and defaults to disabled.
- Alternate login for admins and specified users Note: Alternate login isn't available for Looker (Google Cloud core) .
- This page is enabled on Looker (Google Cloud core) instances by default.

### "Admin settings - OpenID Connect authentication \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect](https://docs.cloud.google.com/looker/docs/admin-panel-authentication-openid-connect)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- You can merge users from the following systems: Looker Email/Password (not available for Looker (Google Cloud core)) Google LDAP (not available for Looker (Google Cloud core)) SAML If you have multiple authentication systems in place, you can specify more than one system to merge by in this field.
- Alternate login for specified users Note: Alternate login is not available for Looker (Google Cloud core) .
- This page is enabled on Looker (Google Cloud core) instances by default.
- Enabling mirror OpenID Connect groups If you are using a Looker (Google Cloud core) instance, we recommend that you enable group mirroring for only the primary authentication method and don't enable group mirroring for the backup OAuth authentication .

