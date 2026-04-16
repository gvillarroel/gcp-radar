---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.747Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Hyperdisk and Persistent Disk IOPS and throughput forecasts"
feature_slug: "capacity-planner-hyperdisk-and-persistent-disk-iops-and-throughput-forecasts"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse"
keywords:
  - "IOPS and throughput forecasting"
  - "storage performance planning"
  - "Persistent Disk throughput forecast"
  - "Persistent Disk IOPS forecast"
  - "Hyperdisk IOPS forecast"
  - "usage and forecast metrics"
  - "throughput forecast"
  - "IOPS forecast"
---

# Capacity Planner Hyperdisk and Persistent Disk IOPS and throughput forecasts

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner preview adds usage and forecast support for Hyperdisk and Persistent Disk IOPS and throughput metrics.

## Extended Definition

Capacity Planner (a Pre-GA/Preview offering) supports viewing usage and forecast data for Google Cloud Hyperdisk and Persistent Disk volumes by Storage, IOPS, and Throughput metrics, including when those volumes are attached or not attached to instances. The feature is also exposed through the Capacity Planner API: QueryForecastsResponse returns a `forecasts` list, where each Forecast contains a `timeSeries` of predicted resource values plus metadata such as `forecastType`, `bounds`, `predictionInterval`, and `aggregationMethod`.

## Evidence Summary

The usage/forecast guide identifies Hyperdisk and Persistent Disk IOPS/Throughput forecast coverage, while the reference page defines the API response structure for returned forecast time-series data.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

### QueryForecastsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: The page defines the generic forecast response schema, which is related to forecasting but does not mention Hyperdisk or IOPS/throughput metrics.

### "Resource attributes for IAM Conditions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: N/A

