---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.137Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Agent-based VM memory and disk analysis"
feature_slug: "agent-based-vm-memory-and-disk-analysis"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "agent"
  - "based"
  - "vm"
  - "memory"
  - "and"
  - "disk"
  - "analysis"
  - "vms"
---

# Agent-based VM memory and disk analysis

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

VMs with the Monitoring agent installed receive detailed memory and disk analysis in the Compute Engine VM Instances dashboard.

## Extended Definition

VMs with the Monitoring agent installed receive detailed memory and disk analysis in the Compute Engine VM Instances dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To change the configuration of the Ops Agent installed on all VMs by a policy, use the following command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent=" OPS AGENT CONFIG PATH " Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To change the configuration of the Ops Agent installed on all VMs in a zone by a policy, use the following command: gcloud beta compute zone-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --zone= ZONE \ --extensions=ops-agent --config-from-file=ops-agent=" OPS AGENT CONFIG PATH " Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To change the version of the Ops Agent installed on all VMs by a global policy, use the following command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --version=ops-agent= VERSION Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Current number of GPU memory bytes used, by state Maximum amount of GPU memory, in bytes, that has been allocated by the process Percentage of time in the process lifetime that one or more kernels has been running on the GPU Percentage of time, since last sample, the GPU has been active interface Linux only Total count of network errors Total count of packets sent over the network Total number of bytes sent over the network memory Memory usage, with label for state (buffered, cached, free, slab, used) Memory usage percent, with label for state (buffered, cached, free, slab, used) network TCP connection count, with labels for port and TCP state swap Swap I/O operations, with label for direction Swap bytes used, with labels for device and state Swap percent used, with labels for device and state pagefile Windows only Current percentage of pagefile used by state processes Processes count, with label for state Processes forked count Per-process disk read I/O, with labels for process name + others Per-process disk write I/O, with labels for process name + others Per-process RSS usage, with labels for process name + others Per-process VM usage, with labels for process name + others About the gpu metrics: The hostmetrics receiver collects metrics reported by the NVIDIA Management Library (NVML) as agent.googleapis.com/gpu metrics.
- Do not install Ops Agent versions 2.39.0 and 2.40.0 on VMs with attached GPUs.
- The valid types are: files : Collect logs by tailing files on disk. fluent forward (Ops Agent versions 2.12.0 and later): Collect logs sent via the Fluent Forward protocol over TCP. tcp (Ops Agent versions 2.3.0 and later): Collect logs in JSON format by listening to a TCP port.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Configure the Ops Agent Stay organized with collections Save and categorize content based on your preferences.

### "Install the Ops Agent during VM creation \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
- Troubleshooting For information about troubleshooting agent installation and Ops Agent OS policies, see Manage VMs covered by the Ops Agent OS policy and Agent diagnostics tool for automatic installation policies .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Install the Ops Agent during VM creation Stay organized with collections Save and categorize content based on your preferences.
- If you need to install a previous version of the Ops Agent, you can uninstall the Ops Agent on VMs covered by the Ops Agent OS policy and then install a specific version of the agent .

