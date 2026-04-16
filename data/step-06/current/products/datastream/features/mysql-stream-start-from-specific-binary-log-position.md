---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.322Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "MySQL stream start from specific binary log position"
feature_slug: "mysql-stream-start-from-specific-binary-log-position"
latest_feature_date: "2023-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1"
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
Coverage: MEDIUM

## Step 02 Summary

Datastream can start a MySQL source stream from a specific binary log position using the API.

## Extended Definition

Datastream can start a MySQL source stream from a specific binary log position using the API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- The CDC method to use for the stream. cdc method can be only one of the following: binaryLogPosition object ( BinaryLogPosition ) Use Binary log position based replication. gtid object ( Gtid ) Use GTID based replication.
- SqlServerSourceConfig JSON representation { "includeObjects" : { object ( SqlServerRdbms ) } , "excludeObjects" : { object ( SqlServerRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "transactionLogs" : { object ( SqlServerTransactionLogs ) } , "changeTables" : { object ( SqlServerChangeTables ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( SqlServerRdbms ) The SQLServer objects to include in the stream. excludeObjects object ( SqlServerRdbms ) The SQLServer objects to exclude from the stream. maxConcurrentCdcTasks integer Max concurrent CDC tasks. maxConcurrentBackfillTasks integer Max concurrent backfill tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- The CDC method to use for the stream. cdc method can be only one of the following: binaryLogPosition object ( BinaryLogPosition ) Use Binary log position based replication. gtid object ( Gtid ) Use GTID based replication.
- SqlServerSourceConfig JSON representation { "includeObjects" : { object ( SqlServerRdbms ) } , "excludeObjects" : { object ( SqlServerRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "transactionLogs" : { object ( SqlServerTransactionLogs ) } , "changeTables" : { object ( SqlServerChangeTables ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( SqlServerRdbms ) The SQLServer objects to include in the stream. excludeObjects object ( SqlServerRdbms ) The SQLServer objects to exclude from the stream. maxConcurrentCdcTasks integer Max concurrent CDC tasks. maxConcurrentBackfillTasks integer Max concurrent backfill tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SpecificStartPosition JSON representation { // Union field position can be only one of the following: "mysqlLogPosition" : { object ( MysqlLogPosition ) } , "oracleScnPosition" : { object ( OracleScnPosition ) } , "sqlServerLsnPosition" : { object ( SqlServerLsnPosition ) } , "mysqlGtidPosition" : { object ( MysqlGtidPosition ) } , "mongodbChangeStreamPosition" : { object ( MongodbChangeStreamPosition ) } // End of list of possible types for union field position . } Fields Union field position . position can be only one of the following: mysqlLogPosition object ( MysqlLogPosition ) MySQL specific log position to start replicating from. oracleScnPosition object ( OracleScnPosition ) Oracle SCN to start replicating from. sqlServerLsnPosition object ( SqlServerLsnPosition ) SqlServer LSN to start replicating from. mysqlGtidPosition object ( MysqlGtidPosition ) MySQL GTID set to start replicating from. mongodbChangeStreamPosition object ( MongodbChangeStreamPosition ) MongoDB change stream position to start replicating from.
- Log sequence number (LSN) from where Logs will be read MysqlGtidPosition JSON representation { "gtidSet" : string } Fields gtidSet string Required.
- Resume replication from the next available position in the source. specificStartPosition object ( SpecificStartPosition ) Optional.
- The position to start reading from when starting, resuming, or recovering the stream.

### "Package com.google.cloud.datastream.v1 (1.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1)
- Source ID: `site-java-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specific Start Position CDC strategy to start replicating from a specific position in the source. com. google. cloud. datastream. v1.
- Builder CDC strategy to start replicating from a specific position in the source. com. google. cloud. datastream. v1.
- Next Available Start Position CDC strategy to resume replication from the next available position in the source. com. google. cloud. datastream. v1.
- Most Recent Start Position CDC strategy to start replicating from the most recent position in the source. com. google. cloud. datastream. v1.

