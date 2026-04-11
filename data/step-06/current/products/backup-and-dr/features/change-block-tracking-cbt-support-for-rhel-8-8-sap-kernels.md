---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.180Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Change Block Tracking (CBT) support for RHEL 8.8 SAP kernels"
feature_slug: "change-block-tracking-cbt-support-for-rhel-8-8-sap-kernels"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-ase"
keywords:
  - "kernels"
  - "tracking"
  - "change"
  - "block"
  - "cbt"
  - "sap"
  - "rhel"
  - "for"
---

# Change Block Tracking (CBT) support for RHEL 8.8 SAP kernels

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Change Block Tracking support was added for RHEL 8.8 SAP kernels.

## Extended Definition

Change Block Tracking support was added for RHEL 8.8 SAP kernels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-ase](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-ase)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added Change Block Tracking (CBT) support for RHEL 8.8 SAP kernels.
- OS Support: Expanded Change Block Tracking (CBT) support to include SLES 15 SP7 and updated kernels for RHEL 8 and 9.
- Security The following CVEs have been addressed in this release: CVE-2022-1471, CVE-2025-31651, CVE-2025-31650, CVE-2022-42003, CVE-2025-25193, CVE-2024-6763, CVE-2025-52999, CVE-2025-24970, CVE-2025-49125, CVE-2025-48734, CVE-2024-52317, CVE-2025-48988, CVE-2025-46701 Feature Change Block Tracking (CBT) support has been added for latest kernel versions in RHEL 8.10, 9.2, 9.4 and 9.6.
- Feature Added Change Block Tracking (CBT) support for the following OSes.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- OS Version Basic Backup and DR agent Support Change Block Tracking Support Min required Backup and DR agent Version RHEL 1,4 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 8.10 Yes Yes V11.0.12 9.0 Yes No V11.0.4 9.2 Yes Yes V11.0.15 9.4 Yes Yes V11.0.15 9.5 Yes Yes V11.0.15 9.6 Yes Yes V11.0.16 9.7 Yes Yes V11.0.16 RHEL for SAP 1 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 9.0 Yes No V11.0.8 9.2 Yes Yes V11.0.14 9.4 Yes Yes V11.0.14 SLES 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 SLES for SAP 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 Rocky Linux 9.3 Yes Yes V11.0.15 Rocky Linux optimized for Google Cloud 9.3 Yes No V11.0.9 Ubuntu 20.04 LTS Yes No V11.0.1 22.04 LTS Yes No V11.0.1 Oracle Linux 1, 2 7.0-7.6 Yes No V11.0.1 7.7 Yes No V11.0.1 7.8 Yes No V11.0.1 7.9 Yes No V11.0.1 8.0-8.1 Yes No V11.0.1 8.2 Yes No V11.0.1 8.3 Yes No V11.0.1 8.4 Yes No V11.0.1 8.5 Yes No V11.0.1 8.6 Yes No V11.0.1 8.7 Yes No V11.0.4 8.8 5 Yes No V11.0.8 9.0 Yes No V11.0.4 9.1 5 Yes No V11.0.8 9.2 5 Yes No V11.0.8 9.6 5 Yes No V11.0.16 1 Symantec (Veritas) Dynamic Multi Pathing (DMP) is NOT supported.
- Change Block Tracking (CBT) support includes incremental forever backup capability for other databases.
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Supported Configuration SAP HANA SavePoint API 2 SAP file-based (HDBSQL/Backint) 3 Supported OSes Min required Backup and DR agent version Scale-out HANA 2.0, non shared storage Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes RHEL 8.8 V11.0.16 Yes (preferred) 1 Yes RHEL 8.10 V11.0.14 Yes (preferred) 1 Yes RHEL 9.2 V11.0.15 Yes (preferred) 1 Yes RHEL 9.4 V11.0.15 Yes (preferred) 1 Yes RHEL 9.5 V11.0.14 Yes (preferred) 1 Yes RHEL 9.6 V11.0.16 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Yes (preferred) 1 Yes SLES 15 SP7 V11.0.16 Scale-out HANA 2.0, shared storage 4 Not Supported Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Not Supported Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 SAP HANA 2.0 Standalone or HA (1+1) Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Single Container System (HANA 1.0) 5 Yes (preferred) Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 1 Requires SAP HANA 2.0 SPS 04 or later 2 In this table, 'SAP HANA SavePoint API' is referring to SAP HANA backup leveraging Backup and DR CBT and its supporting incremental-forever and app-aware instant mount feature with log roll-forward option.

### Backup and DR Service for SAP ASE \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-ase](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-ase)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Backup and DR uses these SAP ASE backup APIs: Linux change block tracking and LVM snapshot : SAP ASE quiesce database hold and quiesce database release API with Linux change block tracking and LVM snapshot.
- How it works: Backup and DR volume-based backup with Linux CBT Data backup and recovery follows these steps: The Backup and DR agent has CBT to track changed blocks in the database data area.
- You can find additional information at: Backup and DR for SAP ASE Prepare the database for Backup and DR Add a SAP ASE database host and discover databases Define policy templates and resource profiles Set application details and settings Check staging disk format and backup method Protect the SAP ASE database and its logs Mount a SAP ASE database Recover SAP ASE Backups Create a SAP ASE Backup and DR Workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- What's next Prepare the database for Backup and DR Other documentation for Backup and DR for SAP ASE This page is one in a series of pages specific to protecting and recovering SAP ASE databases with Backup and DR.

