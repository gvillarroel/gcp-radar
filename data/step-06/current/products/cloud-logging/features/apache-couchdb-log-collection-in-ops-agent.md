---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.548Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apache CouchDB Log Collection in Ops Agent"
feature_slug: "apache-couchdb-log-collection-in-ops-agent"
latest_feature_date: "2022-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
keywords:
  - "apache"
  - "couchdb"
  - "log"
  - "collection"
  - "in"
  - "ops"
  - "agent"
  - "can"
---

# Apache CouchDB Log Collection in Ops Agent

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent can collect Apache CouchDB logs for Cloud Logging.

## Extended Definition

Ops Agent can collect Apache CouchDB logs for Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)

## Supporting Pages

### Apache CouchDB \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- Source ID: `site-docs-root-2`
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from CouchDB, you must create a receiver for the logs that CouchDB produces and then create a pipeline for the new receiver.
- Add the following lines to the file: [log] writer = file file = /var/log/couchdb/couchdb.log level = info Restart Apache CouchDB: sudo systemctl restart couchdb Configure the Ops Agent for CouchDB Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from CouchDB instances, and restart the agent .
- You must restart the agent for the configuration to take effect. set -e Check if the file exists if [ ! -f /etc/google-cloud-ops-agent/config.yaml ]; then Create the file if it doesn't exist. sudo mkdir -p /etc/google-cloud-ops-agent sudo touch /etc/google-cloud-ops-agent/config.yaml fi Create a back up of the existing file so existing configurations are not lost. sudo cp /etc/google-cloud-ops-agent/config.yaml /etc/google-cloud-ops-agent/config.yaml.bak Configure the Ops Agent. sudo tee /etc/google-cloud-ops-agent/config.yaml > /dev/null << EOF metrics: receivers: couchdb: type: couchdb username: admin password: otelp To use the googlesecretmanager provider to replace plaintext passwords, refer to the example below. password: ${ googlesecretmanager : projects / < project - id > / secrets / < secret - id > / versions / < version - id > } service: pipelines: couchdb: receivers: - couchdb logging: receivers: couchdb: type: couchdb service: pipelines: couchdb: receivers: - couchdb EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- A wild card ( ) can be used in the paths; for example, /var/log/couchdb / .log . record log file path false If set to true , then the path to the specific file from which the log record was obtained appears in the output log entry as the value of the agent.googleapis.com/log file path label.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- Home Documentation Observability Cloud Logging Guides Send feedback Installing the Ops Agent on individual VMs Stay organized with collections Save and categorize content based on your preferences.
- To pin to a major version, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version MAJOR VERSION. . " For example, to pin to the 1.x.x of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1. . " To install a specific version of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version version-number " For example: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1.0.1" You can delete the installation script after it runs successfully.

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- The Ops Agent, which combines the collection of metrics and logging into a single agent, is the eventual replacement for the legacy agents.
- If the Ops Agent doesn't support your use case, then you can still use the Logging agent.
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .

