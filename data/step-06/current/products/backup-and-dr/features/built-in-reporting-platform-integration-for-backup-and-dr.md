---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.205Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Built-in reporting platform integration for Backup and DR"
feature_slug: "built-in-reporting-platform-integration-for-backup-and-dr"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
keywords:
  - "platform"
  - "built"
  - "reporting"
  - "integration"
  - "backup"
  - "for"
  - "and"
  - "in"
---

# Built-in reporting platform integration for Backup and DR

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added a reporting system built on Cloud Monitoring, Cloud Logging, and BigQuery.

## Extended Definition

Backup and DR Service added a reporting system built on Cloud Monitoring, Cloud Logging, and BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Database Center is an AI-assisted dashboard that highlights fleet-wide data points.The integration is designed to provide Database Center users with a single, unified, and accurate view of the data protection posture for all databases protected by Backup and DR Service.This capability is available today, at no additional cost, for all Cloud SQL customers who have protected their databases through Backup and DR Service enhanced protection.
- This release includes fixes for the following security vulnerabilities: CVE-2021-35937 CVE-2021-35939 CVE-2022-48560 CVE-2022-48564 CVE-2023-1667 CVE-2023-7104 CVE-2023-27043 CVE-2023-28484 CVE-2023-28486 CVE-2023-28487 CVE-2023-29469 CVE-2023-38408 CVE-2023-39615 CVE-2023-42465 CVE-2023-48795 April 22, 2024 Feature Backup and DR Service now support viewing Backup and DR Service pre built reports in Looker Studio.
- Feature Backup and DR Service has added a new reporting system based on the built-in Google Cloud services: Cloud Monitoring, Cloud Logging, and BigQuery.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- You can find additional information in the following pages: Backup and DR for file systems Manage hosts and their connected applications Configure application details and settings to protect file system data Apply a backup plan to protect a file system Restore a file system to the source Mount a file system or file share Mount and migrate a file system for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service lets you capture data from production SMB, NFS, and Filestore file systems, manage it in the most efficient way possible, and use virtual copies of the data for business requirements like backup, test and development, analytics, and AI.
- What's next Manage hosts and their connected applications Other documentation for Backup and DR for file systems This page is one in a series of pages specific to protecting and recovering filesystems with Backup and DR Service.
- When configuring a backup plan for a file system, you have the following settings to help ensure that you get exactly what you need: Exclude Patterns and Include Patterns: You can exclude or include certain file types.

