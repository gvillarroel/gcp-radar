---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:26:31.356Z"
product_name: "Cloud Quotas"
product_slug: "cloud-quotas"
feature_name: "Ongoing rollouts"
feature_slug: "ongoing-rollouts"
latest_feature_date: "2024-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/quotas/view-manage"
  - "https://docs.cloud.google.com/docs/quotas/known-issues"
  - "https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos"
keywords:
  - "ongoing"
  - "rollouts"
  - "quotas"
  - "lets"
  - "users"
  - "view"
  - "quota"
  - "rollout"
---

# Ongoing rollouts

Product: Cloud Quotas
Coverage: LOW

## Step 02 Summary

Cloud Quotas lets users view ongoing quota rollout activity.

## Extended Definition

Cloud Quotas lets users view ongoing quota rollout activity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- [https://docs.cloud.google.com/docs/quotas/known-issues](https://docs.cloud.google.com/docs/quotas/known-issues)
- [https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos](https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos)

## Supporting Pages

### View and manage quotas \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to request quota adjustments, ask your administrator to grant you the following IAM roles on the project, folder, or organization: To view quotas: Quota Viewer ( roles/servicemanagement.quotaViewer ) To request quota adjustments: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To view quota usage and values for all resources in your project, follow these steps: Console In the Google Cloud console, go to the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits To focus on the information that you need, filter and sort the list as follows: To filter the list, enter the properties and values in the field.
- Use the console view that you prefer: Console To view API-specific quotas from the Quotas & System Limits page using a filter: In the Google Cloud console, go to the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits Click filter list Filter and select Service from the menu that appears.
- To view all quota increase requests, which includes pending and past requests: Console In the Google Cloud console, go to the IAM & Admin > Quotas & System Limits page: Go to Quotas & System Limits Click the Increase Requests tab.

### Known issues \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/quotas/known-issues](https://docs.cloud.google.com/docs/quotas/known-issues)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If a quota rollout is in progress, an informational message appears at the top of the Cloud Quotas page and the rolling update indicator appears next to the quota values impacted by ongoing rollouts.
- For more information, see View ongoing rollouts .
- For details, see View ongoing rollouts .
- These changes take place gradually, which means that during the rollout, the quota value that appears in the Google Cloud console or Cloud Quotas API won't reflect the new, increased quota value until the rollout completes.

### "REST Resource: folders.locations.services.quotaInfos \_|\_ Cloud Quotas\

- URL: [https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos](https://docs.cloud.google.com/docs/quotas/reference/rest/v1/folders.locations.services.quotaInfos)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Concurrent quotas are enforced on the total number of concurrent operations in flight at any given time. serviceRequestQuotaUri string URI to the page where users can request more quota for the cloud service—for example, https://console.cloud.google.com/iam-admin/quotas .
- JSON representation { "ongoingRollout" : boolean } Fields ongoingRollout boolean Whether there is an ongoing rollout for a quota or not.
- Resource: QuotaInfo JSON representation ContainerType QuotaIncreaseEligibility JSON representation IneligibilityReason DimensionsInfo JSON representation QuotaDetails JSON representation RolloutInfo JSON representation Methods Resource: QuotaInfo QuotaInfo represents information about a particular quota for a given project, folder or organization.
- JSON representation { "value" : string , "rolloutInfo" : { object ( RolloutInfo ) } } Fields value string ( int64 format) The value currently in effect and being enforced. rolloutInfo object ( RolloutInfo ) Rollout information of this quota.

