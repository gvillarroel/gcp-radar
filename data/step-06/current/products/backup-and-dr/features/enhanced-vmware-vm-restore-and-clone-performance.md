---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.174Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Enhanced VMware VM restore and clone performance"
feature_slug: "enhanced-vmware-vm-restore-and-clone-performance"
latest_feature_date: "2025-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "performance"
  - "operations"
  - "clone"
  - "vmware"
  - "enhanced"
  - "restore"
  - "vm"
  - "and"
---

# Enhanced VMware VM restore and clone performance

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Restore and clone operations for VMware virtual machines were improved for higher performance.

## Extended Definition

Restore and clone operations for VMware virtual machines were improved for higher performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- How it works: Backup and DR VMware VM snapshots Data backup with VMware VMs follows these steps: The first successful snapshot of a VMware VM creates a snapshot of each virtual disk (VMDK).

### "Configure Google Cloud VMware Engine for Backup and DR Service for appliance-based\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required permissions Datastore Allocate space Browse datastore Low level file operations Removefile Update virtual machine files Folder Create folder Global Cancel task Disable methods Enable methods Licenses Log event Host Configuration Storage partition configuration Local operations Create virtual machine Delete virtual machine Reconfigure virtual machine Network Assign network Host profile Clear Create Delete Edit Export View Resource Assign virtual machine to resource pool Tasks Create task Update task vApp Export View OVF environment vApp application configuration vApp instance configuration vApp managedBy configuration vApp resource configuration Virtual machine Change Configuration Acquire disk lease Add existing disk Add new disk Add or remove device Advanced configuration Change Settings Change resource Configure Raw device Modify device settings Query unowned files Remove disk Rename Toggle disk change tracking Edit Inventory Create from existing Create new Remove Guest operations Guest operation modifications Guest operation program execution Guest operation queries Interaction Configure CD media Connect devices Power off Power on Suspend Provisioning Allow disk access Allow read-only disk access Allow virtual machine download Clone virtual machine Deploy template Snapshot management Create snapshot Remove snapshot Rename snapshot Revert to snapshot Configure Backup and DR to use Google Cloud VMware Engine DNS During VMware VM backup jobs, the backup/recovery appliance needs to resolve the fully qualified names of the ESX servers running in your Google Cloud VMware Engine private cloud.
- You can find additional information at: Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you add, discover, and protect a VMware VM, you must do the following in the Google Cloud VMware Engine: Create a Google Cloud VMware Engine private cloud Configure Google Cloud VMware Engine private cloud and the VPC connection Set NFS ingress firewall rules for the backup/recovery appliance Set permissions to manage VMware Engine instances Create a Google Cloud VMware Engine private cloud This procedure assumes you've already created a Google Cloud VMware Engine private cloud, deployed Google Cloud VMware Engine, and have the VMware VMs that you want to back up.
- Google Cloud VMware Engine private cloud and the VPC connection After you create a Google Cloud VMware Engine private cloud, you need to add a private connection between your Google Cloud VMware Engine private cloud and the VPC where your backup/recovery appliance is deployed.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Feature Enhanced performance for restore and clone of VMware VMs.
- Feature Performance: Introduced significant optimizations to increase VMware VM clone/restore throughput.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- API & Infrastructure: Optimized host discovery and API performance, including support for duplicate VM names, subnet pagination, and the removal of deprecated NFS options.

