---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.769Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner folder-level usage and forecast export"
feature_slug: "capacity-planner-folder-level-usage-and-forecast-export"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse"
keywords:
  - "usage and forecast export by folder"
  - "Persistent Disk and GPU folder forecast"
  - "folder scope usage data"
  - "folder scope export"
  - "folder-level forecast"
  - "folder forecast export"
  - "folder-level usage"
  - "VM folder export"
---

# Capacity Planner folder-level usage and forecast export

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

For folder-scoped data, Capacity Planner preview supports viewing and exporting actual and forecasted usage for VMs, Persistent Disk, and GPUs.

## Extended Definition

In Google Cloud Capacity Planner, the feature allows users to view and export usage and forecast information for compute instances (VM instances), Persistent Disk volumes, and GPUs. It supports selecting scope at the project, folder, or organization level, and exporting the data as CSV by resource type in the "project, folder, or organization" scope. The feature is documented as a preview (Pre-GA) capability and returns forecast data through the Capacity Planner forecast query model.

## Evidence Summary

These official Capacity Planner docs confirm the feature’s preview status, folder-scope usage/forecast workflows, supported resource types (VM/compute instances, Persistent Disk, GPUs), and CSV export capabilities for usage and forecast data.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)

## Supporting Pages

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly states that usage and forecast data can be exported for resources at the project, folder, or organization scope.

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: It confirms folder-scoped usage/forecast planning context, but does not document export functionality for folder-level data.

### QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: The response includes forecast resource naming formats for folder scope, but does not document usage export or folder-level preview feature capabilities.

