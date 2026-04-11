---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.191Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine VM backup to backup vaults"
feature_slug: "compute-engine-vm-backup-to-backup-vaults"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
keywords:
  - "vaults"
  - "compute"
  - "engine"
  - "vm"
  - "backup"
  - "and"
  - "to"
  - "dr"
---

# Compute Engine VM backup to backup vaults

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR adds support for backing up Compute Engine VMs directly to backup vaults.

## Extended Definition

Backup and DR adds support for backing up Compute Engine VMs directly to backup vaults.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Backup and DR requests Compute Engine to create new disks from the snapshots When these disks are created they are attached to the new or existing instance.
- Note: If you create application consistent snapshots of Windows Compute Engine instances then on mount to existing VM or mount as new VM, you need to mark your disk as available for read and write to make them usable.

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.
- After Backup and DR Service creates a backup of the current state of all VMDKs attached to an VM, you can use it to either: Mount that data to create a new VMware VM.

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Back up self-managed Oracle and SQL Server databases Self-managed Oracle and SQL Server databases are the following databases running inside a VM or Bare Metal Solution in your project: Oracle databases running on Bare Metal Solution, Compute Engine VMs, or Google Cloud VMware Engine VMs SQL Server databases running on Compute Engine or Google Cloud VMware Engine VMs These self-managed databases can be backed up from the appliance management console into backup vaults or into self-managed storage.
- Backup vault provides the following features: Immutability : your data cannot be changed Indelibility : your data cannot be deleted Backup vault storage is supported for Compute Engine instances, Cloud SQL, Google Cloud VMware Engine VMs, and self-managed Oracle and Microsoft SQL Server databases running inside VMs or Bare Metal Solution.
- Back up Compute Engine instances using the appliance management console Compute Engine instances can be backed up using the appliance management console into self-managed storage, and using the Google Cloud console into backup vaults.
- Note: You can also back up Compute Engine instances and disks into backup vaults directly from the Google Cloud console, which is better in most cases.

