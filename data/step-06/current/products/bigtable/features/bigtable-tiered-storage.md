---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.323Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable tiered storage"
feature_slug: "bigtable-tiered-storage"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "optimized"
  - "reduce"
  - "tiered"
  - "allows"
  - "storage"
  - "usage"
  - "bigtable"
  - "to"
---

# Bigtable tiered storage

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Bigtable tiered storage allows optimized storage usage to reduce costs and retain data longer.

## Extended Definition

Bigtable tiered storage allows optimized storage usage to reduce costs and retain data longer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above. tieredStorageConfig object ( TieredStorageConfig ) Rules to specify what data is stored in each storage tier.
- TieredStorageConfig JSON representation { "infrequentAccess" : { object ( TieredStorageRule ) } } Fields infrequentAccess object ( TieredStorageRule ) Rule to specify what data is stored in the infrequent access(IA) tier.
- TieredStorageRule JSON representation { // Union field rule can be only one of the following: "includeIfOlderThan" : string // End of list of possible types for union field rule . } Fields Union field rule .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above. tieredStorageConfig object ( TieredStorageConfig ) Rules to specify what data is stored in each storage tier.
- TieredStorageConfig JSON representation { "infrequentAccess" : { object ( TieredStorageRule ) } } Fields infrequentAccess object ( TieredStorageRule ) Rule to specify what data is stored in the infrequent access(IA) tier.
- TieredStorageRule JSON representation { // Union field rule can be only one of the following: "includeIfOlderThan" : string // End of list of possible types for union field rule . } Fields Union field rule .

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above. tieredStorageConfig object ( TieredStorageConfig ) Rules to specify what data is stored in each storage tier.
- TieredStorageConfig JSON representation { "infrequentAccess" : { object ( TieredStorageRule ) } } Fields infrequentAccess object ( TieredStorageRule ) Rule to specify what data is stored in the infrequent access(IA) tier.
- TieredStorageRule JSON representation { // Union field rule can be only one of the following: "includeIfOlderThan" : string // End of list of possible types for union field rule . } Fields Union field rule .

