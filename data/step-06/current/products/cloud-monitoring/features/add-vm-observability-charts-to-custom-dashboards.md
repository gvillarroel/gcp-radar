---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.931Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Add VM Observability charts to custom dashboards"
feature_slug: "add-vm-observability-charts-to-custom-dashboards"
latest_feature_date: "2021-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "add"
  - "vm"
  - "observability"
  - "charts"
  - "custom"
  - "dashboards"
  - "users"
  - "can"
---

# Add VM Observability charts to custom dashboards

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Users can copy charts from the Compute Engine VM Observability tab to custom dashboards and optionally rename them.

## Extended Definition

Users can copy charts from the Compute Engine VM Observability tab to custom dashboards and optionally rename them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Unused billable metrics represent possible observability gaps that might be filled by creating custom dashboards or alerting policies, or opportunities to reduce costs by excluding the metric entirely.
- Reads from Metrics Explorer or charts on custom dashboards are "console" reads, and API reads from other sources are "other".
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- To determine what trace data to analyze, Google Cloud Observability queries the resources listed in the default trace scope for trace data, and then retains only the data that is for projects within your application management boundary.
- Explore trace data Note: If your dashboards aren't displaying the trace data that you expect, then you might need to configure the default trace scope or you might need additional Identity and Access Management permissions.
- When you use an app-enabled folder, the Google Cloud console automatically resets the resource picker from an app-enabled folder to the folder's management project when you navigate to a Google Cloud Observability page.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To view all of the telemetry generated by your application through a single interface, such as through the dashboards that Application Monitoring provides, you must configure Google Cloud Observability.
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.

