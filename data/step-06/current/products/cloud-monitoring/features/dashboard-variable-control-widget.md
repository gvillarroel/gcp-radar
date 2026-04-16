---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.764Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard variable control widget"
feature_slug: "dashboard-variable-control-widget"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/access-control"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "dashboard"
  - "variable"
  - "control"
  - "widget"
  - "monitoring"
  - "dashboards"
  - "can"
  - "include"
---

# Dashboard variable control widget

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring dashboards can include a widget for managing the settings of a dashboard variable.

## Extended Definition

Cloud Monitoring dashboards can include a widget for managing the settings of a dashboard variable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- This document describes how to view the dashboards that Application Monitoring creates for your App Hub applications, services, and workloads.
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.groups.get monitoring.groups.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list monitoring.snoozes.get monitoring.snoozes.list monitoring.timeSeries.list monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list opsconfigmonitoring. resourceMetadata. list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Stackdriver Admin ( roles/ stackdriver.admin ) Admin role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write Stackdriver Viewer ( roles/ stackdriver.viewer ) Viewer role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Monitoring AlertPolicy Editor ( roles/ monitoring.alertPolicyEditor ) Read/write access to alerting policies. monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update Monitoring AlertPolicy Viewer ( roles/ monitoring.alertPolicyViewer ) Read-only access to alerting policies. monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings Monitoring Alert Viewer Beta ( roles/ monitoring.alertViewer ) Read access to alerts. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Editor Beta ( roles/ monitoring.cloudConsoleIncidentEditor ) Read/write access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Viewer Beta ( roles/ monitoring.cloudConsoleIncidentViewer ) Read access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Dashboard Configuration Editor ( roles/ monitoring.dashboardEditor ) Read/write access to dashboard configurations. monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update Monitoring Dashboard Configuration Viewer ( roles/ monitoring.dashboardViewer ) Read-only access to dashboard configurations. monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings Monitoring Metrics Scopes Admin Beta ( roles/ monitoring.metricsScopesAdmin ) Access to add and remove monitored projects from metrics scopes. monitoring.metricsScopes.link resourcemanager.projects.get resourcemanager.projects.list Monitoring Metrics Scopes Viewer Beta ( roles/ monitoring.metricsScopesViewer ) Read-only access to metrics scopes and their monitored projects. resourcemanager.projects.get resourcemanager.projects.list Monitoring NotificationChannel Editor Beta ( roles/ monitoring.notificationChannelEditor ) Read/write access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify Monitoring NotificationChannel Viewer Beta ( roles/ monitoring.notificationChannelViewer ) Read-only access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list Monitoring Services Editor ( roles/ monitoring.servicesEditor ) Read/write access to services. monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update Monitoring Services Viewer ( roles/ monitoring.servicesViewer ) Read-only access to services. monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list Monitoring Snooze Editor ( roles/ monitoring.snoozeEditor ) monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update Monitoring Snooze Viewer ( roles/ monitoring.snoozeViewer ) monitoring.snoozes.get monitoring.snoozes.list Monitoring Uptime Check Configuration Editor Beta ( roles/ monitoring.uptimeCheckConfigEditor ) Read/write access to uptime check configurations. monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update Monitoring Uptime Check Configuration Viewer Beta ( roles/ monitoring.uptimeCheckConfigViewer ) Read-only access to uptime check configurations. monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list Ops Config Monitoring Resource Metadata Viewer Beta ( roles/ opsconfigmonitoring.resourceMetadata.viewer ) Read-only access to resource metadata. opsconfigmonitoring. resourceMetadata. list Ops Config Monitoring Resource Metadata Writer Beta ( roles/ opsconfigmonitoring.resourceMetadata.writer ) Write-only access to resource metadata.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups. monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring.metricDescriptors. monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Metric Writer ( roles/ monitoring.metricWriter ) Provides write-only access to metrics.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.metricsScopes.link monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. getVerificationCode monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Editor ( roles/ monitoring.editor ) Provides full access to information about all monitoring data and configurations.
- Dashboard roles The following roles grant permissions only for dashboards: Name Title Description roles/monitoring.dashboardViewer Monitoring Dashboard Configuration Viewer Grants read-only access to dashboard configurations. roles/monitoring.dashboardEditor Monitoring Dashboard Configuration Editor Grants read-write access to dashboard configurations.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .
- For example, for an App Hub application, dashboards are created for the application and for each of its services and workloads.
- These dashboards show curated information that helps you understand the health of your resources and applications.

