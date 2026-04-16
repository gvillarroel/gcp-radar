---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.002Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "OpenTelemetry for Python"
feature_slug: "opentelemetry-for-python"
latest_feature_date: "2021-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/setup/python-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/python"
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
  - "https://docs.cloud.google.com/trace/docs/reference/trace-schema"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace supports the generally available OpenTelemetry library for Python applications.

## Extended Definition

Cloud Trace supports the generally available OpenTelemetry library for Python applications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/setup/python-ot](https://docs.cloud.google.com/trace/docs/setup/python-ot)
- [https://docs.cloud.google.com/trace/docs/setup/python](https://docs.cloud.google.com/trace/docs/setup/python)
- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)

## Supporting Pages

### Python instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/python-ot](https://docs.cloud.google.com/trace/docs/setup/python-ot)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To generate metrics and traces for the HTTP client and server, the example app installs the opentelemetry-instrumentation-flask and opentelemetry-instrumentation-requests instrumentation libraries: logger = logging . getLogger ( name ) Initialize OpenTelemetry Python SDK and structured logging setup opentelemetry () setup structured logging () app = Flask ( name ) Add instrumentation FlaskInstrumentor () . instrument app ( app ) RequestsInstrumentor () . instrument () The app has two endpoints: The /multi endpoint is handled by the multi function.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure structured logging Configure OpenTelemetry This example app is configured to use the OpenTelemetry Python SDK to export traces and metrics by using the OTLP protocol .
- The following code sample illustrates how to configure the standard logging library to output JSON structured logs using the python-json-logger library, and how to use the opentelemetry-instrumentation-logging package to include trace information. class JsonFormatter ( jsonlogger .
- By default, the OpenTelemetry Python SDK uses the W3C Trace Context format for propagating trace context , which ensures that spans have the correct parent-child relationship within a trace.

### Python instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/python](https://docs.cloud.google.com/trace/docs/setup/python)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To generate metrics and traces for the HTTP client and server, the example app installs the opentelemetry-instrumentation-flask and opentelemetry-instrumentation-requests instrumentation libraries: logger = logging . getLogger ( name ) Initialize OpenTelemetry Python SDK and structured logging setup opentelemetry () setup structured logging () app = Flask ( name ) Add instrumentation FlaskInstrumentor () . instrument app ( app ) RequestsInstrumentor () . instrument () The app has two endpoints: The /multi endpoint is handled by the multi function.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure structured logging Configure OpenTelemetry This example app is configured to use the OpenTelemetry Python SDK to export traces and metrics by using the OTLP protocol .
- The following code sample illustrates how to configure the standard logging library to output JSON structured logs using the python-json-logger library, and how to use the opentelemetry-instrumentation-logging package to include trace information. class JsonFormatter ( jsonlogger .
- By default, the OpenTelemetry Python SDK uses the W3C Trace Context format for propagating trace context , which ensures that spans have the correct parent-child relationship within a trace.

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- For a Go application that uses gRPC for export, update the go.mod file to include the following dependency: require ( // ... go . opentelemetry . io / otel / exporters / otlp / otlptrace / otlptracegrpc v1 .38.0 ) Python This section illustrates changes that you need to make tp your dependencies when using gRPC for export.
- Why you should migrate The OpenTelemetry SDKs generate log, metric, and trace data in in a format that is generally consistent with the proto files defined by the OpenTelemetry OTLP Protocol .
- For a Node.js application that uses gRPC for export, add the following imports: import { AuthClient , GoogleAuth } from 'google-auth-library' ; import { credentials } from '@grpc/grpc-js' ; Also, update the initialization code to configure ADC before you instantiate the gRPC exporter: async function getAuthenticatedClient () : Promise<AuthClient> { const auth : GoogleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); return await auth . getClient (); } // Express App that exports traces via gRPC with protobuf async function main () { const authenticatedClient : AuthClient = await getAuthenticatedClient (); // ... } Configure the required OpenTelemetry resource attributes Add to the OTEL RESOURCE ATTRIBUTES environment variable the key-value pair that specifies your project.

### Storage schema for trace data \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- That API doesn't validate that the data conforms to the declared schema. apphub record without repeated fields Application-specific labels are available when trace spans are generated by App Hub applications, when those applications run on supported infrastructure or have been instrumented .
- The format of the data is generally consistent with the proto files defined by the OpenTelemetry OTLP Protocol .
- The Cloud Trace API doesn't use the OpenTelemetry OTLP Protocol and defines a proprietary data format.
- To learn more, see OpenTelemetry: Resources . instrumentation scope record without repeated fields This field identifies the library or application component for the specified resource that is collecting telemetry.

