---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.030Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable integrated backups"
feature_slug: "cloud-bigtable-integrated-backups"
latest_feature_date: "2020-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "fully"
  - "integrated"
  - "backups"
  - "backup"
  - "generally"
  - "available"
  - "became"
---

# Cloud Bigtable integrated backups

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Fully integrated backup support for Cloud Bigtable became generally available for creating and restoring table backups.

## Extended Definition

Fully integrated backup support for Cloud Bigtable became generally available for creating and restoring table backups.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Features Fully integrated : Backups are handled entirely by the Bigtable service, with no need to import or export.
- Bigtable backups contain only Bigtable data and are not integrated with or related to backups for other Google services.
- Working with Bigtable backups The following actions are available for Bigtable backups.
- Action Required IAM permission Create a backup bigtable.tables.readRows, bigtable.backups.create Get a backup bigtable.backups.get List backups bigtable.backups.list Delete a backup bigtable.backups.delete Update a backup bigtable.backups.update Copy a backup bigtable.backups.read, bigtable.backups.create Restore from a backup to a new table bigtable.tables.create, bigtable.backups.restore Get an operation bigtable.instances.get List operations bigtable.instances.get Best practices Before you create a backup strategy, consider the following best practices.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the gcloud bigtable instances backups update command to add a new expiration date or retention period or to convert a hot backup to a standard backup. gcloud bigtable backups update BACKUP ID \ --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD --hot-to-standard-time= HOT TO STANDARD TIME Run the gcloud bigtable instances backups describe command to verify that you have successfully updated the expiration. gcloud bigtable backups describe BACKUP ID \ --instance= INSTANCE ID \ --cluster= CLUSTER ID Delete a backup If you want to delete a backup after creating a copy of it, check the status to verify that the copy operation is complete.
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the source instance that contains the backup, to verify that the backup that you want to copy exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of backups in the destination instance, so you can choose an ID for the copy that is not already in use. gcloud bigtable backups list --instances= DESTINATION INSTANCE Run the gcloud bigtable instances backups copy command to create the backup copy. gcloud bigtable backups copy \ --source-project= PROJECT ID SOURCE \ --source-instance= INSTANCE ID SOURCE \ --source-cluster= CLUSTER ID SOURCE \ --source-backup= BACKUP ID SOURCE \ --destination-project= PROJECT ID DESTINATION \ --destination-instance= INSTANCE ID DESTINATION \ --destination-cluster= CLUSTER ID DESTINATION \ --destination-backup= BACKUP ID DESTINATION \ Append the command with one of the following: --retention-period = RETENTION PERIOD : Retention period for the backup copy.
- Example : +P30D for 30 days If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a hot backup of the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID -- instance = INSTANCE ID \ -- cluster = CLUSTER ID \ -- table = TABLE ID \ -- async \ -- expiration - date = EXPIRATION DATE \ -- retention - period = RETENTION PERIOD \ -- backup - type = HOT \ -- hot - to - standard - time = HOT TO STANDARD TIME The --async flag is optional.
- Examples : 36h or 89d If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the table you want to back up, so that you can choose a backup ID that is not already in use on the intended cluster. gcloud bigtable backups list --instance= INSTANCE ID \ --cluster= CLUSTER ID View the list of tables to confirm the ID of the table you want to back up. gcloud bigtable instances tables list --instances= INSTANCE ID Run the gcloud bigtable instances backups create command to create a backup from the table, providing either an expiration date or a retention period of up to 90 days. gcloud bigtable backups create BACKUP ID --instance= INSTANCE ID \ --cluster= CLUSTER ID \ --table= TABLE ID \ --async \ --expiration-date= EXPIRATION DATE \ --retention-period= RETENTION PERIOD The --async flag is optional.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable's Identity and Access Management (IAM) controls are fully integrated with Google Cloud, and tables can also be used as an external data source from BigQuery.
- IAM and security In Bigtable, authorization is fully integrated into Google Cloud's IAM framework and requires minimal setup and maintenance.
- Compared to Bigtable backups, exports take longer to execute and incur extra compute costs because the exports use Dataflow.
- Backup and restore Bigtable provides two methods to cover common backup needs: Bigtable backups and managed data exports.

