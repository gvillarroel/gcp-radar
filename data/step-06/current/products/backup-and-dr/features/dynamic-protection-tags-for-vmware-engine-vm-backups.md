---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.928Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Dynamic protection tags for VMware Engine VM backups"
feature_slug: "dynamic-protection-tags-for-vmware-engine-vm-backups"
latest_feature_date: "2024-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
keywords:
  - "vmware"
  - "dynamic"
  - "protection"
  - "tags"
  - "backups"
  - "engine"
  - "added"
---

# Dynamic protection tags for VMware Engine VM backups

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added automatic protection for Google Cloud VMware Engine VMs using vSphere-based dynamic protection tags.

## Extended Definition

Added automatic protection for Google Cloud VMware Engine VMs using vSphere-based dynamic protection tags.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)

## Supporting Pages

### "Automate protection of Google Cloud VMware Engine \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The triggered job can take a few minutes depending on the number of changes pending for your workloads. echo "Triggering dynamic protection job.." curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPOST -d '{}' " $MC ENDPOINT /actifio/dynamicprotection/job/vmwarevm" echo "Dynamic protection job triggered." Migrate manual protection to dynamic protection If you intend to migrate your already protected resources to use dynamic protection using tags, you must enable the migration flag in your project.
- Add dynamic protection tags to a VMware VM Now that you have created dynamic protection tag values and linked them to a dynamic protection tag, the next step is to assign a tag to a VMware VM.
- Create dynamic protection tags in vSphere Use these instructions to create dynamic protection tags to attach to your VMware VMs in order to automate protection.
- The Dynamic Protection engine will automatically detect that you no longer want to protect this VMware VM and remove any assigned protection.

### "Automate protection of Compute Engine instances \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The triggered job can take a few minutes depending on the number of changes pending for your workloads. echo "Triggering dynamic protection job.." curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPOST -d '{}' " $MC ENDPOINT /actifio/dynamicprotection/job/gceinstance" echo "Dynamic protection job triggered." Use Dynamic Protection with the Resource Manager You can use dynamic protection tags with Resource Manager , automating protection of your Compute Engine instances at a higher organizational level.
- Prerequisite to automate backups Before you start automating backups of Compute Engine instances, read the following procedures to prepare for backups: Create a backup plan template After setting up Backup and DR Service and creating a backup plan template, you can automate protection of your Compute Engine instances by applying the backup plan template to the instance using Tags.
- Create Dynamic Protection Tags Use these instructions to create Dynamic Protection Tags to attach to your Compute Engine instances in order to automate protection: To create, update, and delete tag definitions, you need the Tag Administrator role, or another role that includes specific permissions .
- Create Dynamic Protection Tag values Use these instructions to create Dynamic Protection Tag values that can be used with your Compute Engine instances: In the Backup and DR appliance management console, click the Backup Plans drop-down menu and select Dynamic Protection Tags .

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service uses VMware vSphere Storage APIs - Data Protection to create backups of VMware VMs, placing these backups either in the snapshot pool of the backup/recovery appliance or in OnVault pools, or in both.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for VMware Engine Stay organized with collections Save and categorize content based on your preferences.
- This works for Google Cloud VMware Engine, though it is recommended to ensure sufficient bandwidth exists if you are using this feature.

