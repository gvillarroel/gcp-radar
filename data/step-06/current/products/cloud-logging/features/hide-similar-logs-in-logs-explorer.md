---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.380Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Hide similar logs in Logs Explorer"
feature_slug: "hide-similar-logs-in-logs-explorer"
latest_feature_date: "2022-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api"
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
keywords:
  - "hide"
  - "similar"
  - "logs"
  - "explorer"
  - "can"
  - "large"
  - "sets"
  - "log"
---

# Hide similar logs in Logs Explorer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer can hide large sets of similar log entries from query results.

## Extended Definition

Logs Explorer can hide large sets of similar log entries from query results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- When you hide similar logs, no information is saved outside of the Logs Explorer session.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- There are two ways to hide similar log entries: Hide large amounts of automatically grouped log entries.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- View your log entry: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, when you to the Logs Explorer page and use the Refine scope selector to list log views, region information is also displayed.
- For information on using the Logs Explorer, refer to View logs by using the Logs Explorer .

### Using the APIs Explorer \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you are listing log entries and only want to see activity logs, then you can filter by the logName , which must be URL-encoded. { "resourceNames": [...], "filter": "logName=\"projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity\"" } Too much data is returned To limit the number of results returned, in the pageSize parameter, enter a value, such as 2 .
- The following screenshot shows the panel as it appears for a method with only one parameter, name : The APIs Explorer is an excellent way to try out methods in the Cloud Logging API without having to write any code.
- Home Documentation Observability Cloud Logging Reference Send feedback Using the APIs Explorer Stay organized with collections Save and categorize content based on your preferences.
- Invalid filter syntax You copy a multi-line expression and paste it into a field shown in APIs Explorer, but APIs Explorer displays an error message.

