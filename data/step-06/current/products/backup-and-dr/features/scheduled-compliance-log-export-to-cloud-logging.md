---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.203Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Scheduled compliance log export to Cloud Logging"
feature_slug: "scheduled-compliance-log-export-to-cloud-logging"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
keywords:
  - "export"
  - "compliance"
  - "scheduled"
  - "log"
  - "logging"
  - "backup"
  - "and"
  - "to"
---

# Scheduled compliance log export to Cloud Logging

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added support for daily scheduled compliance logs in Cloud Logging.

## Extended Definition

Backup and DR Service added support for daily scheduled compliance logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- About on-demand jobs Most jobs run on a schedule according to their backup plans, but for upcoming maintenance windows, software upgrades, and for the first snapshot of a new application, you want to ensure that you have a successful copy of the data created before you start your scheduled maintenance task.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.
- Run on-demand database log replication In some cases, you might need to manually initiate log replication to the remote backup/recovery appliance for a database image.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR Service added support to view daily scheduled compliance logs in Cloud Logging.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Feature This release introduces enhanced logging and alerting capabilities for backup/recovery appliances , enabling proactive monitoring of their health and status.
- Feature Backup and DR Service has added a new reporting system based on the built-in Google Cloud services: Cloud Monitoring, Cloud Logging, and BigQuery.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Agent copies changed blocks to backup/recovery appliance, which then deletes the snapshot and catalogs the backup.
- You can find additional information in the following pages: Backup and DR for file systems Manage hosts and their connected applications Configure application details and settings to protect file system data Apply a backup plan to protect a file system Restore a file system to the source Mount a file system or file share Mount and migrate a file system for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service lets you capture data from production SMB, NFS, and Filestore file systems, manage it in the most efficient way possible, and use virtual copies of the data for business requirements like backup, test and development, analytics, and AI.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Filestore and file systems on self-managed storage Stay organized with collections Save and categorize content based on your preferences.

