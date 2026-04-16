---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.978Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Automated backup retention settings"
feature_slug: "automated-backup-retention-settings"
latest_feature_date: "2020-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance"
keywords:
  - "automated"
  - "backup"
  - "retention"
  - "settings"
  - "sql"
  - "mysql"
  - "supports"
  - "configurable"
---

# Automated backup retention settings

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports configurable retention periods for automated backups from 1 to 365 days.

## Extended Definition

Cloud SQL for MySQL supports configurable retention periods for automated backups from 1 to 365 days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The rolling period is defined based on the retention settings of the instance prior to deletion, which can range from 1 day to 10 years, depending on your instance's selected backup option .
- For example, if your instance's automated backup retention setting was set to 7, then the latest automated backup is deleted 7 days after the instance deletion.
- If you leave the field empty, then Cloud SQL takes the final backup configuration set in instance settings to take a final backup and define its retention.
- Automated backup retention depends on the configured retention policy in the chosen backup option for your instance.

### "Manage backups for deleted instances \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-backups-deleted-instance)
- Source ID: `site-docs-reference-required-5`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Update a final backup You can update the retention settings and the description of a final backup taken before an instance is deleted.
- For retained backups, the retention settings are set based on the retention settings of the backups when the instance was live.
- You can update the description and the retention settings of a final backup taken prior to deleting your instance.
- You can update the description and the retention settings for the final backup.

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-5`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- If you enable backup retention after instance deletion for your on-demand and automated backups, then those backups follow the same retention settings of 1 to 365 days for automated backups, and indefinitely for on-demand backups.
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- If you delete your instance, then all of your instance's backups that were created when your instance was live are retained automatically and follow the same retention settings set by the backup plan when the instance was live.
- Backup costs In standard backups, backup costs are based on the total size of the backup , its storage location and retention settings.

