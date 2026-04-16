---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.892Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB continuous backup and recovery"
feature_slug: "alloydb-continuous-backup-and-recovery"
latest_feature_date: "2023-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "restore to any point in time"
  - "recovery window"
  - "point-in-time recovery"
  - "Continuous Backup and Recovery"
  - "continuous backup and recovery"
  - "PITR"
  - "continuous backup"
---

# AlloyDB continuous backup and recovery

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB continuous backup and recovery reached general availability; AlloyDB Continuous Backup and Recovery enables point-in-time restoration from any moment within a configurable window to protect clusters from data-loss events.

## Extended Definition

AlloyDB continuous backup and recovery reached general availability; AlloyDB Continuous Backup and Recovery enables point-in-time restoration from any moment within a configurable window to protect clusters from data-loss events.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The value of this argument defines both of the following aspects of continuous backup and recovery: The maximum distance into the past, relative to the present, that you can perform a point-in-time recovery based on continuous backups.
- The value of this argument defines both of the following aspects of continuous backup and recovery: The maximum distance into the past, relative to the present, that you can perform a point-in-time recovery based on continuous backups.
- Disable continuous backup and recovery When you disable continuous backup, point-in-time recovery becomes unavailable for your cluster.
- WINDOW LENGTH : The length of time, in days, of this cluster's continuous backup and recovery window.

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: N/A

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AlloyDB Provides continuous backup and recovery by default.
- Nearly all Data Cloud products provide features for data recovery, either through traditional backups, point-in-time recovery (PITR), or data snapshots.
- It also supports Point-in-Time Recovery (PITR).
- This enables PITR with microsecond granularity, allowing you to restore a cluster to any time in your retention window.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window.
- After a cluster has had continuous backups enabled for the duration of its recovery window, the earliest restorable time becomes "now minus the recovery window".
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . backupPlanAssociation string The BackupPlanAssociation resource that was used to enable BackupDR protection for this cluster. dataSource string The DataSource resource that represents the cluster in BackupDR. continuousBackupPreviouslyEnabled boolean Whether continuous backup was previously enabled prior to enabling BackupDR protection for this cluster. continuousBackupPreviouslyEnabledTime string ( Timestamp format) The time when continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . continuousBackupPreviousRecoveryWindowDays integer The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster. automatedBackupPreviouslyEnabled boolean Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster. logRetentionPeriod string ( Duration format) The retention period for logs generated by BackupDR for this cluster.

