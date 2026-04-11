---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.189Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Data protection pane in VM instance creation"
feature_slug: "data-protection-pane-in-vm-instance-creation"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
keywords:
  - "pane"
  - "instance"
  - "creation"
  - "protection"
  - "console"
  - "vm"
  - "the"
  - "in"
---

# Data protection pane in VM instance creation

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

The Google Cloud console instance creation page now includes a Data protection pane to configure backup and replication settings at creation time.

## Extended Definition

The Google Cloud console instance creation page now includes a Data protection pane to configure backup and replication settings at creation time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- When adding multiple new applications or VMs, try to stagger the initial protection jobs for each new application over time, to prevent all of the new data from being ingested simultaneously.
- Job status panel The appliance management console Jobs panel provides information about jobs that have run over the past 24 hours (default).
- For example, instead of snapping all VMs, file systems, and databases at 6:00 PM on weekdays, consider snapping one type of application on the hour, another type at 10 minutes after the hour, and another type at 20 minutes after the hour.
- If the constraints continue to be present until it is time to run the next instance of the same policy, the job is given notrun status, and a new job instance with the same job ID and a letter appended to it is added in the queued state.

### "Prerequisites for backing up an Oracle database in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Obtain the right Backup and DR agent for your host 2 Management console > Manage Hosts The database server must be added as a host or as a VM.
- The Oracle DBA guide Backup and DR for Oracle databases Prerequisites for protecting an Oracle database Oracle patches and known issues Prepare Oracle databases for protection Discover and protect an Oracle database Details and settings for Oracle databases Use dNFS with Backup and DR Protect a discovered Oracle database Mount an Oracle database as a standard mount Create an instant virtual copy of an Oracle database Restore and recover an Oracle database Instant recovery of an Oracle database using Mount and Migrate Provision an environment with a Backup and DR workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Prerequisites for backing up an Oracle database in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- The prerequisites for Oracle database protection with Backup and DR include: Review the concepts in OS authentication versus database authentication and Oracle RMAN backup in a file system or in an ASM disk group .

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- March 14, 2025 Feature Generally available : The Create an instance page in the Google Cloud console has a Data protection pane where you can specify how to back up and replicate your data.
- Identify the backup appliance VM instance with the same name as that shown in the Backup and DR management console.
- In the Google Cloud console of your workload project, click Compute Engine > VM instances .
- Security The following CVEs have been addressed in this release: CVE-2024-38286, CVE-2019-9636, CVE-2023-5178, CVE-2020-14343, CVE-2021-29921, CVE-2019-7164, CVE-2020-27619, CVE-2018-20060, CVE-2019-20477, CVE-2019-9948, CVE-2020-1747, CVE-2021-3177, CVE-2022-42919, CVE-2024-0565, CVE-2015-20107, CVE-2023-51042, CVE-2020-10878, CVE-2023-6546, CVE-2022-0391, CVE-2022-45884, CVE-2021-33631, CVE-2020-10543, CVE-2019-20907, CVE-2023-3812, CVE-2019-11324, CVE-2022-45919, CVE-2023-6931, CVE-2024-1086, CVE-2021-43818, CVE-2021-33503, CVE-2020-26116, CVE-2019-20916, CVE-2023-2163, CVE-2021-42771, CVE-2022-45886, CVE-2021-3737, CVE-2023-52425, CVE-2018-18074, CVE-2021-27291, CVE-2021-20270, CVE-2023-24329, CVE-2019-18874, CVE-2019-16056, CVE-2019-7548, CVE-2021-3572, CVE-2019-9740, CVE-2021-23336, CVE-2020-14422, CVE-2021-3426, CVE-2023-1192, CVE-2022-38096, CVE-2023-6135, CVE-2020-8492, CVE-2020-27783, CVE-2020-28493, CVE-2023-46218, CVE-2021-4189, CVE-2020-26137, CVE-2021-3733, CVE-2019-16935, CVE-2021-28957, CVE-2018-20852, CVE-2019-11236, CVE-2019-9947, CVE-2020-28241, CVE-2023-5388, CVE-2023-28322 CVE-2022-48624, CVE-2023-38546, CVE-2021-20095 December 02, 2024 Feature Backup and DR service added integration with the Compute Engine VM creation experience, enabling the application of Backup and DR backup policies when VMs are created.

