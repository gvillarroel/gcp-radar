---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:53.997Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "Quota adjuster folder and organization support"
feature_slug: "quota-adjuster-folder-and-organization-support"
latest_feature_date: "2026-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/quota-adjuster"
  - "https://docs.cloud.google.com/docs/quotas/api-overview"
  - "https://docs.cloud.google.com/docs/quotas/view-manage"
  - "https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples"
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
Coverage: MEDIUM

## Step 02 Summary

Quota adjuster supports folder-level and organization-level configuration through the Cloud Quotas API, gcloud CLI, Terraform, and client libraries.

## Extended Definition

Quota adjuster supports folder-level and organization-level configuration through the Cloud Quotas API, gcloud CLI, Terraform, and client libraries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)

## Supporting Pages

### Use the quota adjuster \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To access quota adjuster settings at the folder or organization level, use the Cloud Quotas API ( Preview ) or the Google Cloud CLI Cloud Quotas commands (available at the beta release level ).
- Limitations The quota adjuster has the following limitations: Quota adjuster settings at the folder and organization level aren't available in the Google Cloud console.
- For this reason, the option to enable the quota adjuster is only available for projects, folders, and organizations with enough historical activity to support accurate predictions.
- Vertex AI API Resource management (CRUD) requests per minute per region Vertex AI API Restricted image training TPU V3 pod cores per region Enable the quota adjuster To enable the quota adjuster, you must have the following Identity and Access Management permissions: cloudquotas.quotas.update cloudquotas.quotas.get To enable the quota adjuster, select the appropriate tab and follow the instructions: Console In the Google Cloud console, go to the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits Click the Configurations tab.

### Cloud Quotas API overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can request quota decrease adjustments for project-, organization-, and folder-level quotas.
- To see if a Google Cloud product supports organization-level quota increase adjustments, refer to the documentation for that product.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access the cloudquotas quotaPreferences , cloudquotas quotaInfos , and cloudquotas quotaAdjusterSettings resources: cloudquotas.quotas.update cloudquotas.quotas.get monitoring.timeSeries.list resourcemanager.projects.get resourcemanager.projects.list You might also be able to get these permissions with custom roles or other predefined roles .
- The Cloud Quotas API service has the following endpoint and all URIs are relative to it: https://cloudquotas.googleapis.com Required roles To get the permissions that you need to access the cloudquotas quotaPreferences , cloudquotas quotaInfos , and cloudquotas quotaAdjusterSettings resources, ask your administrator to grant you the Cloud Quotas Admin ( cloudquotas.admin ) IAM role on the project.

### View and manage quotas \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: To inspect the aggregate quota usage at the folder and organization levels, select the organization or folder from the resource selector.
- You can request quota decrease adjustments for project-, organization-, and folder-level quotas.
- Required roles To get the permissions that you need to request quota adjustments, ask your administrator to grant you the following IAM roles on the project, folder, or organization: To view quotas: Quota Viewer ( roles/servicemanagement.quotaViewer ) To request quota adjustments: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For examples that show how to use the Cloud Quotas API to adjust quotas and automate quota adjustments in your Google Cloud projects, folders, or organization, see Implement common use cases .

### "Manage quotas using the gcloud beta CLI \_|\_ Cloud Quotas \_|\_ Google\

- URL: [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can request quota decrease adjustments for project-, organization-, and folder-level quotas.
- The output would contain data specific to your configuration and look similar to the following example output: createTime : ' CREATE TIME ' dimensions : gpu family : NVIDIA H100 region : us-east4 etag : ETAG VALUE name : projects/12345/locations/global/quotaPreferences/ PREFERENCE ID quotaConfig : grantedValue : '0' preferredValue : '128' traceId : TRACE ID quotaId : GPUS-PER-GPU-FAMILY-per-project-region reconciling : true service : compute.googleapis.com updateTime : ' UPDATE TIME ' Enable quota adjuster through a client project A client project refers to the project used by an application or user to access and interact with Google Cloud resources, while a resource project is the underlying project where those resources are stored and managed.
- QuotaInfo is a read-only resource that provides metadata and quota value information about a particular quota for a given project, folder or organization.
- To see if a Google Cloud product supports organization-level quota increase adjustments, refer to the documentation for that product.

