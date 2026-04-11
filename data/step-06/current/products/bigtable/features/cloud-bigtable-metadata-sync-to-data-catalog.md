---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.358Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable metadata sync to Data Catalog"
feature_slug: "cloud-bigtable-metadata-sync-to-data-catalog"
latest_feature_date: "2023-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
keywords:
  - "synchronizes"
  - "sync"
  - "catalog"
  - "automatically"
  - "metadata"
  - "instance"
  - "bigtable"
  - "to"
---

# Cloud Bigtable metadata sync to Data Catalog

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Automatically synchronizes Cloud Bigtable instance and table metadata to Dataplex Data Catalog.

## Extended Definition

Automatically synchronizes Cloud Bigtable instance and table metadata to Dataplex Data Catalog.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsAsyncPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListTablesAsyncPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables][google.bigtable.admin.v2.BigtableTableAdmin.ListTables] Iterating over this object will yield results and resolve additional pages automatically. modify column families modify column families ( request : typing .

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Node.js Changes for @google-cloud/bigtable 4.5.0 (2023-03-20) Features Add npm run compile to the testproxy command ( #1258 ) ( 52c06a2 ) Bug Fixes Always set the retry attempt to 0 for now ( #1251 ) ( 5ee6f19 ) Java Changes for google-cloud-bigtable 2.20.2 (2023-03-29) Bug Fixes Higher application blocking latency precision ( #1676 ) ( 45ce93b ) Make ChangeStreamRecord interface serializable ( #1685 ) ( b97badb ) Mark readRow requests as unary operations ( #1679 ) ( f88bb67 ) March 31, 2023 Feature Cloud Bigtable instance and table metadata is now automatically synced to Data Catalog, a feature of Dataplex, for improved data discovery and governance.
- Java Changes for google-cloud-bigtable 2.27.4 (2023-09-29) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.21.0 ( #1942 ) ( f8d533f ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.1 ( #1933 ) ( 159636a ) October 06, 2023 Feature Cloud Bigtable instance, cluster, and table metadata is automatically synced to Data Catalog , a feature of Dataplex, for improved data discovery and governance.
- September 29, 2025 Libraries Go 1.40.1 (2025-09-26) Features bigtable: Add an e2e flow for direct access with instructions ( #12939 ) ( fdcdde8 ) Bug Fixes bigtable: Release bigtable as 1.40.1 ( #12961 ) ( 33e1474 ) bigtable: Use stable stats.NewMetricSet ( #12941 ) ( 2c713d7 ) 1.40.0 (2025-09-22) Features bigtable: Expose otel native grpc metrics in Bigtable ( #12827 ) ( e9d2efd ) Java 2.67.0 (2025-09-24) Features Idle channel eviction ( #2651 ) ( 70c05c9 ) Load balancing options for BigtableChannelPool ( #2667 ) ( 5adaa84 ) Bug Fixes Add missing break; to PROTO and ENUM value type check ( #2672 ) ( 337e432 ) Remove beta api annotation for query paginator ( #2660 ) ( f68a1fa ) Dependencies Update shared dependencies ( #2679 ) ( a5b8260 ) September 15, 2025 Libraries Java 2.66.0 (2025-09-10) Features Add support for Proto and Enum types ( #2662 ) ( da3065d ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2668 ) ( 06ac93e ) September 01, 2025 Libraries Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) Go 1.39.0 (2025-08-28) Features bigtable/admin: Add tags field to Instance proto (stable branch) ( a846564 ) bigtable/spanner: Allow disable gRPC DirectPath deps ( #12469 ) ( 2205d27 ) bigtable: Add client epoch for each call ( #12685 ) ( c9eac01 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowRequest API ( 98ba6f0 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowsRequest API ( ac4970b ) bigtable: Adding support to schema bundles ( #12516 ) ( 688eb13 ) bigtable: Create first response latencies instrument ( #12706 ) ( 6f34867 ) bigtable: Expose directaccess via a env variable ( #12684 ) ( 0306910 ) bigtable: Expose pinger in go client ( #12683 ) ( a330457 ) bigtable: First response latencies and connectivity error count metrics ( #10616 ) ( 3054593 ) bigtable: Publish Proto and Enum types to CBT data API ( 83f894e ) bigtable: Record client blocking latencies ( #12698 ) ( 5f03fb3 ) bigtable: Support universe domain ( #12567 ) ( fc59e39 ) bigtable: Update ListSchemaBundles to returns only names ( #12563 ) ( 83ea7c4 ) Bug Fixes bigtable: Add ReadRows/SampleRowKeys bindings for materialized views ( 7616e81 ) bigtable: Fix NoopMetricsProvider panic ( #12709 ) ( 8c6da0d ) bigtable: Ignore errors while creating monitoring client and disable metrics ( #12708 ) ( 2346cf1 ) bigtable: Update routing parameters.path template ( c574e28 ) Performance Improvements bigtable: Create attributes only when enabled ( #12647 ) ( aa31abc ) Documentation bigtable: Minor comment update for field idempotency in message .google.bigtable.v2.MutateRowRequest ( ac4970b ) bigtable: Sync generated comments from the API Protos ( ac4970b ) Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) August 28, 2025 Announcement Bigtable tools are available in Agent Development Kit (ADK) .
- Python Changes for google-cloud-bigtable 2.26.0 (2024-08-12) Features Add fields and the BackupType proto for Hot Backups ( #1010 ) ( b95801f ) Add MergeToCell to Mutation APIs ( f029a24 ) Add min, max, hll aggregators and more types ( f029a24 ) Async execute query client ( #1011 ) ( 45bc8c4 ) Bug Fixes Use single routing metadata header ( #1005 ) ( 20eeb0a ) Documentation Add clarification around SQL timestamps ( #1012 ) ( 6e80190 ) Corrected various type documentation ( f029a24 ) August 13, 2024 Announcement You can now enable client-side metrics with the Bigtable client library for Go.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Values are of the form projects/{project}/instances/{instance}/tables/{table}/schemaBundles/{schema bundle} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListTablesPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables][google.bigtable.admin.v2.BigtableTableAdmin.ListTables] Iterating over this object will yield results and resolve additional pages automatically. modify column families modify column families ( request : typing .

