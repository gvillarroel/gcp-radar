---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.936Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "SAP HANA backup using Compute Engine persistent disk snapshots"
feature_slug: "sap-hana-backup-using-compute-engine-persistent-disk-snapshots"
latest_feature_date: "2024-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana"
keywords:
  - "hana"
  - "persistent"
  - "snapshots"
  - "disk"
  - "compute"
  - "engine"
---

# SAP HANA backup using Compute Engine persistent disk snapshots

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added support for backing up SAP HANA databases on Compute Engine as persistent disk snapshots.

## Extended Definition

Backup and DR Service added support for backing up SAP HANA databases on Compute Engine as persistent disk snapshots.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk](https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)

## Supporting Pages

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced Policy Settings specific to HANA databases on Compute Engine Persistent Disks The policy template needs these specific advanced settings.
- Note: SAP HANA Scale-Out isn't supported for backup to Persistent Disk snapshots.
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have been onboarded to Backup and DR Service All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have the Backup and DR agent installed.

### "About synchronous disk replication \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk](https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk)
- Source ID: `site-docs-reference-2`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Regional Persistent Disk and Hyperdisk Balanced High Availability are storage options that let you implement high availability (HA) services in Compute Engine.
- Compute Engine automatically creates replica recovery checkpoints for each mounted Regional Persistent Disk or Hyperdisk Balanced High Availability disk.
- About synchronous disk replication A Regional Persistent Disk or Hyperdisk Balanced High Availability volume, also referred to as a regional disk, or synchronously replicated disk, has a primary and a secondary zone within its region where it stores disk data: Primary zone is the same zone where the compute instance that you attach the disk to is located.
- Important: In case of an unavailable disk, Google recommends that you always use any existing standard snapshots to create a new Regional Persistent Disk or Hyperdisk Balanced High Availability volume and recover disk data.

### Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced Policy Settings specific to HANA databases on Compute Engine Persistent Disks The policy template needs these specific advanced settings.
- Clean up SAP HANA Backint Backup If SAP HANA Backint is protected already with Compute Engine or any other third party, perform the following cleanup steps on the SAP HANA host before assigning a backup plan: Delete old Backint symbolic files from /usr/sap/(HANA SID)/SYS/global/hdb/opt .
- Within the Advanced Settings dialog, find and set the following advanced settings: Snapshot location : Select the region where the Persistent Disk snapshots are to be stored.
- Note: Replicate Logs (Uses Streamsnap technology) and Send logs to OnVault Pool don't apply to SAP HANA Persistent Disk snapshot protection.

