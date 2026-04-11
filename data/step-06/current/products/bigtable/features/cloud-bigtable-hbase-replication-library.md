---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.367Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable HBase replication library"
feature_slug: "cloud-bigtable-hbase-replication-library"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/change-streams-overview"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "replication"
  - "hbase"
  - "introduces"
  - "enabling"
  - "library"
  - "bigtable"
  - "of"
  - "the"
---

# Cloud Bigtable HBase replication library

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Introduces the Cloud Bigtable HBase replication library, enabling replication of data from HBase to Cloud Bigtable for migration without pausing writes or taking applications offline.

## Extended Definition

Introduces the Cloud Bigtable HBase replication library, enabling replication of data from HBase to Cloud Bigtable for migration without pausing writes or taking applications offline.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/change-streams-overview](https://docs.cloud.google.com/bigtable/docs/change-streams-overview)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- You can use the replication library in conjunction with existing migration tools to migrate your HBase data to Bigtable without pausing writes or taking your application offline.
- April 05, 2022 Feature The Cloud Bigtable HBase replication library lets you replicate data from HBase to Bigtable.
- April 07, 2025 Libraries Java 2.57.2 (2025-03-31) Bug Fixes Library should released as 2.57.2 ( #2549 ) ( 58d0bbd ) Go 1.36.0 (2025-03-31) Features bigtable/admin: Add MaterializedViews and LogicalViews APIs ( b323f88 ) bigtable/admin: Add MaterializedViews and LogicalViews APIs ( dd0d1d7 ) bigtable/admin: Publish row key schema fields in table proto and relevant admin APIs to setup a table with a row key schema ( 3f23a91 ) bigtable: Add Bind function to bind query params ( #11862 ) ( 24c5ae0 ) bigtable: Add datatypes for GoogleSQL ( #11816 ) ( 5a9eb10 ) bigtable: Add Execute method to execute GoogleSQL queries ( #11883 ) ( 0e53dcd ) bigtable: Add MaterializedViewName to ReadRows and SampleRowKeys ( b323f88 ) bigtable: Add methods to read ResultRow ( #11924 ) ( 8b8ca9e ) bigtable: Add PrepareQuery api and update ExecuteQuery to support it ( dd0d1d7 ) bigtable: Add PrepareStatement to run GoogleSQL queries ( #11829 ) ( ea00b17 ) bigtable: Add support for data APIs for Materialized Views ( #11796 ) ( f5ae93b ) bigtable: Add support for logical views ( #11792 ) ( 630d751 ) bigtable: Add support for materialized views for admin client ( #11793 ) ( 640be05 ) bigtable: Adding node scaling factor ( b680164 ) bigtable: Disable MV and LV tests ( #11827 ) ( 42dca03 ) bigtable: Row key schema support in admin client ( #11777 ) ( 4158bac ) Bug Fixes bigtable: Allow GC updates on emulated aggregate column family ( #11499 ) ( 0682bfa ) bigtable: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigtable/admin: Fixed formatting of resource path strings ( dd0d1d7 ) bigtable: Update ExecuteQuery API docs to reflect changes ( dd0d1d7 ) Java 2.57.3 (2025-04-01) Bug Fixes Remove debug messages ( #2552 ) ( 6359834 ) March 31, 2025 Libraries Java 2.57.0 (2025-03-24) Features Add PreparedStatement and update ExecuteQuery API to use it ( #2534 ) ( 49d4d09 ) Java 2.57.1 (2025-03-24) Bug Fixes Handling of totalTimeout on sql plan refresh ( #2541 ) ( bf49cf9 ) March 26, 2025 Change The Monitoring page in the Google Cloud console for Bigtable has been renamed to System insights.
- Node.js Changes for @google-cloud/bigtable 4.4.0 (2023-03-01) Features Add new partitions field for CloseStream for Cloud Bigtable ChangeStream ( #1247 ) ( ecbdb52 ) Java Changes for google-cloud-bigtable 2.20.0 (2023-03-02) Features Add getNewPartitions method to CloseStream for Bigtable ChangeStream ( #1655 ) ( 8847fed ) Add new partitions field for CloseStream for Cloud Bigtable ChangeStream ( #1654 ) ( 0e283bf ) Bug Fixes Fix StackOverflow in ChangeStreamStateMachine due to excessive mods ( #1648 ) ( 9e11106 ) Use org.threeten.bp.Duration for ReadChangeStreamQuery::heartbeatDura… ( #1652 ) ( 87261a9 ) Dependencies Update dependency com.google.cloud:google-cloud-monitoring-bom to v3.13.0 ( #1656 ) ( 1c632ec ) Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.4.0 ( #1657 ) ( c7a3e29 ) Python Changes for google-cloud-bigtable 2.17.0 (2023-03-01) Features Add new partitions field for CloseStream for Cloud Bigtable ChangeStream ( #740 ) ( 1adcad4 ) 2.16.0 (2023-02-27) Features Enable "rest" transport in Python for services supporting numeric enums ( c5116e0 ) Publish the Cloud Bigtable Change Streams ( c5116e0 ) Bug Fixes Add context manager return types ( beb5bf3 ) deps: Require google-api-core>=1.34.0,>=2.11.0 ( c5116e0 ) Documentation Add documentation for enums ( beb5bf3 ) February 27, 2023 Libraries A weekly digest of client library updates from across the Cloud SDK .

### Change streams overview \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/change-streams-overview](https://docs.cloud.google.com/bigtable/docs/change-streams-overview)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Dataflow templates You can use one of the following Dataflow templates provided by Google: Bigtable change streams to BigQuery Bigtable change streams to Pub/Sub Bigtable Beam connector You can use the Bigtable Beam connector to build a pipeline: Bigtable Beam connector If you don't want to build your own pipeline, you can use the code samples from the Bigtable tutorial or quickstart as a starting point for your code: Create a change stream-enabled table and capture changes Process a Bigtable change stream Java client library Cloud Bigtable client for Java Partitions To maintain a high read throughput that matches a high write or change rate, Bigtable divides a change stream into multiple partitions that can be used to read the change stream in parallel.
- Row key - the identifier for the changed row Change type - either user-initiated or garbage collection ID of the cluster that received the change Commit timestamp - server-side time when the change was committed to the table Tie breaker - a value that lets the application that is reading the stream use Bigtable's built-in conflict resolution policy Token - used by the consuming application to resume the stream if it's interrupted Estimated low watermark - the estimated time since the record's partition caught up with replication across all clusters.
- Many factors can cause one or more partition-level watermarks to stall for some amount of time, including the following: Overloading a cluster with traffic that causes replication to fall behind for one or more partitions Network delays Cluster unavailability The Bigtable Beam connector handles this by setting the output timestamp to zero for all data.
- We recommend that you use one of the following options instead of calling the API without using a client library or connector: Dataflow templates Bigtable Beam connector Java client library All the options let you avoid the need to track and handle partition changes due to splits and merges.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- In addition to gRPC and client libraries for various programming languages, Bigtable maintains compatibility with the open source Apache HBase Java client library , an alternative open source database engine implementation of the Bigtable paper.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Tablets are not stored on nodes in Bigtable, but are stored in a series of SSTables on Colossus. replication factor : the number of replicas of a vnode that are maintained across all nodes in the data center.
- The replication factor is configured independently for each data center. replication : the process of replicating the data stored in Bigtable to all clusters in the instance.

