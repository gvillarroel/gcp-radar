---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.195Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Unprotected resource logs in Cloud Logging"
feature_slug: "unprotected-resource-logs-in-cloud-logging"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "unprotected"
  - "resource"
  - "logging"
  - "logs"
  - "backup"
  - "and"
  - "in"
  - "dr"
---

# Unprotected resource logs in Cloud Logging

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports unprotected resource logs in Cloud Logging.

## Extended Definition

Backup and DR now supports unprotected resource logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR Service added support to view unprotected resource logs in Cloud Logging.
- Feature Backup and DR Service added support to view storage resource usage logs in Cloud Logging.
- September 30, 2024 Feature Backup and DR Service added support to view unprotected resource reports in BigQuery.
- October 17, 2024 Feature Backup and DR Service added support to view connector version logs in Cloud Logging.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Recovery and rolling forward of the logs for all or individual databases in a consistency group is performed from the Backup and DR user interface with a single action.
- Recovery and rolling forward of the logs for all or individual databases in an instance is performed from the Backup and DR user interface with a single action.
- Best Practice Continue to allow all log management be performed by the legacy backup software, don't use Backup and DR to protect logs in this environment.
- Resize database log's staging disk The physical space required to accommodate backups of a database's logs is automatically managed by Backup and DR.

