---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.348Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Automatic Ops Agent installation during VM creation"
feature_slug: "automatic-ops-agent-installation-during-vm-creation"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
keywords:
  - "automatic"
  - "ops"
  - "agent"
  - "installation"
  - "during"
  - "vm"
  - "creation"
  - "console"
---

# Automatic Ops Agent installation during VM creation

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console can automatically install and maintain the Ops Agent when a VM is created.

## Extended Definition

The Google Cloud console can automatically install and maintain the Ops Agent when a VM is created.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a VM with automatic installation of the Ops Agent To install the Ops Agent automatically during VM creation and apply the Ops Agent OS policy assignment to the VM, do the following: Grant roles to your user account.
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.
- When you install the Ops Agent automatically for the first time in a zone, if you don't have VM Manager enabled for your Google Cloud project, then the VM-creation process does the following: Enables VM Manager to operate in restricted mode .
- If you create a VM and automatically install the Ops Agent in a zone where an Ops Agent OS policy assignment already exists, then the VM-creation process creates the VM and assigns it the Ops Agent OS policy label.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the agent automatically during VM creation For more information, see Install the Ops Agent during VM creation .
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- Download and run the agent-installation script by using the following commands: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh sudo bash add-google-cloud-ops-agent-repo.sh --also-install After it is installed, the agent is started automatically.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Agents installed by a VM Manager OS Config policy, which includes the following: Ops Agent installed by using the Google Cloud console during VM creation .
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- The following sections show how to manage the Ops Agent to do the following: Update the pinned version of the agent on all VMs Modify the configuration of the Ops Agent on all VMs Update the pinned version of the Ops Agent on all VMs in a zone To change the pinned version of the Ops Agent on all VMs in a zone, do the following: Console To create a zonal policy, you can use the Google Cloud console.
- To determine if the Ops Agent was installed by the extension policy, use one of the following to look for log entries from the guest agent: Logs Explorer In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

