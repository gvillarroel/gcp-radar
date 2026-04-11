---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.089Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "AWS CloudWatch metrics ingestion in AWS connector projects"
feature_slug: "aws-cloudwatch-metrics-ingestion-in-aws-connector-projects"
latest_feature_date: "2024-08-22"
deprecation_date: "2024-08-22"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
keywords:
  - "aws"
  - "cloudwatch"
  - "metrics"
  - "ingestion"
  - "in"
  - "connector"
  - "projects"
  - "this"
---

# AWS CloudWatch metrics ingestion in AWS connector projects

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; deprecated on 2024-08-22.

## Extended Definition

This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; This feature ingests AWS CloudWatch metrics into Cloud Monitoring by using AWS connector projects; deprecated on 2024-08-22.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- August 22, 2024 Deprecated Cloud Monitoring has ended support for the ingestion of AWS CloudWatch metrics by using AWS connector projects.
- August 18, 2023 Deprecated Cloud Monitoring is ending support for the ingestion of AWS CloudWatch metrics in AWS connector projects.
- For information about this deprecation, see Deprecations: AWS CloudWatch metrics in Connector projects .
- For information about this deprecation, see Deprecations: AWS CloudWatch metrics in Connector projects .

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- This can cause ingestion of duplicate logs or a conflict in metrics ingestion.
- If this status persists for longer than 10 minutes, it might indicate a problem with the ingestion of the telemetry.
- If this status persists for longer than 10 minutes, it might indicate a problem with the ingestion of the telemetry.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- Run the following PowerShell command: Restart-Service -Name StackdriverMonitoring Upgrade the agent To upgrade the Monitoring agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- To reach this dashboard, do the following: In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

