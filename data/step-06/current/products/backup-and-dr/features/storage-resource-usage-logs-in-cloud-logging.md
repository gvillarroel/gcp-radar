---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.200Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Storage resource usage logs in Cloud Logging"
feature_slug: "storage-resource-usage-logs-in-cloud-logging"
latest_feature_date: "2024-06-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "usage"
  - "storage"
  - "resource"
  - "logging"
  - "logs"
  - "added"
  - "in"
  - "to"
---

# Storage resource usage logs in Cloud Logging

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added support to view storage resource usage logs in Cloud Logging.

## Extended Definition

Added support to view storage resource usage logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR Service added support to view storage resource usage logs in Cloud Logging.
- Feature Backup and DR Service added support to view unprotected resource logs in Cloud Logging.
- June 11, 2024 Feature Backup and DR Service added support to view storage resource utilization reports in BigQuery.
- October 17, 2024 Feature Backup and DR Service added support to view connector version logs in Cloud Logging.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If you have an organization policy that includes the resource locations constraint , any snapshot storage location that you specify must be in the set of locations defined by the constraint.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- Snapshots can be stored in either one Cloud Storage multi-regional location , such as asia, or one Cloud Storage regional location , such as asia-south1.

