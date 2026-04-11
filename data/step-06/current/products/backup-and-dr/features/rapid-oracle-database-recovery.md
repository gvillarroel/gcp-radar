---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.215Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Rapid Oracle database recovery"
feature_slug: "rapid-oracle-database-recovery"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
keywords:
  - "significantly"
  - "rapid"
  - "database"
  - "oracle"
  - "recovery"
  - "backup"
  - "and"
  - "dr"
---

# Rapid Oracle database recovery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service significantly reduced Oracle database recovery time by enabling near-instant backup storage-based startup and online migration.

## Extended Definition

Backup and DR Service significantly reduced Oracle database recovery time by enabling near-instant backup storage-based startup and online migration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)

## Supporting Pages

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR with Oracle Exadata database or Oracle ExaCC Backup/recovery appliances support capture and presentation of Exadata data over iSCSI or Oracle dNFS protocols.
- If the Oracle wallet files were captured during Backup and DR Service backup by setting the Oracle Configuration File Location advanced setting, the wallet files can be retrieved with the following steps: Do a standard mount of the database to the target host.
- The following best practices can help improve your experience: Oracle database backup schedule Best practice Schedule Backup and DR Service database backup jobs to begin at a time when the legacy backup software should be finished.

### Prepare Oracle databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Patch Oracle 12c Backup and DR application aware mounts may fail if your Oracle 12c installation does not include this patch, which can be downloaded from the Oracle support portal: Oracle Database 12c Bug# 19404068 (ORA-1610 ON RECOVER DATABASE FOR CREATED CONTROLFILE) (Patch 19404068) Linux x86-64 for Oracle 12.1.0.2.0 To see if the patch is installed, run: cd $ORACLE HOME /OPatch ./opatch lsinventory -details ./opatch lsinventory -details grep 19404068 What's Next Before adding the Oracle host, continue to: (Optional) Use Oracle Direct NFS with Backup and DR Oracle patches and known issues The Oracle DBA Guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: Database name: dbstd , Instance Name: dbstd If the Oracle servicename is not listed, then create the service name entry in the tnsnames.ora file at $ORACLE HOME/network/admin or at $GRID HOME/network/admin by adding the entry: act svc dbstd = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = (IP of the database server))(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = dbstd) ) ) If the tnsnames.ora file is in a non-standard location, then provide the absolute path to it under Application Details & Settings as described in Application details & settings for Oracle databases Test the service name entry for the database to make sure it is configured: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbstd Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbstd as sysdba Provide the servicename created (act svc dbstd) under the Oracle Service Name setting under Application Details & Settings as described in Application details & settings for Oracle Databases Create and verify the Oracle servicename in a RAC environment The Oracle servicename is used for database authentication only.
- Create a database service for the maintenance node to be used by Backup and DR for backup: srvctl add service -d <dbname> -s act service <dbname> -r <dbinstance3>,<dbinstance4> srvctl start service -d <dbname> -s act service <dbname> Add the tns entry for the Oracle service name created on backup nodes ( dbinstance3 and dbinstance4 node in this example) under tnsnames.ora file ($ORACLE HOME/network/admin/tnsnames.ora or at $GRID HOME/network/admin/tnsnames.ora) act service <dbname> = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = <SCAN IP>)(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = <DATABASE NAME>) ) ) Test the created servicename created: tnsping act service <dbname> Test the servicename and user credentials: sqlplus act rman user/act rman user@act service <dbname> as sysdba Specify this service name under Application Details & Settings Oracle service name.
- Example in an Oracle Environment, not One Node: 2 node RAC ( dbrac1 , dbrac2 ) Protection is set using database name "dbrac" from dbrac1 and failover is to be set to dbrac2 Service name on node2: act svc dbrac2 Node2 IP or scan IP: 172.1.1.0 act svc node2 = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 172.1.1.0)(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (INSTANCE NAME = dbrac2) (SERVICE NAME = dbrac) ) ) Under Application Details & Settings , the cluster nodes entries are the following: 1:172.1.1.1:act svc node2:F The behavior of cluster node entries F and M F : Failover node, only participates when protecting node is not to perform the backup.

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- 3 Capture from ASM to ASM and presentation of backups in ASM format not supported on Windows operating systems 4 Oracle ASM instance required on the source system for this capture method 5 The combination of ASM Disk (capture format) is not supported when data is captured over NFS Supported Data Capture formats Using File System Using ASM Disk Group Backup support HCC or Non HCC Data Oracle Recovery using RMAN HCC or non HCC App-Aware Mount 1 Exadata to non Exadata 1 Accessing data from virtual copies of HCC compressed data will require the data to be uncompressed before access Oracle exadata support Backup and DR Service supports the following configurations of Oracle Exadata.
- Application Discovery : Backup and DR agent enables deep discovery of databases and file systems configured on a production host API integration : Where possible, Backup and DR agents integrate with the application specific APIs/commands for efficient capture of application data Change Block Tracking : In situations where the production applications don't have a built-in change block tracking, Backup and DR introduces change block tracking on select platforms Application aware recovery/mount : Backup and DR agents have built in application awareness.

