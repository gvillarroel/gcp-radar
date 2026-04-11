---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.197Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Centralized Backup and DR management in Google Cloud Console"
feature_slug: "centralized-backup-and-dr-management-in-google-cloud-console"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
keywords:
  - "centralized"
  - "management"
  - "console"
  - "backup"
  - "added"
  - "and"
  - "in"
  - "dr"
---

# Centralized Backup and DR management in Google Cloud Console

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Added centralized Backup and DR management in Google Cloud Console with support for Compute Engine VM backups to backup vaults.

## Extended Definition

Added centralized Backup and DR management in Google Cloud Console with support for Compute Engine VM backups to backup vaults.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Backup and DR service added centralized backup management within Google Cloud console, with support for Compute Engine VM backup to backup vaults .
- Feature Backup and DR service added centralized backup management within Google Cloud console, with support for Compute Engine VM backup to backup vaults .
- Announcement The Backup and DR service has added support for activating the management console and for storing backup vault data in the following regions: us-west3 (Salt Lake City), europe-west9 (Paris), me-west1 (Israel), europe-north1 (Finland), europe-west6 (Zürich), asia-northeast3 (Seoul), southamerica-west1 (Santiago).
- March 24, 2025 Announcement The Backup and DR service has added support for activating the management console , for creating backup plans , and for storing backup vault data in the following regions: northamerica-northeast1 (Montréal), northamerica-northeast2 (Toronto), and asia-east2 (Hong Kong).

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup and DR Service provides the following capabilities: Centralized backup management Policy-based backup management Comprehensive monitoring and reporting Incremental backups for faster recovery point objective (RPO) and lower total cost of ownership (TCO) Backup storage: the service supports two types of storage for backups: A backup vault is a Google-managed secured and isolated storage resource, managed by Backup and DR Service.
- Backup and DR Service provides centralized management, monitoring, and reporting of day to day backup operations all from one place.
- The Backup and DR appliance management console is an interface for managing backup to self-managed storage.
- Back up self-managed Oracle and SQL Server databases Self-managed Oracle and SQL Server databases are the following databases running inside a VM or Bare Metal Solution in your project: Oracle databases running on Bare Metal Solution, Compute Engine VMs, or Google Cloud VMware Engine VMs SQL Server databases running on Compute Engine or Google Cloud VMware Engine VMs These self-managed databases can be backed up from the appliance management console into backup vaults or into self-managed storage.

