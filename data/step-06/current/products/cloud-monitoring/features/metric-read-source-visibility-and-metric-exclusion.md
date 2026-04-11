---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.089Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Metric read source visibility and metric exclusion"
feature_slug: "metric-read-source-visibility-and-metric-exclusion"
latest_feature_date: "2024-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "metric"
  - "read"
  - "source"
  - "visibility"
  - "and"
  - "exclusion"
  - "the"
  - "metrics"
---

# Metric read source visibility and metric exclusion

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Metrics management page shows sources of metric reads and can exclude unneeded metrics to avoid ingestion costs.

## Extended Definition

The Metrics management page shows sources of metric reads and can exclude unneeded metrics to avoid ingestion costs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".
- The following table describes the categories of billable metrics available on the Metrics Management page and whether they are measured by bytes or samples ingested: Domain Metric prefix Pricing model Meaning Agent agent.googleapis.com Bytes Metrics that are collected from external resources by agents .
- It is possible have charts and alerting policies that refer to metrics with no data (inactive metrics) and to query such metrics; on the Metrics Management page, these metrics are considered used metrics, even though any read operations return no data.
- Before you begin To view the charts and logs included on the Metrics Management page, to create alerting policies, and to create metric-exclusion rules, you must have the correct authorization .

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.
- Collectd metrics that have the metadata key stackdriver metric type and a single data source are handled as user-defined metrics and sent to Monitoring using the projects.timeSeries.create method in the Monitoring API.
- Because filter chains can't modify the list of data sources and user-defined metrics only support a single data source, any collectd metrics that you want to use with this facility must have a single data source.
- These concepts are introduced in Metrics, time series, and resources and described in detail at Structure of time series and User-defined metrics overview .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Setting up the example requires the following resources, which you might have to install: git curl make python3 Go language, version 1.19 or higher Create or configure your application To obtain and run the JSON Exporter, use the following procedure: Clone the json exporter repository and check out the exporter by running the following commands: git clone https://github.com/prometheus-community/json exporter.git cd json exporter git checkout v0.5.0 Build the exporter by running the following command: make build Start the Python HTTP server by running the following command: python3 -m http.server 8000 & Start the JSON Exporter by running the following command: ./json exporter --config.file examples/config.yml & Query the JSON Exporter to verify that it is running and exposing metrics on port 7979: curl "http://localhost:7979/probe?module=default&target=http://localhost:8000/examples/data.json" If the query was successful, then you see output that resembles the following: HELP example global value Example of a top-level global value scrape in the json TYPE example global value untyped example global value{environment="beta",location="planet-mars"} 1234 HELP example value active Example of sub-level value scrapes from a json TYPE example value active untyped example value active{environment="beta",id="id-A"} 1 example value active{environment="beta",id="id-C"} 1 HELP example value boolean Example of sub-level value scrapes from a json TYPE example value boolean untyped example value boolean{environment="beta",id="id-A"} 1 example value boolean{environment="beta",id="id-C"} 0 HELP example value count Example of sub-level value scrapes from a json TYPE example value count untyped example value count{environment="beta",id="id-A"} 1 example value count{environment="beta",id="id-C"} 3 In this output, the strings like example value active are the metric names, with labels and values in braces.
- Add the staticLabel label with the value "A static value" to all ingested metrics. metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] relabel configs: - source labels: [ meta gce zone] regex: '(.+)' replacement: '${1}' target label: zone metric relabel configs: - source labels: [ name ] regex: 'example global value' action: drop - source labels: [ address ] action: replace replacement: 'A static value' target label: staticLabel Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- For the JSON Exporter example, use the following procedure: Edit the Ops Agent configuration file, /etc/google-cloud-ops-agent/config.yaml , and add the following Prometheus receiver and pipeline entries: metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] service: pipelines: prometheus pipeline: receivers: - prometheus If you have other configuration entries in this file already, add the Prometheus receiver and pipeline to the existing metrics and service entries.

