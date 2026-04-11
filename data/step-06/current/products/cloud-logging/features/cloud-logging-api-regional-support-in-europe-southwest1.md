---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.546Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Logging API regional support in europe-southwest1"
feature_slug: "cloud-logging-api-regional-support-in-europe-southwest1"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
keywords:
  - "logging"
  - "api"
  - "regional"
  - "in"
  - "europe"
  - "southwest1"
  - "the"
  - "supports"
---

# Cloud Logging API regional support in europe-southwest1

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Extended Definition

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)

## Supporting Pages

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): /etc/default/google-fluentd Add the following to the file: export http proxy = "http:// proxy-ip : proxy-port " export https proxy = "http:// proxy-ip : proxy-port " export no proxy = 169.254 .
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run one of the following commands, depending on your Linux distribution: YUM: sudo yum remove -y google-fluentd-catch-all-config sudo yum install -y google-fluentd-catch-all-config-structured sudo service google-fluentd restart APT: sudo apt-get remove -y google-fluentd-catch-all-config sudo apt-get install -y google-fluentd-catch-all-config-structured sudo service google-fluentd restart For information about structured logging, refer to the structured logging guide.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- April 25, 2022 Feature The Cloud Logging API now supports the following regions: Europe: europe-southwest1 europe-west6 europe-west8 europe-west9 South America: southamerica-west1 For more information, see Data Regionality for Cloud Logging .
- March 27, 2023 Feature The Cloud Logging API now supports the following region: Doha: me-central1 March 22, 2023 Change Log buckets in the following regions can now be upgraded to use Log Analytics: asia-northeast1 australia-southeast1 europe-west1 europe-west2 northamerica-northeast1 us-east1 us-west2 For more information, see Supported regions .
- April 28, 2025 Libraries Java 3.22.1 (2025-04-25) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 7cce5b5 ) Libraries Java 3.22.2 (2025-04-25) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1796 ) ( 1f88271 ) Libraries Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Java 3.22.2 (2025-04-25) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1796 ) ( 1f88271 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Java 3.22.1 (2025-04-25) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 7cce5b5 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) Python 3.12.1 (2025-04-21) Bug Fixes Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 ) April 21, 2025 Libraries Python 3.12.0 (2025-04-10) Features Add REST Interceptors which support reading metadata ( 681bcc5 ) Add support for opt-in debug logging ( 681bcc5 ) Added flushes/close functionality to logging handlers ( #917 ) ( d179304 ) Bug Fixes Allow protobuf 6.x ( #977 ) ( 6757890 ) deps: Require google-cloud-audit-log >= 0.3.1 ( #979 ) ( 1cc00ec ) Fix typing issue with gRPC metadata when key ends in -bin ( 681bcc5 ) Documentation Added documentation on log level and excluded loggers params in setup logging ( #971 ) ( 70d9d25 ) Update README to break infinite redirect loop ( #972 ) ( 52cd907 ) Python 3.12.0 (2025-04-10) Features Add REST Interceptors which support reading metadata ( 681bcc5 ) Add support for opt-in debug logging ( 681bcc5 ) Added flushes/close functionality to logging handlers ( #917 ) ( d179304 ) Bug Fixes Allow protobuf 6.x ( #977 ) ( 6757890 ) deps: Require google-cloud-audit-log >= 0.3.1 ( #979 ) ( 1cc00ec ) Fix typing issue with gRPC metadata when key ends in -bin ( 681bcc5 ) Documentation Added documentation on log level and excluded loggers params in setup logging ( #971 ) ( 70d9d25 ) Update README to break infinite redirect loop ( #972 ) ( 52cd907 ) Announcement Cloud Logging adds support for the europe-north2 region.
- February 03, 2025 Libraries Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Python 3.11.4 (2025-01-22) Bug Fixes Made write entries raise ValueError on ParseError s ( #958 ) ( 5309478 ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e ) Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc ) Libraries Java 3.21.2 (2025-01-29) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #1755 ) ( d404381 ) Update dependency io.opentelemetry:opentelemetry-bom to v1.46.0 ( #1747 ) ( 5ef2853 ) Update googleapis/sdk-platform-java action to v2.52.0 ( #1753 ) ( 3dcf86a ) January 21, 2025 Announcement On April 22, 2025, Cloud Logging will replace the single, global quota for the number of calls to write log entries with a set of volume-based regional quotas.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): /etc/systemd/system.conf Add the following to the file: DefaultEnvironment="HTTP PROXY=http:// proxy-ip : proxy-port " "HTTPS PROXY=http:// proxy-ip : proxy-port " "NO PROXY=http://metadata.google.internal" # Skip proxy for the local Metadata Server.
- Ensure that you enable the services for both the Cloud Logging API and Cloud Monitoring API.
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).

