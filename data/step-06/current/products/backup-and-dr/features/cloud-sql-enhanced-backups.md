---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.179Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Cloud SQL enhanced backups"
feature_slug: "cloud-sql-enhanced-backups"
latest_feature_date: "2025-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sql-server"
keywords:
  - "sql"
  - "generally"
  - "centralized"
  - "available"
  - "are"
  - "enhanced"
  - "backups"
  - "with"
---

# Cloud SQL enhanced backups

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Cloud SQL enhanced backups are generally available, with centralized backup management, enforced retention, granular scheduling, longer retention, and PITR after instance deletion.

## Extended Definition

Cloud SQL enhanced backups are generally available, with centralized backup management, enforced retention, granular scheduling, longer retention, and PITR after instance deletion.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sql-server)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- December 16, 2025 Feature Cloud SQL enhanced backups are now generally available (GA).
- With enhanced backups, backups are managed and stored in a centralized backup management project that leverages Backup and DR service to provide enforced retention, granular scheduling, and longer retention.
- March 05, 2026 Feature AlloyDB enhanced backups are now generally available ( GA ).
- Feature Filestore enhanced backups are now generally available (GA).

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups What's Next Prepare SQL server databases for Backup and DR Service .
- Backup and DR has a proprietary method of change block tracking so backup solutions using SQL or other methods of obtaining the backups are not impacted by a scheduled Backup and DR data capture jobs.
- Reason If your system is configured to manage (capture or truncate(purge)) logs, and the legacy backup software is also capturing and/or truncating/purging logs, then one or both systems may end up with an incomplete log chain, making it difficult or impossible to recover the database to a specific point in time.
- Backup and DR provides two ways to mount an Microsoft SQL Server database: The Virtual Application mount presents and makes the captured Microsoft SQL Server data available to a target server as an Microsoft SQL Server database.

### Prepare SQL Server databases for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sql-server)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Prepare SQL Server databases for Backup and DR Stay organized with collections Save and categorize content based on your preferences.
- To perform Backup and DR capture, restore, unmount, delete, and virtual application mount operations on a SQL Server database, you must provide credentials for a Windows user—a local user or a domain user—who has a role with sufficient SQL privileges to perform the operation.
- Windows local administrator user To perform capture, restore, unmount delete, and virtual application mounts, the Backup and DR agent must be installed with the credentials of a Microsoft Windows user who has sufficient privileges in the SQL environment.

