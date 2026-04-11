---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.114Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Alerting policy user labels in console"
feature_slug: "alerting-policy-user-labels-in-console"
latest_feature_date: "2022-06-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
keywords:
  - "alerting"
  - "policy"
  - "user"
  - "labels"
  - "in"
  - "console"
  - "the"
  - "preview"
---

# Alerting policy user labels in console

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The preview alerting interface in the Cloud console supports adding, editing, and removing user labels on alerting policies.

## Extended Definition

The preview alerting interface in the Cloud console supports adding, editing, and removing user labels on alerting policies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)

## Supporting Pages

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- To pin to a major version, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version MAJOR VERSION. . " For example, to pin to the 1.x.x of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1. . " To install a specific version of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version version-number " For example: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1.0.1" You can delete the installation script after it runs successfully.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.
- In “silent” mode use the /D option to specify the installation directory, for example: & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" /S /D="C:\Stackdriver\Monitoring\" You can delete the installer when it completes successfully.
- To reach this dashboard, do the following: In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- June 03, 2022 Feature You can now add, edit, and remove alerting policy user labels by using the Cloud console when you use the preview alerting interface.
- March 28, 2022 Feature User-defined labels are now included in PagerDuty, Pub/Sub, Webhooks, and email notifications, and you can also view these labels on the details pages of alerting policies and incidents.
- To learn how you can create user-defined labels that contain severity information and attach those labels to alerting policies or incidents, see Add severity levels to an alerting policy .
- For more information about Alert charts, see the following pages: Managing dashboards by API Adding an alerting policy to a dashboard by using the Cloud Console .

