---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.028Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring Editor Role"
feature_slug: "monitoring-editor-role"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/access-control"
keywords:
  - "monitoring"
  - "editor"
  - "role"
  - "grants"
  - "iam"
  - "based"
  - "permissions"
  - "operations"
---

# Monitoring Editor Role

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring Editor role grants IAM-based permissions for Monitoring operations.

## Extended Definition

The Monitoring Editor role grants IAM-based permissions for Monitoring operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Home Documentation Observability Cloud Monitoring Guides Send feedback View and manage metric usage Stay organized with collections Save and categorize content based on your preferences.
- To get the permissions that you need to view audit logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- You might also be able to get the required permissions through custom roles or other predefined roles .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring Editor ( roles/monitoring.editor ) on your App Hub host project or management project.
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application telemetry Stay organized with collections Save and categorize content based on your preferences.
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring roles The following roles grant general permissions for Monitoring: Name Title Includes permissions roles/monitoring.viewer Monitoring Viewer Grants read-only access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.editor Monitoring Editor Grants read-write access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.admin Monitoring Admin Grants full access to Monitoring in the Google Cloud console and the Cloud Monitoring API.
- Incident roles The following roles grant permissions only for incidents: Name Title Description roles/monitoring.cloudConsoleIncidentViewer Monitoring Cloud Console Incident Viewer Grants access to view incidents by using the Google Cloud console. roles/monitoring.cloudConsoleIncidentEditor Monitoring Cloud Console Incident Editor Grants access to view, acknowledge, and close incidents by using the Google Cloud console.
- Uptime-check configuration roles The following roles grant permissions only for uptime-check configurations: Name Title Description roles/monitoring.uptimeCheckConfigViewer Monitoring Uptime Check Configurations Viewer Grants read-only access to uptime-check configurations. roles/monitoring.uptimeCheckConfigEditor Monitoring Uptime Check Configurations Editor Grants read-write access to uptime-check configurations.
- Notification channel roles The following roles grant permissions only for notification channels: Name Title Description roles/monitoring.notificationChannelViewer Monitoring NotificationChannel Viewer Grants read-only access to notification channels. roles/monitoring.notificationChannelEditor Monitoring NotificationChannel Editor Grants read-write access to notification channels.

