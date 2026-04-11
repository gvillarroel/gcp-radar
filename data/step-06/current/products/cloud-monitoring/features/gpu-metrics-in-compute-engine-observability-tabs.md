---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.089Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GPU metrics in Compute Engine Observability tabs"
feature_slug: "gpu-metrics-in-compute-engine-observability-tabs"
latest_feature_date: "2024-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
keywords:
  - "gpu"
  - "metrics"
  - "in"
  - "compute"
  - "engine"
  - "observability"
  - "tabs"
  - "the"
---

# GPU metrics in Compute Engine Observability tabs

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Compute Engine VM instances Observability tabs include GPU charts based on NVIDIA Management Library metrics for eligible GPU-attached VMs.

## Extended Definition

The Compute Engine VM instances Observability tabs include GPU charts based on NVIDIA Management Library metrics for eligible GPU-attached VMs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)

## Supporting Pages

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- If the following scenario applies to you, then you might not have the proper credentials and must complete the Authorize the Monitoring agent procedures: Running very old Compute Engine instances or Compute Engine instances created without the default credentials.
- Instead, we recommend that you use the Ops Agent for new Google Cloud workloads and eventually transition your existing Compute Engine VMs to use the Ops Agent.
- This guide explains how to install the Cloud Monitoring agent for Monitoring on Compute Engine and Amazon Elastic Compute Cloud (EC2) VMs.
- To check if you have the proper credentials, run the Verifying Compute Engine credentials procedures.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.
- Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- If you are running very old Compute Engine instances or if you created Compute Engine instances without the default credentials, then you might not have the proper credentials.
- You can install the Ops Agent on one or more Compute Engine VMs by using the Google Cloud console from the Cloud Monitoring or Compute Engine pages.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Feature The fleetwide and per-instance Observability tabs on the Compute Engine VM instances page now include charts for GPU metrics the from NVIDIA Management Library (NVML).
- To view the GPU charts for a VM instance, select Compute Engine > VM instances , click on the name of a VM instance, and then select Observability .
- November 17, 2023 Feature Observability for Google Kubernetes Engine: The Observability tab for a GKE cluster adds a dashboard for GPU metrics.
- To view the fleetwide GPU charts, select Compute Engine > VM instances > Observability .

