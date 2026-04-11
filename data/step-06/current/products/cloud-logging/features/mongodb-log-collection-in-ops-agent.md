---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.552Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "MongoDB Log Collection in Ops Agent"
feature_slug: "mongodb-log-collection-in-ops-agent"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation"
keywords:
  - "mongodb"
  - "log"
  - "collection"
  - "in"
  - "ops"
  - "agent"
  - "can"
  - "collect"
---

# MongoDB Log Collection in Ops Agent

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent can collect MongoDB logs for Cloud Logging.

## Extended Definition

Ops Agent can collect MongoDB logs for Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Installing the Ops Agent on individual VMs Stay organized with collections Save and categorize content based on your preferences.
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Ops Agent, which combines the collection of metrics and logging into a single agent, is the eventual replacement for the legacy agents.
- Home Documentation Observability Cloud Logging Guides Send feedback Installing the Cloud Logging agent on individual VMs Stay organized with collections Save and categorize content based on your preferences.
- If the Ops Agent doesn't support your use case, then you can still use the Logging agent.
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.

### "Install the Ops Agent during VM creation \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/install-agent-vm-creation)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Install the Ops Agent during VM creation Stay organized with collections Save and categorize content based on your preferences.
- This label identifies the policy, template, and version: Label key, the identifier for the policy: goog-ops-agent-policy Label value, the policy template and version: v2-x86-template- 1-0-0 When you create a VM in the Google Cloud console, you can select the Install Ops Agent for Monitoring and Logging checkbox.
- The Ops Agent OS policies then cover the following VMs based on the Ops Agent OS policy assignment IDs: OS Policy Assignment ID Covers VMs In: Covered VMs goog-ops-agent-v2-x86-template- 1-0-0 -us-central1-a us-central1-a instance-1 , instance-2 goog-ops-agent-v2-x86-template- 1-0-0 -us-east1-b us-east1-b instance-3 By default, instance-4 isn't covered because you didn't select Install Ops Agent for Monitoring and Logging , so it doesn't have the goog-ops-agent-policy:v2-x86-template- 1-0-0 label.
- Before you click Create , select the Install Ops Agent for Monitoring and Logging checkbox: Note: When you select the Install Ops Agent for Monitoring and Logging checkbox during VM creation, the examples on the tabs in the Equivalent code flyout are updated to include the steps for creating the Ops Agent OS policy.

