---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.930Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Oracle database restore to any target"
feature_slug: "oracle-database-restore-to-any-target"
latest_feature_date: "2024-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
keywords:
  - "target"
  - "restoring"
  - "database"
  - "databases"
  - "restore"
  - "oracle"
  - "added"
---

# Oracle database restore to any target

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added support for restoring Oracle databases to any target.

## Extended Definition

Added support for restoring Oracle databases to any target.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)

## Supporting Pages

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- Note: Before restoring an SAP HANA database to a new target server, if the DATA, Active LOG and Log backup volumes are encrypted by HANA encryption, then import the encryption keys from the source database server to the target database server.
- Discover and protect SAP HANA databases Note: If you are protecting a HANA database that has already been added and that already has LVM backup images, then you must change the capture method from LVM to Persistent Disk.
- If you are restoring to a new target: To recover to a new target, select the project, region and zone of the instance that you want to recover the HANA database to.

### Prepare Oracle databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Patch Oracle 12c Backup and DR application aware mounts may fail if your Oracle 12c installation does not include this patch, which can be downloaded from the Oracle support portal: Oracle Database 12c Bug# 19404068 (ORA-1610 ON RECOVER DATABASE FOR CREATED CONTROLFILE) (Patch 19404068) Linux x86-64 for Oracle 12.1.0.2.0 To see if the patch is installed, run: cd $ORACLE HOME /OPatch ./opatch lsinventory -details ./opatch lsinventory -details grep 19404068 What's Next Before adding the Oracle host, continue to: (Optional) Use Oracle Direct NFS with Backup and DR Oracle patches and known issues The Oracle DBA Guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To check the type of compression set in the environment, run the show all command from the RMAN prompt: rman target / show all Configure Oracle database services for load balancing across multiple nodes This procedure applies only to Oracle ASM databases.
- Example: Database name: dbstd , Instance Name: dbstd If the Oracle servicename is not listed, then create the service name entry in the tnsnames.ora file at $ORACLE HOME/network/admin or at $GRID HOME/network/admin by adding the entry: act svc dbstd = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = (IP of the database server))(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = dbstd) ) ) If the tnsnames.ora file is in a non-standard location, then provide the absolute path to it under Application Details & Settings as described in Application details & settings for Oracle databases Test the service name entry for the database to make sure it is configured: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbstd Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbstd as sysdba Provide the servicename created (act svc dbstd) under the Oracle Service Name setting under Application Details & Settings as described in Application details & settings for Oracle Databases Create and verify the Oracle servicename in a RAC environment The Oracle servicename is used for database authentication only.
- Preparation procedures for Oracle databases Step Preparation procedure 1 Prepare Oracle databases in a Linux environment or Prepare Oracle databases in a Windows environment 2 Prepare to back up an Oracle database with data files on an ASM disk group 3 Prepare Oracle database authentication Enable database block change tracking (optional) Protect from an Oracle Data Guard node Configure RAC transparent failover of RMAN backup to other nodes Oracle archive logs compression Configure Oracle database services for load balancing across multiple nodes Patch Oracle 12c Prepare Oracle databases in a Linux environment Before you protect an Oracle database, or if database protection jobs fail, make sure that the following settings are correct on the Oracle database server.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For Oracle databases with TDE, wallet files from the source backup host must be available to the target host of any Application Aware mounts.
- If the Oracle wallet files were captured during Backup and DR Service backup by setting the Oracle Configuration File Location advanced setting, the wallet files can be retrieved with the following steps: Do a standard mount of the database to the target host.
- Protect Oracle databases in a Backup and DR consistency group In most configurations, a consistency group can contain a single Oracle database application and any number of file system applications from the Oracle server.

