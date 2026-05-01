# Capacity Planner GPU usage and forecast visualization

Product: Capacity Planner
Feature slug: `capacity-planner-gpu-usage-and-forecast-visualization`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner provides capacity planning data for compute resources (including GPUs) across project, folder, or organization scopes, including historical usage, forecasted usage, and quota availability, with support for trend analysis. In the usage-and-forecast view, it exposes a "Usage and forecast by machine types" table for instances and GPUs that shows historical and forecasted usage, and includes usage data/forecast workflows to compare prediction changes, inspect percentile trends, and evaluate forecast accuracy against actual historical usage. Capacity Planner is a Pre-GA preview feature, and forecast data is also exposed through the QueryForecasts API as forecast objects with predicted time-series values for resources.

## Lifecycle

- Latest feature date: 2024-07-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
