---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.995Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable automated backup"
feature_slug: "bigtable-automated-backup"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/managing-tables"
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
keywords:
  - "disabling"
  - "automated"
  - "enabling"
  - "allows"
  - "backup"
  - "preview"
---

# Bigtable automated backup

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable automated backup preview now allows enabling and disabling automated backup from the Google Cloud console; Bigtable now supports creating daily backups by enabling automated backup in preview.

## Extended Definition

The Bigtable automated backup preview now allows enabling and disabling automated backup from the Google Cloud console; Bigtable now supports creating daily backups by enabling automated backup in preview.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)

## Supporting Pages

### Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples: 48h or 6d To let Bigtable create a daily backup of your table and retain each backup for the default retention period of seven days, use the --enable-automated-backup flag when you create your table. gcloud bigtable instances tables create TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --column-families = COLUMN-FAMILIES \ --enable-automated-backup To configure a different retention period, use the --automated-backup-retention-period flag instead of the --enable-automated-backup flag and provide a value up to 90 days, expressed as a number with a unit of m , h , or d (minutes, hours, or days), such as 15d for 15 days.
- If you have enabled automated backup while creating a table, then you can modify automated backup configuration for a table to enable or disable automated backup, or change the retention period to up to 90 days from the backup creation time.
- Enabling a change stream on an existing table Disabling a change stream Update the retention period for a change stream Delete a table Deleting a table also deletes all authorized views of the table.
- Optional: If you don't want Bigtable to create a daily backup of the table, clear the Enable automated backup checkbox.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about enabling automated backup when creating a table, see Create a table .
- Optional: To enable automated backup for a table and set a retention period that is different from the default of seven days, use the --automated-backup-retention-period flag instead of the --enable-automated-backup flag: gcloud bigtable tables update TABLE ID \ --instance= INSTANCE ID \ --automated-backup-retention-period= RETENTION PERIOD Replace RETENTION PERIOD with a value of at least 3 days and up to 90 days, expressed as a number with a unit of m , h , or d (minutes, hours, or days), such as 15d for 15 days.
- The output looks similar to the following: automatedBackupPolicy : retentionPeriod : 3 d frequency : 24 h columnFamilies : my - family : {} createTime : '2023-02-07T20:10:55.613546Z' granularity : MILLIS name : projects /my-project/instances/my-instance/tables/ my - table updateTime : '2023-02-07T20:10:55.613546Z' Note the following: The automatedBackupPolicy field is absent when automated backup is not enabled for a table.
- Click Save . gcloud To modify a table's automated backup policy, use the gcloud bigtable tables update command with the --automated-backup-retention-period flag. gcloud bigtable tables update TABLE ID \ --instance= INSTANCE ID \ --automated-backup-retention-period=retention-period= RETENTION PERIOD Replace the following: TABLE ID : the ID of the table that has automated backup.

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Enable replication and automated backup to create daily backups in multiple regions, so that if a table becomes corrupted on one cluster, you have one or more backups that don't share storage on the corrupted cluster.
- Backups of replicated tables that are created as part of automated backup are not exact copies of each other, because backup times can vary from cluster to cluster.
- You can set a custom retention period by passing in the --automated-backup-retention-period flag, which accepts a value from 3 days to 90 days.
- In replicated instances where automated backup is enabled, the storage costs might be higher because a backup is created on each cluster daily.

