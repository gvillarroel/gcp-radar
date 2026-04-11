---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.366Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable hot tablets observability"
feature_slug: "cloud-bigtable-hot-tablets-observability"
latest_feature_date: "2022-06-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "tablets"
  - "visibility"
  - "hot"
  - "observability"
  - "provides"
  - "into"
  - "bigtable"
  - "now"
---

# Cloud Bigtable hot tablets observability

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable now provides visibility into hot tablets to help identify and monitor heavily loaded tablets in a cluster.

## Extended Definition

Cloud Bigtable now provides visibility into hot tablets to help identify and monitor heavily loaded tablets in a cluster.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- June 02, 2022 Feature Cloud Bigtable now provides increased observability by letting you identify and monitor hot tablets in a cluster.
- Node.js Changes for @google-cloud/bigtable 4.1.0 (2022-09-26) Features Publish the RequestStats proto ( #1177 ) ( 89dfc83 ) 4.0.5 (2022-09-23) Bug Fixes Test is less restrictive to allow changes ( #1160 ) ( 7d05b96 ) Java Changes for google-cloud-bigtable 2.13.0 (2022-09-27) Features Add gRPC RLS dependency ( #1248 ) ( e829b92 ) Bug Fixes Add a UUID in the task value ( #1430 ) ( 3bfc7bc ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.5 ( #1406 ) ( d906729 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1411 ) ( ef7d741 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1412 ) ( dcae319 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1409 ) ( c1e195d ) September 29, 2022 Feature The Cloud Bigtable observability metric high-granularity CPU utilization of hottest node is now generally available (GA) .
- February 17, 2025 Libraries Java 2.52.0 (2025-02-14) Features Automated backups are supported in the admin client ( #2472 ) ( 48633e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 47ca299 ) Extend timeouts for check consistency ( 47ca299 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #2490 ) ( ca25d4e ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2481 ) ( deb1f79 ) February 10, 2025 Libraries Java 2.51.2 (2025-02-03) Bug Fixes Add known conformance test failures ( #2474 ) ( 15488fe ) Dependencies Update shared dependencies ( #2473 ) ( 4d6d419 ) February 03, 2025 Feature Tags data for Bigtable instances is now included in Cloud Billing data, letting you use tagged Bigtable instances to gain visibility into your resource usage and spending.
- October 04, 2021 Feature Cloud Bigtable provides a CPU utilization by app profile, method, and table metric that gives you more granular observability into the cluster's CPU usage .

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- A Bigtable table is sharded into blocks of contiguous rows, called tablets, which are stored on Colossus, a distributed file system that provides high durability.
- Consideration Bigtable Aerospike Hot rows Distributes tablets and operations to equalize resource usage.
- Advanced types might be increasingly supported in the future, but at the time of writing this document there is no way to put such types into Bigtable, everything is serialized client side.
- Bigtable's architecture provides the following benefits: Bigtable clients don't need to be aware of the data distribution and load balancing.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- CreateTableFromSnapshotRequest ( parent="parent value", table id="table id value", source snapshot="source snapshot value", ) Make the request operation = client. create table from snapshot (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.CreateTableFromSnapshotRequest , dict]] The request object.
- Additionally, the returned :class: long-running-operation <<xref uid="google.cloud.bigtable admin v2.overlay.types">google.cloud.bigtable admin v2.overlay.types</xref>.async restore table.AsyncRestoreTableOperation> provides a method, xref optimize restore table operation that provides access to a google.api core.operation async.AsyncOperation object representing the OptimizeRestoreTable long-running-operation after the current one has completed.
- SnapshotTableRequest ( name="name value", cluster="cluster value", snapshot id="snapshot id value", ) Make the request operation = client. snapshot table (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.SnapshotTableRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 async def sample create table from snapshot(): Create a client client = bigtable admin v2.

