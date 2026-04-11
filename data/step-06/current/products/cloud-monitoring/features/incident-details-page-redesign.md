---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.133Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Incident details page redesign"
feature_slug: "incident-details-page-redesign"
latest_feature_date: "2021-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/access-control"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install"
keywords:
  - "incident"
  - "details"
  - "page"
  - "redesign"
  - "the"
  - "was"
  - "redesigned"
  - "with"
---

# Incident details page redesign

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Incident details page was redesigned with a timeline, charting tools, and an investigative history log.

## Extended Definition

The Incident details page was redesigned with a timeline, charting tools, and an investigative history log.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- You can access these playbook dashboards from the Dashboards list and from the Incident details page associated with alerts you've set up for CPU utilization or memory utilization.
- For more information, see the following documents: Create and manage variables and pinned filters Configure dashboard filters and variables by using the API February 04, 2025 Feature When you create a snooze from the Incident details page, you can now apply the snooze to other incidents that have one or more of the same resource labels.
- October 09, 2023 Change When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy.
- January 18, 2022 Change When you click on an entry in the Instances table on the Monitoring VM Instances dashboard, a sliding panel now appears with the instance details, replacing the VM Instance Details page.

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The Principals with access page doesn't display all principals.
- Lowest-level resources where you can grant this role: Project cloudnotifications. activities. list monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring.alerts. monitoring.alerts.get monitoring.alerts.list monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.groups.get monitoring.groups.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list monitoring.snoozes.get monitoring.snoozes.list monitoring.timeSeries.list monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list opsconfigmonitoring. resourceMetadata. list resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Stackdriver Admin ( roles/ stackdriver.admin ) Admin role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver. stackdriver.projects.edit stackdriver.projects.get stackdriver. resourceMetadata. list stackdriver. resourceMetadata. write Stackdriver Viewer ( roles/ stackdriver.viewer ) Viewer role for stackdriver resourcemanager.projects.get resourcemanager.projects.list stackdriver.projects.get stackdriver. resourceMetadata. list Monitoring AlertPolicy Editor ( roles/ monitoring.alertPolicyEditor ) Read/write access to alerting policies. monitoring.alertPolicies. monitoring. alertPolicies. create monitoring. alertPolicies. createTagBinding monitoring. alertPolicies. delete monitoring. alertPolicies. deleteTagBinding monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings monitoring. alertPolicies. update Monitoring AlertPolicy Viewer ( roles/ monitoring.alertPolicyViewer ) Read-only access to alerting policies. monitoring.alertPolicies.get monitoring.alertPolicies.list monitoring. alertPolicies. listEffectiveTags monitoring. alertPolicies. listTagBindings Monitoring Alert Viewer Beta ( roles/ monitoring.alertViewer ) Read access to alerts. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Editor Beta ( roles/ monitoring.cloudConsoleIncidentEditor ) Read/write access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Cloud Console Incident Viewer Beta ( roles/ monitoring.cloudConsoleIncidentViewer ) Read access to incidents from Cloud Console. monitoring.alerts. monitoring.alerts.get monitoring.alerts.list Monitoring Dashboard Configuration Editor ( roles/ monitoring.dashboardEditor ) Read/write access to dashboard configurations. monitoring.dashboards. monitoring.dashboards.create monitoring. dashboards. createTagBinding monitoring.dashboards.delete monitoring. dashboards. deleteTagBinding monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings monitoring.dashboards.update Monitoring Dashboard Configuration Viewer ( roles/ monitoring.dashboardViewer ) Read-only access to dashboard configurations. monitoring.dashboards.get monitoring.dashboards.list monitoring. dashboards. listEffectiveTags monitoring. dashboards. listTagBindings Monitoring Metrics Scopes Admin Beta ( roles/ monitoring.metricsScopesAdmin ) Access to add and remove monitored projects from metrics scopes. monitoring.metricsScopes.link resourcemanager.projects.get resourcemanager.projects.list Monitoring Metrics Scopes Viewer Beta ( roles/ monitoring.metricsScopesViewer ) Read-only access to metrics scopes and their monitored projects. resourcemanager.projects.get resourcemanager.projects.list Monitoring NotificationChannel Editor Beta ( roles/ monitoring.notificationChannelEditor ) Read/write access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. create monitoring. notificationChannels. delete monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. sendVerificationCode monitoring. notificationChannels. update monitoring. notificationChannels. verify Monitoring NotificationChannel Viewer Beta ( roles/ monitoring.notificationChannelViewer ) Read-only access to notification channels. monitoring. notificationChannelDescriptors. monitoring. notificationChannelDescriptors. get monitoring. notificationChannelDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list Monitoring Services Editor ( roles/ monitoring.servicesEditor ) Read/write access to services. monitoring.services. monitoring.services.create monitoring.services.delete monitoring.services.get monitoring.services.list monitoring.services.update monitoring.slos. monitoring.slos.create monitoring.slos.delete monitoring.slos.get monitoring.slos.list monitoring.slos.update Monitoring Services Viewer ( roles/ monitoring.servicesViewer ) Read-only access to services. monitoring.services.get monitoring.services.list monitoring.slos.get monitoring.slos.list Monitoring Snooze Editor ( roles/ monitoring.snoozeEditor ) monitoring.snoozes. monitoring.snoozes.create monitoring.snoozes.get monitoring.snoozes.list monitoring.snoozes.update Monitoring Snooze Viewer ( roles/ monitoring.snoozeViewer ) monitoring.snoozes.get monitoring.snoozes.list Monitoring Uptime Check Configuration Editor Beta ( roles/ monitoring.uptimeCheckConfigEditor ) Read/write access to uptime check configurations. monitoring. uptimeCheckConfigs. monitoring. uptimeCheckConfigs. create monitoring. uptimeCheckConfigs. delete monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list monitoring. uptimeCheckConfigs. update Monitoring Uptime Check Configuration Viewer Beta ( roles/ monitoring.uptimeCheckConfigViewer ) Read-only access to uptime check configurations. monitoring. uptimeCheckConfigs. get monitoring. uptimeCheckConfigs. list Ops Config Monitoring Resource Metadata Viewer Beta ( roles/ opsconfigmonitoring.resourceMetadata.viewer ) Read-only access to resource metadata. opsconfigmonitoring. resourceMetadata. list Ops Config Monitoring Resource Metadata Writer Beta ( roles/ opsconfigmonitoring.resourceMetadata.writer ) Write-only access to resource metadata.
- Warning: Do not grant service agent roles to any principals except service agents . bigquery.jobs.create cloudfunctions.functions.get cloudtrace.traces.patch logging.links.list monitoring. metricDescriptors. get monitoring. metricDescriptors. list monitoring. monitoredResourceDescriptors. monitoring. monitoredResourceDescriptors. get monitoring. monitoredResourceDescriptors. list monitoring. notificationChannels. get monitoring. notificationChannels. list monitoring. notificationChannels. update monitoring.timeSeries.list observability.links.list run.routes.invoke servicedirectory. networks. access servicedirectory. services. resolve serviceusage.services.use Monitoring permissions included in Google Cloud basic roles The Google Cloud basic roles include the following permissions: Name Title Includes permissions roles/viewer Viewer The Monitoring permissions are the same as those in roles/monitoring.viewer . roles/editor Editor The Monitoring permissions are the same as those in roles/monitoring.editor with the exception of the stackdriver.projects.edit permission.
- Incident roles The following roles grant permissions only for incidents: Name Title Description roles/monitoring.cloudConsoleIncidentViewer Monitoring Cloud Console Incident Viewer Grants access to view incidents by using the Google Cloud console. roles/monitoring.cloudConsoleIncidentEditor Monitoring Cloud Console Incident Editor Grants access to view, acknowledge, and close incidents by using the Google Cloud console.

### "Manage VMs covered by the Ops Agent OS policy \_|\_ Cloud Monitoring \_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install](https://docs.cloud.google.com/monitoring/agent/ops-agent/manage-policies-auto-install)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- 940df3e9-77fd-470b-84df-53fb24825c4a goog-ops-agent-v2-x86-template-1-0-0-us-central1-b SUCCEEDED 2022-01-28T05:23:41Z. qwareaff-efte-erew-aeet-faer234t4gga To view details about a specific Ops Agent OS policy assignment, run the following command: gcloud compute os-config os-policy-assignments describe POLICY ASSIGNMENT ID --location= ZONE Uninstall the Ops Agent on VMs covered by the Ops Agent OS policy If you manually uninstall the Ops Agent on a VM covered by the Ops Agent OS policy, then the policy re-installs it.
- To show a list of Ops Agent OS policy assignments in a zone, run the following command: gcloud compute os-config os-policy-assignments list --location= ZONE --filter="ASSIGNMENT ID goog-ops-agent" To extend policy coverage to other VMs, use either the Google Cloud console or the gcloud CLI: Console In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Save your changes. gcloud To extend policy coverage to a VM without coverage, run the following commands: gcloud compute instances update VM NAME --zone= ZONE --update-labels=goog-ops-agent-policy:v2-x86-template- 1-0-0 gcloud compute instances add-metadata VM NAME --zone= ZONE --metadata=enable-osconfig=TRUE Permission Ops Agent installation uses VM Manager and requires permissions to activate the VM Manager API and create a policy.
- If the VM is covered by an Ops Agent OS policy, then the OS policy id column includes goog-ops-agent-policy and the state is "Compliant". gcloud To display a list of Ops Agent OS policy assignments in a zone, run the following command: gcloud compute os-config os-policy-assignment-reports list --location= ZONE --filter="ASSIGNMENT ID goog-ops-agent" The output shows a list of VMs with an Ops Agent OS policy assignment.

