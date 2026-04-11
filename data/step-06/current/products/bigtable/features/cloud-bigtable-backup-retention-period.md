---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:35:45.355Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable backup retention period"
feature_slug: "cloud-bigtable-backup-retention-period"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "LOW"
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
  - "from"
  - "bigtable"
  - "the"
---

# Cloud Bigtable backup retention period

Product: Bigtable
Coverage: LOW

## Step 02 Summary

Increases the maximum Cloud Bigtable backup retention period from 30 to 90 days.

## Extended Definition

Increases the maximum Cloud Bigtable backup retention period from 30 to 90 days.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)

## Supporting Pages

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you create a copy of a backup, the maximum retention period for the copy is 30 days from the time the copy is created.
- You can set a custom retention period by passing in the --automated-backup-retention-period flag, which accepts a value from 3 days to 90 days.
- Action Required IAM permission Create a backup bigtable.tables.readRows, bigtable.backups.create Get a backup bigtable.backups.get List backups bigtable.backups.list Delete a backup bigtable.backups.delete Update a backup bigtable.backups.update Copy a backup bigtable.backups.read, bigtable.backups.create Restore from a backup to a new table bigtable.tables.create, bigtable.backups.restore Get an operation bigtable.instances.get List operations bigtable.instances.get Best practices Before you create a backup strategy, consider the following best practices.
- Restore from a standard or hot backup to a new table Any instance Any Bigtable region Any project Copy a backup 1, 2 Any instance Any Bigtable region Any project See Manage backups for step-by-step instructions on these actions as well as operations such as updating and deleting backups.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples : 36h or 89d If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a backup from the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --table= TABLE ID \ --async \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD The --async flag is optional.
- Optional: To enable automated backup for a table and set a retention period that is different from the default of seven days, use the --automated-backup-retention-period flag instead of the --enable-automated-backup flag: gcloud bigtable tables update TABLE ID \ --instance= INSTANCE ID \ --automated-backup-retention-period= RETENTION PERIOD Replace RETENTION PERIOD with a value of at least 3 days and up to 90 days, expressed as a number with a unit of m , h , or d (minutes, hours, or days), such as 15d for 15 days.
- Under Configure automated backup , in the Retention period field, enter an integer from 3 to 90 to specify the number of days that Bigtable should retain backups after the change is saved.
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the source instance that contains the backup, to verify that the backup that you want to copy exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of backups in the destination instance, so you can choose an ID for the copy that is not already in use. gcloud bigtable backups list --instances= DESTINATION INSTANCE Run the gcloud bigtable instances backups copy command to create the backup copy. gcloud bigtable backups copy \ --source-project= PROJECT ID SOURCE \ --source-instance= INSTANCE ID SOURCE \ --source-cluster= CLUSTER ID SOURCE \ --source-backup= BACKUP ID SOURCE \ --destination-project= PROJECT ID DESTINATION \ --destination-instance= INSTANCE ID DESTINATION \ --destination-cluster= CLUSTER ID DESTINATION \ --destination-backup= BACKUP ID DESTINATION \ Append the command with one of the following: --retention-period = RETENTION PERIOD : Retention period for the backup copy.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/list_tables)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Change stream data older than the retention period will not be returned when reading the change stream from the table.
- If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore. changeStreamConfig object ( ChangeStreamConfig ) If specified, enable the change stream on this table.
- ChangeStreamConfig JSON representation { "retentionPeriod" : string } Fields retentionPeriod string ( Duration format) How long the change stream should be retained.
- AutomatedBackupPolicy JSON representation { "retentionPeriod" : string , "frequency" : string } Fields retentionPeriod string ( Duration format) Required.

