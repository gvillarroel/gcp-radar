---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.294Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer query cancellation"
feature_slug: "logs-explorer-query-cancellation"
latest_feature_date: "2025-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logs"
  - "explorer"
  - "query"
  - "cancellation"
  - "lets"
  - "users"
  - "stop"
  - "running"
---

# Logs Explorer query cancellation

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer lets users stop a running query with a Stop query control.

## Extended Definition

Logs Explorer lets users stop a running query with a Stop query control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- The copied URL has the corresponding absolute time range represented by the time range of your query; for example, 7:49:37 PM - 8:49:37 PM . settings Preferences : Adjust the view of the Logs Explorer page, and customize the format of your query results.

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Query log entries in the Logs Explorer You can query log entries by using the query editor and, with structured logs, by the key and value.
- View and query log entries by using the Logs Explorer.
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.
- For example, to display all log entries that contain the text simple , do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- This document describes how to retrieve and analyze logs when you use the Logs Explorer by writing queries in the query-editor field and by selecting from predefined filter options.
- The Logs Explorer features a Query library , where you can access your saved queries.

