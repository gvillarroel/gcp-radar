# Capacity Planner Compute Engine quota-to-usage visibility

Product: Capacity Planner
Feature slug: `capacity-planner-compute-engine-quota-to-usage-visibility`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner’s preview feature provides visibility into compute resource usage and quota together by showing usage, forecast, and quota in its Usage & Forecast views for resources like Virtual Machines, Disks, GPUs, and TPUs. It supports capacity planning at project, folder, or organization scope by surfacing historical and forecast data, and it links quota visibility to quota-adjustment workflows (such as enabling the quota adjuster) when sufficient data exists. Google Cloud labels Capacity Planner as a Preview (Pre-GA) offering.

## Lifecycle

- Latest feature date: 2023-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/quotas](https://docs.cloud.google.com/capacity-planner/docs/quotas)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
