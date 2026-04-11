---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.204Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and recovery job log reporting in Cloud Logging"
feature_slug: "backup-and-recovery-job-log-reporting-in-cloud-logging"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan"
keywords:
  - "reporting"
  - "job"
  - "log"
  - "logging"
  - "recovery"
  - "backup"
  - "and"
  - "in"
---

# Backup and recovery job log reporting in Cloud Logging

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added comprehensive job reporting access via backup and recovery job logs in Cloud Logging.

## Extended Definition

Backup and DR Service added comprehensive job reporting access via backup and recovery job logs in Cloud Logging.

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
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now view comprehensive job related reporting data through backup and recovery job logs in Cloud Logging.
- Security This release fixes the following Kernel vulnerabilities: CRITICAL Kernel issues: CVE-2023-25775 CVE-2019-15505 MEDIUM Kernel issues CVE-2019-13631 CVE-2020-25656 CVE-2020-26555 CVE-2020-36777 CVE-2021-3753 CVE-2021-46909 CVE-2021-46939 CVE-2021-47171 CVE-2022-38096 CVE-2022-48743 CVE-2023-1192 CVE-2023-4133 CVE-2023-5090 CVE-2023-6121 CVE-2023-6176 CVE-2023-6240 CVE-2023-6622 CVE-2023-6915 CVE-2023-24023 CVE-2023-31083 CVE-2023-37453 CVE-2023-38409 CVE-2023-39189 CVE-2023-39192 CVE-2023-39193 CVE-2023-39194 CVE-2023-39198 CVE-2023-42754 CVE-2023-42755 CVE-2023-45863 CVE-2023-52448 CVE-2023-52463 CVE-2023-52471 CVE-2024-0340 CVE-2024-21140 CVE-2024-21145 CVE-2024-25739 CVE-2024-26583 CVE-2024-26584 CVE-2024-26585 CVE-2024-26586 CVE-2024-26602 CVE-2024-26603 CVE-2024-26901 CVE-2024-26908 CVE-2024-27014 CVE-2024-27019 CVE-2024-36270 CVE-2024-36489 CVE-2024-38598 CVE-2024-39472 CVE-2024-39476 HIGH Kernel issues: CVE-2019-25162 CVE-2021-4204 CVE-2021-33631 CVE-2021-47624 CVE-2022-0500 CVE-2022-3565 CVE-2022-23222 CVE-2022-45884 CVE-2022-45886 CVE-2022-45919 CVE-2022-45934 CVE-2023-2163 CVE-2023-3567 CVE-2023-3812 CVE-2023-4244 CVE-2023-5178 CVE-2023-6546 CVE-2023-6931 CVE-2023-6932 CVE-2023-28464 CVE-2023-51042 CVE-2023-51780 CVE-2023-52340 CVE-2023-52434 CVE-2023-52439 CVE-2023-52445 CVE-2023-52451 CVE-2023-52464 CVE-2023-52469 CVE-2024-0565 CVE-2024-0841 CVE-2024-1086 CVE-2024-21147 CVE-2024-23307 CVE-2024-25744 CVE-2024-26593 CVE-2024-26907 CVE-2024-26933 CVE-2024-26934 CVE-2024-27020 CVE-2024-36971 CVE-2024-36978 CVE-2024-36979 CVE-2024-38538 CVE-2024-38555 CVE-2024-38627 CVE-2024-39487 Fixed This release fixes an issue where SAP HANA database and log backup jobs using Persistent Disk snapshots would complete with a warning status due to metadata upload failures to Google Cloud Storage for disaster recovery.
- October 21, 2025 Fixed Resolved a problem with timestamp conversions during recovery range calculations in SAP HANA Fixed a bug that prevented the identification of persistent disk names in some SAP HANA environments Fixed DB2 restore issue wrt pre-flight checks and instances with a large number of archive logs Fixed a logging issue during Postgres upgrades where an incorrect version was displayed after a rollback Resolved a restore failure when using a combination of full and incremental backups for SAP ASE Fixed a connection leak and an issue with executor service shutdown in the VMware hypervisor integration, improving reliability.
- Feature This release introduces enhanced logging and alerting capabilities for backup/recovery appliances , enabling proactive monitoring of their health and status.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .
- Each backup/recovery appliance reserves a pool of slots for all various categories of jobs: data access, expiration, log replication, log OnVault, on-demand, OnVault, snapshot, streamsnap.
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.
- Run on-demand database log replication In some cases, you might need to manually initiate log replication to the remote backup/recovery appliance for a database image.

### "Backup plans in the appliance management console overview \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Where the backup data is retained (local backup/recovery appliance, remote backup/recovery appliance or OnVault storage location) By mixing and matching policies within a template you can create a single template that defines the shortterm and longterm retention of data, as well as where the data will be retained and how long the replicated data will be retained.
- To identify job retries all four jobs will have the same Job number in the following format in this order: Job xxxxx (Status: Retried) Job xxxxxa (Status: Retried; queued after a 4 minute holdoff) Job xxxxxb (Status: Retried; queued after a 16 minute holdoff) Job xxxxxc (Status: Failed; queued after a 64 minute holdoff) The next time a backup job for this application is attempted is according to the policy's schedule.
- What's next Create a backup template Create a backup policy Create a resource profile Configure advanced policy settings of an application backed up by the policy Apply a backup plan to an application Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Specifically, the policies define the following: The types of data backup operation (e.g., snapshot, replication) The frequency of the application data backup operation How long to retain the application data backups The advanced settings related to the application data backup operation Whether to truncate logs.

