---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.325Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Cloud Storage maximum event size"
feature_slug: "cloud-storage-maximum-event-size"
latest_feature_date: "2023-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/behavior-overview"
keywords:
  - "storage"
  - "maximum"
  - "event"
  - "size"
  - "datastream"
  - "supports"
  - "sizes"
  - "up"
---

# Cloud Storage maximum event size

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports event sizes up to 30 MB when streaming data to Cloud Storage.

## Extended Definition

Datastream supports event sizes up to 30 MB when streaming data to Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)

## Supporting Pages

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- What's the maximum row size that Datastream supports when streaming data into Cloud Storage?
- Datastream enables direct replication into BigQuery, and supports additional destinations like Cloud SQL and Spanner through integration with Dataflow, by leveraging templates that pull the change stream events from Cloud Storage and updating the destination tables accordingly.
- What's the maximum row size that Datastream supports when streaming data into BigQuery?
- The maximum row size that Datastream supports is 100 MB.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- For example: { parent: "projects/my-project/locations/us-central1" create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: bookstore page size: 100 running: true } will return up to 100 running streams in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list streams", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'ListStreams' request.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Datastream only supports the Append-only write mode when streaming to BigLake Iceberg tables.
- Datastream supports the Parquet file format and the Iceberg table format.
- Datastream supports two output formats: Avro and JSON.
- BigLake Iceberg tables destination In the Specify how Datastream should stream into a BigQuery dataset section, select how you want Datastream to create new schemas and tables from the Schema grouping drop-down: Dataset for each schema : Datastream creates a BigQuery dataset for each source schema, based on the schema name.

### Key concepts and features \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Destinations Datastream supports BigQuery, BigLake Iceberg tables and Cloud Storage as destinations .
- The event size is limited to 20 MB per event for BigQuery destinations and 100 MB per event for Cloud Storage destinations.
- Private connectivity is optional, Datastream also supports other modes of connectivity over public networks.
- Learn more about destinations that Datastream supports.

