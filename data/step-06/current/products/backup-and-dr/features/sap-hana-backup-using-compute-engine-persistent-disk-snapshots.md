---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.206Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "SAP HANA backup using Compute Engine persistent disk snapshots"
feature_slug: "sap-hana-backup-using-compute-engine-persistent-disk-snapshots"
latest_feature_date: "2024-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
keywords:
  - "hana"
  - "persistent"
  - "disk"
  - "sap"
  - "compute"
  - "using"
  - "engine"
  - "backup"
---

# SAP HANA backup using Compute Engine persistent disk snapshots

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added support for backing up SAP HANA databases on Compute Engine as persistent disk snapshots.

## Extended Definition

Backup and DR Service added support for backing up SAP HANA databases on Compute Engine as persistent disk snapshots.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)

## Supporting Pages

### Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clean up SAP HANA Backint Backup If SAP HANA Backint is protected already with Compute Engine or any other third party, perform the following cleanup steps on the SAP HANA host before assigning a backup plan: Delete old Backint symbolic files from /usr/sap/(HANA SID)/SYS/global/hdb/opt .
- Advanced Policy Settings specific to HANA databases on Compute Engine Persistent Disks The policy template needs these specific advanced settings.
- Snapshot type : Select the Persistent Disk snapshot type to be used for SAP HANA backups.
- You can find additional information in the following pages: Backup and DR for SAP HANA Prepare SAP HANA databases for backup Add an SAP HANA database host, and discover and protect its databases Configure staging disk format and backup method for SAP HANA databases Set application details and settings for SAP HANA databases Back up a discovered HANA database Back up HANA 1+n and HANA scale-out databases Restore and recover SAP HANA databases Mount an SAP HANA backup image as a standard mount Mount an SAP HANA backup image as a virtual database Mount and migrate an SAP HANA backup image for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Backup and DR Service for SAP HANA \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get started protecting your HANA databases, go through the SAP HANA procedures in Protect and recover an SAP HANA database running in Compute Engine Backup and DR uses Persistent Disk snapshots to incrementally back up data and log volume from your persistent disks with application consistency.
- Protecting SAP HANA databases The recommended protection method for SAP HANA databases and logs in Backup and DR is the SAP HANA savepoint API (Persistent Disk snapshots).
- What's next Go through the SAP HANA quick start exercise in Protect and recover an SAP HANA database running in Compute Engine Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can protect HANA Scale-Out instances using either of the two following alternative protection methods: SAP HANA savepoint API (LVM backup) SAP backint API (Full+Incremental backup) These methods are preferable only if you have HANA Scale-Out instances.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- NFS: Backup and DR Service supports NFS V3 (only) for capturing and presenting data in following deployment configurations: Presenting any backups to Google Cloud VMware Engine hosts using a NFS datastore Presenting a staging disk for agent-based data capture within a Compute Engine or Google Cloud VMware Engine VM Supported environments for backups The agent is supported in these environments.
- When using the SAP HANA SavePoint API with Persistent Disk snapshots, scale-out HANA configurations are not supported.
- It is not referring to SAP HANA backup leveraging Persistent Disk snapshots.

