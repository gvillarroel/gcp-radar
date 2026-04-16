---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.314Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigQuery destination partitioning and clustering"
feature_slug: "bigquery-destination-partitioning-and-clustering"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/behavior-overview"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
keywords:
  - "destination"
  - "partitioning"
  - "and"
  - "clustering"
  - "datastream"
  - "supports"
  - "for"
  - "destinations"
---

# BigQuery destination partitioning and clustering

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports partitioning and clustering for BigQuery destinations.

## Extended Definition

Datastream supports partitioning and clustering for BigQuery destinations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)

## Supporting Pages

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.

### Key concepts and features \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Destinations Datastream supports BigQuery, BigLake Iceberg tables and Cloud Storage as destinations .
- Behavior and use cases Datastream gives users the ability to bring source data from a Relational Database Management System (RDBMS) and other sources into destinations such as BigQuery, BigLake Iceberg tables and Cloud Storage in near real-time fashion.
- Events and streams Datastream ingests a lot of data in near real-time fashion from a variety of sources, and makes the data available for consumption in the destination.
- The event size is limited to 20 MB per event for BigQuery destinations and 100 MB per event for Cloud Storage destinations.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- CustomizationRule JSON representation { // Union field rule can be only one of the following: "bigqueryPartitioning" : { object ( BigQueryPartitioning ) } , "bigqueryClustering" : { object ( BigQueryClustering ) } // End of list of possible types for union field rule . } Fields Union field rule .
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- CustomizationRule JSON representation { // Union field rule can be only one of the following: "bigqueryPartitioning" : { object ( BigQueryPartitioning ) } , "bigqueryClustering" : { object ( BigQueryClustering ) } // End of list of possible types for union field rule . } Fields Union field rule .
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.

