---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.002Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "OpenTelemetry for Java"
feature_slug: "opentelemetry-for-java"
latest_feature_date: "2021-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/setup/java-ot"
  - "https://docs.cloud.google.com/trace/docs/setup/java"
  - "https://docs.cloud.google.com/trace/docs/reference/trace-schema"
  - "https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints"
keywords:
  - "opentelemetry"
  - "for"
  - "java"
  - "trace"
  - "supports"
  - "the"
  - "generally"
  - "available"
---

# OpenTelemetry for Java

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace supports the generally available OpenTelemetry library for Java applications.

## Extended Definition

Cloud Trace supports the generally available OpenTelemetry library for Java applications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- [https://docs.cloud.google.com/trace/docs/setup/java](https://docs.cloud.google.com/trace/docs/setup/java)
- [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)

## Supporting Pages

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RUN wget - O / opentelemetry - javaagent . jar https : //github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.31.0/opentelemetry-javaagent.jar CMD sh - c "java -javaagent:/opentelemetry-javaagent.jar -cp app:app/lib/ com.example.demo.DemoApplication \ 2>&1 tee /var/log/app.log" Alternatively, you can also set the -javaagent flag in the JAVA TOOL OPTIONS environment variable: export JAVA TOOL OPTIONS = "-javaagent:PATH/TO/opentelemetry-javaagent.jar" Configure OpenTelemetry The default configuration for the OpenTelemetry Java Agent exports traces and metrics by using the OTLP protocol .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure your app to use the OpenTelemetry Java Agent Configure OpenTelemetry Configure structured logging Write structured logs Configure your app to use the OpenTelemetry Java Agent To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the invocation of your app to use the OpenTelemetry Java Agent .
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-java Go to the sample directory: cd opentelemetry-operations-java/examples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- What's next OpenTelemetry OTLP specification Structured logging Troubleshooting Managed Service for Prometheus Troubleshoot Cloud Trace Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java](https://docs.cloud.google.com/trace/docs/setup/java)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RUN wget - O / opentelemetry - javaagent . jar https : //github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.31.0/opentelemetry-javaagent.jar CMD sh - c "java -javaagent:/opentelemetry-javaagent.jar -cp app:app/lib/ com.example.demo.DemoApplication \ 2>&1 tee /var/log/app.log" Alternatively, you can also set the -javaagent flag in the JAVA TOOL OPTIONS environment variable: export JAVA TOOL OPTIONS = "-javaagent:PATH/TO/opentelemetry-javaagent.jar" Configure OpenTelemetry The default configuration for the OpenTelemetry Java Agent exports traces and metrics by using the OTLP protocol .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure your app to use the OpenTelemetry Java Agent Configure OpenTelemetry Configure structured logging Write structured logs Configure your app to use the OpenTelemetry Java Agent To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the invocation of your app to use the OpenTelemetry Java Agent .
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-java Go to the sample directory: cd opentelemetry-operations-java/examples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- What's next OpenTelemetry OTLP specification Structured logging Troubleshooting Managed Service for Prometheus Troubleshoot Cloud Trace Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Storage schema for trace data \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/reference/trace-schema](https://docs.cloud.google.com/trace/docs/reference/trace-schema)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- That API doesn't validate that the data conforms to the declared schema. apphub record without repeated fields Application-specific labels are available when trace spans are generated by App Hub applications, when those applications run on supported infrastructure or have been instrumented .
- The format of the data is generally consistent with the proto files defined by the OpenTelemetry OTLP Protocol .
- The Cloud Trace API doesn't use the OpenTelemetry OTLP Protocol and defines a proprietary data format.
- To learn more, see OpenTelemetry: Resources . instrumentation scope record without repeated fields This field identifies the library or application component for the specified resource that is collecting telemetry.

### "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a Java application that uses the OpenTelemetry SDK Autoconfigure module , we recommend that you also use the Google Cloud Authentication Extension . implementation ( "io.opentelemetry.contrib:opentelemetry-gcp-auth-extension:1.52.0-alpha" ) Go To authenticate to Trace, set up Application Default Credentials.
- Why you should migrate The OpenTelemetry SDKs generate log, metric, and trace data in in a format that is generally consistent with the proto files defined by the OpenTelemetry OTLP Protocol .
- For a Python application that uses gRPC for export, add the following imports: from opentelemetry import trace from opentelemetry.exporter.otlp.proto.grpc.trace exporter import ( OTLPSpanExporter , ) Also, update the initialization code to configure the TraceProvider with the gRPC exporter: Initialize OpenTelemetry with OTLP exporters channel creds: configure Application Default Credentials trace provider = TracerProvider ( resource = resource ) processor = BatchSpanProcessor ( OTLPSpanExporter ( credentials = channel creds , endpoint = "https://telemetry.googleapis.com:443/v1/traces" , ) ) trace provider . add span processor ( processor ) trace . set tracer provider ( trace provider ) tracer = trace . get tracer ( "my.tracer.name" ) Node.js This section illustrates changes that you need to make when using gRPC for export.
- For a Node.js application that uses gRPC for export, add the following imports: import { AuthClient , GoogleAuth } from 'google-auth-library' ; import { credentials } from '@grpc/grpc-js' ; Also, update the initialization code to configure ADC before you instantiate the gRPC exporter: async function getAuthenticatedClient () : Promise<AuthClient> { const auth : GoogleAuth = new GoogleAuth ({ scopes : 'https://www.googleapis.com/auth/cloud-platform' , }); return await auth . getClient (); } // Express App that exports traces via gRPC with protobuf async function main () { const authenticatedClient : AuthClient = await getAuthenticatedClient (); // ... } Configure the required OpenTelemetry resource attributes Add to the OTEL RESOURCE ATTRIBUTES environment variable the key-value pair that specifies your project.

