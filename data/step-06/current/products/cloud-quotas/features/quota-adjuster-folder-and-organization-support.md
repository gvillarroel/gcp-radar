---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:26:31.350Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "Quota adjuster folder and organization support"
feature_slug: "quota-adjuster-folder-and-organization-support"
latest_feature_date: "2026-01-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/quota-adjuster"
  - "https://docs.cloud.google.com/docs/quotas/api-overview"
  - "https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences"
keywords:
  - "quota"
  - "adjuster"
  - "folder"
  - "and"
  - "organization"
  - "supports"
  - "level"
  - "configuration"
---

# Quota adjuster folder and organization support

Product: Cloud Quotas
Coverage: LOW

## Step 02 Summary

Quota adjuster supports folder-level and organization-level configuration through the Cloud Quotas API, gcloud CLI, Terraform, and client libraries.

## Extended Definition

Quota adjuster supports folder-level and organization-level configuration through the Cloud Quotas API, gcloud CLI, Terraform, and client libraries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- [https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences](https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences)

## Supporting Pages

### Use the quota adjuster \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To access quota adjuster settings at the folder or organization level, use the Cloud Quotas API ( Preview ) or the Google Cloud CLI Cloud Quotas commands (available at the beta release level ).
- Limitations The quota adjuster has the following limitations: Quota adjuster settings at the folder and organization level aren't available in the Google Cloud console.
- For this reason, the option to enable the quota adjuster is only available for projects, folders, and organizations with enough historical activity to support accurate predictions.
- Vertex AI API Resource management (CRUD) requests per minute per region Vertex AI API Restricted image training TPU V3 pod cores per region Enable the quota adjuster To enable the quota adjuster, you must have the following Identity and Access Management permissions: cloudquotas.quotas.update cloudquotas.quotas.get To enable the quota adjuster, select the appropriate tab and follow the instructions: Console In the Google Cloud console, go to the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits Click the Configurations tab.

### Cloud Quotas API overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can request quota decrease adjustments for project-, organization-, and folder-level quotas.
- To see if a Google Cloud product supports organization-level quota increase adjustments, refer to the documentation for that product.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access the cloudquotas quotaPreferences , cloudquotas quotaInfos , and cloudquotas quotaAdjusterSettings resources: cloudquotas.quotas.update cloudquotas.quotas.get monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list You might also be able to get these permissions with custom roles or other predefined roles .
- The Cloud Quotas API service has the following endpoint and all URIs are relative to it: https://cloudquotas.googleapis.com Required roles To get the permissions that you need to access the cloudquotas quotaPreferences , cloudquotas quotaInfos , and cloudquotas quotaAdjusterSettings resources, ask your administrator to grant you the Cloud Quotas Admin ( cloudquotas.admin ) IAM role on the project.

### "REST Resource: folders.locations.quotaPreferences \_|\_ Cloud Quotas \_\

- URL: [https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences](https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.quotaPreferences)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Resource: QuotaPreference JSON representation QuotaConfig JSON representation Origin Methods Resource: QuotaPreference QuotaPreference represents the preferred quota configuration specified for a project, folder or organization.
- Methods create Creates a new QuotaPreference that declares the desired value for a quota. get Gets details of a single QuotaPreference. list Lists QuotaPreferences in a given project, folder or organization. patch Updates the parameters of a single QuotaPreference.
- Home Documentation Cloud Quotas Reference Send feedback REST Resource: folders.locations.quotaPreferences Stay organized with collections Save and categorize content based on your preferences.
- For example: {"provider" : "Example Organization"} where provider is a service-specific quota dimension and Example Organization is the provider name.

