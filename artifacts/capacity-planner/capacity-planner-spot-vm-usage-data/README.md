# Capacity Planner Spot VM usage data

Product: Capacity Planner
Feature slug: `capacity-planner-spot-vm-usage-data`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

In Capacity Planner, Spot VM usage data (including preemptible quota) is available for specific resource types—compute instances, GPUs, and TPUs—when Spot context is enabled. Google Cloud documentation describes two supported methods to access it: in the console by enabling the Spot usage toggle in the usage and forecast graphs, or programmatically by setting `isSpot=true` in the Capacity Planner API. The same documentation explicitly says forecast data for Spot VMs is not supported, so Spot coverage is for usage viewing in defined Spot paths rather than full forecast support.

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

- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
