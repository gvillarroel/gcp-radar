# Capacity Planner Hyperdisk usage and forecast data

Product: Capacity Planner
Feature slug: `capacity-planner-hyperdisk-usage-and-forecast-data`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

In Capacity Planner, the usage-and-forecast data feature supports Google Cloud Hyperdisk and Persistent Disk volumes by showing their usage and forecast values for storage, IOPS, and throughput. It exposes this data on the Disk page, where users can view history, forecast, and quota for Hyperdisk/Persistent Disk volumes, and historical forecast snapshots are available for those volume types. The feature’s forecasting model is defined by Capacity Planner’s ForecastType, which describes producing future time-series values from historical time-series data using forecast methods such as STATISTICAL variants.

## Lifecycle

- Latest feature date: 2025-10-03
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

- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
