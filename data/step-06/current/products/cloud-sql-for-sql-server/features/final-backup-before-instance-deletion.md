---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.542Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Final backup before instance deletion"
feature_slug: "final-backup-before-instance-deletion"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options"
keywords:
  - "final"
  - "backup"
  - "before"
  - "instance"
  - "deletion"
  - "lets"
  - "you"
  - "create"
---

# Final backup before instance deletion

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Final backup before instance deletion lets you create a last backup that can be used to restore data to a new instance after deletion.

## Extended Definition

Final backup before instance deletion lets you create a last backup that can be used to restore data to a new instance after deletion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID, created in the previous step HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID, created in the previous step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Using this flag when you create an instance before that project has been fully upgraded to the new network architecture can lead to IP address overconsumption or a failure to create instances if there aren't sufficient IP addresses remaining in the allocated IP range.
- Enable retained backups after instance deletion Determines whether automated and on-demand backups are retained after an instance is deleted.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you create a new instance with the final backup instance setting enabled, then you must update the final backup organization policy to apply the backup configurations to the primary instance only.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- Retained backups are different from final backups , which are the last backups taken at time of instance deletion.
- Unable to create a replica instance after successfully creating a primary instance with the final backup setting.

### "Choose your backup option \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-4`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides an overview of the key features available with each backup option: Features Standard backups Enhanced backups Centralized backup management across projects - ✔ Backup vault - ✔ Automated backup schedule Daily Hourly, daily, weekly, monthly, yearly On-demand backups ✔ ✔ Multi-region backups ✔ ✔ Final backup in instance deletion ✔ ✔ Backup retention period 1 year 10 years Retain all backups on instance deletion ✔ ✔ Retain backups on project deletion - ✔ Enforced retention with retention lock - ✔ Point-in-time recovery using logs ✔ ✔ Point-in-time recovery after instance deletion ✔ ✔ Cross-region backup and restore ✔ - CMEK support ✔ - For detailed information about these backup options, see Standard backups and Enhanced backups .
- If you elect to take a final backup of your instance prior to deletion, then you can set the backup retention for the final backup for up to 10 years as well.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- You can retain backups after instance deletion, or take a final backup of your instance prior to deletion.

