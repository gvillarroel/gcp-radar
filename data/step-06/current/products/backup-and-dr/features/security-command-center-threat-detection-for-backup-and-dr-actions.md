---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.208Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Security Command Center threat detection for Backup and DR actions"
feature_slug: "security-command-center-threat-detection-for-backup-and-dr-actions"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "detection"
  - "security"
  - "command"
  - "threat"
  - "center"
  - "backup"
  - "for"
  - "and"
---

# Security Command Center threat detection for Backup and DR actions

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Security Command Center Premium added real-time Event Threat Detection coverage for Backup and DR actions, including detection of data-destruction and recovery-inhibiting activities.

## Extended Definition

Security Command Center Premium added real-time Event Threat Detection coverage for Backup and DR actions, including detection of data-destruction and recovery-inhibiting activities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- February 28, 2025 Announcement Security Command Center adds threat detection support for Backup Vault, Backup Plans, and vaulted backups.
- October 19, 2023 Feature Security Command Center Premium adds real-time threat detection for Google Cloud Backup and DR Service.
- Event Threat Detection, a Security Command Center Premium service, released new rules for Google Cloud Backup and DR Service.
- For more information, see Security Command Center Premium for Backup and DR Service .

### Backup and DR Service for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The quiesce or unquiesce command is run on the primary for a volume-level snapshot job: select pg start backup ( <label> ) ; select pg stop backup () ; The quiesce and unquiesce commands are run on a standby node for a volume-level snapshot job: If PostgreSQL version is 10.x or later: select pg wal replay pause () ; select pg wal replay resume () ; If PostgreSQL version is 9.x: select pg xlog replay pause () ; select pg xlog replay resume () ; How it works: file-based backup The following steps describe the process for how to perform data backup and recovery with file-based backup images: Backup and DR agent is deployed in the database server.
- PostgreSQL backup API used by Backup and DR Volume level (Linux change block tracking and LVM snapshot) backups : Backup and DR uses the PostgreSQL pg start backup(label) and pg stop backup() commands when performing backups with Linux change block tracking and LVM snapshot.
- What's next Prepare the database for Backup and DR Other documentation for Backup and DR for PostgreSQL Backup and DR for PostgreSQL Prepare the database for Backup and DR Add a PostgreSQL database host and discover databases Define policy templates and resource profiles Set application details and settings Check staging disk format and backup method Protect the PostgreSQL database and its logs Mount a PostgreSQL database Recover PostgreSQL Backups Create a PostgreSQL Backup and DR Workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

