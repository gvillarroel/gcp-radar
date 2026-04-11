---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.097Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Broken-link checker"
feature_slug: "broken-link-checker"
latest_feature_date: "2023-12-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/access-control"
keywords:
  - "broken"
  - "link"
  - "checker"
  - "this"
  - "creates"
  - "synthetic"
  - "checks"
  - "that"
---

# Broken-link checker

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature creates synthetic checks that periodically validate links on a website.

## Extended Definition

This feature creates synthetic checks that periodically validate links on a website.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- February 20, 2024 Change For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents: Instrumentation and observability overview Choose an instrumentation approach Go instrumentation example Java instrumentation example February 12, 2024 Change You can now create a broken-link checker, which periodically validates the links contained in your website.
- December 07, 2023 Feature You can now create a broken-link checker, which periodically validates the links contained in your website.
- April 26, 2024 Feature Broken-link checkers collect screenshots of failing tests in a Cloud Storage bucket.
- For more information, see Create a broken-link checker .

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- You can also create a broken-link checker to crawl a web page and then notify you when broken links are detected.
- Cloud Monitoring data model This section introduces the Cloud Monitoring data model: A metric type describes something that is measured.
- Here are a few of the ways that you can display this data: You can show the CPU utilization of every VM instance.
- The scoping project stores the alerts , synthetic monitors , and dashboards that you configure.

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.groups.get monitoring.groups.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list monitoring.snoozes.get monitoring.snoozes.list monitoring.timeSeries.list monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list opsconfigmonitoring. resourceMetadata. list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Stackdriver Admin ( roles/ stackdriver.admin ) Admin role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write Stackdriver Viewer ( roles/ stackdriver.viewer ) Viewer role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Monitoring AlertPolicy Editor ( roles/ monitoring.alertPolicyEditor ) Read/write access to alerting policies. monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update Monitoring AlertPolicy Viewer ( roles/ monitoring.alertPolicyViewer ) Read-only access to alerting policies. monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings Monitoring Alert Viewer Beta ( roles/ monitoring.alertViewer ) Read access to alerts. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Editor Beta ( roles/ monitoring.cloudConsoleIncidentEditor ) Read/write access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Viewer Beta ( roles/ monitoring.cloudConsoleIncidentViewer ) Read access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Dashboard Configuration Editor ( roles/ monitoring.dashboardEditor ) Read/write access to dashboard configurations. monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update Monitoring Dashboard Configuration Viewer ( roles/ monitoring.dashboardViewer ) Read-only access to dashboard configurations. monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings Monitoring Metrics Scopes Admin Beta ( roles/ monitoring.metricsScopesAdmin ) Access to add and remove monitored projects from metrics scopes. monitoring.metricsScopes.link resourcemanager.projects.get resourcemanager.projects.list Monitoring Metrics Scopes Viewer Beta ( roles/ monitoring.metricsScopesViewer ) Read-only access to metrics scopes and their monitored projects. resourcemanager.projects.get resourcemanager.projects.list Monitoring NotificationChannel Editor Beta ( roles/ monitoring.notificationChannelEditor ) Read/write access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify Monitoring NotificationChannel Viewer Beta ( roles/ monitoring.notificationChannelViewer ) Read-only access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list Monitoring Services Editor ( roles/ monitoring.servicesEditor ) Read/write access to services. monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update Monitoring Services Viewer ( roles/ monitoring.servicesViewer ) Read-only access to services. monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list Monitoring Snooze Editor ( roles/ monitoring.snoozeEditor ) monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update Monitoring Snooze Viewer ( roles/ monitoring.snoozeViewer ) monitoring.snoozes.get monitoring.snoozes.list Monitoring Uptime Check Configuration Editor Beta ( roles/ monitoring.uptimeCheckConfigEditor ) Read/write access to uptime check configurations. monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update Monitoring Uptime Check Configuration Viewer Beta ( roles/ monitoring.uptimeCheckConfigViewer ) Read-only access to uptime check configurations. monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list Ops Config Monitoring Resource Metadata Viewer Beta ( roles/ opsconfigmonitoring.resourceMetadata.viewer ) Read-only access to resource metadata. opsconfigmonitoring. resourceMetadata. list Ops Config Monitoring Resource Metadata Writer Beta ( roles/ opsconfigmonitoring.resourceMetadata.writer ) Write-only access to resource metadata.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update monitoring.groups.create monitoring.groups.delete monitoring.groups.get monitoring.groups.list monitoring.groups.update monitoring. metricDescriptors. create monitoring. metricDescriptors. delete monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring.metricsScopes.link monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. getVerificationCode monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update monitoring.timeSeries.create monitoring.timeSeries.list monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update opsconfigmonitoring. opsconfigmonitoring. resourceMetadata. list opsconfigmonitoring. resourceMetadata. write resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write telemetry.metrics.write Monitoring Editor ( roles/ monitoring.editor ) Provides full access to information about all monitoring data and configurations.
- This provides exactly the permissions needed by the Ops Config Monitoring metadata agent and other systems that send metadata. opsconfigmonitoring. resourceMetadata. write Stackdriver Accounts Editor ( roles/ stackdriver.accounts.editor ) Read/write access to manage Stackdriver account structure. resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy. serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. consumerpolicy. update serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.services.enable serviceusage.services.get serviceusage.values.test stackdriver.projects. stackdriver.projects.edit stackdriver.projects.get Stackdriver Accounts Viewer ( roles/ stackdriver.accounts.viewer ) Read-only access to get and list information about Stackdriver account structure. resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get Stackdriver Resource Metadata Writer Beta ( roles/ stackdriver.resourceMetadata.writer ) Write-only access to resource metadata.
- For example: export PROJECT ID = "my-test-project" export EMAIL ADDRESS = "myuser@gmail.com" gcloud projects add - iam - policy - binding \ $ PROJECT ID \ -- member = "user:$EMAIL ADDRESS" \ -- role = "roles/monitoring.editor" You can confirm the granted roles using the gcloud projects get-iam-policy command: export PROJECT ID = "my-test-project" gcloud projects get - iam - policy $ PROJECT ID Predefined roles This section lists a subset of IAM roles that are predefined by Cloud Monitoring.

