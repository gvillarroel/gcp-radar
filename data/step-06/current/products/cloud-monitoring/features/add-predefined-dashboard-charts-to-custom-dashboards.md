---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.922Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Add predefined dashboard charts to custom dashboards"
feature_slug: "add-predefined-dashboard-charts-to-custom-dashboards"
latest_feature_date: "2022-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "add"
  - "predefined"
  - "dashboard"
  - "charts"
  - "custom"
  - "dashboards"
  - "users"
  - "can"
---

# Add predefined dashboard charts to custom dashboards

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Users can copy charts from predefined dashboards to custom dashboards and optionally rename them.

## Extended Definition

Users can copy charts from predefined dashboards to custom dashboards and optionally rename them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.
- Explore log data Note: If your dashboards aren't displaying the log data that you expect, then you might need to configure the default log scope or you might need additional Identity and Access Management permissions.
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Your custom dashboards can display the following.
- You can also save charts to a custom dashboard.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .

