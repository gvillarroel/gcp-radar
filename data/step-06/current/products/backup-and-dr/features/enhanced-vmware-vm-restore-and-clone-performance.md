---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.916Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Enhanced VMware VM restore and clone performance"
feature_slug: "enhanced-vmware-vm-restore-and-clone-performance"
latest_feature_date: "2025-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data"
keywords:
  - "performance"
  - "operations"
  - "virtual"
  - "clone"
  - "vmware"
  - "enhanced"
  - "restore"
---

# Enhanced VMware VM restore and clone performance

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Restore and clone operations for VMware virtual machines were improved for higher performance.

## Extended Definition

Restore and clone operations for VMware virtual machines were improved for higher performance.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data)

## Supporting Pages

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- How it works: Backup and DR VMware VM snapshots Data backup with VMware VMs follows these steps: The first successful snapshot of a VMware VM creates a snapshot of each virtual disk (VMDK).
- If an additional virtual disk is added to the VMware VM, this disk is automatically included in the next snapshot of the VM.
- Select if you want to mount to an existing host or VM, create a new VMware VM or restore the disks of the source VMware VM.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A consistency group can be made up of the following: One or more system databases One or more user databases System or user databases together Zero or more file systems (drive letters or mount points) Individual members of a consistency group can be accessed by mount, clone, LiveClone, and restore operations.
- Individual members of an instance can be accessed by mount, clone, LiveClone, and restore operations as needed.
- Restore operations are typically performed after a massive data corruption.
- Restore operations actually move data.

### "Different ways to access your protected data \_|\_ Backup and DR \_|\_ Google\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- You can access your protected data in the following ways: Clone LiveClone Mount Restore Workflows Clones Clones are commonly used with SQL Server databases and VMware VMs.
- When to clone VMware VMs For VMware VMs, a clone copies backup images of the VMDKs directly to a targeted datastore before powering on the VM, at which point the VM is independent of the backup/recovery appliance.
- LiveClones provide a crucial building block in managing copy data lifecycle as they combine the performance and independence of a full clone with the efficiency and speed of incremental refreshes of data.
- When performing a mount of a VMware VM or agent based backup from OnVault you can control how much to optimize for performance versus storage consumption, by selecting the following: Storage-optimized.

