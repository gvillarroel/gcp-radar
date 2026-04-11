---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.323Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cassandra-Bigtable proxy adapter"
feature_slug: "cassandra-bigtable-proxy-adapter"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
keywords:
  - "cassandra"
  - "adapter"
  - "proxy"
  - "available"
  - "bigtable"
  - "for"
  - "the"
  - "is"
---

# Cassandra-Bigtable proxy adapter

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Cassandra-Bigtable proxy adapter is available for connecting Apache Cassandra-based applications to Bigtable; The Cassandra-Bigtable proxy adapter is available in Preview for connecting Apache Cassandra-based applications to Bigtable.

## Extended Definition

The Cassandra-Bigtable proxy adapter is available for connecting Apache Cassandra-based applications to Bigtable; The Cassandra-Bigtable proxy adapter is available in Preview for connecting Apache Cassandra-based applications to Bigtable.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data modeling: flexibility with collections The Cassandra to Bigtable proxy adapter turns Cassandra collection types, such as maps, sets, and lists, into column families in Bigtable.
- The Cassandra to Bigtable proxy adapter is a standalone layer that you can run parallel to your application and connect to Bigtable as another Cassandra node.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 13, 2025 Libraries Python 2.33.0 (2025-10-06) Features Add support for Proto and Enum types ( #1202 ) ( 34ceb86 ) Expose universe domain for tpc ( #1150 ) ( 451fd97 ) Bug Fixes Fix instance registration cleanup on early iterator termination ( #1216 ) ( bbfd746 ) Refactor channel refresh ( #1174 ) ( 6fa3008 ) Java 2.67.1 (2025-10-08) Dependencies Update shared dependencies ( #2686 ) ( d7eaa02 ) October 07, 2025 Feature The Cassandra-Bigtable proxy adapter , which lets you connect your Apache Cassandra-based applications to Bigtable, is generally available ( GA ).
- Feature The Cassandra-Bigtable proxy adapter , which lets you connect your Apache Cassandra-based applications to Bigtable, is available in Preview .
- August 18, 2025 Libraries Java 2.65.0 (2025-08-12) Features bigtable: Lower the value for max rpc channels as channel resize is slow (1m, 2 channel) ( #2656 ) ( d8055c1 ) August 11, 2025 Libraries Python 2.32.0 (2025-08-01) Features Add Idempotency to Cloud Bigtable MutateRowsRequest API ( #1143 ) ( c3e3eb0 ) Add support for AddToCell in Data Client ( #1147 ) ( 1a5b4b5 ) Implement SQL support in test proxy ( #1106 ) ( 7a91bbf ) Modernized Bigtable Admin Client featuring selective GAPIC generation ( #1177 ) ( 58e7d37 ) Java 2.64.0 (2025-08-08) Features Add tags field to Instance proto (stable branch) ( 089d527 ) Dependencies Update shared dependencies ( #2654 ) ( 4b706f4 ) Update the Java code generator (gapic-generator-java) to 2.61.0 ( 089d527 ) August 04, 2025 Announcement You can add the Cassandra to Bigtable client for Java library to your Java project from the Maven Central repository.
- September 29, 2025 Libraries Go 1.40.1 (2025-09-26) Features bigtable: Add an e2e flow for direct access with instructions ( #12939 ) ( fdcdde8 ) Bug Fixes bigtable: Release bigtable as 1.40.1 ( #12961 ) ( 33e1474 ) bigtable: Use stable stats.NewMetricSet ( #12941 ) ( 2c713d7 ) 1.40.0 (2025-09-22) Features bigtable: Expose otel native grpc metrics in Bigtable ( #12827 ) ( e9d2efd ) Java 2.67.0 (2025-09-24) Features Idle channel eviction ( #2651 ) ( 70c05c9 ) Load balancing options for BigtableChannelPool ( #2667 ) ( 5adaa84 ) Bug Fixes Add missing break; to PROTO and ENUM value type check ( #2672 ) ( 337e432 ) Remove beta api annotation for query paginator ( #2660 ) ( f68a1fa ) Dependencies Update shared dependencies ( #2679 ) ( a5b8260 ) September 15, 2025 Libraries Java 2.66.0 (2025-09-10) Features Add support for Proto and Enum types ( #2662 ) ( da3065d ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2668 ) ( 06ac93e ) September 01, 2025 Libraries Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) Go 1.39.0 (2025-08-28) Features bigtable/admin: Add tags field to Instance proto (stable branch) ( a846564 ) bigtable/spanner: Allow disable gRPC DirectPath deps ( #12469 ) ( 2205d27 ) bigtable: Add client epoch for each call ( #12685 ) ( c9eac01 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowRequest API ( 98ba6f0 ) bigtable: Add Idempotency to Cloud Bigtable MutateRowsRequest API ( ac4970b ) bigtable: Adding support to schema bundles ( #12516 ) ( 688eb13 ) bigtable: Create first response latencies instrument ( #12706 ) ( 6f34867 ) bigtable: Expose directaccess via a env variable ( #12684 ) ( 0306910 ) bigtable: Expose pinger in go client ( #12683 ) ( a330457 ) bigtable: First response latencies and connectivity error count metrics ( #10616 ) ( 3054593 ) bigtable: Publish Proto and Enum types to CBT data API ( 83f894e ) bigtable: Record client blocking latencies ( #12698 ) ( 5f03fb3 ) bigtable: Support universe domain ( #12567 ) ( fc59e39 ) bigtable: Update ListSchemaBundles to returns only names ( #12563 ) ( 83ea7c4 ) Bug Fixes bigtable: Add ReadRows/SampleRowKeys bindings for materialized views ( 7616e81 ) bigtable: Fix NoopMetricsProvider panic ( #12709 ) ( 8c6da0d ) bigtable: Ignore errors while creating monitoring client and disable metrics ( #12708 ) ( 2346cf1 ) bigtable: Update routing parameters.path template ( c574e28 ) Performance Improvements bigtable: Create attributes only when enabled ( #12647 ) ( aa31abc ) Documentation bigtable: Minor comment update for field idempotency in message .google.bigtable.v2.MutateRowRequest ( ac4970b ) bigtable: Sync generated comments from the API Protos ( ac4970b ) Java 2.65.1 (2025-08-27) Dependencies Update shared dependencies ( #2664 ) ( 841318b ) August 28, 2025 Announcement Bigtable tools are available in Agent Development Kit (ADK) .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list tables", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesRequest JSON representation { "parent" : string , "view" : enum ( View ) , "pageSize" : integer , "pageToken" : string } Fields parent string Required.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com.
- If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN replication status .

