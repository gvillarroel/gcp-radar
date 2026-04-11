---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.212Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine local SSD backup and restore support"
feature_slug: "compute-engine-local-ssd-backup-and-restore-support"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data"
keywords:
  - "local"
  - "ssd"
  - "restore"
  - "compute"
  - "engine"
  - "backup"
  - "and"
  - "dr"
---

# Compute Engine local SSD backup and restore support

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added support for backing up and restoring Compute Engine instances that use local SSDs.

## Extended Definition

Backup and DR Service added support for backing up and restoring Compute Engine instances that use local SSDs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data)

## Supporting Pages

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Backup and DR requests Compute Engine to create new disks from the snapshots When these disks are created they are attached to the new or existing instance.
- Note: Protection of Compute Engine instances using Backup and DR Service does not consume any space in the backup/recovery appliance Snapshot pool.

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Back up self-managed Oracle and SQL Server databases Self-managed Oracle and SQL Server databases are the following databases running inside a VM or Bare Metal Solution in your project: Oracle databases running on Bare Metal Solution, Compute Engine VMs, or Google Cloud VMware Engine VMs SQL Server databases running on Compute Engine or Google Cloud VMware Engine VMs These self-managed databases can be backed up from the appliance management console into backup vaults or into self-managed storage.
- Supported workload Backup plan in Google Cloud console Backup plan in appliance management console Compute Engine VMs Yes Yes Compute Engine disks Yes Yes Cloud SQL instances Yes No AlloyDB clusters Yes No Google Cloud VMware Engine VMs No Yes File systems and self-managed databases, such as Oracle, SQL Server, SAP HANA, IBM Db2, PostgreSQL, SAP ASE, SAP IQ, and SAP MaxDB, can run on virtual machines (VMs) or on Bare Metal Solution.
- Backup vault provides the following features: Immutability : your data cannot be changed Indelibility : your data cannot be deleted Backup vault storage is supported for Compute Engine instances, Cloud SQL, Google Cloud VMware Engine VMs, and self-managed Oracle and Microsoft SQL Server databases running inside VMs or Bare Metal Solution.
- Capability Backup vault storage Self-managed storage Immutable and indelible backups Yes No Multi-region backups Yes Yes CMEK-encrypted backups Yes Yes Note: CMEK-encrypted backups (Backup vault storage) are only supported for Persistent Disk and for Compute Engine.

### "Different ways to access your protected data \_|\_ Backup and DR \_|\_ Google\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/access-your-managed-data)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Compute Engine instance Compute Engine instance mounts create a new Persistent Disk from backup and then either assign it to an existing Compute Engine instance or to a new Compute Engine instance, which is created at the same time.
- The other topics are as follows: Introduce the appliance management console Introduce Backup and DR data protection backup plans Introduce Backup and DR data capture Different ways to access your protected data (this page) Introduce the Backup and DR agent Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Send feedback Different ways to access your protected data Stay organized with collections Save and categorize content based on your preferences.
- Mount and migrate lets you restore an application with near-zero downtime by first mounting it locally, and then migrating it to the original location or to a new location.

