---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.142Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard API"
feature_slug: "dashboard-api"
latest_feature_date: "2019-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "dashboard"
  - "api"
  - "the"
  - "stackdriver"
  - "monitoring"
  - "lets"
  - "users"
  - "programmatically"
---

# Dashboard API

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Stackdriver Monitoring Dashboard API lets users programmatically manage dashboards and charts.

## Extended Definition

The Stackdriver Monitoring Dashboard API lets users programmatically manage dashboards and charts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following documents: Display the most recent data in tabular form API Example: Dashboard with a TimeSeriesTable widget September 06, 2024 Feature The Metrics management page in Cloud Monitoring now shows you the sources of metric reads and lets you exclude unneeded metrics entirely, eliminating the cost of ingesting them.
- The API, part of the Stackdriver Monitoring API , lets you create, edit, and manage uptime checks .
- December 09, 2019 Feature The Stackdriver Monitoring Dashboard API is now in Beta release.
- The API, part of the Stackdriver Monitoring API , lets you create and edit uptime checks .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- These integrations provide the following for you: A set of selected workload.googleapis.com metrics for the application A dashboard for visualizing the metrics.
- You must design and create any Cloud Monitoring dashboards you need, based on the set of metrics you are ingesting and on your business needs.
- You can also create Cloud Monitoring dashboards and alerting policies to monitor your Prometheus metrics.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): /etc/systemd/system.conf Add the following to the file: DefaultEnvironment="HTTP PROXY=http:// proxy-ip : proxy-port " "HTTPS PROXY=http:// proxy-ip : proxy-port " "NO PROXY=http://metadata.google.internal" # Skip proxy for the local Metadata Server.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.

