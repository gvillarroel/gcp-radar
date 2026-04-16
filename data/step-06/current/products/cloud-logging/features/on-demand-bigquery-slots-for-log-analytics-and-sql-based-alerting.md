---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.287Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "On-demand BigQuery slots for Log Analytics and SQL-based alerting"
feature_slug: "on-demand-bigquery-slots-for-log-analytics-and-sql-based-alerting"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
  - "https://docs.cloud.google.com/logging/docs/buckets"
keywords:
  - "demand"
  - "bigquery"
  - "slots"
  - "log"
  - "analytics"
  - "sql"
  - "based"
  - "alerting"
---

# On-demand BigQuery slots for Log Analytics and SQL-based alerting

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics queries and SQL-based alerting policies use on-demand BigQuery slots by default when no reservation assignment exists.

## Extended Definition

Log Analytics queries and SQL-based alerting policies use on-demand BigQuery slots by default when no reservation assignment exists.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- This role lets you create or modify any of the following: Log sinks Log buckets Log views Linked data sets Log scopes Analytics views This role isn't sufficient to create log-based metrics or log-based alerting policies .
- Required roles To get the permissions that you need to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules , ask your administrator to grant you the following IAM roles on your project: Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor ) Monitoring NotificationChannel Editor ( roles/monitoring.notificationChannelEditor ) Logs Configuration Writer ( roles/logging.configWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules : monitoring.alertPolicies.create monitoring.notificationChannels.create logging.notificationRules.create You might also be able to get these permissions with custom roles or other predefined roles .
- Roles required to create and use log-based alerting policies This section describes the roles that you need to create log-based alerting policies, notification channels , and notification rules .

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Charts and alerting policies in Cloud Monitoring You can use both system and user-defined log-based metrics in Cloud Monitoring to create charts and alerting policies.
- If you plan to create an alerting policy to monitor a log-based metric, then we recommend that you configure how the policy handles missing data .
- You can display log-based metrics in Cloud Monitoring charts, and alerting policies can monitor these metrics.
- For more information about metrics scopes, including multi-project metrics scopes, and about scoping projects, see the following: Metrics scopes View metrics for multiple projects Limitations You can't create log-based metrics that count the number of log entries that contain an error group.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.
- REST To create a linked a BigQuery dataset for an existing log bucket that is upgraded use Observability Analytics, call the asynchronous projects.locations.buckets.links.create method of the Cloud Logging API.
- Create a linked BigQuery dataset When you want to use the capabilities of BigQuery to analyze your log data, upgrade a log bucket to use Observability Analytics, and then create a linked dataset .
- To use BigQuery to analyze your log data, you have two choices: Upgrade a log bucket to use Observability Analytics and then create a linked BigQuery dataset .

