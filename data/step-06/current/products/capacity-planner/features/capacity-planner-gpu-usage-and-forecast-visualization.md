---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.771Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner GPU usage and forecast visualization"
feature_slug: "capacity-planner-gpu-usage-and-forecast-visualization"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse"
keywords:
  - "GPU consumption planning"
  - "GPU usage chart"
  - "GPU forecast view"
  - "forecasted GPU usage"
  - "actual GPU usage"
  - "GPU usage forecast"
  - "GPU usage view"
  - "Capacity Planner preview"
---

# Capacity Planner GPU usage and forecast visualization

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview displays actual and forecasted GPU usage to help plan and optimize GPU consumption.

## Extended Definition

Capacity Planner provides capacity planning data for compute resources (including GPUs) across project, folder, or organization scopes, including historical usage, forecasted usage, and quota availability, with support for trend analysis. In the usage-and-forecast view, it exposes a "Usage and forecast by machine types" table for instances and GPUs that shows historical and forecasted usage, and includes usage data/forecast workflows to compare prediction changes, inspect percentile trends, and evaluate forecast accuracy against actual historical usage. Capacity Planner is a Pre-GA preview feature, and forecast data is also exposed through the QueryForecasts API as forecast objects with predicted time-series values for resources.

## Evidence Summary

The overview page defines the scope and resource types (including GPUs) for Capacity Planner’s historical/forecasted usage and quota data, the view-data page details the GPU/instances machine-type usage-and-forecast table and analysis capabilities, and the API reference defines forecast response payloads returned as time-series forecast objects.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: STRONG
- Re-rank rationale: GPUs are explicitly listed as a supported resource for both usage and forecast data viewing.

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states Capacity Planner shows forecasted usage data for GPUs and is intended to help plan future GPU capacity and quota needs.

### QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- Source ID: `site-api-reference`
- Final score: 60
- Re-rank relevance: N/A

