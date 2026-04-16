---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.984Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Monitoring agent 6.0.0"
feature_slug: "stackdriver-monitoring-agent-6-0-0"
latest_feature_date: "2020-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
keywords:
  - "stackdriver"
  - "monitoring"
  - "agent"
  - "version"
  - "available"
  - "centos"
  - "ubuntu"
  - "16"
---

# Stackdriver Monitoring agent 6.0.0

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Monitoring agent version 6.0.0 is available for CentOS 7, Ubuntu 16.04 and 18.04, Ubuntu Minimal 16.04 and 18.04, and Amazon Linux AMI; Stackdriver Monitoring agent version 6.0.0 introduces a new release built on a fork of collectd 5.8.1.

## Extended Definition

Stackdriver Monitoring agent version 6.0.0 is available for CentOS 7, Ubuntu 16.04 and 18.04, Ubuntu Minimal 16.04 and 18.04, and Amazon Linux AMI; Stackdriver Monitoring agent version 6.0.0 introduces a new release built on a fork of collectd 5.8.1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)

## Supporting Pages

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.
- The following example creates a file called config.yaml that contains a policy that matches the label applied in the previous step: cat > config.yaml << EOF agentsRule: packageState: installed version: 2 .47.0 instanceFilter: inclusionLabels: - labels: KEY : VALUE EOF For more information about describing GA agent policies, see Configuration files for agent policies .
- Replace beta agent-upgrade policies To replace beta agent policies that upgrade the agent, you have the following options: To make sure the Ops Agent is always up to date, use OS Patch to create and run an OS Patch job that keeps the agent at the latest version.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Copy-Item -Path "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml" -Destination "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.bak" Run the following PowerShell commands to remove your installed agent and to run the installation command: googet -noconfirm remove google-cloud-ops-agent googet -noconfirm install google-cloud-ops-agent List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates google-cloud-ops-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison google-cloud-ops-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s google-cloud-ops-agent WINDOWS List the available versions of the agent: googet available google-cloud-ops-agent Uninstall the agent To remove the Ops Agent and its configuration files, use the following instructions.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The Ops Agent is supported for Arm VMs on the following OS images: Debian 12 (Bookworm): Ops Agent version 2.44.0 Debian 13 (Trixie): Ops Agent version 2.61.0 Ubuntu 22.04 LTS (Jammy Jellyfish): Ops Agent version 2.42.0 Ubuntu 24.04 LTS (Noble Numbat): Ops Agent version 2.47.0 Ubuntu 25.10 (Questing Quokka): Ops Agent version 2.62.0 RHEL 9: Ops Agent version 2.40.0 RHEL 10: Ops Agent version 2.64.0 Rocky Linux 8: Ops Agent version 2.51.0 Rocky Linux 9: Ops Agent version 2.40.0 Rocky Linux 10: Ops Agent version 2.64.0 CentOS Stream 10: Ops Agent version 2.64.0 SLES 15: Ops Agent version 2.43.0 The Ops Agent is supported on a subset of the images supported by Compute Engine.
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- Managed Service for Apache Spark instances prior to image version 2.2 have pre-installed legacy Monitoring agents with service-specific configurations.
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).

