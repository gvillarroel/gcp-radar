---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.574Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery history-based query optimization"
feature_slug: "bigquery-history-based-query-optimization"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "query optimizer"
  - "HBO"
  - "history-based query optimization"
  - "history-based optimization"
  - "query optimization preview"
  - "execution optimization"
  - "optimization analysis"
  - "query history"
---

# BigQuery history-based query optimization

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports preview enablement and analysis of history-based optimizations for query execution.

## Extended Definition

BigQuery defines a `query optimizer options` setting in the standard SQL DDL reference that can be configured as a default option, including a history-based option (shown as “history-based query optimizations”). The same option is documented as a STRING setting and is tied to query processor behavior via optimizer/runtime options (for example, `adaptive=on`), indicating it controls how queries are executed. The provided excerpts do not provide enough evidence to describe a preview workflow or detailed optimization analysis features.

## Evidence Summary

The referenced DDL page shows that BigQuery has configurable query optimizer options including history-based optimization, but it does not detail preview availability or analysis-specific controls.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.
- Example: region-us.default query optimizer options = 'adaptive=on' default cloud resource connection id STRING The default connection to use when creating tables and models (Preview).
- Example: region-us.default query optimizer options = 'adaptive=on' query runtime STRING Specifies whether the BigQuery query processor uses the advanced runtime .

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

