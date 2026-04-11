---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.559Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ansible Installation for Google Cloud Ops Agent"
feature_slug: "ansible-installation-for-google-cloud-ops-agent"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "ansible"
  - "installation"
  - "for"
  - "ops"
  - "agent"
  - "can"
  - "install"
  - "the"
---

# Ansible Installation for Google Cloud Ops Agent

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ansible can install the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines.

## Extended Definition

Ansible can install the Google Cloud Ops Agent on Linux and Windows Compute Engine virtual machines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- To pin to a major version, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version MAJOR VERSION. . " For example, to pin to the 1.x.x of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1. . " To install a specific version of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version version-number " For example: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1.0.1" You can delete the installation script after it runs successfully.
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- To install a specific version of the agent, run: sudo bash add-google-cloud-ops-agent-repo.sh --also-install \ --version= MAJOR VERSION.MINOR VERSION.PATCH VERSION You can delete the installation script after it runs successfully.

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies-overview)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can create a policy for a Google Cloud project that governs existing and new VMs associated with that Google Cloud project, ensuring proper installation and uninstallation of the Ops Agent on those VMs.
- You can have beta and GA agent policies that apply to the same VM, but you need to ensure that the policies don't have conflicting purposes, for example, a beta policy that installs the Ops Agent and a GA policy that uninstalls the Ops Agent.
- For example, if the latest version is 2.64.0, then you can use an agent-policy YAML that resembles the following: agentsRule : packageState : installed version : 2.64.0 instanceFilter : [ ... ] Apply the policy to VMs in each zone.
- The ops-agent-policy Terraform module Support for the legacy Monitoring agent and Logging agent Beta agent policies can manage the legacy Monitoring agent and Logging agent as well as the Ops Agent.

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- This label identifies the policy, template, and version: Label key, the identifier for the policy: goog-ops-agent-policy Label value, the policy template and version: v2-x86-template- 1-0-0 When you create a VM in the Google Cloud console, you can select the Install Ops Agent for Monitoring and Logging checkbox.
- Troubleshooting For information about troubleshooting agent installation and Ops Agent OS policies, see Manage VMs covered by the Ops Agent OS policy and Agent diagnostics tool for automatic installation policies .
- This document describes how the Google Cloud console can automatically install the Ops Agent for you when you create a VM instance.
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.

