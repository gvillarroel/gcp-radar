---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.835Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard widget grouping"
feature_slug: "dashboard-widget-grouping"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "dashboard"
  - "widget"
  - "grouping"
  - "feature"
  - "lets"
  - "custom"
  - "dashboards"
  - "group"
---

# Dashboard widget grouping

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature lets custom dashboards group widgets into single-view widgets or collapsible groups.

## Extended Definition

This feature lets custom dashboards group widgets into single-view widgets or collapsible groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- However, the flyout retains your current context and lets you save your exploration results to a custom dashboard: To open a flyout, click query stats Explore data .
- To save the chart or logs panel to a custom dashboard, open the widget's Actions menu, select Save to dashboard , and then complete the dialog.
- You can select an existing custom dashboard or you can create a dashboard and then save the widget.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- Unused billable metrics represent possible observability gaps that might be filled by creating custom dashboards or alerting policies, or opportunities to reduce costs by excluding the metric entirely.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Your custom dashboards can display the following.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- To complete these tasks, you can use the dashboard and charting services: To control what data you view and the display format for that data, create a custom dashboard .
- For example, for an App Hub application, dashboards are created for the application and for each of its services and workloads.

