---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.004Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "OpenTelemetry for Go and Node.js"
feature_slug: "opentelemetry-for-go-and-node-js"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/setup/nodejs-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/nodejs"
  - "https://docs.cloud.google.com/trace/docs/reference/trace-schema"
  - "https://docs.cloud.google.com/trace/docs/setup"
keywords:
  - "opentelemetry"
  - "for"
  - "go"
  - "and"
  - "node"
  - "js"
  - "trace"
  - "supports"
---

# OpenTelemetry for Go and Node.js

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace supports using OpenTelemetry with Go and Node.js applications on GKE and Compute Engine.

## Extended Definition

Cloud Trace supports using OpenTelemetry with Go and Node.js applications on GKE and Compute Engine.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/setup/nodejs-ot](https://docs.cloud.google.com/trace/docs/setup/nodejs-ot)
- [https://docs.cloud.google.com/trace/docs/setup/nodejs](https://docs.cloud.google.com/trace/docs/setup/nodejs)
- [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- [https://docs.cloud.google.com/trace/docs/setup](https://docs.cloud.google.com/trace/docs/setup)

## Supporting Pages

### Node.js instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/nodejs-ot](https://docs.cloud.google.com/trace/docs/setup/nodejs-ot)
- Source ID: `site-docs-root`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure your app to preload the OpenTelemetry configuration Configure structured logging Write structured logs Configure OpenTelemetry The default configuration for the OpenTelemetry Node.js SDK exports traces by using the OTLP protocol .
- The following code sample illustrates a Pino LoggerOptions object that configures the app to output JSON structured logs: // Expected attributes that OpenTelemetry adds to correlate logs with spans interface LogRecord { trace id ?: string ; span id ?: string ; trace flags ?: string ; [ key : string ] : unknown ; } // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity const PinoLevelToSeverityLookup : Record<string , string undefined > = { trace : 'DEBUG' , debug : 'DEBUG' , info : 'INFO' , warn : 'WARNING' , error : 'ERROR' , fatal : 'CRITICAL' , }; export const loggerConfig = { messageKey : 'message' , // Same as pino.stdTimeFunctions.isoTime but uses "timestamp" key instead of "time" timestamp () : string { return ,"timestamp":" ${ new Date ( Date . now ()). toISOString () } " ; }, formatters : { log ( object : LogRecord ) : Record<string , unknown > { // Add trace context attributes following Cloud Logging structured log format described // in https://cloud.google.com/logging/docs/structured-logging#special-payload-fields const { trace id , span id , trace flags , ... rest } = object ; return { 'logging.googleapis.com/trace' : trace id , 'logging.googleapis.com/spanId' : span id , 'logging.googleapis.com/trace sampled' : trace flags ? trace flags === '01' : undefined , ... rest , }; }, // See // https://getpino.io/#/docs/help?id=mapping-pino-log-levels-to-google-cloud-logging-stackdriver-severity-levels level ( label : string ) { return { severity : PinoLevelToSeverityLookup [ label ] ??
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-js Go to the sample directory: cd opentelemetry-operations-js/samples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- The following code sample illustrates a Dockerfile passing the --require flag: CMD node --require ./build/src/instrumentation.js build/src/index.js 2>&1 tee /var/log/app.log Configure structured logging To include the trace information as part of the JSON-formatted logs written to standard output, configure your app to output structured logs in JSON format.

### Node.js instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/nodejs](https://docs.cloud.google.com/trace/docs/setup/nodejs)
- Source ID: `site-docs-root-2`
- Final score: 312
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure your app to preload the OpenTelemetry configuration Configure structured logging Write structured logs Configure OpenTelemetry The default configuration for the OpenTelemetry Node.js SDK exports traces by using the OTLP protocol .
- The following code sample illustrates a Pino LoggerOptions object that configures the app to output JSON structured logs: // Expected attributes that OpenTelemetry adds to correlate logs with spans interface LogRecord { trace id ?: string ; span id ?: string ; trace flags ?: string ; [ key : string ] : unknown ; } // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity const PinoLevelToSeverityLookup : Record<string , string undefined > = { trace : 'DEBUG' , debug : 'DEBUG' , info : 'INFO' , warn : 'WARNING' , error : 'ERROR' , fatal : 'CRITICAL' , }; export const loggerConfig = { messageKey : 'message' , // Same as pino.stdTimeFunctions.isoTime but uses "timestamp" key instead of "time" timestamp () : string { return ,"timestamp":" ${ new Date ( Date . now ()). toISOString () } " ; }, formatters : { log ( object : LogRecord ) : Record<string , unknown > { // Add trace context attributes following Cloud Logging structured log format described // in https://cloud.google.com/logging/docs/structured-logging#special-payload-fields const { trace id , span id , trace flags , ... rest } = object ; return { 'logging.googleapis.com/trace' : trace id , 'logging.googleapis.com/spanId' : span id , 'logging.googleapis.com/trace sampled' : trace flags ? trace flags === '01' : undefined , ... rest , }; }, // See // https://getpino.io/#/docs/help?id=mapping-pino-log-levels-to-google-cloud-logging-stackdriver-severity-levels level ( label : string ) { return { severity : PinoLevelToSeverityLookup [ label ] ??
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-js Go to the sample directory: cd opentelemetry-operations-js/samples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- The following code sample illustrates a Dockerfile passing the --require flag: CMD node --require ./build/src/instrumentation.js build/src/index.js 2>&1 tee /var/log/app.log Configure structured logging To include the trace information as part of the JSON-formatted logs written to standard output, configure your app to output structured logs in JSON format.

### Storage schema for trace data \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- Source ID: `site-docs-reference`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Trace Reference Send feedback Storage schema for trace data Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Trace API doesn't use the OpenTelemetry OTLP Protocol and defines a proprietary data format.
- For the same executable and the same endpoint, using a consistent name makes it easier to correlate cross-trace spans.
- Trace data sent to your Google Cloud project through this API is converted to the format described by this document.

### Instrument for Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup](https://docs.cloud.google.com/trace/docs/setup)
- Source ID: `site-docs-root-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The instrumentation samples we provide use OpenTelemetry : For samples that use a collector-based export, see the following: Go Java Node.js Python These samples send trace data to the Telemetry API.
- OpenTelemetry examples: Python sample Java sample Node.js sample Go sample C++ sample Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following lists the default paths for Windows and Linux: Windows: %APPDATA%/gcloud/application default credentials.json Linux: $HOME/.config/gcloud/application default credentials.json Set the GOOGLE APPLICATION CREDENTIALS environment variable to the path to your service account: Linux/macOS export GOOGLE APPLICATION CREDENTIALS = path-to-your-service-accounts-private-key Windows set GOOGLE APPLICATION CREDENTIALS = path-to-your-service-accounts-private-key PowerShell: $env :GOOGLE APPLICATION CREDENTIALS = "path-to-your-service-accounts-private-key" What's next For detailed configuration information, samples, and links to GitHub and other open source repositories, go to the setup page for your language.
- The following command illustrates setting the --scopes flag: gcloud container clusters create example-cluster-name --scopes=https://www.googleapis.com/auth/trace.append Running locally and elsewhere: If your application is running outside of Google Cloud, then you must provide authentication credentials in the form of a service account to the client library.

