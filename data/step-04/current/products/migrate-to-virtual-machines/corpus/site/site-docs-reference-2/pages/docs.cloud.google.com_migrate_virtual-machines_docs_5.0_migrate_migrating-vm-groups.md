---
title: "Migrate VM groups \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vm-groups
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vm-groups
  title: "Migrate VM groups \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Migrate VM groups
Stay organized with collections
Save and categorize content based on your preferences.
Use groups to perform bulk migration tasks on multiple VMs simultaneously.
Groups streamline the process of planning and migrating multiple VMs so that
you can perform migration in batches.
The migration process for groups uses the same phases as for an individual VM:
Onboard
Replicate
Set VM target details
Test-clone (optional)
Cut-over
Finalize
With groups, before you start replication you first add one or more source VMs
to a group. You then perform the migration on the entire group, or on a subset of
VMs in the group.
The VMs that you create during the migration process are called migrating VMs,
and they exist in various states during and after a migration. For information
on the lifecycle of a migrating VM, including expiration timelines, see
Lifecycle of a migration VM .
The VM migration process follows the same steps as that of the disk migration
process. Therefore, you can choose to switch from VM migration to disk migration
and the other way around at any point during the migration process. For more
information, see Switch from VM migration to disk migration .
This document describes the process of performing all migration phases on VM groups.
For a complete description of each of these phases,
see VM Migration lifecycle .
Prerequisites
Perform the following steps to configure the migration environment on the your
migration source
and migration target .
Enabling Migrate to Virtual Machines services .
(Only or VMware VM migration) Installing the Migrate Connector .
Some Compute Engine features require agents and services running on the VM.
These agents and services are installed automatically during the migration.
However, certain security features such as SELinux, anti-viruses, and firewalls,
may interfere with these services and prevent certain features from functioning.
In order to make sure that the guest environment functions
properly, follow the steps in Loaded services for the guest environment
and if needed, the Troubleshooting steps for Compute Engine .
Licensing
Compute Engine supports premium pay as you go (PAYG) licenses and bring your
own (BYOL) licenses, based on the operating system of the source VM.
PAYG licenses are billed based on the resources that you use.
See Supported operating systems
for details on licensing for all supported operating systems.
Options for configuring groups
While you typically perform operations on an entire group (such as starting
replication) you can also perform any operation on a specific VM or subset of VMs
in the group. For example, when configuring the target Compute Engine
instance, some or all of the VMs in the group might have specific requirements
(such as memory size or disk type) that don't apply to other VMs.
When configuring the target for a migration, you can:
Select the entire group to configure the target for all VMs. You can later
modify the target configuration for a subset of VMs or for an individual VM.
Select a subset of VMs in the group and configure the target for those VMs.
You can later modify the target configuration for an individual VM.
Select an individual VM in the group and configure the target just for
that VM.
Onboard VMs in a group
A group is a logical collection of one or more VMs. Groups have the following
characteristics:
All source VMs in the group must be from the same source.
A source VM can belong to one group or to no groups. That is, a VM cannot be
a member of multiple groups.
You can perform operations on all source VMs in a group, or on a subset of
VMs in the group.
You can configure the target's characteristics for the entire
group, and then override them for individual source VMs in the group.
A group name can contain only lowercase letters (a-z), numbers, and hyphens.
The name must start with a lowercase letter, and end with a lowercase letter
or a number.
You can have up to 200 migrations in progress at a time (excluding migrations
in the Finalize phase).
To onboard VMs in a group, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Sources tab.
From the drop-down list, select the migration source from which you want to
migrate a VM.
Below the drop-down you see the status of the migration source as:
Active : The source is active and connected to Migrate to Virtual Machines.
Offline : The source is unavailable.
Pending : The source is in the process of being connected and verified.
If you don't see any entries in the drop-down list, it indicates that you have
not configured the migration source properly. Review the steps for your
setting your migration source and try again.
A table appears showing the source VMs in the migration source available for
migration. Select the source VMs you want to add to a group.
The VM Power Status column shows the status as Suspended ,
On , or Off . You can add a VM with any of these statuses to a group.
Select Add to group .
In the dialog, either specify the name of a new group or select the name of
an existing group.
Select Add to Group . The group name for each VM appears under the
Migration group column.
The Migration status column for each VM displays one of the following:
Pending : VM is in the process of being onboarded.
Ready : VM is onboarded but not yet replicating.
You can now start replication of the VMs as described in the next section.
Start replication for a group
The first phase of migration is to start replicating the disk data from the
source VMs to Google Cloud. This is a continuous process that takes place
in the background.
Data replication is comprised of two steps:
First replication step : Migrate to Virtual Machines creates the initial
snapshot of the source VM data disks and replicates the snapshot data
to Google Cloud. Depending on the amount of disk data on the source VM,
the first replication can take minutes or hours to complete.
Incremental replication step : Following a successful first replication
step, incremental replication steps occur at set time intervals (every two
hours by default). In each step, a new snapshot is created for each data disk.
Only data updates that occurred after the previous step are replicated to
Google Cloud using the Change Block Tracking (CBT) mechanism.
To initiate replication for a group, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab. You should see a list of all VM groups.
If you don't see any entries in the table, it means you have not yet
created any groups. See Onboard VMs in a group for
the procedure on creating a group.
Select the group name from the list. A table appears showing the source VMs
in the group.
Start replication:
To replicate all VMs in the group , from the Migration drop-down,
select Start Replication under All migrations in group .
To replicate a subset of VMs , select the VMs you want to replicate
and from the Migration drop-down, select Start Replication under
Selected migrations .
Starting the migration initiates the replication phase of migration.
The Replication status column for a VM displays one of the following:
First sync VM is performing the first replication step.
Active (Current cycle: XX%) VM has performed XX% percent of the
current replication step.
Active (Idle) VM is idle between replication steps.
To view the replication history of a VM, click the VM to open the details
page. Click Replication History to view the replication history of the
VMs.
Note: Migrate to Virtual Machines saves and displays up to 100 cycles of
replication history for a VM.
You can now configure group targets for the
test-clone and cut-over phases.
You can also set the migration interval.
For more information, see Starting replication of the source VM in the documentation on migrating an individual VM.
Switch from VM migration to disk migration
You can switch between VM migration and disk migration at any time during the
migration process. To switch from VM migration to disk migration, perform the
following steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab. You should see a list of all VM groups.
Select one or more VM groups.
Click Migration > Convert to disk migration .
Switching from VM migration to disk migration clears out the target details.
This is because the target details for VM migration and disk migration are
different. However, the replication progress won't be lost during the switch.
You must update the target details before you clone or cut-over
operations on your VM in order for the migration to succeed. For more
information, see Configure group targets .
Configure group targets
To configure a target, perform two main steps:
Add a target project. The target project is the project that contains the
Compute Engine instance used to host the migrated VM.
The host project
is automatically added as a target project so there is
no need to explicitly add it. If you want to add an additional project as a
target project, see Add a target project .
Configure the Compute Engine instance used to host
the migrated VM. For both a test and a production environment, configure the
target Compute Engine instance to specify settings including:
Google project
Number of CPUs
Amount of memory
You must set some target details specific for each VM, such as the
Compute Engine instance name and IP address. You can set these details for an
individual VM even when configuring the entire group.
This section describes how to set the initial configuration of the
Compute Engine instance used to host the migrated VM.
However, there are many additional settings that you can apply to a Compute Engine
instance. See the Compute Engine documentation for
detailed descriptions of all settings.
You can modify the target details at any time. When instantiating a Compute Engine
instance for either the test-clone or cut-over phase, Migrate to Virtual Machines
uses the target details settings at the time of the operation.
To configure the Compute Engine target, follow these steps:
If you have not done so already, add the target project as shown in
Add a target .
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
A table of available groups appears.
Select a group.
Select the VMs in the group to configure:
Select the checkbox for an individual VM.
Select the checkbox for multiple VMs.
Select the checkbox in the top row of the table to select all the visible
rows in the table.
Note: This action does not select the rows that are not visible.
When you select the checkbox in the top row of a table when some rows are not
visible, a prompt appears in the top row asking if you want to select all
rows in the table.
Select the Edit Target Details button. A panel opens to let you configure
the Target Details for the selected VMs.
On the panel, setting most options applies that option to all selected VMs.
However, some settings are specific to the VMs and you can set them individually.
If you are configuring multiple VMs, you set these options individually for
each VM:
(Required) : The Compute Engine instance Name .
(Optional) : The External IP and Internal IP addresses of the
Compute Engine instance.
Edit the Target Details that define the characteristics of the
Compute Engine instance used to host the migrated VM as shown in Migrating individual VMs .
Migrate to Virtual Machines does not support all Compute Engine settings. You
can only set those described in Migrating individual VMs .
You can later edit the target details. When instantiating a Compute Engine
instance for either the test-clone or cut-over phase, Migrate to Virtual Machines uses
the target details settings at the time of the operation.
Test a clone of VMs in a group
In the test-clone phase, you deploy a clone of a migrated VM to a Compute Engine
instance in your testing environment. While the testing phase is optional,
it is a best practice to perform testing before deploying a migrated VM to
production. The test-clone Compute Engine instance is created from the latest
replication data.
For Azure source VMs that have more than one disk, the Migrate to Virtual Machines
replication cycles take snapshots of each disk independently of each other. As
these snapshots are not taken simultaneously, the data captured might sometimes
have minor discrepancies. Therefore, it is recommended that you don't use
test-clones as a production replacement when you cut-over.
You must have already configured a target environment for the Compute Engine
instance before you can initiate a test-clone. See Configuring VM target
for more.
You can test a VM in the Paused state if it has completed at least one
replication.
To test a group, follow these steps:
Ensure that you have configured a testing VM target environment as shown in
Configuring VM target .
Note: You can only test-clone VMs with a valid target environment.
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
A table of available VM groups appears.
Select a group.
A table of available source VMs appears. You can test any VM that is in the
Active (Current cycle: XX%) or Active (Idle) state.
The Active state means the first replication sync of the VM succeeded.
Select the VMs in the group to test:
For all VMs in the group, from the Cut-Over and Test-Clone drop-down,
select Test-clone under All migrations in group .
Any VMs without a valid target environment,
and any VMs not in the Active (Current cycle: XX%)
or Active (Idle) state, are ignored.
For one or more selected VMs, from the Cut-Over and Test-Clone drop-down,
select Test-clone under Selected migrations .
All selected VMs must have a valid target environment and be in the
Active (Current cycle: XX%) or Active (Idle) state.
The Test-Clone/Cut-Over status column shows the status of the
operation along with one of the sub-steps detailed in the
test-clone sub-steps table .
Wait for the Test-Clone/Cut-Over status column to show Succeeded .
This indicates that the clone was created successfully.
You can view the test-clone history of a VM in one of the following ways:
Click the Info panel icon, , for the VM. On the panel that opens from the
right, the Monitoring tab displays the history, including the name of
each test-clone instance.
Click the VM to open the details page. Click Test-Clone/Cut-Over History
to view the test-clone history of the VM along with the sub-steps of the test-clone .
You can cancel an active test-clone operation by selecting a VM and then
clicking Cancel Test-Clone from the Cut-Over and Test-Clone drop-down.
To manage the running Compute Engine instance, go to the VM instances
page in the Google Cloud console:
Go to VM instances page
From the Google Cloud console manage the Compute Engine instance to:
Start, stop, and delete the instance.
Determine the internal and external IP address of the instance.
View and modify characteristics of the instance.
Perform all other management tasks.
Perform any validation testing or other testing on the migrated VM.
When you have completed testing you should delete the Compute Engine instance
to free up resources and so that you will no longer be charged for the instance.
Cut-over a group
In the cut-over phase, you transfer control to your migrated VMs running in a
Compute Engine instance in your production environment on Google Cloud.
Caution: For Azure source VMs that have more than one disk, the Migrate to Virtual Machines
replication cycles take snapshots of each disk independently of each other. As
these snapshots are not taken simultaneously, the data captured might sometimes
have minor discrepancies. Therefore, it is recommended that you don't use
test-clones as a production replacement when you cut-over.
The cut-over process does the following:
If data replication is active, that is, the Replication status
of a VM is Active (Current cycle: XX%) , waits for it to complete.
Shuts down the source VMs.
Performs the final data replication. Because replication occurs throughout all
migration phases, the amount of data to replicate shouldn't be very large.
Note: To perform cut-over, replication cannot be paused on a VM.
Stops replication.
Creates the Compute Engine instances from the final replicated data.
The cut-over phase includes a short VM downtime and should take place during a
scheduled maintenance window. You must determine the maintenance window during
which you can stop the source VM and redirect traffic to the migrated VM running
on Compute Engine.
You must have already configured a target environment for the Compute Engine
instance before you can initiate a cut-over. See Configuring VM target
for more.
To cut-over to the migrated VM, follow these steps:
Ensure that you have configured a production VM target environment as shown
in Configuring VM target .
Note: You can only cut-over VMs with a valid target environment.
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
A table of available groups appears.
Select a group.
A table of available source VMs appears. You can cut-over any VM that is in
the Active (Current cycle: XX%) or Active (Idle) state.
The Active state means the first replication sync of the VM succeeded.
You can also cut-over a VM that has already been cut-over and is
in the Cut-over state. Select the individual VM or multiple VMs in the table
to perform the cut-over. However, selecting Cut-Over for the entire group
only performs a cut-over on Active or Active (Idle) VMs.
Select the VMs in the group to cut-over:
For all VMs in the group, from the Cut-Over and Test-Clone drop-down,
select Cut-Over under All migrations in group .
Any VMs without a valid target environment,
and any VMs not in the Active (Current cycle: XX%)
or Active (Idle) state, are ignored.
For one or more selected VMs, from the Cut-Over and Test-Clone drop-down,
select Cut-Over under Selected migrations .
All selected VMs must have a valid target environment and be in the
Active (Current cycle: XX%) or Active (Idle) state.
The Test-Clone/Cut-Over status column shows the status of the operation
along with one of the sub-steps detailed in the cut-over sub-steps table .
Initiating a cut-over on a migrating VM starts the following sequence
of actions performed by Migrate to Virtual Machines:
If data replication is active, waits for it to complete.
Shuts down the source VM.
Performs the final data replication cycle. Because continuous replication
occurs throughout all migration phases, the amount of data to replicate
shouldn't be very large.
Creates the Compute Engine instance hosting the migrated VM from the
final replicated data.
Stops data replication.
Wait for the Test-Clone/Cut-Over status column to show Succeeded . This
indicates that the cut-over was created successfully.
You can view the cut-over history of a VM in one of the following ways:
Click the Info panel icon, , for the VM. On the panel that opens from the
right, the Monitoring tab displays the history, including the name of
each cut-over instance.
Click the VM to open the details page. Click Test-Clone/Cut-Over History
to view the cut-over history of the VM along with the sub-steps of the cut-over .
You can cancel an active cut-over operation by selecting a VM and then
clicking Cancel Cut-Over from the Cut-Over and Test-Clone drop-down.
To manage the running Compute Engine instance, go to the VM instances page
in the Google Cloud console:
Go to VM instances page
From the Google Cloud console manage the Compute Engine instance to:
Start, stop, and delete the instance.
Determine the internal and external IP address of the instance.
View and modify characteristics of the instance.
Perform all other management tasks.
Perform validation test on the VM.
If for any reason you want to retry the migration of a VM after cut-over, you must
resume replication.
To resume replication:
Select a VM in the Cut-Over state.
Select Migration > Resume Replication .
Finalize a migration
The replication data used to create a Compute Engine VM is retained after cut-over.
That means you can use that data to create additional instances of your migrated
VM after cut-over.
However, you are charged for the storage used by the replication data until you
delete it in the finalize phase. Finalizing deletes all replication data and all
other storage resources associated with a migrated VM.
The Finalize phase does not delete Compute Engine instances running a migrated VM.
If you created Compute Engine instances during the testing phase, you must manually
delete them. You will be charged for those test-clone instances until they are
deleted.
To finalize, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
A table of available groups appears.
Select a group.
A table of available source VMs appears.
Select the VMs in the group to finalize:
Select an individual VM. If the VM is in the Cut-Over state then the
Finalize button is enabled.
Select multiple VMs in the group. If all selected VMs are in the Cut-Over
state then the Finalize button is enabled.
To finalize all VMs in the group, from the Migration drop-down,
select Finalize replication . Any VMs not in the Cut-Over state
are ignored.
Select Finalize and then confirm the finalize.
After finalize completes, the state of the VM is set to Finalized .
The only allowed operations on a migration in the Finalized state are:
Delete the migration
Add to or remove from a group
Remove a VM from a group
When you remove a VM from a group, you can either move it to another group or
remove it from all groups.
After removing a VM from a group, you can still manage its migration from the
Migrations tab.
To remove a VM from a group, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
Select a group.
Remove VMs:
To remove all VMs from the group , from the Group Assignment drop-down,
select Move to group or Remove from group under All migrations
in group .
To remove a subset of VMs , select the VMs you want to remove, and
then from the Group Assignment drop-down select Move to group or
Remove from group under Selected migrations .
Delete a group migration or a group
You can delete a group or a migration associated with a VM in a group.
Deleting a group has no effect on the individual VMs in the group.
When you delete the group, all migration information for the individual VMs
is retained and you can continue with migrating the individual VMs.
Deleting a migrating VM removes:
The replication data for the VM stored on Google Cloud
The Compute Engine configuration information
The monitoring history
All other data associated with migrating the VM
The VM from the list of onboarded VMs on the Groups and Migrations tabs
The VM from its group
However, deleting a migration does not remove the source VM from the list of
available VMs for the migration source displayed on the Sources tab.
That is, only the migration data for the VM is deleted. The original source VM
itself is not affected when you delete a migration. That means you can later
onboard the source VM again to migrate it.
To delete a group, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
A table of available groups appears.
Select the checkbox in the table for the group.
Select Delete .
Confirm the deletion because deleting a group cannot be undone.
To delete the migration associated with one or more group VMs, follow these steps:
Open the Migrate to Virtual Machines page in the Google Cloud console:
Go to the Migrate to Virtual Machines page
Select the Groups tab.
Select a group.
Select the checkbox for one or more VMs in the group.
Select Delete .
Confirm the deletion because deleting a migration cannot be undone.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
