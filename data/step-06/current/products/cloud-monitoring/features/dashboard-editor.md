---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.966Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard editor"
feature_slug: "dashboard-editor"
latest_feature_date: "2020-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "dashboard"
  - "editor"
  - "lets"
  - "users"
  - "create"
  - "edit"
  - "all"
  - "widget"
---

# Dashboard editor

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

A new dashboard editor lets users create and edit all dashboard widget types with mosaic layout and multiple configuration tabs.

## Extended Definition

A new dashboard editor lets users create and edit all dashboard widget types with mosaic layout and multiple configuration tabs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- You can select an existing custom dashboard or you can create a dashboard and then save the widget.
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- However, the flyout retains your current context and lets you save your exploration results to a custom dashboard: To open a flyout, click query stats Explore data .
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- The required IAM roles depend upon whether you plan to create an aggregated sink , which lets you centralized the storage of log data.
- Monitoring Editor role ( roles/monitoring.editor ) on your App Hub host project or management project.
- If you are using an app-enabled folder and if you don't have an organization-level aggregated sink or nested folders, then we recommend following: Create an intercepting aggregated sink for your app-enabled folder , and route those logs to the Default log bucket of the management project for your app-enabled folder.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Create a chart for an unmonitored metric When a metric in the table has no associated custom dashboard, the table provides a Create chart button.
- Select the existing custom dashboard to which you want to save the chart, or select New Dashboard to create a new dashboard for the chart.
- If there is no alerting policy or dashboard associated with a metric, the table includes a button you can click to create one.

