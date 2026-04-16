---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.438Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Scheduled export jobs for Looker (Google Cloud core)"
feature_slug: "scheduled-export-jobs-for-looker-google-cloud-core"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/looker-core-access-control"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-export"
keywords:
  - "scheduled"
  - "export"
  - "jobs"
  - "looker"
  - "core"
  - "instances"
  - "can"
  - "now"
---

# Scheduled export jobs for Looker (Google Cloud core)

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker (Google Cloud core) instances can now schedule daily zero-downtime export jobs.

## Extended Definition

Looker (Google Cloud core) instances can now schedule daily zero-downtime export jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/admin-panel-export](https://docs.cloud.google.com/looker/docs/admin-panel-export)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Email Domain Allowlist for Scheduled Content Note: In Looker (Google Cloud core) instances, you set the email domain allowlist for an instance within the Google Cloud console .
- Automated Gemini in Looker enablement and user management Note: This setting is not available for Looker (Google Cloud core) instances.
- Some settings are available only for Looker (original) instances or only for Looker (Google Cloud core) instances.
- Login Consent Configuration Note: This setting is available only for Looker (Google Cloud core) instances.

### Admin settings - Export \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-export](https://docs.cloud.google.com/looker/docs/admin-panel-export)
- Source ID: `site-docs-reference-required-4`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once the export has been completed and the data appears in your Cloud Storage bucket, continue with the steps on the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page, beginning with the Import the data into the new "empty" Looker (Google Cloud core) instance section, to complete the migration.
- See the Self-service migration from Looker (original) to Looker (Google Cloud core) documentation page for information about how to generate the information that needs to be entered onto the Export page and how to complete the migration.
- The Export page is where you perform these tasks: Create a request to export the data from your existing Looker (original) instance so that it can be migrated to the Looker (Google Cloud core) environment .
- If you need to migrate fresh data to your Looker (Google Cloud core) instance, you can request additional export operations and migrate new instance data into Looker (Google Cloud core).

### Looker (Google Cloud core) access control with IAM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Role Name Permissions Looker Viewer (roles/looker.viewer) Read-only access to all Looker (Google Cloud core) resources in the Google Cloud console. looker.backups.get looker.backups.list looker.instances.get looker.instances.list looker.instances.login looker.locations.get looker.locations.list looker.operations.get looker.operations.list resourcemanager.projects.get resourcemanager.projects.list Looker Instance User roles/looker.instanceUser Access to sign in to a Looker (Google Cloud core) instance. looker.instances.get looker.instances.login resourcemanager.projects.get resourcemanager.projects.list Looker Schema Viewer roles/looker.schemaViewer Access to Looker (Google Cloud core) schema data in Knowledge Catalog. looker.schemas.view Looker Admin roles/looker.admin Full access to all Looker (Google Cloud core) resources. looker.backups.create looker.backups.delete looker.backups.get looker.backups.list looker.instances.create looker.instances.delete looker.instances.export looker.instances.get looker.instances.import looker.instances.list looker.instances.login looker.instances.update looker.locations.get looker.locations.list looker.operations.cancel looker.operations.delete looker.operations.get looker.operations.list looker.schemas.view resourcemanager.projects.get resourcemanager.projects.list At least one principal must have the Looker Admin ( roles/looker.admin ) IAM role.
- These roles are granted at the Google Cloud project level and will control access uniformly for all Looker (Google Cloud core) instances within a Google Cloud project.
- For example, the looker.instances.login permission lets a principal log in to Looker (Google Cloud core) instances.
- What's next Use Google OAuth for Looker (Google Cloud core) user authentication Manage users within Looker (Google Cloud core) Configure a Looker (Google Cloud core) instance Looker (Google Cloud core) admin settings Administer a Looker (Google Cloud core) instance from the Google Cloud console Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

