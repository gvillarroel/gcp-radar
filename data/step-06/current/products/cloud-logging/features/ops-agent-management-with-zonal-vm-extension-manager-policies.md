---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.518Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent management with zonal VM Extension Manager policies"
feature_slug: "ops-agent-management-with-zonal-vm-extension-manager-policies"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies"
keywords:
  - "ops"
  - "agent"
  - "management"
  - "with"
  - "zonal"
  - "vm"
  - "extension"
  - "manager"
---

# Ops Agent management with zonal VM Extension Manager policies

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent installation and lifecycle management can be automated for virtual machines in a specified zone with VM Extension Manager extension policies.

## Extended Definition

Ops Agent installation and lifecycle management can be automated for virtual machines in a specified zone with VM Extension Manager extension policies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 282
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- Therefore, you can't stop or start the Ops Agent manually, and commands like the following don't work with the Ops Agent: Linux: sudo systemctl [stop start restart] Windows: Stop-Service , Start-Service , Restart-Service To stop or restart an Ops Agent managed by VM Extension Manager, you must uninstall the agent by deleting the extension policy.
- Restart an Ops Agent installed by an extension policy When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- Home Documentation Observability Cloud Logging Guides Send feedback Install and manage the Ops Agent by using VM Extension Manager policies Stay organized with collections Save and categorize content based on your preferences.

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- When you create instance-1 , VM Manager creates an Ops Agent OS policy for the us-central1-a zone and an OS policy assignment with the ID goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a .
- When you use the Google Cloud console to create a VM with the Ops Agent installed, the VM Manager adds another label to the VM, which looks like goog-ops-agent-policy:v2-x86-template- 1-0-0 .
- When you create instance-3 , VM Manager creates an Ops Agent OS policy for the us-east1-b zone and an OS policy assignment with the ID goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b .
- By default, when VM Manager is enabled because you've created a VM with the Ops Agent automatically installed, VM Manager is enabled in the limited mode.

### Use agent policies (beta) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For new policies, we recommend that you use VM Extension Manager policies for fleet-wide installation and management of the Ops Agent.
- With VM extension policies, you can provide and manage custom configuration for the Ops Agent and manage version control, including auto-upgrades and version pinning.
- Here is an example of a phased rollout plan for Debian 11 VMs in a project called my project : Phase 1: Create a policy named ops-agents-policy-safe-rollout to install the Ops Agent on all VMs with the labels env=test and app=myproduct . gcloud beta compute instances \ ops - agents policies create ops - agents - policy - safe - rollout \ -- agent - rules = "type=ops-agent,version=current-major,package-state=installed,enable-autoupgrade=true" \ -- os - types = short - name = debian , version = 11 \ -- group - labels = env = test , app = myproduct \ -- project = my project For more information about specifying the operating system, see gcloud beta compute instances ops-agents policies create .
- Agent policies use the VM Manager suite of tools in Compute Engine to manage OS policies , which can automate the deployment and maintenance of software configurations like the Google Cloud Observability agents: the Ops Agent, the legacy Monitoring agent, and the legacy Logging agent.

