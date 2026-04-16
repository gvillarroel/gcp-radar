---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.508Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "4-week query metric retention"
feature_slug: "4-week-query-metric-retention"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
keywords:
  - "week"
  - "query"
  - "metric"
  - "retention"
  - "insights"
  - "dashboard"
  - "retains"
  - "metrics"
---

# 4-week query metric retention

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The Query Insights dashboard retains query metrics for four weeks.

## Extended Definition

The Query Insights dashboard retains query metrics for four weeks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)

## Supporting Pages

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition, standard query insights metrics are available in system metrics in Cloud Monitoring to keep the functionalities of the standard query insights intact.
- Advanced query insights features load an extension that records query metrics and execution plans that are implemented using hooks.
- Limitations The metrics exposed by advanced query insights features aren't available using a Cloud Monitoring API.
- Metrics are expected to be available in advanced query insights features within 30 seconds of query completion.

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Query insights integrate with Cloud Monitoring , letting you create custom dashboards and alerts on query metrics or tags and receive notifications using email, SMS, Slack, PagerDuty, and more.
- Security Users who have access to the AlloyDB dashboard can access query insights metrics on the query insights dashboard.
- You view metrics for queries on the query insights dashboard.
- What's Next Improve query performance using query insights AlloyDB metrics Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- This tool complements other AlloyDB observability features like systems insights , query insights , and the Metrics Explorer , which provide real-time metrics about your instance.
- Using the performance snapshot report, you compare the metrics to a performance baseline to gain insights into workload performance metrics, which you can use to optimize or troubleshoot database performance.
- The output looks similar to the following: postgres=# select from perfsnap.g$snapshots; snap id snap time instance id node id snap description snap type is baseline ---------+-------------------------------+--------------+---------------------------------+-------------------+-----------+------------- 1 2023-11-13 22:13:43.159237+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Manual snapshot Manual f 2 2023-11-13 22:53:40.49565+00 perf-primary sab3-perf-primary-cab835ef-4cm8 Automatic snapshot Automatic f 3 2023-11-13 22:56:42.57094+00 perf-replica sab3-perf-replica-b9250422-tz4n Automatic snapshot Automatic f 4 2023-11-13 22:56:42.59476+00 perf-replica sab3-perf-replica-b9250422-63q3 Automatic snapshot Automatic f 5 2023-11-13 23:11:55.23157+00 perf-replica sab3-perf-replica-b9250422-tz4n Manual snapshot Manual f (5 rows) Note: To support basic metrics tracking, AlloyDB automatically takes a snapshot once a day.
- To create a snapshot that also contains SQL execution statistics, follow these steps: Create the pg stat statements extension in the postgres database. postgres=# CREATE EXTENSION pg stat statements; Now, when you take a snapshot, it automatically includes the SQL statistics from pg stat statements . postgres=# select perfsnap.snap(); snap ------ 2 (1 row) Note: The output of perfsnap.snap() is the same as when creating a snapshot of only system metrics.

