---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.774Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner organization-level usage and forecast export"
feature_slug: "capacity-planner-organization-level-usage-and-forecast-export"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse"
keywords:
  - "usage export for VMs and PD"
  - "org usage and forecast export"
  - "organization-scoped usage export"
  - "Persistent Disk usage export"
  - "export forecasted usage"
  - "export actual usage"
  - "VM usage export"
  - "Capacity Planner preview"
---

# Capacity Planner organization-level usage and forecast export

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

For organization-scoped data, Capacity Planner preview supports viewing and exporting actual and forecasted usage for VMs and Persistent Disks.

## Extended Definition

In Capacity Planner Preview, users can view and export usage/forecast data for Compute Engine instances and Persistent Disk volumes at the organization level (as well as project/folder levels) through the Google Cloud console. The export flow is CSV-based and supports historical usage data and forecast data windows (including up to two years of historical usage and up to six months of forecast), while the API-side forecast model uses organization-scoped responses in `QueryForecastsResponse` that return forecast time series for requested resources. The feature is documented as requiring preview-capability context and Capacity Planner Viewer permissions for organization-scoped usage/forecast access.

## Evidence Summary

Export-data defines org-scoped CSV export of VM and Persistent Disk usage/forecast data, view-data confirms org-level viewing and usage/forecast semantics (including historical vs forecasted data), and the API reference defines organization-scoped forecast response objects.

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
- Re-rank rationale: It explicitly allows usage and forecast CSV export for organization-scoped resources, including compute-related resource categories.

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: It notes organization is a supported planning scope for usage data, yet does not provide details about exporting that data.

### QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: It shows organization-scoped forecast resource names, but provides no evidence for organization-level usage/export functionality.

