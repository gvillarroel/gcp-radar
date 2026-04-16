---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.993Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Telemetry API regional trace ingestion quotas"
feature_slug: "telemetry-api-regional-trace-ingestion-quotas"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/quotas"
  - "https://docs.cloud.google.com/trace/docs/otlp"
  - "https://docs.cloud.google.com/trace/docs/overview"
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
keywords:
  - "telemetry"
  - "api"
  - "regional"
  - "trace"
  - "ingestion"
  - "quotas"
  - "the"
  - "provides"
---

# Telemetry API regional trace ingestion quotas

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

The Telemetry API provides regional byte-based quotas for trace ingestion with higher limits in selected regions.

## Extended Definition

The Telemetry API provides regional byte-based quotas for trace ingestion with higher limits in selected regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)

## Supporting Pages

### Quotas and limits \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Telemetry API limits and quotas This section lists the limits that apply only when the Telemetry API is used to ingest trace data.
- Trace API quotas and limits This section provides information about quotas and limits that apply only to the Trace API.
- 4 Your daily trace span ingestion quota for the Cloud Trace API is determined by your billing account history and requests you have made for quota increases.
- Quotas The following table summarizes the quota units available for read and write operations, and the daily quota for ingesting spans for the Trace API.

### "Use the Ops Agent and OpenTelemetry Protocol (OTLP) \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ingestion formats for OTLP metrics The OTLP receiver provides the metrics mode option, which specifies the API that is used to ingest your metric data.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test gauge/gauge", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test gauge/gauge", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.gauge", "labels": [ { "key": "instrumentation source" } ], "metricKind": "GAUGE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.gauge", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The application creates an OTLP counter metric, otlp.test.cumulative , that records increasing 64-bit floating-point values.
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.

### Cloud Trace overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/overview](https://docs.cloud.google.com/trace/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- We recommend the Telemetry API for the following reason: The API provides compatibility with the open source OpenTelemetry ecosystem and its limits are often more generous than the limits of the Cloud Trace API, which is a proprietary Google Cloud API Your trace data is stored in a format that is generally consistent with the proto files defined by the OpenTelemetry OTLP Protocol .
- Environment support Trace runs on Linux in the following environments: Compute Engine Google Kubernetes Engine (GKE) Apigee (Public Preview) App Engine flexible environment App Engine standard environment Cloud Run Cloud Service Mesh Cloud SQL query insights Non-Google Cloud environments Trace provides client libraries for instrumenting your application to capture trace information.
- The instrumentation samples we provide use OpenTelemetry : For samples that use a collector-based export, see the following: Go Java Node.js Python These samples send trace data to the Telemetry API.
- For information about how to use a direct export of trace data and to send that data to the Telemetry API, see Migrate from the Trace exporter to the OTLP endpoint .

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- For a Node.js application that uses gRPC for export, add the following imports: import { AuthClient , GoogleAuth } from 'google-auth-library' ; import { credentials } from '@grpc/grpc-js' ; Also, update the initialization code to configure ADC before you instantiate the gRPC exporter: async function getAuthenticatedClient () : Promise<AuthClient> { const auth : GoogleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); return await auth . getClient (); } // Express App that exports traces via gRPC with protobuf async function main () { const authenticatedClient : AuthClient = await getAuthenticatedClient (); // ... } Configure the required OpenTelemetry resource attributes Add to the OTEL RESOURCE ATTRIBUTES environment variable the key-value pair that specifies your project.
- The sample application defines the system properties in the build.gradle script: // You can switch the desired protocol here by changing otel.exporter.otlp.protocol. def autoconf config = [ ' - Dotel . exporter . otlp . endpoint = https : //telemetry.googleapis.com', ' - Dotel . traces . exporter = otlp ' , ' - Dotel . logs . exporter = none ' , ' - Dotel . metrics . exporter = none ' , ' - Dotel . service . name = otlptrace - example ' , ' - Dotel . exporter . otlp . protocol = http / protobuf ' , ' - Dotel . java . global - autoconfigure . enabled = true ' , ] Also, pass the configuration as JVM arguments: application { mainClassName = ' com . google . cloud . opentelemetry . example . otlptrace .
- Enable the APIs Configure permissions Grant the following IAM roles to the service account that your application uses: Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter ) Logs Writer ( roles/logging.logWriter ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) To learn about Application Default Credentials (ADC), see How Application Default Credentials works and Set up Application Default Credentials (ADC) for a local development environment .

