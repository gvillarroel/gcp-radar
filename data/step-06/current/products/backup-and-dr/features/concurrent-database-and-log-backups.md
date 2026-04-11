---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.212Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Concurrent database and log backups"
feature_slug: "concurrent-database-and-log-backups"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "concurrent"
  - "log"
  - "database"
  - "backups"
  - "backup"
  - "added"
  - "and"
  - "dr"
---

# Concurrent database and log backups

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added support for running database backups and log backups concurrently.

## Extended Definition

Backup and DR Service added support for running database backups and log backups concurrently.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR Service now supports concurrent database and log backups.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source project deletion and source cluster deletion, PiTR using logs and centralized monitoring and reporting.
- Feature Backup and DR Service has added a new reporting system based on the built-in Google Cloud services: Cloud Monitoring, Cloud Logging, and BigQuery.
- An issue in which persistent disk database snapshot images were failing to import log backups, and the recovery range was missing on imported backups.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bring Backup and DR protected ASM diskgroups back online after reboot of a target DB server After any database server reboot where Backup and DR copy is mounted, or Backup and DR backups are in progress for the database at the time of reboot/crash, follow these steps to get the Backup and DR disk group mount back: Check that the target database server is back up, and that ASM and RAC system are also up.
- Reason If legacy backup jobs and Backup and DR Service database backup jobs run concurrently, it may result in a serious performance impact on the database server leading to instability and possibly an outage.
- RMAN metadata conflict with legacy backups that make Backup and DR Service backups obsolete By default, the parameter DO NOT UNCATALOG in Backup and DR Service application details & settings is set to No .
- Best practice Backup and DR Service database backups are incremental-forever.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resize database log's staging disk The physical space required to accommodate backups of a database's logs is automatically managed by Backup and DR.
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups What's Next Prepare SQL server databases for Backup and DR Service .
- Reason If legacy backup jobs and Backup and DR jobs run concurrently, it may result a serious performance impact on the database server leading to instability and possibly an outage.
- If Backup and DR's database and log capture technology is enabled on the backup plan policy, then all databases in that group can be recovered to the same point-in-time.

