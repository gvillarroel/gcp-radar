---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.105Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM Observability disk and network charts"
feature_slug: "compute-engine-vm-observability-disk-and-network-charts"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "observability"
  - "disk"
  - "and"
  - "network"
  - "charts"
---

# Compute Engine VM Observability disk and network charts

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Observability tab on the VM instances page includes expanded disk and network chart coverage.

## Extended Definition

The Observability tab on the VM instances page includes expanded disk and network chart coverage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Feature The fleetwide and per-instance Observability tabs on the Compute Engine VM instances page now include charts for GPU metrics the from NVIDIA Management Library (NVML).
- To view the GPU charts for a VM instance, select Compute Engine > VM instances , click on the name of a VM instance, and then select Observability .
- November 12, 2020 Change Compute Engine's VM instance details page now displays "Memory Utilization" and "Disk Space Utilization" charts.
- Compute Engine cross-fleet metrics and detail views specific to CPU, Disk, Memory, and Network are now available.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.
- Install the Ops Agent by creating VM extension policies Create VM extension policies to automatically install and manage the Ops Agent on a fleet of Compute Engine virtual machines (VMs).
- To diagnose and fix this condition, do the following: Verify that the VM is using one of the operating systems supported for the Compute Engine guest environment.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For these VMs, Monitoring can access some metrics from the VM's hypervisor without the agent, including CPU utilization, some disk traffic metrics, network traffic, and uptime.
- Instead, we recommend that you use the Ops Agent for new Google Cloud workloads and eventually transition your existing Compute Engine VMs to use the Ops Agent.
- This guide explains how to install the Cloud Monitoring agent for Monitoring on Compute Engine and Amazon Elastic Compute Cloud (EC2) VMs.
- If the following scenario applies to you, then you might not have the proper credentials and must complete the Authorize the Monitoring agent procedures: Running very old Compute Engine instances or Compute Engine instances created without the default credentials.

