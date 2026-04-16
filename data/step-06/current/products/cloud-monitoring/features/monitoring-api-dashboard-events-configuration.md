---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.821Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring API dashboard events configuration"
feature_slug: "monitoring-api-dashboard-events-configuration"
latest_feature_date: "2024-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest"
keywords:
  - "monitoring"
  - "dashboard"
  - "events"
  - "configuration"
  - "feature"
  - "lets"
  - "enable"
  - "filters"
---

# Monitoring API dashboard events configuration

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature lets the Monitoring API enable events and filters on dashboards.

## Extended Definition

This feature lets the Monitoring API enable events and filters on dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest](https://docs.cloud.google.com/python/docs/reference/monitoring/latest)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot illustrates the dashboard for a workload: The registration status of a service or workload affects what data Application Monitoring displays on the dashboard for the service or workload: Registered : Application Monitoring uses the application-specific labels and attributes that supported infrastructure and instrumented applications attach to the telemetry they generate.
- To open the Application Monitoring dashboard for a service or workload, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To view closed incident and those that opened outside the dashboard's time range setting, in the toolbar of the Incidents section, disable Grouped by policy , and then enable Show closed incidents .
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- Usage of the metrics Used metrics are metrics that have been queried in the last 30 days by the Cloud Monitoring API or other tools, or that are used in a custom dashboard or alerting policy.

### "Python Client for Stackdriver Monitoring \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest](https://docs.cloud.google.com/python/docs/reference/monitoring/latest)
- Source ID: `site-python-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google-specific logging configurations (default handlers for environment-based configuration; not propagating logging events to the root logger) get executed the first time any client library is instantiated in your application, and only if the affected loggers have not been previously configured. (This is the reason for 2.i. above.) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 Stackdriver Monitoring : collects metrics, events, and metadata from Google Cloud, Amazon Web Services (AWS), hosted uptime probes, and application instrumentation.
- Simple, environment-based configuration To enable logging for this library without any changes in your code, set the GOOGLE SDK PYTHON LOGGING SCOPE environment variable to a valid Google logging scope.
- Logging This library uses the standard Python logging functionality to log some RPC events that could be of interest for debugging and monitoring purposes.

