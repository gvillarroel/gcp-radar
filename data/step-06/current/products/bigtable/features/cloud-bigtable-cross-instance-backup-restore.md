---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.380Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable cross-instance backup restore"
feature_slug: "cloud-bigtable-cross-instance-backup-restore"
latest_feature_date: "2021-05-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_table"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "different"
  - "restore"
  - "cross"
  - "backup"
  - "instance"
  - "from"
  - "bigtable"
  - "to"
---

# Cloud Bigtable cross-instance backup restore

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Restore from a Cloud Bigtable backup to a different instance is now generally available.

## Extended Definition

Restore from a Cloud Bigtable backup to a different instance is now generally available.

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
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore. changeStreamConfig object ( ChangeStreamConfig ) If specified, enable the change stream on this table.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- RestoreInfo JSON representation { "sourceType" : enum ( RestoreSourceType ) , // Union field source info can be only one of the following: "backupInfo" : { object ( BackupInfo ) } // End of list of possible types for union field source info . } Fields sourceType enum ( RestoreSourceType ) The type of the restore source.
- Information about the source used to restore the table. source info can be only one of the following: backupInfo object ( BackupInfo ) Information about the backup used to restore the table.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore. changeStreamConfig object ( ChangeStreamConfig ) If specified, enable the change stream on this table.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Output Schema Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables ListTablesResponse JSON representation { "tables" : [ { object ( Table ) } ] , "nextPageToken" : string } Fields tables[] object ( Table ) The tables present in the requested instance. nextPageToken string Set if not all tables could be returned in a single response.
- RestoreInfo JSON representation { "sourceType" : enum ( RestoreSourceType ) , // Union field source info can be only one of the following: "backupInfo" : { object ( BackupInfo ) } // End of list of possible types for union field source info . } Fields sourceType enum ( RestoreSourceType ) The type of the restore source.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore. changeStreamConfig object ( ChangeStreamConfig ) If specified, enable the change stream on this table.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Curl Request curl --location 'https://bigtableadmin.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create table", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for Bigtable.CreateTable CreateTableRequest JSON representation { "projectId" : string , "instanceId" : string , "tableId" : string , "columnFamilies" : [ string ] } Fields projectId string Required.
- RestoreInfo JSON representation { "sourceType" : enum ( RestoreSourceType ) , // Union field source info can be only one of the following: "backupInfo" : { object ( BackupInfo ) } // End of list of possible types for union field source info . } Fields sourceType enum ( RestoreSourceType ) The type of the restore source.

