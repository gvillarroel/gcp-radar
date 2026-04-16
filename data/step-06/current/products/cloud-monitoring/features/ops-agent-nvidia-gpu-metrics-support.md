---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.876Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent NVIDIA GPU metrics support"
feature_slug: "ops-agent-nvidia-gpu-metrics-support"
latest_feature_date: "2023-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
keywords:
  - "ops"
  - "agent"
  - "nvidia"
  - "gpu"
  - "metrics"
  - "can"
  - "collect"
  - "including"
---

# Ops Agent NVIDIA GPU metrics support

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Ops Agent can collect NVIDIA GPU metrics, including NVML and DCGM metrics, for GPU-enabled workloads.

## Extended Definition

The Ops Agent can collect NVIDIA GPU metrics, including NVML and DCGM metrics, for GPU-enabled workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)

## Supporting Pages

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- To collect additional system metrics from your Compute Engine instances, install an agent.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect metrics overview Stay organized with collections Save and categorize content based on your preferences.
- For your agentic applications, some frameworks can collect your prompts and responses or pass context that allows tracing of some remote Google Cloud MCP servers calls.

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- To enable the plugin: As root , edit the following configuration file: /etc/stackdriver/collectd.conf Right after LoadPlugin write gcm , add: LoadPlugin write log Right after <Plugin "write gcm">…</Plugin> , add: <Plugin "write log"> Format JSON </Plugin> Search for <Target "write">…</Target> and after every Plugin "write gcm" , add: Plugin "write log" Save your changes and restart the agent: sudo service stackdriver-agent restart These changes will print one log line per metric value reported, including the full collectd identifier, the metadata entries, and the value.
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.
- How Monitoring handles collectd metrics As background, the Monitoring agent processes collectd metrics and sends them to Monitoring, which treats each metric as a member of one of the following categories: User-defined metrics .
- Home Documentation Observability Cloud Monitoring Guides Send feedback User-defined metrics from the agent Stay organized with collections Save and categorize content based on your preferences.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- The Prometheus receiver When you use the Ops Agent to collect Prometheus metrics, the following apply: The number and cardinality of metrics emitted by your application are under your control.
- When Prometheus metrics are emitted by an application, directly or by using a library or exporter, the metrics can then be collected by an Ops Agent configured with a Prometheus receiver.

