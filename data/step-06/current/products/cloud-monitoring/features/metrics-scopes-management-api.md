---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.942Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Metrics scopes management API"
feature_slug: "metrics-scopes-management-api"
latest_feature_date: "2021-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "metrics"
  - "scopes"
  - "management"
  - "available"
  - "manage"
  - "scope"
  - "project"
---

# Metrics scopes management API

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

An API is available to manage the metrics scope of a Google Cloud project.

## Extended Definition

An API is available to manage the metrics scope of a Google Cloud project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- If your project has multiple projects in its metrics scope, then the metrics shown on the Metrics Management page include the metrics from all of those projects.
- View information about your metrics scope The set of metrics displayed in the Metrics Management page depends on the metrics scope of your project.
- If your project has only itself in its metrics scope, then the metrics on the Metrics Management page are from the current project.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.
- For App Hub host projects and for management projects for single-project boundaries, you must configure the metrics scope .
- This section summarizes roles that you might want to grant to principals: Logs View Accessor ( roles/logging.viewAccessor ) on the log views listed in the default log scope of the your App Hub host project or management project.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The displayed data can be stored in any project listed by the metrics scope of the your App Hub host project or management project.
- The observability scope controls which data is available to your App Hub host project or management project.
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- To determine what trace data to analyze, Google Cloud Observability queries the resources listed in the default trace scope for trace data, and then retains only the data that is for projects within your application management boundary.

