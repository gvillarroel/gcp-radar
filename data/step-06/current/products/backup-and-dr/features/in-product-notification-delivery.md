---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.213Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "In-product notification delivery"
feature_slug: "in-product-notification-delivery"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "notification"
  - "product"
  - "delivery"
  - "backup"
  - "added"
  - "and"
  - "in"
  - "dr"
---

# In-product notification delivery

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service added in-product notifications for important product updates.

## Extended Definition

Backup and DR Service added in-product notifications for important product updates.

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
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Feature Backup and DR Service now supports in-product notifications for important product updates.
- Security The following CVEs have been addressed in this release: CVE-2024-38286, CVE-2019-9636, CVE-2023-5178, CVE-2020-14343, CVE-2021-29921, CVE-2019-7164, CVE-2020-27619, CVE-2018-20060, CVE-2019-20477, CVE-2019-9948, CVE-2020-1747, CVE-2021-3177, CVE-2022-42919, CVE-2024-0565, CVE-2015-20107, CVE-2023-51042, CVE-2020-10878, CVE-2023-6546, CVE-2022-0391, CVE-2022-45884, CVE-2021-33631, CVE-2020-10543, CVE-2019-20907, CVE-2023-3812, CVE-2019-11324, CVE-2022-45919, CVE-2023-6931, CVE-2024-1086, CVE-2021-43818, CVE-2021-33503, CVE-2020-26116, CVE-2019-20916, CVE-2023-2163, CVE-2021-42771, CVE-2022-45886, CVE-2021-3737, CVE-2023-52425, CVE-2018-18074, CVE-2021-27291, CVE-2021-20270, CVE-2023-24329, CVE-2019-18874, CVE-2019-16056, CVE-2019-7548, CVE-2021-3572, CVE-2019-9740, CVE-2021-23336, CVE-2020-14422, CVE-2021-3426, CVE-2023-1192, CVE-2022-38096, CVE-2023-6135, CVE-2020-8492, CVE-2020-27783, CVE-2020-28493, CVE-2023-46218, CVE-2021-4189, CVE-2020-26137, CVE-2021-3733, CVE-2019-16935, CVE-2021-28957, CVE-2018-20852, CVE-2019-11236, CVE-2019-9947, CVE-2020-28241, CVE-2023-5388, CVE-2023-28322 CVE-2022-48624, CVE-2023-38546, CVE-2021-20095 December 02, 2024 Feature Backup and DR service added integration with the Compute Engine VM creation experience, enabling the application of Backup and DR backup policies when VMs are created.
- Announcement The Backup and DR service has added support for activating the management console and for storing backup vault data in the following regions: us-west3 (Salt Lake City), europe-west9 (Paris), me-west1 (Israel), europe-north1 (Finland), europe-west6 (Zürich), asia-northeast3 (Seoul), southamerica-west1 (Santiago).
- March 24, 2025 Announcement The Backup and DR service has added support for activating the management console , for creating backup plans , and for storing backup vault data in the following regions: northamerica-northeast1 (Montréal), northamerica-northeast2 (Toronto), and asia-east2 (Hong Kong).

### "Backup and DR Service for Compute Engine for self-managed storage \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The Backup and DR Compute Engine guide Check for the cloud credentials Discover and protect Compute Engine instances Mount backup images of Compute Engine instances Restore a Compute Engine instance Import Persistent Disk snapshot images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Compute Engine for self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- If you don't specify a storage location for a snapshot, Backup and DR uses the default location , which stores your snapshot in a Cloud Storage multi-regional location closest to the region of the source disk.
- After Backup and DR creates a snapshot to back up the current state of some or all Persistent Disks attached to an instance, you can use the backup image to either: Mount the image to create a new instance .

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Backup and DR working with existing backup products As more and more enterprises look to speed up the application development using production databases, Backup and DR is often required to coexist with legacy backup products working off the same production database environments.
- When you protect the entire instance, as databases are added to the instance, they are automatically included in the next Backup and DR capture job.
- Backup and DR can perfectly co-exist with other products capturing data from production databases, if these best practices are followed.
- Production to OnVault policies use a Backup and DR proprietary engine to transfer data to object storage.

