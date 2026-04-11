---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.540Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Logging data regionality in US and EU"
feature_slug: "cloud-logging-data-regionality-in-us-and-eu"
latest_feature_date: "2022-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/fleet-installation"
keywords:
  - "logging"
  - "regionality"
  - "in"
  - "us"
  - "and"
  - "eu"
  - "supports"
  - "the"
---

# Cloud Logging data regionality in US and EU

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports data regionality in the US and EU.

## Extended Definition

Cloud Logging supports data regionality in the US and EU.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler)
- [https://docs.cloud.google.com/logging/docs/agent/logging/fleet-installation](https://docs.cloud.google.com/logging/docs/agent/logging/fleet-installation)

## Supporting Pages

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run the following PowerShell command: Restart-Service -Name StackdriverLogging Upgrade the agent To upgrade the Logging agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): /etc/default/google-fluentd Add the following to the file: export http proxy = "http:// proxy-ip : proxy-port " export https proxy = "http:// proxy-ip : proxy-port " export no proxy = 169.254 .

### "Class CloudLoggingHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler)
- Source ID: `site-python-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If not given, will be inferred from the environment. labels Optional[dict] Additional labels to attach to logs. stream Optional[IO] Stream to be used by the handler. close close () Closes the log handler and cleans up all Transport objects used. emit emit ( record ) Actually log the specified logging record.
- See https://docs.python.org/2/library/logging.html#handler-objects Parameter Name Description record logging.LogRecord The record to be logged. flush flush () Forces the Transport object to submit any pending log records.
- IO ] = None , kwargs ) Parameters Name Description client logging v2.client.Client The authenticated Google Cloud Logging client for this handler to use. name str the name of the custom log in Cloud Logging.
- This is a Python standard logging handler using that can be used to route Python standard logging messages directly to the Stackdriver Logging API.

### Install the Logging agent by using automation tools \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/fleet-installation](https://docs.cloud.google.com/logging/docs/agent/logging/fleet-installation)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to using the Google Cloud CLI or Terraform to create agent policies , you can use other automation tools to manage the Logging agent across your fleet of Compute Engine VMs: Ansible by using the Ansible role, you can install and configure the agent across your fleet of Linux and Windows VMs.
- Home Documentation Observability Cloud Logging Guides Send feedback Install the Logging agent by using automation tools Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Puppet : by using the Puppet module, you can install and configure the agent across your fleet of Linux VMs.

