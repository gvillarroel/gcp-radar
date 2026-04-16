---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.867Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM Observability detected integrations navigation"
feature_slug: "compute-engine-vm-observability-detected-integrations-navigation"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/integrations"
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "observability"
  - "detected"
  - "integrations"
  - "navigation"
  - "tab"
---

# Compute Engine VM Observability detected integrations navigation

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The VM Observability tab includes a Detected integrations section that links to dashboards for configured third-party integrations.

## Extended Definition

The VM Observability tab includes a Detected integrations section that links to dashboards for configured third-party integrations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/integrations](https://docs.cloud.google.com/monitoring/agent/integrations)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot shows an example of the Monitoring Integrations page: The Integrations page displays the following: A listing of how many Compute Engine VMs have the Ops Agent installed and how many GKE clusters have Managed Service for Prometheus enabled.
- To select integrations by deployment platform, click one of the following options: Kubernetes Engine Compute Engine To select integrations by installation status, click one of the following options: Available : shows the integrations you have not installed.
- These integrations let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine.
- The following screenshot shows an example of the details pane for a third-party integration for Compute Engine, with the Metrics tab selected: The Metrics tab shows a table of the metrics, if any, collected by the integration.

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.
- Metrics from an agent in your VM Some system metrics are automatically captured from your Compute Engine instances.
- For example, Compute Engine reports over 25 unique metrics for each virtual machine (VM) instance.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.

