---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.908Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Dashboard template variables and permanent filters"
feature_slug: "dashboard-template-variables-and-permanent-filters"
latest_feature_date: "2022-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
keywords:
  - "dashboard"
  - "template"
  - "variables"
  - "permanent"
  - "filters"
  - "monitoring"
  - "dashboards"
  - "reusable"
---

# Dashboard template variables and permanent filters

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring dashboards support template variables and permanent filters for reusable dashboard customization.

## Extended Definition

Cloud Monitoring dashboards support template variables and permanent filters for reusable dashboard customization.

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
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- This document describes how to view the dashboards that Application Monitoring creates for your App Hub applications, services, and workloads.
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- For example, for an App Hub application, dashboards are created for the application and for each of its services and workloads.
- These dashboards show curated information that helps you understand the health of your resources and applications.
- These dashboards show information like an application's log or metric data, and the number of open alerts.

