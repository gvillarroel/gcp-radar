---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.907Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Metrics ratio charts"
feature_slug: "metrics-ratio-charts"
latest_feature_date: "2022-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "metrics"
  - "ratio"
  - "charts"
  - "explorer"
  - "dashboard"
  - "can"
  - "display"
  - "ratios"
---

# Metrics ratio charts

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Metrics Explorer and dashboard charts can display ratios of metrics in the Cloud Console.

## Extended Definition

Metrics Explorer and dashboard charts can display ratios of metrics in the Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.
- Find the metric in the table, and then click more vert Actions to do any of the following: To view a chart that displays the current metric, select View in Metrics Explorer .
- To analyze any of these charts in more detail, click more vert More options and select View in Metrics Explorer .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- For each supported App Hub region , this page lists at most 100 discovered services and 100 discovered workloads: The App Hub Type column displays the App Hub registration type : Service ( ) Workload ( ) The Functional Type column displays the App Hub functional type : Agent ( robot 2 ) MCP server ( ) From the Services and Workloads tab, you can do all of the following: Modify the data the table displays by using the view column Columns button.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring supports the following tools for querying metric data: A query-builder based interface built into tools like Metrics Explorer, the dashboard-builder interface, and the alert-policy configuration interface.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.
- You can create charts, dashboards, and alerting policies in Monitoring for metrics of either metric format, but you refer to the metrics differently in queries.

