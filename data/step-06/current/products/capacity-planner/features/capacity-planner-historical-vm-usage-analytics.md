---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.779Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner historical VM usage analytics"
feature_slug: "capacity-planner-historical-vm-usage-analytics"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse"
keywords:
  - "two-year VM history"
  - "up to two years"
  - "2-year usage history"
  - "VM usage timeline"
  - "VM historical view"
  - "historical VM usage"
  - "Capacity Planner preview"
---

# Capacity Planner historical VM usage analytics

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner exposes historical usage data for virtual machines for up to two years.

## Extended Definition

Capacity Planner’s historical VM usage analytics feature exposes historical usage time-series for resources (including Compute Engine instances) as Capacity Planner usage histories. The documentation states that historical usage data is available for up to the past two years (with listed exceptions for some resource types), and that compute-instance usage and forecast data can be exported for this two-year historical range. In the API model, a historical usage response contains `UsageHistory` entries, each represented by time-series data points describing historical values.

## Evidence Summary

The usage page defines two-year historical usage availability and limits, the export page confirms compute-instance historical (two-year) export scope, and the API reference defines historical usage data as resource time-series values.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

### QueryUsageHistoriesResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: The response object describes returned historical usage time-series data, which is useful context for historical usage analytics but does not itself document VM-specific scope or retention period details.

