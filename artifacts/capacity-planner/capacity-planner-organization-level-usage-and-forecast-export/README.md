# Capacity Planner organization-level usage and forecast export

Product: Capacity Planner
Feature slug: `capacity-planner-organization-level-usage-and-forecast-export`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

In Capacity Planner Preview, users can view and export usage/forecast data for Compute Engine instances and Persistent Disk volumes at the organization level (as well as project/folder levels) through the Google Cloud console. The export flow is CSV-based and supports historical usage data and forecast data windows (including up to two years of historical usage and up to six months of forecast), while the API-side forecast model uses organization-scoped responses in `QueryForecastsResponse` that return forecast time series for requested resources. The feature is documented as requiring preview-capability context and Capacity Planner Viewer permissions for organization-scoped usage/forecast access.

## Lifecycle

- Latest feature date: 2024-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
