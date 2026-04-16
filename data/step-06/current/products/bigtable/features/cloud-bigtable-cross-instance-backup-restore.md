---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.029Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable cross-instance backup restore"
feature_slug: "cloud-bigtable-cross-instance-backup-restore"
latest_feature_date: "2021-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users"
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
keywords:
  - "different"
  - "restore"
  - "cross"
  - "backup"
  - "instance"
  - "generally"
---

# Cloud Bigtable cross-instance backup restore

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Restore from a Cloud Bigtable backup to a different instance is now generally available.

## Extended Definition

Restore from a Cloud Bigtable backup to a different instance is now generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)

## Supporting Pages

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you restore to a different instance than where the backup was created, and the backup's instance and the destination instance don't have at least one cluster in the same region, you are charged a one-time cost for the initial data copy to the destination cluster at the standard network rates .
- If you want to restore from a CMEK-protected backup to a different instance, the destination instance must be CMEK-protected as well but does not need to have the same CMEK configuration as the source instance.
- If you restore to a different instance from where the backup was created, the restore operation takes longer than if you restore to the same instance.
- If you plan to restore to a different instance, create the destination instance before you initiate the backup restore operation.

### Bigtable for Aerospike users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Aerospike Bigtable No directly corresponding item. instance : a managed group of clusters in different Google Cloud zones or regions between which replication and connection routing occur. cluster : an Aerospike deployment consisting of a collection of nodes. cluster : a group of nodes in the same geographic Google Cloud zones. node : a server providing compute and owning its storage. node : a server providing compute only.
- Backup management can also be handled through the Aerospike Backup Service or Aerospike Kubernetes Operator, both of which use asbackup and asrestore internally, and provide scheduling and multi-process coordination.
- Backup and restore Aerospike provides external backup and restore tools called asbackup and asrestore that create logical backups client side and are analogous to performing a scan.
- Writes are performed on a single cluster and become eventually consistent across other clusters in the instance.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't know the instance ID, use the bigtable instances list command to view a list of your project's instances: gcloud bigtable instances list View the list of backups for the instance that contains the backup, to verify the backup exists. gcloud bigtable backups list --instance= INSTANCE ID SOURCE \ --cluster= CLUSTER ID SOURCE View the list of tables in the destination instance, so you can choose an ID for the new table that is not already in use. gcloud bigtable instances tables list --instances= INSTANCE ID DESTINATION Run the gcloud bigtable instances tables restore command to restore from the backup to a new table. gcloud bigtable instances tables restore \ --source=projects/ PROJECT ID SOURCE /instances/ INSTANCE ID SOURCE /clusters/ CLUSTER ID /backups/ BACKUP ID \ --async \ --destination= TABLE ID NEW \ --destination-instance= INSTANCE ID DESTINATION \ --project= PROJECT ID DESTINATION The --async flag is optional.
- Optional: To enable automated backup for a table and set a retention period that is different from the default of seven days, use the --automated-backup-retention-period flag instead of the --enable-automated-backup flag: gcloud bigtable tables update TABLE ID \ --instance= INSTANCE ID \ --automated-backup-retention-period= RETENTION PERIOD Replace RETENTION PERIOD with a value of at least 3 days and up to 90 days, expressed as a number with a unit of m , h , or d (minutes, hours, or days), such as 15d for 15 days.
- When the status column for all clusters shows Ready the table has been restored and replicated to all clusters in the instance. gcloud For all commands, substitute actual values for the following: PROJECT ID SOURCE : The ID of the project containing the backup to be restored from.
- The following is an example of an operation ID: instances/instance-name/tables/table-name/locations/us-east1-b/operations/917168358249360635 After you run a command to create a backup or restore to a new table using the option --async , the terminal displays the operation ID.

