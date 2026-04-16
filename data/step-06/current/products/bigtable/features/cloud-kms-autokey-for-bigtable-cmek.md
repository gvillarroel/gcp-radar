---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.985Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud KMS Autokey for Bigtable CMEK"
feature_slug: "cloud-kms-autokey-for-bigtable-cmek"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
keywords:
  - "automate"
  - "autokey"
  - "creation"
  - "cmek"
---

# Cloud KMS Autokey for Bigtable CMEK

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud KMS Autokey can now automate creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters, and this support is generally available.

## Extended Definition

Cloud KMS Autokey can now automate creation and use of customer-managed encryption keys (CMEK) in Bigtable clusters, and this support is generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CMEK with Cloud KMS Autokey You can either create CMEKs manually to protect your Bigtable clusters or use Cloud KMS Autokey.
- With Autokey, key rings and keys are generated on demand to support resource creation in Bigtable.
- Some data is protected by Google default encryption at rest and not by the CMEK key: A subset of row keys that mark range boundaries and are used for routing Debugging data including core dumps and operational logs Data in transit or in memory A subset of timestamp values used for garbage collection Bigtable uses envelope encryption for data at rest.
- CMEK-protected Bigtable resources (instances, clusters, tables, or backups) tied to a key that has been made inaccessible as the result of a user-triggered action (such as disabling or destroying a key, or by revoking the Encrypter/Decrypter role) for more than 30 consecutive days are automatically deleted .

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Enable replication and automated backup to create daily backups in multiple regions, so that if a table becomes corrupted on one cluster, you have one or more backups that don't share storage on the corrupted cluster.
- If you want to restore from a CMEK-protected backup to a different instance, the destination instance must be CMEK-protected as well but does not need to have the same CMEK configuration as the source instance.
- CMEK When you create a backup in a cluster that is protected by a customer-managed encryption key (CMEK) , the backup is pinned to the primary version of the cluster's CMEK key at the time it is taken.
- Backups of replicated tables that are created as part of automated backup are not exact copies of each other, because backup times can vary from cluster to cluster.

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- To view backup creation events, enter the following in the Query field: resource.type="audited resource" resource.labels.service="bigtableadmin.googleapis.com" resource.labels.method="CreateAutomatedBackup" Click Run query .
- Optional: To enable automated backup for a table and set a retention period that is different from the default of seven days, use the --automated-backup-retention-period flag instead of the --enable-automated-backup flag: gcloud bigtable tables update TABLE ID \ --instance= INSTANCE ID \ --automated-backup-retention-period= RETENTION PERIOD Replace RETENTION PERIOD with a value of at least 3 days and up to 90 days, expressed as a number with a unit of m , h , or d (minutes, hours, or days), such as 15d for 15 days.
- The output looks similar to the following: automatedBackupPolicy : retentionPeriod : 3 d frequency : 24 h columnFamilies : my - family : {} createTime : '2023-02-07T20:10:55.613546Z' granularity : MILLIS name : projects /my-project/instances/my-instance/tables/ my - table updateTime : '2023-02-07T20:10:55.613546Z' Note the following: The automatedBackupPolicy field is absent when automated backup is not enabled for a table.
- Click Save . gcloud To modify a table's automated backup policy, use the gcloud bigtable tables update command with the --automated-backup-retention-period flag. gcloud bigtable tables update TABLE ID \ --instance= INSTANCE ID \ --automated-backup-retention-period=retention-period= RETENTION PERIOD Replace the following: TABLE ID : the ID of the table that has automated backup.

