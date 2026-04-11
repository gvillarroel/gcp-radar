---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.840Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Inline log viewing in Trace Viewer"
feature_slug: "inline-log-viewing-in-trace-viewer"
latest_feature_date: "2017-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
keywords:
  - "inline"
  - "log"
  - "viewing"
  - "in"
  - "trace"
  - "viewer"
  - "shows"
  - "associated"
---

# Inline log viewing in Trace Viewer

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Trace Viewer shows associated log entries inline with trace spans and links to VM logs for load balancer spans.

## Extended Definition

Trace Viewer shows associated log entries inline with trace spans and links to VM logs for load balancer spans.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- View aggregated telemetry To view log, metric, trace, and incidents information for your application, on the dashboard for the application, select the Dashboards tab.
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.
- If you are viewing the Dashboard tab of an application dashboard, then your log data is shown in the Application Logs section.

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- A circle on a latency bar indicates a log entry or event is associated with the span.
- Cloud Trace identifies these events by correlating your trace and log data.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view trace data by using the Google Cloud console and to or select a trace scope: To select a trace scope: cloudtrace.traceScopes.[get, list] To read the default trace scope: observability.scopes.get You might also be able to get these permissions with custom roles or other predefined roles .
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to create a link on an observability dataset, ask your administrator to grant you the following IAM roles on your project: Observability Editor ( roles/observability.editor ) BigQuery User ( roles/bigquery.user ) Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Use BigQuery Studio To open BigQuery from the Observability Analytics page and then query your trace data, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .
- Logs Viewer ( roles/logging.viewer ) on your project BigQuery User ( roles/bigquery.user ) on your project BigQuery Job User ( roles/bigquery.jobUser ) on your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you need a linked dataset You don't need a linked BigQuery dataset when you want to query your trace data, or query your trace and log data.

