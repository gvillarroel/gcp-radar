---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.316Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigLake managed table destination support"
feature_slug: "biglake-managed-table-destination-support"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder"
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream-automated"
keywords:
  - "biglake"
  - "managed"
  - "table"
  - "destination"
  - "the"
  - "datastream"
  - "api"
  - "supports"
---

# BigLake managed table destination support

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

The Datastream API supports streaming data to BigLake managed tables.

## Extended Definition

The Datastream API supports streaming data to BigLake managed tables.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated)

## Supporting Pages

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigLake Iceberg tables destination In the Specify how Datastream should stream into a BigQuery dataset section, select how you want Datastream to create new schemas and tables from the Schema grouping drop-down: Dataset for each schema : Datastream creates a BigQuery dataset for each source schema, based on the schema name.
- Datastream only supports the Append-only write mode when streaming to BigLake Iceberg tables.
- Oracle user permissions Datastream verifies that the user which it uses to connect to the source database has all of the necessary permissions to retrieve schemas, tables, and data from the database so that Datastream can stream this information into the destination.
- In the Define Datastream connection to BigLake Iceberg tables section, provide the following information: From the Connection ID drop-down, select the identifier of the BigQuery connection that you created and that you want to use for your stream.

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } After a few seconds, retrieve information about the stream to confirm that it's running again. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from PAUSED back to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } Now that you created and managed a stream, confirmed that there are no errors associated with the stream, and that the state of the stream is RUNNING , you're ready to verify that it can transfer data from the source database into a folder in the Cloud Storage destination bucket.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID Verify that the folder of the destination bucket of the Cloud Storage connection profile is now /root/tutorial . { "name" : " PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "gcsProfile" : { "bucketName" : " BUCKET NAME " , "rootPath" : "/root/tutorial" }, "noConnectivity" : {} } Use the Datastream discover API to discover the schemas and tables of the source Oracle database.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } Retrieve information about the stream to confirm that it's paused. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from RUNNING to PAUSED . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "PAUSED" , "backfillAll" : {} } When a stream is paused, Datastream won't pull any new data from the source database into the destination.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.

### "Class BigQueryDestinationConfig.Builder (1.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder)
- Source ID: `site-java-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Big Lake Managed Tables (BLMT) configuration. .google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt config = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description BigQueryDestinationConfig.BlmtConfigOrBuilder getDataFreshness() public Duration getDataFreshness () The guaranteed data freshness (in seconds) when querying tables created by the stream.
- Big Lake Managed Tables (BLMT) configuration. .google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt config = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description boolean Whether the blmtConfig field is set. hasDataFreshness() public boolean hasDataFreshness () The guaranteed data freshness (in seconds) when querying tables created by the stream.
- Big Lake Managed Tables (BLMT) configuration. .google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt config = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description BigQueryDestinationConfig.BlmtConfig The blmtConfig. getBlmtConfigBuilder() public BigQueryDestinationConfig .
- Big Lake Managed Tables (BLMT) configuration. .google.cloud.datastream.v1.BigQueryDestinationConfig.BlmtConfig blmt config = 1 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description value BigQueryDestinationConfig.BlmtConfig Returns Type Description BigQueryDestinationConfig.Builder setBlmtConfig(BigQueryDestinationConfig.BlmtConfig.Builder builderForValue) public BigQueryDestinationConfig .

### "Create a stream using the automated flow \_|\_ Datastream \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To use the automated stream creation flow, you need the following Identity and Access Management (IAM) roles or permissions: serviceusage.services.enable , compute.networkAdmin for enabling the required APIs and performing network configuration tasks. cloudsql.admin for instance configuration tasks. datastream.admin for administration tasks that Datastream performs on your behalf.
- Datastream configures tables for CDC, sets up replication slots, sets up a publication for all tables in the database, and creates a dedicated Datastream user.
- If a future table is created by a different user, then that user must explicitly grant the Datastream reader user SELECT permission on the table.
- Datastream only supports enabling point-in-time recovery in the Standard backup tier when using the automated stream setup.

