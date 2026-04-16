---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.320Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigQuery append-only write mode"
feature_slug: "bigquery-append-only-write-mode"
latest_feature_date: "2024-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/configure-bigquery-destination"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream"
keywords:
  - "append"
  - "only"
  - "write"
  - "mode"
  - "datastream"
  - "supports"
  - "when"
  - "ingesting"
---

# BigQuery append-only write mode

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports append-only write mode when ingesting data to BigQuery.

## Extended Definition

Datastream supports append-only write mode when ingesting data to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/configure-bigquery-destination](https://docs.cloud.google.com/datastream/docs/configure-bigquery-destination)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)

## Supporting Pages

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Datastream only supports the Append-only write mode when streaming to BigLake Iceberg tables.
- You can use partitioning filters only in the append-only write mode.
- You can use partitioning filters only in the append-only write mode.
- You can use partitioning filters only in the append-only write mode.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- In the Append-only mode, data is appended in BigQuery as a stream of changes, with a separate row for each INSERT , UPDATE-INSERT , UPDATE-DELETE , and DELETE event.
- In the Merge mode (default), when Datastream creates a table in BigQuery, it sets the primary keys on the table according to the primary keys defined in the source.
- Yes, Datastream supports Oracle multi-tenant architecture (CDB/PDB), however, you can only replicate a single pluggable database in a stream.
- If the source table doesn't have a primary key, it's treated as if the Append-only mode was used.

### Configure a BigQuery destination \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/configure-bigquery-destination](https://docs.cloud.google.com/datastream/docs/configure-bigquery-destination)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get a better understanding of the append-only write mode, consider the following scenarios: Initial backfill : after the initial backfill, all events are written to BigQuery as INSERT type events, with the same timestamp, universally unique identifier (UUID), and change sequence number.
- Append-only : The append-only write mode lets you add data to BigQuery as a stream of changes ( INSERT , UPDATE-INSERT , UPDATE-DELETE and DELETE events).
- When you configure datasets for the BigQuery destination using Datastream, you can select one of the following options: Dataset for each schema : The dataset is selected or automatically created by Datastream in the BigQuery location specified, based on the schema name of the source.
- This means that Datastream writes all changes to your data to BigQuery, and BigQuery then consolidates the changes with existing data, thus creating final tables that are replicas of the source tables.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- Source ID: `site-api-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- BigQueryDestinationConfig JSON representation { "dataFreshness" : string , "blmtConfig" : { object ( BlmtConfig ) } , // Union field dataset config can be only one of the following: "singleTargetDataset" : { object ( SingleTargetDataset ) } , "sourceHierarchyDatasets" : { object ( SourceHierarchyDatasets ) } // End of list of possible types for union field dataset config . // Union field write mode can be only one of the following: "merge" : { object ( Merge ) } , "appendOnly" : { object ( AppendOnly ) } // End of list of possible types for union field write mode . } Fields dataFreshness string ( Duration format) The guaranteed data freshness (in seconds) when querying tables created by the stream.
- Union field write mode . write mode can be only one of the following: merge object ( Merge ) The standard mode appendOnly object ( AppendOnly ) Append only mode SingleTargetDataset JSON representation { "datasetId" : string } Fields datasetId string The dataset ID of the target dataset.
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.

