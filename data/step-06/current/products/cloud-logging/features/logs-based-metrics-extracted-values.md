---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.575Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs-based metrics extracted values"
feature_slug: "logs-based-metrics-extracted-values"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "logs"
  - "based"
  - "metrics"
  - "extracted"
  - "values"
  - "can"
  - "extract"
  - "from"
---

# Logs-based metrics extracted values

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Logs-based metrics can extract values from log entries to create distribution metrics and populate user-defined labels.

## Extended Definition

Logs-based metrics can extract values from log entries to create distribution metrics and populate user-defined labels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data types for log-based metrics Log-based metrics can extract data from logs to create metrics of the following types: Counter: these metrics count the number of log entries that match a specified filter within a specific period.
- By default, user-defined log-based metrics are calculated from all logs received by the Logging API for the Google Cloud project, regardless of any inclusion filters or exclusion filters that might apply to the Google Cloud project.
- For example, you can use labels in the log-based metric to record the folder or organization from which a log entry originated, even though bucket-scoped log-based metrics can't be created for folders or organizations.
- Bucket-scoped log-based metrics are calculated from all logs destined for the bucket, regardless of where they originated.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- Example (Linux): To collect logs from application instances that create versioned or instance-specific subdirectories, like /opt/my-app/logs/instance-01/app.log , /opt/my-app/logs/groupA/instance-02/app.log , globstar can be used: /opt/my-app/logs/ / .log Note: When specifying wildcards on Windows, you must use \ as a separator.
- You can only specify rules based on the following fields and their subfields: httpRequest jsonPayload labels operation severity sourceLocation trace spanId The following example rule severity = "(DEBUG INFO)" uses a regular expression to exclude all DEBUG and INFO level logs.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- August 31, 2017 Feature Logs-based metrics now support extracting values from log entries to create distribution metrics and to populate user-defined metric labels.
- Also, the latency of logs-based metrics has dropped from approximately 5 minutes to 1 minute, so you can respond more quickly to the metrics.
- In other words, you can now calculate logs-based metrics from logs without ingesting them into a Logs Bucket.
- You can now create log-based metrics that are computed from the logs routed to a specific log bucket.

