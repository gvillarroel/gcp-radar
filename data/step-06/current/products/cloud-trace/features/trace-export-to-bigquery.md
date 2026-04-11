---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.835Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace export to BigQuery"
feature_slug: "trace-export-to-bigquery"
latest_feature_date: "2020-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
  - "https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces"
  - "https://docs.cloud.google.com/trace/docs/storage-manage"
keywords:
  - "trace"
  - "export"
  - "to"
  - "can"
---

# Trace export to BigQuery

Product: Cloud Trace
Coverage: LOW

## Step 02 Summary

Cloud Trace can export trace data to BigQuery.

## Extended Definition

Cloud Trace can export trace data to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)

## Supporting Pages

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The sample application defines the system properties in the build.gradle script: // You can switch the desired protocol here by changing otel.exporter.otlp.protocol. def autoconf config = [ ' - Dotel . exporter . otlp . endpoint = https : //telemetry.googleapis.com', ' - Dotel . traces . exporter = otlp ' , ' - Dotel . logs . exporter = none ' , ' - Dotel . metrics . exporter = none ' , ' - Dotel . service . name = otlptrace - example ' , ' - Dotel . exporter . otlp . protocol = http / protobuf ' , ' - Dotel . java . global - autoconfigure . enabled = true ' , ] Also, pass the configuration as JVM arguments: application { mainClassName = ' com . google . cloud . opentelemetry . example . otlptrace .
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- For a Node.js application that uses gRPC for export, add the following imports: import { AuthClient , GoogleAuth } from 'google-auth-library' ; import { credentials } from '@grpc/grpc-js' ; Also, update the initialization code to configure ADC before you instantiate the gRPC exporter: async function getAuthenticatedClient () : Promise<AuthClient> { const auth : GoogleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); return await auth . getClient (); } // Express App that exports traces via gRPC with protobuf async function main () { const authenticatedClient : AuthClient = await getAuthenticatedClient (); // ... } Configure the required OpenTelemetry resource attributes Add to the OTEL RESOURCE ATTRIBUTES environment variable the key-value pair that specifies your project.
- For a Node.js application that uses gRPC for export, add the following imports: import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc' ; Also, update the initialization code to configure the TraceProvider with the gRPC exporter: const sdk = new NodeSDK ({ traceExporter : new OTLPTraceExporter ({ credentials : credentials . combineChannelCredentials ( credentials . createSsl (), credentials . createFromGoogleCredential ( authenticatedClient ), ), }), }); sdk . start (); Configure authentication With the previous changes to the OpenTelemetry SDK configuration, your application is configured to export traces using the OpenTelemetry OTLP exporters using either gRPC or HTTP.

### "MCP Tools Reference: cloudtrace.googleapis.com \_|\_ Cloud Trace \_|\_ Google\

- URL: [https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces](https://docs.cloud.google.com/trace/docs/reference/mcp/mcp/tools_list/list_traces)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Can be one of the following: trace id name ( name field of root span in the trace) duration (difference between end time and start time fields of the root span) start ( start time field of the root span) Descending order can be specified by appending desc to the sort field (for example, name desc ).
- Curl Request curl --location 'https://cloudtrace.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list traces", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema The request message for the ListTraces method.
- ListTracesResponse JSON representation { "traces" : [ { object ( Trace ) } ] , "nextPageToken" : string } Fields traces[] object ( Trace ) List of trace records as specified by the view parameter. nextPageToken string If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces.
- Trace JSON representation { "projectId" : string , "traceId" : string , "spans" : [ { object ( TraceSpan ) } ] } Fields projectId string Project ID of the Cloud project where the trace data is stored. traceId string Globally unique identifier for the trace.

### Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- Source ID: `site-docs-root-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID For example, when a command was issued to the buckets.datasets.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace , the response was: { "datasets": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans", "description": "Trace Spans", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } You can issue commands to other Observability API endpoints to get information about the dataset whose ID is DATASET ID .
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID For example, when a command was issued to the buckets.list endpoint with the parent parameter set to projects/my-project/locations/us , the response was: { "buckets": [ { "name": "projects/my-project/locations/us/buckets/ Trace", "description": "Trace Bucket", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", "retentionDays": 30 } ] } You can issue commands to other Observability API endpoints to get more information about the bucket whose ID is BUCKET ID .
- For example, when a command was issued to the buckets.datasets.views.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views , the response was: { "views": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views/ AllSpans", "filter": "", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- For example, when a command was issued to the buckets.datasets.links.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links , the response was: { "links": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links/my link", "description": "My link for traces to BigQuery", "createTime": "2025-01-12T15:42:30.988919645Z" } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .

