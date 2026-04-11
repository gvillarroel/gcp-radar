---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.091Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard alert incident events"
feature_slug: "dashboard-alert-incident-events"
latest_feature_date: "2024-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "dashboard"
  - "alert"
  - "incident"
  - "events"
  - "this"
  - "lets"
  - "dashboards"
  - "show"
---

# Dashboard alert incident events

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature lets dashboards show events for when alerting incidents were opened.

## Extended Definition

This feature lets dashboards show events for when alerting incidents were opened.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This feature lets you create service-level objectives (SLOs) and set up alerting policies to monitor their performance using auto-generated dashboards with metrics, logs, and alerts in a single place.
- May 28, 2024 Feature Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces: Python example Node.js example For general instrumentation information and recommendations, and for links to other samples, see: Instrumentation and observability overview Choose an instrumentation approach May 13, 2024 Feature You can now configure dashboards to display events by using the Monitoring API.
- You can access these playbook dashboards from the Dashboards list and from the Incident details page associated with alerts you've set up for CPU utilization or memory utilization.
- Change The Metrics management page in Cloud Monitoring now lets you create alerting policies and charts for metrics that have no associated alerting policies or custom dashboards.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- View summary information To view general information about the application along with a list of services and workloads, on the dashboard for the application, select the Overview tab: As shown, this tab provides general information about the application along with a list of services and workloads that are registered to the application.
- To view closed incident and those that opened outside the dashboard's time range setting, in the toolbar of the Incidents section, disable Grouped by policy , and then enable Show closed incidents .
- View topology To see a dynamic view of your application's services and dashboards, incidents, and traffic, on the dashboard for the application, select the Topology tab.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- These dashboards show information like an application's log or metric data, and the number of open alerts.
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- These dashboards show curated information that helps you understand the health of your resources and applications.
- The scoping project stores the alerts , synthetic monitors , and dashboards that you configure.

