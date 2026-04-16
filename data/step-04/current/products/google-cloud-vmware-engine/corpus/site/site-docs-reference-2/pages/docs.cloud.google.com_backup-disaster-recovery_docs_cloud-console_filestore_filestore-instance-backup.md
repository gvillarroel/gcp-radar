---
title: "Back up Filestore instances to a backup vault \_|\_ Backup and DR \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup
  title: "Back up Filestore instances to a backup vault \_|\_ Backup and DR \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Back up Filestore instances to a backup vault
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to back up Filestore instances to
a Backup and DR Service backup vault including how to grant backup vault
access in your Filestore project, configure scheduled backups, create
on-demand backups, and how to manage your vaulted backups.
Overview
Sending backups to a backup vault provides immutability and enforced
retention. With a backup vault, you can store backups in a single
region or in a multi-region. You can learn more about backup vaults at
Backup vault for immutable and indelible backups .
IAM roles and permissions for the backup user
To get the permissions that
you need to configure scheduled backups or run on-demand backups,
ask your administrator to grant you the
following IAM roles on your backup vault project:
Backup and DR Backup User ( roles/backupdr.backupUser )
Viewer ( roles/viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to configure scheduled backups or run on-demand backups. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to configure scheduled backups or run on-demand backups:
backupdr.backupPlans.list
backupdr.backupPlanAssociations.createForFilestoreInstance
backupdr.backupPlanAssociations.list
backupdr.backupPlanAssociations.get
backupdr.backupPlanAssociations.triggerBackupForFilestoreInstance
backupdr.backupPlanAssociations.deleteForFilestoreInstance
backupdr.backupPlans.useForFilestoreInstance
backupdr.locations.list
backupdr.operations.get
cloudasset.assets.searchAllResources
You might also be able to get
these permissions
with custom roles or
other predefined roles .
The following table lists the dynamic permissions required for each API call:
Resource
Action to be Performed on the Resource
Permissions required for each API call
Project where it needs to be assigned
Backup vault
Create BackupVault
backupdr.backupVaults.create
Admin project
Delete BackupVault
backupdr.backupVaults.delete
Admin project
Update BackupVault
backupdr.backupVaults.update
Admin project
List BackupVaults
backupdr.backupVaults.list
Admin project
Get BackupVault
backupdr.backupVaults.get
Admin project
Backup plan
Create BackupPlan
backupdr.backupPlans.create
Admin project
Delete BackupPlan
backupdr.backupPlans.delete
Admin project
Get BackupPlan
backupdr.backupPlans.get
Admin project
List Backup Plans
backupdr.backupPlans.list
Admin project
Backup Plan Associations
Create Backup Plan Association
file.instances.updateBackupDrConfig
Workload project
backupdr.backupPlanAssociations.createForFilestoreInstance
Workload project
backupdr.backupPlans.useForFilestoreInstance
Admin project
Delete Backup Plan Association
backupdr.backupPlanAssociations.deleteForFilestoreInstance
Workload project
file.instances.updateBackupDrConfig
Workload project
Trigger an on-demand backup on Backup Plan Association
backupdr.backupPlanAssociations.triggerBackupForFilestoreInstance
Workload project
Get Backup Plan Association
backupdr.backupPlanAssociations.getForFilestoreInstance
Workload project
List Backup Plan Associations
backupdr.backupPlanAssociations.list
Workload project
Fetch Backup Plan Associations
backupdr.backupPlanAssociations.fetchForFilestoreInstance
Workload project
Data Source
Get DataSource
backupdr.bvdataSources.get
Admin project
List DataSources
backupdr.backupPlanAssociations.list
Admin project
Backups
Get Backup
backupdr.bvbackups.get
Admin project
List Backups
backupdr.bvbackups.list
Admin project
Delete Backup
backupdr.bvbackups.delete
Admin project
Restore Backup
backupdr.bvbackups.useReadOnlyForFilestoreInstance
Admin project
Data Source References
Get DataSource Reference
backupdr.dataSourceReferences.getForFilestoreInstance
Workload project
Fetch DataSource References
backupdr.dataSourceReferences.fetchForFilestoreInstance
Workload project
Operations
List Operations
backupdr.operations.list
Respective project
Get Operations
backupdr.operations.get
Respective project
Grant backup vault access in the Filestore project
To back up a Filestore instance in a project different from where the
backup vault is created, you must grant the Backup and DR Filestore
Operator (Beta) ( roles/backupdr.filestoreOperator ) IAM role for
the backup vault service agent of the vault in the target project where the
Filestore backup is to be performed.
To back up a Filestore instance in the same project as where the
backup vault is created, no roles are required to be granted.
For information about granting roles to the backup vault service agent
within the project you intend to back up, see Grant a role to the service agent .
Before you begin
Enable the Backup and DR Service API where the Filestore instances are located.
Enable the API
Create a backup vault
Create a backup plan
Assign IAM roles and permission to the backup user
Grant backup vault access in the Filestore project
Set up Observability Analytics on your bucket to monitor Backup and DR
backup jobs.
Back up a Filestore instance
You back up Filestore instances to a backup vault by applying
backup plans. You can back up your data using either of the following methods:
Configure a scheduled backup : automatically back up Filestore instances
at specific intervals, such as daily, weekly, monthly, or yearly.
Create an on-demand backup : create on-demand
backups whenever needed, such as before making significant changes to your
instances or for ad hoc data protection.
Configure a scheduled backup
Use the following instructions to configure a scheduled backup for
Filestore instances.
gcloud
Configure a scheduled backup.
gcloud backup-dr backup-plan-associations create BACKUP_PLAN_ASSOCIATION_NAME \
--location = LOCATION \
--backup-plan = BACKUP_PLAN \
--resource = projects/ PROJECT_ID /locations/ RESOURCE_LOCATION /instances/ INSTANCE_NAME \
--resource-type = 'file.googleapis.com/Instance'
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : The name of the backup plan association.
LOCATION : The location of the backup plan association.
BACKUP_PLAN : The name of the backup plan.
PROJECT_ID : The project ID of the Filestore instance.
RESOURCE_LOCATION : The location of the resource.
The resource can be of two types:
Regional: projects/my-gcp-project/locations/us-central1/instances/my-regional-fs (regional instance)
Zonal: projects/my-awesome-project/locations/us-central1-a/instances/my-filestore-instance (zonal instance)
INSTANCE_NAME : The name of the Filestore instance.
Note: For a zonal resource, --resource must be in the same region as
that of the --location. A zonal location such as region us-central1
zone a can be indicated by us-central1-a .
Change the backup plan applied to a Filestore instance
You can change the backup plan applied to a Filestore instance to
another backup plan. The other backup plan must meet these criteria:
Use the same backup vault
Be in the same region as the Filestore instance
Use the following instructions to change the backup plan associated with a
Filestore instance.
Console
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
The Vaulted backups page lists only the instances that have
backup plans applied and their backups stored in a backup vault
within a project.
Select the backup that will get a different plan. Either from the backup
details page for the backup, or from the
more_vert menu, select
Change backup plan . The Select a backup plan window lists only the backup plans that are
valid for this instance.
Select a backup plan and click Apply .
gcloud
Create a backup plan association:
gcloud backup-dr backup-plan-associations create BACKUP_PLAN_ASSOCIATION_NAME \
--location = LOCATION \
--backup-plan = BACKUP_PLAN \
--resource = projects/ PROJECT_ID /zones/ ZONE /instances/ INSTANCE_NAME \
--resource-type = 'file.googleapis.com/Instance'
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup plan association.
LOCATION : the location of the backup plan association.
BACKUP_PLAN : the name of the backup plan.
PROJECT_ID : the project ID of the Filestore instance.
ZONE : the zone of the Filestore instance.
INSTANCE_NAME : the name of the Filestore instance.
Delete a backup plan association:
gcloud backup-dr backup-plan-associations delete BACKUP_PLAN_ASSOCIATION_NAME \
--location = LOCATION
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup plan association.
LOCATION : the location of the backup plan association.
Describe a backup plan association:
gcloud backup-dr backup-plan-associations describe BACKUP_PLAN_ASSOCIATION_NAME \
--location = LOCATION
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup plan association.
LOCATION : the location of the backup plan association.
List backup plan associations:
gcloud backup-dr backup-plan-associations list --location = LOCATION
Replace the following:
LOCATION : the location to list backup plan associations for.
Trigger a backup for a backup plan association:
gcloud backup-dr backup-plan-associations trigger-backup BACKUP_PLAN_ASSOCIATION_NAME \
--location = LOCATION \
--backup-rule-id = RULE_ID
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup plan association.
LOCATION : the location of the backup plan association.
RULE_ID : the ID of the backup rule to use.
List scheduled backups
Use the following instructions to list the backed up Filestore instances.
Console
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
The Vaulted backups page lists only the instances that have
backup plans applied and their backups stored in a backup vault
within a project.
gcloud
List scheduled backups.
gcloud backup-dr backup-plan-associations list \
--location= LOCATION \
--project= PROJECT_ID
Replace the following:
PROJECT_ID : the name of the project.
LOCATION : the location of the scheduled backups.
Create an on-demand backup
You can initiate an on-demand backup for a Filestore instance with a
backup plan by triggering the backup rule of your choice to run immediately.
On-demand backups typically capture only the data changed since the last backup (incremental).
When creating an on-demand backup, you can choose a rule from the
backup plan associated with the Filestore instance. This rule determines
when the on-demand backup gets deleted. You can check the backup job status from
the Jobs page. For more information, see
Monitor backup and restore jobs in Google Cloud console .
Note: You can only run one backup job at a time. If an on-demand or scheduled
backup job is already in progress, then attempting to start another on-demand
backup job, the new job fails with the Unable to queue the operation error.
Use the following instructions to create an on-demand backup.
gcloud
Create an on-demand backup that uses a backup rule.
gcloud backup-dr backup-plan-associations trigger-backup BACKUP_PLAN_ASSOCIATION_NAME \
--project= PROJECT_ID \
--location= REGION \
--backup-rule-id= RULE_ID
--labels= LABELS
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the
backup plan association. Run the command
gcloud backup-dr backup-plan-associations list --location=LOCATION --project=PROJECT_ID
to get the list of the backup plans associated with the Filestore disk.
PROJECT_ID : the name of the project.
REGION : the location of the scheduled backups.
RULE_ID : the backup rule name that you want to associate to run on-demand backups.
LABELS : optional labels for the backup as comma-separated key-value pairs such as webserver=backend,media=images .
Create an on-demand backup that uses custom retention.
gcloud backup-dr backup-plan-associations trigger-backup BACKUP_PLAN_ASSOCIATION_NAME \
--project= PROJECT_ID \
--location= REGION \
--custom-retention-days= CUSTOM_RETENTION
--labels= LABELS
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the
backup plan association. Run the command
gcloud backup-dr backup-plan-associations list --location=LOCATION --project=PROJECT_ID
to get the list of the backup plans associated with the Filestore disk.
PROJECT_ID : the name of the project.
REGION : the location of the scheduled backups.
CUSTOM_RETENTION : The custom retention period in
days for this on-demand backup. This value must be equal to or greater
than the backup vault retention time and less than or equal to the
max-custom-on-demand-retention-days value that is configured in the
backup plan (or the vault retention time + 30 days if
max-custom-on-demand-retention-days is not configured).
LABELS : optional labels for the backup as comma-separated key-value pairs such as webserver=backend,media=images .
Unprotect a Filestore instance
You can unprotect a Filestore instance by removing the backup plan
applied to the instance. Removing a backup plan from a Filestore instance
doesn't delete the backup plan or any backups created while the instance was in use.
You can still access and manage these existing backups.
Use the following instructions to unprotect a Filestore instance.
Console
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
Click the name of the instance that you want to remove a backup plan.
Select Remove backup plan .
gcloud
Unprotect a Filestore instance.
gcloud backup-dr backup-plan-associations delete BACKUP_PLAN_ASSOCIATION_NAME \
--project= PROJECT_ID \
--location= LOCATION
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup you want to delete.
PROJECT_ID : the name of the project.
LOCATION : the location of the scheduled backup.
What's next
Manage data sources in the Google Cloud console
Manage backups in the Google Cloud console
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
