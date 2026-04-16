---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.787Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Uptime check failure logs in Uptime details"
feature_slug: "uptime-check-failure-logs-in-uptime-details"
latest_feature_date: "2025-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/access-control"
keywords:
  - "uptime"
  - "check"
  - "failure"
  - "logs"
  - "details"
  - "page"
  - "can"
  - "display"
---

# Uptime check failure logs in Uptime details

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Uptime details page can display logs for uptime check failures when failure logging is enabled.

## Extended Definition

The Uptime details page can display logs for uptime check failures when failure logging is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can probe HTTP, HTTPS, and TCP endpoints for responsiveness with uptime checks , and then get notified when an endpoint fails to respond.
- You can also create a broken-link checker to crawl a web page and then notify you when broken links are detected.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.

### Troubleshoot Application Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this failure, do the following: To get the permissions that you need to view log data, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or the management project for your app-enabled folder and any other projects listed its default log scope.
- This document contains information that might help you understand the what data is displayed on the Application monitoring page.
- You then open an Google Cloud Observability page, like the Logs Explorer page, and the resource picker is reset to a project.
- You've added application labels to your alerting policy, but the policy isn't listed To resolve this failure, verify that the policy includes the following labels: apphub application location apphub application id apphub service id or apphub workload id The dashboards for your services and workloads differ There is no action to take.

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.groups.get monitoring.groups.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list monitoring.snoozes.get monitoring.snoozes.list monitoring.timeSeries.list monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list opsconfigmonitoring. resourceMetadata. list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Stackdriver Admin ( roles/ stackdriver.admin ) Admin role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write Stackdriver Viewer ( roles/ stackdriver.viewer ) Viewer role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Monitoring AlertPolicy Editor ( roles/ monitoring.alertPolicyEditor ) Read/write access to alerting policies. monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update Monitoring AlertPolicy Viewer ( roles/ monitoring.alertPolicyViewer ) Read-only access to alerting policies. monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings Monitoring Alert Viewer Beta ( roles/ monitoring.alertViewer ) Read access to alerts. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Editor Beta ( roles/ monitoring.cloudConsoleIncidentEditor ) Read/write access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Viewer Beta ( roles/ monitoring.cloudConsoleIncidentViewer ) Read access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Dashboard Configuration Editor ( roles/ monitoring.dashboardEditor ) Read/write access to dashboard configurations. monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update Monitoring Dashboard Configuration Viewer ( roles/ monitoring.dashboardViewer ) Read-only access to dashboard configurations. monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings Monitoring Metrics Scopes Admin Beta ( roles/ monitoring.metricsScopesAdmin ) Access to add and remove monitored projects from metrics scopes. monitoring.metricsScopes.link resourcemanager.projects.get resourcemanager.projects.list Monitoring Metrics Scopes Viewer Beta ( roles/ monitoring.metricsScopesViewer ) Read-only access to metrics scopes and their monitored projects. resourcemanager.projects.get resourcemanager.projects.list Monitoring NotificationChannel Editor Beta ( roles/ monitoring.notificationChannelEditor ) Read/write access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify Monitoring NotificationChannel Viewer Beta ( roles/ monitoring.notificationChannelViewer ) Read-only access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list Monitoring Services Editor ( roles/ monitoring.servicesEditor ) Read/write access to services. monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update Monitoring Services Viewer ( roles/ monitoring.servicesViewer ) Read-only access to services. monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list Monitoring Snooze Editor ( roles/ monitoring.snoozeEditor ) monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update Monitoring Snooze Viewer ( roles/ monitoring.snoozeViewer ) monitoring.snoozes.get monitoring.snoozes.list Monitoring Uptime Check Configuration Editor Beta ( roles/ monitoring.uptimeCheckConfigEditor ) Read/write access to uptime check configurations. monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update Monitoring Uptime Check Configuration Viewer Beta ( roles/ monitoring.uptimeCheckConfigViewer ) Read-only access to uptime check configurations. monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list Ops Config Monitoring Resource Metadata Viewer Beta ( roles/ opsconfigmonitoring.resourceMetadata.viewer ) Read-only access to resource metadata. opsconfigmonitoring. resourceMetadata. list Ops Config Monitoring Resource Metadata Writer Beta ( roles/ opsconfigmonitoring.resourceMetadata.writer ) Write-only access to resource metadata.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups. monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring.metricDescriptors. monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries. monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Metric Writer ( roles/ monitoring.metricWriter ) Provides write-only access to metrics.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.metricsScopes.link monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. getVerificationCode monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Editor ( roles/ monitoring.editor ) Provides full access to information about all monitoring data and configurations.
- Uptime-check configuration roles The following roles grant permissions only for uptime-check configurations: Name Title Description roles/monitoring.uptimeCheckConfigViewer Monitoring Uptime Check Configurations Viewer Grants read-only access to uptime-check configurations. roles/monitoring.uptimeCheckConfigEditor Monitoring Uptime Check Configurations Editor Grants read-write access to uptime-check configurations.

