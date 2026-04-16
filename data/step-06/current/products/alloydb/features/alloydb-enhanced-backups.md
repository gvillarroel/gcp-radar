---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.813Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB enhanced backups"
feature_slug: "alloydb-enhanced-backups"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsPager"
keywords:
  - "project-level tiered backup tabs"
  - "backup tier selection"
  - "delete enhanced backups"
  - "Enhanced tier"
  - "tiered backups"
  - "enhanced backups"
  - "Enhanced backup"
---

# AlloyDB enhanced backups

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB enhanced backups are generally available, adding support for selecting the Enhanced tier, using project-level tiered backup tabs, and deleting enhanced backups; AlloyDB enhanced backups are generally available, adding support for selecting the Enhanced tier, using project-level tiered backup tabs, and deleting enhanced backups.

## Extended Definition

AlloyDB enhanced backups are generally available, adding support for selecting the Enhanced tier, using project-level tiered backup tabs, and deleting enhanced backups; AlloyDB enhanced backups are generally available, adding support for selecting the Enhanced tier, using project-level tiered backup tabs, and deleting enhanced backups.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsPager](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsPager)

## Supporting Pages

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can delete enhanced backups in the following scenarios: Expired backups in a vault: if a backup has passed its scheduled retention time —for example, after 14 days for default policies—it's generally available for manual deletion.
- Enable the Backup and DR API To use enhanced backups with your AlloyDB clusters, you must first enable the Backup and DR API: Enable the Backup and DR API Required permissions To configure enhanced backups for your AlloyDB clusters, you need the alloydb.backupDrAdmin role or the following permissions: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForAlloydbCluster backupdr.backupPlanAssociations.fetchForAlloydbCluster backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.getForAlloydbCluster backupdr.backupPlanAssociations.triggerBackupForAlloydbCluster backupdr.backupPlanAssociations.deleteForAlloydbCluster backupdr.backupPlans.useForAlloydbCluster backupdr.bvdataSources.get backupdr.bvdataSources.list Note: If your backup vault is in a different project than your AlloyDB cluster, you need to grant the backupdr.alloydbOperator role to the vault service agent.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate the new backup plan with your cluster, follow these steps: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID \ Replace the following: BPA ID : the backup plan association ID.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class ListBackupsAsyncPager (0.7.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class ListBackupsPager (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsPager](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers.ListBackupsPager)
- Source ID: `site-python-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

