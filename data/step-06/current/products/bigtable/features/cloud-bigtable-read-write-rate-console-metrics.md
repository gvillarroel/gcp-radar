---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.055Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable read/write rate console metrics"
feature_slug: "cloud-bigtable-read-write-rate-console-metrics"
latest_feature_date: "2017-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
keywords:
  - "shows"
  - "read"
  - "rate"
  - "write"
  - "metrics"
  - "console"
---

# Cloud Bigtable read/write rate console metrics

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Cloud Console now shows graphs for rows read and rows written per second for Bigtable.

## Extended Definition

The Cloud Console now shows graphs for rows read and rows written per second for Bigtable.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can consult Cassandra server and client application metrics to get an approximate number of sustained reads and writes that have been executed.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- The following diagram shows how Bigtable physically separates the processing nodes from the storage layer: Figure 1 : Clients communicate through a routing layer to processing nodes, and then these nodes communicate with the storage layer.
- The number of nodes in each cluster in an instance should be able to handle all writes across the cluster and all reads to at least two data centers in order to maintain service level objectives (SLOs) during a cluster outage.

### Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View metrics in Bigtable monitoring Charts for the following client-side metrics are displayed on the Bigtable monitoring page: Client-side read latency Client-side write latency Client-side read attempt latency Client-side write attempt latency To view client-side metrics on the Monitoring page, follow these steps: Open the list of Bigtable instances in the Google Cloud console.
- SdkMeterProviderBuilder meterProviderBuilder = SdkMeterProvider . builder (); // register client side metrics on your meter provider BuiltinMetricsView . registerBuiltinMetrics ( "my-project-id" , meterProviderBuilder ); // register other metric reader and views meterProviderBuilder . registerMetricReader (). registerView (); // create the OTEL instance OpenTelemetry openTelemetry = OpenTelemetrySdk . builder () . setMeterProvider ( meterProviderBuilder . build ()) . build (); // Override MetricsProvider in BigtableDataSettings BigtableDataSettings settings = BigtableDataSettings . newBuilder () . setProjectId ( "my-project-id" ) . setInstanceId ( "my-instance-id" ) . setMetricsProvider ( CustomOpenTelemetryMetricsProvider . create ( openTelemetry )) . build (); try ( BigtableDataClient client = BigtableDataClient . create ( settings )) { // Application logic } Optional: Opt out of client-side metrics If you are using version 2.38.0 and later, you can opt out of using client-side metrics.
- Optional: Opt out of client-side metrics You can opt out of using client-side metrics. const bigtable = new Bigtable ({ metricsEnabled : false }); View metrics in Metrics Explorer In the Google Cloud console, go to the Metrics Explorer page.
- Add or confirm service account permissions Note: Metrics writer Identity and Access Management permissions are included in the Bigtable predefined roles by default.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use counters instead of continuous materialized views for the following: Aggregations that don't require filters and don't need to be across rows If you need to immediately read your writes from the cluster they are written to Use continuous materialized views when you want to do the following: Generate a different key for queries against your aggregations See changes to the base table reflected in your aggregations Automatically combine data across multiple rows Use a combination of counters and continuous materialized views for use cases like when you want to do the following: Capture fresh metrics in an aggregate cell but keep historical rollups of those metrics Combine metrics in a continuous materialized view Resource provisioning and performance Ongoing processing for continuous materialized views occurs as a low-priority background job.
- Bigtable metrics for requests per second, latency, and throughput are generated when you read a continuous materialized view using the Data API's ReadRows method.
- Read and write latency are unaffected : A continuous materialized view has minimal impact on performance on the source table when the instance's clusters are adequately provisioned or use autoscaling.
- As a result, it has a minimal impact on application performance and read and write latency on the source table, provided your clusters are adequately sized.

