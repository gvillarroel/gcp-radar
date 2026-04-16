---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.782Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner VM percentile usage and forecast view"
feature_slug: "capacity-planner-vm-percentile-usage-and-forecast-view"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse"
keywords:
  - "p50 and p75 views"
  - "50th percentile VM usage"
  - "75th percentile VM usage"
  - "percentile forecast view"
  - "percentile usage view"
  - "VM usage percentiles"
  - "p50 forecast"
  - "p75 forecast"
---

# Capacity Planner VM percentile usage and forecast view

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner provides the 50th and 75th percentile usage and forecast views for virtual machines.

## Extended Definition

In Capacity Planner, the Virtual Machines forecast/usage view presents historical and forecasted VM usage data for a selected machine family or type and location, grouped by machine type/zone and filtered by VM-related dimensions. The view is calculated for a chosen percentile (including the 50th and 75th percentiles), and VM forecast values can be requested for a selected date range or historical forecast snapshot using that selected percentile.

## Evidence Summary

The usage/forecast and overview pages define percentile-based Capacity Planner metrics (including P50/P75) and document that VM machine-type forecast views use a selected percentile, while the API reference confirms forecast data can be queried through the Forecasts response surface.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: The page notes analyzing usage trends across percentiles and comparing forecasts, which supports percentile-based usage/forecast views, though not explicitly VM-only.

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: STRONG
- Re-rank rationale: The page says usage data is shown as daily percentile usage for compute instances and includes forecasted usage, matching VM percentile usage and forecast capabilities.

### QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

