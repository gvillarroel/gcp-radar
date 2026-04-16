---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.864Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Continuous backup and recovery in AlloyDB"
feature_slug: "continuous-backup-and-recovery-in-alloydb"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup"
keywords:
  - "point-in-time restore"
  - "continuous backup and restore"
  - "continuous recovery mode"
  - "backup chain recovery"
  - "continuous backup and recovery"
  - "continuous recovery"
  - "recovery retention"
  - "continuous backup"
---

# Continuous backup and recovery in AlloyDB

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now supports continuous backup and recovery capabilities.

## Extended Definition

AlloyDB now supports continuous backup and recovery capabilities.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup)

## Supporting Pages

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After configuring the plan, it might take up to 24 hours for continuous backup and recovery to take a backup and enable its continuous recovery capability.
- To configure continuous backup and recovery on a cluster, use the gcloud alloydb clusters update command. gcloud alloydb clusters update CLUSTER ID \ --continuous-backup-recovery-window-days = WINDOW LENGTH \ --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : The ID of the cluster.
- Click Update . gcloud To disable continuous backup and recovery on a cluster, use the gcloud alloydb clusters update command. gcloud alloydb clusters update CLUSTER ID \ --no-enable-continuous-backup --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster.
- The value of this argument defines both of the following aspects of continuous backup and recovery: The maximum distance into the past, relative to the present, that you can perform a point-in-time recovery based on continuous backups.

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: N/A

### "Class AutomatedBackupPolicy (0.7.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy)
- Source ID: `site-python-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Class Backup (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.Backup)
- Source ID: `site-python-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

