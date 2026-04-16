---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.928Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Centralized Backup and DR management in Google Cloud Console"
feature_slug: "centralized-backup-and-dr-management-in-google-cloud-console"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "centralized"
  - "management"
  - "console"
  - "compute"
  - "engine"
  - "added"
---

# Centralized Backup and DR management in Google Cloud Console

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added centralized Backup and DR management in Google Cloud Console with support for Compute Engine VM backups to backup vaults.

## Extended Definition

Added centralized Backup and DR management in Google Cloud Console with support for Compute Engine VM backups to backup vaults.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### "Back up Compute Engine instances \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the management console to back up Compute Engine instances : if you have any of the following backup requirements, you can use the management console to back up Compute Engine instances: Cross-region backups Backups of specific disks attached to a virtual machine (VM) Automated protection of Compute Engine VMs based on tags If the Google Cloud console-based backup plans and backup vaults are not in a location that is compatible with the region where your source VMs are running.
- If you must use the appliance management console, see Discover and protect Compute Engine instances from the appliance management console .
- There are two main methods for backing up Compute Engine instances: Use the Google Cloud console to back up Compute Engine instances : in the Google Cloud console, you can back up Compute Engine instances to a backup vault by applying backup plans.
- The following table lists the permissions required for each API call: Resource Action to be Performed on the Resource Permissions required for each API call Project where it needs to be assigned Backup vault Create BackupVault backupdr.backupVaults.create Admin project Delete BackupVault backupdr.backupVaults.delete Admin project Update BackupVault backupdr.backupVaults.update Admin project List BackupVaults backupdr.backupVaults.list Admin project Get BackupVault backupdr.backupVaults.get Admin project Backup plan Create BackupPlan backupdr.backupPlans.create Admin project Delete BackupPlan backupdr.backupPlans.delete Admin project Get BackupPlan backupdr.backupPlans.get Admin project List Backup Plans backupdr.backupPlans.list Admin project Backup Plan Associations Create Backup Plan Association Workload project backupdr.backupPlanAssociations.createForComputeInstance Workload project backupdr.backupPlans.useForComputeInstance Admin project Delete Backup Plan Association backupdr.backupPlanAssociations.deleteForComputeInstance Workload project Trigger an on-demand backup on Backup Plan Association backupdr.backupPlanAssociations.triggerBackupForComputeInstance Workload project Get Backup Plan Association backupdr.backupPlanAssociations.getForComputeInstance Workload project List Backup Plan Associations backupdr.backupPlanAssociations.list Workload project Fetch Backup Plan Associations backupdr.backupPlanAssociations.fetchForComputeInstance Workload project Data Source Get DataSource backupdr.bvdataSources.get Admin project List DataSources backupdr.backupPlanAssociations.list Admin project Backups Get Backup backupdr.bvbackups.get Admin project List Backups backupdr.bvbackups.list Admin project Delete Backup backupdr.bvbackups.delete Admin project Restore Backup backupdr.bvbackups.restore Admin project Operations List Operations backupdr.operations.list Respective project Get Operations backupdr.operations.get Respective project Grant backup vault access in the Compute Engine project To back up a Compute Engine VM instance in a project different from where the backup vault is created, you must grant the Backup and DR Compute Engine Operator ( roles/backupdr.computeEngineOperator ) IAM role to the backup vault service agent within the Compute Engine project.

### "Mount backup images of Compute Engine instances in the appliance management\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Storage Backup and DR Guides Send feedback Mount backup images of Compute Engine instances in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- Use these instructions to mount a Compute Engine instance backup image to an existing instance: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.
- Use these instructions to mount a Compute Engine instance backup to a new instance: From the Backup and DR Service appliance management console, click App Manager and select Applications from the drop-down menu.
- Now go to the Google Cloud console Compute Engine > Snapshots .

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Timezone By default, in the appliance management console, all time stamps shown in the jobs and events menus are in the user's local timezone as detected by the web browser.

