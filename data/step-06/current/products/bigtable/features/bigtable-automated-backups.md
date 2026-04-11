---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.334Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable automated backups"
feature_slug: "bigtable-automated-backups"
latest_feature_date: "2025-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
keywords:
  - "automated"
  - "backups"
  - "backup"
  - "generally"
  - "bigtable"
  - "for"
  - "now"
  - "is"
---

# Bigtable automated backups

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Automated backup for Bigtable is now generally available.

## Extended Definition

Automated backup for Bigtable is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)

## Supporting Pages

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the source instance that contains the backup, to verify that the backup that you want to copy exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of backups in the destination instance, so you can choose an ID for the copy that is not already in use. gcloud bigtable backups list --instances= DESTINATION INSTANCE Run the gcloud bigtable instances backups copy command to create the backup copy. gcloud bigtable backups copy \ --source-project= PROJECT ID SOURCE \ --source-instance= INSTANCE ID SOURCE \ --source-cluster= CLUSTER ID SOURCE \ --source-backup= BACKUP ID SOURCE \ --destination-project= PROJECT ID DESTINATION \ --destination-instance= INSTANCE ID DESTINATION \ --destination-cluster= CLUSTER ID DESTINATION \ --destination-backup= BACKUP ID DESTINATION \ Append the command with one of the following: --retention-period = RETENTION PERIOD : Retention period for the backup copy.
- Example : +P30D for 30 days If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a hot backup of the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID -- instance = INSTANCE ID \ -- cluster = CLUSTER ID \ -- table = TABLE ID \ -- async \ -- expiration - date = EXPIRATION DATE \ -- retention - period = RETENTION PERIOD \ -- backup - type = HOT \ -- hot - to - standard - time = HOT TO STANDARD TIME The --async flag is optional.
- Examples : 36h or 89d If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a backup from the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --table= TABLE ID \ --async \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD The --async flag is optional.
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the backup, to verify the backup exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of tables in the destination instance, so you can choose an ID for the new table that is not already in use. gcloud bigtable instances tables list --instances= INSTANCE ID DESTINATION Run the gcloud bigtable instances tables restore command to restore from the backup to a new table. gcloud bigtable instances tables restore \ --source=projects/ PROJECT ID SOURCE /instances/ INSTANCE ID SOURCE /clusters/ CLUSTER ID /backups/ BACKUP ID \ --async \ --destination= TABLE ID NEW \ --destination-instance= INSTANCE ID DESTINATION \ --project= PROJECT ID DESTINATION The --async flag is optional.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Union field automated backup config . automated backup config can be only one of the following: automatedBackupPolicy object ( AutomatedBackupPolicy ) If specified, automated backups are enabled for this table.
- Table JSON representation { "name" : string , "clusterStates" : { string : { object ( ClusterState ) } , ... } , "columnFamilies" : { string : { object ( ColumnFamily ) } , ... } , "granularity" : enum ( TimestampGranularity ) , "restoreInfo" : { object ( RestoreInfo ) } , "changeStreamConfig" : { object ( ChangeStreamConfig ) } , "deletionProtection" : boolean , "stats" : { object ( TableStats ) } , "tieredStorageConfig" : { object ( TieredStorageConfig ) } , "rowKeySchema" : { object ( Struct ) } , // Union field automated backup config can be only one of the following: "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } // End of list of possible types for union field automated backup config . } Fields name string The unique name of the table.
- Example: "3.5s" . frequency string ( Duration format) How frequently automated backups should occur.
- Otherwise, automated backups are disabled.

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Action Required IAM permission Create a backup bigtable.tables.readRows, bigtable.backups.create Get a backup bigtable.backups.get List backups bigtable.backups.list Delete a backup bigtable.backups.delete Update a backup bigtable.backups.update Copy a backup bigtable.backups.read, bigtable.backups.create Restore from a backup to a new table bigtable.tables.create, bigtable.backups.restore Get an operation bigtable.instances.get List operations bigtable.instances.get Best practices Before you create a backup strategy, consider the following best practices.
- You can create backups in the following ways: Enable automated backup to let Bigtable create daily backups for you.
- Use cases Backups are useful for the following use cases: Business continuity Regulatory compliance Testing and development Disaster recovery Consider the following disaster recovery scenarios: Goal Backup strategy Restoration strategy Protect against human error: You want to always have a recent backup of your data ready in case of accidental deletion or corruption.
- Restore from a standard or hot backup to a new table Any instance Any Bigtable region Any project Copy a backup 1, 2 Any instance Any Bigtable region Any project See Manage backups for step-by-step instructions on these actions as well as operations such as updating and deleting backups.

