---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.448Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Dashboard"
feature_slug: "logs-dashboard"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch"
keywords:
  - "logs"
  - "dashboard"
  - "provides"
  - "high"
  - "level"
  - "overview"
  - "health"
  - "systems"
---

# Logs Dashboard

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Dashboard provides a high-level overview of the health of systems running within a project.

## Extended Definition

Logs Dashboard provides a high-level overview of the health of systems running within a project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Fields pane The Fields pane offers a high-level summary of logs data and provides an efficient way to refine a query.
- This document provides you with an overview of the Logs Explorer in the Google Cloud console, which you can use to retrieve, view, and analyze log entries that are stored in log buckets .
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- This document provides a conceptual overview of Cloud Audit Logs.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Types of audit logs Cloud Audit Logs provides the following audit logs for each Google Cloud project, folder, and organization: Admin Activity audit logs Data Access audit logs System Event audit logs Policy Denied audit logs Note: Log entries written by Cloud Audit Logs are immutable.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.

### Elasticsearch 7.9+ \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elasticsearch json logs contain the following fields in the LogEntry : Field Type Description jsonPayload.cluster string The cluster emitting the log record jsonPayload.cluster.name string The name of the cluster emitting the log record jsonPayload.cluster.uuid string The UUID of the cluster emitting the log record jsonPayload.component string The component of Elasticsearch that emitted the log jsonPayload.level string Log entry level jsonPayload.message string Log message jsonPayload.node string The node emitting the log record jsonPayload.node.name string The name of the node emitting the log record jsonPayload.node.uuid string The UUID of the node emitting the log record jsonPayload.type string The type of log, indicating which log the record came from (e.g. server indicates this LogEntry came from the server log) severity string ( LogSeverity ) Log entry level (translated).
- The elasticsearch gc logs contain the following fields in the LogEntry : Field Type Description jsonPayload.gc run number The run of the garbage collector jsonPayload.message string Log message jsonPayload.type string The type of the log record severity string ( LogSeverity ) Log entry level (translated).
- For logs, install version 2.9.0 or higher.
- Metric type Kind, Type Monitored resources Labels workload.googleapis.com/elasticsearch.breaker.memory.estimated GAUGE , INT64 gce instance name workload.googleapis.com/elasticsearch.breaker.memory.limit GAUGE , INT64 gce instance name workload.googleapis.com/elasticsearch.breaker.tripped CUMULATIVE , INT64 gce instance name workload.googleapis.com/elasticsearch.cluster.data nodes GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.cluster.health GAUGE , INT64 gce instance status workload.googleapis.com/elasticsearch.cluster.in flight fetch GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.cluster.nodes GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.cluster.pending tasks GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.cluster.published states.differences GAUGE , INT64 gce instance state workload.googleapis.com/elasticsearch.cluster.published states.full GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.cluster.shards GAUGE , INT64 gce instance state workload.googleapis.com/elasticsearch.cluster.state queue GAUGE , INT64 gce instance state workload.googleapis.com/elasticsearch.cluster.state update.count CUMULATIVE , INT64 gce instance state workload.googleapis.com/elasticsearch.cluster.state update.time CUMULATIVE , INT64 gce instance state type workload.googleapis.com/elasticsearch.indexing pressure.memory.limit GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.indexing pressure.memory.total.primary rejections CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.indexing pressure.memory.total.replica rejections CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.memory.indexing pressure GAUGE , INT64 gce instance stage workload.googleapis.com/elasticsearch.node.cache.count GAUGE , INT64 gce instance type workload.googleapis.com/elasticsearch.node.cache.evictions CUMULATIVE , INT64 gce instance cache name workload.googleapis.com/elasticsearch.node.cache.memory.usage GAUGE , INT64 gce instance cache name workload.googleapis.com/elasticsearch.node.cluster.connections GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.cluster.io CUMULATIVE , INT64 gce instance direction workload.googleapis.com/elasticsearch.node.disk.io.read GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.disk.io.write GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.documents GAUGE , INT64 gce instance state workload.googleapis.com/elasticsearch.node.fs.disk.available GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.fs.disk.free GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.fs.disk.total GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.http.connections GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.ingest.documents CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.node.ingest.documents.current GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.ingest.operations.failed CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.node.open files GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.operations.completed CUMULATIVE , INT64 gce instance operation workload.googleapis.com/elasticsearch.node.operations.time CUMULATIVE , INT64 gce instance operation workload.googleapis.com/elasticsearch.node.pipeline.ingest.documents.current GAUGE , INT64 gce instance name workload.googleapis.com/elasticsearch.node.pipeline.ingest.documents.preprocessed GAUGE , INT64 gce instance name workload.googleapis.com/elasticsearch.node.pipeline.ingest.operations.failed CUMULATIVE , INT64 gce instance name workload.googleapis.com/elasticsearch.node.script.cache evictions CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.node.script.compilation limit triggered CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.node.script.compilations GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.shards.data set.size GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.shards.reserved.size GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.shards.size GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.thread pool.tasks.finished CUMULATIVE , INT64 gce instance state thread pool name workload.googleapis.com/elasticsearch.node.thread pool.tasks.queued GAUGE , INT64 gce instance thread pool name workload.googleapis.com/elasticsearch.node.thread pool.threads GAUGE , INT64 gce instance state thread pool name workload.googleapis.com/elasticsearch.node.translog.operations CUMULATIVE , INT64 gce instance workload.googleapis.com/elasticsearch.node.translog.size GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.node.translog.uncommitted.size GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.os.cpu.load avg.15m GAUGE , DOUBLE gce instance workload.googleapis.com/elasticsearch.os.cpu.load avg.1m GAUGE , DOUBLE gce instance workload.googleapis.com/elasticsearch.os.cpu.load avg.5m GAUGE , DOUBLE gce instance workload.googleapis.com/elasticsearch.os.cpu.usage GAUGE , INT64 gce instance workload.googleapis.com/elasticsearch.os.memory GAUGE , INT64 gce instance state Verify the configuration This section describes how to verify that you correctly configured the Elasticsearch receiver.

