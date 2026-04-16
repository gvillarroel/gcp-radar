---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.775Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Compute Engine quota-to-usage visibility"
feature_slug: "capacity-planner-compute-engine-quota-to-usage-visibility"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/quotas"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "resource usage vs quota"
  - "quota utilization view"
  - "quota usage correlation"
  - "Compute Engine quota and usage"
  - "quota utilization"
  - "quota vs usage"
  - "quota-to-usage view"
  - "Capacity Planner preview"
---

# Capacity Planner Compute Engine quota-to-usage visibility

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview shows Compute Engine quota in relation to resource usage to support quota adjustment and capacity planning.

## Extended Definition

Capacity Planner’s preview feature provides visibility into compute resource usage and quota together by showing usage, forecast, and quota in its Usage & Forecast views for resources like Virtual Machines, Disks, GPUs, and TPUs. It supports capacity planning at project, folder, or organization scope by surfacing historical and forecast data, and it links quota visibility to quota-adjustment workflows (such as enabling the quota adjuster) when sufficient data exists. Google Cloud labels Capacity Planner as a Preview (Pre-GA) offering.

## Evidence Summary

The provided pages confirm that Capacity Planner is Pre-GA and document both quota controls and Usage & Forecast pages that display usage/forecast data together with quota for compute-related resources.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/quotas](https://docs.cloud.google.com/capacity-planner/docs/quotas)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### Quotas and limits \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/quotas](https://docs.cloud.google.com/capacity-planner/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines Capacity Planner quota behavior, values, and adjustment flow, which is useful context for quota and usage planning, though it does not explicitly describe a Compute Engine quota-to-usage visibility UI or dashboard.

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

