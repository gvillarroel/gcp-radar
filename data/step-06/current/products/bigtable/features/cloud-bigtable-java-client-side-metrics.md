---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.012Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Java client-side metrics"
feature_slug: "cloud-bigtable-java-client-side-metrics"
latest_feature_date: "2022-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics"
keywords:
  - "side"
  - "version"
  - "introduces"
  - "monitoring"
  - "java"
  - "metrics"
  - "client"
---

# Cloud Bigtable Java client-side metrics

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Introduces client-side monitoring metrics for the Cloud Bigtable Java client in version 2.16.0 and later.

## Extended Definition

Introduces client-side monitoring metrics for the Cloud Bigtable Java client in version 2.16.0 and later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics)

## Supporting Pages

### Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- Source ID: `site-docs-reference-2`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your code should look similar to the following: BigtableDataSettings settings = BigtableDataSettings . newBuilder () . setProjectId ( "our-project-2-12" ) . setInstanceId ( "our-instance-85" ) . setAppProfileId ( "our-appProfile-06" ) . build (); BigtableDataSettings . enableBuiltinMetrics (); try ( BigtableDataClient client = BigtableDataClient . create ( settings )) { // Application logic } Set up a custom OpenTelemetry instance If you are using version 2.38.0 or later, and you want to publish client-side metrics to Cloud Monitoring and custom sinks, you can set up a custom OpenTelemetry instance.
- SdkMeterProviderBuilder meterProviderBuilder = SdkMeterProvider . builder (); // register client side metrics on your meter provider BuiltinMetricsView . registerBuiltinMetrics ( "my-project-id" , meterProviderBuilder ); // register other metric reader and views meterProviderBuilder . registerMetricReader (). registerView (); // create the OTEL instance OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( meterProviderBuilder . build ()) . build (); // Override MetricsProvider in BigtableDataSettings BigtableDataSettings settings = BigtableDataSettings . newBuilder () . setProjectId ( "my-project-id" ) . setInstanceId ( "my-instance-id" ) . setMetricsProvider ( CustomOpenTelemetryMetricsProvider . create ( openTelemetry )) . build (); try ( BigtableDataClient client = BigtableDataClient . create ( settings )) { // Application logic } Optional: Opt out of client-side metrics If you are using version 2.38.0 and later, you can opt out of using client-side metrics.
- BigtableDataSettings ; Configuration configuration = BigtableConfiguration . configure ( "my-project-id" , "my-instance-id" ); Connection connection = new BigtableConnection ( configuration ); BigtableDataSettings . enableBuiltinMetrics (); Using -hadoop or -shaded artifacts When you create a connection using the HBase client library and one of the -hadoop or -shaded artifacts, your code to enable the built-in client-side metrics looks similar to the following: import com.google.bigtable.repackaged.com.google.cloud.bigtable.data.v2.BigtableDataSettings ; Configuration configuration = BigtableConfiguration . configure ( "my-project-id" , "my-instance-id" ); Connection connection = new BigtableConnection ( configuration ); BigtableDataSettings . enableBuiltinMetrics (); Optional: Opt out of client-side metrics If you are using version 2.14.1 or later, client-side metrics are enabled by default.
- Your pom should look similar to the following: <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-bigtable-bom</artifactId> <version>2.38.0</version> <scope>import</scope> <type>pom</type> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-bigtable</artifactId> </dependency> </dependencies> Enable client-side metrics in your application Note: Client-side metrics are enabled by default since version 2.38.0.

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 What's next See all Google Cloud metrics .
- For the Java client libraries, the metrics are available as an opt-in feature or by default, depending on the client library version.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name client name Client library support The following table shows the minimum Java client library versions required to use the client blocking latencies metric.
- Language Client Version (Opt-in) Version (Enabled by default) Java java-bigtable 2.16.0 2.38.0 java-bigtable-hbase 2.6.4 2.14.1 Go 1.27.0 Node.js 6.2.0 ( ReadRows and ReadRow operations), 6.3.0 (other operations) C++ 2.40.0 Application blocking latencies The following table shows the attributes and details of the application blocking latencies metric.

### Client-side metrics overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client-side metrics are available for users of the following client libraries: Bigtable client library for C++ Bigtable client library for Java Bigtable HBase client for Java Bigtable client library for Go Bigtable client library for Node.js You can access client-side metrics in one of the following ways: Cloud Monitoring , under Metrics Explorer Cloud Monitoring API Bigtable system insights When to upgrade We recommend that you update all applications integrated with OpenCensus Stats to use Bigtable client-side metrics instead.
- Limitations Client-side metrics are not supported for applications that integrate Dataflow or Apache Beam client libraries with the Bigtable HBase client for Java.
- Costs There is no charge to view client-side metrics in Cloud Monitoring.
- Using both types of metrics is especially valuable for the following types of workloads: Serving path reads in user-facing and commercial applications Critical backend services Large-scale data pipelines with multiple consumers Client-side metrics give you insight into which portion of the request lifecycle might be causing latency: Expected behaviors The following behaviors are normal and expected: One-minute startup time : After you enable client-side metrics, let your application run for at least a minute before you check for any published metrics.

