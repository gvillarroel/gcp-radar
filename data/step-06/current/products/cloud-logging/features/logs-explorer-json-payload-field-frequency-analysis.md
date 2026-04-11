---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.520Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer JSON payload field frequency analysis"
feature_slug: "logs-explorer-json-payload-field-frequency-analysis"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
keywords:
  - "logs"
  - "explorer"
  - "json"
  - "payload"
  - "field"
  - "frequency"
  - "analysis"
  - "can"
---

# Logs Explorer JSON payload field frequency analysis

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs Explorer can show the most frequently occurring fields and values in log JSON payloads.

## Extended Definition

Logs Explorer can show the most frequently occurring fields and values in log JSON payloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .
- Note that the following types of fields can't be added to the Fields pane: Fields related to time; for example, receiveTimestamp and protoPayload.startTime .
- Add fields to Fields pane You can add certain LogEntry key-value pairs to the Logs field pane from the log entries populated in the Query results pane.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- April 17, 2025 Feature In the Logs Explorer, you can now view the most frequently occurring fields and values in the JSON payload of your logs.
- April 26, 2022 Feature You can now do the following in the improved Logs Explorer: Use the new plain-text search field and filter menus to construct queries without using the query language Customize your date and time format preferences for building queries and to display dates and times in the UI.
- October 19, 2020 Feature In the Logs Explorer you can now download your logs in JSON and CSV to your computer, Google Drive, or view them in a new tab.
- Change You can now use the Log fields pane of the Logs Explorer to filter your Kubernetes Container logs by their service name.

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.
- For example, to retrieve and display the log entries with a resource type of global , run the following command: gcloud logging read "resource.type=global" The command returns a result similar to the following: --- insertId : jpj9zjf73t1mn jsonPayload : message : My second entry weather : partly cloudy logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:31.114507977Z' resource : labels : project id : myloggingproject type : global timestamp : '2018-11-01T18:39:31.114507977Z' --- insertId : vd4m1if7h7u1a logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:19.718100792Z' resource : labels : project id : myloggingproject type : global textPayload : A simple entry timestamp : '2018-11-01T18:39:19.718100792Z' For information about reading logs, see the gcloud logging read reference documentation.
- Query log entries in the Logs Explorer You can query log entries by using the query editor and, with structured logs, by the key and value.
- To read a list of log entries from Logging, do the following: Go to the API reference page for the entries.list API method: Go to entries.list API page Configure and run the API command: Replace PROJECT ID in the following text: "resourceNames": [ "projects/ PROJECT ID " ], "filter": "resource.type=global", "orderBy": "timestamp desc" Copy the updated text from the previous step, and paste it into the Request body field of APIs Explorer.

