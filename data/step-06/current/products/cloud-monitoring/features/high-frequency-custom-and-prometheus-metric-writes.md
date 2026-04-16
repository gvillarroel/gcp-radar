---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.982Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "High-frequency custom and Prometheus metric writes"
feature_slug: "high-frequency-custom-and-prometheus-metric-writes"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
keywords:
  - "high"
  - "frequency"
  - "custom"
  - "prometheus"
  - "metric"
  - "writes"
  - "metrics"
  - "can"
---

# High-frequency custom and Prometheus metric writes

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Custom and Prometheus metrics can be written at up to one data point every 10 seconds.

## Extended Definition

Custom and Prometheus metrics can be written at up to one data point every 10 seconds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- Both the frequency with which the metric is written—the sampling rate —and the type of data the metric writes—scalars or distributions—affect the amount of data ingested, regardless of whether ingestion is charged by bytes ingested or samples ingested. "Bytes ingested" means that charges are based on the volume of data ingested, measured in bytes.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setting up the example requires the following resources, which you might have to install: git curl make python3 Go language, version 1.19 or higher Create or configure your application To obtain and run the JSON Exporter, use the following procedure: Clone the json exporter repository and check out the exporter by running the following commands: git clone https://github.com/prometheus-community/json exporter.git cd json exporter git checkout v0.5.0 Build the exporter by running the following command: make build Start the Python HTTP server by running the following command: python3 -m http.server 8000 & Start the JSON Exporter by running the following command: ./json exporter --config.file examples/config.yml & Query the JSON Exporter to verify that it is running and exposing metrics on port 7979: curl "http://localhost:7979/probe?module=default&target=http://localhost:8000/examples/data.json" If the query was successful, then you see output that resembles the following: HELP example global value Example of a top-level global value scrape in the json TYPE example global value untyped example global value{environment="beta",location="planet-mars"} 1234 HELP example value active Example of sub-level value scrapes from a json TYPE example value active untyped example value active{environment="beta",id="id-A"} 1 example value active{environment="beta",id="id-C"} 1 HELP example value boolean Example of sub-level value scrapes from a json TYPE example value boolean untyped example value boolean{environment="beta",id="id-A"} 1 example value boolean{environment="beta",id="id-C"} 0 HELP example value count Example of sub-level value scrapes from a json TYPE example value count untyped example value count{environment="beta",id="id-A"} 1 example value count{environment="beta",id="id-C"} 3 In this output, the strings like example value active are the metric names, with labels and values in braces.
- Prerequisites To collect Prometheus metrics by using the Prometheus receiver, you must install the Ops Agent version 2.25.0 or higher.
- The full structure of the Prometheus receiver is shown in the following: metrics: receivers: prom application: type: prometheus config: scrape configs: - job name: ' STRING ' # must be unique across all Prometheus receivers scrape interval: # duration, like 10m or 15s scrape timeout: # duration, like 10m or 15s metrics path: # resource path for metrics, default = /metrics honor timestamps: # boolean, default = false scheme: # http or https, default = http params: - STRING : STRING basic auth: username: STRING password: SECRET password file: STRING authorization: type: STRING # default = Bearer credentials: SECRET credentials file: FILENAME oauth2: OAUTH2 # See Prometheus oauth2 follow redirects: # boolean, default = true enable http2: # boolean, default = true tls config: TLS CONFIG # See Prometheus tls config proxy url: STRING static configs: STATIC CONFIG # See Prometheus static config relabel configs: RELABEL CONFIG # See Prometheus relabel config metric relabel configs: METRIC RELABEL CONFIGS # See Prometheus metric relabel configs For examples of relabeling configs, see Additional receiver configuration .
- Add the staticLabel label with the value "A static value" to all ingested metrics. metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] relabel configs: - source labels: [ meta gce zone] regex: '(.+)' replacement: '${1}' target label: zone metric relabel configs: - source labels: [ name ] regex: 'example global value' action: drop - source labels: [ address ] action: replace replacement: 'A static value' target label: staticLabel Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.
- The new custom metric https://cloud.google.com/monitoring/custom-metrics descriptor.
- This endpoint rejects writes to user-defined metrics.

