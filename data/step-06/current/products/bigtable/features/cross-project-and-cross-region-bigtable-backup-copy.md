---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.354Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cross-project and cross-region Bigtable backup copy"
feature_slug: "cross-project-and-cross-region-bigtable-backup-copy"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "copy"
  - "project"
  - "cross"
  - "backup"
  - "bigtable"
  - "region"
  - "and"
  - "now"
---

# Cross-project and cross-region Bigtable backup copy

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Cloud Bigtable now supports creating a backup copy in any project or region where a Bigtable instance exists.

## Extended Definition

Cloud Bigtable now supports creating a backup copy in any project or region where a Bigtable instance exists.

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
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Geographic replication and consistency Bigtable and Cassandra handle geographic (also known as multi- region ) replication and consistency differently.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- When you assess storage capacity needs, remember that Bigtable only counts one copy of the data; by comparison, Cassandra needs to account for three copies of the data under most configurations.
- Each Bigtable cluster in the instance must store all data within the instance and must be able to handle the total insert rate across the entire cluster.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Java Changes for google-cloud-bigtable 2.27.0 (2023-08-17) Features Copy backup API support ( #1398 ) ( 558a408 ) Publish CopyBackup protos to external customers ( #1883 ) ( d6e934f ) August 17, 2023 Feature You can now create a copy of a Cloud Bigtable backup and store it in any project or region where you have a Bigtable instance.
- Java Changes for google-cloud-bigtable 2.17.0 (2022-12-07) Features Add a query paginator ( #1530 ) ( 5c8e1f6 ) Add test proxy to java-bigtable client ( #1498 ) ( 132b4e4 ) Implement cross-project table restore ( #1536 ) ( 335977c ) Next release from main branch is 2.17.0 ( #1514 ) ( 4fc6a93 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom … ( #1531 ) ( ee98338 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.0 ( #1539 ) ( 3244cef ) Update dependency kr.motd.maven:os-maven-plugin to v1.7.1 ( #1518 ) ( 8309681 ) Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.19 ( #1537 ) ( 7f7c478 ) Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.19 ( #1538 ) ( 9d3df57 ) Python Changes for google-cloud-bigtable 2.14.1 (2022-12-06) Bug Fixes Deps: Require google-api-core >=1.34.0, >=2.11.0 ( e5875cb ) Drop usage of pkg resources ( e5875cb ) Fix timeout default values ( e5875cb ) Documentation Samples: Snippetgen should call await on the operation coroutine before calling result ( e5875cb ) December 08, 2022 Feature Cloud Bigtable now lets you restore from a backup to a different project.
- Node.js Changes for @google-cloud/bigtable 5.1.0 (2024-05-28) Features Add feature for copying backups ( #1153 ) ( 91f85b5 ) Add String type with Utf8Raw encoding to Bigtable API ( #1419 ) ( 724b711 ) Publish Automated Backups protos ( #1391 ) ( 17838ed ) Trusted Private Cloud support, use the universeDomain parameter ( #1386 ) ( c0c287e ) Bug Fixes deps: Update dependency @google-cloud/precise-date to v4 ( #1318 ) ( 9dcef90 ) Extend timeouts for deleting snapshots, backups and tables ( #1387 ) ( 1a6f59a ) Fix flaky test by extending timeout ( #1350 ) ( 906ac79 ) Improve retry logic for streaming API calls ( #1372 ) ( e8083a4 ) Remove the watermarks ( #1313 ) ( 0126a0e ) June 03, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- Java Changes for google-cloud-bigtable 2.25.0 (2023-07-14) Features Change stream retention to create and update table ( #1823 ) ( 05fca58 ) Bug Fixes Fix batch mutation limit ( #1808 ) ( ed24d4f ) Update default sample row key attempt timeout to 5 min ( #1827 ) ( 2f363ef ) Documentation Fix formatting for reversed order field example ( #1836 ) ( 10a0426 ) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( #1826 ) ( 159fe38 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.22.0 ( #1838 ) ( fba2c49 ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1833 ) ( cb160af ) Python Changes for google-cloud-bigtable 2.20.0 (2023-07-17) Features rel="noreferrer noopener"}) Increase the maximum retention period for a Cloud Bigtable backup from 30 days to 90 days ( d5720f8 ) Bug Fixes Add async context manager return types ( #828 ) ( 475a160 ) Documentation Fix formatting for reversed order field example ( #831 ) ( fddd0ba ) July 18, 2023 Feature Cloud Bigtable change streams are now generally available (GA) .

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- AsyncOperation Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- Returns Type Description google.cloud.bigtable admin v2.types.CheckConsistencyResponse Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency][google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency] cluster path cluster path ( project : str , instance : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. copy backup copy backup ( request : typing .
- CopyBackupRequest ( parent="parent value", backup id="backup id value", source backup="source backup value", ) Make the request operation = client. copy backup (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.CopyBackupRequest , dict]] The request object.

