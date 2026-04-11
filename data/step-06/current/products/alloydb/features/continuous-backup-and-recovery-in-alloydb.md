---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.623Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Continuous backup and recovery in AlloyDB"
feature_slug: "continuous-backup-and-recovery-in-alloydb"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
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
Coverage: LOW

## Step 02 Summary

AlloyDB now supports continuous backup and recovery capabilities.

## Extended Definition

AlloyDB now supports continuous backup and recovery capabilities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: STRONG
- Re-rank rationale: It provides detailed setup and adjustment steps for AlloyDB continuous backup and recovery, including CLI/console configuration and recovery implications.

Evidence snippets:
- After configuring the plan, it might take up to 24 hours for continuous backup and recovery to take a backup and enable its continuous recovery capability.
- To configure continuous backup and recovery on a cluster, use the gcloud alloydb clusters update command. gcloud alloydb clusters update CLUSTER ID \ --continuous-backup-recovery-window-days = WINDOW LENGTH \ --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : The ID of the cluster.
- Click Update . gcloud To disable continuous backup and recovery on a cluster, use the gcloud alloydb clusters update command. gcloud alloydb clusters update CLUSTER ID \ --no-enable-continuous-backup --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster.
- The value of this argument defines both of the following aspects of continuous backup and recovery: The maximum distance into the past, relative to the present, that you can perform a point-in-time recovery based on continuous backups.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- March 13, 2024 Feature AlloyDB now supports continuous backup and recovery, and scheduled backups on secondary clusters.
- June 01, 2023 Feature Continuous backup and recovery is generally available ( GA ).
- February 16, 2023 Feature Continuous backup and recovery is in Preview.
- December 18, 2023 Feature Automated and continuous backups are now incremental backups.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . backupPlanAssociation string The BackupPlanAssociation resource that was used to enable BackupDR protection for this cluster. dataSource string The DataSource resource that represents the cluster in BackupDR. continuousBackupPreviouslyEnabled boolean Whether continuous backup was previously enabled prior to enabling BackupDR protection for this cluster. continuousBackupPreviouslyEnabledTime string ( Timestamp format) The time when continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . continuousBackupPreviousRecoveryWindowDays integer The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster. automatedBackupPreviouslyEnabled boolean Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster. logRetentionPeriod string ( Duration format) The retention period for logs generated by BackupDR for this cluster.
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window.

