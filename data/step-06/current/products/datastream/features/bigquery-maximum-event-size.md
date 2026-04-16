---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.321Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigQuery maximum event size"
feature_slug: "bigquery-maximum-event-size"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects"
keywords:
  - "maximum"
  - "event"
  - "size"
  - "datastream"
  - "supports"
  - "sizes"
  - "up"
  - "to"
---

# BigQuery maximum event size

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports event sizes up to 20 MB when streaming data to BigQuery; Datastream supports event sizes up to 10 MB when streaming data to BigQuery.

## Extended Definition

Datastream supports event sizes up to 20 MB when streaming data to BigQuery; Datastream supports event sizes up to 10 MB when streaming data to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects)

## Supporting Pages

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- What's the maximum row size that Datastream supports when streaming data into Cloud Storage?
- What's the maximum row size that Datastream supports when streaming data into BigQuery?
- Datastream enables direct replication into BigQuery, and supports additional destinations like Cloud SQL and Spanner through integration with Dataflow, by leveraging templates that pull the change stream events from Cloud Storage and updating the destination tables accordingly.
- The maximum row size that Datastream supports is 100 MB.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- For example: { parent: "projects/my-project/locations/us-central1" create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: bookstore page size: 100 running: true } will return up to 100 running streams in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list streams", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'ListStreams' request.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get stream", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for getting a stream.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list stream objects", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for listing all objects for a specific stream.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
- StreamObject JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "displayName" : string , "errors" : [ { object ( Error ) } ] , "backfillJob" : { object ( BackfillJob ) } , "sourceObject" : { object ( SourceObjectIdentifier ) } , "customizationRules" : [ { object ( CustomizationRule ) } ] } Fields name string Output only.
- Home Documentation Data analytics Datastream Reference Send feedback MCP Tools Reference: datastream Stay organized with collections Save and categorize content based on your preferences.

