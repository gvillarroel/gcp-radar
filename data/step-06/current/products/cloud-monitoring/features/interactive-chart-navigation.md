---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.952Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Interactive chart navigation"
feature_slug: "interactive-chart-navigation"
latest_feature_date: "2021-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "interactive"
  - "chart"
  - "navigation"
  - "charts"
  - "selecting"
  - "line"
  - "ranges"
  - "shifting"
---

# Interactive chart navigation

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Charts support selecting line ranges, shifting the time axis, and expanding around a specific point in time.

## Extended Definition

Charts support selecting line ranges, shifting the time axis, and expanding around a specific point in time.

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
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- For example, if the resource type is determined to be cloud run-revision , then charts might filter the data by the values of the location and service name labels.
- These charts also display event annotations , which can help you correlate data from different sources when you are troubleshooting an issue.
- Charts on this tab automatically aggregate metric data for the services and workloads in your application.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .
- To determine how many of the active billable metrics are being queried or used in charts or alerting policies, refer to the Metric Usage scorecard.
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.
- You can create charts, dashboards, and alerting policies in Monitoring for metrics of either metric format, but you refer to the metrics differently in queries.
- The metrics mode choice doesn't affect your ability to create charts, dashboards, and alerting policies in Monitoring.

