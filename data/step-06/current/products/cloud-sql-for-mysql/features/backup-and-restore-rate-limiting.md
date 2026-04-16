---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.964Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Backup and restore rate limiting"
feature_slug: "backup-and-restore-rate-limiting"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
keywords:
  - "backup"
  - "restore"
  - "rate"
  - "limiting"
  - "sql"
  - "limits"
  - "operations"
  - "disk"
---

# Backup and restore rate limiting

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL limits the rate of backup and restore operations on the data disk.

## Extended Definition

Cloud SQL limits the rate of backup and restore operations on the data disk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)

## Supporting Pages

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each backup (Backup1, Backup2, and Backup3) has its own bucket of tokens for restore operations that target different instances in Project 1 in Region A (Bucket11A, Bucket21A, and Bucket31A).
- Restore rate limitations You are allowed a maximum of three restore operations every 30 minutes per instance per region per project.
- This snapshot is later converted to a standard backup in the background to support restore operations.
- Similarly, Backup3 has two buckets for restore operations in Region A.

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fixed limits IOPS IOPS are the number of input/output operations (or read/write) operations that your disk can process per second.
- SqlBackupRunsService.Get SqlDatabasesService.Get SqlInstancesService.Get SqlOperationsService.Get SqlSslCertsService.Get SqlUsersService.Get 500 List sqladmin.googleapis.com/list The number of requests that are made per minute per user per region to use the APIs in this category.
- Note: Creating or increasing storage capacity to 64 TB might increase latency of common operations, such as backups, dependent on your workload.
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-5`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backup rate limitations Cloud SQL limits the rate for backup operations on the data disk.
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- What's next Cloud SQL backups overview Restore from a backup Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The plan containing your backup and restore settings is stored in the centralized backup project, and any backups created when the plan is active on your Cloud SQL instance are stored in the backup vault in the backups project.

