---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.010Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Sub-millisecond span resolution"
feature_slug: "sub-millisecond-span-resolution"
latest_feature_date: "2018-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/setup/nodejs"
  - "https://docs.cloud.google.com/trace/docs/setup/go-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/go"
  - "https://docs.cloud.google.com/trace/docs/setup/java-ot"
keywords:
  - "sub"
  - "millisecond"
  - "span"
  - "resolution"
  - "trace"
  - "viewer"
  - "displays"
  - "spans"
---

# Sub-millisecond span resolution

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Trace Viewer displays trace spans with sub-millisecond time resolution.

## Extended Definition

Trace Viewer displays trace spans with sub-millisecond time resolution.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/setup/nodejs](https://docs.cloud.google.com/trace/docs/setup/nodejs)
- [https://docs.cloud.google.com/trace/docs/setup/go-ot](https://docs.cloud.google.com/trace/docs/setup/go-ot)
- [https://docs.cloud.google.com/trace/docs/setup/go](https://docs.cloud.google.com/trace/docs/setup/go)
- [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)

## Supporting Pages

### Node.js instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/nodejs](https://docs.cloud.google.com/trace/docs/setup/nodejs)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample illustrates a Pino LoggerOptions object that configures the app to output JSON structured logs: // Expected attributes that OpenTelemetry adds to correlate logs with spans interface LogRecord { trace id ?: string ; span id ?: string ; trace flags ?: string ; [ key : string ] : unknown ; } // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity const PinoLevelToSeverityLookup : Record<string , string undefined > = { trace : 'DEBUG' , debug : 'DEBUG' , info : 'INFO' , warn : 'WARNING' , error : 'ERROR' , fatal : 'CRITICAL' , }; export const loggerConfig = { messageKey : 'message' , // Same as pino.stdTimeFunctions.isoTime but uses "timestamp" key instead of "time" timestamp () : string { return ,"timestamp":" ${ new Date ( Date . now ()). toISOString () } " ; }, formatters : { log ( object : LogRecord ) : Record<string , unknown > { // Add trace context attributes following Cloud Logging structured log format described // in https://cloud.google.com/logging/docs/structured-logging#special-payload-fields const { trace id , span id , trace flags , ... rest } = object ; return { 'logging.googleapis.com/trace' : trace id , 'logging.googleapis.com/spanId' : span id , 'logging.googleapis.com/trace sampled' : trace flags ? trace flags === '01' : undefined , ... rest , }; }, // See // https://getpino.io/#/docs/help?id=mapping-pino-log-levels-to-google-cloud-logging-stackdriver-severity-levels level ( label : string ) { return { severity : PinoLevelToSeverityLookup [ label ] ??
- This configuration ensures that spans have the correct parent-child relationship within a trace.
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure OpenTelemetry Configure your app to preload the OpenTelemetry configuration Configure structured logging Write structured logs Configure OpenTelemetry The default configuration for the OpenTelemetry Node.js SDK exports traces by using the OTLP protocol .

### Go instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/go-ot](https://docs.cloud.google.com/trace/docs/setup/go-ot)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure the main function Configure OpenTelemetry Configure structured logging Add instrumentation to the HTTP server Link trace spans with logs and metrics Add instrumentation to the HTTP client Write structured logs Configure the main function To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the main function to configure the Go structured logging package, slog , and to configure OpenTelemetry.
- Link trace spans with logs and metrics To link server and client spans, and to associate metrics and logs, pass the Go Context instance to the HTTP request and when you write logs.
- NewTextMapPropagator ()) // Configure Trace Export to send spans as OTLP texporter , err := autoexport .
- This configuration ensures that spans have the correct parent-child relationship within a trace.

### Go instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/go](https://docs.cloud.google.com/trace/docs/setup/go)
- Source ID: `site-docs-root-2`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure the main function Configure OpenTelemetry Configure structured logging Add instrumentation to the HTTP server Link trace spans with logs and metrics Add instrumentation to the HTTP client Write structured logs Configure the main function To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the main function to configure the Go structured logging package, slog , and to configure OpenTelemetry.
- Link trace spans with logs and metrics To link server and client spans, and to associate metrics and logs, pass the Go Context instance to the HTTP request and when you write logs.
- NewTextMapPropagator ()) // Configure Trace Export to send spans as OTLP texporter , err := autoexport .
- This configuration ensures that spans have the correct parent-child relationship within a trace.

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample illustrates a log4j2.xml file configured to output JSON structured logs using the JSON Template Layout : <!-- Format JSON logs for the Cloud Logging agent https://cloud.google.com/logging/docs/structured-logging#special-payload-fields --> <!-- Log4j2's JsonTemplateLayout includes a template for Cloud Logging's special JSON fields https://logging.apache.org/log4j/2.x/manual/json-template-layout.html#event-templates --> <JsonTemplateLayout eventTemplateUri="classpath:GcpLayout.json"> <!-- Extend the included GcpLayout to include the trace and span IDs from Mapped Diagnostic Context (MDC) so that Cloud Logging can correlate Logs and Spans Since log4j2 2.24.0, GcpLayout.json already includes trace context logging from MDC and the below additional fields are no longer needed --> <EventTemplateAdditionalField key="logging.googleapis.com/trace" format="JSON" value='{"$resolver": "mdc", "key": "trace id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/spanId" format="JSON" value='{"$resolver": "mdc", "key": "span id"}' /> <EventTemplateAdditionalField key="logging.googleapis.com/trace sampled" format="JSON" value="true" /> </JsonTemplateLayout> The previous configuration extracts information about the active span from SLF4J's Mapped Diagnostic Context and adds that information as attributes to the log.
- It will automatically generate a span for the controller body. / @GetMapping ( "/multi" ) public Mono<String> handleMulti () throws Exception { int subRequests = ThreadLocalRandom . current (). nextInt ( 3 , 8 ); // Write a structured log with the request context, which allows the log to // be linked with the trace for this request. logger . info ( "handle /multi request with subRequests={}" , subRequests ); // Make 3-7 http requests to the /single endpoint. return Flux . range ( 0 , subRequests ) . concatMap ( i - > client . get (). uri ( "http://localhost:8080/single" ). retrieve (). bodyToMono ( Void . class )) . then ( Mono . just ( "ok" )); } The /single endpoint is handled by the handleSingle function.
- This configuration ensures that spans have the correct parent-child relationship within a trace.
- To get the permissions that you need to have the sample application to write log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) To get the permissions that you need to view your log, metric, and trace data, ask your administrator to grant you the following IAM roles on your project: Logs Viewer ( roles/logging.viewer ) Monitoring Viewer ( roles/monitoring.viewer ) Cloud Trace User ( roles/cloudtrace.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .

