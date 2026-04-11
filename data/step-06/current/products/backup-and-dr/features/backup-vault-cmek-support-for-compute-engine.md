---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.174Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup Vault CMEK support for Compute Engine"
feature_slug: "backup-vault-cmek-support-for-compute-engine"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek"
keywords:
  - "cmek"
  - "vault"
  - "supports"
  - "compute"
  - "engine"
  - "backup"
  - "now"
  - "for"
---

# Backup Vault CMEK support for Compute Engine

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup Vault now supports CMEK-protected Compute Engine instances and Persistent Disks for backup protection.

## Extended Definition

Backup Vault now supports CMEK-protected Compute Engine instances and Persistent Disks for backup protection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Snapshot storage location When you create a backup plan for a Compute Engine instance, you can specify where the backup is stored.
- Note: If you create application consistent snapshots of Windows Compute Engine instances then on mount to existing VM or mount as new VM, you need to mark your disk as available for read and write to make them usable.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- December 17, 2025 Feature Backup Vault: CMEK support for Compute Engine (GA) Backup Vault now supports data protection for Compute Engine instances and Persistent Disks encrypted with Customer-Managed Encryption Keys (CMEK).
- March 03, 2026 Feature Backup vault support for Compute Engine instances and Persistent Disk encrypted with customer-managed encryption keys (CMEK) is now generally available.
- Feature Backup and DR Service now supports archive snapshots for Compute Engine instance backups.
- Feature Backup and DR service added centralized backup management within Google Cloud console, with support for Compute Engine VM backup to backup vaults .

### "Customer-managed encryption keys (CMEK) \_|\_ Backup and DR \_|\_ Google\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table summarizes which encryption key is used for backups of different workload types: Workload Encryption Key Used for Backup CMEK Support Status Compute Engine instance Backup vault CMEK key Supported Compute Engine disk Source disk's encryption key Supported Cloud SQL - Not supported AlloyDB cluster - Not supported Filestore instance - Not supported Google Cloud VMware Engine, Oracle database, and SQL Server database - Not supported Limitations Backup and DR support for CMEK has the following limitations: CMEK protection is only supported for Compute Engine instance and Persistent Disk backups stored in backup vaults.
- Backups at rest When you use CMEK organization policies, the following constraints can be enforced when backups are created: If constraints/gcp.restrictNonCmekServices is enforced for backupdr.googleapis.com , new backups cannot be created if they use Google-managed encryption instead of CMEK: Compute Engine instance backup : Backup fails if the target backup vault uses Google-managed encryption.
- If constraints/gcp.restrictCmekCryptoKeyProjects is enforced, resources protected by CMEK must use a key from an allowed project or folder: Compute Engine instance backup : If the backup vault is CMEK-encrypted, its key must be from an allowed project or folder.
- Apply the backup plan to resources When you apply a backup plan to a resource, you must ensure that the backup plan targets a backup vault that is compatible with the resource's encryption configuration: If you are backing up a Compute Engine instance that has one or more CMEK-encrypted disks attached, you must use a backup plan that targets a CMEK-enabled backup vault.

