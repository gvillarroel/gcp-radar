---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.996Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace analysis in Log Analytics"
feature_slug: "trace-analysis-in-log-analytics"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/sql-in-alerting"
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
  - "https://docs.cloud.google.com/trace/docs/analytics"
keywords:
  - "trace"
  - "analysis"
  - "in"
  - "log"
  - "analytics"
  - "the"
  - "page"
  - "can"
---

# Trace analysis in Log Analytics

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

The Log Analytics page can query and analyze trace data with SQL, including joins between trace and log data.

## Extended Definition

The Log Analytics page can query and analyze trace data with SQL, including joins between trace and log data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/sql-in-alerting](https://docs.cloud.google.com/trace/docs/sql-in-alerting)
- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following screenshot illustrates how trace data is shown: To run queries that perform an aggregate analysis of your spans, use the Observability Analytics page or BigQuery.
- View aggregated trace data To view the aggregated information about your trace data, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- Explore a trace This section provides information about how you can explore a span in the context of its trace: Open and configure the Trace Explorer page.
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .

### "Monitor your SQL query results with an alerting policy \_|\_ Cloud Trace\

- URL: [https://docs.cloud.google.com/trace/docs/sql-in-alerting](https://docs.cloud.google.com/trace/docs/sql-in-alerting)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a SQL-based alerting policy To create a SQL-based alerting policy, do the following: Google Cloud console In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- On the Observability Analytics page, in the query editor, enter a SQL query that queries your trace data.
- Before you create a SQL-based alerting policy, complete the following steps: To get the permissions that you need to query trace data and create SQL-based alerting policies, ask your administrator to grant you the following IAM roles on your project: Query trace data: Cloud Trace User ( roles/cloudtrace.user ) Create SQL-based alerting policies: Monitoring Editor ( roles/monitoring.editor ) Logging SqlAlertWriter ( roles/logging.sqlAlertWriter ) Verify that the Monitoring Service Account exists and that it has the following roles: Monitoring Service Agent ( roles/monitoring.notificationServiceAgent ) on your project.
- There are a few different approaches that you can use to get notified when content or patterns appear in your trace data: To monitor the number of Cloud Trace spans ingested per month, your quota usage, and your rate of span ingestion, create alerting policies in Cloud Monitoring.

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use BigQuery Studio To open BigQuery from the Observability Analytics page and then query your trace data, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- Use BigQuery engine To run a query on the BigQuery engine when using the Observability Analytics page, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- Queries that are run on the BigQuery engine can query observability views, views on log buckets, and analytics views.
- The default query engine can only query observability views, views on log buckets, and analytics views.

### Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API To get the permissions that you need to load the Observability Analytics page, write, run, and save private queries on your trace data, ask your administrator to grant you the following IAM roles: Observability View Accessor ( roles/observability.viewAccessor ) on the observability views that you want to query.
- Enter and run a custom query To enter a SQL query, then do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- Load, edit, and run the system-defined query In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- To identify the schema, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .

