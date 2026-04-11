---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.206Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Change Block Tracking support for Linux appliances"
feature_slug: "change-block-tracking-support-for-linux-appliances"
latest_feature_date: "2024-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "tracking"
  - "appliances"
  - "change"
  - "block"
  - "linux"
  - "backup"
  - "for"
  - "and"
---

# Change Block Tracking support for Linux appliances

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added Change Block Tracking (CBT) support for additional Linux OS versions, including SLES 15 SP5.

## Extended Definition

Backup and DR Service added Change Block Tracking (CBT) support for additional Linux OS versions, including SLES 15 SP5.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RMAN scans each block in a data file for all data files in the database during incremental backup when Change Block Tracking on the database is not enabled.
- Subsequent RMAN incremental backup runs with RMAN incremental merge on Backup and DR backup disk, updating the last full with incremental changes before snapshot.
- Oracle database block change tracking (BCT) Oracle block change tracking enables fast database backups by identifying which blocks have changed.
- With BCT enabled, RMAN uses the BCT file to get the changed blocks for incremental backup.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- OS Version Basic Backup and DR agent Support Change Block Tracking Support Min required Backup and DR agent Version RHEL 1,4 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 8.10 Yes Yes V11.0.12 9.0 Yes No V11.0.4 9.2 Yes Yes V11.0.15 9.4 Yes Yes V11.0.15 9.5 Yes Yes V11.0.15 9.6 Yes Yes V11.0.16 9.7 Yes Yes V11.0.16 RHEL for SAP 1 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 9.0 Yes No V11.0.8 9.2 Yes Yes V11.0.14 9.4 Yes Yes V11.0.14 SLES 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 SLES for SAP 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 Rocky Linux 9.3 Yes Yes V11.0.15 Rocky Linux optimized for Google Cloud 9.3 Yes No V11.0.9 Ubuntu 20.04 LTS Yes No V11.0.1 22.04 LTS Yes No V11.0.1 Oracle Linux 1, 2 7.0-7.6 Yes No V11.0.1 7.7 Yes No V11.0.1 7.8 Yes No V11.0.1 7.9 Yes No V11.0.1 8.0-8.1 Yes No V11.0.1 8.2 Yes No V11.0.1 8.3 Yes No V11.0.1 8.4 Yes No V11.0.1 8.5 Yes No V11.0.1 8.6 Yes No V11.0.1 8.7 Yes No V11.0.4 8.8 5 Yes No V11.0.8 9.0 Yes No V11.0.4 9.1 5 Yes No V11.0.8 9.2 5 Yes No V11.0.8 9.6 5 Yes No V11.0.16 1 Symantec (Veritas) Dynamic Multi Pathing (DMP) is NOT supported.
- Operating System Version Basic Backup and DR agent Support Change Block Tracking Support for SQL Server Windows Server 2025 Datacenter Yes Yes Windows Server 2025 Datacenter Core Yes Yes Windows Server 2022 Datacenter Yes Yes Windows Server 2022 Datacenter Core Yes Yes Windows Server 2019 Datacenter Yes Yes Windows Server 2019 Datacenter Core Yes Yes Windows Server 2016 Datacenter Yes Yes Windows Server 2016 Datacenter Core Yes Yes Linux operating system support Backup and DR agent supports the following Linux (x86) operating systems.
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Note: Protection of VMware View virtual machines not supported. vCenter 1, 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0, 8.0 U3 7 ESX Server 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0.3 starting with Backup and DR Service V11.0.17 Virtual Hardware 2 7 to 15 and 17 to 19 Guest OS All Google Cloud VMware Engine supported OSs Quiesce applications 3 Yes, based on VMware Tools vSAN Support 4 vSAN 7.0 U1, vSAN 7.0 U2, vSAN 7.0 U3 Change Block Tracking 5 Leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) 1 This leverages VMware VDDK version 7.0.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Security The following CVEs have been addressed in this release: CVE-2022-1471, CVE-2025-31651, CVE-2025-31650, CVE-2022-42003, CVE-2025-25193, CVE-2024-6763, CVE-2025-52999, CVE-2025-24970, CVE-2025-49125, CVE-2025-48734, CVE-2024-52317, CVE-2025-48988, CVE-2025-46701 Feature Change Block Tracking (CBT) support has been added for latest kernel versions in RHEL 8.10, 9.2, 9.4 and 9.6.
- OS Support: Expanded Change Block Tracking (CBT) support to include SLES 15 SP7 and updated kernels for RHEL 8 and 9.
- OEL 8.8, 9.1, and 9.2 RHEL 8.8 and 9.2 RHEL for SAP 8.8, 9.0, and 9.2 Rocky Linux 8.8, 9.0, 9.1, and 9.2 Rocky Linux Optimised for Google Cloud 8.8 and 9.2 SLES 15 SP5 SLES for SAP 15 SP5 Announcement Backup and DR Service 11.0.8.454 is now available to update your backup/recovery appliance.
- Announcement The new Backup and DR Service update policy requires updating all backup/recovery appliances older than version 11.0.3 to maintain product support and avoid restrictions on enabling backups for new entities.

