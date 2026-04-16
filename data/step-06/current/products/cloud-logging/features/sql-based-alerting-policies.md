---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.311Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "SQL-based alerting policies"
feature_slug: "sql-based-alerting-policies"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/logs-based-metrics"
keywords:
  - "sql"
  - "based"
  - "alerting"
  - "policies"
  - "can"
  - "monitor"
  - "results"
  - "queries"
---

# SQL-based alerting policies

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Alerting policies can monitor the results of SQL queries.

## Extended Definition

Alerting policies can monitor the results of SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the roles required to create and manage SQL-based alerting policies, see the Before you begin section in Monitor your SQL query results with an alerting policy .
- Required roles To get the permissions that you need to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules , ask your administrator to grant you the following IAM roles on your project: Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor ) Monitoring NotificationChannel Editor ( roles/monitoring.notificationChannelEditor ) Logs Configuration Writer ( roles/logging.configWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules : monitoring.alertPolicies.create monitoring.notificationChannels.create logging.notificationRules.create You might also be able to get these permissions with custom roles or other predefined roles .
- SQL-based alerting policies evaluate the results of a SQL query run against data from groups of log entries.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.
- When you run a query, the query results are analyzed for patterns and log entries are then automatically grouped based on similar log field content.

### Log-based metrics overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Charts and alerting policies in Cloud Monitoring You can use both system and user-defined log-based metrics in Cloud Monitoring to create charts and alerting policies.
- You can display log-based metrics in Cloud Monitoring charts, and alerting policies can monitor these metrics.
- It also simplifies the process of creating charts and alerting policies, as there is no ambiguity as to which time-series data is charted or monitored.
- If you plan to create an alerting policy to monitor a log-based metric, then we recommend that you configure how the policy handles missing data .

