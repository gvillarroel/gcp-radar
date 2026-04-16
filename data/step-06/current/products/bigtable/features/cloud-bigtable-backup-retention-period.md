---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.009Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable backup retention period"
feature_slug: "cloud-bigtable-backup-retention-period"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
keywords:
  - "increases"
  - "period"
  - "retention"
  - "maximum"
  - "backup"
---

# Cloud Bigtable backup retention period

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Increases the maximum Cloud Bigtable backup retention period from 30 to 90 days.

## Extended Definition

Increases the maximum Cloud Bigtable backup retention period from 30 to 90 days.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)

## Supporting Pages

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- If you create a copy of a backup, the maximum retention period for the copy is 30 days from the time the copy is created.
- You can set a custom retention period by passing in the --automated-backup-retention-period flag, which accepts a value from 3 days to 90 days.
- For tables with automated backup enabled, the retention period is seven days if you set the policy using the --enable-automated-backup flag.
- You can change the retention period for a backup to keep it for up to 90 days after the backup creation time.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the source instance that contains the backup, to verify that the backup that you want to copy exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of backups in the destination instance, so you can choose an ID for the copy that is not already in use. gcloud bigtable backups list --instances= DESTINATION INSTANCE Run the gcloud bigtable instances backups copy command to create the backup copy. gcloud bigtable backups copy \ --source-project= PROJECT ID SOURCE \ --source-instance= INSTANCE ID SOURCE \ --source-cluster= CLUSTER ID SOURCE \ --source-backup= BACKUP ID SOURCE \ --destination-project= PROJECT ID DESTINATION \ --destination-instance= INSTANCE ID DESTINATION \ --destination-cluster= CLUSTER ID DESTINATION \ --destination-backup= BACKUP ID DESTINATION \ Append the command with one of the following: --retention-period = RETENTION PERIOD : Retention period for the backup copy.
- Example : +P30D for 30 days If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a hot backup of the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID -- instance = INSTANCE ID \ -- cluster = CLUSTER ID \ -- table = TABLE ID \ -- async \ -- expiration - date = EXPIRATION DATE \ -- retention - period = RETENTION PERIOD \ -- backup - type = HOT \ -- hot - to - standard - time = HOT TO STANDARD TIME The --async flag is optional.
- Examples : 36h or 89d If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a backup from the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --table= TABLE ID \ --async \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD The --async flag is optional.
- Run the gcloud bigtable instances backups update command to add a new expiration date or retention period or to convert a hot backup to a standard backup. gcloud bigtable backups update BACKUP ID \ --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD --hot-to-standard-time= HOT TO STANDARD TIME Run the gcloud bigtable instances backups describe command to verify that you have successfully updated the expiration. gcloud bigtable backups describe BACKUP ID \ --instance= INSTANCE ID \ --cluster= CLUSTER ID Delete a backup If you want to delete a backup after creating a copy of it, check the status to verify that the copy operation is complete.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AutomatedBackupPolicy JSON representation { "retentionPeriod" : string , "frequency" : string } Fields retentionPeriod string ( Duration format) Required.
- ChangeStreamConfig JSON representation { "retentionPeriod" : string } Fields retentionPeriod string ( Duration format) How long the change stream should be retained.
- Change stream data older than the retention period will not be returned when reading the change stream from the table.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.

