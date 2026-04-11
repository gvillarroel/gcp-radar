---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.219Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and DR component cleanup guidance"
feature_slug: "backup-and-dr-component-cleanup-guidance"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
keywords:
  - "component"
  - "guidance"
  - "cleanup"
  - "project"
  - "backup"
  - "was"
  - "and"
  - "dr"
---

# Backup and DR component cleanup guidance

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Project cleanup guidance was added for deleting or disabling Backup and DR components.

## Extended Definition

Project cleanup guidance was added for deleting or disabling Backup and DR components.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Feature Adds project cleanup guidance where Backup and DR components are deleted or disabled.
- Enhanced backups are managed and stored by Backup and DR Service and provide immutable and indelible backups through backup vault, fine grained scheduling, backup protection against source project deletion and source cluster deletion, PiTR using logs and centralized monitoring and reporting.
- August 27, 2025 Announcement Announcing the 30-Day Introductory Trial for Google Cloud Backup and DR Service You can now activate a 30-day, full-featured introductory trial of the Backup and DR Service on any project that does not have an active Backup and DR configuration.
- With enhanced backups, backups are managed and stored in a centralized backup management project that leverages Backup and DR service to provide enforced retention, granular scheduling, and longer retention.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- This page describes how to perform initial activation of Backup and DR Service and set up configurations for your project.
- Management console supported regions While Backup and DR Service can be used to back up supported workloads in any Google Cloud region, the appliance management console can be activated only in the following regions: Geographic Area Region Name Region Description North America northamerica-northeast1 Montréal Low CO 2 northamerica-northeast2 Toronto Low CO 2 us-central1 Iowa Low CO 2 us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas Low CO 2 us-west1 Oregon Low CO 2 us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas northamerica-south1 Querétaro South America southamerica-east1 São Paulo Low CO 2 southamerica-west1 Santiago Low CO 2 Europe europe-central2 Warsaw europe-north1 Finland Low CO 2 europe-north2 Stockholm Low CO 2 europe-southwest1 Madrid Low CO 2 europe-west1 Belgium Low CO 2 europe-west2 London Low CO 2 europe-west3 Frankfurt europe-west4 Netherlands Low CO 2 europe-west6 Zürich Low CO 2 europe-west8 Milan europe-west9 Paris Low CO 2 europe-west10 Berlin europe-west12 Turin Middle East me-central1 Doha me-central2 Dammam me-west1 Israel Africa africa-south1 Johannesburg Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne India asia-south1 Mumbai asia-south2 Delhi Querétaro (northamerica-south1), Montréal (northamerica-northeast1), and Osaka (asia-northeast2) don't support zone separation.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- You can find additional information in the following pages: Backup and DR for file systems Manage hosts and their connected applications Configure application details and settings to protect file system data Apply a backup plan to protect a file system Restore a file system to the source Mount a file system or file share Mount and migrate a file system for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Backup and DR Service lets you capture data from production SMB, NFS, and Filestore file systems, manage it in the most efficient way possible, and use virtual copies of the data for business requirements like backup, test and development, analytics, and AI.
- Home Documentation Storage Backup and DR Reference Send feedback Backup and DR Service for Filestore and file systems on self-managed storage Stay organized with collections Save and categorize content based on your preferences.
- What's next Manage hosts and their connected applications Other documentation for Backup and DR for file systems This page is one in a series of pages specific to protecting and recovering filesystems with Backup and DR Service.

