---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.206Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Connector support for additional Linux OS versions"
feature_slug: "connector-support-for-additional-linux-os-versions"
latest_feature_date: "2024-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "additional"
  - "versions"
  - "connector"
  - "os"
  - "linux"
  - "backup"
  - "for"
  - "and"
---

# Connector support for additional Linux OS versions

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added basic connector support for new RHEL and Rocky Linux appliance versions.

## Extended Definition

Backup and DR Service added basic connector support for new RHEL and Rocky Linux appliance versions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### Backup and DR Service for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PostgreSQL backup API used by Backup and DR Volume level (Linux change block tracking and LVM snapshot) backups : Backup and DR uses the PostgreSQL pg start backup(label) and pg stop backup() commands when performing backups with Linux change block tracking and LVM snapshot.
- What's next Prepare the database for Backup and DR Other documentation for Backup and DR for PostgreSQL Backup and DR for PostgreSQL Prepare the database for Backup and DR Add a PostgreSQL database host and discover databases Define policy templates and resource profiles Set application details and settings Check staging disk format and backup method Protect the PostgreSQL database and its logs Mount a PostgreSQL database Recover PostgreSQL Backups Create a PostgreSQL Backup and DR Workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The quiesce or unquiesce command is run on the primary for a volume-level snapshot job: select pg start backup ( <label> ) ; select pg stop backup () ; The quiesce and unquiesce commands are run on a standby node for a volume-level snapshot job: If PostgreSQL version is 10.x or later: select pg wal replay pause () ; select pg wal replay resume () ; If PostgreSQL version is 9.x: select pg xlog replay pause () ; select pg xlog replay resume () ; How it works: file-based backup The following steps describe the process for how to perform data backup and recovery with file-based backup images: Backup and DR agent is deployed in the database server.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- You can find additional information in the following pages: Backup and DR for file systems Manage hosts and their connected applications Configure application details and settings to protect file system data Apply a backup plan to protect a file system Restore a file system to the source Mount a file system or file share Mount and migrate a file system for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service lets you capture data from production SMB, NFS, and Filestore file systems, manage it in the most efficient way possible, and use virtual copies of the data for business requirements like backup, test and development, analytics, and AI.
- What's next Manage hosts and their connected applications Other documentation for Backup and DR for file systems This page is one in a series of pages specific to protecting and recovering filesystems with Backup and DR Service.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Filestore and file systems on self-managed storage Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups What's Next Prepare SQL server databases for Backup and DR Service .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Microsoft SQL Server Stay organized with collections Save and categorize content based on your preferences.
- Access SQL Server data For Microsoft SQL Server databases that use the full recovery model, Backup and DR can instantly present a copy of the database rolled forward to a specific point of time.
- Other documentation for Backup and DR for Microsoft SQL Server This page is one in a series of pages specific to protecting and recovering Microsoft SQL Server databases with Backup and DR.

