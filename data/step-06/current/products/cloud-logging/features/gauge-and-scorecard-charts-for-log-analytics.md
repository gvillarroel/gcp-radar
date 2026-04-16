---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.321Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Gauge and scorecard charts for Log Analytics"
feature_slug: "gauge-and-scorecard-charts-for-log-analytics"
latest_feature_date: "2024-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9"
keywords:
  - "gauge"
  - "scorecard"
  - "charts"
  - "log"
  - "analytics"
  - "query"
  - "results"
  - "can"
---

# Gauge and scorecard charts for Log Analytics

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics query results can be visualized with gauge and scorecard charts.

## Extended Definition

Log Analytics query results can be visualized with gauge and scorecard charts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- GROUP BY Group the query results by the distinct values of this field.
- A query builder configuration used in Log Analytics.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- The manage search Analyze results button is visible only when the log bucket that contains the log view you are querying has been upgraded to use Observability Analytics.
- To go to the Observability Analytics page from the Logs Explorer, in the Query results toolbar, click manage search Analyze results .
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.

### Elasticsearch 8.0+ and 9.0+ \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/elasticsearch9)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metric type Kind, Type Monitored resources Labels workload.googleapis.com/elasticsearch.breaker.memory.estimated GAUGE , INT64 gce instance instrumentation source name workload.googleapis.com/elasticsearch.breaker.memory.limit GAUGE , INT64 gce instance instrumentation source name workload.googleapis.com/elasticsearch.breaker.tripped CUMULATIVE , INT64 gce instance instrumentation source name workload.googleapis.com/elasticsearch.cluster.data nodes GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.cluster.health GAUGE , INT64 gce instance instrumentation source status workload.googleapis.com/elasticsearch.cluster.in flight fetch GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.cluster.nodes GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.cluster.pending tasks GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.cluster.published states.differences GAUGE , INT64 gce instance instrumentation source state workload.googleapis.com/elasticsearch.cluster.published states.full GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.cluster.shards GAUGE , INT64 gce instance instrumentation source state workload.googleapis.com/elasticsearch.cluster.state queue GAUGE , INT64 gce instance instrumentation source state workload.googleapis.com/elasticsearch.cluster.state update.count CUMULATIVE , INT64 gce instance instrumentation source state workload.googleapis.com/elasticsearch.cluster.state update.time CUMULATIVE , INT64 gce instance instrumentation source state type workload.googleapis.com/elasticsearch.indexing pressure.memory.limit GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.indexing pressure.memory.total.primary rejections CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.indexing pressure.memory.total.replica rejections CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.memory.indexing pressure GAUGE , INT64 gce instance instrumentation source stage workload.googleapis.com/elasticsearch.node.cache.count GAUGE , INT64 gce instance instrumentation source type workload.googleapis.com/elasticsearch.node.cache.evictions CUMULATIVE , INT64 gce instance cache name instrumentation source workload.googleapis.com/elasticsearch.node.cache.memory.usage GAUGE , INT64 gce instance cache name instrumentation source workload.googleapis.com/elasticsearch.node.cluster.connections GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.cluster.io CUMULATIVE , INT64 gce instance direction instrumentation source workload.googleapis.com/elasticsearch.node.disk.io.read GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.disk.io.write GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.documents GAUGE , INT64 gce instance instrumentation source state workload.googleapis.com/elasticsearch.node.fs.disk.available GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.fs.disk.free GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.fs.disk.total GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.http.connections GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.ingest.documents CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.ingest.documents.current GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.ingest.operations.failed CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.open files GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.operations.completed CUMULATIVE , INT64 gce instance instrumentation source operation workload.googleapis.com/elasticsearch.node.operations.time CUMULATIVE , INT64 gce instance instrumentation source operation workload.googleapis.com/elasticsearch.node.pipeline.ingest.documents.current GAUGE , INT64 gce instance instrumentation source name workload.googleapis.com/elasticsearch.node.pipeline.ingest.documents.preprocessed GAUGE , INT64 gce instance instrumentation source name workload.googleapis.com/elasticsearch.node.pipeline.ingest.operations.failed CUMULATIVE , INT64 gce instance instrumentation source name workload.googleapis.com/elasticsearch.node.script.cache evictions CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.script.compilation limit triggered CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.script.compilations GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.shards.data set.size GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.shards.reserved.size GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.shards.size GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.thread pool.tasks.finished CUMULATIVE , INT64 gce instance instrumentation source state thread pool name workload.googleapis.com/elasticsearch.node.thread pool.tasks.queued GAUGE , INT64 gce instance instrumentation source thread pool name workload.googleapis.com/elasticsearch.node.thread pool.threads GAUGE , INT64 gce instance instrumentation source state thread pool name workload.googleapis.com/elasticsearch.node.translog.operations CUMULATIVE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.translog.size GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.node.translog.uncommitted.size GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.os.cpu.load avg.15m GAUGE , DOUBLE gce instance instrumentation source workload.googleapis.com/elasticsearch.os.cpu.load avg.1m GAUGE , DOUBLE gce instance instrumentation source workload.googleapis.com/elasticsearch.os.cpu.load avg.5m GAUGE , DOUBLE gce instance instrumentation source workload.googleapis.com/elasticsearch.os.cpu.usage GAUGE , INT64 gce instance instrumentation source workload.googleapis.com/elasticsearch.os.memory GAUGE , INT64 gce instance instrumentation source state Verify the configuration This section describes how to verify that you correctly configured the Elasticsearch receiver.
- Enter the following query in the editor, and then click Run query : resource.type="gce instance" (log id("elasticsearch json") OR log id("elasticsearch gc")) To verify that Elasticsearch metrics are being sent to Cloud Monitoring, do the following: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Enter the following query in the editor, and then click Run query : {"workload.googleapis.com/elasticsearch.node.open files", monitored resource="gce instance"} View dashboard To view your Elasticsearch metrics, you must have a chart or dashboard configured.
- In the toolbar of the query-builder pane, select the button whose name is either code MQL or code PromQL .

