---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.763Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner machine type and TPU usage/forecast export"
feature_slug: "capacity-planner-machine-type-and-tpu-usage-forecast-export"
latest_feature_date: "2025-05-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
keywords:
  - "project scope export"
  - "organization scope export"
  - "folder scope export"
  - "machine type usage and forecast"
  - "machine type export"
  - "TPU forecast export"
  - "TPU usage and forecast"
  - "usage and forecast export"
---

# Capacity Planner machine type and TPU usage/forecast export

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview allows viewing and exporting usage and forecast data for machine types and TPUs across project, folder, or organization scopes.

## Extended Definition

Capacity Planner supports viewing and exporting usage and forecast data for compute resources, including machine-type views and TPU views (for example, "Usage and forecast by machine types" and "Usage and forecast by TPU type"). It supports exporting usage/forecast data from the Console to a local workstation as a CSV file, with machine-type exports available via filters such as machine family or GPU type. Export can be performed for a selected scope, including project, folder, or organization.

## Evidence Summary

The Capacity Planner usage/forecast page confirms machine-type and TPU usage-forecast views plus scope context, while the export page confirms CSV export to local workstation with project/folder/organization scope and machine-family/GPU-type filtering for machine-type exports; ForecastType is the related API enum reference.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions TPU usage and forecasting support, but does not mention machine types or any export capability.

### ForecastType \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: The page confirms Capacity Planner forecast semantics via the ForecastType enum, but it does not mention machine types, TPUs, or export capabilities.

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: The document includes TPUs in the exportable resource list and supports forecast data, but does not discuss machine types specifically.

