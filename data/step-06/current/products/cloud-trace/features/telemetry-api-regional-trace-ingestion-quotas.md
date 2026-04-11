---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.822Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Telemetry API regional trace ingestion quotas"
feature_slug: "telemetry-api-regional-trace-ingestion-quotas"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/quotas"
  - "https://docs.cloud.google.com/trace/docs/otlp"
  - "https://docs.cloud.google.com/trace/docs/release-notes"
keywords:
  - "telemetry"
  - "api"
  - "regional"
  - "trace"
  - "ingestion"
  - "quotas"
  - "the"
  - "provides"
---

# Telemetry API regional trace ingestion quotas

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

The Telemetry API provides regional byte-based quotas for trace ingestion with higher limits in selected regions.

## Extended Definition

The Telemetry API provides regional byte-based quotas for trace ingestion with higher limits in selected regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)

## Supporting Pages

### Quotas and limits \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Telemetry API limits and quotas This section lists the limits that apply only when the Telemetry API is used to ingest trace data.
- Trace API quotas and limits This section provides information about quotas and limits that apply only to the Trace API.
- 4 Your daily trace span ingestion quota for the Cloud Trace API is determined by your billing account history and requests you have made for quota increases.
- Quotas The following table summarizes the quota units available for read and write operations, and the daily quota for ingesting spans for the Trace API.

### "Use the Ops Agent and OpenTelemetry Protocol (OTLP) \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingestion formats for OTLP metrics The OTLP receiver provides the metrics mode option, which specifies the API that is used to ingest your metric data.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test gauge/gauge", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test gauge/gauge", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.gauge", "labels": [ { "key": "instrumentation source" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.gauge", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The application creates an OTLP counter metric, otlp.test.cumulative , that records increasing 64-bit floating-point values.
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.
- March 24, 2026 Feature The Telemetry API supports trace ingestion of up to 2.4GB per minute for the following regions: asia-east1, asia-northeast1, asia-southeast1, and asia-south1 europe-west1, europe-west2, europe-west3, and europe-west4 us-central1, us-east4, and us-west1.
- For more information about the Telemetry API, see the following documents: Telemetry API overview Migrate from the Trace exporter to the OTLP endpoint Quotas and limits January 24, 2025 Feature Introducing trace scopes.
- For all other regions, the Telemetry API supports trace ingestion of up to 300 MB per minute.

