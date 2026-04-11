---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.209Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "PostgreSQL backup image restore to alternate location"
feature_slug: "postgresql-backup-image-restore-to-alternate-location"
latest_feature_date: "2023-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "alternate"
  - "location"
  - "postgresql"
  - "image"
  - "restore"
  - "backup"
  - "and"
  - "to"
---

# PostgreSQL backup image restore to alternate location

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR added support for restoring PostgreSQL database backup images to an alternate location.

## Extended Definition

Backup and DR added support for restoring PostgreSQL database backup images to an alternate location.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- After Backup and DR creates a snapshot to back up the current state of some or all Persistent Disks attached to an instance, you can use the backup image to either: Mount the image to create a new instance .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added support to restore PostgreSQL database backup images to an alternate location.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- UI fixes for point-in-time recovery from imported images: Imported images appear in the remote snapshot lane in access view, populating correct recovery range for imported images, populating recovery time in restore operation request, adding archive log mount point location in restore page, disabling Replace Original Application Identity for remote images, mount page waiting indefinitely for imported image, adding import PD snapshot option in application page, enabling host selection drop-downs for replication cluster etc.
- January 26, 2026 Fixed Backup/Recovery appliance non-disruptive update: Database Restore & Management: Resolved SAP HANA differential restore failures and Oracle "Mount and Migrate" disk eligibility issues, while enhancing Db2 log purging and HANA /etc/fstab cleanup.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.
- Run on-demand database log replication In some cases, you might need to manually initiate log replication to the remote backup/recovery appliance for a database image.
- Restore restore Replaces production data with a selected backup image.

