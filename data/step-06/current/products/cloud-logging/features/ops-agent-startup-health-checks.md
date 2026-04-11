---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.540Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent startup health checks"
feature_slug: "ops-agent-startup-health-checks"
latest_feature_date: "2023-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation"
keywords:
  - "ops"
  - "agent"
  - "startup"
  - "health"
  - "checks"
  - "performs"
  - "to"
  - "detect"
---

# Ops Agent startup health checks

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent performs startup health checks to detect conditions that prevent correct operation.

## Extended Definition

Ops Agent performs startup health checks to detect conditions that prevent correct operation.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To find the status information for an Ops Agent managed by VM Extension Manager, see the following: Agent health checks Agent self logs .
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- If you use an extension policy to install the Ops Agent on a VM where another observability agent is already installed, then the policy installs the agent, but the agent fails to run because a conflict is detected.
- Verify that the Ops Agent configuration is valid You provided a custom configuration to the Ops Agent by creating or updating an extension policy, but the agent status is "not detected".

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- If you've installed and started the Ops Agent but the status remains Not detected , then the agent might not have started correctly or is unable to send metrics.
- If you've installed and started the Ops Agent but the status remains Not detected , then the agent might not have started correctly or is unable to send metrics.
- Copy-Item -Path "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml" -Destination "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.bak" Run the following PowerShell commands to remove your installed agent and to run the installation command: googet -noconfirm remove google-cloud-ops-agent googet -noconfirm install google-cloud-ops-agent List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates google-cloud-ops-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison google-cloud-ops-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s google-cloud-ops-agent WINDOWS List the available versions of the agent: googet available google-cloud-ops-agent Uninstall the agent To remove the Ops Agent and its configuration files, use the following instructions.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.

### "Install the Ops Agent by using automation tools \_|\_ Cloud Logging \_|\_\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/fleet-installation)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to using the Google Cloud CLI or Terraform to create agent policies , you can use other automation tools to manage the Ops Agent across your fleet of Compute Engine VMs: Ansible by using the Ansible role, you can install and configure the agent across your fleet of Linux and Windows VMs.
- Home Documentation Observability Cloud Logging Guides Send feedback Install the Ops Agent by using automation tools Stay organized with collections Save and categorize content based on your preferences.
- Install the Ops Agent to troubleshoot third-party applications walkthrough video for deploying and configuring the Ops Agent.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

