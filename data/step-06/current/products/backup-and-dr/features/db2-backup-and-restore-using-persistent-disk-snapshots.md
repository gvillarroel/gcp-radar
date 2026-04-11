---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.188Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Db2 backup and restore using persistent disk snapshots"
feature_slug: "db2-backup-and-restore-using-persistent-disk-snapshots"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
keywords:
  - "db2"
  - "persistent"
  - "snapshots"
  - "disk"
  - "restore"
  - "using"
  - "backup"
  - "and"
---

# Db2 backup and restore using persistent disk snapshots

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service now supports backup and restore of Db2 databases using persistent disk snapshots.

## Extended Definition

Backup and DR Service now supports backup and restore of Db2 databases using persistent disk snapshots.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR Service now supports backup and restore of Db2 databases using persistent disk snapshots.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Security This release fixes the following Kernel vulnerabilities: CRITICAL Kernel issues: CVE-2023-25775 CVE-2019-15505 MEDIUM Kernel issues CVE-2019-13631 CVE-2020-25656 CVE-2020-26555 CVE-2020-36777 CVE-2021-3753 CVE-2021-46909 CVE-2021-46939 CVE-2021-47171 CVE-2022-38096 CVE-2022-48743 CVE-2023-1192 CVE-2023-4133 CVE-2023-5090 CVE-2023-6121 CVE-2023-6176 CVE-2023-6240 CVE-2023-6622 CVE-2023-6915 CVE-2023-24023 CVE-2023-31083 CVE-2023-37453 CVE-2023-38409 CVE-2023-39189 CVE-2023-39192 CVE-2023-39193 CVE-2023-39194 CVE-2023-39198 CVE-2023-42754 CVE-2023-42755 CVE-2023-45863 CVE-2023-52448 CVE-2023-52463 CVE-2023-52471 CVE-2024-0340 CVE-2024-21140 CVE-2024-21145 CVE-2024-25739 CVE-2024-26583 CVE-2024-26584 CVE-2024-26585 CVE-2024-26586 CVE-2024-26602 CVE-2024-26603 CVE-2024-26901 CVE-2024-26908 CVE-2024-27014 CVE-2024-27019 CVE-2024-36270 CVE-2024-36489 CVE-2024-38598 CVE-2024-39472 CVE-2024-39476 HIGH Kernel issues: CVE-2019-25162 CVE-2021-4204 CVE-2021-33631 CVE-2021-47624 CVE-2022-0500 CVE-2022-3565 CVE-2022-23222 CVE-2022-45884 CVE-2022-45886 CVE-2022-45919 CVE-2022-45934 CVE-2023-2163 CVE-2023-3567 CVE-2023-3812 CVE-2023-4244 CVE-2023-5178 CVE-2023-6546 CVE-2023-6931 CVE-2023-6932 CVE-2023-28464 CVE-2023-51042 CVE-2023-51780 CVE-2023-52340 CVE-2023-52434 CVE-2023-52439 CVE-2023-52445 CVE-2023-52451 CVE-2023-52464 CVE-2023-52469 CVE-2024-0565 CVE-2024-0841 CVE-2024-1086 CVE-2024-21147 CVE-2024-23307 CVE-2024-25744 CVE-2024-26593 CVE-2024-26907 CVE-2024-26933 CVE-2024-26934 CVE-2024-27020 CVE-2024-36971 CVE-2024-36978 CVE-2024-36979 CVE-2024-38538 CVE-2024-38555 CVE-2024-38627 CVE-2024-39487 Fixed This release fixes an issue where SAP HANA database and log backup jobs using Persistent Disk snapshots would complete with a warning status due to metadata upload failures to Google Cloud Storage for disaster recovery.
- Imported persistent disk snapshots of SAP HANA and Db2 databases sometimes failed to mount or to restore if the database host had a custom (non-default) PD disk names.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- 3 Capture from ASM to ASM and presentation of backups in ASM format not supported on Windows operating systems 4 Oracle ASM instance required on the source system for this capture method 5 The combination of ASM Disk (capture format) is not supported when data is captured over NFS Supported Data Capture formats Using File System Using ASM Disk Group Backup support HCC or Non HCC Data Oracle Recovery using RMAN HCC or non HCC App-Aware Mount 1 Exadata to non Exadata 1 Accessing data from virtual copies of HCC compressed data will require the data to be uncompressed before access Oracle exadata support Backup and DR Service supports the following configurations of Oracle Exadata.
- NFS: Backup and DR Service supports NFS V3 (only) for capturing and presenting data in following deployment configurations: Presenting any backups to Google Cloud VMware Engine hosts using a NFS datastore Presenting a staging disk for agent-based data capture within a Compute Engine or Google Cloud VMware Engine VM Supported environments for backups The agent is supported in these environments.
- For each of these discovered applications, Backup and DR agent orchestrates the process of achieving consistency (through VSS/LVM snapshots), presents a staging disk which will be formatted with a file system of the same type as source or a compatible file system type as documented here.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Standard for Compute Engine VMs or SAP HANA databases : This e2-standard-4 machine type is best for backing up Compute Engine instances, Cloud SQL instances, and data resources that use Persistent Disk for backups: IBM Db2 and SAP HANA databases configured to use Persistent Disk.
- In this storage type, backups are stored as Persistent Disk snapshots and don't consume the local storage of the backup/recovery appliance.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- Purpose Source Target Port (TCP) Agent traffic (appliance to host) Backup/recovery appliance Host running Backup and DR agent 5106 For hosts using NFS for backup traffic, or for ESX hosts running in Google Cloud VMware Engine that are using NFS for mounts, you need to manually add the following TCP and UDP ports to allow connectivity with an ingress firewall rule.

