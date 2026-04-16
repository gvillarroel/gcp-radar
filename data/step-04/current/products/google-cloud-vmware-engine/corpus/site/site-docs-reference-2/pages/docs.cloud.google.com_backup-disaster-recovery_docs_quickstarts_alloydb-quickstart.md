---
title: "Protect and recover an AlloyDB cluster to a backup vault \_|\_ Backup and\
  \ DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart
  title: "Protect and recover an AlloyDB cluster to a backup vault \_|\_ Backup and\
    \ DR \_|\_ Google Cloud Documentation"
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
Protect and recover an AlloyDB cluster to a backup vault
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to protect and restore an AlloyDB cluster to a backup vault.
In this quickstart, you perform the following tasks:
Configure a scheduled backup for an AlloyDB cluster.
Back up an AlloyDB cluster into a backup vault.
Restore an AlloyDB cluster from a backup.
Before you begin
Enable the Backup and DR Service API in your Google Cloud project.
Enable the API
Create a backup vault .
Backup vaults provide protection for backups by storing them in
secure, isolated, and specialized storage. For more information about
backup vaults, see Backup vault for immutable and indelible backups .
Create a backup plan .
Add the BackupDR AlloyDB Operator ( roles/backupdr.alloydbOperator ) role
in the project that has the AlloyDB cluster to be
backed up.
Grant a role to the backup vault service agent
Every backup vault created has a unique service agent linked to it.
For AlloyDB clusters, the service agent performs actions
on behalf of the Backup and DR Service, so it needs appropriate permissions on
the projects it needs to access.
Use the following instructions to grant a role to the service agent.
In the Google Cloud console, go to the Backup vaults page.
Go to Backup vaults
Click the backup vault name and copy the service agent's email address.
In the Google Cloud console, go to the IAM page.
Go to IAM
In the New principles field, enter the service agent's email address.
From the Select a role list, select the BackupDR AlloyDB Operator ( roles/backupdr.alloydbOperator ) role.
Click Add another role .
From the Select a role list, select the Service Account User ( roles/iam.serviceAccountUser ) role.
Click Save .
Back up an AlloyDB cluster into a backup vault
In the Google Cloud console, you can back up AlloyDB clusters to a
backup vault by applying backup plans. You can back up in either of
these ways: Scheduled backups and On-demand backups .
Configure a scheduled backup
Use the following instructions to configure a scheduled backup for
AlloyDB clusters.
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
Click Schedule backup .
From the Resource Type list, select AlloyDB .
From the Project list, select the project where the AlloyDB cluster
is located.
From the Region list, select the region where your clusters are
located.
From the Resources list, click Browse . Choose the AlloyDB cluster
that you want to back up and click Done .
Click Continue .
From the Backup plan list, click Select .
Choose a backup plan that you want to protect the AlloyDB cluster with.
Click Done .
Review the backup details and click Schedule .
Because the backup window is set to six hours, you can take an on-demand backup of the AlloyDB cluster.
Note: The first backup is automatically triggered when the current time is within the backup window.
Take an on-demand backup
Initiate an on-demand backup for an AlloyDB cluster with a backup plan
by triggering the backup rule to run immediately.
Use the following instructions to create an on-demand backup.
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
The Vaulted backups page lists only the data resources that have
backup plans applied and their backups stored in a backup vault
within that project.
Select the resource to back up. Either from the more_vert
menu, or from the details page for the resource, select Create on-demand backup .
In the Create an on-demand backup window, select a backup rule to use
and click Create .
To view the status of the on-demand backup job, click Notifications .
Note: The on-demand backup is stored in the backup vault that is
configured with the associated backup plan.
In the Google Cloud console, go to the Jobs page to view the backup operation status.
Go to Jobs
Restore an AlloyDB cluster from a backup
You can restore an AlloyDB cluster to the same project or to a
different project.
To restore an AlloyDB cluster into a
backup vault from a backup, use the following instructions.
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
The Vaulted backups page lists only the clusters that have
backup plans applied and their backups stored in a backup vault
within a project.
Select the backup that you want to restore. Either from the backup
details page for the backup, or from the
more_vert menu, select
Restore .
The Restore page displays where you select the following restore options:
The Resource type is prefilled with AlloyDB .
In Resource name , select the AlloyDB cluster to restore.
When you click Backup , a pane opens showing all available backups.
Select the specific backup to restore.
For Choose the restore destination , select the project into which
you want to restore the AlloyDB cluster.
Click Continue .
The next page shows the restore details so far, and prompts you to
Configure a new cluster : This creates a
new AlloyDB cluster based on the
configuration stored in your backup. You can customize the cluster after
the restore is complete.
Provide a new Cluster ID using lowercase letters, numbers, and hyphens.
Start with a letter.
Choose a private connection method:
There are two methods to connect services in Google Cloud or third party-hosted VPC networks, without assigning external IP addresses:
Private services access : Assigns the cluster to a single VPC
network using a peering connection. Use this when connecting to specific
Google Cloud and third-party services in the same VPC network as the
AlloyDB cluster. This requires additional APIs.
Private Service Connect : Enables cluster access from one or
more VPC networks using allowlists and PSC endpoints.
In the Google Cloud console, go to the Jobs page to view the restore
operation status.
Go to Jobs
Clean up
To avoid incurring charges to your Google Cloud account, remember to delete the
resources used on this page if you have no further use for them.
To remove the backup plan from the backed up AlloyDB
cluster, use the following instructions.
In the Google Cloud console, go to the Vaulted backups page.
Go to Vaulted backups
Select the backed up cluster.
Click Remove backup plan .
Note: The backup automatically expires and gets deleted after the retention period that you set.
Use the following instructions to delete the backup plan. Deleting the backup plan is an optional step.
In the Google Cloud console, go to the Backup plans page.
Go to Backup plans
Select the backup plan and click Delete .
This deletes the backup plan and related contents.
Use the following instructions to delete the backup vault. Deleting the backup vault is an optional step.
In the Google Cloud console, go to the Backup vaults page.
Go to Backup vaults
Click the backup vault and click Delete .
This deletes the backup vault and related contents.
Note: The backup vault incurs a cost only when the backup vault
stores data. The existence of a backup plan doesn't incur any cost.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
