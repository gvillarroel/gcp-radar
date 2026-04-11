---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.182Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup Vault retention lock by backup rule"
feature_slug: "backup-vault-retention-lock-by-backup-rule"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan"
keywords:
  - "setting"
  - "lock"
  - "rule"
  - "retention"
  - "by"
  - "vault"
  - "backup"
  - "was"
---

# Backup Vault retention lock by backup rule

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

A backup vault setting was added to prevent deletion during the retention duration defined in the backup rule, blocking manual deletion.

## Extended Definition

A backup vault setting was added to prevent deletion during the retention duration defined in the backup rule, blocking manual deletion.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, this feature locks backups for the exact retention period defined in the associated backup plan, overriding the vault's local minimum retention and preventing manual deletion.
- Feature A new backup vault setting, Prevent deletion for duration specified in backup rule , is now available.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source project deletion and source cluster deletion, PiTR using logs and centralized monitoring and reporting.
- If your backup appliance was originally installed as version 11.0.5 or older (before July 2023), then the 11.0.9 upgrade includes an additional automated procedure to prepare for the coming upgrade by making some adjustments to the backup appliance's boot disk partitions.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- To more efficiently and effectively manage the storage requirements for a database's logs, snapshot policies provide the following advanced settings: Log Backup Retention Period : Log retention is defined separately from its associated database.
- Backup and DR has a proprietary method of change block tracking so backup solutions using SQL or other methods of obtaining the backups are not impacted by a scheduled Backup and DR data capture jobs.
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups What's Next Prepare SQL server databases for Backup and DR Service .
- When enabled (not default), logs are sent to each OnVault pool specified by a valid OnVault policy or resource profile combination (e.g., OnVault pool one selected in the policy, and OnVault pool one specified in the resource profile).

### "Backup plans in the appliance management console overview \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Where the backup data is retained (local backup/recovery appliance, remote backup/recovery appliance or OnVault storage location) By mixing and matching policies within a template you can create a single template that defines the shortterm and longterm retention of data, as well as where the data will be retained and how long the replicated data will be retained.
- What's next Create a backup template Create a backup policy Create a resource profile Configure advanced policy settings of an application backed up by the policy Apply a backup plan to an application Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifically, the policies define the following: The types of data backup operation (e.g., snapshot, replication) The frequency of the application data backup operation How long to retain the application data backups The advanced settings related to the application data backup operation Whether to truncate logs.
- Backup plans are the rules that the appliance management console uses to define how often to back up application data, how long to retain the application data backups, and where and how to replicate the application's data backups.

