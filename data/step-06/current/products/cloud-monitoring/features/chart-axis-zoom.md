---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.065Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Chart Axis Zoom"
feature_slug: "chart-axis-zoom"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "chart"
  - "axis"
  - "zoom"
  - "charts"
  - "click"
  - "drag"
  - "zooming"
  - "both"
---

# Chart Axis Zoom

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Charts support click-and-drag zooming on both x and y axes.

## Extended Definition

Charts support click-and-drag zooming on both x and y axes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To open the flyout that displays both metric and log data, do one of the following: To filter log data only by the resource type and applicable variables, in the chart's toolbar, click more vert More chart options , and then select Inspect related logs .
- View chart configuration To view details like the metric type and the aggregation options for a chart that displays metric data, go to the toolbar of a chart or table, and then click info Information .
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- From the interactive topology map, you can do the following: Change the visualization by zooming in or out, repositioning nodes, or collapsing an application circle to a point.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To analyze any of these charts in more detail, click more vert More options and select View in Metrics Explorer .
- Click View charts on the scorecard for bytes or samples ingested.
- Click View charts on the scorecard for bytes or samples ingested.
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.
- You can create charts, dashboards, and alerting policies in Monitoring for metrics of either metric format, but you refer to the metrics differently in queries.
- The metrics mode choice doesn't affect your ability to create charts, dashboards, and alerting policies in Monitoring.

