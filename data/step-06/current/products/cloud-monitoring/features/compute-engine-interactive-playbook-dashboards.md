---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.812Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine interactive playbook dashboards"
feature_slug: "compute-engine-interactive-playbook-dashboards"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
keywords:
  - "compute"
  - "engine"
  - "interactive"
  - "playbook"
  - "dashboards"
  - "these"
  - "provide"
  - "guided"
---

# Compute Engine interactive playbook dashboards

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

These dashboards provide guided troubleshooting for Compute Engine host events, autoscaling, health-check, resource availability, and VM performance issues.

## Extended Definition

These dashboards provide guided troubleshooting for Compute Engine host events, autoscaling, health-check, resource availability, and VM performance issues.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The following meta labels are available on targets for you to use in the relabel configs section: meta gce instance id : the numeric ID of the Compute Engine instance (local) meta gce instance name : the name of the Compute Engine instance (local); the Ops Agent automatically places this value in the mutable instance name label on your metrics. meta gce machine type : full or partial URL of the machine type of the instance; the Ops Agent automatically places this value in the mutable machine type label on your metrics. meta gce metadata NAME : each metadata item of the instance meta gce network : the network URL of the instance meta gce private ip : the private IP address of the instance meta gce interface ipv4 NAME : IPv4 address of each named interface meta gce project : the Google Cloud project in which the instance is running (local) meta gce public ip : the public IP address of the instance, if present meta gce tags : comma separated list of instance tags meta gce zone : the Compute Engine zone URL in which the instance is running The values of these labels are set when the Ops Agent starts.
- These meta labels record information about the Compute Engine instance on which the Ops Agent is running.
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- You can use the following pattern to add labels staticLabel1 and staticLabel2 to all ingested metrics: metric relabel configs: - source labels: [ address ] action: replace replacement: ' STATIC VALUE 1 ' target label: staticLabel1 - source labels: [ address ] action: replace replacement: ' STATIC VALUE 2 ' target label: staticLabel2 The following version of the Prometheus receiver for the JSON Exporter example uses these configuration patterns to do the following: Set the zone label from the value of the meta gce zone meta label provided by the Ops Agent.

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- Metrics from an agent in your VM Some system metrics are automatically captured from your Compute Engine instances.
- For example, Compute Engine reports over 25 unique metrics for each virtual machine (VM) instance.

