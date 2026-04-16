---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.924Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Centralized backup management in Google Cloud console"
feature_slug: "centralized-backup-management-in-google-cloud-console"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "capabilities"
  - "introduces"
  - "centralized"
  - "management"
  - "console"
---

# Centralized backup management in Google Cloud console

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR introduces centralized backup management capabilities in the Google Cloud console.

## Extended Definition

Backup and DR introduces centralized backup management capabilities in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Timezone By default, in the appliance management console, all time stamps shown in the jobs and events menus are in the user's local timezone as detected by the web browser.

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup and DR Service provides the following capabilities: Centralized backup management Policy-based backup management Comprehensive monitoring and reporting Incremental backups for faster recovery point objective (RPO) and lower total cost of ownership (TCO) Backup storage: the service supports two types of storage for backups: A backup vault is a Google-managed secured and isolated storage resource, managed by Backup and DR Service.
- Back up self-managed Oracle and SQL Server databases Self-managed Oracle and SQL Server databases are the following databases running inside a VM or Bare Metal Solution in your project: Oracle databases running on Bare Metal Solution, Compute Engine VMs, or Google Cloud VMware Engine VMs SQL Server databases running on Compute Engine or Google Cloud VMware Engine VMs These self-managed databases can be backed up from the appliance management console into backup vaults or into self-managed storage.
- Supported workload Backup plan in Google Cloud console Backup plan in appliance management console Compute Engine VMs Yes Yes Compute Engine disks Yes Yes Cloud SQL instances Yes No AlloyDB clusters Yes No Google Cloud VMware Engine VMs No Yes File systems and self-managed databases, such as Oracle, SQL Server, SAP HANA, IBM Db2, PostgreSQL, SAP ASE, SAP IQ, and SAP MaxDB, can run on virtual machines (VMs) or on Bare Metal Solution.
- Backup plans created in the appliance management console Backup plans are created in the appliance management console and the backup jobs are run on specialized Google Cloud VMs called backup/recovery appliances that you deploy in your own Google Cloud projects.

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Centralized model : In the centralized model, organizations streamline backup management by creating backup vaults and deploying the appliance management console within a designated central administrator project.
- Decentralized model : In the decentralized model, appliance management consoles and backup vaults are created in various projects based on the organization's specific needs and required isolation levels.
- Workload Managed by Compute Engine instance Google Cloud console Compute Engine disk Google Cloud console Filestore instance (invitation only) Google Cloud console Cloud SQL instance Google Cloud console AlloyDB cluster Google Cloud console Google Cloud VMware Engine, Oracle database, and SQL Server database appliance management console Note: AlloyDB clusters and Filestore instances in backup vaults are not supported for multi-regions.
- Resources managed through the appliance management console (for example, Google Cloud VMware Engine VMs) are also supported, but backup and restore operations for those resources are not restricted to your current organization.

