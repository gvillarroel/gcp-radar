---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.346Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable automated backup"
feature_slug: "bigtable-automated-backup"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/release-notes"
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "automated"
  - "enabling"
  - "allows"
  - "backup"
  - "preview"
  - "bigtable"
  - "now"
  - "the"
---

# Bigtable automated backup

Product: Bigtable
Coverage: LOW

## Step 02 Summary

The Bigtable automated backup preview now allows enabling and disabling automated backup from the Google Cloud console; Bigtable now supports creating daily backups by enabling automated backup in preview.

## Extended Definition

The Bigtable automated backup preview now allows enabling and disabling automated backup from the Google Cloud console; Bigtable now supports creating daily backups by enabling automated backup in preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### Bigtable release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/release-notes](https://docs.cloud.google.com/bigtable/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Change The Preview of Bigtable automated backup has been expanded to let you configure the backup retention period in automated backup policies, and the default is now seven days.
- Node.js Changes for @google-cloud/bigtable 5.1.2 (2024-07-22) Bug Fixes Throw away excess data in order to avoid delivering duplicate data ( #1453 ) ( 069239d ) Java Changes for google-cloud-bigtable 2.41.0 (2024-07-24) Features Add MergeToCell to Mutation APIs ( #2279 ) ( 0ce8a2a ) Add support for MergeToCell API ( #2258 ) ( 191d15c ) Add support for new functions ( #2287 ) ( dd6583a ) Create new environment variable to toggle directpath scoped to cloud bigtable. ( #2261 ) ( 9062944 ) Implement ExecuteQuery API for SQL support ( #2280 ) ( 25218e8 ) Dependencies Update dependency com.google.truth.extensions:truth-proto-extension to v1.4.4 ( #2282 ) ( d00a9e0 ) Python Changes for google-cloud-bigtable 2.25.0 (2024-07-18) Features Publish ProtoRows Message ( 7ac8e14 ) Publish the Cloud Bigtable ExecuteQuery API ( 7ac8e14 ) Bug Fixes Allow protobuf 5.x ( 7ac8e14 ) July 25, 2024 Feature The Preview of automated backup has been expanded to let you enable and disable automated backup in the Google Cloud console.
- February 17, 2025 Libraries Java 2.52.0 (2025-02-14) Features Automated backups are supported in the admin client ( #2472 ) ( 48633e6 ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( 47ca299 ) Extend timeouts for check consistency ( 47ca299 ) Dependencies Update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #2490 ) ( ca25d4e ) Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2481 ) ( deb1f79 ) February 10, 2025 Libraries Java 2.51.2 (2025-02-03) Bug Fixes Add known conformance test failures ( #2474 ) ( 15488fe ) Dependencies Update shared dependencies ( #2473 ) ( 4d6d419 ) February 03, 2025 Feature Tags data for Bigtable instances is now included in Cloud Billing data, letting you use tagged Bigtable instances to gain visibility into your resource usage and spending.
- March 19, 2024 Feature You can now create daily backups of your Bigtable table by enabling automated backup.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the source instance that contains the backup, to verify that the backup that you want to copy exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of backups in the destination instance, so you can choose an ID for the copy that is not already in use. gcloud bigtable backups list --instances= DESTINATION INSTANCE Run the gcloud bigtable instances backups copy command to create the backup copy. gcloud bigtable backups copy \ --source-project= PROJECT ID SOURCE \ --source-instance= INSTANCE ID SOURCE \ --source-cluster= CLUSTER ID SOURCE \ --source-backup= BACKUP ID SOURCE \ --destination-project= PROJECT ID DESTINATION \ --destination-instance= INSTANCE ID DESTINATION \ --destination-cluster= CLUSTER ID DESTINATION \ --destination-backup= BACKUP ID DESTINATION \ Append the command with one of the following: --retention-period = RETENTION PERIOD : Retention period for the backup copy.
- Example : +P30D for 30 days If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a hot backup of the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID -- instance = INSTANCE ID \ -- cluster = CLUSTER ID \ -- table = TABLE ID \ -- async \ -- expiration - date = EXPIRATION DATE \ -- retention - period = RETENTION PERIOD \ -- backup - type = HOT \ -- hot - to - standard - time = HOT TO STANDARD TIME The --async flag is optional.
- Examples : 36h or 89d If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a backup from the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --table= TABLE ID \ --async \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD The --async flag is optional.
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the backup, to verify the backup exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of tables in the destination instance, so you can choose an ID for the new table that is not already in use. gcloud bigtable instances tables list --instances= INSTANCE ID DESTINATION Run the gcloud bigtable instances tables restore command to restore from the backup to a new table. gcloud bigtable instances tables restore \ --source=projects/ PROJECT ID SOURCE /instances/ INSTANCE ID SOURCE /clusters/ CLUSTER ID /backups/ BACKUP ID \ --async \ --destination= TABLE ID NEW \ --destination-instance= INSTANCE ID DESTINATION \ --project= PROJECT ID DESTINATION The --async flag is optional.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Union field automated backup config . automated backup config can be only one of the following: automatedBackupPolicy object ( AutomatedBackupPolicy ) If specified, automated backups are enabled for this table.
- How long the automated backups should be retained.
- Otherwise, automated backups are disabled.

