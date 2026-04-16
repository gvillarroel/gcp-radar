---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.502Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging API v2"
feature_slug: "logging-api-v2"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
keywords:
  - "logging"
  - "v2"
  - "stackdriver"
  - "provides"
  - "simplified"
  - "log"
  - "format"
  - "generally"
---

# Logging API v2

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Stackdriver Logging API v2 provides a simplified log format and is generally available.

## Extended Definition

The Stackdriver Logging API v2 provides a simplified log format and is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run one of the following commands, depending on your Linux distribution: YUM: sudo yum remove -y google-fluentd-catch-all-config sudo yum install -y google-fluentd-catch-all-config-structured sudo service google-fluentd restart APT: sudo apt-get remove -y google-fluentd-catch-all-config sudo apt-get install -y google-fluentd-catch-all-config-structured sudo service google-fluentd restart For information about structured logging, refer to the structured logging guide.
- Run the following PowerShell command: Restart-Service -Name StackdriverLogging Upgrade the agent To upgrade the Logging agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.

### Configure the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Setting labels statically If you don't have this information in the payload, and simply want to add a static metadata label called environment , add the following to your output plugin configuration in the main configuration file ( /etc/google-fluentd/google-fluentd.conf on Linux or C:\Program Files (x86)\Stackdriver\LoggingAgent\fluent.conf on Windows): Configure all sources to output to Cloud Logging <match > @type google cloud labels { "environment" : "production" } ... </match> In this case, instead of using a map to replace one label with another, we use a labels setting to attach a label with a given literal value to a log entry, regardless of whether the entry already has a label or not.
- If you accepted the default installation directory, this directory is: C: \P rogram Files ( x86 ) \S tackdriver \L oggingAgent \c onfig.d \ Restart the agent by running the following commands in a command-line shell: net stop StackdriverLogging net start StackdriverLogging For more information on fluentd configuration files, see fluentd's Configuration File Syntax documentation .
- If autoformat stackdriver trace is true and [V] matches the format of ResourceTrace traceId the LogEntry trace field has the value projects/[PROJECT-ID]/traces/[V] . logging.googleapis.com/trace sampled traceSampled The value of this field must be either true or false .
- See Output plugin telemetry for details. autoformat stackdriver trace bool true When set to true , the trace is reformatted if the value of structured payload field logging.googleapis.com/trace matches ResourceTrace traceId format.

