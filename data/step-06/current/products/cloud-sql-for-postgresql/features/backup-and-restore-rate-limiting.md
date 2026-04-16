---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.806Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Backup and restore rate limiting"
feature_slug: "backup-and-restore-rate-limiting"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/quotas"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore"
keywords:
  - "throughput"
  - "limiting"
  - "rate"
  - "limits"
  - "restore"
  - "disk"
  - "backup"
---

# Backup and restore rate limiting

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL limits backup and restore throughput on the data disk.

## Extended Definition

Cloud SQL limits backup and restore throughput on the data disk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)

## Supporting Pages

### Quotas and limits \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fixed limits IOPS IOPS are the number of input/output operations (or read/write) operations that your disk can process per second.
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.
- RestoreBackup SqlInstancesService.
- You can find the connection limits for your instance by connecting to your database and running this command: SELECT FROM pg settings WHERE name = 'max connections'; Note: To determine the maximum value that you can set for this flag, you must first calculate the number of backend connections that are already in use.

### "Restore an instance overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For PITR write-ahead logs that are stored on disk , that are being switched to Cloud Storage, or that are already switched to Cloud Storage, Cloud SQL retains the logs for the minimum value set for one of the following configurations: The transactionLogRetentionDays backup configuration setting The expire logs days or the binlog expire logs seconds flag Cloud SQL doesn't set any values for these flags if the write-ahead logs are stored on disk, are being switched to Cloud Storage, or have already been switched to Cloud Storage.
- When you restore an instance using a backup, you can do the following: Restore to a new instance Restore to an existing instance Restore to an instance in another project or region In the event of an outage, you can still retrieve a list of backups in a particular project to restore from.
- What's next Perform a restore from a backup Use point-in-time recovery (PITR) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Requirements for restoring to a new instance When you restore your instance to a new instance, note the following requirements: The target instance must have the same database version as the instance from which the backup was taken.

### "Choose your backup option \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Backup rate limitations Cloud SQL limits the rate for backup operations on the data disk.
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- What's next Cloud SQL backups overview Restore from a backup Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The plan containing your backup and restore settings is stored in the centralized backup project, and any backups created when the plan is active on your Cloud SQL instance are stored in the backup vault in the backups project.

