---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.195Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Connector version reports in BigQuery"
feature_slug: "connector-version-reports-in-bigquery"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "version"
  - "connector"
  - "reports"
  - "backup"
  - "now"
  - "and"
  - "in"
  - "dr"
---

# Connector version reports in BigQuery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports exporting or viewing connector version reports in BigQuery.

## Extended Definition

Backup and DR now supports exporting or viewing connector version reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Backup and DR Service added support to view connector version reports in BigQuery.
- This release includes fixes for the following security vulnerabilities: CVE-2021-35937 CVE-2021-35939 CVE-2022-48560 CVE-2022-48564 CVE-2023-1667 CVE-2023-7104 CVE-2023-27043 CVE-2023-28484 CVE-2023-28486 CVE-2023-28487 CVE-2023-29469 CVE-2023-38408 CVE-2023-39615 CVE-2023-42465 CVE-2023-48795 April 22, 2024 Feature Backup and DR Service now support viewing Backup and DR Service pre built reports in Looker Studio.
- January 07, 2026 Feature You can now use cost reports to view resource-specific Backup and DR billing costs to gain granular insights into service spending and to take actions to optimize resource allocation.
- October 17, 2024 Feature Backup and DR Service added support to view connector version logs in Cloud Logging.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- Note: Protection of VMware View virtual machines not supported. vCenter 1, 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0, 8.0 U3 7 ESX Server 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0.3 starting with Backup and DR Service V11.0.17 Virtual Hardware 2 7 to 15 and 17 to 19 Guest OS All Google Cloud VMware Engine supported OSs Quiesce applications 3 Yes, based on VMware Tools vSAN Support 4 vSAN 7.0 U1, vSAN 7.0 U2, vSAN 7.0 U3 Change Block Tracking 5 Leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) 1 This leverages VMware VDDK version 7.0.
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Supported Configuration SAP HANA SavePoint API 2 SAP file-based (HDBSQL/Backint) 3 Supported OSes Min required Backup and DR agent version Scale-out HANA 2.0, non shared storage Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes RHEL 8.8 V11.0.16 Yes (preferred) 1 Yes RHEL 8.10 V11.0.14 Yes (preferred) 1 Yes RHEL 9.2 V11.0.15 Yes (preferred) 1 Yes RHEL 9.4 V11.0.15 Yes (preferred) 1 Yes RHEL 9.5 V11.0.14 Yes (preferred) 1 Yes RHEL 9.6 V11.0.16 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Yes (preferred) 1 Yes SLES 15 SP7 V11.0.16 Scale-out HANA 2.0, shared storage 4 Not Supported Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Not Supported Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 SAP HANA 2.0 Standalone or HA (1+1) Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Single Container System (HANA 1.0) 5 Yes (preferred) Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 1 Requires SAP HANA 2.0 SPS 04 or later 2 In this table, 'SAP HANA SavePoint API' is referring to SAP HANA backup leveraging Backup and DR CBT and its supporting incremental-forever and app-aware instant mount feature with log roll-forward option.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- After Backup and DR creates a snapshot to back up the current state of some or all Persistent Disks attached to an instance, you can use the backup image to either: Mount the image to create a new instance .

