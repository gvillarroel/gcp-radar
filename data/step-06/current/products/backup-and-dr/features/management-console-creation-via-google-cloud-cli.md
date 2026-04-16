---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.936Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Management console creation via Google Cloud CLI"
feature_slug: "management-console-creation-via-google-cloud-cli"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan"
keywords:
  - "creation"
  - "management"
  - "console"
---

# Management console creation via Google Cloud CLI

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR now supports creating the management console using the Google Cloud CLI.

## Extended Definition

Backup and DR now supports creating the management console using the Google Cloud CLI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Timezone By default, in the appliance management console, all time stamps shown in the jobs and events menus are in the user's local timezone as detected by the web browser.

### "Mount backup images of Compute Engine instances in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The appliance management console lets you restore a local solid-state drive (SSD) VM only if the source VM was configured with local SSD during VM creation.
- Home Documentation Storage Backup and DR Guides Send feedback Mount backup images of Compute Engine instances in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- Use these instructions to mount a Compute Engine instance backup image to an existing instance: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.
- Use these instructions to mount a Compute Engine instance backup to a new instance: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.

### "Backup plans in the appliance management console overview \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup plans are the rules that the appliance management console uses to define how often to back up application data, how long to retain the application data backups, and where and how to replicate the application's data backups.
- Home Documentation Storage Backup and DR Guides Send feedback Backup plans in the appliance management console overview Stay organized with collections Save and categorize content based on your preferences.
- You define a resource profile for any backup/recovery appliance that has been added to the appliance management console.
- Updates to databases such as Microsoft SQL Server and Oracle are accompanied by creation of logs and metadata.

