---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.923Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Db2 backup and restore using persistent disk snapshots"
feature_slug: "db2-backup-and-restore-using-persistent-disk-snapshots"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "persistent"
  - "snapshots"
  - "disk"
  - "restore"
---

# Db2 backup and restore using persistent disk snapshots

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service now supports backup and restore of Db2 databases using persistent disk snapshots.

## Extended Definition

Backup and DR Service now supports backup and restore of Db2 databases using persistent disk snapshots.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk](https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### "About synchronous disk replication \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk](https://docs.cloud.google.com/compute/docs/disks/about-regional-persistent-disk)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: In case of an unavailable disk, Google recommends that you always use any existing standard snapshots to create a new Regional Persistent Disk or Hyperdisk Balanced High Availability volume and recover disk data.
- About synchronous disk replication A Regional Persistent Disk or Hyperdisk Balanced High Availability volume, also referred to as a regional disk, or synchronously replicated disk, has a primary and a secondary zone within its region where it stores disk data: Primary zone is the same zone where the compute instance that you attach the disk to is located.
- Replication states for regional disks Depending on the state of the individual zonal replicas, your Regional Persistent Disk or Hyperdisk Balanced High Availability volume can be in one of the following replication states: Fully replicated: Replicas in both zones are available and are synced with the latest disk data.
- If the regional disk has a status of catching up or degraded for a prolonged period of time and does not meet your organization's RPO requirements, we recommend that you take snapshots of the primary replica in either of following ways: Enable scheduled snapshots.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Within the Advanced Settings dialog, find and set the following advanced settings: Snapshot location : Select the region where the Persistent Disk snapshots are to be stored.
- It will then create new disks from the persistent disk snapshots and make them available to the server.
- Note: SAP HANA Scale-Out isn't supported for backup to Persistent Disk snapshots.
- Snapshots incrementally back up data from Persistent Disks.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data restore with Persistent Disk snapshots follows these steps: Select the instance and point in time that they want to work with.
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- How it works: Backup and DR Persistent Disk snapshots Data backup with Persistent Disk snapshots follows these steps: The first successful snapshot of an instance creates a snapshot of each Persistent Disk.
- Backup and DR Service uses snapshots to incrementally back up data from your Persistent Disks at the instance level.

