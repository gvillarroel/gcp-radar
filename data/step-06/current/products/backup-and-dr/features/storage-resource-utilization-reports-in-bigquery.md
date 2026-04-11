---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.201Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Storage resource utilization reports in BigQuery"
feature_slug: "storage-resource-utilization-reports-in-bigquery"
latest_feature_date: "2024-06-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
keywords:
  - "utilization"
  - "storage"
  - "resource"
  - "reports"
  - "view"
  - "added"
  - "in"
  - "to"
---

# Storage resource utilization reports in BigQuery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added support to view storage resource utilization reports in BigQuery.

## Extended Definition

Added support to view storage resource utilization reports in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- View job details From the Job Details window, you can review the following: Details about the job Volume information Number of job retries Job statistics When you are done reviewing job details, click Return to Jobs to return to the Jobs page.
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.
- Once completed, select the job and click View Details to review: Details about the job Volume information Number of job retries Job statistics See Viewing Job Details for specifics on each of these areas.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- June 11, 2024 Feature Backup and DR Service added support to view storage resource utilization reports in BigQuery.
- September 30, 2024 Feature Backup and DR Service added support to view unprotected resource reports in BigQuery.
- Feature Backup and DR Service added support to view storage resource usage logs in Cloud Logging.
- January 07, 2026 Feature You can now use cost reports to view resource-specific Backup and DR billing costs to gain granular insights into service spending and to take actions to optimize resource allocation.

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

