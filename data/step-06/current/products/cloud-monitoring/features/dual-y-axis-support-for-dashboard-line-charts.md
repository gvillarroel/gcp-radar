---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.126Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dual Y-axis support for dashboard line charts"
feature_slug: "dual-y-axis-support-for-dashboard-line-charts"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "dual"
  - "axis"
  - "for"
  - "dashboard"
  - "line"
  - "charts"
  - "can"
  - "assign"
---

# Dual Y-axis support for dashboard line charts

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Dashboard line charts can assign metrics to either the left or right Y-axis to compare different scales.

## Extended Definition

Dashboard line charts can assign metrics to either the left or right Y-axis to compare different scales.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- August 09, 2021 Feature When you create a line chart on a dashboard, you can now specify whether the selected metric is charted against the left Y-axis or the right Y-axis.
- May 28, 2024 Feature Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces: Python example Node.js example For general instrumentation information and recommendations, and for links to other samples, see: Instrumentation and observability overview Choose an instrumentation approach May 13, 2024 Feature You can now configure dashboards to display events by using the Monitoring API.
- July 20, 2023 Change We made improvements to the dashboard building experience: Improved the performance Simplified the layout and expanded the configurable settings Improved the widget drag and drop experience Enhanced the text widget Unified the chart-configuration experience between dashboards and the Metrics Explorer For more information, see Add charts and tables to a custom dashboard .
- Change The improved dashboard building experience is now GA: Improved the performance Simplified the layout and expanded the configurable settings Improved the widget drag and drop experience Enhanced the text widget Unified the chart-configuration experience between dashboards and the Metrics Explorer For more information, see Add charts and tables to a custom dashboard .

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- You can create charts, dashboards, and alerting policies in Monitoring for metrics of either metric format, but you refer to the metrics differently in queries.
- For information about dashboards and the types of charts you can create, see Dashboards and charts .
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- For information about dashboards and the types of charts you can use, see Dashboards and charts .
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You also can't use any non-Prometheus receivers in the pipeline for Prometheus metrics.
- For information about creating dashboards, see Dashboards and charts .

