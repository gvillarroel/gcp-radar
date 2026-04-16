---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.978Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM dashboard cross-fleet metrics"
feature_slug: "compute-engine-vm-dashboard-cross-fleet-metrics"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "dashboard"
  - "cross"
  - "fleet"
  - "metrics"
  - "instances"
---

# Compute Engine VM dashboard cross-fleet metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Compute Engine VM Instances dashboard provides cross-fleet metrics and detailed CPU, disk, memory, and network views.

## Extended Definition

The Compute Engine VM Instances dashboard provides cross-fleet metrics and detailed CPU, disk, memory, and network views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.
- For information about installing the Ops Agent, see the following: For Compute Engine instances, see Installing the Ops Agent .
- The Ops Agent is the primary agent for collecting telemetry from your Compute Engine instances.

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Metrics from an agent in your VM Some system metrics are automatically captured from your Compute Engine instances.
- To collect additional system metrics from your Compute Engine instances, install an agent.
- Metrics from third-party monitoring applications Cloud Monitoring provides integrations that let you collect telemetry from applications such as Apache Web Server, MySQL, Redis, and others for deployments running on Compute Engine and Google Kubernetes Engine: When using Compute Engine, third-party telemetry is collected by the Ops Agent .
- However, these automatically collected Compute Engine metrics might not provide you with all the information that you need to monitor your services.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Install the Ops Agent by creating VM extension policies Create VM extension policies to automatically install and manage the Ops Agent on a fleet of Compute Engine virtual machines (VMs).
- You can install and manage the Ops Agent on a fleet of Compute Engine VMs globally or within a specific zone by using VM Extension Manager policies.
- To determine the version of the installed agent, hover over the Ops Agent label on the Compute Engine or Monitoring dashboard.

