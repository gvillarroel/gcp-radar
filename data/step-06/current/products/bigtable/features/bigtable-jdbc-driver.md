---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.978Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable JDBC driver"
feature_slug: "bigtable-jdbc-driver"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient"
keywords:
  - "reporting"
  - "capable"
  - "driver"
  - "jdbc"
  - "applications"
  - "enables"
  - "java"
---

# Bigtable JDBC driver

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable JDBC driver enables Java applications and JDBC-capable reporting tools to connect to Bigtable.

## Extended Definition

The Bigtable JDBC driver enables Java applications and JDBC-capable reporting tools to connect to Bigtable.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Applications that are written for Hadoop and rely on the open source Apache HBase library for Java can connect without significant change to Bigtable.
- For applications that don't require HBase compatibility, we recommend that you use the built-in Bigtable Java client.
- The Cassandra to Bigtable client for Java is a seamless replacement for your Cassandra drivers.
- With Bigtable, you can build applications with large, dynamic collections without the performance trade-offs required by Cassandra, for the following reasons: Bigtable stores collection elements as individual cells, so that operations on elements are highly granular.

### "google-cloud-bigtable overview (2.74.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/overview)
- Source ID: `site-java-reference`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Bigtable Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Bigtable for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-bigtable overview (2.74.0) Stay organized with collections Save and categorize content based on your preferences.
- Managing Library Versions We recommend using the com.google.cloud:libraries-bom installation method detailed above to streamline dependency management across multiple Cloud Java client libraries.
- Choosing the Right Version ID Each Cloud Java client library may contain packages tied to specific Version IDs (e.g., v1 , v2alpha ).

### "Class BigtableInstanceAdminClient (2.74.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.BigtableInstanceAdminClient)
- Source ID: `site-java-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Builder settingsBuilder = BigtableInstanceAdminSettings . newBuilder () . setProjectId ( "my-project" ); settingsBuilder . stubSettings () . setEndpoint ( myEndpoint ); BigtableInstanceAdminClient client = BigtableInstanceAdminClient . create ( settingsBuilder . build ()); Inheritance java.lang.Object > BigtableInstanceAdminClient Static Methods create(BigtableInstanceAdminSettings settings) public static BigtableInstanceAdminClient create ( BigtableInstanceAdminSettings settings ) Constructs an instance of BigtableInstanceAdminClient with the given settings.
- Sample code: ApiFuture<Void> deleteFuture = client . deleteMaterializedViewAsync ( "my-instance" , "my-materialized-view" ); deleteFuture . get (); Parameters Name Description instanceId String materializedViewId String Returns Type Description ApiFuture < Void > disableClusterAutoscaling(String instanceId, String clusterId, int staticSize) public Cluster disableClusterAutoscaling ( String instanceId , String clusterId , int staticSize ) Disables autoscaling and enables manual scaling by setting a static node count for the cluster.
- Sample code: Cluster cluster = client . disableClusterAutoscaling ( "my-instance" , "my-cluster" , 3 ); Parameters Name Description instanceId String clusterId String staticSize int Returns Type Description Cluster disableClusterAutoscalingAsync(String instanceId, String clusterId, int staticSize) public ApiFuture<Cluster> disableClusterAutoscalingAsync ( String instanceId , String clusterId , int staticSize ) Asynchronously disables autoscaling and enables manual scaling by setting a static node count for the cluster.
- Home Documentation Developer tools Java Client libraries Send feedback Class BigtableInstanceAdminClient (2.74.0) Stay organized with collections Save and categorize content based on your preferences.

