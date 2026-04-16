---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.012Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Inline log viewing in Trace Viewer"
feature_slug: "inline-log-viewing-in-trace-viewer"
latest_feature_date: "2017-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/trace/docs/setup/go-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/go"
  - "https://docs.cloud.google.com/trace/docs/setup/java-ot"
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
Coverage: MEDIUM

## Step 02 Summary

Trace Viewer shows associated log entries inline with trace spans and links to VM logs for load balancer spans.

## Extended Definition

Trace Viewer shows associated log entries inline with trace spans and links to VM logs for load balancer spans.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/trace/docs/setup/go-ot](https://docs.cloud.google.com/trace/docs/setup/go-ot)
- [https://docs.cloud.google.com/trace/docs/setup/go](https://docs.cloud.google.com/trace/docs/setup/go)
- [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- View aggregated telemetry To view log, metric, trace, and incidents information for your application, on the dashboard for the application, select the Dashboards tab.
- Use dashboard options to explore telemetry The Application Monitoring dashboards display log, metric, trace, and incident information.
- If you are viewing the Dashboard tab of an application dashboard, then your log data is shown in the Application Logs section.

### Go instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/go-ot](https://docs.cloud.google.com/trace/docs/setup/go-ot)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- These attributes can then be used to correlate a log with a trace: logging.googleapis.com/trace : Resource name of the trace associated with the log entry. logging.googleapis.com/spanId : The span ID with the trace that is associated with the log entry. logging.googleapis.com/trace sampled : The value of this field must be true or false .
- View your logs From the Logs Explorer, you can inspect your logs, and you can also view associated traces, when they exist.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure the main function Configure OpenTelemetry Configure structured logging Add instrumentation to the HTTP server Link trace spans with logs and metrics Add instrumentation to the HTTP client Write structured logs Configure the main function To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the main function to configure the Go structured logging package, slog , and to configure OpenTelemetry.

### Go instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/go](https://docs.cloud.google.com/trace/docs/setup/go)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- These attributes can then be used to correlate a log with a trace: logging.googleapis.com/trace : Resource name of the trace associated with the log entry. logging.googleapis.com/spanId : The span ID with the trace that is associated with the log entry. logging.googleapis.com/trace sampled : The value of this field must be true or false .
- View your logs From the Logs Explorer, you can inspect your logs, and you can also view associated traces, when they exist.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure the main function Configure OpenTelemetry Configure structured logging Add instrumentation to the HTTP server Link trace spans with logs and metrics Add instrumentation to the HTTP client Write structured logs Configure the main function To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the main function to configure the Go structured logging package, slog , and to configure OpenTelemetry.

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- These attributes can then be used to correlate a log with a trace: logging.googleapis.com/trace : Resource name of the trace associated with the log entry. logging.googleapis.com/spanId : The span ID with the trace that is associated with the log entry. logging.googleapis.com/trace sampled : The value of this field must be true or false .
- View your logs From the Logs Explorer, you can inspect your logs, and you can also view associated traces, when they exist.
- The following code sample illustrates a log4j2.xml file configured to output JSON structured logs using the JSON Template Layout : <!-- Format JSON logs for the Cloud Logging agent https://cloud.google.com/logging/docs/structured-logging#special-payload-fields --> <!-- Log4j2's JsonTemplateLayout includes a template for Cloud Logging's special JSON fields https://logging.apache.org/log4j/2.x/manual/json-template-layout.html#event-templates --> <JsonTemplateLayout eventTemplateUri="classpath:GcpLayout.json"> <!-- Extend the included GcpLayout to include the trace and span IDs from Mapped Diagnostic Context (MDC) so that Cloud Logging can correlate Logs and Spans Since log4j2 2.24.0, GcpLayout.json already includes trace context logging from MDC and the below additional fields are no longer needed --> <EventTemplateAdditionalField key="logging.googleapis.com/trace" format="JSON" value='{"$resolver": "mdc", "key": "trace id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/spanId" format="JSON" value='{"$resolver": "mdc", "key": "span id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/trace sampled" format="JSON" value="true" /> </JsonTemplateLayout> The previous configuration extracts information about the active span from SLF4J's Mapped Diagnostic Context and adds that information as attributes to the log.

