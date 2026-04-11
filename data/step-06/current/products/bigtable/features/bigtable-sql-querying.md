---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.346Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable SQL querying"
feature_slug: "bigtable-sql-querying"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "running"
  - "querying"
  - "queries"
  - "sql"
  - "available"
  - "supports"
  - "bigtable"
  - "now"
---

# Bigtable SQL querying

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable now supports running SQL queries, available in preview.

## Extended Definition

Bigtable now supports running SQL queries, available in preview.

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
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- When querying Bigtable using SQL, column families are treated like Cassandra's maps . map key : key that uniquely identifies a key-value entry in a Cassandra map column qualifier : a label for a value stored in a table that's indexed by the unique row key.
- When querying Bigtable using SQL, columns are treated like keys of a map . column : the label for a value stored in a table that's indexed by the unique primary key. column : the label for a value stored in a table that's indexed by the unique row key.
- Google recommends that you test the performance of Bigtable with representative data and queries to establish a metric for the per-node QPS that's achievable for your workload.
- The Bigtable SQL API is familiar to CQL users. materialized view : a SELECT statement that defines a set of rows that corresponds to rows in an underlying source table.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- March 03, 2025 Libraries Python 2.29.0 (2025-02-26) Features Add support for array and float32 SQL query params ( #1078 ) ( 89b8da8 ) Bug Fixes Grpc channel refresh ( #1087 ) ( f44b36b ) Java 2.53.0 (2025-02-21) Features Skip large rows ( #2482 ) ( cd7f82e ) February 24, 2025 Feature Bigtable Data Boost , a serverless compute service designed for high-throughput read jobs and queries, is generally available (GA) .
- Java Changes for google-cloud-bigtable 2.42.0 (2024-08-06) Features Support float32, float64, and array type query params ( #2297 ) ( a65640e ) Bug Fixes Adapt toString tests to introduction of java.time in gax ( 93f66a7 ) Dependencies Update shared dependencies ( 93f66a7 ) August 01, 2024 Feature Bigtable supports querying in SQL .
- April 07, 2025 Libraries Java 2.57.2 (2025-03-31) Bug Fixes Library should released as 2.57.2 ( #2549 ) ( 58d0bbd ) Go 1.36.0 (2025-03-31) Features bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 ) bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 ) bigtable/admin: Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 3f23a91 ) bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 ) bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 ) bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd ) bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 ) bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e ) bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 ) bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 ) bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b ) bigtable: Add support for logical views ( #11792 ) ( 630d751 ) bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 ) bigtable: Adding node scaling factor ( b680164 ) bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 ) bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac ) Bug Fixes bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa ) bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 ) bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 ) Java 2.57.3 (2025-04-01) Bug Fixes Remove debug messages ( #2552 ) ( 6359834 ) March 31, 2025 Libraries Java 2.57.0 (2025-03-24) Features Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 ) Java 2.57.1 (2025-03-24) Bug Fixes Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 ) March 26, 2025 Change The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
- December 22, 2025 Libraries Python 2.35.0 (2025-12-16) Features add basic interceptor to client (#1206) ( 6561cfac ) Add encodings for STRUCT and the Timestamp type ( 72dfdc44 ) add PeerInfo proto in Bigtable API ( 72dfdc44 ) Add Type API updates needed to support structured keys in materialized views ( 72dfdc44 ) support mTLS certificates when available (#1249) ( ca20219c ) Bug Fixes re-export AddToCell for consistency (#1241) ( 2a5baf11 ) async client uses fixed grace period (#1236) ( 544db1cd ) Deprecate credentials file argument ( 72dfdc44 ) Add ReadRows/SampleRowKeys bindings for materialized views ( 72dfdc44 ) retry cancelled errors (#1235) ( e3fd5d86 ) Java 2.71.0-rc1 (2025-12-19) Features update with latest from main ( #2740 ) ( 90e1a02 ) feat: Upgrade protobuf gen code to 4.33 ( #2741 ) ( 2b1d201 ) Dependencies update sdk-platform-java-config to 3.55.0-rc1 ( #2738 ) ( 136f164 ) Go 1.41.0 (2025-12-15) Features add PeerInfo proto in Bigtable API (PiperOrigin-RevId: 829585900) ( 185951b3 ) precompute featureflags in client and reuse (#13297) ( 3b3253ac ) Add experimental Bigtable connection pool with custom load balancing strategy. (#12882) ( 7aa96127 ) Enable ALTS hard bound token in Bigtable w/ direct access (#13153) ( 90239341 ) Enable routing cookie and attempt headers for enhanced retries (#12964) ( 96cfd47a ) Bug Fixes fix project id sent in otel (#13286) ( 4865868c ) screaming uppercase metric status (#13484) ( b35ee8fd ) Performance Improvements parallelize the exportTimeSeries function (#13004) ( bafd691d ) December 15, 2025 Libraries Java 2.70.1 (2025-12-12) Dependencies Update shared dependencies ( #2734 ) ( 2823705 ) December 12, 2025 Feature In the Google Cloud console, you can import data into Bigtable using the Dataflow job builder , a web interface for building and running Dataflow pipelines.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, the returned :class: long-running-operation <<xref uid="google.cloud.bigtable admin v2.overlay.types">google.cloud.bigtable admin v2.overlay.types</xref>.async restore table.AsyncRestoreTableOperation> provides a method, xref optimize restore table operation that provides access to a google.api core.operation async.AsyncOperation object representing the OptimizeRestoreTable long-running-operation after the current one has completed.
- The returned table :class: long-running operation <<xref uid="google.cloud.bigtable admin v2.overlay.types">google.cloud.bigtable admin v2.overlay.types</xref>.restore table.RestoreTableOperation> can be used to track the progress of the operation, and to cancel it.
- Returns Type Description google.cloud.bigtable admin v2.overlay.types .async restore table.AsyncRestoreTableOperation An object representing a long-running operation.
- The metadata][google.longrunning.Operation.metadata] field type is CreateBackupMetadata][google.bigtable.admin.v2.CreateBackupMetadata] .

