---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.467Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Data Access audit log console configuration"
feature_slug: "data-access-audit-log-console-configuration"
latest_feature_date: "2018-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "access"
  - "audit"
  - "log"
  - "console"
  - "configuration"
  - "lets"
  - "users"
  - "enable"
---

# Data Access audit log console configuration

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console lets users enable and configure Data Access audit logs.

## Extended Definition

The Google Cloud console lets users enable and configure Data Access audit logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Storage : When Cloud Storage usage logs are enabled, Cloud Storage writes usage data to the Cloud Storage bucket, which generates Data Access audit logs for the bucket.
- Publicly available resources that have the Identity and Access Management policies allAuthenticatedUsers or allUsers don't generate audit logs.
- Data Access audit logs Data Access audit logs are log entries written by API calls that read the configuration or metadata of resources.
- If you want Data Access audit logs to be written for Google Cloud services other than BigQuery, you must explicitly enable them.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console activity Required permissions Minimal read-only access logging.logEntries.list logging.logs.list logging.logServiceIndexes.list logging.logServices.list resourcemanager.projects.get View Data Access audit logs logging.privateLogEntries.list View log-based metrics logging.logMetrics.{list, get} View sinks logging.sinks.{list, get} View logs usage logging.usage.get Download logs logging.logEntries.{list, download} Only one of these permissions is necessary to download logs.
- Roles required to create and use log-based metrics Following is a summary of the common roles and permissions that a principal needs to access log-based metrics: The Logs Configuration Writer ( roles/logging.configWriter ) role lets principals list, create, get, update, and delete log-based metrics.
- However, this role doesn't let users create sinks, read Data Access audit logs that are in the Default bucket, or read logs that are in user-defined log buckets.
- Required roles To get the permissions that you need to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules , ask your administrator to grant you the following IAM roles on your project: Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor ) Monitoring NotificationChannel Editor ( roles/monitoring.notificationChannelEditor ) Logs Configuration Writer ( roles/logging.configWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- You can send the link to users who have access to the Google Cloud project.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- Get Google Cloud project or organization ID To get a Google Cloud project or organization ID from anywhere in the Google Cloud console, expand the list of Google Cloud projects from the Google Cloud project and organization selector and find the Google Cloud project ID in the ID column.

