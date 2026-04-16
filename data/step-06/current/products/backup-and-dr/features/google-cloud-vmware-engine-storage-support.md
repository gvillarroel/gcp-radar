---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.935Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Google Cloud VMware Engine Storage support"
feature_slug: "google-cloud-vmware-engine-storage-support"
latest_feature_date: "2024-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings"
keywords:
  - "nodes"
  - "only"
  - "vmware"
  - "storage"
  - "engine"
  - "added"
---

# Google Cloud VMware Engine Storage support

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added support for Google Cloud VMware Engine Storage-only nodes.

## Extended Definition

Backup and DR Service added support for Google Cloud VMware Engine Storage-only nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)

## Supporting Pages

### "Committed use discounts for Backup and DR for Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Committed use discounts (CUDs) provide deeply-discounted prices in exchange for committing to continuously use VMware Engine and VMware Engine storage-only nodes in a particular region for a one- or three-year term.
- Home Documentation Storage Backup and DR Resources Send feedback Committed use discounts for Backup and DR for Google Cloud VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- Note: CUDs are applicable to both ve1 and ve1 storage-only nodes.
- CUD pricing Backup and DR for VMware Engine CUDs give you the following discounts on on-demand pricing: Workload 1 year in advance 1 year monthly 3 years in advance 3 years monthly Google Cloud VMware Engine 30% 24.4% 50% 42.5% In advance charges are invoiced in full at the start of the contract for a one-year or a three-year commitment Monthly charges are invoiced monthly for a one-year or a three-year commitment These discount percentages are the same in every region.

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- Note: Only backing up old Windows server OS versions inside the Google Cloud VMware Engine VM is supported.
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.

### "Configure advanced policy settings \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced setting Description Application consistent (applicable only for Google Cloud VMware Engine VMs and Compute Engine VMs) Select one of the following: Crash consistent backup : Crash consistent backup is a fast backup of application data in storage as if power were lost at that moment.
- In the event of an ESX host failure, this option manages failover copies of VMware VMs. (Oracle, local file systems, SMB, NFS, SQL Server): Map staging disk to ESX host for VM only Map staging disk to all ESX hosts in the cluster Map staging disk to two ESX hosts in the cluster Backup SQL Server User Logins Captures the SQL Server database login credentials.
- Map Staging Disk to All ESX Hosts in a Cluster (For VMware VMs only) If your ESX servers are in an appliance, you can use this setting to ensure that the VMs are managed in case of failover during backup.
- To mount a Windows Compute Engine snapshot as a new or an existing VM that is captured with the Application consistent option, you must change the disk from read-only to read-write mode.

