---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.975Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM dashboard recommended alerts"
feature_slug: "vm-dashboard-recommended-alerts"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "vm"
  - "dashboard"
  - "recommended"
  - "alerts"
  - "instances"
  - "includes"
  - "button"
  - "configure"
---

# VM dashboard recommended alerts

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The VM Instances dashboard includes a Recommended Alerts button to configure fleet-wide alerts.

## Extended Definition

The VM Instances dashboard includes a Recommended Alerts button to configure fleet-wide alerts.

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
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- When these integrations exist, you might see a panel that lists recommended alerts, or you might see a button on a chart that lets you create an alerting policy.
- The scoping project stores the alerts , synthetic monitors , and dashboards that you configure.
- These dashboards show information like an application's log or metric data, and the number of open alerts.
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- If there is no alerting policy or dashboard associated with a metric, the table includes a button you can click to create one.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Create a chart for an unmonitored metric When a metric in the table has no associated custom dashboard, the table provides a Create chart button.
- You can use this button to create a chart and place it on a custom dashboard.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.
- Explore log data Note: If your dashboards aren't displaying the log data that you expect, then you might need to configure the default log scope or you might need additional Identity and Access Management permissions.
- The query is preconfigured to show log entries that match specific application labels and that are in the time range specified by the dashboard.
- The logging query includes any applicable variables , but it doesn't include dashboard-level filters.

