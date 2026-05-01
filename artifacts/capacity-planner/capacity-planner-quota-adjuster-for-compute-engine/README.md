# Capacity Planner quota adjuster for Compute Engine

Product: Capacity Planner
Feature slug: `capacity-planner-quota-adjuster-for-compute-engine`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Capacity Planner quota adjuster is a project-level feature that can be enabled or disabled to manage Compute Engine quota operations within Capacity Planner. It requires permissions to view forecasted and historical Compute Engine usage, summarize that usage, access project quota information, and get or update quota-adjuster settings in Cloud Quotas, and Google states it can only be enabled when the project has sufficient usage data. The provided excerpts do not explicitly confirm the exact automation trigger conditions (for example, “near quota limit”) or exact request-submission mechanics.

## Lifecycle

- Latest feature date: 2023-12-15
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

- [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)
