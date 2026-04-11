---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.363Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Java client-side metrics"
feature_slug: "cloud-bigtable-java-client-side-metrics"
latest_feature_date: "2022-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
keywords:
  - "side"
  - "introduces"
  - "monitoring"
  - "java"
  - "metrics"
  - "client"
  - "bigtable"
  - "for"
---

# Cloud Bigtable Java client-side metrics

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Introduces client-side monitoring metrics for the Cloud Bigtable Java client in version 2.16.0 and later.

## Extended Definition

Introduces client-side monitoring metrics for the Cloud Bigtable Java client in version 2.16.0 and later.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)

## Supporting Pages

### Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View metrics in Bigtable monitoring Charts for the following client-side metrics are displayed on the Bigtable monitoring page: Client-side read latency Client-side write latency Client-side read attempt latency Client-side write attempt latency To view client-side metrics on the Monitoring page, follow these steps: Open the list of Bigtable instances in the Google Cloud console.
- Client-side metrics are available for users of the following client libraries: Bigtable client library for C++ Bigtable client library for Java Bigtable HBase client for Java Bigtable client library for Go Bigtable client library for Node.js For an overview, see the Client-side metrics overview .
- BIGTABLE ENABLE CLIENT SIDE METRICS , false ); Connection connection = new BigtableConnection ( configuration ); Java Follow these steps if you use the Bigtable client library for Java, which calls the Bigtable APIs.
- For the Bigtable client library to collect the client-side metrics, your project must include dependencies for OpenTelemetry and Cloud Monitoring.

### Client-side metrics overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Client-side metrics are available for users of the following client libraries: Bigtable client library for C++ Bigtable client library for Java Bigtable HBase client for Java Bigtable client library for Go Bigtable client library for Node.js You can access client-side metrics in one of the following ways: Cloud Monitoring , under Metrics Explorer Cloud Monitoring API Bigtable system insights When to upgrade We recommend that you update all applications integrated with OpenCensus Stats to use Bigtable client-side metrics instead.
- Limitations Client-side metrics are not supported for applications that integrate Dataflow or Apache Beam client libraries with the Bigtable HBase client for Java.
- Client-side metrics overview Bigtable provides client-side metrics that you can use together with server-side metrics to optimize performance and troubleshoot performance issues if they occur.
- When to use client-side metrics We recommend that you always use client-side metrics in conjunction with server-side metrics to get a complete, actionable view of your Bigtable performance.

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client-side metrics descriptions Client-side metrics are available for multiple Bigtable client libraries.
- For a comprehensive list of Bigtable server-side and client-side metrics, see Metrics .
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 What's next See all Google Cloud metrics .
- For the Java client libraries, the metrics are available as an opt-in feature or by default, depending on the client library version.

