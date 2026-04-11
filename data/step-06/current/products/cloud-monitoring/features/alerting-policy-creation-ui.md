---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.145Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Alerting Policy Creation UI"
feature_slug: "alerting-policy-creation-ui"
latest_feature_date: "2018-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "alerting"
  - "policy"
  - "creation"
  - "ui"
  - "metrics"
  - "explorer"
  - "based"
  - "interface"
---

# Alerting Policy Creation UI

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

A Metrics Explorer-based interface provides fine-grained control for creating alerting policies.

## Extended Definition

A Metrics Explorer-based interface provides fine-grained control for creating alerting policies.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This interface, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- This interface, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- This UI, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- July 13, 2021 Change Metrics Explorer, a stand-alone charting tool that lets you quickly chart and explore time-series data, has a new interface and supports enhanced aggregation options.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring supports the following tools for querying metric data: A query-builder based interface built into tools like Metrics Explorer, the dashboard-builder interface, and the alert-policy configuration interface.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect OpenTelemetry Protocol (OTLP) metrics and traces Stay organized with collections Save and categorize content based on your preferences.
- These examples use Metrics Explorer, but the principles are the same for dashboards and alerting policies.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For information about setting up these interfaces, see the following sections in the Google Cloud Managed Service for Prometheus documentation: Prometheus UI Grafana Use PromQL PromQL is the recommended query language for metrics ingested by using the Prometheus receiver.
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect Prometheus metrics Stay organized with collections Save and categorize content based on your preferences.
- You can also view your Prometheus metrics in interfaces outside Cloud Monitoring, like the Prometheus UI and Grafana .

