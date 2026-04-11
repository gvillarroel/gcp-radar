---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.203Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Scheduled compliance report delivery to BigQuery"
feature_slug: "scheduled-compliance-report-delivery-to-bigquery"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "compliance"
  - "delivery"
  - "scheduled"
  - "report"
  - "backup"
  - "and"
  - "to"
  - "dr"
---

# Scheduled compliance report delivery to BigQuery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added support for daily scheduled compliance reports in BigQuery.

## Extended Definition

Backup and DR Service added support for daily scheduled compliance reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- About on-demand jobs Most jobs run on a schedule according to their backup plans, but for upcoming maintenance windows, software upgrades, and for the first snapshot of a new application, you want to ensure that you have a successful copy of the data created before you start your scheduled maintenance task.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can find additional information in the following pages: Backup and DR for file systems Manage hosts and their connected applications Configure application details and settings to protect file system data Apply a backup plan to protect a file system Restore a file system to the source Mount a file system or file share Mount and migrate a file system for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service lets you capture data from production SMB, NFS, and Filestore file systems, manage it in the most efficient way possible, and use virtual copies of the data for business requirements like backup, test and development, analytics, and AI.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Filestore and file systems on self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- What's next Manage hosts and their connected applications Other documentation for Backup and DR for file systems This page is one in a series of pages specific to protecting and recovering filesystems with Backup and DR Service.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2024 Feature Backup and DR Service added support to view daily scheduled compliance reports in BigQuery.
- Feature Backup and DR Service added support to view daily scheduled compliance logs in Cloud Logging.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source project deletion and source cluster deletion, PiTR using logs and centralized monitoring and reporting.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source instance deletion and centralized monitoring and reporting.

