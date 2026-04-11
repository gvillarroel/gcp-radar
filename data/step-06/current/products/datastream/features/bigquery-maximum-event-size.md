---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.745Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigQuery maximum event size"
feature_slug: "bigquery-maximum-event-size"
latest_feature_date: "2024-01-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/release-notes"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
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
Coverage: LOW

## Step 02 Summary

Datastream supports event sizes up to 20 MB when streaming data to BigQuery; Datastream supports event sizes up to 10 MB when streaming data to BigQuery.

## Extended Definition

Datastream supports event sizes up to 20 MB when streaming data to BigQuery; Datastream supports event sizes up to 10 MB when streaming data to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)

## Supporting Pages

### Datastream release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/release-notes](https://docs.cloud.google.com/datastream/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- January 16, 2024 Feature The maximum event size that Datastream supports when streaming data to BigQuery is now increased to 20 MB.
- October 07, 2024 Feature The maximum row size that Datastream supports when streaming data to Cloud Storage is now increased to 100 MB.
- June 07, 2023 Feature The maximum event size that Datastream supports is now increased.
- November 22, 2023 Feature Datastream now supports SSL/TLS encryption for connections to PostgreSQL sources that don't require client certificates.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's the maximum row size that Datastream supports when streaming data into Cloud Storage?
- What's the maximum row size that Datastream supports when streaming data into BigQuery?
- Datastream enables direct replication into BigQuery, and supports additional destinations like Cloud SQL and Spanner through integration with Dataflow, by leveraging templates that pull the change stream events from Cloud Storage and updating the destination tables accordingly.
- The maximum row size that Datastream supports is 100 MB.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- For example: { parent: "projects/my-project/locations/us-central1" create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: bookstore page size: 100 running: true } will return up to 100 running streams in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
- Curl Request curl --location 'https://datastream.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "list streams", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for 'ListStreams' request.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.

