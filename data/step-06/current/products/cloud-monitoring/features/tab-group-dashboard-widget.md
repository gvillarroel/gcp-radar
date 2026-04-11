---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.084Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Tab-group dashboard widget"
feature_slug: "tab-group-dashboard-widget"
latest_feature_date: "2025-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "tab"
  - "group"
  - "dashboard"
  - "widget"
  - "custom"
  - "dashboards"
  - "widgets"
  - "that"
---

# Tab-group dashboard widget

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Custom dashboards support tab-group widgets that reduce load time by showing one member of a grouped collection at a time.

## Extended Definition

Custom dashboards support tab-group widgets that reduce load time by showing one member of a grouped collection at a time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2022 Feature You can now add table widgets to custom dashboards that let you limit the number of table rows, persiste specific columns, display only those rows with the highest, or lowest values, and that display a visual indicator of the value as compared to the range of possible values.
- July 29, 2022 Feature You can now add table widgets to custom dashboards that let you limit the number of table rows, display only those rows with the highest, or lowest values, and that display a visual indicator of the value as compared to the range of possible values.
- December 19, 2023 Feature On your custom dashboards, you can add section widgets that create a table of contents for your dashboard.
- December 18, 2023 Feature On your custom dashboards, you can group widgets into a single-view widget or into a collapsible group.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- Filter a dashboard You can add filters to a dashboard that apply to all widgets on the dashboard.
- View summary information To view general information about the application along with a list of services and workloads, on the dashboard for the application, select the Overview tab: As shown, this tab provides general information about the application along with a list of services and workloads that are registered to the application.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- Unused billable metrics represent possible observability gaps that might be filled by creating custom dashboards or alerting policies, or opportunities to reduce costs by excluding the metric entirely.
- To view alerting policies or custom dashboards for a metric in your metrics scope but defined in a different project, use the project picker to select the Google Cloud project that stores the metric.

