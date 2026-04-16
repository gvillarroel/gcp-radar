---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.750Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Hyperdisk usage and forecast data"
feature_slug: "capacity-planner-hyperdisk-usage-and-forecast-data"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType"
keywords:
  - "actual and forecasted volume usage"
  - "Hyperdisk volume forecast"
  - "usage trends for volumes"
  - "Hyperdisk volume usage"
  - "Hyperdisk forecast data"
  - "Hyperdisk data view"
  - "Hyperdisk usage forecast"
  - "Hyperdisk usage data"
---

# Capacity Planner Hyperdisk usage and forecast data

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview adds support for viewing and forecasting usage data for Hyperdisk volumes.

## Extended Definition

In Capacity Planner, the usage-and-forecast data feature supports Google Cloud Hyperdisk and Persistent Disk volumes by showing their usage and forecast values for storage, IOPS, and throughput. It exposes this data on the Disk page, where users can view history, forecast, and quota for Hyperdisk/Persistent Disk volumes, and historical forecast snapshots are available for those volume types. The feature’s forecasting model is defined by Capacity Planner’s ForecastType, which describes producing future time-series values from historical time-series data using forecast methods such as STATISTICAL variants.

## Evidence Summary

The Capacity Planner usage/forecast page documents Hyperdisk volume coverage, access path, and the history/forecast/quota behavior for snapshots, while the ForecastType reference defines how forecast data is generated from historical time series and enumerates forecast method types.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states Hyperdisk volumes are included in supported resources for usage and forecast data in Capacity Planner.

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: N/A

### ForecastType \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)
- Source ID: `site-api-reference`
- Final score: 56
- Re-rank relevance: N/A

