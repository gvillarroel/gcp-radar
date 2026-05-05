# Capacity Planner persistent disk historical and forecasted usage view

Product: Capacity Planner
Feature slug: `capacity-planner-persistent-disk-historical-and-forecasted-usage-view`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Capacity Planner provides a preview feature that lets users view usage and forecast data for resources in a Google Cloud project, folder, or organization, including historical and forecasted usage for Persistent Disk volumes. The Persistent Disk usage view covers storage, IOPS, and throughput and is documented as useful for analyzing usage trends and checking historical forecast accuracy via historical forecast snapshots. Access to this usage-and-forecast data is controlled by IAM permissions (for example, the Capacity Planner Usage Viewer role).

## Lifecycle

- Latest feature date: 2023-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview))
- role (evidence: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data), [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
