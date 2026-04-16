---
title: "Automate protection of Google Cloud VMware Engine \_|\_ Backup and DR \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve
  title: "Automate protection of Google Cloud VMware Engine \_|\_ Backup and DR \_\
    |\_ Google Cloud Documentation"
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
Automate protection of Google Cloud VMware Engine
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an end-to-end overview of how to automate backups for your VMware VMs using Tags.
Configure backup for new Google Cloud VMware Engine
Google Cloud VMware Engine is a fully managed service that lets you run the VMware
platform in Google Cloud. Google Cloud VMware Engine provides you with VMware operational
continuity so you can benefit from a cloud consumption model and lower your
total cost of ownership. Google Cloud VMware Engine also offers on-demand provisioning,
pay-as-you-grow, and capacity optimization. For more information, see Google Cloud VMware Engine .
You can deploy Google Cloud VMware Engine and start backing up your VMware VMs
through Google Cloud Backup and DR Service. To get started, see
Configure Google Cloud VMware Engine for Backup and DR protection .
Prerequisite to automate backups
Before you start automating backups of VMware VMs, read the following
procedures to prepare for backups:
Create a backup plan template
Create a resource profile or use an existing resource profile.
After setting up Backup and DR Service and creating a backup plan template, you are
now ready to automate protection of your VMware VMs by applying the backup plan
template to the VM using vSphere Tags .
Permissions
To create, update, and delete tag categories and tags in vSphere, you need
vSphere tagging privileges. For more information, see
vSphere Tagging Privileges .
IAM roles and permissions
To create, update, and delete Dynamic Protection Tags in the
appliance management console,
you need to have one of the following roles:
Backup and DR Admin
Backup and DR Backup User
Backup and DR User V2
Project Editor
Project Owner
a custom role that includes the following permissions:
Required permissions
backupdr.managementServers.listDynamicProtection
backupdr.managementServers.getDynamicProtection
backupdr.managementServers.createDynamicProtection
backupdr.managementServers.deleteDynamicProtection
compute.instances.listEffectiveTags
Learn more about Backup and DR Service roles .
Apply a backup plan template using tags automatically
This section helps you in automating the application of a backup plan to a
VMware VM using tags. First you create a mapping of backup plans to tags in the
appliance management console. Then you create tags in vCenter using the same values
assigned in the appliance management console.
Create dynamic protection tag values
Use these instructions to create dynamic protection tag values that can be
used with your VMware VMs.
In the appliance management console, click Backup Plans and select Dynamic Protection Tags .
Click Create Dynamic Protection Tag .
Enter a unique Tag Value that follows these naming requirements .
From the Application Type list, select VMware Engine .
Select a corresponding Template and Profile to be associated with
the Tag value. You can see which vCenters can have their VMs protected with
the current selection.
Note: Each tag Value requires a unique template and profile.
Click Save .
A dynamic protection tag value is created.
Note: The protection engine runs daily at 4:15 AM and 4:15 PM local time.
If you set a protection tag at 5:00 PM on Monday, the VMware VM won't be
protected until 4:15 AM on Tuesday local time. However, you can also run
on-demand dynamic protection through API. For instructions, see
Run manual auto protection .
Create dynamic protection tags in vSphere
Use these instructions to create dynamic protection tags to attach to your
VMware VMs in order to automate protection.
Create tag category
To create, update, and delete tag categories and tags in vSphere, you need vSphere tagging privileges .
In the vSphere client, click Menu > Tags & Custom Attributes .
Click the Tags tab and click Categories .
Click the New Category icon.
Add a category with the name backupdr-dynamicprotect .
Select One Tag in Tags Per Object .
Don't select the Many Tags option. Choosing the Many Tags option
can result in assigning multiple tags from the same category to a
single VM, leading to potential issues.
Optional: In the Description box, enter a description of your tag category.
In the Associable Object Types section, select the checkbox next to Virtual Machine .
Find more details about tag categories operations, refer to VMware documentation.
Create tags for tag category
To create, update, and delete tag categories and tags in vSphere, you need vSphere tagging privileges .
You can add, edit, or delete Tag values at a later time
Note that each Tag must match the exact spelling of the Dynamic Protection Tag
values that you previously set in the Google Cloud console.
In the vSphere client, click Menu > Tags & Custom Attributes .
Click Tags .
Click the New Tag icon.
Specify the name that you set in the appliance management console.
Add a description about the backup template and profile which will be used for the protection with this tag.
In the Category list, select the backupdr-dynamicprotect Tag category created earlier.
Find more details about tag operations in VMware documentation .
Note: You can add, edit, or delete Tag values at a later time . Note: Ensure that you aren't protecting the same VMware VM twice if managed
by two different backup/recovery appliances in two different management
consoles. To do so, avoid creating the same dynamic protection tag values in
different appliance management consoles.
Add dynamic protection tags to a VMware VM
Now that you have created dynamic protection tag values and linked them to a
dynamic protection tag, the next step is to assign a tag to a VMware VM. Tag
based protection doesn't work if your VMs are protected within a
logical group .
Remove logical group
and try using the dynamic protection.
To assign tags to VMs in vSphere, you should have vSphere tagging privileges on the root vCenter Server instance.
Your dynamic protection tags can be assigned to VMware VM using the following instructions.
In the vSphere client, navigate to an inventory tree.
Select an object from the list. You can either click Actions or right-click the object name to get the menu.
Select Tags and Custom Attributes .
Select Assign Tag .
Select a tag value from the list that belongs to the backupdr-dynamicprotect tag category.
Find more details about tag assignment steps in VMware documentation
Remove a tag from a VMware VM
You can detach a tag from a VMware VM by using the following instructions. To
remove tags from VMs in vSphere, you should have
vSphere tagging privileges
on the root vCenter Server instance.
In the vSphere client, navigate to an inventory tree.
Select an object from the list. You can either click Actions or
right-click the object name to get the menu.
Select Tags and Custom Attributes .
Select Remove Tag .
Select the tag from the list to remove it.
Find more details about tag removal steps in
VMware documentation .
Note: If you intend to remove protection for a VMware VM, you can detach the
Tag from the VMware VM. The Dynamic Protection engine will automatically detect
that you no longer want to protect this VMware VM and remove any assigned protection.
Run manual auto protection
Although the protection engine runs daily at 4:15 AM and 4:15 PM local time, you
can also make an on-demand run of the Dynamic Protection engine using the
following command steps:
Set the appliance management console endpoint by entering a value that
starts with 'https://bmc-' and ends with '.com'. For example,
https://bmc-PROJECT_NUMBER-GENERATED_ID-dot-REGION.backupdr.googleusercontent.com
export MC_ENDPOINT = " MC_ENDPOINT_edited_value "
Generate a bearer token:
echo "Generating a new bearer token..."
export BEARER_TOKEN = $( gcloud auth print-access-token )
echo "Bearer token generated: BEARER_TOKEN= $BEARER_TOKEN "
Get a new session ID:
echo "Generating a new session id..."
export SESSION_RESPONSE = $( curl -XPOST -H "Authorization: Bearer $BEARER_TOKEN " -H "Content-Type: application/json" -d '{}' " $MC_ENDPOINT /actifio/session" 2 >&- )
export SESSION_ID = $( echo $SESSION_RESPONSE | jq -r '.session_id' )
if [ -z ${ SESSION_ID } ]
then echo "Issue with generating a new session id. Response: $SESSION_RESPONSE " ;
return 1 ;
fi
echo "Session id generated: SESSION_ID= $SESSION_ID "
After you have set an endpoint, generated a bearer token, and gotten a session
ID, you can trigger dynamic protection jobs for an hour until the session ID
expires.
Trigger a dynamic protection job.
A dynamic protection job updates all VMware VMs with their current tags, and
assigns backup plans based on the tags. The triggered job can take
a few minutes depending on the number of changes pending for your workloads.
echo "Triggering dynamic protection job.."
curl -H "Authorization: Bearer $BEARER_TOKEN " -H "backupdr-management-session: Actifio $SESSION_ID " -H "Content-Type: application/json" -XPOST -d '{}' " $MC_ENDPOINT /actifio/dynamicprotection/job/vmwarevm"
echo "Dynamic protection job triggered."
Migrate manual protection to dynamic protection
If you intend to migrate your already protected resources to use dynamic
protection using tags, you must enable the migration flag in your project.
After you've enabled migration, any manually protected VMs can now use
dynamic protection. Adding tags to a VM automatically protects it based on the
tag and the existing manual protection is removed.
Before you begin, follow the steps in Run manual auto protection
to set up the session.
Note: Switching from user-initiated protection to tag-based protection won't
affect the incremental nature of backups; they will remain incremental.
Bash
Run the following commands.
Set the appliance management console endpoint by entering a value that
starts with 'https://bmc-' and ends with '.com'. For example,
https://bmc-PROJECT_NUMBER-GENERATED_ID-dot-REGION.backupdr.googleusercontent.com
#!/bin/bash
export MC_ENDPOINT = " MC_ENDPOINT_edited_value "
Enable migration.
curl -H "Authorization: Bearer $BEARER_TOKEN " -H "backupdr-management-session: Actifio $SESSION_ID " -H "Content-Type: application/json" -XPATCH -d '{ "enableMigrationToTagBasedProtection":"true"}' " $MC_ENDPOINT /actifio/dynamicprotection/jobconfig"
Appliance management console
To enable migration of manually protected VMware VMs to tag-based protection,
follow these steps:
Toggle Enable migration to tag based protection to ON status
Confirm the Enable Migration dialog. Manually protected VMware VMs will be
reprotected using the tag defined on the VM.
To disable migration of manually protected VMware VMs to tag-based protection,
follow these steps:
Toggle Enable migration to tag based protection to OFF status.
Confirm the Disable Migration dialog. This disables the migration of
manually protected VMware VMs to tag based protection.
Note: Turning off the migration doesn't alter the protection of already
protected VMware VMs. If you want to use a different backup plan,
then manually assign the intended plan to the protected VMware VMs.
Events and notifications
After the dynamic protection engine runs, you can review the progress from
monitor events .
The appliance management console receives summary notifications after performing dynamic
protection actions. Error notifications are sent if a user action is needed.
Best practices
Protecting a large number of VMs using Dynamic protection can lead to an increase
in the number of backup jobs running and the amount of storage used. For best
results, consider the following:
Increase the time interval of backup windows. A window of 6 to 10 hours can
help to ensure that all jobs run to completion.
Known issues
If a vCenter has more than one VM with the same name, protection is applied
to only the first VM in alphabetical order.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
