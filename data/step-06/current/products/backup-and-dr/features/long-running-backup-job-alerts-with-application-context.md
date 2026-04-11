---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.183Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Long-running backup job alerts with application context"
feature_slug: "long-running-backup-job-alerts-with-application-context"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan"
keywords:
  - "application"
  - "context"
  - "long"
  - "running"
  - "alerts"
  - "job"
  - "with"
  - "backup"
---

# Long-running backup job alerts with application context

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Alerts for long-running jobs were improved to include application type and application name.

## Extended Definition

Alerts for long-running jobs were improved to include application type and application name.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Improved alerting for long-running jobs by adding application type and name to the alerts.
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- Security This release fixes the following Kernel vulnerabilities: CRITICAL Kernel issues: CVE-2023-25775 CVE-2019-15505 MEDIUM Kernel issues CVE-2019-13631 CVE-2020-25656 CVE-2020-26555 CVE-2020-36777 CVE-2021-3753 CVE-2021-46909 CVE-2021-46939 CVE-2021-47171 CVE-2022-38096 CVE-2022-48743 CVE-2023-1192 CVE-2023-4133 CVE-2023-5090 CVE-2023-6121 CVE-2023-6176 CVE-2023-6240 CVE-2023-6622 CVE-2023-6915 CVE-2023-24023 CVE-2023-31083 CVE-2023-37453 CVE-2023-38409 CVE-2023-39189 CVE-2023-39192 CVE-2023-39193 CVE-2023-39194 CVE-2023-39198 CVE-2023-42754 CVE-2023-42755 CVE-2023-45863 CVE-2023-52448 CVE-2023-52463 CVE-2023-52471 CVE-2024-0340 CVE-2024-21140 CVE-2024-21145 CVE-2024-25739 CVE-2024-26583 CVE-2024-26584 CVE-2024-26585 CVE-2024-26586 CVE-2024-26602 CVE-2024-26603 CVE-2024-26901 CVE-2024-26908 CVE-2024-27014 CVE-2024-27019 CVE-2024-36270 CVE-2024-36489 CVE-2024-38598 CVE-2024-39472 CVE-2024-39476 HIGH Kernel issues: CVE-2019-25162 CVE-2021-4204 CVE-2021-33631 CVE-2021-47624 CVE-2022-0500 CVE-2022-3565 CVE-2022-23222 CVE-2022-45884 CVE-2022-45886 CVE-2022-45919 CVE-2022-45934 CVE-2023-2163 CVE-2023-3567 CVE-2023-3812 CVE-2023-4244 CVE-2023-5178 CVE-2023-6546 CVE-2023-6931 CVE-2023-6932 CVE-2023-28464 CVE-2023-51042 CVE-2023-51780 CVE-2023-52340 CVE-2023-52434 CVE-2023-52439 CVE-2023-52445 CVE-2023-52451 CVE-2023-52464 CVE-2023-52469 CVE-2024-0565 CVE-2024-0841 CVE-2024-1086 CVE-2024-21147 CVE-2024-23307 CVE-2024-25744 CVE-2024-26593 CVE-2024-26907 CVE-2024-26933 CVE-2024-26934 CVE-2024-27020 CVE-2024-36971 CVE-2024-36978 CVE-2024-36979 CVE-2024-38538 CVE-2024-38555 CVE-2024-38627 CVE-2024-39487 Fixed This release fixes an issue where SAP HANA database and log backup jobs using Persistent Disk snapshots would complete with a warning status due to metadata upload failures to Google Cloud Storage for disaster recovery.
- Security The following CVEs have been addressed in this release: CVE-2024-38286, CVE-2019-9636, CVE-2023-5178, CVE-2020-14343, CVE-2021-29921, CVE-2019-7164, CVE-2020-27619, CVE-2018-20060, CVE-2019-20477, CVE-2019-9948, CVE-2020-1747, CVE-2021-3177, CVE-2022-42919, CVE-2024-0565, CVE-2015-20107, CVE-2023-51042, CVE-2020-10878, CVE-2023-6546, CVE-2022-0391, CVE-2022-45884, CVE-2021-33631, CVE-2020-10543, CVE-2019-20907, CVE-2023-3812, CVE-2019-11324, CVE-2022-45919, CVE-2023-6931, CVE-2024-1086, CVE-2021-43818, CVE-2021-33503, CVE-2020-26116, CVE-2019-20916, CVE-2023-2163, CVE-2021-42771, CVE-2022-45886, CVE-2021-3737, CVE-2023-52425, CVE-2018-18074, CVE-2021-27291, CVE-2021-20270, CVE-2023-24329, CVE-2019-18874, CVE-2019-16056, CVE-2019-7548, CVE-2021-3572, CVE-2019-9740, CVE-2021-23336, CVE-2020-14422, CVE-2021-3426, CVE-2023-1192, CVE-2022-38096, CVE-2023-6135, CVE-2020-8492, CVE-2020-27783, CVE-2020-28493, CVE-2023-46218, CVE-2021-4189, CVE-2020-26137, CVE-2021-3733, CVE-2019-16935, CVE-2021-28957, CVE-2018-20852, CVE-2019-11236, CVE-2019-9947, CVE-2020-28241, CVE-2023-5388, CVE-2023-28322 CVE-2022-48624, CVE-2023-38546, CVE-2021-20095 December 02, 2024 Feature Backup and DR service added integration with the Compute Engine VM creation experience, enabling the application of Backup and DR backup policies when VMs are created.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Be aware of your existing backup plans and try not to schedule snapshot jobs simultaneously with the snapshot jobs for very large or dynamic applications.
- To identify job retries all four jobs will have the same job number in the following format in this order: Job xxxxx (Status: Retried) Job xxxxxa (Status: Retried; queued after a 4 minute holdoff) Job xxxxxb (Status: Retried; queued after a 16 minute holdoff) Job xxxxxc (Status: Failed; queued after a 64 minute holdoff) The next time a backup job for this application is attempted depends on the policy's schedule.
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- About on-demand jobs Most jobs run on a schedule according to their backup plans, but for upcoming maintenance windows, software upgrades, and for the first snapshot of a new application, you want to ensure that you have a successful copy of the data created before you start your scheduled maintenance task.

### "Backup plans in the appliance management console overview \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To identify job retries all four jobs will have the same Job number in the following format in this order: Job xxxxx (Status: Retried) Job xxxxxa (Status: Retried; queued after a 4 minute holdoff) Job xxxxxb (Status: Retried; queued after a 16 minute holdoff) Job xxxxxc (Status: Failed; queued after a 64 minute holdoff) The next time a backup job for this application is attempted is according to the policy's schedule.
- Where the backup data is retained (local backup/recovery appliance, remote backup/recovery appliance or OnVault storage location) By mixing and matching policies within a template you can create a single template that defines the shortterm and longterm retention of data, as well as where the data will be retained and how long the replicated data will be retained.
- Specifically, the policies define the following: The types of data backup operation (e.g., snapshot, replication) The frequency of the application data backup operation How long to retain the application data backups The advanced settings related to the application data backup operation Whether to truncate logs.
- Resource profiles are applied to applications in the App Manager and the resource profiles work in tandem with policy templates: A policy template that does not include a replication policy must be applied to an application along with a resource profile that only stores data locally.

