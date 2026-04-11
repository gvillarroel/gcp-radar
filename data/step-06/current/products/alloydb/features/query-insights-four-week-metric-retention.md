---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.617Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Query Insights four-week metric retention"
feature_slug: "query-insights-four-week-metric-retention"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
keywords:
  - "four-week metric retention"
  - "30-day query metrics"
  - "retention window"
  - "retention period"
  - "4-week retention"
  - "query metrics history"
  - "query metrics retention"
  - "Query Insights metrics"
---

# Query Insights four-week metric retention

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

Query Insights now retains query metrics for four weeks in its dashboard.

## Extended Definition

In AlloyDB for PostgreSQL, Query Insights data is exposed through two paths: advanced query insights traces, which are stored in Cloud Trace with a 30-day retention period, and standard query insights metrics, which remain available in Cloud Monitoring’s system metrics and Metrics explorer UI. The provided evidence does not explicitly confirm that the Query Insights dashboard itself has a four-week metric retention policy; it only confirms trace retention and metric availability.

## Evidence Summary

The cited AlloyDB documentation page provides explicit retention detail for advanced query traces (30-day retention) and confirms where standard query insights metrics can be accessed, but does not directly state dashboard-level metric retention for four weeks.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)

## Supporting Pages

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition, standard query insights metrics are available in system metrics in Cloud Monitoring to keep the functionalities of the standard query insights intact.
- Traces from advanced query insights features are stored in Cloud Trace and have a 30-day retention period.
- However, you can still access the standard query insights metrics using the Metrics explorer UI .

