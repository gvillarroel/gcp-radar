---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.326Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "MCP Toolbox for Databases Bigtable connector"
feature_slug: "mcp-toolbox-for-databases-bigtable-connector"
latest_feature_date: "2025-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
keywords:
  - "databases"
  - "toolbox"
  - "mcp"
  - "connector"
  - "includes"
  - "bigtable"
  - "for"
  - "the"
---

# MCP Toolbox for Databases Bigtable connector

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The MCP Toolbox for Databases includes a connector for integrating Bigtable.

## Extended Definition

The MCP Toolbox for Databases includes a connector for integrating Bigtable.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates the physical data layout, compute processing nodes, and routing layer for Bigtable: Figure 5 : Architecture for data replication includes a frontend, Bigtable clusters, and Colossus.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.GetTable GetTableRequest JSON representation { "name" : string , "view" : enum ( View ) } Fields name string Required.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- For example, if key = "some id#2024-04-30#\x00\x13\x00\xf3" with the following schema: { fields { field name: "id" type { string { encoding: utf8 bytes {} } } } fields { field name: "date" type { string { encoding: utf8 bytes {} } } } fields { field name: "product code" type { int64 { encoding: big endian bytes {} } } } encoding { delimited bytes { delimiter: "#" } } } The decoded key parts would be: id = "some id", date = "2024-04-30", product code = 1245427 The query "SELECT key, product code FROM table" will return two columns: /------------------------------------------------------\ key product code -------------------------------------- -------------- "some id#2024-04-30#\x00\x13\x00\xf3" 1245427 ------------------------------------------------------/ The schema has the following invariants: (1) The decoded field values are order-preserved.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list tables", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesRequest JSON representation { "parent" : string , "view" : enum ( View ) , "pageSize" : integer , "pageToken" : string } Fields parent string Required.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- Home Documentation Databases Bigtable Reference Send feedback MCP Tools Reference: bigtableadmin.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- For example, if key = "some id#2024-04-30#\x00\x13\x00\xf3" with the following schema: { fields { field name: "id" type { string { encoding: utf8 bytes {} } } } fields { field name: "date" type { string { encoding: utf8 bytes {} } } } fields { field name: "product code" type { int64 { encoding: big endian bytes {} } } } encoding { delimited bytes { delimiter: "#" } } } The decoded key parts would be: id = "some id", date = "2024-04-30", product code = 1245427 The query "SELECT key, product code FROM table" will return two columns: /------------------------------------------------------\ key product code -------------------------------------- -------------- "some id#2024-04-30#\x00\x13\x00\xf3" 1245427 ------------------------------------------------------/ The schema has the following invariants: (1) The decoded field values are order-preserved.

