---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.370Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Error group indicators in Logs Explorer"
feature_slug: "error-group-indicators-in-logs-explorer"
latest_feature_date: "2022-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
keywords:
  - "error"
  - "group"
  - "indicators"
  - "logs"
  - "explorer"
  - "marks"
  - "entries"
  - "belong"
---

# Error group indicators in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer marks entries that belong to error groups and links to related error details and actions.

## Extended Definition

Logs Explorer marks entries that belong to error groups and links to related error details and actions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)

## Supporting Pages

### "Quickstart: Write and query log entries with the gcloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud](https://docs.cloud.google.com/logging/docs/write-query-log-entries-gcloud)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The method returns a response similar to the following: { "entries": [ { "textPayload": "A simple entry", "insertId": "vd4m1if7h7u1a", "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:19.718100792Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:19.718100792Z" }, { "insertId": "jpj9zjf73t1mn", "jsonPayload": { "message": "My second entry", "weather": "partly cloudy" }, "resource": { "type": "global", "labels": { "project id": "myloggingproject" } }, "timestamp": "2018-11-01T18:39:31.114507977Z", "logName": "projects/myloggingproject/logs/my-test-log", "receiveTimestamp": "2018-11-01T18:39:31.114507977Z" } ] } View log entries in the Logs Explorer To view log entries in the Google Cloud console, you can use the Logs Explorer.
- When APIs Explorer can't complete your command, or requires additional authorization, it displays a message or error code: 200 response code and no entries : If the message nextPageToken is displayed, then it indicates that APIs Explorer didn't have time to complete the search.
- For example, to display all log entries that contain the text simple , do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- To view the log entries that you wrote using the Logs Explorer, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .
- If resources in multiple projects or regions are searched for log entries, then the Observability Analytics might show different log entries than the Logs Explorer page.
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The log entries must have severity of at least ERROR , which is equivalent to selecting ERROR in the query interface's severity menu. logName = "projects/[PROJECT ID]/logs/cloudaudit.googleapis.com%2Factivity" Finds all the Admin Activity audit log entries in the project [PROJECT ID] .
- Examples querying logs using regular expressions Query type Example Standard query sourceLocation.file = "foo" Query with case-insensitive search labels.subnetwork name = "(?i)foo" Query containing quotation marks jsonPayload.message = "field1=\"bar. \"" Query using a boolean or labels.pod name = "(foo bar)" Query using anchors logName = "/my%2Flog$" Query not matching a pattern labels.pod name ! "foo" Query using boolean operator labels.env = ("^prod. server" OR "^staging. server") Query that begins with a value logName = "^foo" Query that ends with a value logName = "foo$" Note: For a detailed explanation of the RE2 syntax, see the RE2 wiki page .
- To query for logs at a particular resource level, use the following syntax: source ( RESOURCE TYPE / RESOURCE ID ) Resource Example query Organization source(organizations/ ORGANIZATION ID ) Folder source(folders/ FOLDER ID ) Google Cloud projects source(projects/ PROJECT ID ) Note: The source function is useful when creating a custom log view on a log bucket that contains log entries from many Google Cloud projects, folders, or organizations. sample The sample function selects a fraction of the total number of log entries: sample([FIELD], [FRACTION]) [FIELD] is the name of a field in the log entry, such as logName or jsonPayload.a field .
- Disjunctive restriction: resource.type = "k8s cluster" OR resource.type = "gce instance" Alternatively: resource.type = ("k8s cluster" OR "gce instance") Complex conjunctive/disjunctive expression: resource.type = "k8s cluster" AND (severity = "ERROR" OR "error") The following is an example of a query: resource.type = "gce instance" AND severity >= "ERROR" AND NOT textPayload:robot This query matches log entries from Compute Engine that have severity values of at least ERROR and whose textPayload field doesn't contain the string robot anywhere inside it.

