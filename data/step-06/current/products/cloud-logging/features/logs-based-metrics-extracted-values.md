---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.482Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs-based metrics extracted values"
feature_slug: "logs-based-metrics-extracted-values"
latest_feature_date: "2017-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
keywords:
  - "logs"
  - "based"
  - "metrics"
  - "extracted"
  - "values"
  - "can"
  - "extract"
  - "log"
---

# Logs-based metrics extracted values

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs-based metrics can extract values from log entries to create distribution metrics and populate user-defined labels.

## Extended Definition

Logs-based metrics can extract values from log entries to create distribution metrics and populate user-defined labels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)

## Supporting Pages

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data types for log-based metrics Log-based metrics can extract data from logs to create metrics of the following types: Counter: these metrics count the number of log entries that match a specified filter within a specific period.
- By default, user-defined log-based metrics are calculated from all logs received by the Logging API for the Google Cloud project, regardless of any inclusion filters or exclusion filters that might apply to the Google Cloud project.
- How time-series values for log-based metrics are determined This section briefly describes how the values in a time series for a counter-type log-based metric are determined.
- Bucket-scoped log-based metrics are calculated from all logs destined for the bucket, regardless of where they originated.

### Configure the Ops Agent \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- The following shows the built-in configuration for Linux and for Windows: Linux By default, the Ops Agent collects file-based syslog logs and host metrics.
- This can be used to remove placeholder values, such as: httpRequest.referer : move from : jsonPayload.referer omit if : httpRequest.referer = "-" Sample Configurations The parse json processor would transform a JSON file containing { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } into a LogEntry structure that looks like this: { "jsonPayload" : { "http status" : "400" , "path" : "/index.html" , "referer" : "-" } } This could then be transformed with modify fields into this LogEntry : { "httpRequest" : { "status" : 400 , "requestUrl" : "/index.html" , } } by using this Ops Agent configuration: logging : receivers : in : type : files include paths : - /var/log/http.json processors : parse json : type : parse json set http request : type : modify fields fields : httpRequest.status : move from : jsonPayload.http status type : integer httpRequest.requestUrl : move from : jsonPayload.path httpRequest.referer : move from : jsonPayload.referer omit if : jsonPayload.referer = "-" service : pipelines : pipeline : receivers : [ in ] processors : [ parse json , set http request ] This configuration reads JSON-formatted logs from /var/log/http.json and populates part of the httpRequest structure from fields in the logs.
- For more information about the metrics collected, see Metrics ingested by the receivers . logging : receivers : syslog : type : files include paths : - /var/log/messages - /var/log/syslog service : pipelines : default pipeline : receivers : [ syslog ] metrics : receivers : hostmetrics : type : hostmetrics collection interval : 60s processors : metrics filter : type : exclude metrics metrics pattern : [] service : pipelines : default pipeline : receivers : [ hostmetrics ] processors : [ metrics filter ] Windows By default, the Ops Agent collects Windows event logs from System , Application , and Security channels, as well as host metrics, IIS metrics, and SQL Server metrics.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Example : The following query returns 25 percent of the log entries from log syslog : logName = "projects/my-project/logs/syslog" AND sample(insertId, 0.25) Details : A deterministic algorithm, based on hashing, is used to determine if a log entry is included, or excluded, from the sample.
- The following example shows how to limit your queries to both type of VMs: resource.type = ("gce instance" OR "aws ec2 instance") The monitored resource type values in logs are indexed.
- You can use the Logging query language to query data and to write filters to create sinks and log-based metrics .
- Examples querying logs using regular expressions Query type Example Standard query sourceLocation.file = "foo" Query with case-insensitive search labels.subnetwork name = "(?i)foo" Query containing quotation marks jsonPayload.message = "field1=\"bar. \"" Query using a boolean or labels.pod name = "(foo bar)" Query using anchors logName = "/my%2Flog$" Query not matching a pattern labels.pod name ! "foo" Query using boolean operator labels.env = ("^prod. server" OR "^staging. server") Query that begins with a value logName = "^foo" Query that ends with a value logName = "foo$" Note: For a detailed explanation of the RE2 syntax, see the RE2 wiki page .

