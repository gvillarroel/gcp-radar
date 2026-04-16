---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.943Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Cloud IAM integration"
feature_slug: "cloud-iam-integration"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection"
keywords:
  - "permission"
  - "integrated"
  - "integration"
  - "based"
---

# Cloud IAM integration

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service was integrated with Google Cloud IAM for permission-based access control.

## Extended Definition

Backup and DR Service was integrated with Google Cloud IAM for permission-based access control.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)

## Supporting Pages

### "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Permissions and roles To create and manage log-based alerts in Logs Explorer, your Identity and Access Management (IAM) role must include the set of permissions described in Permissions for log-based alerts .
- Home Documentation Storage Backup and DR Guides Send feedback Configure log-based alerts for a backup/recovery appliance Stay organized with collections Save and categorize content based on your preferences.
- This page explains how to configure a log-based alert for a Backup and DR Service backup/recovery appliance using Logs Explorer in the Google Cloud console.
- The Logs Explorer interface for creating and editing log-based alerts guides you through the following steps: Provide a name and description for the alert.

### "Automate protection of Compute Engine instances \_|\_ Backup and DR \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- For example, https://bmc-PROJECT NUMBER-GENERATED ID-dot-REGION.backupdr.googleusercontent.com #!/bin/bash export MC ENDPOINT = " MC ENDPOINT edited value " Enable migration. curl -H "Authorization: Bearer $BEARER TOKEN " -H "backupdr-management-session: Actifio $SESSION ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC ENDPOINT /actifio/dynamicprotection/jobconfig" Appliance management console To enable migration of manually protected Compute Engine instances to tag-based protection, follow these steps: Toggle Enable migration to tag based protection to ON status Confirm the Enable Migration dialog.
- Administer Dynamic Protection Tags To create, update, and delete Dynamic Protection Tags, you need to have the appropriate permissions for your role to be sure you have one of the following roles assigned: Backup and DR Admin Backup and DR Backup User Backup and DR User V2 Project Editor Project Owner a custom role that includes the following permissions: Required permissions backupdr.managementServers.listDynamicProtection backupdr.managementServers.getDynamicProtection backupdr.managementServers.createDynamicProtection backupdr.managementServers.deleteDynamicProtection compute.instances.listEffectiveTags Learn more about Backup and DR Service roles .
- Create Dynamic Protection Tags Use these instructions to create Dynamic Protection Tags to attach to your Compute Engine instances in order to automate protection: To create, update, and delete tag definitions, you need the Tag Administrator role, or another role that includes specific permissions .
- To change the protection type back to tag based protection, you can remove the carried over protection backup plan and trigger dynamic protection job on-demand or wait for its next scheduled execution so that application is assigned tag based protection again.

### "Back up Compute Engine instances \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists the permissions required for each API call: Resource Action to be Performed on the Resource Permissions required for each API call Project where it needs to be assigned Backup vault Create BackupVault backupdr.backupVaults.create Admin project Delete BackupVault backupdr.backupVaults.delete Admin project Update BackupVault backupdr.backupVaults.update Admin project List BackupVaults backupdr.backupVaults.list Admin project Get BackupVault backupdr.backupVaults.get Admin project Backup plan Create BackupPlan backupdr.backupPlans.create Admin project Delete BackupPlan backupdr.backupPlans.delete Admin project Get BackupPlan backupdr.backupPlans.get Admin project List Backup Plans backupdr.backupPlans.list Admin project Backup Plan Associations Create Backup Plan Association Workload project backupdr.backupPlanAssociations.createForComputeInstance Workload project backupdr.backupPlans.useForComputeInstance Admin project Delete Backup Plan Association backupdr.backupPlanAssociations.deleteForComputeInstance Workload project Trigger an on-demand backup on Backup Plan Association backupdr.backupPlanAssociations.triggerBackupForComputeInstance Workload project Get Backup Plan Association backupdr.backupPlanAssociations.getForComputeInstance Workload project List Backup Plan Associations backupdr.backupPlanAssociations.list Workload project Fetch Backup Plan Associations backupdr.backupPlanAssociations.fetchForComputeInstance Workload project Data Source Get DataSource backupdr.bvdataSources.get Admin project List DataSources backupdr.backupPlanAssociations.list Admin project Backups Get Backup backupdr.bvbackups.get Admin project List Backups backupdr.bvbackups.list Admin project Delete Backup backupdr.bvbackups.delete Admin project Restore Backup backupdr.bvbackups.restore Admin project Operations List Operations backupdr.operations.list Respective project Get Operations backupdr.operations.get Respective project Grant backup vault access in the Compute Engine project To back up a Compute Engine VM instance in a project different from where the backup vault is created, you must grant the Backup and DR Compute Engine Operator ( roles/backupdr.computeEngineOperator ) IAM role to the backup vault service agent within the Compute Engine project.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to configure scheduled backups or run on-demand backups: backupdr.backupPlans.list backupdr.backupPlanAssociations.createForComputeInstance backupdr.backupPlanAssociations.list backupdr.backupPlanAssociations.get backupdr.backupPlanAssociations.triggerBackupForComputeInstance backupdr.backupPlanAssociations.deleteForComputeInstance backupdr.backupPlans.useForComputeInstance backupdr.locations.list backupdr.operations.get cloudasset.assets.searchAllResources You might also be able to get these permissions with custom roles or other predefined roles .
- Use the management console to back up Compute Engine instances : if you have any of the following backup requirements, you can use the management console to back up Compute Engine instances: Cross-region backups Backups of specific disks attached to a virtual machine (VM) Automated protection of Compute Engine VMs based on tags If the Google Cloud console-based backup plans and backup vaults are not in a location that is compatible with the region where your source VMs are running.
- IAM roles and permissions for the backup user To get the permissions that you need to configure scheduled backups or run on-demand backups, ask your administrator to grant you the following IAM roles on your backup vault project: Backup and DR Backup User ( roles/backupdr.backupUser ) Viewer ( roles/viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

