---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.476Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery operational health dashboard"
feature_slug: "bigquery-operational-health-dashboard"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "operational health dashboard"
  - "real-time operational metrics"
  - "BigQuery health dashboard"
  - "shuffle usage metrics"
  - "total storage metric"
  - "operations dashboard"
  - "errors metric"
  - "slot usage metrics"
---

# BigQuery operational health dashboard

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

Provides an operational health dashboard with real-time metrics for slot usage, shuffle usage, errors, and total storage.

## Extended Definition

The BigQuery operational health dashboard is a monitoring view that surfaces key BigQuery usage and system metrics, including slot usage, shuffle usage, job concurrency, errors, job duration, bytes processed, and total storage. It is available as a project-level dashboard by default when users do not have organization-wide visibility, and as an organizational dashboard for org-level reservation views. The documented metric set does not include on-demand workload metrics.

## Evidence Summary

The page documents which operational health metrics are shown in BigQuery and explains the separate project and organization dashboard scopes plus the explicit exclusion of on-demand workloads.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- You can use this dashboard to monitor the following metrics: Slot usage Shuffle usage Job concurrency Errors Job duration Bytes processed Total storage Note: The operational health dashboard doesn't monitor metrics for on-demand workloads.
- Monitor operational health for a single project The project operational health dashboard is the default view you get if you don't have access to the entire organization, or your project doesn't own any reservation.
- This view can help project analysts monitor system health for their projects, much like the operational health dashboard at the organizational level, but it shows only project-level data in its charts and filters.
- Monitor operational health across an organization The operational health dashboard displays key metrics for your organization and its reservations in all the locations where you have reservations.

