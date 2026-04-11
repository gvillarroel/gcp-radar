---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.833Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "OpenTelemetry for Java"
feature_slug: "opentelemetry-for-java"
latest_feature_date: "2021-07-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/release-notes"
  - "https://docs.cloud.google.com/trace/docs/setup/java"
  - "https://docs.cloud.google.com/trace/docs/setup/java-ot"
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
Coverage: LOW

## Step 02 Summary

Cloud Trace supports the generally available OpenTelemetry library for Java applications.

## Extended Definition

Cloud Trace supports the generally available OpenTelemetry library for Java applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- [https://docs.cloud.google.com/trace/docs/setup/java](https://docs.cloud.google.com/trace/docs/setup/java)
- [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)

## Supporting Pages

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 09, 2021 Feature Cloud Trace announces that the OpenTelemetry library for Java is now generally available.
- April 19, 2021 Feature Cloud Trace announces that the OpenTelemetry library for Python is now generally available.
- Feature Announcing new Open Telemetry samples that show how to instrument your Python and Node.js applications to collect metrics, logs, and traces: Python example Node.js example For general instrumentation information and recommendations, and for links to other samples, see: Instrumentation and observability overview Choose an instrumentation approach February 20, 2024 Change For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents: Instrumentation and observability overview Choose an instrumentation approach Go instrumentation example Java instrumentation example January 16, 2024 Change Announcing a common navigation pane in the Google Cloud console for Logging, Monitoring, Trace, and Error Reporting.
- You can view generative AI events by using the Trace Explorer : Instrument generative AI applications Instrument a LangGraph ReAct Agent with OpenTelemetry View generative AI events March 25, 2025 Feature To send trace data to your Google Cloud project, we recommend that you use the new Telemetry API, which implements the OpenTelemetry OTLP API and provides compatibility and support for the open source ecosystem.

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java](https://docs.cloud.google.com/trace/docs/setup/java)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- RUN wget - O / opentelemetry - javaagent . jar https : //github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.31.0/opentelemetry-javaagent.jar CMD sh - c "java -javaagent:/opentelemetry-javaagent.jar -cp app:app/lib/ com.example.demo.DemoApplication \ 2>&1 tee /var/log/app.log" Alternatively, you can also set the -javaagent flag in the JAVA TOOL OPTIONS environment variable: export JAVA TOOL OPTIONS = "-javaagent:PATH/TO/opentelemetry-javaagent.jar" Configure OpenTelemetry The default configuration for the OpenTelemetry Java Agent exports traces and metrics by using the OTLP protocol .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure your app to use the OpenTelemetry Java Agent Configure OpenTelemetry Configure structured logging Write structured logs Configure your app to use the OpenTelemetry Java Agent To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the invocation of your app to use the OpenTelemetry Java Agent .
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-java Go to the sample directory: cd opentelemetry-operations-java/examples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- What's next OpenTelemetry OTLP specification Structured logging Troubleshooting Managed Service for Prometheus Troubleshoot Cloud Trace Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Java instrumentation sample \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/setup/java-ot](https://docs.cloud.google.com/trace/docs/setup/java-ot)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RUN wget - O / opentelemetry - javaagent . jar https : //github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.31.0/opentelemetry-javaagent.jar CMD sh - c "java -javaagent:/opentelemetry-javaagent.jar -cp app:app/lib/ com.example.demo.DemoApplication \ 2>&1 tee /var/log/app.log" Alternatively, you can also set the -javaagent flag in the JAVA TOOL OPTIONS environment variable: export JAVA TOOL OPTIONS = "-javaagent:PATH/TO/opentelemetry-javaagent.jar" Configure OpenTelemetry The default configuration for the OpenTelemetry Java Agent exports traces and metrics by using the OTLP protocol .
- Instrument your app to collect traces, metrics, and logs To instrument your app to collect trace and metric data, and to write structured JSON to standard out, perform the following steps as described in subsequent sections of this document: Configure your app to use the OpenTelemetry Java Agent Configure OpenTelemetry Configure structured logging Write structured logs Configure your app to use the OpenTelemetry Java Agent To configure the app to write structured logs and to collect metrics and trace data by using OpenTelemetry, update the invocation of your app to use the OpenTelemetry Java Agent .
- Clone the repository: git clone https://github.com/GoogleCloudPlatform/opentelemetry-operations-java Go to the sample directory: cd opentelemetry-operations-java/examples/instrumentation-quickstart Build and run the sample: docker compose up --abort-on-container-exit If you aren't running on Cloud Shell, then run the application with the GOOGLE APPLICATION CREDENTIALS environment variable pointing to a credentials file.
- What's next OpenTelemetry OTLP specification Structured logging Troubleshooting Managed Service for Prometheus Troubleshoot Cloud Trace Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

