---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.320Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle stream start from specific position"
feature_slug: "oracle-stream-start-from-specific-position"
latest_feature_date: "2024-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
keywords:
  - "oracle"
  - "stream"
  - "start"
  - "from"
  - "specific"
  - "position"
  - "datastream"
  - "can"
---

# Oracle stream start from specific position

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream can start an Oracle source stream from a specific position.

## Extended Definition

Datastream can start an Oracle source stream from a specific position.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 async def sample start backfill job(): Create a client client = datastream v1 .
- Returns Type Description google.cloud.datastream v1.types.StartBackfillJobResponse Response for manually initiating a backfill job for a specific stream object. stop backfill job stop backfill job ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 def sample start backfill job(): Create a client client = datastream v1 .
- Returns Type Description google.cloud.datastream v1.types.StartBackfillJobResponse Response for manually initiating a backfill job for a specific stream object. stop backfill job stop backfill job ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- Source ID: `site-api-reference`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SpecificStartPosition JSON representation { // Union field position can be only one of the following: "mysqlLogPosition" : { object ( MysqlLogPosition ) } , "oracleScnPosition" : { object ( OracleScnPosition ) } , "sqlServerLsnPosition" : { object ( SqlServerLsnPosition ) } , "mysqlGtidPosition" : { object ( MysqlGtidPosition ) } , "mongodbChangeStreamPosition" : { object ( MongodbChangeStreamPosition ) } // End of list of possible types for union field position . } Fields Union field position . position can be only one of the following: mysqlLogPosition object ( MysqlLogPosition ) MySQL specific log position to start replicating from. oracleScnPosition object ( OracleScnPosition ) Oracle SCN to start replicating from. sqlServerLsnPosition object ( SqlServerLsnPosition ) SqlServer LSN to start replicating from. mysqlGtidPosition object ( MysqlGtidPosition ) MySQL GTID set to start replicating from. mongodbChangeStreamPosition object ( MongodbChangeStreamPosition ) MongoDB change stream position to start replicating from.
- CdcStrategy JSON representation { // Union field start position can be only one of the following: "mostRecentStartPosition" : { object ( MostRecentStartPosition ) } , "nextAvailableStartPosition" : { object ( NextAvailableStartPosition ) } , "specificStartPosition" : { object ( SpecificStartPosition ) } // End of list of possible types for union field start position . } Fields Union field start position .
- Resume replication from the next available position in the source. specificStartPosition object ( SpecificStartPosition ) Optional.
- The position to start reading from when starting, resuming, or recovering the stream.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- Stream configuration that is specific to the data source type. source stream config can be only one of the following: oracleSourceConfig object ( OracleSourceConfig ) Oracle data source configuration. mysqlSourceConfig object ( MysqlSourceConfig ) MySQL data source configuration. postgresqlSourceConfig object ( PostgresqlSourceConfig ) PostgreSQL data source configuration. sqlServerSourceConfig object ( SqlServerSourceConfig ) SQLServer data source configuration. salesforceSourceConfig object ( SalesforceSourceConfig ) Salesforce data source configuration. mongodbSourceConfig object ( MongodbSourceConfig ) MongoDB data source configuration. spannerSourceConfig object ( SpannerSourceConfig ) Spanner data source configuration.
- MysqlSourceConfig JSON representation { "includeObjects" : { object ( MysqlRdbms ) } , "excludeObjects" : { object ( MysqlRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field cdc method can be only one of the following: "binaryLogPosition" : { object ( BinaryLogPosition ) } , "gtid" : { object ( Gtid ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( MysqlRdbms ) The MySQL objects to retrieve from the source. excludeObjects object ( MysqlRdbms ) The MySQL objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string SourceConfig JSON representation { "sourceConnectionProfile" : string , // Union field source stream config can be only one of the following: "oracleSourceConfig" : { object ( OracleSourceConfig ) } , "mysqlSourceConfig" : { object ( MysqlSourceConfig ) } , "postgresqlSourceConfig" : { object ( PostgresqlSourceConfig ) } , "sqlServerSourceConfig" : { object ( SqlServerSourceConfig ) } , "salesforceSourceConfig" : { object ( SalesforceSourceConfig ) } , "mongodbSourceConfig" : { object ( MongodbSourceConfig ) } , "spannerSourceConfig" : { object ( SpannerSourceConfig ) } // End of list of possible types for union field source stream config . } Fields sourceConnectionProfile string Required.

