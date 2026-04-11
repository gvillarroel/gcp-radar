---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.211Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Rocky Linux 8.7 operating system support"
feature_slug: "rocky-linux-8-7-operating-system-support"
latest_feature_date: "2023-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "operating"
  - "system"
  - "rocky"
  - "agent"
  - "linux"
  - "backup"
  - "and"
  - "dr"
---

# Rocky Linux 8.7 operating system support

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR agent was enhanced to support the Rocky Linux 8.7 operating system.

## Extended Definition

Backup and DR agent was enhanced to support the Rocky Linux 8.7 operating system.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Operating System Version Basic Backup and DR agent Support Change Block Tracking Support for SQL Server Windows Server 2025 Datacenter Yes Yes Windows Server 2025 Datacenter Core Yes Yes Windows Server 2022 Datacenter Yes Yes Windows Server 2022 Datacenter Core Yes Yes Windows Server 2019 Datacenter Yes Yes Windows Server 2019 Datacenter Core Yes Yes Windows Server 2016 Datacenter Yes Yes Windows Server 2016 Datacenter Core Yes Yes Linux operating system support Backup and DR agent supports the following Linux (x86) operating systems.
- Operating System Source FS Staging Disk FS Min required Backup and DR agent Version Windows NTFS NTFS V11.0.1 SMB NTFS V11.0.1 ReFS ReFS V11.0.1 Linux 1 EXT2 EXT2 or NFS 4 V11.0.1 EXT3 EXT3 or NFS 4 V11.0.1 EXT4 EXT4 or NFS 4 V11.0.1 XFS XFS or NFS 4 V11.0.1 ReiserFS ReiserFS or NFS 4 V11.0.1 NFS EXT3 or NFS 4 V11.0.1 BTRFS EXT3 or NFS 4 V11.0.1 1 LVM snapshot is used as source, if present.
- Agent based backups The Backup and DR agent can back up and recover supported databases and file systems of supported Microsoft Windows & Linux operating systems in the following environments.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service access point IP address: This allows the backup/recovery appliance to connect to the Backup and DR agent using the cluster resource IP and to back up the file system from the active cluster node.
- The following steps describe the process for how to perform data backup and recovery with volume-based backup images and CBT: The Backup and DR agent has CBT to track changed blocks in the file system.
- You can find additional information in the following pages: Backup and DR for file systems Manage hosts and their connected applications Configure application details and settings to protect file system data Apply a backup plan to protect a file system Restore a file system to the source Mount a file system or file share Mount and migrate a file system for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service lets you capture data from production SMB, NFS, and Filestore file systems, manage it in the most efficient way possible, and use virtual copies of the data for business requirements like backup, test and development, analytics, and AI.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR agent is enhanced to support Rocky Linux 8.7 operating system version.
- Feature Backup and DR agent is enhanced to support Oracle Enterprise Linux 8.7 and 9.0 operating system version.
- Announcement Backup and DR Service 11.0.10 includes an operating system upgrade from CentOS 7 to Rocky Linux 8.
- Feature Backup and DR agent is enhanced to support RHEL 8.6, RHEL 8.7, and RHEL 9.0 operating system version.

