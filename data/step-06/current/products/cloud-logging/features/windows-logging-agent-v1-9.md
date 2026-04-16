---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.458Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Windows Logging agent v1-9"
feature_slug: "windows-logging-agent-v1-9"
latest_feature_date: "2019-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/configuration"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/agent"
keywords:
  - "windows"
  - "logging"
  - "agent"
  - "v1"
  - "stores"
  - "logs"
  - "disk"
  - "supports"
---

# Windows Logging agent v1-9

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Windows Logging agent v1-9 stores agent service logs on disk and supports the config.d configuration extension directory.

## Extended Definition

Windows Logging agent v1-9 stores agent service logs on disk and supports the config.d configuration extension directory.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/agent](https://docs.cloud.google.com/logging/docs/agent)

## Supporting Pages

### Configure the Logging agent | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- Source ID: `feature-recovery-direct-http`
- Final score: 284
- Re-rank relevance: N/A

Evidence snippets:
- C:\Program Files (x86)\Stackdriver\LoggingAgent\config.d is the third-party configuration directory for Windows.
- C:\Program Files (x86)\Stackdriver\LoggingAgent\config.d is the third-party configuration directory for Windows.
- When the agent is configured to ingest JSON content, the input must be formatted so that each JSON object is on a newline: {"name" : "zeeshan", "age" : 28} {"name" : "reeba", "age" : 15} To configure the Logging agent to ingest JSON formatted content, do the following: From the Linux command prompt, create a log file: touch /tmp/test-structured-log.log Create a new configuration file labeled test-structured-log.conf in the additional configuration directory /etc/google-fluentd/config.d : sudo tee /etc/google-fluentd/config.d/test-structured-log.conf <<EOF < source > @type tail <parse> # 'json' indicates the log is structured (JSON). @type json </parse> # The path of the log file. path /tmp/test-structured-log.log # The path of the position file that records where in the log file # we have processed already.
- Applying customized agent configuration Customizing the Logging agent allows you to add your own fluentd configuration files: Linux instance Copy your configuration files into the following directory: /etc/google-fluentd/config.d/ The Logging agent installation script populates this directory with the default catch-all configuration files.

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Back up any local changes to /etc/google-fluentd/config.d/ .
- There will be no new feature development or support for new operating systems for the legacy Logging agent.
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .

### "Google Cloud Observability agents \_|\_ Cloud Logging \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent](https://docs.cloud.google.com/logging/docs/agent)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Legacy Logging agent : Streams logs from common third-party applications and system software to Cloud Logging.
- Ops Agent Read docs Legacy Logging agent Read docs Try it for yourself If you're new to Google Cloud, create an account to evaluate how Google Cloud Observability performs in real-world scenarios.
- Note: There will be no new feature development or support for new operating systems for the legacy Logging agent.
- This agent combines logging and metrics into a single agent, providing YAML-based configurations for collecting your logs and metrics, and features high-throughput logging.

