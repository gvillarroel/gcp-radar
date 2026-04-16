---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.917Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Database Center support for Backup and DR-protected databases"
feature_slug: "database-center-support-for-backup-and-dr-protected-databases"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
keywords:
  - "resources"
  - "protected"
  - "entered"
  - "center"
  - "database"
  - "databases"
---

# Database Center support for Backup and DR-protected databases

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Database Center support for resources protected by Backup and DR Service entered public preview, providing a unified data protection posture dashboard.

## Extended Definition

Database Center support for resources protected by Backup and DR Service entered public preview, providing a unified data protection posture dashboard.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)

## Supporting Pages

### Prepare Oracle databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Patch Oracle 12c Backup and DR application aware mounts may fail if your Oracle 12c installation does not include this patch, which can be downloaded from the Oracle support portal: Oracle Database 12c Bug# 19404068 (ORA-1610 ON RECOVER DATABASE FOR CREATED CONTROLFILE) (Patch 19404068) Linux x86-64 for Oracle 12.1.0.2.0 To see if the patch is installed, run: cd $ORACLE HOME /OPatch ./opatch lsinventory -details ./opatch lsinventory -details grep 19404068 What's Next Before adding the Oracle host, continue to: (Optional) Use Oracle Direct NFS with Backup and DR Oracle patches and known issues The Oracle DBA Guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: Database name: dbstd , Instance Name: dbstd If the Oracle servicename is not listed, then create the service name entry in the tnsnames.ora file at $ORACLE HOME/network/admin or at $GRID HOME/network/admin by adding the entry: act svc dbstd = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = (IP of the database server))(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = dbstd) ) ) If the tnsnames.ora file is in a non-standard location, then provide the absolute path to it under Application Details & Settings as described in Application details & settings for Oracle databases Test the service name entry for the database to make sure it is configured: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbstd Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbstd as sysdba Provide the servicename created (act svc dbstd) under the Oracle Service Name setting under Application Details & Settings as described in Application details & settings for Oracle Databases Create and verify the Oracle servicename in a RAC environment The Oracle servicename is used for database authentication only.
- Preparation procedures for Oracle databases Step Preparation procedure 1 Prepare Oracle databases in a Linux environment or Prepare Oracle databases in a Windows environment 2 Prepare to back up an Oracle database with data files on an ASM disk group 3 Prepare Oracle database authentication Enable database block change tracking (optional) Protect from an Oracle Data Guard node Configure RAC transparent failover of RMAN backup to other nodes Oracle archive logs compression Configure Oracle database services for load balancing across multiple nodes Patch Oracle 12c Prepare Oracle databases in a Linux environment Before you protect an Oracle database, or if database protection jobs fail, make sure that the following settings are correct on the Oracle database server.
- SERVICE NAME = database name INSTANCE NAME = database instance name on node3 Test the servicename: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbrac3 Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbrac3 as sysdba Provide the service name created (act svc dbrac3) under the Oracle Service name setting under Application Details & Settings described in Application details & settings for Oracle Databases .

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can use the Managed Backup Plan status filter to show only protected databases.
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- To discover HANA databases on a Compute Engine instance and then protect them with Backup and DR Service, the Compute Engine instance hosting the SAP HANA database must be onboarded before you can onboard the SAP HANA database application.
- Permission Check On Source and target Project for the Cloud Storage service Mount the backup Use these instructions to mount a backup: Right-click the protected database from the App Manager Applications list, and select Access .

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Agentless backups Backup and DR Service supports VM backups in the following environments without needing an agent inside the VM: Compute Engine and Cloud SQL instances (leverages Persistent Disk snapshot APIs) SAP HANA and IBM Db2 databases that are backed up to Persistent Disk Google Cloud VMware Engine VMs (leverages VMware vSphere Storage APIs - Data Protection (formerly known as vStorage APIs for Data Protection or VADP)) Object storage compatibility for OnVault OnVault supports the following Google Cloud storage: Standard storage Nearline storage Coldline storage Archive storage Application data virtualization with the Backup and DR agent Backup and DR agent (commonly also known as connector) is a lightweight executable that delivers the following advanced capabilities during the data capture and recovery processes.
- Supported PostgreSQL versions Supported OSes Min required Backup and DR Service agent version 10.23 RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 11.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 12.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 13.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 14.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 RHEL 8.8, 8.10 Rocky Linux 9 V11.0.16 15.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 RHEL 8.8, 8.10, RHEL 9.x SLES 15 SP7 V11.0.16 16.x RHEL 8.10 V11.0.13-14 with hotfixes RHEL 8.10, RHEL 9.x Rocky Linux 9, SLES 15 SP7 V11.0.16 SAP Backup and DR Service supports SAP on all the databases supported in this document.
- Application Discovery : Backup and DR agent enables deep discovery of databases and file systems configured on a production host API integration : Where possible, Backup and DR agents integrate with the application specific APIs/commands for efficient capture of application data Change Block Tracking : In situations where the production applications don't have a built-in change block tracking, Backup and DR introduces change block tracking on select platforms Application aware recovery/mount : Backup and DR agents have built in application awareness.
- Supported IBM Db2 versions Supported OSes Min required Backup and DR agent version 10.5 SLES 12 V11.0.1 11.1.0 SLES 12 V11.0.1 11.5.0 SLES 12 V11.0.1 11.5.8.0 RHEL 8.x SLES 12 and 15 V11.0.4 11.5.9 RHEL 8.8, 8.10, RHEL 9.x V11.0.16 12.1 RHEL 9.x SLES 15 SP6, SLES 15 SP7 V11.0.17 Oracle Backup and DR agents enable database consistent data capture of Oracle databases.

