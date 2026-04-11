---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.748Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "MySQL stream start from specific binary log position"
feature_slug: "mysql-stream-start-from-specific-binary-log-position"
latest_feature_date: "2023-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream"
keywords:
  - "mysql"
  - "stream"
  - "start"
  - "from"
  - "specific"
  - "binary"
  - "log"
  - "position"
---

# MySQL stream start from specific binary log position

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream can start a MySQL source stream from a specific binary log position using the API.

## Extended Definition

Datastream can start a MySQL source stream from a specific binary log position using the API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- The CDC method to use for the stream. cdc method can be only one of the following: binaryLogPosition object ( BinaryLogPosition ) Use Binary log position based replication. gtid object ( Gtid ) Use GTID based replication.
- SqlServerSourceConfig JSON representation { "includeObjects" : { object ( SqlServerRdbms ) } , "excludeObjects" : { object ( SqlServerRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "transactionLogs" : { object ( SqlServerTransactionLogs ) } , "changeTables" : { object ( SqlServerChangeTables ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( SqlServerRdbms ) The SQLServer objects to include in the stream. excludeObjects object ( SqlServerRdbms ) The SQLServer objects to exclude from the stream. maxConcurrentCdcTasks integer Max concurrent CDC tasks. maxConcurrentBackfillTasks integer Max concurrent backfill tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- The CDC method to use for the stream. cdc method can be only one of the following: binaryLogPosition object ( BinaryLogPosition ) Use Binary log position based replication. gtid object ( Gtid ) Use GTID based replication.
- SqlServerSourceConfig JSON representation { "includeObjects" : { object ( SqlServerRdbms ) } , "excludeObjects" : { object ( SqlServerRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "transactionLogs" : { object ( SqlServerTransactionLogs ) } , "changeTables" : { object ( SqlServerChangeTables ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( SqlServerRdbms ) The SQLServer objects to include in the stream. excludeObjects object ( SqlServerRdbms ) The SQLServer objects to exclude from the stream. maxConcurrentCdcTasks integer Max concurrent CDC tasks. maxConcurrentBackfillTasks integer Max concurrent backfill tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SpecificStartPosition JSON representation { // Union field position can be only one of the following: "mysqlLogPosition" : { object ( MysqlLogPosition ) } , "oracleScnPosition" : { object ( OracleScnPosition ) } , "sqlServerLsnPosition" : { object ( SqlServerLsnPosition ) } , "mysqlGtidPosition" : { object ( MysqlGtidPosition ) } , "mongodbChangeStreamPosition" : { object ( MongodbChangeStreamPosition ) } // End of list of possible types for union field position . } Fields Union field position . position can be only one of the following: mysqlLogPosition object ( MysqlLogPosition ) MySQL specific log position to start replicating from. oracleScnPosition object ( OracleScnPosition ) Oracle SCN to start replicating from. sqlServerLsnPosition object ( SqlServerLsnPosition ) SqlServer LSN to start replicating from. mysqlGtidPosition object ( MysqlGtidPosition ) MySQL GTID set to start replicating from. mongodbChangeStreamPosition object ( MongodbChangeStreamPosition ) MongoDB change stream position to start replicating from.
- Log sequence number (LSN) from where Logs will be read MysqlGtidPosition JSON representation { "gtidSet" : string } Fields gtidSet string Required.
- Resume replication from the next available position in the source. specificStartPosition object ( SpecificStartPosition ) Optional.
- The position to start reading from when starting, resuming, or recovering the stream.

