---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.322Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable JDBC driver"
feature_slug: "bigtable-jdbc-driver"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
keywords:
  - "driver"
  - "jdbc"
  - "applications"
  - "enables"
  - "java"
  - "bigtable"
  - "and"
  - "the"
---

# Bigtable JDBC driver

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable JDBC driver enables Java applications and JDBC-capable reporting tools to connect to Bigtable.

## Extended Definition

The Bigtable JDBC driver enables Java applications and JDBC-capable reporting tools to connect to Bigtable.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- April 07, 2026 Feature You can connect to Bigtable from Java applications and other reporting tools that support a generic JDBC adapter by using the Bigtable JDBC driver .
- Feature You can connect to Bigtable from Java applications and other reporting tools that support a generic JDBC adapter by using the Bigtable JDBC driver .
- July 21, 2025 Libraries Java 2.62.0 (2025-07-15) Features Add Idempotency to Cloud Bigtable MutateRowRequest API ( b5acca6 ) Add SchemaBundles API ( b5acca6 ) bigtable: Add schema bundle support ( #2619 ) ( 7d7b9a9 ) Next release from main branch is 2.62.0 ( #2621 ) ( 202b211 ) Dependencies Minor cleanup ( #2623 ) ( 7b230e8 ) Update shared dependencies ( #2616 ) ( eb7cfd5 ) July 07, 2025 Libraries Go 1.38.0 (2025-06-27) Features bigtable/admin: Add deletion protection support for LVs ( a95a0bf ) bigtable/admin: Add SchemaBundles API ( 116a33a ) bigtable: Add application blocking latencies ( #11349 ) ( 8f145ed ) bigtable: Add DeletionProtection support for Logical Views ( #11895 ) ( ed488b9 ) bigtable: Connectivity error count client side metric ( #12438 ) ( dd45fd7 ) bigtable: NewServerWithListener ( #12408 ) ( 59ea0de ) bigtable: Use delay from RetryInfo ( #11955 ) ( 0510711 ) Bug Fixes bigtable: Correct the Bigtable monitoring client options ( #12410 ) ( bd966bc ) bigtable: Fix: upgrade gRPC service registration func ( 6a871e0 ) bigtable: Retry RST stream errors ( #11477 ) ( df43b4a ) Performance Improvements bigtable: Refactor metric attributes for performance ( #12445 ) ( f734ec6 ) Documentation bigtable/admin: Improved comment formatting and product naming ( 116a33a ) Change When you undelete a table , Bigtable automatically enables deletion protection for that table.
- Node.js Changes for @google-cloud/bigtable 5.1.1 (2024-07-11) Bug Fixes Ensure that during resumption of a scan, rows that have not been observed by the caller are re-requested ( #1444 ) ( 2d8de32 ) Remove custom readrows retry logic and rely on gax for retries ( #1422 ) ( 3e0a46e ) Java Changes for google-cloud-bigtable 2.40.0 (2024-06-28) Features Add String type with Utf8Raw encoding to Bigtable API ( #2191 ) ( e7f03fc ) Bug Fixes Add getServiceName() to EnhancedBigTableStubSettings ( #2256 ) ( da703db ) Remove grpclb ( #2033 ) ( 7355375 ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.3 ( #2268 ) ( 4573220 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2269 ) ( 69fef96 ) Update shared dependencies ( #2265 ) ( 61014ca ) June 17, 2024 Feature The Python client library for Bigtable now offers an asynchronous API for use with asynchronous applications.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Applications that are written for Hadoop and rely on the open source Apache HBase library for Java can connect without significant change to Bigtable.
- The Cassandra to Bigtable client for Java is a seamless replacement for your Cassandra drivers.
- With Bigtable, you can build applications with large, dynamic collections without the performance trade-offs required by Cassandra, for the following reasons: Bigtable stores collection elements as individual cells, so that operations on elements are highly granular.
- In addition to gRPC and client libraries for various programming languages, Bigtable maintains compatibility with the open source Apache HBase Java client library , an alternative open source database engine implementation of the Bigtable paper.

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder () . setProjectId ( "my-project" ); settingsBuilder . stubSettings () . setEndpoint ( myEndpoint ); BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( settingsBuilder . build ()); Inheritance java.lang.Object > BigtableInstanceAdminClient Static Methods create(BigtableInstanceAdminSettings settings) public static BigtableInstanceAdminClient create ( BigtableInstanceAdminSettings settings ) Constructs an instance of BigtableInstanceAdminClient with the given settings.
- Sample code: ApiFuture<Void> deleteFuture = client . deleteMaterializedViewAsync ( "my-instance" , "my-materialized-view" ); deleteFuture . get (); Parameters Name Description instanceId String materializedViewId String Returns Type Description ApiFuture < Void > disableClusterAutoscaling(String instanceId, String clusterId, int staticSize) public Cluster disableClusterAutoscaling ( String instanceId , String clusterId , int staticSize ) Disables autoscaling and enables manual scaling by setting a static node count for the cluster.
- Sample code: Cluster cluster = client . disableClusterAutoscaling ( "my-instance" , "my-cluster" , 3 ); Parameters Name Description instanceId String clusterId String staticSize int Returns Type Description Cluster disableClusterAutoscalingAsync(String instanceId, String clusterId, int staticSize) public ApiFuture<Cluster> disableClusterAutoscalingAsync ( String instanceId , String clusterId , int staticSize ) Asynchronously disables autoscaling and enables manual scaling by setting a static node count for the cluster.
- Parameters Name Description projectId String stub com.google.cloud.bigtable.admin.v2.stub.BigtableInstanceAdminStub Returns Type Description BigtableInstanceAdminClient Methods close() public void close () Closes the client and frees all resources associated with it (like thread pools). createAppProfile(CreateAppProfileRequest request) public AppProfile createAppProfile ( CreateAppProfileRequest request ) Creates a new app profile.

