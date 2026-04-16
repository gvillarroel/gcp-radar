---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.738Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "SOAR environment deletion"
feature_slug: "soar-environment-deletion"
latest_feature_date: "2025-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
keywords:
  - "soar"
  - "environment"
  - "deletion"
  - "you"
  - "can"
  - "now"
  - "delete"
  - "high"
---

# SOAR environment deletion

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

You can now delete high-load SOAR environments directly from the platform.

## Extended Definition

You can now delete high-load SOAR environments directly from the platform.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)

## Supporting Pages

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key changes and enhancements The following table highlights the major differences between the old and new API surfaces: Feature area Old API New API Details Authentication API token OAuth 2.0 The new authentication method provides enhanced security and standardizes the process.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.
- This mapping is required to provide the service account or workload identity with the necessary access to SOC Roles and Environments.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Ingress rules The following Cloud Storage methods must be allowed in the ingress rule: google.storage.objects.list : Required for a single file feed. google.storage.objects.get : Required for feeds that require directory or subdirectory access. google.storage.objects.delete : Required for feeds that require deletion of the source file.
- Source deletion options For supported feed source types, including Cloud Storage, the SOURCE DELETION OPTION field offers these options: Never delete files Delete transferred files and empty directories Delete transferred files Microsoft Azure Blob Storage (AZURE BLOBSTORE) doesn't support deletion of source files.
- For the following feed sources ( "feedSourceType" ): GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 , the SOURCE DELETION OPTION field offers two options: NEVER : Never deletes any files after transfers.
- Note: When you configure the SOURCE DELETION OPTION field, if you select an option to delete source objects, you must enable the required deletion permissions for that feed type.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- For example, a webhook defined on: https:// xxxx.siemplify-soar.com/api/external/v1 /webhooks/{webhook id}?api key=xxxx will need to be updated to: https:// us-chronicle.googleapis.com/v1alpha/projects/{project id}/locations/{location}/instances/{instance/{instance id} /webhooks/{webhook id}?api key=xxxx The authentication for webhooks remains unchanged.
- If you have granted the Service Account Token Creator IAM role to the python service account gke-init-python@soar-yyyyyy.iam.gserviceaccount.com , you must grant the same Service Account Token Creator IAM role to the new Python service account soar-python@yyyyyyyyyyy-tp.iam.gserviceaccount.com after the migration.

