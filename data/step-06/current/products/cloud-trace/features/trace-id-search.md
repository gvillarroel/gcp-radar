---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.834Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace ID search"
feature_slug: "trace-id-search"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/release-notes"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
keywords:
  - "trace"
  - "id"
  - "search"
  - "the"
  - "viewer"
  - "supports"
  - "searching"
  - "by"
---

# Trace ID search

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

The Cloud Trace viewer supports searching by trace ID.

## Extended Definition

The Cloud Trace viewer supports searching by trace ID.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)

## Supporting Pages

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 17, 2020 Feature The Cloud Trace viewer now supports search by the trace ID.
- If you open the Trace Details flyout page by using options provided in a log entry, then the resources listed in the default trace scope are searched for the trace data.
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.
- February 27, 2018 Feature The Trace Viewer now associates logs entries with trace spans when the LogEntry span id field is specified.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- EXT TABLE NAME ON messages ref uri = FILE NAME > RENAME index AS message idx -- Flatten. > CROSS JOIN UNNEST ( parts ) AS part WITH OFFSET AS part idx -- Print fields. > SELECT insert id , labels , timestamp , trace , span id , role , part . content , part . uri , part . mime type , TO HEX ( MD5 ( part . data )) AS data md5 hex , part . id AS tool id , part . name AS tool name , part . arguments AS tool args , part . response AS tool response , message idx , part idx , > ORDER BY timestamp , message idx , part idx ; > LIMIT 10 ; Replace the following before you run the query: PROJECT ID : The identifier of the project.
- CONNECTION ID ' , endpoint = > ' gemini-2.5-flash-lite ' , output schema = > 'description STRING, is match BOOLEAN' ) AS gemini summary > SELECT insert id , trace , span id , timestamp , part idx , part . uri , part . mime type , gemini summary > WHERE gemini summary . is match = TRUE > ORDER BY timestamp DESC Replace the following before you run the query: PROJECT ID : The identifier of the project.
- Find spans that contain multimodal prompts and responses To find the spans that contain multimodal prompts and responses, do the following: In the Google Cloud console, go to the Trace explorer page: Go to Trace explorer You can also find this page by using the search bar.
- If you want to also filter by a specific trace ID, then add the following statement to the WHERE clause: AND trace = 'projects/ PROJECT ID /traces/ TRACE ID ' In the previous expression, replace TRACE ID with the 16-byte hexadecimal string that contains a trace ID.

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Migration guide for manual instrumentation This section describes how to modify your application so that it sends your trace data to your Google Cloud project by using the Telemetry API .
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- The sample application defines the system properties in the build.gradle script: // You can switch the desired protocol here by changing otel.exporter.otlp.protocol. def autoconf config = [ ' - Dotel . exporter . otlp . endpoint = https : //telemetry.googleapis.com', ' - Dotel . traces . exporter = otlp ' , ' - Dotel . logs . exporter = none ' , ' - Dotel . metrics . exporter = none ' , ' - Dotel . service . name = otlptrace - example ' , ' - Dotel . exporter . otlp . protocol = http / protobuf ' , ' - Dotel . java . global - autoconfigure . enabled = true ' , ] Also, pass the configuration as JVM arguments: application { mainClassName = ' com . google . cloud . opentelemetry . example . otlptrace .
- For a Node.js application that uses gRPC for export, add the following imports: import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc' ; Also, update the initialization code to configure the TraceProvider with the gRPC exporter: const sdk = new NodeSDK ({ traceExporter : new OTLPTraceExporter ({ credentials : credentials . combineChannelCredentials ( credentials . createSsl (), credentials . createFromGoogleCredential ( authenticatedClient ), ), }), }); sdk . start (); Configure authentication With the previous changes to the OpenTelemetry SDK configuration, your application is configured to export traces using the OpenTelemetry OTLP exporters using either gRPC or HTTP.

