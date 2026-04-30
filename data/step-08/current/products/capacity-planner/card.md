# Capacity Planner

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-30T16:03:14.472Z`
Product status: `PASS`

## Summary

- Feature cards: 23
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 23 unknown

## Service Card

- Service card ID: `capacity-planner:service`
- Latest feature date: 2025-10-03
- Official source links: 11
- Security capabilities: 8

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Capacity Planner Hyperdisk and Persistent Disk IOPS and throughput forecasts | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner Hyperdisk usage and forecast data | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner Spot TPU usage data | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner Spot VM usage data | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/export-data)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner REST API reference documentation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse) |
| Capacity Planner capacity requests | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method) |
| Capacity Planner machine type and TPU usage/forecast export | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/export-data)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner single-machine-type future reservation requests in Cloud Console | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner reservation utilization history view and export | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner API export of usage and forecast data | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/export-data)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/ForecastType)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner reservation availability view | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/overview)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner folder-level usage and forecast export | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/export-data)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner gcloud command generation for future reservation requests | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method) |
| Capacity Planner GPU usage and forecast visualization | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/overview)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner organization-level gcloud command generation for future reservation requests | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner organization-level usage and forecast export | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/export-data)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner Compute Engine quota-to-usage visibility | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/quotas)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner persistent disk historical and forecasted usage view | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/overview)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner quota adjuster for Compute Engine | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster) |
| Capacity Planner future reservation request command generation | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner historical VM usage analytics | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/export-data)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryUsageHistoriesResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
| Capacity Planner machine-family usage and forecast view | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/overview) |
| Capacity Planner VM percentile usage and forecast view | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/capacity-planner/docs/overview)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryForecastsResponse)<br>[source](https://docs.cloud.google.com/capacity-planner/docs/view-data) |
