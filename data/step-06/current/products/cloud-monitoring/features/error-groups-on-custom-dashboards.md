---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.100Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Error groups on custom dashboards"
feature_slug: "error-groups-on-custom-dashboards"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "error"
  - "groups"
  - "on"
  - "custom"
  - "dashboards"
  - "this"
  - "lets"
  - "display"
---

# Error groups on custom dashboards

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

This feature lets custom dashboards display Error Reporting error groups.

## Extended Definition

This feature lets custom dashboards display Error Reporting error groups.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.
- Explore log data Note: If your dashboards aren't displaying the log data that you expect, then you might need to configure the default log scope or you might need additional Identity and Access Management permissions.
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- October 17, 2023 Feature You can now view error groups on your custom dashboards.
- To learn more, see the following: Correlate metric and log data Explore application telemetry August 25, 2025 Feature Your Application Monitoring dashboards will display latency, error rates, and traffic level for workloads deployed on Google Kubernetes Engine, when you instrument your application with OpenTelemetry.
- November 03, 2022 Feature You can now add table widgets to custom dashboards that let you limit the number of table rows, persiste specific columns, display only those rows with the highest, or lowest values, and that display a visual indicator of the value as compared to the range of possible values.
- For information about dashboards, see the following: Create and manage custom dashboards Install a dashboard template Import Grafana dashboards April 09, 2025 Feature Application Monitoring lets you monitor the resources and infrastructure from the perspective of an App Hub application.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Charts and tables that show metric data Log data and error groups Charts for alerting policies Information about alerts Text Events , such as a reboot or a crash, that affects the operation of a system.
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .
- Here are a few of the ways that you can display this data: You can show the CPU utilization of every VM instance.
- Your custom dashboards can display the following.

