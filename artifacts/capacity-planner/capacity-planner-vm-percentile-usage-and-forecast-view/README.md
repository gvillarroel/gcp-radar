# Capacity Planner VM percentile usage and forecast view

Product: Capacity Planner
Feature slug: `capacity-planner-vm-percentile-usage-and-forecast-view`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

In Capacity Planner, the Virtual Machines forecast/usage view presents historical and forecasted VM usage data for a selected machine family or type and location, grouped by machine type/zone and filtered by VM-related dimensions. The view is calculated for a chosen percentile (including the 50th and 75th percentiles), and VM forecast values can be requested for a selected date range or historical forecast snapshot using that selected percentile.

## Lifecycle

- Latest feature date: 2023-09-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
