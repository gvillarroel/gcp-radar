---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.537Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent built-in log rotation"
feature_slug: "ops-agent-built-in-log-rotation"
latest_feature_date: "2023-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "ops"
  - "agent"
  - "built"
  - "in"
  - "log"
  - "rotation"
  - "includes"
  - "for"
---

# Ops Agent built-in log rotation

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent includes built-in support for log rotation.

## Extended Definition

Ops Agent includes built-in support for log rotation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### "Use log rotation for Ops Agent self logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- Source ID: `site-docs-root-2`
- Final score: 310
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This effectively limits the disk space used by the Ops Agent self log files. rotate 30 Log files are rotated when they grow bigger than maxsize even before the additionally specified time interval maxsize 256 M Skip rotation if the log file is missing. missingok Do not rotate the log if it is empty. notifempty Old versions of log files are compressed with gzip by default. compress Postpone compression of the previous log file to the next rotation cycle. delaycompress } EOF Set up crontab or systemd timer to trigger the logrotate utility periodically.
- Home Documentation Observability Cloud Logging Guides Send feedback Use log rotation for Ops Agent self logs Stay organized with collections Save and categorize content based on your preferences.
- You might need a manual process if you are using a version of the Ops Agent without built-in log rotation, or if you prefer to rotate your logs manually.
- If you are running Ops Agent version 2.31.0 or newer, then you can use the built-in log-rotation feature; see Configure log rotation in the Ops Agent .

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- CENTOS / RHEL Run the following command on Red Hat or CentOS Linux: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-cloud-ops-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-cloud-ops-agent WINDOWS Run the following command on Windows: googet installed google-cloud-ops-agent Restart the agent You must restart the Ops Agent to pick up changes in configuration files.
- To pin to a major version, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version MAJOR VERSION. . " For example, to pin to the 1.x.x of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1. . " To install a specific version of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version version-number " For example: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1.0.1" You can delete the installation script after it runs successfully.

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.
- This label identifies the policy, template, and version: Label key, the identifier for the policy: goog-ops-agent-policy Label value, the policy template and version: v2-x86-template- 1-0-0 When you create a VM in the Google Cloud console, you can select the Install Ops Agent for Monitoring and Logging checkbox.
- You then create instance-3 and instance-4 in the us-east1-b zone. instance-1 , instance-2 , and instance-3 had the Install Ops Agent for Monitoring and Logging checkbox selected during creation.

