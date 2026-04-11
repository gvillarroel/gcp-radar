---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.218Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and DR backup event alerting"
feature_slug: "backup-and-dr-backup-event-alerting"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
keywords:
  - "alerting"
  - "supports"
  - "event"
  - "backup"
  - "now"
  - "for"
  - "and"
  - "dr"
---

# Backup and DR backup event alerting

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports alerting for backup events through Cloud Monitoring with channels such as email, SMS, Slack, and PagerDuty.

## Extended Definition

Backup and DR now supports alerting for backup events through Cloud Monitoring with channels such as email, SMS, Slack, and PagerDuty.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- March 06, 2023 Feature Backup and DR Service now supports logging and alerting via Cloud Logging and Cloud Monitoring .
- Backup and DR now supports "Import without ownership" for SAP HANA and IBM Db2 databases and logs.
- Feature Backup and DR Service now supports in-product notifications for important product updates.
- Feature Backup and DR Service now supports archive snapshots for Compute Engine instance backups.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Oracle databases with TDE Backup and DR Service supports a variety of capture and presentation methods for Oracle databases under various configurations.
- Backup and DR Service incremental-forever supports databases running with BCT enabled or disabled.
- Bring Backup and DR protected ASM diskgroups back online after reboot of a target DB server After any database server reboot where Backup and DR copy is mounted, or Backup and DR backups are in progress for the database at the time of reboot/crash, follow these steps to get the Backup and DR disk group mount back: Check that the target database server is back up, and that ASM and RAC system are also up.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- Data virtualization for virtual environments Backup and DR supports data virtualization for virtual environments using the following methods: Google Cloud VMware Engine Backup and DR Service supports capturing data from VMware virtual machines by using VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) calls to capture an entire virtual server.
- 3 Capture from ASM to ASM and presentation of backups in ASM format not supported on Windows operating systems 4 Oracle ASM instance required on the source system for this capture method 5 The combination of ASM Disk (capture format) is not supported when data is captured over NFS Supported Data Capture formats Using File System Using ASM Disk Group Backup support HCC or Non HCC Data Oracle Recovery using RMAN HCC or non HCC App-Aware Mount 1 Exadata to non Exadata 1 Accessing data from virtual copies of HCC compressed data will require the data to be uncompressed before access Oracle exadata support Backup and DR Service supports the following configurations of Oracle Exadata.
- Note: Protection of VMware View virtual machines not supported. vCenter 1, 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0, 8.0 U3 7 ESX Server 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0.3 starting with Backup and DR Service V11.0.17 Virtual Hardware 2 7 to 15 and 17 to 19 Guest OS All Google Cloud VMware Engine supported OSs Quiesce applications 3 Yes, based on VMware Tools vSAN Support 4 vSAN 7.0 U1, vSAN 7.0 U2, vSAN 7.0 U3 Change Block Tracking 5 Leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) 1 This leverages VMware VDDK version 7.0.

