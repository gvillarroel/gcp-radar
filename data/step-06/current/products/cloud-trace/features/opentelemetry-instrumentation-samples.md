---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.831Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "OpenTelemetry instrumentation samples"
feature_slug: "opentelemetry-instrumentation-samples"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/setup/sample-overview"
  - "https://docs.cloud.google.com/trace/docs/setup/nodejs-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/nodejs"
keywords:
  - "opentelemetry"
  - "instrumentation"
  - "samples"
  - "published"
  - "for"
  - "python"
  - "and"
  - "node"
---

# OpenTelemetry instrumentation samples

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Google published OpenTelemetry samples for Python and Node.js applications to collect metrics, logs, and traces.

## Extended Definition

Google published OpenTelemetry samples for Python and Node.js applications to collect metrics, logs, and traces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)
- [https://docs.cloud.google.com/trace/docs/setup/nodejs-ot](https://docs.cloud.google.com/trace/docs/setup/nodejs-ot)
- [https://docs.cloud.google.com/trace/docs/setup/nodejs](https://docs.cloud.google.com/trace/docs/setup/nodejs)

## Supporting Pages

### "Overview of collector-based instrumentation samples \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How the samples work The samples for Go, Java, Node.js, and Python use the OpenTelemetry protocol to collect trace and metric data.
- This document describes the structure of the instrumentation samples provided for the Go , Java , Node.js , and Python languages.
- All samples contain the following yaml files: docker-compose.yaml : Configures the services for the application, the OpenTelemetry collector , and a load generator.
- The instrumentation in these samples, which includes using the OpenTelemetry SDK and the SDK's in-process OTLP exporter, is vendor neutral.

### Node.js instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/nodejs-ot](https://docs.cloud.google.com/trace/docs/setup/nodejs-ot)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-js Go to the sample directory: cd opentelemetry-operations-js/samples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- Your application is not instrumented and will not produce telemetry' , error ); } // Gracefully shut down the SDK to flush telemetry when the program exits process . on ( 'SIGTERM' , () = > { sdk . shutdown () . then (() = > diag . debug ( 'OpenTelemetry SDK terminated' )) . catch ( error = > diag . error ( 'Error terminating OpenTelemetry SDK' , error )); }); The previous code sample configures OpenTelemetry to export metrics using the OTLP protocol , and it uses the @opentelemetry/auto-instrumentations-node package to configure all available Node.js instrumentations.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure your app to preload the OpenTelemetry configuration Configure structured logging Write structured logs Configure OpenTelemetry The default configuration for the OpenTelemetry Node.js SDK exports traces by using the OTLP protocol .
- The following code sample illustrates a Dockerfile passing the --require flag: CMD node --require ./build/src/instrumentation.js build/src/index.js 2>&1 tee /var/log/app.log Configure structured logging To include the trace information as part of the JSON-formatted logs written to standard output, configure your app to output structured logs in JSON format.

### Node.js instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/nodejs](https://docs.cloud.google.com/trace/docs/setup/nodejs)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-js Go to the sample directory: cd opentelemetry-operations-js/samples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- Your application is not instrumented and will not produce telemetry' , error ); } // Gracefully shut down the SDK to flush telemetry when the program exits process . on ( 'SIGTERM' , () = > { sdk . shutdown () . then (() = > diag . debug ( 'OpenTelemetry SDK terminated' )) . catch ( error = > diag . error ( 'Error terminating OpenTelemetry SDK' , error )); }); The previous code sample configures OpenTelemetry to export metrics using the OTLP protocol , and it uses the @opentelemetry/auto-instrumentations-node package to configure all available Node.js instrumentations.
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure your app to preload the OpenTelemetry configuration Configure structured logging Write structured logs Configure OpenTelemetry The default configuration for the OpenTelemetry Node.js SDK exports traces by using the OTLP protocol .
- The following code sample illustrates a Dockerfile passing the --require flag: CMD node --require ./build/src/instrumentation.js build/src/index.js 2>&1 tee /var/log/app.log Configure structured logging To include the trace information as part of the JSON-formatted logs written to standard output, configure your app to output structured logs in JSON format.

