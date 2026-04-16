---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.026Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "method"
feature_slug: "method"
latest_feature_date: "2021-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup"
keywords:
  - "method"
  - "utilization"
  - "profile"
  - "metric"
  - "adds"
---

# method

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Adds a Cloud Bigtable metric for CPU utilization by app profile, method, and table for finer-grained observability.

## Extended Definition

Adds a Cloud Bigtable metric for CPU utilization by app profile, method, and table for finer-grained observability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)

## Supporting Pages

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name final operation status streaming operation client name Client library support The following table shows the minimum client library versions required to use the operation latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the attempt latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the server latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status client name Client library support The following table shows the minimum client library versions required to use the connectivity error count metric.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.
- You can also use the application profile as a tag to segment metrics.
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- The drawback of a single-cluster approach is that in a failover, either the application must be able to retry by using an alternative application profile identifier, or you must manually perform the failover of impacted, single-cluster routing profiles.

### Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Your code should look similar to the following: BigtableDataSettings settings = BigtableDataSettings . newBuilder () . setProjectId ( "our-project-2-12" ) . setInstanceId ( "our-instance-85" ) . setAppProfileId ( "our-appProfile-06" ) . build (); BigtableDataSettings . enableBuiltinMetrics (); try ( BigtableDataClient client = BigtableDataClient . create ( settings )) { // Application logic } Set up a custom OpenTelemetry instance If you are using version 2.38.0 or later, and you want to publish client-side metrics to Cloud Monitoring and custom sinks, you can set up a custom OpenTelemetry instance.
- Optional: To view metrics for individual app profiles, click Application Profiles .
- Select a metric, a group by method, and status, and pick an Aggregator .
- SdkMeterProviderBuilder meterProviderBuilder = SdkMeterProvider . builder (); // register client side metrics on your meter provider BuiltinMetricsView . registerBuiltinMetrics ( "my-project-id" , meterProviderBuilder ); // register other metric reader and views meterProviderBuilder . registerMetricReader (). registerView (); // create the OTEL instance OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( meterProviderBuilder . build ()) . build (); // Override MetricsProvider in BigtableDataSettings BigtableDataSettings settings = BigtableDataSettings . newBuilder () . setProjectId ( "my-project-id" ) . setInstanceId ( "my-instance-id" ) . setMetricsProvider ( CustomOpenTelemetryMetricsProvider . create ( openTelemetry )) . build (); try ( BigtableDataClient client = BigtableDataClient . create ( settings )) { // Application logic } Optional: Opt out of client-side metrics If you are using version 2.38.0 and later, you can opt out of using client-side metrics.

