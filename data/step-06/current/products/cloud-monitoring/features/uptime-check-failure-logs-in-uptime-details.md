---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.083Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Uptime check failure logs in Uptime details"
feature_slug: "uptime-check-failure-logs-in-uptime-details"
latest_feature_date: "2025-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
keywords:
  - "uptime"
  - "check"
  - "failure"
  - "logs"
  - "in"
  - "details"
  - "the"
  - "page"
---

# Uptime check failure logs in Uptime details

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Uptime details page can display logs for uptime check failures when failure logging is enabled.

## Extended Definition

The Uptime details page can display logs for uptime check failures when failure logging is enabled.

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
- You can also install or update the Ops Agent from the VM Details page for a specific VM.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- Run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force Upgrade the agent To upgrade the Ops Agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- Use VM Instances dashboard In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- You can also examine the logs and ensure there are no errors: sudo grep collectd / var / log / { syslog , messages } tail If you have trouble with the installation, refer to the Troubleshooting page.
- You can also install or update the Ops Agent from the VM Details page for a specific VM.
- Run the following PowerShell command: Restart-Service -Name StackdriverMonitoring Upgrade the agent To upgrade the Monitoring agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- To reach this dashboard, do the following: In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- April 04, 2025 Feature If you have enabled logging for failures of an uptime check, you can view the logs from the Uptime details page.
- October 21, 2022 Feature The Cloud Monitoring Integrations page now provides access to logs collected by logs-enabled integrations from the Details page for each integration.
- February 26, 2025 Change You can now enable and disable the logging of uptime-check failures by using the log check failures field in the Cloud Monitoring API.
- February 20, 2024 Change For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents: Instrumentation and observability overview Choose an instrumentation approach Go instrumentation example Java instrumentation example February 12, 2024 Change You can now create a broken-link checker, which periodically validates the links contained in your website.

