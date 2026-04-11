---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.196Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Unprotected resource reports in BigQuery"
feature_slug: "unprotected-resource-reports-in-bigquery"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "unprotected"
  - "resource"
  - "reports"
  - "backup"
  - "now"
  - "and"
  - "in"
  - "dr"
---

# Unprotected resource reports in BigQuery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports unprotected resource reports in BigQuery.

## Extended Definition

Backup and DR now supports unprotected resource reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- January 07, 2026 Feature You can now use cost reports to view resource-specific Backup and DR billing costs to gain granular insights into service spending and to take actions to optimize resource allocation.
- September 30, 2024 Feature Backup and DR Service added support to view unprotected resource reports in BigQuery.
- This release includes fixes for the following security vulnerabilities: CVE-2021-35937 CVE-2021-35939 CVE-2022-48560 CVE-2022-48564 CVE-2023-1667 CVE-2023-7104 CVE-2023-27043 CVE-2023-28484 CVE-2023-28486 CVE-2023-28487 CVE-2023-29469 CVE-2023-38408 CVE-2023-39615 CVE-2023-42465 CVE-2023-48795 April 22, 2024 Feature Backup and DR Service now support viewing Backup and DR Service pre built reports in Looker Studio.
- Use cost reports to view resource specific Backup & DR Billing costs to gain granular insights into service spend and take actions to optimize resource allocation.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- After Backup and DR creates a snapshot to back up the current state of some or all Persistent Disks attached to an instance, you can use the backup image to either: Mount the image to create a new instance .

