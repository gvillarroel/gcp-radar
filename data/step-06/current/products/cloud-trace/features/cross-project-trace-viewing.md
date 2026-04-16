---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.008Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Cross-project trace viewing"
feature_slug: "cross-project-trace-viewing"
latest_feature_date: "2018-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/setup/go-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/go"
  - "https://docs.cloud.google.com/trace/docs/cross-project-traces"
  - "https://docs.cloud.google.com/trace/docs/troubleshooting"
keywords:
  - "cross"
  - "project"
  - "trace"
  - "viewing"
  - "viewer"
  - "can"
  - "display"
  - "spans"
---

# Cross-project trace viewing

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Trace Viewer can display trace spans from related Google Cloud projects in a single view.

## Extended Definition

Trace Viewer can display trace spans from related Google Cloud projects in a single view.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/setup/go-ot](https://docs.cloud.google.com/trace/docs/setup/go-ot)
- [https://docs.cloud.google.com/trace/docs/setup/go](https://docs.cloud.google.com/trace/docs/setup/go)
- [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- [https://docs.cloud.google.com/trace/docs/troubleshooting](https://docs.cloud.google.com/trace/docs/troubleshooting)

## Supporting Pages

### Go instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/go-ot](https://docs.cloud.google.com/trace/docs/setup/go-ot)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure the main function Configure OpenTelemetry Configure structured logging Add instrumentation to the HTTP server Link trace spans with logs and metrics Add instrumentation to the HTTP client Write structured logs Configure the main function To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the main function to configure the Go structured logging package, slog , and to configure OpenTelemetry.
- Set environment variables export GOOGLE CLOUD PROJECT = " PROJECT ID " export GOOGLE APPLICATION CREDENTIALS = " $HOME /.config/gcloud/application default credentials.json" export USERID = " $( id -u ) " Run docker compose -f docker-compose.yaml -f docker-compose.creds.yaml up --abort-on-container-exit View your metrics The OpenTelemetry instrumentation in the sample app generates Prometheus metrics that you can view by using the Metrics Explorer : Prometheus/http server duration milliseconds/histogram records the duration of server requests and stores the results in a histogram.
- These attributes can then be used to correlate a log with a trace: logging.googleapis.com/trace : Resource name of the trace associated with the log entry. logging.googleapis.com/spanId : The span ID with the trace that is associated with the log entry. logging.googleapis.com/trace sampled : The value of this field must be true or false .

### Go instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/go](https://docs.cloud.google.com/trace/docs/setup/go)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure the main function Configure OpenTelemetry Configure structured logging Add instrumentation to the HTTP server Link trace spans with logs and metrics Add instrumentation to the HTTP client Write structured logs Configure the main function To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the main function to configure the Go structured logging package, slog , and to configure OpenTelemetry.
- Set environment variables export GOOGLE CLOUD PROJECT = " PROJECT ID " export GOOGLE APPLICATION CREDENTIALS = " $HOME /.config/gcloud/application default credentials.json" export USERID = " $( id -u ) " Run docker compose -f docker-compose.yaml -f docker-compose.creds.yaml up --abort-on-container-exit View your metrics The OpenTelemetry instrumentation in the sample app generates Prometheus metrics that you can view by using the Metrics Explorer : Prometheus/http server duration milliseconds/histogram records the duration of server requests and stores the results in a histogram.
- These attributes can then be used to correlate a log with a trace: logging.googleapis.com/trace : Resource name of the trace associated with the log entry. logging.googleapis.com/spanId : The span ID with the trace that is associated with the log entry. logging.googleapis.com/trace sampled : The value of this field must be true or false .

### View traces across projects \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/cross-project-traces](https://docs.cloud.google.com/trace/docs/cross-project-traces)
- Source ID: `site-docs-root-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To view trace spans that are stored in multiple projects, as might occur when an application in one project makes a call into an application that another project hosts, do the following: Create a trace scope that lists the default trace view for each project that stores spans for your trace.
- A project's default trace view corresponds to the view with the path Trace/Spans/ AllSpans , where the fields Trace , Spans , and AllSpans refer to an observability bucket, dataset, and view.
- Home Documentation Observability Cloud Trace Guides Send feedback View traces across projects Stay organized with collections Save and categorize content based on your preferences.
- If the default trace scope scope isn't accessible, then the page searches the project's AllSpans view on the default dataset.

### Troubleshoot \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/troubleshooting](https://docs.cloud.google.com/trace/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Error message stating a view does not exist You enter a SQL query in the query pane of the Observability Analytics page, but the SQL parser displays the following error: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /views/ OBS VIEW ID does not exist The previous error is reported when the view specified in the FROM statement can't be found.
- Verify that your application has the required permissions to write trace spans To determine whether your application has permission to write trace data to your project, do the following: Go to the Enabled APIs and Services page, find the rows for the Cloud Trace API and Telemetry API, and examine the Errors column.
- You don't have the required permissions to view trace data You are viewing the Trace Explorer page and see the following notification: You don't have the required permissions to view trace data for one or more projects listed in the trace scope.
- To resolve these problems, do the following: In the Trace Explorer page, make sure to set the Scope element to a trace scope that lists projects that that store the spans for the selected trace.

