---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.201Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Automatic patch updates"
feature_slug: "automatic-patch-updates"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "automatic"
  - "patch"
  - "updates"
  - "added"
  - "for"
---

# Automatic patch updates

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added support for automatic patch updates.

## Extended Definition

Added support for automatic patch updates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Feature For updates to the backup appliance, a default window now exists to schedule non disruptive patch updates. (Disruptive updates do not get the default window.) You will now receive notifications 2 weeks , 1 week and 24 hours before the scheduled update after which the appliance will be automatically updated.
- Automatic Updates: Once a plan is edited, the changes are automatically applied to all resources protected by that plan for all future backups.
- Introducing notifications and alerts for the following critical events: Processes not running on a backup/recovery appliance Expired certificates No jobs running on a backup/recovery appliance CPU and memory usage exceeding threshold values Backup/recovery appliance appliance version out of support Backup/recovery appliance updates available You can subscribe to these events and configure email alerts.
- Security The following CVEs have been addressed in this release: CVE-2022-1471, CVE-2025-31651, CVE-2025-31650, CVE-2022-42003, CVE-2025-25193, CVE-2024-6763, CVE-2025-52999, CVE-2025-24970, CVE-2025-49125, CVE-2025-48734, CVE-2024-52317, CVE-2025-48988, CVE-2025-46701 Feature Change Block Tracking (CBT) support has been added for latest kernel versions in RHEL 8.10, 9.2, 9.4 and 9.6.

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- If an additional disk is added to the instance, this disk is automatically included in the next snapshot of the instance.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Updates the LiveClone or mountable Microsoft SQL Server data on a scheduled or on-demand basis Optionally automatically applies scripts to the LiveClone's Microsoft SQL Server data after each update.
- When you protect the entire instance, as databases are added to the instance, they are automatically included in the next Backup and DR capture job.
- You can find additional information at: Backup and DR for Microsoft SQL Server Databases Prepare SQL Server databases for Backup and DR Service Add a SQL Server database host and discover databases Configure backup plans for Microsoft SQL Server instances and databases Application details and settings for Microsoft SQL Server instances and databases Mount a SQL Server database Mount databases into SQL Always On Availability Groups Manage an active mount Migrate a SQL Server database Clone SQL Server databases Recover SQL Server backups What's Next Prepare SQL server databases for Backup and DR Service .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

