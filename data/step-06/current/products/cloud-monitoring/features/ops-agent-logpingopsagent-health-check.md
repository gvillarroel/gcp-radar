---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.831Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent LogPingOpsAgent health check"
feature_slug: "ops-agent-logpingopsagent-health-check"
latest_feature_date: "2024-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "ops"
  - "agent"
  - "logpingopsagent"
  - "health"
  - "check"
  - "writes"
  - "informational"
  - "payload"
---

# Ops Agent LogPingOpsAgent health check

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This health check writes an informational payload to the ops-agent-health log every 10 minutes to verify log delivery.

## Extended Definition

This health check writes an informational payload to the ops-agent-health log every 10 minutes to verify log delivery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- To find the status information for an Ops Agent managed by VM Extension Manager, see the following: Agent health checks Agent self logs .
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.

### "Install the Ops Agent during VM creation \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.
- This label identifies the policy, template, and version: Label key, the identifier for the policy: goog-ops-agent-policy Label value, the policy template and version: v2-x86-template- 1-0-0 When you create a VM in the Google Cloud console, you can select the Install Ops Agent for Monitoring and Logging checkbox.
- You then create instance-3 and instance-4 in the us-east1-b zone. instance-1 , instance-2 , and instance-3 had the Install Ops Agent for Monitoring and Logging checkbox selected during creation.
- The Ops Agent OS policy checks every hour whether its covered VMs have the Ops Agent installed.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- The general agent-diagnostics script and health checks might also be helpful.
- The general agent-diagnostics script and health checks might also be helpful.
- If you don't see a green checkmark beside the entry, then there is an agent upgrade available, based on the detected operating system of your VM.
- If you don't see a green checkmark beside the entry, then there is an agent upgrade available, based on the detected operating system of your VM.

