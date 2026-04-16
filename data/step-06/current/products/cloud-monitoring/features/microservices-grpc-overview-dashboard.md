---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.889Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Microservices gRPC Overview dashboard"
feature_slug: "microservices-grpc-overview-dashboard"
latest_feature_date: "2022-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "microservices"
  - "grpc"
  - "overview"
  - "dashboard"
  - "pre"
  - "configured"
  - "monitoring"
  - "dashboards"
---

# Microservices gRPC Overview dashboard

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Pre-configured Monitoring dashboards include a Microservices gRPC Overview dashboard for projects emitting gRPC metrics.

## Extended Definition

Pre-configured Monitoring dashboards include a Microservices gRPC Overview dashboard for projects emitting gRPC metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Cloud Monitoring overview Stay organized with collections Save and categorize content based on your preferences.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- For example, for an App Hub application, dashboards are created for the application and for each of its services and workloads.
- These dashboards show curated information that helps you understand the health of your resources and applications.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- This document describes how to view the dashboards that Application Monitoring creates for your App Hub applications, services, and workloads.
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- After the Ops Agent has collected your metrics, you can use the features of Cloud Monitoring, including charts, dashboards, and alerting policies, to monitor your metrics.
- You can create charts, dashboards, and alerting policies in Monitoring for metrics of either metric format, but you refer to the metrics differently in queries.
- The metrics mode choice doesn't affect your ability to create charts, dashboards, and alerting policies in Monitoring.

