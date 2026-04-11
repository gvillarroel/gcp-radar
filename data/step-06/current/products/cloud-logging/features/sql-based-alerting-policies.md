---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.523Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "SQL-based alerting policies"
feature_slug: "sql-based-alerting-policies"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
keywords:
  - "sql"
  - "based"
  - "alerting"
  - "policies"
  - "can"
  - "monitor"
  - "the"
  - "results"
---

# SQL-based alerting policies

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Alerting policies can monitor the results of SQL queries.

## Extended Definition

Alerting policies can monitor the results of SQL queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)

## Supporting Pages

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Manage incidents for SQL-based alerting policies October 09, 2024 Change Ops Agent release 2.51.0 adds support for Compute Engine Arm VMs that are running Rocky Linux 8.
- October 24, 2024 Feature You can now create alerting policies that monitor the results of your SQL queries.
- For more information, see the following documents: Query a linked BigQuery dataset Monitor your SQL query results with an alerting policy February 09, 2026 Feature You can use the Cloud Logging API MCP server to let agents and AI applications interact with your log entries.
- Change Deleting logs-based metrics in alerting policies : Attempting to delete a logs-based metric that is used in one or more Stackdriver Monitoring alerting policies now fails with the status FAILED PRECONDITION .

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For information about the roles required to create and manage SQL-based alerting policies, see the Before you begin section in Monitor your SQL query results with an alerting policy .
- SQL-based alerting policies evaluate the results of a SQL query run against data from groups of log entries.
- Required roles To get the permissions that you need to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules , ask your administrator to grant you the following IAM roles on your project: Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor ) Monitoring NotificationChannel Editor ( roles/monitoring.notificationChannelEditor ) Logs Configuration Writer ( roles/logging.configWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules : monitoring.alertPolicies.create monitoring.notificationChannels.create logging.notificationRules.create You might also be able to get these permissions with custom roles or other predefined roles .

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- You can display log-based metrics in Cloud Monitoring charts, and alerting policies can monitor these metrics.
- Charts and alerting policies in Cloud Monitoring You can use both system and user-defined log-based metrics in Cloud Monitoring to create charts and alerting policies.
- You can also create alerting policies to monitor these time series.
- It also simplifies the process of creating charts and alerting policies, as there is no ambiguity as to which time-series data is charted or monitored.

