---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:04.329Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Oracle backfill for tables over 100 million rows"
feature_slug: "oracle-backfill-for-tables-over-100-million-rows"
latest_feature_date: "2022-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/using-datastream-apis"
  - "https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle"
  - "https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle"
  - "https://docs.cloud.google.com/datastream/docs/faq"
keywords:
  - "oracle"
  - "backfill"
  - "for"
  - "tables"
  - "over"
  - "100"
  - "million"
  - "rows"
---

# Oracle backfill for tables over 100 million rows

Product: Datastream
Coverage: MEDIUM

## Step 02 Summary

Datastream supports backfilling Oracle tables with more than 100 million rows.

## Extended Definition

Datastream supports backfilling Oracle tables with more than 100 million rows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- [https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle](https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle)
- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)

## Supporting Pages

### Using Datastream APIs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } After a few seconds, retrieve information about the stream to confirm that it's running again. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from PAUSED back to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } Now that you created and managed a stream, confirmed that there are no errors associated with the stream, and that the state of the stream is RUNNING , you're ready to verify that it can transfer data from the source database into a folder in the Cloud Storage destination bucket.
- DATASTREAM API VERSION .OperationMetadata" , "createTime" : " DATE AND TIME STAMP " , "target" : " PROJECT PATH /streams/ STREAM ID " , "verb" : "start" , "requestedCancellation" : false , "apiVersion" : " DATASTREAM API VERSION " }, "done" : false } Retrieve information about the stream to confirm that it's paused. curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the state of the stream has changed from RUNNING to PAUSED . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "PAUSED" , "backfillAll" : {} } When a stream is paused, Datastream won't pull any new data from the source database into the destination.
- At the prompt, enter the following command: curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" https://datastream.googleapis.com/ DATASTREAM API VERSION / PROJECT PATH /streams/ STREAM ID Verify that the value of the fileRotationMb parameter for the Cloud Storage connection profile is now 100 . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "CREATED" , "backfillAll" : {} } Start the stream.
- Verify that the state of the stream has changed from CREATED to RUNNING . { "name" : " PROJECT PATH /streams/ STREAM ID " , "createTime" : " DATE AND TIME STAMP " , "updateTime" : " DATE AND TIME STAMP " , "displayName" : " DISPLAY NAME " , "sourceConfig" : { "sourceConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ SOURCE CONNECTION PROFILE ID " , "oracleSourceConfig" : { "allowlist" : { "oracleSchemas" : [ { "schema" : "ROOT" } ] }, "rejectlist" : {} } }, "destinationConfig" : { "destinationConnectionProfileName" : "projects/ YOUR PROJECT NUMBER /locations/ YOUR PROJECT LOCATION /connectionProfiles/ DESTINATION CONNECTION PROFILE ID " , "gcsDestinationConfig" : { "fileRotationMb" : 100 , "fileRotationInterval" : "15s" "avroFileFormat" : {} } }, "state" : "RUNNING" , "backfillAll" : {} } When a stream is started, the status first changes to STARTING .

### "Configure a pluggable Oracle database for CDC \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle](https://docs.cloud.google.com/datastream/docs/configure-pluggable-oracle)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This privilege lets you use the ROWID based backfill for your Oracle source: GRANT SELECT ON DBA EXTENTS TO USER NAME ; If your database uses Transparent Data Encryption (TDE), grant the following permissions: GRANT SELECT ON DBA TABLESPACES TO USER NAME ; GRANT SELECT ON DBA ENCRYPTED COLUMNS TO USER NAME ; What's next Learn more about how Datastream works with Oracle sources .
- Define a data retention policy for your database by running the following Oracle Recovery Manager (RMAN) command from the CDB$ROOT container: CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; The command defines the data retention policy for all pluggable databases in your container database.
- Define a data retention policy for your database by running these Oracle Recovery Manager (RMAN) commands: TARGET / CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; You use the TARGET / command to start an RMAN client and connect to the source database.
- To do so, run the following commands: GRANT SELECT ON GV $LOG TO USER NAME ; GRANT SELECT ON GV $LOGFILE TO USER NAME ; GRANT SELECT ON GV $ARCHIVED LOG TO USER NAME ; GRANT SELECT ON GV $INSTANCE TO USER NAME ; GRANT SELECT ON GV $STANDBY LOG TO USER NAME ; GRANT SELECT ON V $INSTANCE TO USER NAME ; GRANT SELECT ON V $PDBS TO USER NAME ; GRANT SELECT ON V $TRANSPORTABLE PLATFORM TO USER NAME ; GRANT SELECT ON V $DATABASE TO USER NAME ; GRANT SELECT ON V $PARAMETER TO USER NAME ; GRANT SELECT ON COL$ TO USER NAME ; GRANT SELECT ON DBA OBJECTS TO USER NAME ; GRANT SELECT ON DBA TABLESPACES TO USER NAME ; GRANT SELECT ON DBA ENCRYPTED COLUMNS TO USER NAME ; GRANT SELECT ON DBA EXTENTS TO USER NAME ; GRANT CONNECT TO USER NAME ; GRANT CREATE SESSION TO USER NAME ; GRANT SELECT ANY TABLE TO USER NAME ; GRANT READ ON DIRECTORY ONLINELOG DIR TO USER NAME ; GRANT READ ON DIRECTORY ARCHIVELOG DIR TO USER NAME ; Replace USER NAME with the name of the user account that you intend to use to connect to your database.

### "Configure a self-managed Oracle database for CDC \_|\_ Datastream \_|\_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle](https://docs.cloud.google.com/datastream/docs/configure-self-managed-oracle)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define a data retention policy for your database by running these Oracle Recovery Manager (RMAN) commands: TARGET / CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; You use the TARGET / command to start an RMAN client and connect to the source database.
- Define a data retention policy for your database by running these Oracle Recovery Manager (RMAN) commands: TARGET / CONFIGURE RETENTION POLICY TO RECOVERY WINDOW OF 4 DAYS ; You use the TARGET / command to start an RMAN client and connect to the source database.
- This privilege lets you use the ROWID based backfill for your Oracle source: GRANT SELECT ON DBA EXTENTS TO USER NAME ; What's next Learn more about how Datastream works with Oracle sources .
- To do so, run the following commands: GRANT SELECT ON GV $LOG TO USER NAME ; GRANT SELECT ON GV $LOGFILE TO USER NAME ; GRANT SELECT ON GV $ARCHIVED LOG TO USER NAME ; GRANT SELECT ON GV $INSTANCE TO USER NAME ; GRANT SELECT ON GV $STANDBY LOG TO USER NAME ; GRANT SELECT ON V $INSTANCE TO USER NAME ; GRANT SELECT ON V $PDBS TO USER NAME ; GRANT SELECT ON V $TRANSPORTABLE PLATFORM TO USER NAME ; GRANT SELECT ON V $DATABASE TO USER NAME ; GRANT SELECT ON V $PARAMETER TO USER NAME ; GRANT SELECT ON COL$ TO USER NAME ; GRANT SELECT ON DBA OBJECTS TO USER NAME ; GRANT SELECT ON DBA TABLESPACES TO USER NAME ; GRANT SELECT ON DBA ENCRYPTED COLUMNS TO USER NAME ; GRANT SELECT ON DBA EXTENTS TO USER NAME ; GRANT CONNECT TO USER NAME ; GRANT CREATE SESSION TO USER NAME ; GRANT SELECT ANY TABLE TO USER NAME ; GRANT READ ON DIRECTORY ONLINELOG DIR TO USER NAME ; GRANT READ ON DIRECTORY ARCHIVELOG DIR TO USER NAME ; Replace USER NAME with the name of the user account that you intend to use to connect to your database.

### FAQ \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- For information about backfill constraints, see the known limitations pages for the respective source types: MySQL Oracle PostgreSQL (including AlloyDB for PostgreSQL) SQL Server Salesforce MongoDB What's the recommended order for CDC and backfill operations?
- In some edge cases, for example when replicating very large tables that can't be backfilled using Datastream, you might need to load the data into BigQuery first before starting the stream.
- There are two types of backfill: Incremental : The default type of backfill for tables.
- This FAQ is associated with: General questions about Datastream and change data capture (CDC) General source behavior and limitations MySQL source behavior and limitations Oracle source behavior and limitations PostgreSQL source behavior and limitations (including AlloyDB for PostgreSQL) SQL Server source behavior and limitations Salesforce source behavior and limitations BigQuery destination behavior Cloud Storage destination behavior Common use cases for using Datastream How Datastream integrates with Google Cloud data services Security and connectivity Monitoring Datastream Pricing Additional information about Datastream General questions about Datastream and change data capture (CDC) Question Answer What's Datastream?

