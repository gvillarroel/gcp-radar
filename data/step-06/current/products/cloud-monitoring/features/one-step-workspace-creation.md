---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.003Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "One-step workspace creation"
feature_slug: "one-step-workspace-creation"
latest_feature_date: "2019-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest"
keywords:
  - "one"
  - "step"
  - "workspace"
  - "creation"
  - "stackdriver"
  - "operation"
---

# One-step workspace creation

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Workspace creation is a one-step operation.

## Extended Definition

Stackdriver Workspace creation is a one-step operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest](https://docs.cloud.google.com/python/docs/reference/monitoring/latest)

## Supporting Pages

### "Install the Ops Agent during VM creation \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-iam-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.
- When you install the Ops Agent automatically for the first time in a zone, if you don't have VM Manager enabled for your Google Cloud project, then the VM-creation process does the following: Enables VM Manager to operate in restricted mode .
- Create a VM with automatic installation of the Ops Agent To install the Ops Agent automatically during VM creation and apply the Ops Agent OS policy assignment to the VM, do the following: Grant roles to your user account.
- If you create a VM and automatically install the Ops Agent in a zone where an Ops Agent OS policy assignment already exists, then the VM-creation process creates the VM and assigns it the Ops Agent OS policy label.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Copy-Item -Path "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml" -Destination "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.bak" Run the following PowerShell commands to remove your installed agent and to run the installation command: googet -noconfirm remove google-cloud-ops-agent googet -noconfirm install google-cloud-ops-agent List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates google-cloud-ops-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison google-cloud-ops-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s google-cloud-ops-agent WINDOWS List the available versions of the agent: googet available google-cloud-ops-agent Uninstall the agent To remove the Ops Agent and its configuration files, use the following instructions.
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.

### "Python Client for Stackdriver Monitoring \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest](https://docs.cloud.google.com/python/docs/reference/monitoring/latest)
- Source ID: `site-python-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-monitoring Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-monitoring Next Steps Read the Client Library Documentation for Stackdriver Monitoring to see other available methods on the client.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 Stackdriver Monitoring : collects metrics, events, and metadata from Google Cloud, Amazon Web Services (AWS), hosted uptime probes, and application instrumentation.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Stackdriver Monitoring Stay organized with collections Save and categorize content based on your preferences.
- Client Library Documentation Product Documentation Quick Start In order to use this library, you first need to go through the following steps: Select or create a Cloud Platform project.

