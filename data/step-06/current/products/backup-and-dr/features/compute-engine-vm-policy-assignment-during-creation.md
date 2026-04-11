---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.192Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine VM policy assignment during creation"
feature_slug: "compute-engine-vm-policy-assignment-during-creation"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
keywords:
  - "assignment"
  - "policy"
  - "during"
  - "creation"
  - "compute"
  - "engine"
  - "vm"
  - "backup"
---

# Compute Engine VM policy assignment during creation

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR policies can now be applied when creating Compute Engine VMs during the VM creation workflow.

## Extended Definition

Backup and DR policies can now be applied when creating Compute Engine VMs during the VM creation workflow.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Note: If you create application consistent snapshots of Windows Compute Engine instances then on mount to existing VM or mount as new VM, you need to mark your disk as available for read and write to make them usable.
- Backup and DR requests Compute Engine to create new disks from the snapshots When these disks are created they are attached to the new or existing instance.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- NFS: Backup and DR Service supports NFS V3 (only) for capturing and presenting data in following deployment configurations: Presenting any backups to Google Cloud VMware Engine hosts using a NFS datastore Presenting a staging disk for agent-based data capture within a Compute Engine or Google Cloud VMware Engine VM Supported environments for backups The agent is supported in these environments.
- 2 Supported only on Google Cloud VMware Engine VMs and not on Compute Engine instances/VMs 3 During "offline" upgrade of SuSE (upgrade from ISO), the SuSE installer does not run a reconfigure on external packages, including the CBT module and DLKM.
- Note: Protection of VMware View virtual machines not supported. vCenter 1, 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0, 8.0 U3 7 ESX Server 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0.3 starting with Backup and DR Service V11.0.17 Virtual Hardware 2 7 to 15 and 17 to 19 Guest OS All Google Cloud VMware Engine supported OSs Quiesce applications 3 Yes, based on VMware Tools vSAN Support 4 vSAN 7.0 U1, vSAN 7.0 U2, vSAN 7.0 U3 Change Block Tracking 5 Leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) 1 This leverages VMware VDDK version 7.0.

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- If bandwidth is limited, then a local snapshot policy is recommended, which retains a copy of the backup data for a user defined period of time, and in addition to the snapshot policy, additional OnVault policies can be enabled to store data for longer periods of time in Google Cloud Storage bucket(s).
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.

