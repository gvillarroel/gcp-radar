---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.207Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Job completion events and alerts"
feature_slug: "job-completion-events-and-alerts"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "completion"
  - "events"
  - "alerts"
  - "job"
  - "backup"
  - "added"
  - "and"
  - "dr"
---

# Job completion events and alerts

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR added support for viewing successful job events and configuring alerts when jobs complete successfully.

## Extended Definition

Backup and DR added support for viewing successful job events and configuring alerts when jobs complete successfully.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- You can now configure email notifications via Cloud Logging to receive timely alerts on appliance status changes or potential issues, and five new events have been added for more granular monitoring: 10237: Jobs running over 6 hours.
- Feature Added support to view successful job events and set up alerts to notify you when a job has successfully completed.
- Security The following CVEs have been addressed in this release: CVE-2024-38286, CVE-2019-9636, CVE-2023-5178, CVE-2020-14343, CVE-2021-29921, CVE-2019-7164, CVE-2020-27619, CVE-2018-20060, CVE-2019-20477, CVE-2019-9948, CVE-2020-1747, CVE-2021-3177, CVE-2022-42919, CVE-2024-0565, CVE-2015-20107, CVE-2023-51042, CVE-2020-10878, CVE-2023-6546, CVE-2022-0391, CVE-2022-45884, CVE-2021-33631, CVE-2020-10543, CVE-2019-20907, CVE-2023-3812, CVE-2019-11324, CVE-2022-45919, CVE-2023-6931, CVE-2024-1086, CVE-2021-43818, CVE-2021-33503, CVE-2020-26116, CVE-2019-20916, CVE-2023-2163, CVE-2021-42771, CVE-2022-45886, CVE-2021-3737, CVE-2023-52425, CVE-2018-18074, CVE-2021-27291, CVE-2021-20270, CVE-2023-24329, CVE-2019-18874, CVE-2019-16056, CVE-2019-7548, CVE-2021-3572, CVE-2019-9740, CVE-2021-23336, CVE-2020-14422, CVE-2021-3426, CVE-2023-1192, CVE-2022-38096, CVE-2023-6135, CVE-2020-8492, CVE-2020-27783, CVE-2020-28493, CVE-2023-46218, CVE-2021-4189, CVE-2020-26137, CVE-2021-3733, CVE-2019-16935, CVE-2021-28957, CVE-2018-20852, CVE-2019-11236, CVE-2019-9947, CVE-2020-28241, CVE-2023-5388, CVE-2023-28322 CVE-2022-48624, CVE-2023-38546, CVE-2021-20095 December 02, 2024 Feature Backup and DR service added integration with the Compute Engine VM creation experience, enabling the application of Backup and DR backup policies when VMs are created.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- When you protect the entire instance, as databases are added to the instance, they are automatically included in the next Backup and DR capture job.
- Backup and DR has a proprietary method of change block tracking so backup solutions using SQL or other methods of obtaining the backups are not impacted by a scheduled Backup and DR data capture jobs.
- Reason If legacy backup jobs and Backup and DR jobs run concurrently, it may result a serious performance impact on the database server leading to instability and possibly an outage.
- Backup and DR minimizes the impact during jobs, but even a block-level incremental-forever update must generate some I/O, and must take a little time.

