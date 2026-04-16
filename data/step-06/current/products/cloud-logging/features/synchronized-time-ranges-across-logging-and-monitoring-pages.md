---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.347Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Synchronized time ranges across Logging and Monitoring pages"
feature_slug: "synchronized-time-ranges-across-logging-and-monitoring-pages"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
keywords:
  - "synchronized"
  - "time"
  - "ranges"
  - "across"
  - "logging"
  - "monitoring"
  - "pages"
  - "selected"
---

# Synchronized time ranges across Logging and Monitoring pages

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Selected Logging and Monitoring pages share synchronized time range settings.

## Extended Definition

Selected Logging and Monitoring pages share synchronized time range settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- When you select the Zoom to time feature, the following happens: The logs data that you see in the Query results pane reloads and narrows according to the time-range restriction of the selected timeline bar.
- When you select the Scroll to time feature, the following happens: The logs data that you see in the Query results pane adjusts according to the time range captured by the selected timeline bar.
- The query isn't run, but a partial reload of the data might occur to ensure you're seeing logs in the Query results pane that correspond with the selected timeline bar's time range.
- The timeline changes to show only logs that have a timestamp value that falls within the time range of the selected timeline bar. by the selected timeline bar.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- These policies can't manage versions of the Ops Agent earlier than version 2.58.0, Ops Agent instances installed by using other means, or any version of the legacy Monitoring agent or Logging agent .
- Verify that the Ops Agent is collecting telemetry If the Ops Agent has been successfully installed and is running correctly, then it sends metrics to Cloud Monitoring and logs to Cloud Logging.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules , ask your administrator to grant you the following IAM roles on your project: Monitoring AlertPolicy Editor ( roles/monitoring.alertPolicyEditor ) Monitoring NotificationChannel Editor ( roles/monitoring.notificationChannelEditor ) Logs Configuration Writer ( roles/logging.configWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules : monitoring.alertPolicies.create monitoring.notificationChannels.create logging.notificationRules.create You might also be able to get these permissions with custom roles or other predefined roles .
- To let a user read logs in the Required and Default buckets or to use the Logs Explorer and Observability Analytics pages, grant one of the following roles: For access to all logs in the Required bucket, and access to the Default view on the Default bucket, grant the Logs Viewer ( roles/logging.viewer ) role.
- The Monitoring Viewer ( roles/monitoring.viewer ) role contains the permissions to read TimeSeries data.

