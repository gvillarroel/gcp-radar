---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.998Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Generative AI event tracing"
feature_slug: "generative-ai-event-tracing"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/finding-traces"
  - "https://docs.cloud.google.com/trace/docs/overview"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/setup/cpp-ot"
keywords:
  - "generative"
  - "ai"
  - "event"
  - "tracing"
  - "trace"
  - "can"
  - "capture"
  - "and"
---

# Generative AI event tracing

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace can capture and display generative AI events from applications instrumented with OpenTelemetry and LangGraph.

## Extended Definition

Cloud Trace can capture and display generative AI events from applications instrumented with OpenTelemetry and LangGraph.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot)

## Supporting Pages

### Find and explore traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- The following screenshot illustrates how the Trace Explorer page renders text-based generative AI events that are attached to the spans: To learn about the sample application that generated the previous screenshot, see Instrument a LangGraph ReAct Agent with OpenTelemetry .
- You can only search by plain text, and you can't search logs, events, or metadata.
- There are two supported configurations: Text-based prompts and responses that are attached to the spans as attributes , which are key-value pairs that describe some characteristic or an event.
- View attributes, log entries, and events The Details flyout for a span contains a tab for each of the following: Attributes : This tab lists labels that are attached to spans.

### Cloud Trace overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tracing client If an OpenTelemetry library is available for your programming language , you can simplify the process of creating and sending trace data by using OpenTelemetry .
- To view and analyze your span data, you can use the Trace Explorer and Observability Analytics pages in the Google Cloud console: Trace Explorer : Displays aggregate information about your trace data and lets you examine individual traces in detail.
- Configurations with automatic tracing Some configurations result in automatic capture of trace data: App Engine standard environment Java 8, Python 2, and PHP 5 applications don't need to use the Trace client libraries.
- If you manage an organization and want to prevent usage of Cloud Trace, then create an organization policy constraint .

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you add the following filter, then only log entries that contain the specified label appear: labels. "event.name" = "gen ai.client.inference.operation.details" To view the prompts and responses that are referenced by a log entry, in the log entry, click View trace details .
- Find spans that contain multimodal prompts and responses To find the spans that contain multimodal prompts and responses, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- This document describes how you can configure a LangGraph ReAct agent or a generative AI agent built with the Agent Development Kit (ADK) framework to send multimodal prompts and responses to your Google Cloud project.
- The following example shows part of a log entry that includes object references: { ... "labels" : { "gen ai.system" : "vertex ai" , "event.name" : "gen ai.client.inference.operation.details" , "gen ai.output.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg output.jsonl" , "gen ai.system instructions ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg system instructions.jsonl" , "gen ai.input.messages ref" : "gs://my-bucket/eso9aP7NA GX2PgPkrOi-Qg input.jsonl" } , "logName" : "projects/my-project/logs/gen ai.client.inference.operation.details" , "trace" : "projects/my-project/traces/963761020fc7713e4590cad89ad03229" , "spanId" : "1234512345123451" , ... } In the log entry example, notice the following: The label "event.name": "gen ai.client.inference.operation.details" indicates that the log entry contains references to Cloud Storage objects.

### C++ and OpenTelemetry \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/cpp-ot](https://docs.cloud.google.com/trace/docs/setup/cpp-ot)
- Source ID: `site-docs-root-2`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this // example, we just tweak some OpenTelemetry settings that google-cloud-cpp // does not expose. opentelemetry :: sdk :: trace :: BatchSpanProcessorOptions options ; options . schedule delay millis = std :: chrono :: milliseconds ( 1000 ); auto processor = opentelemetry :: sdk :: trace :: BatchSpanProcessorFactory :: Create ( std :: move ( exporter ), options ); // Create a tracer provider and set it as the global trace provider opentelemetry :: trace :: Provider :: SetTracerProvider ( std :: shared ptr<opentelemetry :: trace :: TracerProvider > ( opentelemetry :: sdk :: trace :: TracerProviderFactory :: Create ( std :: move ( processor )))); MyApplicationCode (); // Clear the global trace provider opentelemetry :: trace :: Provider :: SetTracerProvider ( opentelemetry :: nostd :: shared ptr < opentelemetry :: trace :: TracerProvider > ()); } Instrument your own application For information about how to configure your application to capture trace spans, see OpenTelemetry Tracing .
- This page describes how to do all of the following: Create a span Create nested spans Set span attributes Create spans with events Create spans with links // For more details on the OpenTelemetry code in this sample, see: // https://opentelemetry.io/docs/instrumentation/cpp/manual/ namespace gc = :: google :: cloud ; using :: opentelemetry :: trace :: Scope ; []( std :: string project id ) { auto project = gc :: Project ( std :: move ( project id )); auto configuration = gc :: otel :: ConfigureBasicTracing ( project ); // Initialize the Tracer.
- The following lists the default paths for Windows and Linux: Windows: %APPDATA%/gcloud/application default credentials.json Linux: $HOME/.config/gcloud/application default credentials.json Set the GOOGLE APPLICATION CREDENTIALS environment variable to the path to your service account: Linux/macOS export GOOGLE APPLICATION CREDENTIALS = path-to-your-service-accounts-private-key Windows set GOOGLE APPLICATION CREDENTIALS = path-to-your-service-accounts-private-key PowerShell: $env :GOOGLE APPLICATION CREDENTIALS = "path-to-your-service-accounts-private-key" View traces In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- Configure the export of spans to Cloud Trace To configure the export of trace data, call the google::cloud::otel::ConfigureBasicTracing(...) method in your main() method: namespace gc = :: google :: cloud ; []( std :: string project id ) { auto project = gc :: Project ( std :: move ( project id )); auto configuration = gc :: otel :: ConfigureBasicTracing ( project ); MyApplicationCode (); } The field project id is the Google Cloud project where you want to store the traces.

