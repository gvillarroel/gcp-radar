---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.325Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL backfill for tables of any size"
feature_slug: "postgresql-backfill-for-tables-of-any-size"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/faq"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
keywords:
  - "postgresql"
  - "backfill"
  - "for"
  - "tables"
  - "of"
  - "any"
  - "size"
  - "datastream"
---

# PostgreSQL backfill for tables of any size

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports backfill for PostgreSQL tables of any size.

## Extended Definition

Datastream supports backfill for PostgreSQL tables of any size.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream](https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)

## Supporting Pages

### "Manage backfill for the objects of a stream \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream](https://docs.cloud.google.com/datastream/docs/manage-backfill-for-the-objects-of-a-stream)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Datastream Guides Send feedback Manage backfill for the objects of a stream Stay organized with collections Save and categorize content based on your preferences.
- If this happens, then when new tables are added to the source, there's no automatic backfill task created for them (because new tables typically don't have any "historical" data to backfill).
- To have Datastream stream a snapshot of all existing data from the source to the destination, you must initiate backfill for the objects that contain this data.
- Datastream will start backfill for the objects that you selected, and the status of each object will change from Pending to Active to Completed .

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you can't grant the GRANT SELECT ANY TABLE permission, then you can grant SELECT permissions to the following list of tables: ALL COL COMMENTS ALL CONS COLUMNS ALL CONSTRAINTS ALL DB LINKS ALL EXTERNAL TABLES ALL IND COLUMNS ALL INDEXES ALL LOG GROUPS ALL MVIEWS ALL OBJECTS ALL PART TABLES ALL SEQUENCES ALL SOURCE ALL SYNONYMS ALL TAB COLS ALL TAB COLUMNS ALL TAB COMMENTS ALL TABLES ALL TRIGGERS ALL TRIGGER COLS ALL TYPES ALL USERS ALL VIEWS DATABASE PROPERTIES DBA ROLE PRIVS DUAL PRODUCT COMPONENT VERSION ROLE SYS PRIVS USER ROLE PRIVS USER TAB PRIVS To stream changes using Datastream, you also need read access to all tables included in the stream.
- Datastream enables seamless replication of data from relational database sources such as AlloyDB for PostgreSQL, PostgreSQL, MySQL, SQL Server and Oracle, as well as from Salesforce and MongoDB, directly into BigQuery.
- In some edge cases, for example when replicating very large tables that can't be backfilled using Datastream, you might need to load the data into BigQuery first before starting the stream.
- Does the Datastream-to-BigQuery template in Dataflow have any limitations for the number of data manipulation language (DML) operations?

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Template for the dataset to contain replica tables. field, enter My integration dataset final because this is the dataset where the changes that are staged in the My integration dataset log dataset merge to create a one-to-one replica of the tables in the source database.
- Configure information about the source database for the stream In this section, you configure information about the source database for the stream by specifying the tables and schemas in the source database that Datastream: Can transfer into the destination.
- Verify the integration In the Verify the stream section of this tutorial, you confirmed that Datastream transferred the data from all tables of a source MySQL database into the /integration/tutorial folder of your Cloud Storage destination bucket.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, use the Google Cloud console to do the following: Delete your project, Datastream stream, and Datastream connection profiles.

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } Retrieve information about the stream to confirm that it's paused. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from RUNNING to PAUSED . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "PAUSED" , "backfillAll" : {} } When a stream is paused, Datastream won't pull any new data from the source database into the destination.
- If any data exceeds this size, then the data will be segmented into multiple 5-MB files. file rotation interval The number of seconds that will elapse before Datastream closes an existing file in a folder of the Cloud Storage destination bucket and opens another file to contain data being transferred from the source database.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } After a few seconds, retrieve information about the stream to confirm that it's running again. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from PAUSED back to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } Now that you created and managed a stream, confirmed that there are no errors associated with the stream, and that the state of the stream is RUNNING , you're ready to verify that it can transfer data from the source database into a folder in the Cloud Storage destination bucket.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.

