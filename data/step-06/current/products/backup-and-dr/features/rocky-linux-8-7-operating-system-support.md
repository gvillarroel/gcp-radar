---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.940Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Rocky Linux 8.7 operating system support"
feature_slug: "rocky-linux-8-7-operating-system-support"
latest_feature_date: "2023-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems"
keywords:
  - "operating"
  - "system"
  - "rocky"
  - "agent"
  - "linux"
---

# Rocky Linux 8.7 operating system support

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR agent was enhanced to support the Rocky Linux 8.7 operating system.

## Extended Definition

Backup and DR agent was enhanced to support the Rocky Linux 8.7 operating system.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems)

## Supporting Pages

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 140
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
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Service access point IP address: This allows the backup/recovery appliance to connect to the Backup and DR agent using the cluster resource IP and to back up the file system from the active cluster node.
- The following steps describe the process for how to perform data backup and recovery with volume-based backup images and CBT: The Backup and DR agent has CBT to track changed blocks in the file system.
- Agent creates a LVM snapshot of the file system and synthesizes a bitmap.
- Agent API call to unfreeze the file system.

### "Prepare Filestore and other file systems for Backup and DR \_|\_ Google\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-filesystems)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In cases where the file system reports that it is over 128TiB the Backup and DR agent fails the backup with error code 5289: "The reported size of the protected volume requires that the staging disk size is specified for this application".
- Portmapper must be registered and running. sudo rpcinfo -p program vers proto port service 100000 4 tcp 111 portmapper 100000 3 tcp 111 portmapper 100000 2 tcp 111 portmapper 100000 4 udp 111 portmapper 100000 3 udp 111 portmapper 100000 2 udp 111 portmapper Check if the Linux host can make an RPC call to rpcbind and NFS programs on the backup/recovery appliance using the following. sudo rpcinfo -T tcp <#vm internal IP> rpcbind program 100000 version 2 ready and waiting program 100000 version 3 ready and waiting program 100000 version 4 ready and waiting sudo rpcinfo -T tcp <#vm internal IP> nfs program 100003 version 2 ready and waiting program 100003 version 3 ready and waiting If the preceding commands return the output shown earlier, then NFS connectivity from Linux host to the backup/recovery appliance is good.
- Run: rpm -qa grep rpcbind This should return something like: rpcbind-0.1.6+git20080930-6.15 If you see nothing, then you must install the packages using either YaST or zypper: Using YaST: # yast2 --install rpcbind Using Zypper: # zypper install rpcbind Learn NFS client information from the Linux host A Backup and DR-approved NFS client package and version must be installed on the host.
- Run: yum install rpcbind Install the NFS client on a SLES Linux host To see if the client is installed, run: # rpm -qa grep nfs This should return something similar to: nfs-client-1.2.1-2.6.6 yast2-nfs-common-2.17.7-1.1.2 yast2-nfs-client-2.17.12-0.1.81 If you don't see either nfs-client or yast2-nfs-xxxx packages, then use either YaST or zypper to install the NFS client packages.

