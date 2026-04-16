---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.012Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable high-granularity hottest node CPU metric"
feature_slug: "cloud-bigtable-high-granularity-hottest-node-cpu-metric"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/autoscaling"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
keywords:
  - "hottest"
  - "high"
  - "granularity"
  - "introduces"
  - "metric"
  - "node"
---

# Cloud Bigtable high-granularity hottest node CPU metric

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Introduces a higher-frequency, high-granularity hottest-node CPU utilization metric for Cloud Bigtable monitoring.

## Extended Definition

Introduces a higher-frequency, high-granularity hottest-node CPU utilization metric for Cloud Bigtable monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)

## Supporting Pages

### Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Your package.json file should look similar to the following: { "dependencies" : { "@google-cloud/bigtable" : "^6.2.0" } } In your project, reinstall Node.js modules: rm -rf node modules rm package-lock.json npm i Enable client-side metrics in your application Client-side metrics are enabled by default in the Bigtable client library for Node.js as of version 6.4.0.
- Client-side metrics are available for users of the following client libraries: Bigtable client library for C++ Bigtable client library for Java Bigtable HBase client for Java Bigtable client library for Go Bigtable client library for Node.js For an overview, see the Client-side metrics overview .
- You must have version 2.16.0 or higher to use client-side metrics.
- SdkMeterProviderBuilder meterProviderBuilder = SdkMeterProvider . builder (); // register client side metrics on your meter provider BuiltinMetricsView . registerBuiltinMetrics ( "my-project-id" , meterProviderBuilder ); // register other metric reader and views meterProviderBuilder . registerMetricReader (). registerView (); // create the OTEL instance OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( meterProviderBuilder . build ()) . build (); // Override MetricsProvider in BigtableDataSettings BigtableDataSettings settings = BigtableDataSettings . newBuilder () . setProjectId ( "my-project-id" ) . setInstanceId ( "my-instance-id" ) . setMetricsProvider ( CustomOpenTelemetryMetricsProvider . create ( openTelemetry )) . build (); try ( BigtableDataClient client = BigtableDataClient . create ( settings )) { // Application logic } Optional: Opt out of client-side metrics If you are using version 2.38.0 and later, you can opt out of using client-side metrics.

### Autoscaling \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Using the same formula, the following examples show the number of nodes you might need for some sample storage amounts: SSD storage per cluster Smallest maximum number of nodes 25 TB 10 35 TB 14 50 TB 20 After your cluster is up and running with autoscaling enabled, monitor the cluster and make sure that the value you choose for maximum number of nodes is at least as high as the recommended number of nodes for CPU target and the recommended number of nodes for storage target .
- You can also view these metrics using Cloud Monitoring . bigtable.googleapis.com/cluster/autoscaling/min node count bigtable.googleapis.com/cluster/autoscaling/max node count bigtable.googleapis.com/cluster/autoscaling/recommended node count for cpu bigtable.googleapis.com/cluster/autoscaling/recommended node count for storage Logging Bigtable emits a system event audit log each time it scales a cluster.
- Bigtable autoscaling determines the number of nodes required, based on the following dimensions: CPU utilization target Storage utilization target Minimum number of nodes Maximum number of nodes Each scaling dimension generates a recommended node count, and Bigtable automatically uses the highest one.
- Choose a higher number or raise the minimum number of nodes for the following situations: You have an upcoming peak scale event, when you expect your traffic to temporarily increase, and you want to make sure you have enough capacity.

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 Go 1.27.0 Node.js 6.2.0 ( ReadRows and ReadRow operations), 6.3.0 (other operations) C++ 2.40.0 Application blocking latencies The following table shows the attributes and details of the application blocking latencies metric.
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 Go 1.38.0 Node.js 6.2.0 ( ReadRows and ReadRow operations), 6.3.0 (other operations) C++ 2.41.0 Client blocking latencies The following table shows the attributes and details of the client blocking latencies metric.
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 Go 1.27.0 Node.js 6.2.0 ( ReadRows and ReadRow operations), 6.3.0 (other operations) C++ 2.41.0 Connectivity error count The following table shows the attributes and details of the connectivity error count metric.
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 Go 1.27.0 Node.js 6.2.0 ( ReadRows and ReadRow operations), 6.3.0 (other operations) C++ 2.40.0 Attempt latencies The following table shows the attributes and details of the attempt latencies metric.

