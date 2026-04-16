---
title: "Back up Compute Engine instances \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/compute/compute-instance-backup
  title: "Back up Compute Engine instances \_|\_ Backup and DR \_|\_ Google Cloud\
    \ Documentation"
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
Back up Compute Engine instances
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to back up Compute Engine instances to
a Backup and DR Service backup vault including how to grant backup vault
access in your Compute Engine project, configure scheduled backups, create
on-demand backups, and how to manage your vaulted backups.
Note: Enable 30-day introductory trial for
Backup and DR Service
to explore a unified, centralized backup solution featuring immutable backup vaults.
Overview
Sending backups to a backup vault provides immutability and enforced
retention. With a backup vault, you can store backups in a single
region or in a multi-region. There are two main methods for backing up
Compute Engine instances:
Use the Google Cloud console to back up Compute Engine instances : in the
Google Cloud console, you can back up Compute Engine instances to a
backup vault by applying backup plans. You can back up your data
using either of the following methods. Both methods allow you to store your
backups securely in a backup vault, providing a reliable way to
recover your Compute Engine instances in case of data loss or other
unexpected events.
Scheduled backups : automatically back up Compute Engine instances
at specific intervals, such as daily, weekly, monthly, or yearly.
On-demand backups : create on-demand backups whenever needed.
On-demand backups are useful for creating backups before making
significant changes to your instances or for ad hoc data protection.
Use the management console to back up Compute Engine instances : if you
have any of the following backup requirements, you can use the management
console to back up Compute Engine instances:
Cross-region backups
Backups of specific disks attached to a virtual machine (VM)
Automated protection of Compute Engine VMs based on tags
If the Google Cloud console-based backup plans and backup vaults
are not in a location that is compatible
with the region where your source VMs are running.
The appliance management console is part of Backup and DR for appliance-managed
backups. If you must use the appliance management console, see
Discover and protect Compute Engine instances from the appliance management console .
Before you begin
Enable the Backup and DR Service API where the Compute Engine instances are located.
Enable the API
Create a backup vault .
Create a backup plan .
Assign IAM roles and permission to the backup user .
Grant backup vault access in the Compute Engine project .
Set up Observability Analytics on your bucket to monitor Backup and DR
backup jobs.
Limitations
Backup and DR Service doesn't support backing up Compute Engine instances to a
backup vault if the instance uses any of the following configurations:
VM instances with extreme persistent disks attached.
VM instances with any hyperdisk-* disk types. Use Disk-Backup .
VM instances that use a C3D, H3, A3, or Z3 machine type.
VM instances with customer-supplied encryption keys (CSEK).
VM instances without any attached disks.
VM instances larger than 200 terabytes (TB).
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
backupdr.backupPlanAssociations.createForComputeInstance
backupdr.backupPlanAssociations.list
backupdr.backupPlanAssociations.get
backupdr.backupPlanAssociations.triggerBackupForComputeInstance
backupdr.backupPlanAssociations.deleteForComputeInstance
backupdr.backupPlans.useForComputeInstance
backupdr.locations.list
backupdr.operations.get
cloudasset.assets.searchAllResources
You might also be able to get
these permissions
with custom roles or
other predefined roles .
The following table lists the permissions required for each API call:
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
Workload project
backupdr.backupPlanAssociations.createForComputeInstance
Workload project
backupdr.backupPlans.useForComputeInstance
Admin project
Delete Backup Plan Association
backupdr.backupPlanAssociations.deleteForComputeInstance
Workload project
Trigger an on-demand backup on Backup Plan Association
backupdr.backupPlanAssociations.triggerBackupForComputeInstance
Workload project
Get Backup Plan Association
backupdr.backupPlanAssociations.getForComputeInstance
Workload project
List Backup Plan Associations
backupdr.backupPlanAssociations.list
Workload project
Fetch Backup Plan Associations
backupdr.backupPlanAssociations.fetchForComputeInstance
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
backupdr.bvbackups.restore
Admin project
Operations
List Operations
backupdr.operations.list
Respective project
Get Operations
backupdr.operations.get
Respective project
Grant backup vault access in the Compute Engine project
To back up a Compute Engine VM instance in a project different from where the
backup vault is created, you must grant the Backup and DR Compute Engine Operator
( roles/backupdr.computeEngineOperator ) IAM role to the backup vault
service agent within the Compute Engine project.
To back up a Compute Engine VM instance in the project same as where the
backup vault is created, no roles are required to be granted.
For information about granting roles to the backup vault service agent
within the project you intend to back up, see Grant a role to the service agent .
Configure a scheduled backup
Use the following instructions to configure a scheduled backup for
Compute Engine instances.
Console
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
Click Schedule backups .
From the Projects list, click Browse and select a project where
the Compute Engine instances are located.
From the Region list, select the region where your instances are
located.
From the Resources list, click Browse .
Choose the Compute Engine instance that you want to back up and click
Done .
Click Continue .
From the Backup plan list, click Select .
Choose a backup plan that you want to protect the Compute Engine
instance with.
Click Done .
Review the backup details and click Schedule .
gcloud
Get the instance ID.
gcloud compute instances describe VM_NAME --zone= VM_ZONE --format="value(id)"
Replace the following:
VM_NAME : the name of the VM instance.
VM_ZONE : the location where the VM is located.
Configure a scheduled backup.
gcloud backup-dr backup-plan-associations create BACKUP_PLAN_ASSOCIATION_NAME \
--location= VM_REGION \
--resource=projects/ VM_PROJECT_ID /zones/ VM_ZONE /instances/ VM_ID \
--backup-plan=projects/ PROJECT_ID /locations/ LOCATION /backupPlans/ BACKUP_PLAN
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup plan association.
VM_REGION : the region where the Compute Engine instance is located.
VM_PROJECT_ID : the name of the project where the Compute Engine instances are located.
VM_ZONE : the zone where the Compute Engine instance is located.
VM_ID : the Compute Engine instance ID.
PROJECT_ID : the name of the project where backup plans exist.
LOCATION : the region where your backup plans exist.
BACKUP_PLAN : the name of the backup plan that you want to associate the Compute Engine instance with.
Terraform
You can use a Terraform resource to configure a scheduled backup .
# Before creating a backup plan association, you need to create backup plan (google_backup_dr_backup_plan)
# and compute instance (google_compute_instance).
resource "google_backup_dr_backup_plan_association" "default" {
provider = google-beta
location = "us-central1"
backup_plan_association_id = "my-bpa"
resource = google_compute_instance.default.id
resource_type = "compute.googleapis.com/Instance"
backup_plan = google_backup_dr_backup_plan.default.name
}
Note: Auto-generation of API code for applying a backup plan to a
VM is not supported. You can manually write code to apply a backup plan.
Change the backup plan applied to a Compute Engine instance
You can change the backup plan applied to a Compute Engine instance to
another backup plan. The other backup plan must meet these criteria:
Use the same backup vault
Be in the same region as the Compute Engine instance
Use the following instructions to change the backup plan associated with a
Compute Engine instance.
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
Change the assigned backup plan.
gcloud backup - dr backup - plan - associations update BACKUP_PLAN_ASSOCIATION_NAME \
-- workload - project = VM_PROJECT_ID \
-- location = VM_REGION \
-- backup - plan = BACKUP - PLAN \
-- project = PROJECT_ID
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the
backup plan association resource.
VM_PROJECT_ID : the project-id of the
Compute Engine instance.
VM_REGION : the location of the Compute Engine
instance.
BACKUP_PLAN : the name of the backup plan
that you are switching to.
PROJECT_ID : the project-id of the selected backup
plan.
List scheduled backups
Use the following instructions to list the backed up Compute Engine instances.
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
You can initiate an on-demand backup for a Compute Engine instance with a
backup plan by triggering the backup rule of your choice to run immediately.
On-demand backups typically capture only the data changed since the last backup
(incremental).
When creating an on-demand backup, you can choose a rule from the backup plan
associated with the Compute Engine instance. This rule determines when the
on-demand backup gets deleted. You can check the backup job status from
the Jobs page. For more information, see Monitor backup and restore jobs in Google Cloud console .
Note: You can only run one backup job at a time. If an on-demand or scheduled
backup job is already in progress, then attempting to start another on-demand
backup job, the new job fails with the Unable to queue the operation error.
Use the following instructions to create an on-demand backup.
Console
Go to the VM instances > Details > Backup Plan to create
an on-demand backup.
Click Create On-Demand Backup . You must have the correct permissions
to make an on-demand backup.
Choose when to delete this backup. You have these options:
Based on custom retention period
By default, the limit is set as the backup vault's minimum enforced retention
period plus 30 days. To set a different limit, add a maximum custom on-demand
retention period to your backup plan.
Based on an existing backup rule . Select a rule from the
Delete backups after drop-down.
Click Create to start the on-demand backup job.
To view the status of the on-demand backup job, click Notifications .
Note: The on-demand backup is stored in the backup vault that is
configured with the associated backup plan.
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
to get the list of the backup plans associated with the Compute Engine disk.
PROJECT_ID : the name of the project.
REGION : the location of the scheduled backups.
RULE_ID : the backup rule name that you want to
associate to run on-demand backups.
LABELS : optional labels for the backup as
comma-separated key-value pairs such as webserver=backend,media=images .
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
to get the list of the backup plans associated with the Compute Engine
disk.
PROJECT_ID : the name of the project.
REGION : the location of the scheduled backups.
CUSTOM_RETENTION : The custom retention period in
days for this on-demand backup. This value must be equal to or greater
than the backup vault retention time and less than or equal to the
max-custom-on-demand-retention-days value that is configured in the
backup plan (or the vault retention time + 30 days if
max-custom-on-demand-retention-days is not configured).
LABELS : optional labels for the backup as
comma-separated key-value pairs such as webserver=backend,media=images .
Unprotect a Compute Engine instance
You can unprotect a Compute Engine instance by removing the backup plan
applied to the instance. Removing a backup plan from a Compute Engine instance
doesn't delete the backup plan or any backups created while the instance was in use.
You can still access and manage these existing backups.
Use the following instructions to unprotect a Compute Engine instance.
Console
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
Click the name of the instance that you want to remove a backup plan.
Select Remove backup plan .
gcloud
Unprotect a Compute Engine instance.
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
