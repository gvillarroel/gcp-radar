---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.198Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Mounted image reports in BigQuery"
feature_slug: "mounted-image-reports-in-bigquery"
latest_feature_date: "2024-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "mounted"
  - "image"
  - "reports"
  - "view"
  - "added"
  - "in"
  - "to"
---

# Mounted image reports in BigQuery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added support to view mounted image reports in BigQuery.

## Extended Definition

Added support to view mounted image reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Unmount Delete unmount delete Unmounts an image previously mounted to a host and discards all changes made in that mount.
- Unmount unmount Unmounts an image previously mounted to a host, but keeps the image available for later mounting.
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Reprovision reprovision Takes an existing mount of a database application and refreshes it to a different point in time by performing an unmount delete and subsequent mount of the new image, defaulting to all the same options used in the previous mount.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- September 02, 2024 Feature Backup and DR Service added support to view mounted image reports in BigQuery.
- Feature Backup and DR Service added support to view mounted image logs in Cloud Logging.
- June 11, 2024 Feature Backup and DR Service added support to view storage resource utilization reports in BigQuery.
- March 25, 2024 Feature Backup and DR Service added support to view daily scheduled compliance reports in BigQuery.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After Backup and DR creates a snapshot to back up the current state of some or all Persistent Disks attached to an instance, you can use the backup image to either: Mount the image to create a new instance .
- Note that snapshots are different from custom images and machine images , which are useful for creating instance boot disks.
- If an additional disk is added to the instance, this disk is automatically included in the next snapshot of the instance.

