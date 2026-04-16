---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.944Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Rapid Oracle database recovery"
feature_slug: "rapid-oracle-database-recovery"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle"
keywords:
  - "significantly"
  - "reduced"
  - "rapid"
  - "database"
  - "oracle"
  - "recovery"
---

# Rapid Oracle database recovery

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service significantly reduced Oracle database recovery time by enabling near-instant backup storage-based startup and online migration.

## Extended Definition

Backup and DR Service significantly reduced Oracle database recovery time by enabling near-instant backup storage-based startup and online migration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)

## Supporting Pages

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The associated architecture provides application-consistent, incremental-forever backup to Google Cloud, as well as instant recovery and cloning for multi-TB Oracle databases.
- Backup and DR with Oracle Exadata database or Oracle ExaCC Backup/recovery appliances support capture and presentation of Exadata data over iSCSI or Oracle dNFS protocols.
- This includes backup, recovery, and Application Aware mount operations of Oracle database with Transparent Data Encryption (TDE) configured.

### Prepare Oracle databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Patch Oracle 12c Backup and DR application aware mounts may fail if your Oracle 12c installation does not include this patch, which can be downloaded from the Oracle support portal: Oracle Database 12c Bug# 19404068 (ORA-1610 ON RECOVER DATABASE FOR CREATED CONTROLFILE) (Patch 19404068) Linux x86-64 for Oracle 12.1.0.2.0 To see if the patch is installed, run: cd $ORACLE HOME /OPatch ./opatch lsinventory -details ./opatch lsinventory -details grep 19404068 What's Next Before adding the Oracle host, continue to: (Optional) Use Oracle Direct NFS with Backup and DR Oracle patches and known issues The Oracle DBA Guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: Database name: dbstd , Instance Name: dbstd If the Oracle servicename is not listed, then create the service name entry in the tnsnames.ora file at $ORACLE HOME/network/admin or at $GRID HOME/network/admin by adding the entry: act svc dbstd = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = (IP of the database server))(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = dbstd) ) ) If the tnsnames.ora file is in a non-standard location, then provide the absolute path to it under Application Details & Settings as described in Application details & settings for Oracle databases Test the service name entry for the database to make sure it is configured: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbstd Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbstd as sysdba Provide the servicename created (act svc dbstd) under the Oracle Service Name setting under Application Details & Settings as described in Application details & settings for Oracle Databases Create and verify the Oracle servicename in a RAC environment The Oracle servicename is used for database authentication only.
- Create a database service for the maintenance node to be used by Backup and DR for backup: srvctl add service -d <dbname> -s act service <dbname> -r <dbinstance3>,<dbinstance4> srvctl start service -d <dbname> -s act service <dbname> Add the tns entry for the Oracle service name created on backup nodes ( dbinstance3 and dbinstance4 node in this example) under tnsnames.ora file ($ORACLE HOME/network/admin/tnsnames.ora or at $GRID HOME/network/admin/tnsnames.ora) act service <dbname> = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = <SCAN IP>)(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = <DATABASE NAME>) ) ) Test the created servicename created: tnsping act service <dbname> Test the servicename and user credentials: sqlplus act rman user/act rman user@act service <dbname> as sysdba Specify this service name under Application Details & Settings Oracle service name.
- Preparation procedures for Oracle databases Step Preparation procedure 1 Prepare Oracle databases in a Linux environment or Prepare Oracle databases in a Windows environment 2 Prepare to back up an Oracle database with data files on an ASM disk group 3 Prepare Oracle database authentication Enable database block change tracking (optional) Protect from an Oracle Data Guard node Configure RAC transparent failover of RMAN backup to other nodes Oracle archive logs compression Configure Oracle database services for load balancing across multiple nodes Patch Oracle 12c Prepare Oracle databases in a Linux environment Before you protect an Oracle database, or if database protection jobs fail, make sure that the following settings are correct on the Oracle database server.

### "Prerequisites for backing up an Oracle database in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Oracle DBA guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For best results, pay attention to ASM scalability and limits (from Oracle Doc ID 370921.1) Backup and DR staging disk on a file system To protect an ASM database to a file system format, go to Application Details & Settings and select Yes under Convert ASM format to filesystem format .
- Oracle RMAN backup in a file system or in an ASM disk group Oracle database backup has different properties depending on whether the images are protected from: File system : For all source database configurations other than Oracle ASM, the backup is under a file system.
- Home Documentation Storage Backup and DR Reference Send feedback Prerequisites for backing up an Oracle database in the appliance management console Stay organized with collections Save and categorize content based on your preferences.

