# Capacity Planner machine type and TPU usage/forecast export

Product: Capacity Planner
Feature slug: `capacity-planner-machine-type-and-tpu-usage-forecast-export`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner supports viewing and exporting usage and forecast data for compute resources, including machine-type views and TPU views (for example, "Usage and forecast by machine types" and "Usage and forecast by TPU type"). It supports exporting usage/forecast data from the Console to a local workstation as a CSV file, with machine-type exports available via filters such as machine family or GPU type. Export can be performed for a selected scope, including project, folder, or organization.

## Lifecycle

- Latest feature date: 2025-05-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data))
- allow (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data))
- iam (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data))
- identity (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType), [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data))

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
