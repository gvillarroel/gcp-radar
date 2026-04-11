---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.200Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Oracle database restore to any target"
feature_slug: "oracle-database-restore-to-any-target"
latest_feature_date: "2024-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "target"
  - "any"
  - "database"
  - "restore"
  - "oracle"
  - "added"
  - "for"
  - "to"
---

# Oracle database restore to any target

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added support for restoring Oracle databases to any target.

## Extended Definition

Added support for restoring Oracle databases to any target.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- For Oracle databases with TDE, wallet files from the source backup host must be available to the target host of any Application Aware mounts.
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Bring Backup and DR protected ASM diskgroups back online after reboot of a target DB server After any database server reboot where Backup and DR copy is mounted, or Backup and DR backups are in progress for the database at the time of reboot/crash, follow these steps to get the Backup and DR disk group mount back: Check that the target database server is back up, and that ASM and RAC system are also up.
- If the Oracle wallet files were captured during Backup and DR Service backup by setting the Oracle Configuration File Location advanced setting, the wallet files can be retrieved with the following steps: Do a standard mount of the database to the target host.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Restore (Mount) Restore (Mount) Mounts an image of a database in place of its original source database, to prepare for a subsequent restore (migrate).
- Oracle ASM Rebalance Restore (ASM switch) Restore (ASM Rebalance) ASM Switch mounts an Oracle database in place of its original source database.
- Reprovision reprovision Takes an existing mount of a database application and refreshes it to a different point in time by performing an unmount delete and subsequent mount of the new image, defaulting to all the same options used in the previous mount.
- For example, you might need to manually perform log replication if the log for a database image did not properly replicate to the backup/recovery appliance or if there is no log for the database image on the backup/recovery appliance.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- January 24, 2025 Fixed Fixes for Oracle databases backed up to OnVault and backup vault Hosts from both source and remote backup appliances are now listed in the restore page.
- Oracle: Resolved a race condition that caused duplicate daily backups and corrected initialization parameter mapping for restores to new targets.
- A Replace Original Application Identity option has been added for Oracle traditional restore functionality.
- Feature Backup and DR service now supports restoring Oracle database to any target.

