---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.918Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Change Block Tracking (CBT) support for RHEL kernels"
feature_slug: "change-block-tracking-cbt-support-for-rhel-kernels"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle"
keywords:
  - "kernels"
  - "tracking"
  - "change"
  - "block"
  - "rhel"
  - "added"
---

# Change Block Tracking (CBT) support for RHEL kernels

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Change Block Tracking support was added for newer RHEL kernels including 8.10, 9.2, 9.4, and 9.6.

## Extended Definition

Change Block Tracking support was added for newer RHEL kernels including 8.10, 9.2, 9.4, and 9.6.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)

## Supporting Pages

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- OS Version Basic Backup and DR agent Support Change Block Tracking Support Min required Backup and DR agent Version RHEL 1,4 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 8.10 Yes Yes V11.0.12 9.0 Yes No V11.0.4 9.2 Yes Yes V11.0.15 9.4 Yes Yes V11.0.15 9.5 Yes Yes V11.0.15 9.6 Yes Yes V11.0.16 9.7 Yes Yes V11.0.16 RHEL for SAP 1 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 9.0 Yes No V11.0.8 9.2 Yes Yes V11.0.14 9.4 Yes Yes V11.0.14 SLES 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 SLES for SAP 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 Rocky Linux 9.3 Yes Yes V11.0.15 Rocky Linux optimized for Google Cloud 9.3 Yes No V11.0.9 Ubuntu 20.04 LTS Yes No V11.0.1 22.04 LTS Yes No V11.0.1 Oracle Linux 1, 2 7.0-7.6 Yes No V11.0.1 7.7 Yes No V11.0.1 7.8 Yes No V11.0.1 7.9 Yes No V11.0.1 8.0-8.1 Yes No V11.0.1 8.2 Yes No V11.0.1 8.3 Yes No V11.0.1 8.4 Yes No V11.0.1 8.5 Yes No V11.0.1 8.6 Yes No V11.0.1 8.7 Yes No V11.0.4 8.8 5 Yes No V11.0.8 9.0 Yes No V11.0.4 9.1 5 Yes No V11.0.8 9.2 5 Yes No V11.0.8 9.6 5 Yes No V11.0.16 1 Symantec (Veritas) Dynamic Multi Pathing (DMP) is NOT supported.
- Note: Protection of VMware View virtual machines not supported. vCenter 1, 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0, 8.0 U3 7 ESX Server 6 7.0, 7.0 U1, 7.0 U2, 7.0 U3, 8.0.3 starting with Backup and DR Service V11.0.17 Virtual Hardware 2 7 to 15 and 17 to 19 Guest OS All Google Cloud VMware Engine supported OSs Quiesce applications 3 Yes, based on VMware Tools vSAN Support 4 vSAN 7.0 U1, vSAN 7.0 U2, vSAN 7.0 U3 Change Block Tracking 5 Leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP) 1 This leverages VMware VDDK version 7.0.
- Application Discovery : Backup and DR agent enables deep discovery of databases and file systems configured on a production host API integration : Where possible, Backup and DR agents integrate with the application specific APIs/commands for efficient capture of application data Change Block Tracking : In situations where the production applications don't have a built-in change block tracking, Backup and DR introduces change block tracking on select platforms Application aware recovery/mount : Backup and DR agents have built in application awareness.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RMAN scans each block in a data file for all data files in the database during incremental backup when Change Block Tracking on the database is not enabled.
- Oracle database block change tracking (BCT) Oracle block change tracking enables fast database backups by identifying which blocks have changed.
- Oracle records the changed blocks in each data file in a tracking file which is a small binary file stored in the database area.
- Change block tracking is enabled at database level.

### Prepare Oracle databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Preparation procedures for Oracle databases Step Preparation procedure 1 Prepare Oracle databases in a Linux environment or Prepare Oracle databases in a Windows environment 2 Prepare to back up an Oracle database with data files on an ASM disk group 3 Prepare Oracle database authentication Enable database block change tracking (optional) Protect from an Oracle Data Guard node Configure RAC transparent failover of RMAN backup to other nodes Oracle archive logs compression Configure Oracle database services for load balancing across multiple nodes Patch Oracle 12c Prepare Oracle databases in a Linux environment Before you protect an Oracle database, or if database protection jobs fail, make sure that the following settings are correct on the Oracle database server.
- If database block change tracking is not enabled, then enable database block change tracking from sqlplus: Using ASM Disk Group sqlplus / as sysdba On the sql prompt: alter database enable block change tracking using file '+<ASM Disk Group Name>/<database name>/<dbname>.bct' ; Using file system sqlplus / as sysdba On the sql prompt: alter database enable block change tracking using file '$ORACLE HOME/dbs/<dbname>.bct' ; Protect from an Oracle Data Guard node You can protect an Oracle database from primary database nodes or from Oracle Data Guard standby nodes.
- If the tnsnames.ora file is in a non-standard location, then provide the absolute path to the tnsnames.ora file under the Oracle TNS Admin Path setting udner Application Details & Settings described in Application details & settings for Oracle databases Enable database block change tracking (optional) Database change block tracking is described in Oracle database block change tracking (BCT) To check if database block change tracking is enabled: sqlplus / as sysdba On the sql prompt: select from v$block change tracking ; Note: Tracking is optional.
- Tracking is described in Oracle Database Block Change Tracking (BCT) .

