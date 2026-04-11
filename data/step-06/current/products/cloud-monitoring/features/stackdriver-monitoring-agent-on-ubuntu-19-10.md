---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.141Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Monitoring agent on Ubuntu 19.10"
feature_slug: "stackdriver-monitoring-agent-on-ubuntu-19-10"
latest_feature_date: "2020-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
keywords:
  - "stackdriver"
  - "monitoring"
  - "agent"
  - "on"
  - "ubuntu"
  - "19"
  - "10"
  - "version"
---

# Stackdriver Monitoring agent on Ubuntu 19.10

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Stackdriver Monitoring agent version 6.0.0 is available for Ubuntu 19.10.

## Extended Definition

Stackdriver Monitoring agent version 6.0.0 is available for Ubuntu 19.10.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- Copy-Item -Path "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml" -Destination "C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.bak" Run the following PowerShell commands to remove your installed agent and to run the installation command: googet -noconfirm remove google-cloud-ops-agent googet -noconfirm install google-cloud-ops-agent List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates google-cloud-ops-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison google-cloud-ops-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s google-cloud-ops-agent WINDOWS List the available versions of the agent: googet available google-cloud-ops-agent Uninstall the agent To remove the Ops Agent and its configuration files, use the following instructions.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Repository changed its 'Origin' value (Linux) You might see an error message similar to the following when upgrading the agent, installing the agent, or running apt-get update on Debian/Ubuntu Linux: E : Repository ' https : //packages.cloud.google.com/apt google-cloud-monitoring-buster-all InRelease' changed its 'Origin' value from 'google-cloud-monitoring-buster' to 'namespaces/cloud-ops-agents-artifacts/repositories/google-cloud-monitoring-buster-all' E : Repository ' https : //packages.cloud.google.com/apt google-cloud-monitoring-buster-all InRelease' changed its 'Label' value from 'google-cloud-monitoring-buster' to 'namespaces/cloud-ops-agents-artifacts/repositories/google-cloud-monitoring-buster-all' This message indicates that the package repository cache may have diverged from its source.
- For a Linux VM, use the following command: sudo service stackdriver-agent status If the agent isn't running, you might need to restart it using the following command: sudo service stackdriver-agent restart If the restart fails, and the log output shows "Disabled via metadata", you are likely running an image from Google Cloud Marketplace , where the Monitoring agent is disabled by default.
- Out of Cloud Monitoring API quota issue (Linux) You might see an error message in the Linux system log file ( /var/log/syslog on Debian / Ubuntu or /var/log/messages on Red Hat / CentOS / SLES) similar to the following: collectd[25198]: write gcm: Unsuccessful HTTP request 429 This message indicates the Cloud Monitoring API quota limit was reached.
- For example, on Linux, you can create the following crontab entry to check the agent status every 5 minutes: /5 /bin/pidof stackdriver-collectd >/dev/null 2>&1 /usr/sbin/service stackdriver-agent restart >/dev/null 2>&1 Known issues The following sections describe issues known to the Monitoring agent.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- List all agent versions To list the available versions of the agent, run the following command: CENTOS / RHEL List the available versions of the agent: sudo yum list --showduplicates stackdriver-agent DEBIAN / UBUNTU List the available versions of the agent: sudo apt-cache madison stackdriver-agent SLES / SUSE List the available versions of the agent: sudo zypper search -s stackdriver-agent WINDOWS Installing earlier versions of the agent on Windows is not supported.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.

