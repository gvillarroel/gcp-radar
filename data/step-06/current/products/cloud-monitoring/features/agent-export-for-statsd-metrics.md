---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.022Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Agent Export for StatsD Metrics"
feature_slug: "agent-export-for-statsd-metrics"
latest_feature_date: "2017-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
keywords:
  - "agent"
  - "export"
  - "statsd"
  - "metrics"
  - "monitoring"
  - "can"
  - "custom"
---

# Agent Export for StatsD Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring agent can export StatsD metrics as custom metrics.

## Extended Definition

The Monitoring agent can export StatsD metrics as custom metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to exporting many predefined system and third-party metrics to Cloud Monitoring, the agent can export your own collectd application metrics to Monitoring as user-defined metrics .
- This guide explains how you can configure the Monitoring agent to recognize and export your application metrics to Cloud Monitoring.
- An alternative way to export application metrics to Monitoring is to use StatsD .
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For the JSON Exporter example, use the following procedure: Edit the Ops Agent configuration file, /etc/google-cloud-ops-agent/config.yaml , and add the following Prometheus receiver and pipeline entries: metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] service: pipelines: prometheus pipeline: receivers: - prometheus If you have other configuration entries in this file already, add the Prometheus receiver and pipeline to the existing metrics and service entries.
- You can use the following pattern to add labels staticLabel1 and staticLabel2 to all ingested metrics: metric relabel configs: - source labels: [ address ] action: replace replacement: ' STATIC VALUE 1 ' target label: staticLabel1 - source labels: [ address ] action: replace replacement: ' STATIC VALUE 2 ' target label: staticLabel2 The following version of the Prometheus receiver for the JSON Exporter example uses these configuration patterns to do the following: Set the zone label from the value of the meta gce zone meta label provided by the Ops Agent.
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- Many libraries and language frameworks like Spring and DropWizard, or applications like StatsD, DogStatsD, and Graphite, that emit non-Prometheus metrics can use Prometheus client libraries or exporters to emit Prometheus-style metrics.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can't configure the Ops Agent to export logs or metrics to services other than Cloud Logging and Cloud Monitoring.
- The entire metrics configuration looks like the following: metrics : service : pipelines : default pipeline : receivers : [] The following example shows the built-in service configuration for Windows: metrics : service : pipelines : default pipeline : receivers : - hostmetrics - iis - mssql processors : - metrics filter The following service configuration customizes log verbosity for the metrics submodule to be debug instead: metrics : service : log level : debug Collection of self logs By default, the Ops Agent's Fluent Bit self logs are sent to Cloud Logging.
- Metrics service The metrics service customizes verbosity for the Ops Agent metrics module's own logs and links metrics receivers and processors together into pipelines.
- Metrics verbosity level log level , available with Ops Agent versions 2.6.0 and later, customizes verbosity for Ops Agent metrics submodule's own logs.

