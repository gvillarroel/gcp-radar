---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.395Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Key Visualizer"
feature_slug: "cloud-bigtable-key-visualizer"
latest_feature_date: "2018-09-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "as"
  - "visualizer"
  - "generally"
  - "key"
  - "available"
  - "bigtable"
  - "now"
  - "is"
---

# Cloud Bigtable Key Visualizer

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable Key Visualizer is now generally available as a feature.

## Extended Definition

Cloud Bigtable Key Visualizer is now generally available as a feature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.25.0 (2023-07-14) Features Change stream retention to create and update table ( #1823 ) ( 05fca58 ) Bug Fixes Fix batch mutation limit ( #1808 ) ( ed24d4f ) Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef ) Documentation Fix formatting for reversed order field example ( #1836 ) ( 10a0426 ) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af ) Python Changes for google-cloud-bigtable 2.20.0 (2023-07-17) Features rel="noreferrer noopener"}) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 ) Bug Fixes Add async context manager return types ( #828 ) ( 475a160 ) Documentation Fix formatting for reversed order field example ( #831 ) ( fddd0ba ) July 18, 2023 Feature Cloud Bigtable change streams are now generally available (GA) .
- Node.js Changes for @google-cloud/bigtable 4.1.0 (2022-09-26) Features Publish the RequestStats proto ( #1177 ) ( 89dfc83 ) 4.0.5 (2022-09-23) Bug Fixes Test is less restrictive to allow changes ( #1160 ) ( 7d05b96 ) Java Changes for google-cloud-bigtable 2.13.0 (2022-09-27) Features Add gRPC RLS dependency ( #1248 ) ( e829b92 ) Bug Fixes Add a UUID in the task value ( #1430 ) ( 3bfc7bc ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.4.5 ( #1406 ) ( d906729 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1411 ) ( ef7d741 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1412 ) ( dcae319 ) Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1409 ) ( c1e195d ) September 29, 2022 Feature The Cloud Bigtable observability metric high-granularity CPU utilization of hottest node is now generally available (GA) .
- Java Changes for google-cloud-bigtable 2.10.3 (2022-08-08) Bug Fixes Declare 2 http libraries as runtime ( #1341 ) ( 8071de6 ) 2.10.2 (2022-08-03) Bug Fixes Add a ReadFirstRow callable to set future in onComplete ( #1326 ) ( cb539b5 ) The metadata could be returned in trailer or header depends on i… ( #1337 ) ( c4b8c03 ) Dependencies Update dependency com.google.cloud:google-cloud-shared-dependencies to v3 ( #1328 ) ( bee0ca0 ) Upgrade shared config to 1.5.3, exclude google-http-client and google-http-client-gson from gax in google-cloud-bigtable-stats ( #1336 ) ( 98b3349 ) Python Changes for google-cloud-bigtable 2.11.1 (2022-08-08) Bug Fixes Retry the RST Stream error in mutate rows and read rows( #624 ) ( d24574a ) August 12, 2022 Feature Cloud Bigtable-BigQuery federation is now generally available (GA) .
- Libraries Java 2.63.0 (2025-07-30) Features Add Idempotency to Cloud Bigtable MutateRowsRequest API ( bc58b4f ) Add port as a parameter for the bigtable emulator ( #2645 ) ( 5acd3dc ) Add type support for Proto and Enum ( bc58b4f ) Publish Proto and Enum types to CBT data API ( ace12d5 ) Selective GAPIC autogeneration for Python Bigtable Admin ( e219c38 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( e219c38 ) Update routing parameters.path template ( e219c38 ) Dependencies Update sdk-platorm-java-config to 3.50.2 ( #2646 ) ( 03e6961 ) Documentation Sync generated comments from the API Protos ( bc58b4f ) July 31, 2025 Feature Logical views for Bigtable are now generally available ( GA ).

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange][google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange] retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The request for RestoreTable][google.bigtable.admin.v2.BigtableTableAdmin.RestoreTable] . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- In Bigtable, because each row key is only assigned to a single node at any point in time, a response from the node is all that's needed to confirm that a write is successful.
- Bigtable row keys frequently consist of several field values that are joined using a commonly used separator character that you choose (such as a percent sign).

