# Capacity Planner historical VM usage analytics

Product: Capacity Planner
Feature slug: `capacity-planner-historical-vm-usage-analytics`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner’s historical VM usage analytics feature exposes historical usage time-series for resources (including Compute Engine instances) as Capacity Planner usage histories. The documentation states that historical usage data is available for up to the past two years (with listed exceptions for some resource types), and that compute-instance usage and forecast data can be exported for this two-year historical range. In the API model, a historical usage response contains `UsageHistory` entries, each represented by time-series data points describing historical values.

## Lifecycle

- Latest feature date: 2023-09-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse))
- iam (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse))
- identity (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse))
- permission (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse))
- role (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse))

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
