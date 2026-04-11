---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.192Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Immutable and indelible backups in backup vaults"
feature_slug: "immutable-and-indelible-backups-in-backup-vaults"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
keywords:
  - "immutable"
  - "indelible"
  - "vaults"
  - "backups"
  - "backup"
  - "and"
  - "in"
  - "dr"
---

# Immutable and indelible backups in backup vaults

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR introduces immutable and indelible backup support using the new backup vault feature; Added support for immutable and indelible backups using Backup Vaults.

## Extended Definition

Backup and DR introduces immutable and indelible backup support using the new backup vault feature; Added support for immutable and indelible backups using Backup Vaults.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)

## Supporting Pages

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backups stored in backup vaults are immutable and indelible; they cannot be modified or deleted for the duration of the backup vault's minimum enforced retention period.
- Note: To store backups on immutable, indelible storage managed by Backup and DR Service, see backup vault .
- Capability Backup vault storage Self-managed storage Immutable and indelible backups Yes No Multi-region backups Yes Yes CMEK-encrypted backups Yes Yes Note: CMEK-encrypted backups (Backup vault storage) are only supported for Persistent Disk and for Compute Engine.
- Note: Enable 30-day introductory trial for Backup and DR Service to explore a unified, centralized backup solution featuring immutable backup vaults.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source project deletion and source cluster deletion, PiTR using logs and centralized monitoring and reporting.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source instance deletion and centralized monitoring and reporting.
- September 10, 2024 Feature Backup and DR service added support for immutable and indelible backups via the new backup vault feature.
- Feature Backup and DR service added support for immutable and indelible backups with the new backup vault feature.

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup and DR can be configured to store multiple copies of each snapshot across multiple locations using OnVault that writes backups to Cloud Storage, or StreamSnap that copies snapshots to a second backup/recovery appliance.
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.

