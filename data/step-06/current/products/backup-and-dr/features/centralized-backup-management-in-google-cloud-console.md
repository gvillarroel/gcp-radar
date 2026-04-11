---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.190Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Centralized backup management in Google Cloud console"
feature_slug: "centralized-backup-management-in-google-cloud-console"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/apply-backup-temp-overview"
keywords:
  - "introduces"
  - "centralized"
  - "management"
  - "console"
  - "backup"
  - "and"
  - "in"
  - "dr"
---

# Centralized backup management in Google Cloud console

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR introduces centralized backup management capabilities in the Google Cloud console.

## Extended Definition

Backup and DR introduces centralized backup management capabilities in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/apply-backup-temp-overview](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/apply-backup-temp-overview)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.
- Queue of on-demand backup jobs Backup and DR Service supports queuing of on-demand jobs to provide the flexibility to create your images without concern for the number of on-demand job slots available to start the job.

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

### "Apply a backup template using the appliance management console \_|\_ Backup\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/apply-backup-temp-overview](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/apply-backup-temp-overview)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Storage Backup and DR Guides Send feedback Apply a backup template using the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- In the appliance management console, you protect an application by assigning a resource profile and a template to it.
- Application-types specific protection procedures Compute Engine instances VMware VM File systems and Filestore Oracle databases Microsoft SQL server databases SAP HANA databases Other databases Generic applications (LVM) What's next Get an overview of backup plan Create a backup template Create a backup policy Create a resource profile Configure advanced policy settings of an application backed up by the policy Apply a backup plan to an application Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Disable or remove a backup plan from an application You can disable a backup plan, temporarily suspending backup jobs, and you can remove a backup plan from an application entirely, while keeping it available for other applications.

