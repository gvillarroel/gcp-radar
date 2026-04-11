---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.181Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "AlloyDB for PostgreSQL enhanced backups with Backup and DR"
feature_slug: "alloydb-for-postgresql-enhanced-backups-with-backup-and-dr"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle"
keywords:
  - "alloydb"
  - "postgresql"
  - "enhanced"
  - "backups"
  - "with"
  - "backup"
  - "for"
  - "and"
---

# AlloyDB for PostgreSQL enhanced backups with Backup and DR

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

AlloyDB for PostgreSQL enhanced backups entered public preview with Backup and DR, including backup vault support, backup plans, and centralized management.

## Extended Definition

AlloyDB for PostgreSQL enhanced backups entered public preview with Backup and DR, including backup vault support, backup plans, and centralized management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)

## Supporting Pages

### Backup and DR Service for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PostgreSQL backup API used by Backup and DR Volume level (Linux change block tracking and LVM snapshot) backups : Backup and DR uses the PostgreSQL pg start backup(label) and pg stop backup() commands when performing backups with Linux change block tracking and LVM snapshot.
- What's next Prepare the database for Backup and DR Other documentation for Backup and DR for PostgreSQL Backup and DR for PostgreSQL Prepare the database for Backup and DR Add a PostgreSQL database host and discover databases Define policy templates and resource profiles Set application details and settings Check staging disk format and backup method Protect the PostgreSQL database and its logs Mount a PostgreSQL database Recover PostgreSQL Backups Create a PostgreSQL Backup and DR Workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The quiesce or unquiesce command is run on the primary for a volume-level snapshot job: select pg start backup ( <label> ) ; select pg stop backup () ; The quiesce and unquiesce commands are run on a standby node for a volume-level snapshot job: If PostgreSQL version is 10.x or later: select pg wal replay pause () ; select pg wal replay resume () ; If PostgreSQL version is 9.x: select pg xlog replay pause () ; select pg xlog replay resume () ; How it works: file-based backup The following steps describe the process for how to perform data backup and recovery with file-based backup images: Backup and DR agent is deployed in the database server.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for PostgreSQL Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- October 30, 2025 Feature Announcing the Public Preview launch of AlloyDB for PostgreSQL enhanced backups with Backup and DR Service.
- With enhanced backups, backups are managed and stored in a centralized backup management project that leverages Backup and DR service to provide enforced retention, granular scheduling, and longer retention.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Database Center is an AI-assisted dashboard that highlights fleet-wide data points.The integration is designed to provide Database Center users with a single, unified, and accurate view of the data protection posture for all databases protected by Backup and DR Service.This capability is available today, at no additional cost, for all Cloud SQL customers who have protected their databases through Backup and DR Service enhanced protection.

### Backup and DR Service for Oracle \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-oracle)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Other documentation for Backup and DR for Oracle Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Set application details and settings Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Bring Backup and DR protected ASM diskgroups back online after reboot of a target DB server After any database server reboot where Backup and DR copy is mounted, or Backup and DR backups are in progress for the database at the time of reboot/crash, follow these steps to get the Backup and DR disk group mount back: Check that the target database server is back up, and that ASM and RAC system are also up.
- Backup and DR capture of Exadata data and ExaCC The Backup and DR agent must be installed on the Exadata server to facilitate communication with the backup/recovery appliance and to invoke the RMAN API for database backup.
- RMAN metadata conflict with legacy backups that make Backup and DR Service backups obsolete By default, the parameter DO NOT UNCATALOG in Backup and DR Service application details & settings is set to No .

