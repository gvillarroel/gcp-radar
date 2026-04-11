---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.575Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs-based metrics low-latency updates"
feature_slug: "logs-based-metrics-low-latency-updates"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "logs"
  - "based"
  - "metrics"
  - "low"
  - "latency"
  - "updates"
  - "was"
  - "reduced"
---

# Logs-based metrics low-latency updates

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs-based metrics latency was reduced from about five minutes to about one minute.

## Extended Definition

Logs-based metrics latency was reduced from about five minutes to about one minute.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Data types for log-based metrics Log-based metrics can extract data from logs to create metrics of the following types: Counter: these metrics count the number of log entries that match a specified filter within a specific period.
- For more information about metrics scopes, including multi-project metrics scopes, and about scoping projects, see the following: Metrics scopes View metrics for multiple projects Limitations You can't create log-based metrics that count the number of log entries that contain an error group.
- For each stream, the backend system for log-based metrics uses the following rules to determine what value to write to the time series stored by Monitoring: When the aggregated count for an interval is non-zero, that value is written to the time series.
- In Cloud Monitoring, log-based metrics use the following naming patterns: System: logging.googleapis.com/ SYSTEM METRIC NAME User-defined: logging.googleapis.com/user/ USER METRIC NAME Note that user-defined log-based metrics include the string user .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- For example, if a log entry similar to the following is displayed as a result of your query, then the service menu includes the service named myservice : { ... labels: { compute.googleapis.com/resource name: "mycluster1" k8s-pod/app: "myservice" k8s-pod/pod-template-hash: "5ffcd94fdd" } logName: "projects/my-project/logs/stdout" resource: { labels: {6} type: "k8s container" } ... } You have log data with labels for an App Hub service or workload.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- October 12, 2020 Change Cloud Logging has deprecated the following two logs-based metrics related to exclusions: logging.googleapis.com/excluded log entry count logging.googleapis.com/excluded byte count Cloud Logging will stop populating these metrics on October 1, 2021.
- Also, the latency of logs-based metrics has dropped from approximately 5 minutes to 1 minute, so you can respond more quickly to the metrics.
- Change For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents: Instrumentation and observability overview Choose an instrumentation approach Go instrumentation example Java instrumentation example February 13, 2024 Feature Copying log entries is now generally available (GA).
- December 08, 2020 Fixed Cloud Logging calculates the system logs-based metrics byte count and log entry count on stored logs only, unlike user-defined logs-based metrics which are calculated on both stored and excluded logs.

