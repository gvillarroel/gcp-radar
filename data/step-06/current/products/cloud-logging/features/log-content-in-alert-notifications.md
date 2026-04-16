---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.364Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log content in alert notifications"
feature_slug: "log-content-in-alert-notifications"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop"
keywords:
  - "log"
  - "content"
  - "alert"
  - "notifications"
  - "can"
  - "dynamically"
  - "include"
  - "extracted"
---

# Log content in alert notifications

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Alert notifications can dynamically include extracted log content for troubleshooting.

## Extended Definition

Alert notifications can dynamically include extracted log content for troubleshooting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop)

## Supporting Pages

### Internet Information Services \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alerting policies need to know where to send notifications that the alert has been triggered, so they require information from you for installation.
- The IIS integration includes one or more alerting policies for you to use.
- Detailed fields inside the LogEntry are as follows. iis access logs contain the following fields in the LogEntry : Field Type Description httpRequest.referer string Contents of the Referer header httpRequest.remoteIp string IP of the client that made the request httpRequest.requestMethod string HTTP method httpRequest.requestUrl string Request URL (typically just the path part of the URL) httpRequest.serverIp string The server's IP and port that was requested httpRequest.status number HTTP status code httpRequest.userAgent string Contents of the User-Agent header jsonPayload.sc substatus number The substatus error code jsonPayload.sc win32 status number The Windows status code jsonPayload.time taken number The length of time that the action took, in milliseconds jsonPayload.user string Authenticated username for the request timestamp string ( Timestamp ) Time the request was received Configure v1 metrics collection The Ops Agent on a Microsoft Windows VM automatically collects IIS v1 metrics.
- Add - Content ' C : \ Program Files \ Google \ Cloud Operations \ Ops Agent \ config \ config . yaml ' " metrics: receivers: iis v2: type: iis receiver version: 2 service: pipelines: iispipeline: receivers: - iis v2 logging: receivers: iis access: type: iis access service: pipelines: iis: receivers: - iis access " if ( Get - Service google - cloud - ops - agent - ErrorAction SilentlyContinue ) { ( Get - Service google - cloud - ops - agent ).

### Apache Flink \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/flink)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alerting policies need to know where to send notifications that the alert has been triggered, so they require information from you for installation.
- The Flink integration includes one or more alerting policies for you to use.
- To configure a receiver for your flink logs, specify the following fields: Field Default Description exclude paths A list of filesystem path patterns to exclude from the set matched by include paths . include paths [/opt/flink/log/flink- -standalonesession- .log, /opt/flink/log/flink- -taskexecutor- .log, /opt/flink/log/flink- -client- .log] A list of filesystem paths to read by tailing each file.
- To view the descriptions of available alerting policies and install them, do the following: In the Google Cloud console, go to the Integrations page: Go to Integrations If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### Apache Hadoop \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hadoop)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alerting policies need to know where to send notifications that the alert has been triggered, so they require information from you for installation.
- The Hadoop integration includes one or more alerting policies for you to use.
- To configure a receiver for your hadoop logs, specify the following fields: Field Default Description exclude paths A list of filesystem path patterns to exclude from the set matched by include paths . include paths [/opt/hadoop/logs/hadoop- .log, /opt/hadoop/logs/yarn- .log] A list of filesystem paths to read by tailing each file.
- To view the descriptions of available alerting policies and install them, do the following: In the Google Cloud console, go to the Integrations page: Go to Integrations If you use the search bar to find this page, then select the result whose subheading is Monitoring .

