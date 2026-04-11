---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.317Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Protobuf schema support for Bigtable field queries"
feature_slug: "protobuf-schema-support-for-bigtable-field-queries"
latest_feature_date: "2025-11-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "protobuf"
  - "schema"
  - "field"
  - "queries"
  - "supports"
  - "bigtable"
  - "for"
  - "now"
---

# Protobuf schema support for Bigtable field queries

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports protocol buffer schemas for querying individual fields in protobuf messages via GoogleSQL for Bigtable or BigQuery external tables.

## Extended Definition

Bigtable now supports protocol buffer schemas for querying individual fields in protobuf messages via GoogleSQL for Bigtable or BigQuery external tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Google recommends that you test the performance of Bigtable with representative data and queries to establish a metric for the per-node QPS that's achievable for your workload.
- This document applies your knowledge of Apache Cassandra to using Bigtable to describe concepts that you should understand before migrating.
- CQL : the Cassandra Query Language , a language like SQL that's used for table creation, schema changes, row mutations, and queries.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- April 07, 2025 Libraries Java 2.57.2 (2025-03-31) Bug Fixes Library should released as 2.57.2 ( #2549 ) ( 58d0bbd ) Go 1.36.0 (2025-03-31) Features bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 ) bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 ) bigtable/admin: Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 3f23a91 ) bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 ) bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 ) bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd ) bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 ) bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e ) bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 ) bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 ) bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b ) bigtable: Add support for logical views ( #11792 ) ( 630d751 ) bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 ) bigtable: Adding node scaling factor ( b680164 ) bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 ) bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac ) Bug Fixes bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa ) bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 ) bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 ) Java 2.57.3 (2025-04-01) Bug Fixes Remove debug messages ( #2552 ) ( 6359834 ) March 31, 2025 Libraries Java 2.57.0 (2025-03-24) Features Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 ) Java 2.57.1 (2025-03-24) Bug Fixes Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 ) March 26, 2025 Change The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
- March 24, 2025 Libraries Java 2.56.0 (2025-03-18) Features bigtable: Add support for Logical Views in Admin API ( #2519 ) ( 6dac3fd ) bigtable: Add support for Materialized Views in Admin API ( #2511 ) ( 55cd719 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 7992af0 ) Dependencies Sdk-platform-java-config 3.45.1 ( #2517 ) ( b2af258 ) Python 2.30.0 (2025-03-18) Features Update ExecuteQuery to use Prepare ( #1100 ) ( 8a7abc1 ) Bug Fixes Allow protobuf 6.x ( #1092 ) ( 1015fa8 ) Remove setup.cfg configuration for creating universal wheels ( #1097 ) ( 95f4b82 ) March 17, 2025 Libraries Java 2.55.0 (2025-03-11) Features Add MaterializedViewName to ReadRows and SampleRowKeys ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 1763c6e ) Add MaterializedViews and LogicalViews APIs ( 7340527 ) Add PrepareQuery api and update ExecuteQuery to support it ( 1763c6e ) bigtable: Add support for data APIs for materialized views ( #2508 ) ( 6310a63 ) large-row-skip: Added large-row-skip-callable with configurable rowadapter ( #2509 ) ( ba193ef ) Next release from main branch is 2.55.0 ( #2506 ) ( 4e45837 ) Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 7340527 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 91e4369 ) Documentation Fixed formatting of resource path strings ( 7340527 ) March 11, 2025 Feature You can use Cloud KMS Autokey to automate the creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters.
- November 24, 2025 Libraries Java 2.69.0 (2025-11-17) Features bigtable: Add internal grpc subconnections metric and add outstanding rpcs to INTERNAL VIEW ( #2700 ) ( e3e6e99 ) bigtable: Expose a metric to track the number of outstanding rpcs (unary , streaming) in channel pool ( #2696 ) ( 140a1ad ) bigtable: Populate alts field in channel entry ( #2702 ) ( 1bfb763 ) Enable ALTS hard bound token in Bigtable w/ direct access ( #2695 ) ( d12b37d ) Java 2.70.0 (2025-11-18) Features Add PeerInfo proto in Bigtable API ( 0736694 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 0736694 ) Dependencies Update shared dependencies ( #2704 ) ( 97a8a0e ) Documentation Update javadoc sample for BigtableTableAdminClient.listTables ( #2308 ) ( 56237d7 ) Java 2.70.0 (2025-11-18) Features Add PeerInfo proto in Bigtable API ( 0736694 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 0736694 ) Dependencies Update shared dependencies ( #2704 ) ( 97a8a0e ) Documentation Update javadoc sample for BigtableTableAdminClient.listTables ( #2308 ) ( 56237d7 ) November 03, 2025 Feature You can use protocol buffer (protobuf) schemas to query individual fields within protobuf messages stored as bytes in Bigtable.
- September 29, 2025 Libraries Go 1.40.1 (2025-09-26) Features bigtable: Add an e2e flow for direct access with instructions ( #12939 ) ( fdcdde8 ) Bug Fixes bigtable: Release bigtable as 1.40.1 ( #12961 ) ( 33e1474 ) bigtable: Use stable stats.NewMetricSet ( #12941 ) ( 2c713d7 ) 1.40.0 (2025-09-22) Features bigtable: Expose otel native grpc metrics in Bigtable ( #12827 ) ( e9d2efd ) Java 2.67.0 (2025-09-24) Features Idle channel eviction ( #2651 ) ( 70c05c9 ) Load balancing options for BigtableChannelPool ( #2667 ) ( 5adaa84 ) Bug Fixes Add missing break; to PROTO and ENUM value type check ( #2672 ) ( 337e432 ) Remove beta api annotation for query paginator ( #2660 ) ( f68a1fa ) Dependencies Update shared dependencies ( #2679 ) ( a5b8260 ) September 15, 2025 Libraries Java 2.66.0 (2025-09-10) Features Add support for Proto and Enum types ( #2662 ) ( da3065d ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2668 ) ( 06ac93e ) September 01, 2025 Libraries Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) Go 1.39.0 (2025-08-28) Features bigtable/admin: Add tags field to Instance proto (stable branch) ( a846564 ) bigtable/spanner: Allow disable gRPC DirectPath deps ( #12469 ) ( 2205d27 ) bigtable: Add client epoch for each call ( #12685 ) ( c9eac01 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowRequest API ( 98ba6f0 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowsRequest API ( ac4970b ) bigtable: Adding support to schema bundles ( #12516 ) ( 688eb13 ) bigtable: Create first response latencies instrument ( #12706 ) ( 6f34867 ) bigtable: Expose directaccess via a env variable ( #12684 ) ( 0306910 ) bigtable: Expose pinger in go client ( #12683 ) ( a330457 ) bigtable: First response latencies and connectivity error count metrics ( #10616 ) ( 3054593 ) bigtable: Publish Proto and Enum types to CBT data API ( 83f894e ) bigtable: Record client blocking latencies ( #12698 ) ( 5f03fb3 ) bigtable: Support universe domain ( #12567 ) ( fc59e39 ) bigtable: Update ListSchemaBundles to returns only names ( #12563 ) ( 83ea7c4 ) Bug Fixes bigtable: Add ReadRows/SampleRowKeys bindings for materialized views ( 7616e81 ) bigtable: Fix NoopMetricsProvider panic ( #12709 ) ( 8c6da0d ) bigtable: Ignore errors while creating monitoring client and disable metrics ( #12708 ) ( 2346cf1 ) bigtable: Update routing parameters.path template ( c574e28 ) Performance Improvements bigtable: Create attributes only when enabled ( #12647 ) ( aa31abc ) Documentation bigtable: Minor comment update for field idempotency in message .google.bigtable.v2.MutateRowRequest ( ac4970b ) bigtable: Sync generated comments from the API Protos ( ac4970b ) Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) August 28, 2025 Announcement Bigtable tools are available in Agent Development Kit (ADK) .

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the schema bundle field on the request instance; if request is provided, this should not be set. update mask google.protobuf.field mask pb2.FieldMask Optional.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- CreateSchemaBundleRequest ( parent="parent value", schema bundle id="schema bundle id value", schema bundle=schema bundle, ) Make the request operation = client. create schema bundle (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.CreateSchemaBundleRequest , dict]] The request object.

