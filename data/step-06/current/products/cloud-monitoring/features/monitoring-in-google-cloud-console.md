---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.143Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring in Google Cloud console"
feature_slug: "monitoring-in-google-cloud-console"
latest_feature_date: "2019-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting"
keywords:
  - "monitoring"
  - "in"
  - "console"
  - "stackdriver"
  - "the"
  - "provides"
  - "access"
  - "to"
---

# Monitoring in Google Cloud console

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Stackdriver Monitoring in the Google Cloud console provides access to monitoring configuration alongside the classic console.

## Extended Definition

Stackdriver Monitoring in the Google Cloud console provides access to monitoring configuration alongside the classic console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)

## Supporting Pages

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 310
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run the following PowerShell command: Restart-Service -Name StackdriverMonitoring Upgrade the agent To upgrade the Monitoring agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 296
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- Use VM Instances dashboard In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### Troubleshoot the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting](https://docs.cloud.google.com/monitoring/agent/monitoring/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Restart the agent On Linux, run sudo service stackdriver-agent restart On Windows, go into the service management console and restart the Cloud Monitoring service.
- Verifying project and credentials If the Monitoring agent is reporting access or authorization errors, or if the agent seems to be running normally but there is no data or your alerting policies aren't working as you expect, then check that your VM instance's credentials are correct, including that they specify the correct project: If you are using a Compute Engine VM instance with standard (not private-key) credentials, then it is unlikely that data is going to the wrong project, but your credentials might still be deficient.
- Generating new credentials If the credentials aren't valid, take the following steps: For each connected project containing instances that need to be authorized with a private key — each project containing Compute Engine instances that were created without including the access scope https://www.googleapis.com/auth/monitoring.write — create a service account and generate a private key, if they don't already exist.
- For a Linux VM, use the following command: sudo service stackdriver-agent status If the agent isn't running, you might need to restart it using the following command: sudo service stackdriver-agent restart If the restart fails, and the log output shows "Disabled via metadata", you are likely running an image from Google Cloud Marketplace , where the Monitoring agent is disabled by default.

