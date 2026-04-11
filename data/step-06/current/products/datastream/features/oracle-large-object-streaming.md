---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.747Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle large object streaming"
feature_slug: "oracle-large-object-streaming"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
keywords:
  - "oracle"
  - "large"
  - "object"
  - "streaming"
  - "datastream"
  - "can"
  - "stream"
  - "types"
---

# Oracle large object streaming

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream can stream Oracle large object data types including BLOB, CLOB, and NCLOB.

## Extended Definition

Datastream can stream Oracle large object data types including BLOB, CLOB, and NCLOB.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Stream A resource representing streaming data from a source to a destination. get stream object get stream object ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Stream A resource representing streaming data from a source to a destination. get stream object get stream object ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.
- LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string SourceConfig JSON representation { "sourceConnectionProfile" : string , // Union field source stream config can be only one of the following: "oracleSourceConfig" : { object ( OracleSourceConfig ) } , "mysqlSourceConfig" : { object ( MysqlSourceConfig ) } , "postgresqlSourceConfig" : { object ( PostgresqlSourceConfig ) } , "sqlServerSourceConfig" : { object ( SqlServerSourceConfig ) } , "salesforceSourceConfig" : { object ( SalesforceSourceConfig ) } , "mongodbSourceConfig" : { object ( MongodbSourceConfig ) } , "spannerSourceConfig" : { object ( SpannerSourceConfig ) } // End of list of possible types for union field source stream config . } Fields sourceConnectionProfile string Required.
- The configuration for handle Oracle large objects. large objects handling can be only one of the following: dropLargeObjects object ( DropLargeObjects ) Drop large object values. streamLargeObjects object ( StreamLargeObjects ) Stream large object values.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.

