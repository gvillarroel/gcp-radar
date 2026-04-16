---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.917Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Week 5 maintenance notifications"
feature_slug: "week-5-maintenance-notifications"
latest_feature_date: "2024-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "week"
  - "maintenance"
  - "notifications"
  - "sql"
  - "lets"
  - "you"
  - "choose"
  - "notification"
---

# Week 5 maintenance notifications

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you choose a maintenance notification option that alerts you 5 weeks before scheduled maintenance.

## Extended Definition

Cloud SQL lets you choose a maintenance notification option that alerts you 5 weeks before scheduled maintenance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Also referred to as Week 1 (Console) and preview (gcloud CLI). stable For an instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 15 to 21 days after the notification is sent out.
- Also referred to as Week 2 (Console) and production (gcloud CLI). week5 For instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 35 to 42 days after the notification is sent out.
- SqlUpdateTrack Enums SQL UPDATE TRACK UNSPECIFIED This is an unknown maintenance timing preference. canary For an instance with a scheduled maintenance window, this maintenance timing indicates that the maintenance update is scheduled 7 to 14 days after the notification is sent out.
- Returned in output as an integer, 1 to 7, where 1 equals Monday. updateTrack enum ( SqlUpdateTrack ) Maintenance timing settings: canary , stable , or week5 .

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-5`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Choose your backup option Stay organized with collections Save and categorize content based on your preferences.
- Although instances can't use multiple backup options simultaneously, Cloud SQL lets you switch between these backup options as needed.
- The backup option you choose defines the features and configuration options available for your Cloud SQL instance.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud SQL Enterprise edition instances: gcloud sql instances create INSTANCE NAME \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE \ --region = REGION Or, alternatively, you can use the --tier flag if you choose db-f1-micro or db-g1-small as the machine type: gcloud sql instances create INSTANCE NAME \ --tier = API TIER STRING \ --region = REGION There are restrictions on the values for vCPUs and memory size: vCPUs must be either 1 or an even number between 2 and 96.
- Maintenance schedule Maintenance window --maintenance-window-day , --maintenance-window-hour Determines a one-hour window when Cloud SQL can perform disruptive maintenance on your instance.
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- When you enable automatic minor version upgrades, your instance is upgraded to the default minor version of Cloud SQL for MySQL 8.0 during its regular scheduled maintenance update .

