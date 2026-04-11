---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.556Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Chef Integration for Cloud Ops Agents"
feature_slug: "chef-integration-for-cloud-ops-agents"
latest_feature_date: "2021-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation"
keywords:
  - "chef"
  - "integration"
  - "for"
  - "ops"
  - "agents"
  - "can"
  - "install"
  - "and"
---

# Chef Integration for Cloud Ops Agents

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Chef can install and manage Google Cloud operations suite agents across Linux and Windows virtual machines.

## Extended Definition

Chef can install and manage Google Cloud operations suite agents across Linux and Windows virtual machines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Therefore, you can't stop or start the Ops Agent manually, and commands like the following don't work with the Ops Agent: Linux: sudo systemctl [stop start restart] Windows: Stop-Service , Start-Service , Restart-Service To stop or restart an Ops Agent managed by VM Extension Manager, you must uninstall the agent by deleting the extension policy.
- Install the Ops Agent with a custom configuration on all VMs To create a policy that installs the latest version of the Ops Agent on all VMs in a zone or globally, and provides custom configuration for the Ops Agent, do the following: Console To create a zonal policy, you can use the Google Cloud console.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.
- To pin to a major version, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version MAJOR VERSION. . " For example, to pin to the 1.x.x of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1. . " To install a specific version of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version version-number " For example: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1.0.1" You can delete the installation script after it runs successfully.

### "Install the Ops Agent by using automation tools \_|\_ Cloud Logging \_|\_\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to using the Google Cloud CLI or Terraform to create agent policies , you can use other automation tools to manage the Ops Agent across your fleet of Compute Engine VMs: Ansible by using the Ansible role, you can install and configure the agent across your fleet of Linux and Windows VMs.
- Install the Ops Agent to troubleshoot third-party applications walkthrough video for deploying and configuring the Ops Agent.
- Chef : by using the Chef cookbook, you can install and configure the agent across your fleet of Linux and Windows VMs.
- Home Documentation Observability Cloud Logging Guides Send feedback Install the Ops Agent by using automation tools Stay organized with collections Save and categorize content based on your preferences.

