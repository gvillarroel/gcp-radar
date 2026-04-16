---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.938Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "PostgreSQL backup image restore to alternate location"
feature_slug: "postgresql-backup-image-restore-to-alternate-location"
latest_feature_date: "2023-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms"
keywords:
  - "alternate"
  - "location"
  - "postgresql"
  - "image"
  - "restore"
  - "added"
---

# PostgreSQL backup image restore to alternate location

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR added support for restoring PostgreSQL database backup images to an alternate location.

## Extended Definition

Backup and DR added support for restoring PostgreSQL database backup images to an alternate location.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)

## Supporting Pages

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- About this quickstart exercise This exercise guides you through the steps of discovering and protecting an SAP HANA database running in a Compute Engine instance, and finally mounting a fully-functional new HANA database from the backup image to a new location.
- Discover and protect SAP HANA databases Note: If you are protecting a HANA database that has already been added and that already has LVM backup images, then you must change the capture method from LVM to Persistent Disk.
- Yes : This replaces the original application with the restored one, which will carry the same application ID, jobhistory, backup images, and backup plan as the original application.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Restore the image to the source instance .
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- After Backup and DR creates a snapshot to back up the current state of some or all Persistent Disks attached to an instance, you can use the backup image to either: Mount the image to create a new instance .

### Backup and DR Service for VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-vmware-vms)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The VMware administrator's guide Backup and DR for VMware VMs Configure Google Cloud VMware Engine for Backup and DR protection Add vCenter and ESX server hosts to the appliance management console Discover and protect VMware VMs Apply a backup template to protect a VM Configure application settings for VMware VMs Restore a VMware VM Mount a VMware image Clone an image of a VMware VM Create LiveClone workflows Move VM management between two backup/recovery appliances Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR can be configured to store multiple copies of each snapshot across multiple locations using OnVault that writes backups to Cloud Storage, or StreamSnap that copies snapshots to a second backup/recovery appliance.
- Each VM can have up to four OnVault policies, each specifying different Google Cloud Storage buckets, which could be different storage classes and different location types.
- OnVault backups can be stored in a Cloud Storage multi-regional location , a Cloud Storage dual-region location , or a Cloud Storage regional location .

