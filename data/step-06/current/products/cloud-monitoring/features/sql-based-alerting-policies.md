---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.087Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "SQL-based alerting policies"
feature_slug: "sql-based-alerting-policies"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "sql"
  - "based"
  - "alerting"
  - "policies"
  - "monitoring"
  - "lets"
  - "you"
  - "create"
---

# SQL-based alerting policies

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring lets you create alerting policies that monitor the results of SQL queries.

## Extended Definition

Cloud Monitoring lets you create alerting policies that monitor the results of SQL queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.
- Change The Metrics management page in Cloud Monitoring now lets you create alerting policies and charts for metrics that have no associated alerting policies or custom dashboards.
- July 29, 2021 Change Monitoring Query Language (MQL) no longer requires you to use strict form when you create MQL-based alerting policies by using the Monitoring API.
- For more information, see the following documents: Create and manage variables and pinned filters Apply a variable to a widget October 24, 2024 Feature You can now create alerting policies that monitor the results of your SQL queries.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application telemetry Stay organized with collections Save and categorize content based on your preferences.
- To get more information about your incidents and alerting policies, do the following: To find details about the alerting policy that caused the incident, click the policy name.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- You can create and manage alerting policies by using the Google Cloud console, the Cloud Monitoring API, the Google Cloud CLI, or Terraform.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .
- When these integrations exist, you might see a panel that lists recommended alerts, or you might see a button on a chart that lets you create an alerting policy.

