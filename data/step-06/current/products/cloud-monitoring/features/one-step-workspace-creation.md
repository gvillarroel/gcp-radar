---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.144Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "One-step workspace creation"
feature_slug: "one-step-workspace-creation"
latest_feature_date: "2019-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "one"
  - "step"
  - "workspace"
  - "creation"
  - "stackdriver"
  - "is"
  - "operation"
---

# One-step workspace creation

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Stackdriver Workspace creation is a one-step operation.

## Extended Definition

Stackdriver Workspace creation is a one-step operation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- May 02, 2019 Feature Stackdriver Workspace creation is now a one-step operation.
- If you're using Legacy Stackdriver, then you must migrate to Stackdriver Kubernetes Engine Monitoring before Legacy Stackdriver is decommissioned.
- The restriction that you can view the metrics for a project from only one Workspace is being eliminated.
- February 24, 2020 Feature Stackdriver Monitoring agent version 6.0.0 is now available for the following distributions: CentOS 7 Ubuntu LTS 16.04 (Xenial Xerus) and Ubuntu LTS 18.04 (Bionic Beaver) Ubuntu Minimal LTS 16.04 (Xenial Xerus) and Ubuntu Minimal LTS 18.04 (Bionic Beaver) Amazon Linux AMI (except Amazon Linux 2.0 AMI) Change Stackdriver Monitoring is available exclusively in the Cloud Console.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- Copy-Item -Path "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml" -Destination "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.bak" Run the following PowerShell commands to remove your installed agent and to run the installation command: googet -noconfirm remove google-cloud-ops-agent googet -noconfirm install google-cloud-ops-agent List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates google-cloud-ops-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison google-cloud-ops-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s google-cloud-ops-agent WINDOWS List the available versions of the agent: googet available google-cloud-ops-agent Uninstall the agent To remove the Ops Agent and its configuration files, use the following instructions.
- To verify that the agent is working as expected, run: sudo systemctl status google-cloud-ops-agent" " Verify that the components "Logging Agent" and "Metrics Agent" are running.

### "Install the Ops Agent during VM creation \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If you create a VM and automatically install the Ops Agent in a zone where an Ops Agent OS policy assignment already exists, then the VM-creation process creates the VM and assigns it the Ops Agent OS policy label.
- A configuration policy is applied to a VM by using a mapping called an assignment ID , which looks like the following example: goog-ops-agent-v2-x86-template- 1-0-0 - ZONE An assignment ID for an Ops Agent OS policy consists of the following components: The name of the policy: "goog-ops-agent" A template for creating the policy: "v2-x86-template" A version string for the template.
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.
- When you install the Ops Agent automatically for the first time in a zone, if you don't have VM Manager enabled for your Google Cloud project, then the VM-creation process does the following: Enables VM Manager to operate in restricted mode .

