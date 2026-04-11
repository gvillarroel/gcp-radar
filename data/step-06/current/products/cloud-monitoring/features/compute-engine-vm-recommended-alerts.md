---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.105Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM recommended alerts"
feature_slug: "compute-engine-vm-recommended-alerts"
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
  - "recommended"
  - "alerts"
  - "the"
  - "observability"
  - "tab"
---

# Compute Engine VM recommended alerts

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The VM Observability tab includes recommended pre-configured alerting policies for common host resource and error conditions.

## Extended Definition

The VM Observability tab includes recommended pre-configured alerting policies for common host resource and error conditions.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- October 09, 2023 Change When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy.
- Feature The fleetwide and per-instance Observability tabs on the Compute Engine VM instances page now include charts for GPU metrics the from NVIDIA Management Library (NVML).
- January 20, 2023 Change You can now use the Observability tab on the Compute Engine VM instances page to see the five virtual machines consuming the most of a resource.
- November 08, 2021 Feature You can now save a copy of a chart from the Observability tab on Compute Engine's VM instance details page to one of your custom dashboards.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.
- Install the Ops Agent by creating VM extension policies Create VM extension policies to automatically install and manage the Ops Agent on a fleet of Compute Engine virtual machines (VMs).

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Using the agent is optional but recommended for Compute Engine VM instances.
- Instead, we recommend that you use the Ops Agent for new Google Cloud workloads and eventually transition your existing Compute Engine VMs to use the Ops Agent.
- This guide explains how to install the Cloud Monitoring agent for Monitoring on Compute Engine and Amazon Elastic Compute Cloud (EC2) VMs.
- Compute Engine VM instances generally have the correct credentials by default.

