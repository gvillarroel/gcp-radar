---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.650Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BI Engine dashboard metrics"
feature_slug: "bi-engine-dashboard-metrics"
latest_feature_date: "2022-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings"
keywords:
  - "bi"
  - "engine"
  - "dashboard"
  - "metrics"
  - "bigquery"
  - "dashboards"
  - "can"
  - "display"
---

# BI Engine dashboard metrics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery dashboards can display BI Engine metrics including Top Tables Cached Bytes, Query Fallback Count, and Query Execution Count.

## Extended Definition

BigQuery dashboards can display BI Engine metrics including Top Tables Cached Bytes, Query Fallback Count, and Query Execution Count.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references BigQuery connector for Confluent Cloud Kafka Connect BigQuery Connector Partner Advantage page Direct link Cube Dev Solution Cube Cloud Category ETL & Data Integration Description Cube Cloud is a universal semantic layer that helps data engineers and developers define consistent metrics and business logic upstream of every data app.
- Partner references Striim for Google Cloud Continuous data replication to BigQuery using Striim Partner Advantage page Direct link Supermetrics Solution Supermetrics for BigQuery Category ETL & Data Integration Description Supermetrics is the leading marketing data engine for effortless cross-channel data crunching and reporting.
- Partner references Deep Data Observability on BigQuery Connect Anomalo to BigQuery Partner Advantage page Direct link Costory Solution Costory Category Data Quality, Observability, & FinOps Description Costory unifies cloud billing, usage data, and engineering events with business metrics.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Monitor operational health across an organization The operational health dashboard displays key metrics for your organization and its reservations in all the locations where you have reservations.
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- You can use this dashboard to monitor the following metrics: Slot usage Shuffle usage Job concurrency Errors Job duration Bytes processed Total storage Note: The operational health dashboard doesn't monitor metrics for on-demand workloads.
- Resource utilization chart limitations The chart and table in the middle of the page display metrics that are relevant to the time period and granularity selected.

### Monitor listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SHARED DATASET USAGE WHERE shared resource type = 'VIEW' The output is similar to the following: +---------------------+----------------+----------+--------------------+-----------------------+--------------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ project id dataset id table id num rows processed total bytes processed shared resource id shared resource type referenced tables +---------------------+----------------+----------+--------------------+-----------------------+--------------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ myproject source dataset view1 6 38 view1 VIEW [{"project id":"myproject","dataset id":"source dataset","table id":"test table","processed bytes":"21"}, {"project id":"bq-dataexchange-exp","dataset id":"other dataset","table id":"other table","processed bytes":"17"}] +---------------------+----------------+----------+--------------------+-----------------------+--------------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Get usage metrics for shared table valued functions The following query displays the usage metrics for all of the shared table valued functions present in a project: SELECT project id , dataset id , table id , num rows processed , total bytes processed , shared resource id , shared resource type , referenced tables FROM myproject . region-us .
- SHARED DATASET USAGE WHERE dataset id = 'source dataset id' AND data exchange id = "projects/4/locations/us/dataExchanges/x1" Get usage metrics for shared views The following query displays the usage metrics for all of the shared views present in a project: SELECT project id , dataset id , table id , num rows processed , total bytes processed , shared resource id , shared resource type , referenced tables FROM myproject . region-us .
- The page displays the following usage metrics: Total Subscriptions : the number of current subscriptions on the selected listing.
- There are two methods to get the usage metrics for your shared data: Use BigQuery sharing .

