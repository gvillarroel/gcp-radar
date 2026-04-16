---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.323Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Permanent failed stream recovery"
feature_slug: "permanent-failed-stream-recovery"
latest_feature_date: "2023-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream"
keywords:
  - "permanent"
  - "failed"
  - "stream"
  - "recovery"
  - "datastream"
  - "can"
  - "recover"
  - "permanently"
---

# Permanent failed stream recovery

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream can recover a permanently failed stream.

## Extended Definition

Datastream can recover a permanently failed stream.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream](https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream)

## Supporting Pages

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.
- Use to get streams that are currently in state FAILED or FAILED PERMANENTLY.
- Errors on the Stream. lastRecoveryTime string ( Timestamp format) Output only.
- If the stream was recovered, the time of the last recovery.

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict]] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict]] The request object.

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.StopBackfillJobResponse Response for manually stop a backfill job for a specific stream object. stream object path stream object path ( project : str , location : str , stream : str , object : str ) - > str Returns a fully-qualified stream object string. stream path stream path ( project : str , location : str , stream : str ) - > str Returns a fully-qualified stream string. update connection profile update connection profile ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.StreamObject A specific stream object (e.g a specific DB table). network attachment path network attachment path ( project : str , region : str , network attachment : str ) - > str Returns a fully-qualified network attachment string. networks path networks path ( project : str , network : str ) - > str Returns a fully-qualified networks string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- CreateConnectionProfileRequest ( parent="parent value", connection profile id="connection profile id value", connection profile=connection profile, ) Make the request operation = client. create connection profile (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreateConnectionProfileRequest , dict] The request object.
- CreatePrivateConnectionRequest ( parent="parent value", private connection id="private connection id value", private connection=private connection, ) Make the request operation = client. create private connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.datastream v1.types.CreatePrivateConnectionRequest , dict] The request object.

### "Manage backfill for the objects of a stream \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream](https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A stream in Datastream can backfill historical data, as well as stream ongoing changes into a destination.
- To learn how to recover a failed stream, see Recover a stream .
- Datastream can run multiple backfills in parallel.
- Home Documentation Data analytics Datastream Guides Send feedback Manage backfill for the objects of a stream Stay organized with collections Save and categorize content based on your preferences.

