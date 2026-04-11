---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.190Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Scheduled non-disruptive patch updates for backup/recovery appliances"
feature_slug: "scheduled-non-disruptive-patch-updates-for-backup-recovery-appliances"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
keywords:
  - "disruptive"
  - "non"
  - "patch"
  - "scheduled"
  - "updates"
  - "recovery"
  - "backup"
  - "for"
---

# Scheduled non-disruptive patch updates for backup/recovery appliances

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports a default update window for non-disruptive appliance patching, pre-update notifications, and optional rescheduling of those updates.

## Extended Definition

Backup and DR now supports a default update window for non-disruptive appliance patching, pre-update notifications, and optional rescheduling of those updates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Feature For updates to the backup appliance, a default window now exists to schedule non disruptive patch updates. (Disruptive updates do not get the default window.) You will now receive notifications 2 weeks , 1 week and 24 hours before the scheduled update after which the appliance will be automatically updated.
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- January 26, 2026 Fixed Backup/Recovery appliance non-disruptive update: Database Restore & Management: Resolved SAP HANA differential restore failures and Oracle "Mount and Migrate" disk eligibility issues, while enhancing Db2 log purging and HANA /etc/fstab cleanup.
- December 22, 2025 Fixed Backup/Recovery appliance non-disruptive update: Resolved issues with Db2 migration scripts and various SAP HANA backup failures, including differential and log backups.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- For a log replication job to run, there must be a StreamSnap replication policy included in the template along with a resource profile that specifies a remote backup/recovery appliance, and at least one successful replication of the database must first be completed.
- Log replication uses StreamSnap technology to perform the replication between the local and remote backup/recovery appliances; log replication goes directly from the local snapshot pool to the snapshot pool on the remote appliance.
- Access SQL Server data For Microsoft SQL Server databases that use the full recovery model, Backup and DR can instantly present a copy of the database rolled forward to a specific point of time.
- For Microsoft SQL Server databases that use the basic recovery model, Backup and DR can instantly present any backup of the database that has not passed its retention period.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR capture of Exadata data and ExaCC The Backup and DR agent must be installed on the Exadata server to facilitate communication with the backup/recovery appliance and to invoke the RMAN API for database backup.
- Install the Backup and DR agent on each Exadata host under the user space to facilitate the communication with backup/recovery appliance and to invoke the RMAN API for database backup.
- The associated architecture provides application-consistent, incremental-forever backup to Google Cloud, as well as instant recovery and cloning for multi-TB Oracle databases.

