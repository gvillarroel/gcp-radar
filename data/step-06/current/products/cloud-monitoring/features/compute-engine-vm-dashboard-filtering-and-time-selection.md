---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.137Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM dashboard filtering and time selection"
feature_slug: "compute-engine-vm-dashboard-filtering-and-time-selection"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "dashboard"
  - "filtering"
  - "and"
  - "time"
  - "selection"
---

# Compute Engine VM dashboard filtering and time selection

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Compute Engine VM Instances dashboard supports filtering VMs and changing the inspection time window with selectors and in-chart selection.

## Extended Definition

The Compute Engine VM Instances dashboard supports filtering VMs and changing the inspection time window with selectors and in-chart selection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- July 30, 2024 Feature You can now troubleshoot Compute Engine issues involving host events, MIG autoscaling and health-check failures, resource-availability errors, and VM performance by using the new "interactive playbook" dashboards in Cloud Monitoring.
- August 13, 2020 Feature The new, out-of-the-box Infrastructure Summary dashboard for Compute Engine VMs provides a single-pane-of-glass view into your VM fleet and load balancers.
- October 09, 2023 Change When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy.
- Feature The fleetwide and per-instance Observability tabs on the Compute Engine VM instances page now include charts for GPU metrics the from NVIDIA Management Library (NVML).

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.
- Install the Ops Agent by creating VM extension policies Create VM extension policies to automatically install and manage the Ops Agent on a fleet of Compute Engine virtual machines (VMs).
- To diagnose and fix this condition, do the following: Verify that the VM is using one of the operating systems supported for the Compute Engine guest environment.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.

