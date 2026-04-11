---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.144Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Monitoring agent on Ubuntu 18.04"
feature_slug: "stackdriver-monitoring-agent-on-ubuntu-18-04"
latest_feature_date: "2019-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
keywords:
  - "stackdriver"
  - "monitoring"
  - "agent"
  - "on"
  - "ubuntu"
  - "18"
  - "04"
  - "the"
---

# Stackdriver Monitoring agent on Ubuntu 18.04

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Stackdriver Monitoring agent supports Ubuntu 18.04 LTS.

## Extended Definition

The Stackdriver Monitoring agent supports Ubuntu 18.04 LTS.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)

## Supporting Pages

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Repository changed its 'Origin' value (Linux) You might see an error message similar to the following when upgrading the agent, installing the agent, or running apt-get update on Debian/Ubuntu Linux: E : Repository ' https : //packages.cloud.google.com/apt google-cloud-monitoring-buster-all InRelease' changed its 'Origin' value from 'google-cloud-monitoring-buster' to 'namespaces/cloud-ops-agents-artifacts/repositories/google-cloud-monitoring-buster-all' E : Repository ' https : //packages.cloud.google.com/apt google-cloud-monitoring-buster-all InRelease' changed its 'Label' value from 'google-cloud-monitoring-buster' to 'namespaces/cloud-ops-agents-artifacts/repositories/google-cloud-monitoring-buster-all' This message indicates that the package repository cache may have diverged from its source.
- For a Linux VM, use the following command: sudo service stackdriver-agent status If the agent isn't running, you might need to restart it using the following command: sudo service stackdriver-agent restart If the restart fails, and the log output shows "Disabled via metadata", you are likely running an image from Google Cloud Marketplace , where the Monitoring agent is disabled by default.
- For example, on Linux, you can create the following crontab entry to check the agent status every 5 minutes: /5 /bin/pidof stackdriver-collectd >/dev/null 2>&1 /usr/sbin/service stackdriver-agent restart >/dev/null 2>&1 Known issues The following sections describe issues known to the Monitoring agent.
- Verify that the agent service is running on your VM instance: For a Windows VM, use the following PowerShell command: Get-Service -Name StackdriverMonitoring Search for a service called Stackdriver Monitoring .

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Overview of agent policies for the Ops Agent Stay organized with collections Save and categorize content based on your preferences.
- The ops-agent-policy Terraform module Support for the legacy Monitoring agent and Logging agent Beta agent policies can manage the legacy Monitoring agent and Logging agent as well as the Ops Agent.
- Monitoring agent maps to agent type metrics . ‡ The Monitoring agent is not supported on rhel-7-9-sap-ha , rhel-8-2-sap-ha , or rhel-8-4-sap-ha .

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates stackdriver-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison stackdriver-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s stackdriver-agent WINDOWS Installing earlier versions of the agent on Windows is not supported.

