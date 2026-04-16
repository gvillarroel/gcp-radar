---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.999Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Telemetry API"
feature_slug: "telemetry-api"
latest_feature_date: "2025-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
  - "https://docs.cloud.google.com/trace/docs/otlp"
  - "https://docs.cloud.google.com/trace/docs/quotas"
  - "https://docs.cloud.google.com/trace/docs/setup/sample-overview"
keywords:
  - "telemetry"
  - "api"
  - "the"
  - "provides"
  - "an"
  - "opentelemetry"
  - "otlp"
  - "compatible"
---

# Telemetry API

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

The Telemetry API provides an OpenTelemetry OTLP-compatible endpoint for sending trace data and supports VPC Service Controls.

## Extended Definition

The Telemetry API provides an OpenTelemetry OTLP-compatible endpoint for sending trace data and supports VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)

## Supporting Pages

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- The sample application defines the system properties in the build.gradle script: // You can switch the desired protocol here by changing otel.exporter.otlp.protocol. def autoconf config = [ ' - Dotel . exporter . otlp . endpoint = https : //telemetry.googleapis.com', ' - Dotel . traces . exporter = otlp ' , ' - Dotel . logs . exporter = none ' , ' - Dotel . metrics . exporter = none ' , ' - Dotel . service . name = otlptrace - example ' , ' - Dotel . exporter . otlp . protocol = http / protobuf ' , ' - Dotel . java . global - autoconfigure . enabled = true ' , ] Also, pass the configuration as JVM arguments: application { mainClassName = ' com . google . cloud . opentelemetry . example . otlptrace .
- For a Node.js application that uses gRPC for export, add the following imports: import { AuthClient , GoogleAuth } from 'google-auth-library' ; import { credentials } from '@grpc/grpc-js' ; Also, update the initialization code to configure ADC before you instantiate the gRPC exporter: async function getAuthenticatedClient () : Promise<AuthClient> { const auth : GoogleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); return await auth . getClient (); } // Express App that exports traces via gRPC with protobuf async function main () { const authenticatedClient : AuthClient = await getAuthenticatedClient (); // ... } Configure the required OpenTelemetry resource attributes Add to the OTEL RESOURCE ATTRIBUTES environment variable the key-value pair that specifies your project.
- For a Node.js application that uses gRPC for export, add the following imports: import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc' ; Also, update the initialization code to configure the TraceProvider with the gRPC exporter: const sdk = new NodeSDK ({ traceExporter : new OTLPTraceExporter ({ credentials : credentials . combineChannelCredentials ( credentials . createSsl (), credentials . createFromGoogleCredential ( authenticatedClient ), ), }), }); sdk . start (); Configure authentication With the previous changes to the OpenTelemetry SDK configuration, your application is configured to export traces using the OpenTelemetry OTLP exporters using either gRPC or HTTP.

### "Use the Ops Agent and OpenTelemetry Protocol (OTLP) \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Collect OTLP metrics When you use the OTLP receiver to collect metrics from your OpenTelemetry applications, the primary configuration choice for the receiver is the API that you want to use to ingest the metrics.
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- Prometheus API: When you use the Prometheus API to ingest your application's metrics, each metric is transformed by using the standard OpenTelemetry-to-Prometheus transformation and mapped to a Cloud Monitoring monitored-resource type.
- This document describes how can use the Ops Agent and the OpenTelemetry Protocol (OTLP) receiver to collect user-defined metrics and traces from applications instrumented by using OpenTelemetry and running on Compute Engine.

### Quotas and limits \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Telemetry API implements the OpenTelemetry OTLP API, and it provides greater compatibility and support for the open source OpenTelemetry ecosystem.
- The Telemetry API, which implements the OpenTelemetry OTLP API, is designed for use with applications that are instrumented by using one of the OpenTelemetry SDKs .
- To send trace data to your Google Cloud project you can use the Telemetry (OTLP) API or the Cloud Trace API .
- Telemetry API limits and quotas This section lists the limits that apply only when the Telemetry API is used to ingest trace data.

### "Overview of collector-based instrumentation samples \_|\_ Cloud Trace \_\

- URL: [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These exporters convert the telemetry into a format compatible with the corresponding API and then send the transformed data to your Google Cloud project by issuing an API command.
- Use the Ops Agent and OpenTelemetry Protocol (OTLP) describes how you can configure the Ops Agent and an OTLP receiver to collect metrics and traces from an application.
- The instrumentation in these samples, which includes using the OpenTelemetry SDK and the SDK's in-process OTLP exporter, is vendor neutral.
- Required APIs Enable the Cloud Logging, Cloud Monitoring, Cloud Trace, and Telemetry APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

