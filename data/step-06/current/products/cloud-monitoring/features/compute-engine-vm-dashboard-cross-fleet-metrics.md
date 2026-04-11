---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.137Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM dashboard cross-fleet metrics"
feature_slug: "compute-engine-vm-dashboard-cross-fleet-metrics"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "dashboard"
  - "cross"
  - "fleet"
  - "metrics"
  - "the"
---

# Compute Engine VM dashboard cross-fleet metrics

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Compute Engine VM Instances dashboard provides cross-fleet metrics and detailed CPU, disk, memory, and network views.

## Extended Definition

The Compute Engine VM Instances dashboard provides cross-fleet metrics and detailed CPU, disk, memory, and network views.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Install the Ops Agent by creating VM extension policies Create VM extension policies to automatically install and manage the Ops Agent on a fleet of Compute Engine virtual machines (VMs).
- You can install and manage the Ops Agent on a fleet of Compute Engine VMs globally or within a specific zone by using VM Extension Manager policies.
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- Compute Engine meta labels available during relabeling When the Ops Agent scrapes metrics, it includes a set of meta labels whose values are based on the configuration of the Compute Engine VM on which the agent is running.
- The following meta labels are available on targets for you to use in the relabel configs section: meta gce instance id : the numeric ID of the Compute Engine instance (local) meta gce instance name : the name of the Compute Engine instance (local); the Ops Agent automatically places this value in the mutable instance name label on your metrics. meta gce machine type : full or partial URL of the machine type of the instance; the Ops Agent automatically places this value in the mutable machine type label on your metrics. meta gce metadata NAME : each metadata item of the instance meta gce network : the network URL of the instance meta gce private ip : the private IP address of the instance meta gce interface ipv4 NAME : IPv4 address of each named interface meta gce project : the Google Cloud project in which the instance is running (local) meta gce public ip : the public IP address of the instance, if present meta gce tags : comma separated list of instance tags meta gce zone : the Compute Engine zone URL in which the instance is running The values of these labels are set when the Ops Agent starts.
- This document describes the configuration and use of an Ops Agent metrics receiver that you can use to collect metrics from Prometheus on Compute Engine.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.
- Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- You can install the Ops Agent on one or more Compute Engine VMs by using the Google Cloud console from the Cloud Monitoring or Compute Engine pages.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.

