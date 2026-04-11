---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.744Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle stream start from specific position"
feature_slug: "oracle-stream-start-from-specific-position"
latest_feature_date: "2024-01-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream"
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
Coverage: LOW

## Step 02 Summary

Datastream can start an Oracle source stream from a specific position.

## Extended Definition

Datastream can start an Oracle source stream from a specific position.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 async def sample start backfill job(): Create a client client = datastream v1 .
- Returns Type Description google.cloud.datastream v1.types.StartBackfillJobResponse Response for manually initiating a backfill job for a specific stream object. stop backfill job stop backfill job ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datastream v1 def sample start backfill job(): Create a client client = datastream v1 .
- Returns Type Description google.cloud.datastream v1.types.StartBackfillJobResponse Response for manually initiating a backfill job for a specific stream object. stop backfill job stop backfill job ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/run_stream)
- Source ID: `site-api-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SpecificStartPosition JSON representation { // Union field position can be only one of the following: "mysqlLogPosition" : { object ( MysqlLogPosition ) } , "oracleScnPosition" : { object ( OracleScnPosition ) } , "sqlServerLsnPosition" : { object ( SqlServerLsnPosition ) } , "mysqlGtidPosition" : { object ( MysqlGtidPosition ) } , "mongodbChangeStreamPosition" : { object ( MongodbChangeStreamPosition ) } // End of list of possible types for union field position . } Fields Union field position . position can be only one of the following: mysqlLogPosition object ( MysqlLogPosition ) MySQL specific log position to start replicating from. oracleScnPosition object ( OracleScnPosition ) Oracle SCN to start replicating from. sqlServerLsnPosition object ( SqlServerLsnPosition ) SqlServer LSN to start replicating from. mysqlGtidPosition object ( MysqlGtidPosition ) MySQL GTID set to start replicating from. mongodbChangeStreamPosition object ( MongodbChangeStreamPosition ) MongoDB change stream position to start replicating from.
- CdcStrategy JSON representation { // Union field start position can be only one of the following: "mostRecentStartPosition" : { object ( MostRecentStartPosition ) } , "nextAvailableStartPosition" : { object ( NextAvailableStartPosition ) } , "specificStartPosition" : { object ( SpecificStartPosition ) } // End of list of possible types for union field start position . } Fields Union field start position .
- Resume replication from the next available position in the source. specificStartPosition object ( SpecificStartPosition ) Optional.
- The position to start reading from when starting, resuming, or recovering the stream.

