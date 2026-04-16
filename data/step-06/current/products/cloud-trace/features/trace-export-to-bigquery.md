---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.005Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace export to BigQuery"
feature_slug: "trace-export-to-bigquery"
latest_feature_date: "2020-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
  - "https://docs.cloud.google.com/trace/docs/setup/sample-overview"
  - "https://docs.cloud.google.com/trace/docs/storage-manage"
  - "https://docs.cloud.google.com/trace/docs/analytics-migrate"
keywords:
  - "trace"
  - "export"
  - "to"
  - "can"
---

# Trace export to BigQuery

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace can export trace data to BigQuery.

## Extended Definition

Cloud Trace can export trace data to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)
- [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- [https://docs.cloud.google.com/trace/docs/analytics-migrate](https://docs.cloud.google.com/trace/docs/analytics-migrate)

## Supporting Pages

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- The sample application defines the system properties in the build.gradle script: // You can switch the desired protocol here by changing otel.exporter.otlp.protocol. def autoconf config = [ ' - Dotel . exporter . otlp . endpoint = https : //telemetry.googleapis.com', ' - Dotel . traces . exporter = otlp ' , ' - Dotel . logs . exporter = none ' , ' - Dotel . metrics . exporter = none ' , ' - Dotel . service . name = otlptrace - example ' , ' - Dotel . exporter . otlp . protocol = http / protobuf ' , ' - Dotel . java . global - autoconfigure . enabled = true ' , ] Also, pass the configuration as JVM arguments: application { mainClassName = ' com . google . cloud . opentelemetry . example . otlptrace .
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- For a Node.js application that uses gRPC for export, add the following imports: import { AuthClient , GoogleAuth } from 'google-auth-library' ; import { credentials } from '@grpc/grpc-js' ; Also, update the initialization code to configure ADC before you instantiate the gRPC exporter: async function getAuthenticatedClient () : Promise<AuthClient> { const auth : GoogleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); return await auth . getClient (); } // Express App that exports traces via gRPC with protobuf async function main () { const authenticatedClient : AuthClient = await getAuthenticatedClient (); // ... } Configure the required OpenTelemetry resource attributes Add to the OTEL RESOURCE ATTRIBUTES environment variable the key-value pair that specifies your project.
- For a Node.js application that uses gRPC for export, add the following imports: import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc' ; Also, update the initialization code to configure the TraceProvider with the gRPC exporter: const sdk = new NodeSDK ({ traceExporter : new OTLPTraceExporter ({ credentials : credentials . combineChannelCredentials ( credentials . createSsl (), credentials . createFromGoogleCredential ( authenticatedClient ), ), }), }); sdk . start (); Configure authentication With the previous changes to the OpenTelemetry SDK configuration, your application is configured to export traces using the OpenTelemetry OTLP exporters using either gRPC or HTTP.

### "Overview of collector-based instrumentation samples \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might be interested in other samples that illustrate different configurations: Migrate from the Trace exporter to the OTLP endpoint describes how to use in-process instrumentation to send trace data directly to your Google Cloud project.
- Use the Ops Agent and OpenTelemetry Protocol (OTLP) describes how you can configure the Ops Agent and an OTLP receiver to collect metrics and traces from an application.
- The exporter converts the telemetry into a format compatible with the Cloud Trace API, Cloud Monitoring API, or Cloud Logging API.
- If you can't use a collector, then you must use an in-process exporter that directly sends data to your Google Cloud project.

### Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- Source ID: `site-docs-root-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID For example, when a command was issued to the buckets.datasets.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace , the response was: { "datasets": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans", "description": "Trace Spans", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } You can issue commands to other Observability API endpoints to get information about the dataset whose ID is DATASET ID .
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID For example, when a command was issued to the buckets.list endpoint with the parent parameter set to projects/my-project/locations/us , the response was: { "buckets": [ { "name": "projects/my-project/locations/us/buckets/ Trace", "description": "Trace Bucket", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", "retentionDays": 30 } ] } You can issue commands to other Observability API endpoints to get more information about the bucket whose ID is BUCKET ID .
- For example, when a command was issued to the buckets.datasets.views.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views , the response was: { "views": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views/ AllSpans", "filter": "", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- For example, when a command was issued to the buckets.datasets.links.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links , the response was: { "links": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links/my link", "description": "My link for traces to BigQuery", "createTime": "2025-01-12T15:42:30.988919645Z" } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .

### "Migrate to Observability Analytics \_|\_ Cloud Trace \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/analytics-migrate](https://docs.cloud.google.com/trace/docs/analytics-migrate)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using sinks to export trace data to BigQuery , then this document applies to you.
- The usage of sinks to export trace data is no longer recommended.
- Enable the API To get the permissions that you need to load the Observability Analytics page, run queries, and create a linked dataset, ask your administrator to grant you the following IAM roles on your project: Cloud Trace Admin ( roles/cloudtrace.admin ) Observability Editor ( roles/observability.editor ) BigQuery User ( roles/bigquery.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Delete trace sinks and unnecessary datasets: To list existing trace sinks, execute the gcloud alpha trace sinks list command: gcloud alpha trace sinks list For each sink, execute the gcloud alpha trace sinks delete command: gcloud alpha trace sinks delete SINK NAME Optional: Delete any unnecessary BigQuery datasets.

