---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.134Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard editor"
feature_slug: "dashboard-editor"
latest_feature_date: "2020-11-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/access-control"
keywords:
  - "dashboard"
  - "editor"
  - "new"
  - "lets"
  - "users"
  - "create"
  - "and"
  - "edit"
---

# Dashboard editor

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

A new dashboard editor lets users create and edit all dashboard widget types with mosaic layout and multiple configuration tabs.

## Extended Definition

A new dashboard editor lets users create and edit all dashboard widget types with mosaic layout and multiple configuration tabs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The new editor lets you create and edit all dashboard widget types, including gauges, scorecards, and text boxes.
- December 16, 2020 Change The dashboard editor that lets you create and edit all dashboard widget types, including gauges, scorecards, and text boxes, is now Generally Available.
- For information about dashboards, see the following: Create and manage custom dashboards Install a dashboard template Import Grafana dashboards April 09, 2025 Feature Application Monitoring lets you monitor the resources and infrastructure from the perspective of an App Hub application.
- In addition to using the JSON editor to change the contents of the dashboard, you can save the current dashboard definition to a local system, and you can upload a dashboard definition to your Google Cloud project.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Editing a rule deletes the old rule and creates a new one.
- Select the existing custom dashboard to which you want to save the chart, or select New Dashboard to create a new dashboard for the chart.
- Make use of valuable metrics : Create alerting policies and dashboards for unused billable metrics.

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.groups.get monitoring.groups.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list monitoring.snoozes.get monitoring.snoozes.list monitoring.timeSeries.list monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list opsconfigmonitoring. resourceMetadata. list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Stackdriver Admin ( roles/ stackdriver.admin ) Admin role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write Stackdriver Viewer ( roles/ stackdriver.viewer ) Viewer role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Monitoring AlertPolicy Editor ( roles/ monitoring.alertPolicyEditor ) Read/write access to alerting policies. monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update Monitoring AlertPolicy Viewer ( roles/ monitoring.alertPolicyViewer ) Read-only access to alerting policies. monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings Monitoring Alert Viewer Beta ( roles/ monitoring.alertViewer ) Read access to alerts. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Editor Beta ( roles/ monitoring.cloudConsoleIncidentEditor ) Read/write access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Viewer Beta ( roles/ monitoring.cloudConsoleIncidentViewer ) Read access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Dashboard Configuration Editor ( roles/ monitoring.dashboardEditor ) Read/write access to dashboard configurations. monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update Monitoring Dashboard Configuration Viewer ( roles/ monitoring.dashboardViewer ) Read-only access to dashboard configurations. monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings Monitoring Metrics Scopes Admin Beta ( roles/ monitoring.metricsScopesAdmin ) Access to add and remove monitored projects from metrics scopes. monitoring.metricsScopes.link resourcemanager.projects.get resourcemanager.projects.list Monitoring Metrics Scopes Viewer Beta ( roles/ monitoring.metricsScopesViewer ) Read-only access to metrics scopes and their monitored projects. resourcemanager.projects.get resourcemanager.projects.list Monitoring NotificationChannel Editor Beta ( roles/ monitoring.notificationChannelEditor ) Read/write access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify Monitoring NotificationChannel Viewer Beta ( roles/ monitoring.notificationChannelViewer ) Read-only access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list Monitoring Services Editor ( roles/ monitoring.servicesEditor ) Read/write access to services. monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update Monitoring Services Viewer ( roles/ monitoring.servicesViewer ) Read-only access to services. monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list Monitoring Snooze Editor ( roles/ monitoring.snoozeEditor ) monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update Monitoring Snooze Viewer ( roles/ monitoring.snoozeViewer ) monitoring.snoozes.get monitoring.snoozes.list Monitoring Uptime Check Configuration Editor Beta ( roles/ monitoring.uptimeCheckConfigEditor ) Read/write access to uptime check configurations. monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update Monitoring Uptime Check Configuration Viewer Beta ( roles/ monitoring.uptimeCheckConfigViewer ) Read-only access to uptime check configurations. monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list Ops Config Monitoring Resource Metadata Viewer Beta ( roles/ opsconfigmonitoring.resourceMetadata.viewer ) Read-only access to resource metadata. opsconfigmonitoring. resourceMetadata. list Ops Config Monitoring Resource Metadata Writer Beta ( roles/ opsconfigmonitoring.resourceMetadata.writer ) Write-only access to resource metadata.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.metricsScopes.link monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. getVerificationCode monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Editor ( roles/ monitoring.editor ) Provides full access to information about all monitoring data and configurations.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups. monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring.metricDescriptors. monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Metric Writer ( roles/ monitoring.metricWriter ) Provides write-only access to metrics.
- Monitoring Monitoring Editor View Monitoring data, and create and edit configurations.

