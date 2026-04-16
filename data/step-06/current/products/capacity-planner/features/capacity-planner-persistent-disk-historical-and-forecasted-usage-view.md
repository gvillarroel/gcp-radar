---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.776Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner persistent disk historical and forecasted usage view"
feature_slug: "capacity-planner-persistent-disk-historical-and-forecasted-usage-view"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
keywords:
  - "historical and forecasted PD usage"
  - "PD usage history"
  - "persistent disk historical usage"
  - "PD usage view"
  - "Persistent Disk usage forecast"
  - "persistent disk forecast"
  - "Capacity Planner preview"
---

# Capacity Planner persistent disk historical and forecasted usage view

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview allows viewing historical and forecasted usage for persistent disks.

## Extended Definition

Capacity Planner provides a preview feature that lets users view usage and forecast data for resources in a Google Cloud project, folder, or organization, including historical and forecasted usage for Persistent Disk volumes. The Persistent Disk usage view covers storage, IOPS, and throughput and is documented as useful for analyzing usage trends and checking historical forecast accuracy via historical forecast snapshots. Access to this usage-and-forecast data is controlled by IAM permissions (for example, the Capacity Planner Usage Viewer role).

## Evidence Summary

The Capacity Planner usage/forecast pages define which resource metrics are shown (including Persistent Disk historical and forecasted usage), how they can be used, and that Capacity Planner is in Preview with IAM-gated access.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: STRONG
- Re-rank rationale: Persistent Disk data is explicitly included and the page describes viewing historical forecasts and past prediction accuracy versus historical usage.

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: STRONG
- Re-rank rationale: It directly lists Persistent Disk and Hyperdisk volumes as resources with historical and forecasted usage in Capacity Planner.

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: N/A

