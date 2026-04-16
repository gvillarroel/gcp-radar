---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.875Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Ops Agent health checks"
feature_slug: "ops-agent-health-checks"
latest_feature_date: "2023-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "ops"
  - "agent"
  - "health"
  - "checks"
  - "performs"
  - "startup"
  - "writes"
  - "troubleshooting"
---

# Ops Agent health checks

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Ops Agent performs startup health checks and writes troubleshooting information when blocking conditions are detected.

## Extended Definition

The Ops Agent performs startup health checks and writes troubleshooting information when blocking conditions are detected.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- To find the status information for an Ops Agent managed by VM Extension Manager, see the following: Agent health checks Agent self logs .
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The general agent-diagnostics script and health checks might also be helpful.
- The general agent-diagnostics script and health checks might also be helpful.
- For troubleshooting information, see Agent diagnostics tool for automatic installation policies .
- For troubleshooting information, see Agent diagnostics tool for automatic installation policies .

### "Install the Ops Agent during VM creation \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshooting For information about troubleshooting agent installation and Ops Agent OS policies, see Manage VMs covered by the Ops Agent OS policy and Agent diagnostics tool for automatic installation policies .
- The Ops Agent OS policy checks every hour whether its covered VMs have the Ops Agent installed.
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
- A configuration policy is applied to a VM by using a mapping called an assignment ID , which looks like the following example: goog-ops-agent-v2-x86-template- 1-0-0 - ZONE An assignment ID for an Ops Agent OS policy consists of the following components: The name of the policy: "goog-ops-agent" A template for creating the policy: "v2-x86-template" A version string for the template.

