---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.181Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Database Center support for Backup and DR-protected databases"
feature_slug: "database-center-support-for-backup-and-dr-protected-databases"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-workloads-for-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "protected"
  - "center"
  - "database"
  - "databases"
  - "backup"
  - "for"
  - "and"
  - "dr"
---

# Database Center support for Backup and DR-protected databases

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Database Center support for resources protected by Backup and DR Service entered public preview, providing a unified data protection posture dashboard.

## Extended Definition

Database Center support for resources protected by Backup and DR Service entered public preview, providing a unified data protection posture dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-workloads-for-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-workloads-for-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### Prepare Oracle databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Patch Oracle 12c Backup and DR application aware mounts may fail if your Oracle 12c installation does not include this patch, which can be downloaded from the Oracle support portal: Oracle Database 12c Bug# 19404068 (ORA-1610 ON RECOVER DATABASE FOR CREATED CONTROLFILE) (Patch 19404068) Linux x86-64 for Oracle 12.1.0.2.0 To see if the patch is installed, run: cd $ORACLE HOME /OPatch ./opatch lsinventory -details ./opatch lsinventory -details grep 19404068 What's Next Before adding the Oracle host, continue to: (Optional) Use Oracle Direct NFS with Backup and DR Oracle patches and known issues The Oracle DBA Guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example: Database name: dbstd , Instance Name: dbstd If the Oracle servicename is not listed, then create the service name entry in the tnsnames.ora file at $ORACLE HOME/network/admin or at $GRID HOME/network/admin by adding the entry: act svc dbstd = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = (IP of the database server))(PORT = 1521)) (CONNECT DATA = (SERVER = DEDICATED) (SERVICE NAME = dbstd) ) ) If the tnsnames.ora file is in a non-standard location, then provide the absolute path to it under Application Details & Settings as described in Application details & settings for Oracle databases Test the service name entry for the database to make sure it is configured: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbstd Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbstd as sysdba Provide the servicename created (act svc dbstd) under the Oracle Service Name setting under Application Details & Settings as described in Application details & settings for Oracle Databases Create and verify the Oracle servicename in a RAC environment The Oracle servicename is used for database authentication only.
- SERVICE NAME = database name INSTANCE NAME = database instance name on node3 Test the servicename: Login as Oracle OS user and set the Oracle environment: TNS ADMIN =( tnsnames.ora file location ) tnsping act svc dbrac3 Check the database user account to be sure the Backup and DR backup can connect: sqlplus act rman user/act rman user@act svc dbrac3 as sysdba Provide the service name created (act svc dbrac3) under the Oracle Service name setting under Application Details & Settings described in Application details & settings for Oracle Databases .
- Home Documentation Storage Backup and DR Reference Send feedback Prepare Oracle databases for Backup and DR Stay organized with collections Save and categorize content based on your preferences.

### "Prepare data resources for Backup and DR for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-workloads-for-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-workloads-for-backupdr)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following pages list prerequisites to prepare your workloads for protection by Backup and DR Service: Configure Google Cloud VMware Engine for Backup and DR protection Prepare Filestore and other file systems for Backup and DR Service Backup and DR for self-managed databases: Prerequisites for backing up an Oracle database Prepare Oracle databases for Backup and DR Service Prepare SAP HANA for Backup and DR Service Prepare SQL Server databases for Backup and DR Service Prepare other self-managed databases for Backup and DR Service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Prepare data resources for Backup and DR for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Java is a registered trademark of Oracle and/or its affiliates.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups What's Next Prepare SQL server databases for Backup and DR Service .
- Access SQL Server data For Microsoft SQL Server databases that use the full recovery model, Backup and DR can instantly present a copy of the database rolled forward to a specific point of time.
- Other documentation for Backup and DR for Microsoft SQL Server This page is one in a series of pages specific to protecting and recovering Microsoft SQL Server databases with Backup and DR.
- For Microsoft SQL Server databases that use the basic recovery model, Backup and DR can instantly present any backup of the database that has not passed its retention period.

