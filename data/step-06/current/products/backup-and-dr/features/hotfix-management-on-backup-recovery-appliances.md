---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.214Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Hotfix management on backup/recovery appliances"
feature_slug: "hotfix-management-on-backup-recovery-appliances"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/onboarding-wizard"
keywords:
  - "hotfix"
  - "appliances"
  - "management"
  - "recovery"
  - "on"
  - "backup"
  - "and"
  - "dr"
---

# Hotfix management on backup/recovery appliances

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR Service gained support for managing hotfixes on backup/recovery appliances.

## Extended Definition

Backup and DR Service gained support for managing hotfixes on backup/recovery appliances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/onboarding-wizard](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/onboarding-wizard)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- To manually initiate database logs replication to the remote backup/recovery appliance: Click the App Manager tab and select the Applications option from the drop-down list.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Each Backup and DR deployment includes a single appliance management console managing any number of backup/recovery appliances.
- These backups require a Backup and DR management console and one or more backup/recovery appliances.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.
- The flow for this setup involves creating a management server, deploying appliances, and the using the Backup and DR management console to configure backup schedules and to define what is backed up and where.

### "Discover applications on your hosts \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/onboarding-wizard](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/onboarding-wizard)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Use these instructions to open the Add Application wizard: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.
- Once you discover one or more applications, VMs, or cloud instances, you can protect them all at once by applying a backup template and profile or you can add them to the appliance management console as unmanaged or ignored.
- Home Documentation Storage Backup and DR Guides Send feedback Discover applications on your hosts Stay organized with collections Save and categorize content based on your preferences.
- To manage your application, the appliance management console must discover the applications, VMs, and Cloud instances managed through its appliances.

