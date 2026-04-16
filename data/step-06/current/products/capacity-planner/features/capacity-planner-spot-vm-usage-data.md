---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.754Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Spot VM usage data"
feature_slug: "capacity-planner-spot-vm-usage-data"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
keywords:
  - "Spot VM usage metrics"
  - "Spot VM metrics"
  - "preemptible VM usage"
  - "VM usage trend"
  - "Spot VM forecast view"
  - "Spot VM capacity usage"
  - "Spot VM usage data"
---

# Capacity Planner Spot VM usage data

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview supports usage data for Spot VMs.

## Extended Definition

In Capacity Planner, Spot VM usage data (including preemptible quota) is available for specific resource types—compute instances, GPUs, and TPUs—when Spot context is enabled. Google Cloud documentation describes two supported methods to access it: in the console by enabling the Spot usage toggle in the usage and forecast graphs, or programmatically by setting `isSpot=true` in the Capacity Planner API. The same documentation explicitly says forecast data for Spot VMs is not supported, so Spot coverage is for usage viewing in defined Spot paths rather than full forecast support.

## Evidence Summary

The cited Capacity Planner pages provide the feature behavior and limits for Spot VM data visibility and the API/console controls required to request it, plus general export/resource-scope context for Capacity Planner usage and forecast data.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

