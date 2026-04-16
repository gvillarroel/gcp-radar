---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.900Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Managed Service for Prometheus PromQL access to Cloud Monitoring metrics"
feature_slug: "managed-service-for-prometheus-promql-access-to-cloud-monitoring-metrics"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "managed"
  - "prometheus"
  - "promql"
  - "access"
  - "monitoring"
  - "metrics"
  - "can"
  - "query"
---

# Managed Service for Prometheus PromQL access to Cloud Monitoring metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Managed Service for Prometheus can query Cloud Monitoring metrics by using PromQL.

## Extended Definition

Managed Service for Prometheus can query Cloud Monitoring metrics by using PromQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For information about setting up these interfaces, see the following sections in the Google Cloud Managed Service for Prometheus documentation: Prometheus UI Grafana Use PromQL PromQL is the recommended query language for metrics ingested by using the Prometheus receiver.
- To filter for any metrics with an id label matching this pattern, use the following query: example value count{id= "id. "} For more information about using PromQL in Metrics Explorer and Cloud Monitoring charts, see PromQL in Cloud Monitoring .
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- Monitoring queries for Prometheus metrics that are not written in PromQL must specify this resource type.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Trivial PromQL queries for the example metrics look like the following: otlp test gauge otlp test cumulative For more information about using PromQL in Cloud Monitoring to query metrics ingested by using the Prometheus API, see Google Cloud Managed Service for Prometheus data in Cloud Monitoring .
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- For information about querying OTLP metrics by using these tools, see the following: Query OTLP metrics ingested by using the Prometheus API Query OTLP metrics ingested by using the Monitoring API Query OTLP metrics ingested by using the Prometheus API This section illustrates how you query OTLP metrics ingested by using the Prometheus API, which is the default metric mode for the OTLP receiver.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To create an alerting policy that monitors a metric collection rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

