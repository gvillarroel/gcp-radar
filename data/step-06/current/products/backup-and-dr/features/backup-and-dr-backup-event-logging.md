---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.218Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and DR backup event logging"
feature_slug: "backup-and-dr-backup-event-logging"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
keywords:
  - "centralized"
  - "supports"
  - "logging"
  - "event"
  - "backup"
  - "now"
  - "and"
  - "dr"
---

# Backup and DR backup event logging

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports centralized logging of backup events in Cloud Logging with custom filtering.

## Extended Definition

Backup and DR now supports centralized logging of backup events in Cloud Logging with custom filtering.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 06, 2023 Feature Backup and DR Service now supports logging and alerting via Cloud Logging and Cloud Monitoring .
- February 27, 2025 Announcement Backup and DR now supports the latest RHEL and SLES OS and kernels in backup/recovery appliance 11.0.13 and later: RHEL 8.8 : 4.18.0-477.36.1, 4.18.0-477.43.1, 4.18.0-477.51.1, 4.18.0-477.55.1, 4.18.0-477.58.1, 4.18.0-477.64.1, 4.18.0-477.67.1, 4.18.0-477.70.1, 4.18.0-477.75.1, 4.18.0-477.81.1, 4.18.0-477.83.1 RHEL 8.10 : 4.18.0-553.30.1, 4.18.0-553.32.1, 4.18.0-553.33.1 RHEL 9.3 : 5.14.0-362.24.1 RHEL 9.4 : 5.14.0-427.13.1, 5.14.0-427.16.1, 5.14.0-427.18.1, 5.14.0-427.20.1, 5.14.0-427.22.1, 5.14.0-427.24.1, 5.14.0-427.26.1, 5.14.0-427.28.1, 5.14.0-427.31.1, 5.14.0-427.33.1, 5.14.0-427.35.1, 5.14.0-427.37.1, 5.14.0-427.40.1, 5.14.0-427.42.1 RHEL 9.5 : 5.14.0-503.11.1, 5.14.0-503.14.1, 5.14.0-503.15.1, 5.14.0-503.16.1, 5.14.0-503.19.1 SLES 15 SP6 : All kernels February 26, 2025 Announcement Backup and DR Service 11.0.14.302 is now available to update your backup/recovery appliance.
- Backup and DR Service now supports Shielded VMs during the restore process, meaning no changes to org policies are required, maintaining a continuous security posture.
- Feature Backup and DR Service now supports migrating manual protection to dynamic protection using tags through management console.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- Data virtualization for virtual environments Backup and DR supports data virtualization for virtual environments using the following methods: Google Cloud VMware Engine Backup and DR Service supports capturing data from VMware virtual machines by using VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) calls to capture an entire virtual server.
- 3 Capture from ASM to ASM and presentation of backups in ASM format not supported on Windows operating systems 4 Oracle ASM instance required on the source system for this capture method 5 The combination of ASM Disk (capture format) is not supported when data is captured over NFS Supported Data Capture formats Using File System Using ASM Disk Group Backup support HCC or Non HCC Data Oracle Recovery using RMAN HCC or non HCC App-Aware Mount 1 Exadata to non Exadata 1 Accessing data from virtual copies of HCC compressed data will require the data to be uncompressed before access Oracle exadata support Backup and DR Service supports the following configurations of Oracle Exadata.
- Supported PostgreSQL versions Supported OSes Min required Backup and DR Service agent version 10.23 RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 11.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 12.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 13.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 14.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 RHEL 8.8, 8.10 Rocky Linux 9 V11.0.16 15.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 RHEL 8.8, 8.10, RHEL 9.x SLES 15 SP7 V11.0.16 16.x RHEL 8.10 V11.0.13-14 with hotfixes RHEL 8.10, RHEL 9.x Rocky Linux 9, SLES 15 SP7 V11.0.16 SAP Backup and DR Service supports SAP on all the databases supported in this document.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Oracle databases with TDE Backup and DR Service supports a variety of capture and presentation methods for Oracle databases under various configurations.
- Backup and DR Service incremental-forever supports databases running with BCT enabled or disabled.
- Bring Backup and DR protected ASM diskgroups back online after reboot of a target DB server After any database server reboot where Backup and DR copy is mounted, or Backup and DR backups are in progress for the database at the time of reboot/crash, follow these steps to get the Backup and DR disk group mount back: Check that the target database server is back up, and that ASM and RAC system are also up.

