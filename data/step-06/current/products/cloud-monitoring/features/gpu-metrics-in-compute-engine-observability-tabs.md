---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.808Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GPU metrics in Compute Engine Observability tabs"
feature_slug: "gpu-metrics-in-compute-engine-observability-tabs"
latest_feature_date: "2024-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
keywords:
  - "gpu"
  - "metrics"
  - "compute"
  - "engine"
  - "observability"
  - "tabs"
  - "vm"
  - "instances"
---

# GPU metrics in Compute Engine Observability tabs

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Compute Engine VM instances Observability tabs include GPU charts based on NVIDIA Management Library metrics for eligible GPU-attached VMs.

## Extended Definition

The Compute Engine VM instances Observability tabs include GPU charts based on NVIDIA Management Library metrics for eligible GPU-attached VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)

## Supporting Pages

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from an agent in your VM Some system metrics are automatically captured from your Compute Engine instances.
- To collect additional system metrics from your Compute Engine instances, install an agent.
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute Engine MIGs (Regional and zonal) Traffic : instance/network/received bytes count Saturation : instance/cpu/utilization Dataproc Metastore service (Regional and multi-regional) Traffic : The metric depends on whether the service is single- or multi-region: Single: service/request count .
- When both the L7 and L4 traffic metrics are available, the L7 metrics appear on the summary pages but the traffic chart contains tabs, which let you view both metrics.
- For some golden signals, Google Cloud Observability has a prioritized list of source metrics.
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.
- For information about installing the Ops Agent, see the following: For Compute Engine instances, see Installing the Ops Agent .
- The Ops Agent is the primary agent for collecting telemetry from your Compute Engine instances.

