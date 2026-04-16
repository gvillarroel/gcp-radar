---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.797Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Text widget dashboard section links"
feature_slug: "text-widget-dashboard-section-links"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "text"
  - "widget"
  - "dashboard"
  - "section"
  - "links"
  - "widgets"
  - "can"
  - "link"
---

# Text widget dashboard section links

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Text widgets can link to sections of a dashboard.

## Extended Definition

Text widgets can link to sections of a dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- This section describes how you can use options on a dashboard or on a widget, like a chart, to get more information about the data that is shown.
- Filter a dashboard You can add filters to a dashboard that apply to all widgets on the dashboard.
- The Application Logs and Logs sections of a dashboard display log entries that match a filter and are stored by the resources listed in the default log scope of your App Hub host project or management project.
- To view closed incident and those that opened outside the dashboard's time range setting, in the toolbar of the Incidents section, disable Grouped by policy , and then enable Show closed incidents .

### Configure the Ops Agent \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration](https://docs.cloud.google.com/monitoring/agent/ops-agent/configuration)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Logging configurations The logging configuration uses the configuration model described previously: receivers : This element describes the data to collect from log files; this data is mapped into a <timestamp, record> model. processors : This optional element describes how the agent can modify the collected information. service : This element links receivers and processors together to create data flows, called pipelines .
- The building blocks of the configuration are as follows: receivers : This element describes what is collected by the agent. processors : This element describes how the agent can modify the collected information. service : This element links receivers and processors together to create data flows, called pipelines .
- Metrics service The metrics service customizes verbosity for the Ops Agent metrics module's own logs and links metrics receivers and processors together into pipelines.
- Logging service The logging service customizes verbosity for the Ops Agent's own logs, and links logging receivers and processors together into pipelines.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- The summary pane for metric usage provides links to more detailed information about trends over time and links to preconfigured, customizable alerting policies for usage trends.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.

