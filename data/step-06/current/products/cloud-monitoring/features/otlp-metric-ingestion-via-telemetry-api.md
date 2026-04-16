---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.760Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "OTLP metric ingestion via Telemetry API"
feature_slug: "otlp-metric-ingestion-via-telemetry-api"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
keywords:
  - "otlp"
  - "metric"
  - "ingestion"
  - "via"
  - "telemetry"
  - "monitoring"
  - "can"
  - "ingest"
---

# OTLP metric ingestion via Telemetry API

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring can ingest OTLP metrics by using an OpenTelemetry Collector, an OTLP exporter, and the Telemetry API.

## Extended Definition

Cloud Monitoring can ingest OTLP metrics by using an OpenTelemetry Collector, an OTLP exporter, and the Telemetry API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)

## Supporting Pages

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test gauge/gauge", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test gauge/gauge", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.gauge", "labels": [ { "key": "instrumentation source" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.gauge", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The application creates an OTLP counter metric, otlp.test.cumulative , that records increasing 64-bit floating-point values.
- To send data to the Monitoring API, set the value of the metrics mode option to googlecloudmonitoring , as shown in the following example: combined: receivers: otlp: type: otlp metrics mode: googlecloudmonitoring The ingestion format you use determines how the OTLP metrics are mapped into Cloud Monitoring.
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Collect OTLP metrics When you use the OTLP receiver to collect metrics from your OpenTelemetry applications, the primary configuration choice for the receiver is the API that you want to use to ingest the metrics.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- Both the frequency with which the metric is written—the sampling rate —and the type of data the metric writes—scalars or distributions—affect the amount of data ingested, regardless of whether ingestion is charged by bytes ingested or samples ingested. "Bytes ingested" means that charges are based on the volume of data ingested, measured in bytes.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- The googlemanagedprometheus exporter converts the http.server.request.duration OpenTelemetry metric into a Prometheus metric that has the following properties: Name: prometheus/http server request duration seconds/histogram Metric: prometheus.googleapis.com/http server request duration seconds/histogram Resource types: prometheus target Unit: s Kind: CUMULATIVE Value type: DISTRIBUTION When your Google Cloud project contains the http server request duration seconds metric, then your Application Monitoring dashboards display the traffic level, server error rate and the latency for HTTP requests.
- During metric ingestion, Google Cloud Observability uses the top level controller {name,type} labels and the App Hub API to identify your App Hub application and to add the appropriate labels to your metric data.
- Metric data from instrumentation you added to your applications can include the following metric labels: metric.labels.apphub application {container,id,location} metric.labels.apphub workload {criticality type,environment type,id} Trace spans generated by instrumentation you added to your applications can include the following resource attributes: gcp.apphub.application.{container,id,location} gcp.apphub.{workload,service}.{criticality type,environment type,id} About OpenTelemetry HTTP server metrics There are no system metrics for workloads that run on Google Kubernetes Engine that can report the traffic level, server error rate, or the latency for HTTP requests.
- Verify metric labels To verify that your application is sending Prometheus metrics, to your project, do the following: Verify that your application is sending Prometheus metrics to your project: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .

