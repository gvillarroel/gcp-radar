---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.197Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine VM creation integration for backup policy assignment"
feature_slug: "compute-engine-vm-creation-integration-for-backup-policy-assignment"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware"
keywords:
  - "policy"
  - "creation"
  - "integration"
  - "compute"
  - "engine"
  - "vm"
  - "backup"
  - "for"
---

# Compute Engine VM creation integration for backup policy assignment

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added integration with Compute Engine VM creation to apply Backup and DR policies during VM creation.

## Extended Definition

Added integration with Compute Engine VM creation to apply Backup and DR policies during VM creation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Note: If you create application consistent snapshots of Windows Compute Engine instances then on mount to existing VM or mount as new VM, you need to mark your disk as available for read and write to make them usable.
- Snapshot storage location When you create a backup plan for a Compute Engine instance, you can specify where the backup is stored.

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- If bandwidth is limited, then a local snapshot policy is recommended, which retains a copy of the backup data for a user defined period of time, and in addition to the snapshot policy, additional OnVault policies can be enabled to store data for longer periods of time in Google Cloud Storage bucket(s).
- This works for Google Cloud VMware Engine, though it is recommended to ensure sufficient bandwidth exists if you are using this feature.

### "Configure Google Cloud VMware Engine for Backup and DR Service for appliance-based\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can find additional information at: Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you add, discover, and protect a VMware VM, you must do the following in the Google Cloud VMware Engine: Create a Google Cloud VMware Engine private cloud Configure Google Cloud VMware Engine private cloud and the VPC connection Set NFS ingress firewall rules for the backup/recovery appliance Set permissions to manage VMware Engine instances Create a Google Cloud VMware Engine private cloud This procedure assumes you've already created a Google Cloud VMware Engine private cloud, deployed Google Cloud VMware Engine, and have the VMware VMs that you want to back up.
- Home Documentation Storage Backup and DR Reference Send feedback Configure Google Cloud VMware Engine for Backup and DR Service for appliance-based storage Stay organized with collections Save and categorize content based on your preferences.
- Required permissions Datastore Allocate space Browse datastore Low level file operations Removefile Update virtual machine files Folder Create folder Global Cancel task Disable methods Enable methods Licenses Log event Host Configuration Storage partition configuration Local operations Create virtual machine Delete virtual machine Reconfigure virtual machine Network Assign network Host profile Clear Create Delete Edit Export View Resource Assign virtual machine to resource pool Tasks Create task Update task vApp Export View OVF environment vApp application configuration vApp instance configuration vApp managedBy configuration vApp resource configuration Virtual machine Change Configuration Acquire disk lease Add existing disk Add new disk Add or remove device Advanced configuration Change Settings Change resource Configure Raw device Modify device settings Query unowned files Remove disk Rename Toggle disk change tracking Edit Inventory Create from existing Create new Remove Guest operations Guest operation modifications Guest operation program execution Guest operation queries Interaction Configure CD media Connect devices Power off Power on Suspend Provisioning Allow disk access Allow read-only disk access Allow virtual machine download Clone virtual machine Deploy template Snapshot management Create snapshot Remove snapshot Rename snapshot Revert to snapshot Configure Backup and DR to use Google Cloud VMware Engine DNS During VMware VM backup jobs, the backup/recovery appliance needs to resolve the fully qualified names of the ESX servers running in your Google Cloud VMware Engine private cloud.

