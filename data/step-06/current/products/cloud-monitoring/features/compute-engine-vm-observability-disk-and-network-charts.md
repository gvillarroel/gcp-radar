---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.868Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM Observability disk and network charts"
feature_slug: "compute-engine-vm-observability-disk-and-network-charts"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "observability"
  - "disk"
  - "network"
  - "charts"
  - "tab"
---

# Compute Engine VM Observability disk and network charts

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Observability tab on the VM instances page includes expanded disk and network chart coverage.

## Extended Definition

The Observability tab on the VM instances page includes expanded disk and network chart coverage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.
- Metrics from an agent in your VM Some system metrics are automatically captured from your Compute Engine instances.
- For example, Compute Engine reports over 25 unique metrics for each virtual machine (VM) instance.

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring can access some instance metrics without the Monitoring agent, including CPU utilization, some disk traffic metrics, network traffic, and uptime information.
- Instead, we recommend that you use the Ops Agent for new Google Cloud workloads and eventually transition your existing Compute Engine VMs to use the Ops Agent.
- Virtual machine instances You can install the Monitoring agent on the following kinds of VM instances: Compute Engine instances.
- By default, the Monitoring agent collects disk, CPU, network, and process metrics.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.

