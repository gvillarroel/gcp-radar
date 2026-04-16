---
title: "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups
  title: "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Manage enhanced backups
Stay organized with collections
Save and categorize content based on your preferences.
You can enable and manage enhanced backups for your AlloyDB for PostgreSQL clusters
and projects. Enhanced backups let you use Backup and DR Service with your
AlloyDB clusters to manage your backups.
For information about how backups work in AlloyDB and the
available options for your clusters, see
Data backup and recovery overview .
Before you begin
Before you can manage enhanced backups for your AlloyDB
clusters, follow these steps:
Make sure that you have an AlloyDB cluster and instance.
For more information, see
Create a cluster and its primary instance .
Familiarize yourself with
Backup and DR .
Enable the Backup and DR API .
Confirm that you have the
required permissions .
Enable the Backup and DR API
To use enhanced backups with your AlloyDB clusters, you must
first enable the Backup and DR API:
Enable the Backup and DR API
Required permissions
To configure enhanced backups for your AlloyDB clusters, you
need the alloydb.backupDrAdmin role or the following permissions:
backupdr.backupPlans.list
backupdr.backupPlanAssociations.createForAlloydbCluster
backupdr.backupPlanAssociations.fetchForAlloydbCluster
backupdr.backupPlanAssociations.list
backupdr.backupPlanAssociations.getForAlloydbCluster
backupdr.backupPlanAssociations.triggerBackupForAlloydbCluster
backupdr.backupPlanAssociations.deleteForAlloydbCluster
backupdr.backupPlans.useForAlloydbCluster
backupdr.bvdataSources.get
backupdr.bvdataSources.list
Note: If your backup vault is in a different project than your AlloyDB
cluster, you need to grant the backupdr.alloydbOperator role to the
vault service agent. For more information, see Grant a role to the service agent .
For more information about these permissions, see
Backup and DR roles and permissions .
Choose a backup tier during cluster creation
You can choose between the standard and enhanced backup tiers when you create a
new primary or secondary AlloyDB cluster. The standard tier is the
default, but you can choose Enhanced backups to use Backup and DR
for centralized management. For more information, see Backup options .
To choose a backup tier when you're creating a cluster, follow these steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click Create Cluster , and then select your primary or secondary
cluster type.
Complete the required cluster configuration fields.
Click Show advanced options .
Expand the Data Protection section.
Under Configure Backup Tier , select Enhanced backup tier (managed
by Backup and DR Service) .
Note: If the Backup and DR API isn't enabled, you're prompted to
enable it and make sure that you have the required permissions.
Select a Backup plan to associate with the resource.
To learn pricing information, click Compare tiers . Pricing is based on
the region that you selected.
Click Create Cluster .
Enable enhanced backups
To enable enhanced backups for your cluster, follow these high-level steps:
Identify the backup vault and backup plan that you want to use.
Associate your AlloyDB cluster to a backup plan .
For more information about enhanced backups, see
Data backup and recovery overview .
Identify the backup plan you want to use
The backup plan
is used by enhanced backups to define your cluster's backup schedule and
retention settings. To associate your AlloyDB cluster with a
backup plan, identify the
backup plan that
you want to use. For more information, see
Create and manage a backup plan .
Important: The backup plan that you want to use must be in the same region
as your AlloyDB cluster.
After you identify the backup plan you want to associate, use the backup plan
name to associate it with your AlloyDB cluster.
Associate a backup plan with an AlloyDB cluster
Warning: When you attach a backup plan to an AlloyDB
cluster, the existing backup and restore settings are overwritten by the backup
plan.
To associate a backup plan with an AlloyDB cluster, you need the
name of the backup plan that you want to use. For more information about how to
find the backup plan name, see
Create and manage a backup plan .
Console
To associate a backup plan with your AlloyDB cluster, do the
following:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Find the cluster you want to associate the backup plan with. To open the
Overview page of the cluster, click the cluster name.
Click Data Protection .
In Settings , click Edit .
In Configure Backup Tier , click Enhanced backup tier (managed by
Backup and DR service).
Select a backup plan.
Click Update .
Your cluster is enabled for enhanced backups using the associated backup
plan's backup and retention settings.
gcloud
To associate a backup plan with your AlloyDB cluster, run the
following command:
gcloud backup-dr backup-plan-associations create BPA_ID \
--project = WORKLOAD_PROJECT_ID \
--location = REGION \
--resource-type = alloydb.googleapis.com/Cluster \
--resource = projects/ WORKLOAD_PROJECT_ID /locations/ REGION /clusters/ CLUSTER_ID \
--backup-plan = projects/ VAULT_PROJECT_ID /locations/ REGION /backupPlans/ BP_ID
Replace the following:
BPA_ID : the backup plan association ID.
WORKLOAD_PROJECT_ID : the project ID where the
AlloyDB cluster resides.
REGION : the Google Cloud region, for example, us-central1 .
CLUSTER_ID : the AlloyDB cluster ID.
VAULT_PROJECT_ID : the project ID where the backup vault resides.
BP_ID : the backup plan ID.
Manage enhanced backups
After your cluster is enabled for enhanced backups and a backup plan is
associated with the cluster, you can change your cluster's associated backup
plan, perform an on-demand backup or view all the backups in the
backup vault.
To manage a backup plan, see
Create and manage a backup plan .
To manage a backup vault, see
Create and manage a backup vault .
View and manage enhanced backups at the project level
To view and organize backups for all clusters in your project across both
standard and enhanced storage tiers, follow these steps:
In the Google Cloud console, go to the Backups page.
Go to Backups
Click the Enhanced tab to display a folder view in which clusters
are organized by their backup vaults.
To view backup details or settings, click a cluster or folder name.
The resulting page pre-selects the tier based on the tab you navigated
from. If a cluster has been deleted, the folder icon displays a deleted
icon. Information is only displayed for existing backups.
View and manage enhanced backups at the cluster level
You can view cluster backup details and restore or delete an eligible
enhanced backup. To learn more about backups eligible for deletion, see Delete an enhanced backup .
To view and manage backups for a cluster, follow these steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Choose a cluster.
Open the Data protection page.
Click the Enhanced tab to display a folder view in which clusters
are organized by their backup vaults.
Change your cluster's associated backup plan
To change the backup plan that's associated with an AlloyDB
cluster, you must first remove the current associated backup plan and then
associate a new backup plan with that cluster.
The new backup plan must be in the same region as your
AlloyDB cluster.
Remove the associated backup plan
To change to a new backup plan, start by removing the existing backup plan
association from your AlloyDB cluster.
Console
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of the cluster you want to modify.
Click Data Protection .
In Settings , click Edit .
Click Standard backup tier (managed by AlloyDB) and update the
standard backup settings for your cluster as necessary.
Click Update .
The cluster's associated backup plan is deleted and your cluster is now
managed under the standard backups option. You can now
associate the new backup plan
to your cluster.
gcloud
To change to a new backup plan, you must first remove the existing backup plan
association from your AlloyDB cluster. To remove the backup plan,
follow these steps:
gcloud backup-dr backup-plan-associations delete BPA_ID --project = WORKLOAD_PROJECT_ID --location = REGION
Replace the following:
BPA_ID : the backup plan association ID.
WORKLOAD_PROJECT_ID : the project ID where the
AlloyDB cluster resides.
REGION : the Google Cloud REGION–for example, us-central1 .
The cluster's associated backup plan is deleted and your cluster is now managed
under the standard backups option. You can now associate the new backup plan
to your cluster.
Associate the new backup plan with your cluster
After you remove the existing backup plan, you can associate a new backup plan
with your AlloyDB cluster:
Console
To associate the new backup plan with your cluster, follow these steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Find the cluster you want to associate the backup plan with. To open the
Overview page of the cluster, click the cluster name.
Click Data Protection .
Click Edit .
In Settings , click Edit .
In Configure Backup Tier , click Enhanced backup tier (managed by
Backup and DR service).
Optional. Select a backup plan.
Click Update .
Your cluster is enabled for enhanced backups using the associated backup
plan's backup and retention settings.
gcloud
To associate the new backup plan with your cluster, follow these steps:
gcloud backup-dr backup-plan-associations create BPA_ID \
--project = WORKLOAD_PROJECT_ID \
--location = REGION \
--resource-type = alloydb.googleapis.com/Cluster \
--resource = projects/ WORKLOAD_PROJECT_ID /locations/ REGION /clusters/ CLUSTER_ID \
--backup-plan = projects/ VAULT_PROJECT_ID /locations/ REGION /backupPlans/ BP_ID \
Replace the following:
BPA_ID : the backup plan association ID.
WORKLOAD_PROJECT_ID : the project ID where the
AlloyDB cluster resides.
REGION : the Google Cloud REGION–for example, us-central1 .
CLUSTER_ID : the AlloyDB cluster ID.
VAULT_PROJECT_ID : the project ID where the backup vault resides.
BP_ID : the backup plan ID.
### Perform an on-demand backup
You can perform an on-demand backup for an AlloyDB cluster with
an associated backup plan using the Google Cloud console or the
gcloud CLI .
Console
To perform an on-demand backup for an AlloyDB cluster with
enhanced backups enabled, follow these steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of the cluster with an associated backup plan for which
you want to create an on-demand backup.
Click Data Protection .
Click Create backup .
In Create an on-demand backup , choose a backup rule with the
retention period that you want for the on-demand backup.
Click Create .
Your on-demand backup is created.
gcloud
To perform an on-demand backup for a cluster with enhanced backups enabled, run
the following command:
gcloud backup-dr backup-plan-associations trigger-backup BPA_ID \
--project = WORKLOAD_PROJECT_ID \
--location = REGION \
--backup-rule-id = RULE_ID
Replace the following:
BPA_ID : the backup plan association ID.
WORKLOAD_PROJECT_ID : the project ID where the
AlloyDB cluster resides.
REGION : the Google Cloud REGION–for example, us-central1 .
RULE_ID : The ID of the backup rule within the backup
plan to use for the on-demand backup.
### List all backups in a backup vault for your cluster
You can list all backups in the backup vault for your
AlloyDB cluster using the Google Cloud console or the
gcloud CLI.
Console
In the Google Cloud console, go to the Backups page.
Go to Backups
In the Backup tier drop-down, select Enhanced tier , then select
the Backup vault that contains the backup that you want to use.
All backups available in the backup vault for your selected
cluster are displayed.
gcloud
To list all available backups for your AlloyDB cluster in the
backup vault, you first need to find the data-source for your
AlloyDB cluster, then run the gcloud backup-dr backups list
command.
To find your cluster's data-source , run the following command:
gcloud backup-dr data-source-references fetch-for-resource-type alloydb.googleapis.com/Cluster \
--location = REGION \
--project = WORKLOAD_PROJECT_ID \
--filter = 'dataSourceGcpResourceInfo.gcp_resourcename="projects/ WORKLOAD_PROJECT_NUMBER /locations/ REGION /clusters/ CLUSTER_ID "'
Replace the following:
REGION : the Google Cloud REGION–for example, us-central1 .
WORKLOAD_PROJECT_ID : the project ID where the
AlloyDB cluster resides.
CLUSTER_ID : the ID of the AlloyDB cluster
whose Backup and DR information you want to find.
WORKLOAD_PROJECT_NUMBER : a unique, system-generated numeric
identifier for your project–for example, 123456789012. Google Cloud
automatically assigns this number when you create the project, and it is
also immutable.
To list all the backups in a backup vault for your cluster, run
the following command:
gcloud backup-dr backups list \
--data-source = D DATA_SOURCE \
--project = WORKLOAD_PROJECT_ID \
--location = REGION \
--backup-vault = BACKUP_VAULT_NAME
Replace the following:
DATA_SOURCE : the data-source for your AlloyDB cluster.
REGION : the region ID for the backup vault.
BACKUP_VAULT_NAME : the name of the backup vault associated with your
backup plan.
### Disable enhanced backups
You can disable enhanced backups by switching your AlloyDB
cluster back to the standard backups option. This deletes the association
between the backup plan and your cluster.
To change your cluster to standard backups, follow these steps:
Console
To disable enhanced backups and switch your cluster back to the standard backups
option, follow these steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of the cluster for which you want to disable enhanced
backups.
Click Data Protection .
In Settings , click Edit .
Click Standard backup tier (managed by AlloyDB) and choose backup
settings and update the Standard backups settings for your cluster as necessary.
Click Save .
Your cluster's associated backup plan is deleted and your cluster is now
managed under the Standard backups option, managed by AlloyDB.
gcloud
To disable enhanced backups and switch your cluster back to the standard backups
option, run the following command:
gcloud backup-dr backup-plan-associations delete BACKUP_PLAN_ASSOCIATION_NAME
--LOCATION = BACKUP_VAULT_LOCATION
Replace the following:
BACKUP_PLAN_ASSOCIATION_NAME : the name of the backup plan
association that you want to delete.
BACKUP_VAULT_LOCATION : the LOCATION of the backup vault.
Delete an enhanced backup
You can manually delete specific AlloyDB enhanced backups in the
Google Cloud console
if they are eligible for deletion. You can delete enhanced backups in
the following scenarios:
Expired backups in a vault: if a backup has passed its
scheduled retention time
—for example, after 14 days for default policies—it's generally
available for manual deletion.
Manual backups: backups triggered by a user can often be
deleted before they naturally expire, provided that they aren't protected
by a strict, long-term retention lock.
Backups created prior to a retention policy change: if a
minimum retention period
policy is updated on a vault, backups created before the policy update was
applied can usually be deleted.
Non-immutable backups: while Backup and DR promotes immutable, secured, and
Google-managed backups to prevent tampering, non-locked or expired backups
in a vault are eligible for manual deletion.
Note: Only the last backup corresponding to a rule can be deleted manually. For
example, if a backup plan has 2 rules—a daily backup rule and a weekly
backup rule—only the latest available daily backup and the latest available weekly
backup can be manually deleted if the expiration and lock conditions are met.
To delete an enhanced backup, follow these steps:
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Select the cluster associated with the backup that you want to delete.
Click Data Protection in the side navigation.
Make sure that the Enhanced tier is selected to display Backup and DR backups.
Find the specific backup in the list and then expand more_vert
More options .
Click Delete backup .
Confirm the deletion. If the operation fails, you can view the error
details in the Clusters page.
What's next
Restore a cluster from a backup .
Data backup and recovery overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
