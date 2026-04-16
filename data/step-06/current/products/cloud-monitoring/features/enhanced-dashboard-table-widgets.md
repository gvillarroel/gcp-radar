---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.884Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Enhanced dashboard table widgets"
feature_slug: "enhanced-dashboard-table-widgets"
latest_feature_date: "2022-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "enhanced"
  - "dashboard"
  - "table"
  - "widgets"
  - "row"
  - "limits"
  - "column"
  - "persistence"
---

# Enhanced dashboard table widgets

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Dashboard table widgets support row limits, column persistence, top or bottom filtering, and visual value indicators.

## Extended Definition

Dashboard table widgets support row limits, column persistence, top or bottom filtering, and visual value indicators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- For each supported App Hub region , this page lists at most 100 discovered services and 100 discovered workloads: The App Hub Type column displays the App Hub registration type : Service ( ) Workload ( ) The Functional Type column displays the App Hub functional type : Agent ( robot 2 ) MCP server ( ) From the Services and Workloads tab, you can do all of the following: Modify the data the table displays by using the view column Columns button.
- Explore metric data The charts and tables on your dashboard display golden signals and other metric data that is relevant for the resources used by your application, service, or workload.
- Filter a dashboard You can add filters to a dashboard that apply to all widgets on the dashboard.
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- Create a chart for an unmonitored metric When a metric in the table has no associated custom dashboard, the table provides a Create chart button.
- If there is no alerting policy or dashboard associated with a metric, the table includes a button you can click to create one.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent.
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.

