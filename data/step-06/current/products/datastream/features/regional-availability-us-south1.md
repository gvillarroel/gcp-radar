---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.318Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Regional availability: us-south1"
feature_slug: "regional-availability-us-south1"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/datastream/docs/create-connection-profiles"
  - "https://docs.cloud.google.com/datastream/docs/behavior-overview"
  - "https://docs.cloud.google.com/datastream/docs/always-on-availability-groups"
keywords:
  - "regional"
  - "availability"
  - "us"
  - "south1"
  - "datastream"
  - "is"
  - "available"
  - "in"
---

# Regional availability: us-south1

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream is available in the us-south1 (Dallas) region.

## Extended Definition

Datastream is available in the us-south1 (Dallas) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)
- [https://docs.cloud.google.com/datastream/docs/always-on-availability-groups](https://docs.cloud.google.com/datastream/docs/always-on-availability-groups)

## Supporting Pages

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } After a few seconds, retrieve information about the stream to confirm that it's running again. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from PAUSED back to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } Now that you created and managed a stream, confirmed that there are no errors associated with the stream, and that the state of the stream is RUNNING , you're ready to verify that it can transfer data from the source database into a folder in the Cloud Storage destination bucket.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } Retrieve information about the stream to confirm that it's paused. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from RUNNING to PAUSED . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "PAUSED" , "backfillAll" : {} } When a stream is paused, Datastream won't pull any new data from the source database into the destination.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID Verify that the folder of the destination bucket of the Cloud Storage connection profile is now /root/tutorial . { "name" : " PROJECT PATH /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "gcsProfile" : { "bucketName" : " BUCKET NAME " , "rootPath" : "/root/tutorial" }, "noConnectivity" : {} } Use the Datastream discover API to discover the schemas and tables of the source Oracle database.
- At the prompt, enter the following command: curl -X POST -d $ORACLE -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /connectionProfiles? connection profile id= SOURCE CONNECTION PROFILE ID Use the following table to help you understand the parameter values for this command: Parameter value Replace with DATASTREAM API VERSION The current version of the Datastream API (for example, v1 ).

### Create connection profiles \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- If the network that Datastream is peered with isn't the network where your source is hosted, you're using a fully managed database (for example, Cloud SQL), or if Datastream doesn't run in the region where your source exists, then a NAT VM is required.
- If the network that Datastream is peered with isn't the network where your source is hosted, you're using a fully managed database (for example, Cloud SQL), or if Datastream doesn't run in the region where your source exists, then a NAT VM is required.
- If the network that Datastream is peered with isn't the network where your source is hosted, you're using a fully managed database (for example, Cloud SQL), or if Datastream doesn't run in the region where your source exists, then a NAT VM is required.
- If the network that Datastream is peered with isn't the network where your source is hosted, you're using a fully managed database (for example, Cloud SQL), or if Datastream doesn't run in the region where your source exists, then a NAT VM is required.

### Key concepts and features \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- High availability: Datastream is a regional service, running on multiple zones in each region .
- Initial data and CDC data Because data sources have data that existed before the time that the source was connected to a stream (historical data), Datastream generates events both from the historical data as well as data changes happening in real-time.
- High availability and disaster recovery This section contains information about how Datastream handles scenarios associated with high availability and disaster recovery.
- Sources There is setup work required for a source to be used with Datastream, including authentication and additional configuration options.

### "Work with Always On availability groups \_|\_ Datastream \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastream/docs/always-on-availability-groups](https://docs.cloud.google.com/datastream/docs/always-on-availability-groups)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- USE [ DATABASE NAME ]; DECLARE @ DatabaseName SYSNAME = DB NAME (); IF ( SELECT sys . fn hadr is primary replica ( @ DatabaseName )) = 1 BEGIN -- If the replica isn't a primary, the code block that follows is skipped EXECUTE sys . sp cdc add job @ job type = 'capture' ; EXECUTE sys . sp cdc add job @ job type = 'cleanup' ; END What's next Learn more about how Datastream works with SQL Server sources .
- This page describes what Always-On availability groups in SQL Server are and how Datastream supports them for failover and data recovery scenarios.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Overview of Always On availability groups In SQL Server, Always On availability groups are a high-availability solution that lets you prepare your databases for disaster recovery scenarios.

