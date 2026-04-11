---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.475Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery history-based optimization controls"
feature_slug: "bigquery-history-based-optimization-controls"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "disable history-based optimization"
  - "HBO controls"
  - "analyze history-based optimization"
  - "enable history-based optimization"
  - "HBO"
  - "history-based optimization"
  - "query performance controls"
  - "optimization controls"
---

# BigQuery history-based optimization controls

Product: BigQuery
Coverage: NONE

## Step 02 Summary

BigQuery now supports enabling, disabling, and analyzing history-based optimizations for query performance.

## Extended Definition

The provided official documentation excerpts do not describe BigQuery history-based optimization (HBO) controls. The cited pages only cover operational health/monitoring dashboards, incidents, query metrics, and quota or API usage diagnostics, so there is no evidence here to substantiate enabling, disabling, or analyzing HBO for query performance.

## Evidence Summary

These pages document BigQuery operational dashboards and quota troubleshooting, but do not mention HBO, optimization controls, or history-based optimization analysis.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can use this dashboard to monitor the following metrics: Slot usage Shuffle usage Job concurrency Errors Job duration Bytes processed Total storage Note: The operational health dashboard doesn't monitor metrics for on-demand workloads.
- Monitor operational health for a single project The project operational health dashboard is the default view you get if you don't have access to the entire organization, or your project doesn't own any reservation.
- This view can help project analysts monitor system health for their projects, much like the operational health dashboard at the organizational level, but it shows only project-level data in its charts and filters.
- Monitor operational health across an organization The operational health dashboard displays key metrics for your organization and its reservations in all the locations where you have reservations.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Dashboard displays information about recent errors, and you can use Logs-based metrics to count the log entries that match a given filter.
- Use this dashboard to view information about BigQuery incidents, datasets, tables, projects, query times, and slot utilization.
- The Cloud Monitoring dashboard Cloud Monitoring provides a dashboard for monitoring BigQuery.
- For more information, see View the Monitoring dashboard .

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- If the preceding suggestions don't work, you can request a quota increase from Google Cloud console API dashboard by doing the following: Go to the Google Cloud console API dashboard .
- If you have encountered this error while using a business intelligence (BI) tool to create dashboards that query data in BigQuery, then we recommend that you use BigQuery BI Engine .
- For instructions on how to view the detailed usage information of an API, see Using the API Dashboard .
- In the dashboard, filter for Quota: Tabledata list bytes per minute (default quota) .

