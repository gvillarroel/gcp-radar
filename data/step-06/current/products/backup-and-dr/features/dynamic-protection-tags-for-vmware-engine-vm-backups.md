---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.198Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Dynamic protection tags for VMware Engine VM backups"
feature_slug: "dynamic-protection-tags-for-vmware-engine-vm-backups"
latest_feature_date: "2024-09-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-vmware"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "vmware"
  - "dynamic"
  - "protection"
  - "tags"
  - "backups"
  - "engine"
  - "vm"
  - "for"
---

# Dynamic protection tags for VMware Engine VM backups

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added automatic protection for Google Cloud VMware Engine VMs using vSphere-based dynamic protection tags.

## Extended Definition

Added automatic protection for Google Cloud VMware Engine VMs using vSphere-based dynamic protection tags.

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
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
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
- For example: my-service-account@my-project.iam.gserviceaccount.com tcp ports : 26 443 3260 5107 Edit the firewall rules and add the following: In the Source IPv4 range , add the system management subnet of your Google Cloud VMware Engine private cloud.
- Home Documentation Storage Backup and DR Reference Send feedback Configure Google Cloud VMware Engine for Backup and DR Service for appliance-based storage Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- September 04, 2024 Feature Backup and DR Service added support to automatically protect your Google Cloud VMware Engine VMs using vSphere tags .
- Change Pricing model for protecting Google Cloud VMware Engine workloads has been updated to a node based flat rate model.
- The dynamic protection tags feature is supported for backup/recovery appliances running on version 11.0.12.320 or later.

