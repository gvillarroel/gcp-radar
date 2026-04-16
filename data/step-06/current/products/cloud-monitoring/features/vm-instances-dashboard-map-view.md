---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.881Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM Instances dashboard map view"
feature_slug: "vm-instances-dashboard-map-view"
latest_feature_date: "2022-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "vm"
  - "instances"
  - "dashboard"
  - "map"
  - "view"
  - "includes"
  - "visualizing"
  - "fleet"
---

# VM Instances dashboard map view

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The VM Instances dashboard includes a map view for visualizing fleet health by labels and metric values.

## Extended Definition

The VM Instances dashboard includes a map view for visualizing fleet health by labels and metric values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Cloud Monitoring overview Stay organized with collections Save and categorize content based on your preferences.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- To view alerting policies or custom dashboards for a metric in your metrics scope but defined in a different project, use the project picker to select the Google Cloud project that stores the metric.
- You can use the Metrics Management page to do the following: View metric usage at a glance : See how your metrics are being used in queries , custom dashboards , or alerting policies .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- View summary information To view general information about the application along with a list of services and workloads, on the dashboard for the application, select the Overview tab: As shown, this tab provides general information about the application along with a list of services and workloads that are registered to the application.
- To view closed incident and those that opened outside the dashboard's time range setting, in the toolbar of the Incidents section, disable Grouped by policy , and then enable Show closed incidents .
- View topology To see a dynamic view of your application's services and dashboards, incidents, and traffic, on the dashboard for the application, select the Topology tab.

