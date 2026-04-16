---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.948Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM Observability tab"
feature_slug: "compute-engine-vm-observability-tab"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "observability"
  - "tab"
  - "instance"
  - "details"
  - "include"
---

# Compute Engine VM Observability tab

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Compute Engine VM instance details include an Observability tab with logs and expanded visibility into CPU, disk, and network metrics.

## Extended Definition

Compute Engine VM instance details include an Observability tab with logs and expanded visibility into CPU, disk, and network metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Examples of monitored resources include Compute Engine instances and App Engine applications.
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create, view, modify, and delete VM extension policies: To create extension policies: compute.vmExtensionPolicies.create To view extension policies: compute.vmExtensionPolicies.list To view details of an extension policy: compute.vmExtensionPolicies.get To modify extension policies: compute.vmExtensionPolicies.update To delete extension policies: compute.vmExtensionPolicies.delete You might also be able to get these permissions with custom roles or other predefined roles .
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- For information about installing the Ops Agent, see the following: For Compute Engine instances, see Installing the Ops Agent .
- For more information about Compute Engine Arm VMs, see Creating and starting an Arm VM instance .
- The Ops Agent is the primary agent for collecting telemetry from your Compute Engine instances.

