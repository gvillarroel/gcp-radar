---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.319Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Cloud Storage maximum row size"
feature_slug: "cloud-storage-maximum-row-size"
latest_feature_date: "2024-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
keywords:
  - "storage"
  - "maximum"
  - "row"
  - "size"
  - "datastream"
  - "supports"
  - "sizes"
  - "up"
---

# Cloud Storage maximum row size

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports row sizes up to 100 MB when streaming data to Cloud Storage.

## Extended Definition

Datastream supports row sizes up to 100 MB when streaming data to Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)

## Supporting Pages

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- What's the maximum row size that Datastream supports when streaming data into Cloud Storage?
- What's the maximum row size that Datastream supports when streaming data into BigQuery?
- The maximum row size that Datastream supports is 100 MB.
- The maximum row size that Datastream supports is 20 MB.

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- In addition to Avro, Datastream now supports the JSON output format for files written to Cloud Storage.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } After a few seconds, retrieve information about the stream to confirm that it's running again. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from PAUSED back to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } Now that you created and managed a stream, confirmed that there are no errors associated with the stream, and that the state of the stream is RUNNING , you're ready to verify that it can transfer data from the source database into a folder in the Cloud Storage destination bucket.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID Verify that the folder of the destination bucket of the Cloud Storage connection profile is now /root/tutorial . { "name" : " PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "gcsProfile" : { "bucketName" : " BUCKET NAME " , "rootPath" : "/root/tutorial" }, "noConnectivity" : {} } Use the Datastream discover API to discover the schemas and tables of the source Oracle database.

### MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- GcsDestinationConfig JSON representation { "path" : string , "fileRotationMb" : integer , "fileRotationInterval" : string , // Union field file format can be only one of the following: "avroFileFormat" : { object ( AvroFileFormat ) } , "jsonFileFormat" : { object ( JsonFileFormat ) } // End of list of possible types for union field file format . } Fields path string Path inside the Cloud Storage bucket to write data to. fileRotationMb integer The maximum file size to be saved in the bucket. fileRotationInterval string ( Duration format) The maximum duration for which new events are added before a file is closed and a new file is created.
- For example: { parent: "projects/my-project/locations/us-central1" create time after: 2025-10-02T10:15:33Z create time before: 2025-10-03T00:00:00Z display name: bookstore page size: 100 running: true } will return up to 100 running streams in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
- Stream JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "displayName" : string , "sourceConfig" : { object ( SourceConfig ) } , "destinationConfig" : { object ( DestinationConfig ) } , "state" : enum ( State ) , "errors" : [ { object ( Error ) } ] , "lastRecoveryTime" : string , "ruleSets" : [ { object ( RuleSet ) } ] , // Union field backfill strategy can be only one of the following: "backfillAll" : { object ( BackfillAllStrategy ) } , "backfillNone" : { object ( BackfillNoneStrategy ) } // End of list of possible types for union field backfill strategy . // Union field customer managed encryption key can be only one of the // following: "customerManagedEncryptionKey" : string // End of list of possible types for union field // customer managed encryption key . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Output only.
- OracleSourceConfig JSON representation { "includeObjects" : { object ( OracleRdbms ) } , "excludeObjects" : { object ( OracleRdbms ) } , "maxConcurrentCdcTasks" : integer , "maxConcurrentBackfillTasks" : integer , // Union field large objects handling can be only one of the following: "dropLargeObjects" : { object ( DropLargeObjects ) } , "streamLargeObjects" : { object ( StreamLargeObjects ) } // End of list of possible types for union field large objects handling . // Union field cdc method can be only one of the following: "logMiner" : { object ( LogMiner ) } , "binaryLogParser" : { object ( BinaryLogParser ) } // End of list of possible types for union field cdc method . } Fields includeObjects object ( OracleRdbms ) The Oracle objects to include in the stream. excludeObjects object ( OracleRdbms ) The Oracle objects to exclude from the stream. maxConcurrentCdcTasks integer Maximum number of concurrent CDC tasks.

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Datastream only supports the Append-only write mode when streaming to BigLake Iceberg tables.
- Datastream supports the Parquet file format and the Iceberg table format.
- Datastream supports two output formats: Avro and JSON.
- BigLake Iceberg tables destination In the Specify how Datastream should stream into a BigQuery dataset section, select how you want Datastream to create new schemas and tables from the Schema grouping drop-down: Dataset for each schema : Datastream creates a BigQuery dataset for each source schema, based on the schema name.

