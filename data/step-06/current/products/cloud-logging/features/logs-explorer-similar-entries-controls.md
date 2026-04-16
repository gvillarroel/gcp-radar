---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.367Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer similar entries controls"
feature_slug: "logs-explorer-similar-entries-controls"
latest_feature_date: "2022-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
keywords:
  - "logs"
  - "explorer"
  - "similar"
  - "entries"
  - "controls"
  - "can"
  - "show"
  - "hide"
---

# Logs Explorer similar entries controls

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer can show or hide entries similar to a selected log entry.

## Extended Definition

Logs Explorer can show or hide entries similar to a selected log entry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- If resources in multiple projects or regions are searched for log entries, then the Observability Analytics might show different log entries than the Logs Explorer page.
- The Logs Explorer doesn't show log entries that have timestamps in the future until the current time has "caught up" with them.
- The query updates with a query that shows or hides similar entries, and the Query results reload with new results.

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also view the log entries you wrote by using the Logs Explorer.
- The contents are similar to: { "insertId" : "yf1cshfoivz48" , "logName" : "projects/loggingproject-222616/logs/my-log" , "receiveTimestamp" : "2018-11-15T23:06:14.738729911Z" , "resource" :{ "labels" :{ "project id" : "loggingproject-222616" }, "type" : "global" }, "severity" : "ERROR" , "textPayload" : "Goodbye, world!" , "timestamp" : "2018-11-15T23:06:14.738729911Z" } Because the severity level of ERROR is greater than the severity level of INFO , the log entry containing the string '"Goodbye, world!"' is exported to the sink destination.
- After your bucket has received data, the detailed view shows a result similar to: The data in each folder is organized in a series of folders labeled with the top-level folder consisting of a log name, and then successively, the year, month, and day.
- Write and query log entries using a Python script This quickstart introduces you to some of the capabilities of Cloud Logging and shows you how to do the following: Write log entries using a Python script.

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Logs Explorer refreshes to show log entries from your log bucket.
- View log entries in the Logs Explorer page To view the log entries in your log bucket, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Lastly, you query and view your log entries from the Logs Explorer page.
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.

