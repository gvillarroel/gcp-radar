---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.109Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Log content in alert notifications"
feature_slug: "log-content-in-alert-notifications"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "log"
  - "content"
  - "in"
  - "alert"
  - "notifications"
  - "can"
  - "include"
  - "extracted"
---

# Log content in alert notifications

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Alert notifications can include extracted log content to improve troubleshooting context.

## Extended Definition

Alert notifications can include extracted log content to improve troubleshooting context.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- November 07, 2022 Feature You can now dynamically include your log content in your alert notifications for easier troubleshooting.
- March 28, 2022 Feature User-defined labels are now included in PagerDuty, Pub/Sub, Webhooks, and email notifications, and you can also view these labels on the details pages of alerting policies and incidents.
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.
- November 04, 2021 Feature You can now create an alerting policy from the alert chart dialog on a custom dashboard, and you can create an alerting policy by converting a chart on custom dashboard to an alert chart.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-monitoring-agent-repo.sh When running the add-monitoring-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- However, if you have to run the legacy Logging agent on Windows and also need to collect metrics, you must use the legacy Monitoring agent; you can't run the Ops Agent and a legacy agent on the same machine.
- You can also examine the logs and ensure there are no errors: sudo grep collectd / var / log / { syslog , messages } tail If you have trouble with the installation, refer to the Troubleshooting page.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- This can cause ingestion of duplicate logs or a conflict in metrics ingestion.
- To pin to a major version, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version MAJOR VERSION. . " For example, to pin to the 1.x.x of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1. . " To install a specific version of the agent, run: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version version-number " For example: Invoke-Expression "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1 -AlsoInstall -Version 1.0.1" You can delete the installation script after it runs successfully.

