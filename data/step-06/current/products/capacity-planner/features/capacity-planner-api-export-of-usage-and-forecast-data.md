---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.766Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner API export of usage and forecast data"
feature_slug: "capacity-planner-api-export-of-usage-and-forecast-data"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType"
keywords:
  - "export to Cloud Storage"
  - "Cloud Storage export"
  - "export to BigQuery"
  - "usage and forecast API export"
  - "BigQuery export"
  - "VM and GPU data export"
  - "export forecast data API"
  - "export usage data API"
---

# Capacity Planner API export of usage and forecast data

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner API preview enables exporting usage and forecast data for VMs, Persistent Disk volumes, and GPUs to Cloud Storage or BigQuery.

## Extended Definition

Capacity Planner API preview enables exporting usage and forecast data for VMs, Persistent Disk volumes, and GPUs to Cloud Storage or BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: The page explains how to view usage and forecast data but does not describe any API, export mechanism, or destinations such as Cloud Storage or BigQuery.

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers CSV export of usage and forecast data and only references another destination document for Cloud Storage or BigQuery, without describing API-based export behavior.

### ForecastType \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: It references forecast output types in the API, but it provides no details about export mechanisms, targets, or supported resources.

