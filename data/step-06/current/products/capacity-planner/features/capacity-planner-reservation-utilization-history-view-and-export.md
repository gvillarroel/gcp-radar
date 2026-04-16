---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.765Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner reservation utilization history view and export"
feature_slug: "capacity-planner-reservation-utilization-history-view-and-export"
latest_feature_date: "2024-11-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "GPU reservation utilization history"
  - "VM reservation utilization history"
  - "reservation utilization history"
  - "reservation utilization report"
  - "on-demand reservation utilization"
  - "utilization history"
  - "reservation utilization export"
  - "future reservation utilization"
---

# Capacity Planner reservation utilization history view and export

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview provides viewing and export of historical utilization for on-demand and future reservations for VMs and GPUs.

## Extended Definition

Capacity Planner reservation utilization history view and export is a preview capability announced on November 15, 2024 that lets users view and export historical utilization for on-demand and future reservation requests (VM and GPU-related) within a project, folder, or organization. In Capacity Planner usage/forecast guidance, reservation visibility includes current on-demand reservations as well as past and current future reservation requests, which supports planning against historical and forecast context.

## Evidence Summary

The release notes provide the dated feature announcement and view/export statement, while the usage-and-forecast documentation details reservation data coverage and reservation types shown for planning.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

### QueryReservationsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: It documents time-series fields such as `timeSeries` and `usedReservationValues`, which are directly relevant to historical utilization data, though it does not describe UI export behavior.

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: N/A

