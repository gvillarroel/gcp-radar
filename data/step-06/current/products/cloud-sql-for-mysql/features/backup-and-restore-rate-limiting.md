---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.919Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Backup and restore rate limiting"
feature_slug: "backup-and-restore-rate-limiting"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
keywords:
  - "backup"
  - "and"
  - "restore"
  - "rate"
  - "limiting"
  - "sql"
  - "limits"
  - "the"
---

# Backup and restore rate limiting

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL limits the rate of backup and restore operations on the data disk.

## Extended Definition

Cloud SQL limits the rate of backup and restore operations on the data disk.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Backups versus exports Backups are managed by Cloud SQL according to retention policies, and are stored separately from the Cloud SQL instance.
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- Restore from a backup Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you leave the field empty, then Cloud SQL takes the final backup configuration set in instance settings to take a final backup and define its retention.

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- What's next Perform a restore from a backup Use point-in-time recovery (PITR) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For instances that store transaction logs used for PITR on disk, Cloud SQL purges data from the disk daily to meet the transactionLogRetentionDays PITR setting, as described in Automatic backup and transaction log retention .
- These logs are stored for up to 35 days for Cloud SQL Enterprise Plus edition and 7 days for Cloud SQL Enterprise edition and generate no additional cost per instance.
- Cloud SQL always sets the storage capacity of the target instance to the maximum value of the size of both the configured disk and the backup disk.

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Cloud SQL backups overview Restore from a backup Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The plan containing your backup and restore settings is stored in the centralized backup project, and any backups created when the plan is active on your Cloud SQL instance are stored in the backup vault in the backups project.
- Roles and responsibilities are managed by the Backup and DR Admin , and are separate from Cloud SQL Admin roles and responsibilities.
- When you attach a backup plan to a Cloud SQL instance, the existing backup and restore settings are overwritten by the backup plan.

