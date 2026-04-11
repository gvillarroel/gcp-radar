---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.212Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Hotfix update rollback"
feature_slug: "hotfix-update-rollback"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "rollback"
  - "hotfix"
  - "update"
  - "backup"
  - "the"
  - "added"
  - "and"
  - "dr"
---

# Hotfix update rollback

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added the ability to roll back hotfix updates.

## Extended Definition

Backup and DR Service added the ability to roll back hotfix updates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Security The following CVEs have been addressed in this release: CVE-2024-38286, CVE-2019-9636, CVE-2023-5178, CVE-2020-14343, CVE-2021-29921, CVE-2019-7164, CVE-2020-27619, CVE-2018-20060, CVE-2019-20477, CVE-2019-9948, CVE-2020-1747, CVE-2021-3177, CVE-2022-42919, CVE-2024-0565, CVE-2015-20107, CVE-2023-51042, CVE-2020-10878, CVE-2023-6546, CVE-2022-0391, CVE-2022-45884, CVE-2021-33631, CVE-2020-10543, CVE-2019-20907, CVE-2023-3812, CVE-2019-11324, CVE-2022-45919, CVE-2023-6931, CVE-2024-1086, CVE-2021-43818, CVE-2021-33503, CVE-2020-26116, CVE-2019-20916, CVE-2023-2163, CVE-2021-42771, CVE-2022-45886, CVE-2021-3737, CVE-2023-52425, CVE-2018-18074, CVE-2021-27291, CVE-2021-20270, CVE-2023-24329, CVE-2019-18874, CVE-2019-16056, CVE-2019-7548, CVE-2021-3572, CVE-2019-9740, CVE-2021-23336, CVE-2020-14422, CVE-2021-3426, CVE-2023-1192, CVE-2022-38096, CVE-2023-6135, CVE-2020-8492, CVE-2020-27783, CVE-2020-28493, CVE-2023-46218, CVE-2021-4189, CVE-2020-26137, CVE-2021-3733, CVE-2019-16935, CVE-2021-28957, CVE-2018-20852, CVE-2019-11236, CVE-2019-9947, CVE-2020-28241, CVE-2023-5388, CVE-2023-28322 CVE-2022-48624, CVE-2023-38546, CVE-2021-20095 December 02, 2024 Feature Backup and DR service added integration with the Compute Engine VM creation experience, enabling the application of Backup and DR backup policies when VMs are created.
- February 27, 2025 Announcement Backup and DR now supports the latest RHEL and SLES OS and kernels in backup/recovery appliance 11.0.13 and later: RHEL 8.8 : 4.18.0-477.36.1, 4.18.0-477.43.1, 4.18.0-477.51.1, 4.18.0-477.55.1, 4.18.0-477.58.1, 4.18.0-477.64.1, 4.18.0-477.67.1, 4.18.0-477.70.1, 4.18.0-477.75.1, 4.18.0-477.81.1, 4.18.0-477.83.1 RHEL 8.10 : 4.18.0-553.30.1, 4.18.0-553.32.1, 4.18.0-553.33.1 RHEL 9.3 : 5.14.0-362.24.1 RHEL 9.4 : 5.14.0-427.13.1, 5.14.0-427.16.1, 5.14.0-427.18.1, 5.14.0-427.20.1, 5.14.0-427.22.1, 5.14.0-427.24.1, 5.14.0-427.26.1, 5.14.0-427.28.1, 5.14.0-427.31.1, 5.14.0-427.33.1, 5.14.0-427.35.1, 5.14.0-427.37.1, 5.14.0-427.40.1, 5.14.0-427.42.1 RHEL 9.5 : 5.14.0-503.11.1, 5.14.0-503.14.1, 5.14.0-503.15.1, 5.14.0-503.16.1, 5.14.0-503.19.1 SLES 15 SP6 : All kernels February 26, 2025 Announcement Backup and DR Service 11.0.14.302 is now available to update your backup/recovery appliance.
- Announcement The Backup and DR service has added support for activating the management console and for storing backup vault data in the following regions: us-west3 (Salt Lake City), europe-west9 (Paris), me-west1 (Israel), europe-north1 (Finland), europe-west6 (Zürich), asia-northeast3 (Seoul), southamerica-west1 (Santiago).
- Backup and DR Service 11.0.14.302 includes the following fixes and improvements: The following CVEs have been addressed in this hotfix: CVE-2024-42301, CVE-2024-42284, CVE-2024-41092 In some cases, a database that has data on multiple volumes can be mounted successfully, but a subsequent unmount operation fails.

### "Prepare other self-managed databases for Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Add or update the parameters in the file /pgdata/11/data/postgresql.conf wal level = replica archive mode = always archive command = 'test ! -f /pglog/%f && cp %p /pglog/%f' Restart the PostgreSQL: /usr/pgsql-11/bin/pg ctl stop -D /pgdata/11/data /usr/pgsql-11/bin/pg ctl start -D /pgdata/11/data Add or update entry in pg hba.conf on Primary to accept database connection from standby. host postgres <db-user> <standby-ip/32> <connection method> Example: host postgres postgres 10.128.0.29/32 trust Test the archive generation (as postgres user): ls -l /pglog/ Run this log switch command: /usr/pgsql-11/bin/psql -h 10 .128.0.28 -p5432 -c "select pg switch wal();" sleep 5 # log shipping may take some time depending on network ls -l /pglog/ SAP ASE database prerequisites Before you begin, on the SAP ASE server complete the following: A backup user account must be created with backup privilege—either oper role or sa role .
- The procedures on this page are for most self-managed databases: For Review Then use IBM Db2 Backup and DR for IBM Db2 Db2 database prerequisites PostgreSQL Backup and DR for PostgreSQL PostgreSQL database prerequisites SAP ASE Backup and DR for SAP ASE SAP ASE database prerequisites SAP IQ Backup and DR for SAP IQ SAP IQ database prerequisites SAP MaxDB Backup and DR for SAP MaxDB SAP MaxDB database prerequisites SAP HANA Backup and DR for SAP HANA Prepare SAP HANA databases for backup Microsoft SQL Server Backup and DR for SQL Server Prepare SQL server databases for Backup and DR Service Oracle Backup and DR for Oracle Prerequisites for backing up an Oracle database and its following pages For all other Backup and DR supported databases, follow these procedures.
- To configure the archive log mode option, update the postgresql.conf file in the data directory of the instance and reload the PostgreSQL. archive mode = on // Command to reload PostgreSQL pg ctl reload -D <Postgres datadir path> Example : pg ctl reload -D /pgdata Protect PostgreSQL from a standby node Create a backup user: create user actuser; Provide privilege for backup: alter user actuser with superuser ; alter user actuser with Replication ; PostgreSQL archive mode—WAL—setup on standby node: Create the directory where we want to keep the WALs.
- To set the LOGARCHMETH1 parameter, use the following: db2 update db cfg for <dbname> LOGARCHMETH1 using 'DISK:<location>' For HADR-standby database the reads on standby option must be enabled, that is the DB2 HADR ROS parameter must be set to ON .

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Backup and DR minimizes the impact during jobs, but even a block-level incremental-forever update must generate some I/O, and must take a little time.
- When you protect the entire instance, as databases are added to the instance, they are automatically included in the next Backup and DR capture job.
- Capture SQL Server data Backup and DR Service lets you capture the following types of Microsoft SQL Server applications: Instances Databases in Always On Availability Groups Consistency groups of databases Individual databases System databases User databases Databases in VMs Backup and DR moves and manages the Microsoft SQL Server data separately from where Microsoft SQL Server writes its primary storage.
- Backup and DR working with existing backup products As more and more enterprises look to speed up the application development using production databases, Backup and DR is often required to coexist with legacy backup products working off the same production database environments.

