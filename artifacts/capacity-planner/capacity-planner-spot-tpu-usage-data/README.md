# Capacity Planner Spot TPU usage data

Product: Capacity Planner
Feature slug: `capacity-planner-spot-tpu-usage-data`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner supports viewing Spot and preemptible-spot usage data by enabling Spot mode (in the console via the Spot usage toggle or in the API by setting `isSpot=true`) on supported usage and forecast views. The product documentation indicates that Spot VM context includes attached resources, including TPUs, and that TPU usage/forecast/quota data is available on the TPU usage view (filtered by TPU type and location). Coverage is partial for the exact feature phrasing here because the cited pages do not explicitly label this as preview-only or provide a dedicated launch/feature-announcement date.

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

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
