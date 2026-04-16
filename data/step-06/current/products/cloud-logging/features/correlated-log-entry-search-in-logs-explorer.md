---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.372Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Correlated log entry search in Logs Explorer"
feature_slug: "correlated-log-entry-search-in-logs-explorer"
latest_feature_date: "2022-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-python"
keywords:
  - "correlated"
  - "log"
  - "entry"
  - "search"
  - "logs"
  - "explorer"
  - "can"
  - "entries"
---

# Correlated log entry search in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer can search correlated log entries.

## Extended Definition

Logs Explorer can search correlated log entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)

## Supporting Pages

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- View your log entry: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- The Logs Explorer is configured to display log entries that originate in your project.
- Search for logs in the Logs Explorer.

### "Quickstart: Write and query log entries using a Python script \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also view the log entries you wrote by using the Logs Explorer.
- The contents are similar to: { "insertId" : "yf1cshfoivz48" , "logName" : "projects/loggingproject-222616/logs/my-log" , "receiveTimestamp" : "2018-11-15T23:06:14.738729911Z" , "resource" :{ "labels" :{ "project id" : "loggingproject-222616" }, "type" : "global" }, "severity" : "ERROR" , "textPayload" : "Goodbye, world!" , "timestamp" : "2018-11-15T23:06:14.738729911Z" } Because the severity level of ERROR is greater than the severity level of INFO , the log entry containing the string '"Goodbye, world!"' is exported to the sink destination.
- Validate sink To validate that your sink and destination are properly configured, do the following: Write new log entries to the log my-log : python snippets . py my - log write View your Cloud Storage bucket's contents: In the Google Cloud console, go to the Buckets page: Go to Buckets If you use the search bar to find this page, then select the result whose subheading is Cloud Storage .
- When the write option is specified on the command line, the script writes the following log entries: An entry with unstructured data and no specified severity level.

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.
- For example, to display all log entries that contain the text simple , do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- To view the log entries that you wrote using the Logs Explorer, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, to retrieve and display the log entries with a resource type of global , run the following command: gcloud logging read "resource.type=global" The command returns a result similar to the following: --- insertId : jpj9zjf73t1mn jsonPayload : message : My second entry weather : partly cloudy logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:31.114507977Z' resource : labels : project id : myloggingproject type : global timestamp : '2018-11-01T18:39:31.114507977Z' --- insertId : vd4m1if7h7u1a logName : projects / myloggingproject / logs / my - test - log receiveTimestamp : '2018-11-01T18:39:19.718100792Z' resource : labels : project id : myloggingproject type : global textPayload : A simple entry timestamp : '2018-11-01T18:39:19.718100792Z' For information about reading logs, see the gcloud logging read reference documentation.

