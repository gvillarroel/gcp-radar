---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.498Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Non-production Looker (Google Cloud core) instances"
feature_slug: "non-production-looker-google-cloud-core-instances"
latest_feature_date: "2025-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-overview"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "non"
  - "production"
  - "looker"
  - "core"
  - "instances"
  - "lets"
  - "you"
  - "provision"
---

# Non-production Looker (Google Cloud core) instances

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets you provision, configure, and manage non-production Standard, Enterprise, and Embed Looker (Google Cloud core) instances.

## Extended Definition

Lets you provision, configure, and manage non-production Standard, Enterprise, and Embed Looker (Google Cloud core) instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-overview](https://docs.cloud.google.com/looker/docs/looker-core-overview)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Looker (Google Cloud core) overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-overview](https://docs.cloud.google.com/looker/docs/looker-core-overview)
- Source ID: `feature-recovery-http`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- If you need to spread instance load and offer specific geographical distribution across multiple Looker (Google Cloud core) instances for your production use case, you will need to purchase additional instances of the existing production Looker (Google Cloud core) edition.
- Non-production instances If you want to use a staging or testing instance, you can create a non-production instance by using the standard process for creating a Looker (Google Cloud core) instance, and selecting the appropriate non-production edition.
- Trial Instances If you want to try out Looker (Google Cloud core), you can create a trial Standard, Enterprise, or Embed edition instance that will have the same feature support as the corresponding production edition .
- Characteristics of non-production instances The following are things to know about non-production Looker (Google Cloud core) instances: Non-production instances are not covered by any Google SLAs.

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For example, the looker.instances.login permission lets a principal log in to Looker (Google Cloud core) instances.
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- Looker (Google Cloud core) uses Identity and Access Management (IAM) to provision user and admin access through a set of IAM roles .

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Email Domain Allowlist for Scheduled Content Note: In Looker (Google Cloud core) instances, you set the email domain allowlist for an instance within the Google Cloud console .
- Automated Gemini in Looker enablement and user management Note: This setting is not available for Looker (Google Cloud core) instances.
- Some settings are available only for Looker (original) instances or only for Looker (Google Cloud core) instances.
- Login Consent Configuration Note: This setting is available only for Looker (Google Cloud core) instances.

