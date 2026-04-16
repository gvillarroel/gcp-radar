---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.449Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs field explorer"
feature_slug: "logs-field-explorer"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logs"
  - "field"
  - "explorer"
  - "panel"
  - "shows"
  - "aggregation"
  - "based"
  - "results"
---

# Logs field explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Logs field explorer panel shows aggregation-based results for project log fields to help refine queries.

## Extended Definition

The Logs field explorer panel shows aggregation-based results for project log fields to help refine queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Query results : For Compute Engine VM instance logs, the resource.labels field shows metadata with the corresponding resource name.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.

### Using the APIs Explorer \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following screenshot shows the panel as it appears for a method with only one parameter, name : The APIs Explorer is an excellent way to try out methods in the Cloud Logging API without having to write any code.
- For example, if you are listing log entries and only want to see activity logs, then you can filter by the logName , which must be URL-encoded. { "resourceNames": [...], "filter": "logName=\"projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity\"" } Too much data is returned To limit the number of results returned, in the pageSize parameter, enter a value, such as 2 .
- Home Documentation Observability Cloud Logging Reference Send feedback Using the APIs Explorer Stay organized with collections Save and categorize content based on your preferences.
- Invalid filter syntax You copy a multi-line expression and paste it into a field shown in APIs Explorer, but APIs Explorer displays an error message.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- This document describes how to retrieve and analyze logs when you use the Logs Explorer by writing queries in the query-editor field and by selecting from predefined filter options.
- For Logs Explorer queries, you must specify the loggingQuery field.

