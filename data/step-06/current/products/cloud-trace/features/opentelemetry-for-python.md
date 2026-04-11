---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.833Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "OpenTelemetry for Python"
feature_slug: "opentelemetry-for-python"
latest_feature_date: "2021-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/release-notes"
  - "https://docs.cloud.google.com/trace/docs/setup/python-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/python"
keywords:
  - "opentelemetry"
  - "for"
  - "python"
  - "trace"
  - "supports"
  - "the"
  - "generally"
  - "available"
---

# OpenTelemetry for Python

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Cloud Trace supports the generally available OpenTelemetry library for Python applications.

## Extended Definition

Cloud Trace supports the generally available OpenTelemetry library for Python applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- [https://docs.cloud.google.com/trace/docs/setup/python-ot](https://docs.cloud.google.com/trace/docs/setup/python-ot)
- [https://docs.cloud.google.com/trace/docs/setup/python](https://docs.cloud.google.com/trace/docs/setup/python)

## Supporting Pages

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 19, 2021 Feature Cloud Trace announces that the OpenTelemetry library for Python is now generally available.
- July 09, 2021 Feature Cloud Trace announces that the OpenTelemetry library for Java is now generally available.
- Feature Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces: Python example Node.js example For general instrumentation information and recommendations, and for links to other samples, see: Instrumentation and observability overview Choose an instrumentation approach February 20, 2024 Change For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents: Instrumentation and observability overview Choose an instrumentation approach Go instrumentation example Java instrumentation example January 16, 2024 Change Announcing a common navigation pane in the Google Cloud console for Logging, Monitoring, Trace, and Error Reporting.
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.

### Python instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/python-ot](https://docs.cloud.google.com/trace/docs/setup/python-ot)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To generate metrics and traces for the HTTP client and server, the example app installs the opentelemetry-instrumentation-flask and opentelemetry-instrumentation-requests instrumentation libraries: logger = logging . getLogger ( name ) Initialize OpenTelemetry Python SDK and structured logging setup opentelemetry () setup structured logging () app = Flask ( name ) Add instrumentation FlaskInstrumentor () . instrument app ( app ) RequestsInstrumentor () . instrument () The app has two endpoints: The /multi endpoint is handled by the multi function.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure structured logging Configure OpenTelemetry This example app is configured to use the OpenTelemetry Python SDK to export traces and metrics by using the OTLP protocol .
- The following code sample illustrates how to configure the standard logging library to output JSON structured logs using the python-json-logger library, and how to use the opentelemetry-instrumentation-logging package to include trace information. class JsonFormatter ( jsonlogger .
- By default, the OpenTelemetry Python SDK uses the W3C Trace Context format for propagating trace context , which ensures that spans have the correct parent-child relationship within a trace.

### Python instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/python](https://docs.cloud.google.com/trace/docs/setup/python)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To generate metrics and traces for the HTTP client and server, the example app installs the opentelemetry-instrumentation-flask and opentelemetry-instrumentation-requests instrumentation libraries: logger = logging . getLogger ( name ) Initialize OpenTelemetry Python SDK and structured logging setup opentelemetry () setup structured logging () app = Flask ( name ) Add instrumentation FlaskInstrumentor () . instrument app ( app ) RequestsInstrumentor () . instrument () The app has two endpoints: The /multi endpoint is handled by the multi function.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure structured logging Configure OpenTelemetry This example app is configured to use the OpenTelemetry Python SDK to export traces and metrics by using the OTLP protocol .
- The following code sample illustrates how to configure the standard logging library to output JSON structured logs using the python-json-logger library, and how to use the opentelemetry-instrumentation-logging package to include trace information. class JsonFormatter ( jsonlogger .
- By default, the OpenTelemetry Python SDK uses the W3C Trace Context format for propagating trace context , which ensures that spans have the correct parent-child relationship within a trace.

