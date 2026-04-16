---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.925Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Immutable and indelible backups in backup vaults"
feature_slug: "immutable-and-indelible-backups-in-backup-vaults"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup"
keywords:
  - "immutable"
  - "indelible"
  - "introduces"
  - "vaults"
  - "vault"
  - "backups"
---

# Immutable and indelible backups in backup vaults

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR introduces immutable and indelible backup support using the new backup vault feature; Added support for immutable and indelible backups using Backup Vaults.

## Extended Definition

Backup and DR introduces immutable and indelible backup support using the new backup vault feature; Added support for immutable and indelible backups using Backup Vaults.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup)

## Supporting Pages

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backup vaults are designed to support resilience against malicious or accidental deletion of backups by providing immutable and indelible backups.
- Home Documentation Storage Backup and DR Guides Send feedback Backup vault for immutable and indelible backups Stay organized with collections Save and categorize content based on your preferences.
- In the context of a backup vault, backups are designed to be immutable and indelible: Immutable: once a backup is created within a backup vault, its contents cannot be modified.
- Backup vaults can store backups in the same region as the source workload, a different region (cross-region) than the source workload, or across multi-regions.

### Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Backups stored in backup vaults are immutable and indelible; they cannot be modified or deleted for the duration of the backup vault's minimum enforced retention period.
- Capability Backup vault storage Self-managed storage Immutable and indelible backups Yes No Multi-region backups Yes Yes CMEK-encrypted backups Yes Yes Note: CMEK-encrypted backups (Backup vault storage) are only supported for Persistent Disk and for Compute Engine.
- Note: To store backups on immutable, indelible storage managed by Backup and DR Service, see backup vault .
- Note: Enable 30-day introductory trial for Backup and DR Service to explore a unified, centralized backup solution featuring immutable backup vaults.

### "Back up Filestore instances to a backup vault \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can learn more about backup vaults at Backup vault for immutable and indelible backups .
- The following table lists the dynamic permissions required for each API call: Resource Action to be Performed on the Resource Permissions required for each API call Project where it needs to be assigned Backup vault Create BackupVault backupdr.backupVaults.create Admin project Delete BackupVault backupdr.backupVaults.delete Admin project Update BackupVault backupdr.backupVaults.update Admin project List BackupVaults backupdr.backupVaults.list Admin project Get BackupVault backupdr.backupVaults.get Admin project Backup plan Create BackupPlan backupdr.backupPlans.create Admin project Delete BackupPlan backupdr.backupPlans.delete Admin project Get BackupPlan backupdr.backupPlans.get Admin project List Backup Plans backupdr.backupPlans.list Admin project Backup Plan Associations Create Backup Plan Association file.instances.updateBackupDrConfig Workload project backupdr.backupPlanAssociations.createForFilestoreInstance Workload project backupdr.backupPlans.useForFilestoreInstance Admin project Delete Backup Plan Association backupdr.backupPlanAssociations.deleteForFilestoreInstance Workload project file.instances.updateBackupDrConfig Workload project Trigger an on-demand backup on Backup Plan Association backupdr.backupPlanAssociations.triggerBackupForFilestoreInstance Workload project Get Backup Plan Association backupdr.backupPlanAssociations.getForFilestoreInstance Workload project List Backup Plan Associations backupdr.backupPlanAssociations.list Workload project Fetch Backup Plan Associations backupdr.backupPlanAssociations.fetchForFilestoreInstance Workload project Data Source Get DataSource backupdr.bvdataSources.get Admin project List DataSources backupdr.backupPlanAssociations.list Admin project Backups Get Backup backupdr.bvbackups.get Admin project List Backups backupdr.bvbackups.list Admin project Delete Backup backupdr.bvbackups.delete Admin project Restore Backup backupdr.bvbackups.useReadOnlyForFilestoreInstance Admin project Data Source References Get DataSource Reference backupdr.dataSourceReferences.getForFilestoreInstance Workload project Fetch DataSource References backupdr.dataSourceReferences.fetchForFilestoreInstance Workload project Operations List Operations backupdr.operations.list Respective project Get Operations backupdr.operations.get Respective project Grant backup vault access in the Filestore project To back up a Filestore instance in a project different from where the backup vault is created, you must grant the Backup and DR Filestore Operator (Beta) ( roles/backupdr.filestoreOperator ) IAM role for the backup vault service agent of the vault in the target project where the Filestore backup is to be performed.
- IAM roles and permissions for the backup user To get the permissions that you need to configure scheduled backups or run on-demand backups, ask your administrator to grant you the following IAM roles on your backup vault project: Backup and DR Backup User ( roles/backupdr.backupUser ) Viewer ( roles/viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Go to Vaulted backups The Vaulted backups page lists only the instances that have backup plans applied and their backups stored in a backup vault within a project. gcloud List scheduled backups. gcloud backup-dr backup-plan-associations list \ --location= LOCATION \ --project= PROJECT ID Replace the following: PROJECT ID : the name of the project.

