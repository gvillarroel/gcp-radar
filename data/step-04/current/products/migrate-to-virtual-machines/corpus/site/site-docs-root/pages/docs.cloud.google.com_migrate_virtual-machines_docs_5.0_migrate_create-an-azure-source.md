---
title: "Create an Azure source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-an-azure-source
  title: "Create an Azure source \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud\
    \ Documentation"
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
Create an Azure source
Stay organized with collections
Save and categorize content based on your preferences.
Migrate to Virtual Machines
lets you migrate your Azure virtual machines (VMs) from your Azure account
to Compute Engine instances.
Prerequisites
Enable the VM Migration API
on your host project.
Review the supported operating systems
that support migrating VMs from an Azure source.
Review Migrating VMs with Migrate to Virtual Machines: Getting started
documentation. This document provides insight into the overall structure of
Migrate to Virtual Machines, including important concepts and reference information
that helps you migrate your workload efficiently and effectively.
Migration limitations from Azure
Migrate to Virtual Machines does not support migration of VMs with the following
attributes:
Ephemeral OS disks
Non-managed disks
Attempting a migration of a VM with such disks will fail with an appropriate
error message.
Also note that due to their nature - temporary disks data is not guaranteed to
be migrated with the VM and won't persist following the creation of a clone VM
or a cutover VM.
Migrate your workload from an Azure source
Before initiating your migration with Azure as a source, set up your Azure
environment by completing the following tasks:
Register your app in the Azure portal.
Create a custom role to be accessed by the
Migrate to Virtual Machines service.
Assign the custom role to an app .
Create an Azure source using Google Cloud.
Register your app
To register your app, follow these steps:
In the Azure portal, go to the App Registration page, and click
New registration .
To add new client credentials, click Add a certificate or secret .
To add a new client secret, click + New client secret and enter a
description and expiry date for the client secret.
Click Add .
Your client secret is now ready. Make sure to copy your client secret value. You
will need it later when you set up the source.
Create a custom role
To migrate your Azure workload, create a custom role and assign it to the app you registered in the
Register your app step.
To create a custom role, use the following steps:
In the Azure portal, go to the Subscriptions page and select your Azure subscription.
Copy the Subscription ID by clicking on it.
Save following JSON template and replace SUBSCRIPTION_ID
with the Subscription ID you copied in Step 2:
{
"properties": {
"roleName": "Minimum M2VM permissions role",
"description": "This role contains the bare minimum of Azure IAM permissions to support M2VM flow",
"assignableScopes": [
"/subscriptions/ SUBSCRIPTION_ID "
],
"permissions": [
{
"actions": [
"Microsoft.Resources/subscriptions/resourceGroups/write",
"Microsoft.Resources/subscriptions/resourceGroups/read",
"Microsoft.Resources/subscriptions/resourceGroups/delete",
"Microsoft.Compute/virtualMachines/read",
"Microsoft.Compute/virtualMachines/write",
"Microsoft.Compute/virtualMachines/deallocate/action",
"Microsoft.Compute/disks/read",
"Microsoft.Compute/snapshots/delete",
"Microsoft.Compute/snapshots/write",
"Microsoft.Compute/snapshots/beginGetAccess/action",
"Microsoft.Compute/snapshots/read",
"Microsoft.Compute/snapshots/endGetAccess/action"
],
"notActions": [],
"dataActions": [],
"notDataActions": []
}
]
}
}
For more information about the permission details, see permission details .
In the Azure portal, go to the Access control (IAM) page.
To add a custom role, click + Add .
Click Start from JSON and then click Select file to upload the JSON
file you created in Step 3.
To review your inputs click Review + Create , and then to create the
custom role click Create .
Assign the custom role to an app
To assign a custom role to an app, follow these steps:
In the Azure portal, go to the Access control (IAM) page.
Click + Add and then click Add role assignment .
Search for the custom role you created in Create a custom role
by typing m2vm , and select it.
Click Next .
Click + Select members and search for the app name you registered in
Register your app and click Select .
To review and assign the custom role to your app, click Review + Assign .
Create an Azure source
After you have registered your app, added your secret, and set its permissions,
create an Azure source in the Migrate to Virtual Machines service.
To create an Azure source, follow these steps:
In the Google Cloud console, go to the Migrate to Virtual Machines
page.
Select the Sources tab.
From the Add source list, select + Add Azure source .
Enter your source details on the Create Azure source panel.
Caution: You cannot edit the GCP region or Azure location fields
after creating your source. If you need to edit these fields, we recommend
that you wait 24 hours before revoking the credentials you replaced in order
to not interrupt an ongoing replication cycle.
The following table describes the parameters for Azure source details.
Parameter
Description
Name (mandatory)
A string that identifies the source. The string must conform to Compute Engine naming conventions . You cannot update this field after creating your source.
Google Cloud region (mandatory)
The region in Google Cloud that you want to migrate your
instances to. You cannot update this field after creating your source.
For more information, see locations
documentation.
Azure location (mandatory)
The region in Azure (for example, centralus ) from which you
want to migrate VMs. The inventory displayed in the Migrate to Virtual Machines
console only includes VMs from this Azure location. You cannot update this
field after creating your source.
Note: It is recommended that you choose the region from the
drop-down list options, or copy the region from your Azure console
JSON View and paste it into the source detail field to
avoid typos. If there is a typo in the region , the source doesn't
become active, and you have to create a new source. You can see the status
of the source in the console.
Subscription ID (mandatory)
Part of the user credentials. You cannot update this field after creating
your source.
Client ID (mandatory)
Part of the user credentials.
Tenant ID (mandatory)
Part of the user credentials. You cannot update this field after creating
your source.
Client Secret (mandatory)
This is the value which you saved when you created the client secret.
Note: You cannot retrieve this value from the Azure portal or the
Google Cloud console once it is set. You can update this value with a
new secret in case you update the credentials.
Customer managed encryption key
The key you want to use to protect your data in Google Cloud. By default,
Google Cloud automatically
encrypts data when it is at rest using encryption keys managed by
Google. If you have specific compliance or regulatory requirements related
to the keys that protect your data, you can use
customer-managed encryption keys (CMEK) to encrypt and decrypt your
data at rest. These encryption keys are created, managed, and owned by you.
Note: The encryption key that you set will be used for
all the resources created under this source.
Optional: User tags for migration resource
The Migrate to Virtual Machines service creates snapshots of your VM disks to
migrate them to Google Cloud.
If you would like to have a custom tag associated with these
resources, specify them here. This can help you identify all
resources created by Migrate to Virtual Machines in your Azure
environment. Snapshots also already have tags as detailed in
Snapshots .
All snapshots are automatically created under one resource group when
the source is created. The resource group name can be seen on the
Source Details page.
Click Create . A notice detailing your new source appears.
Wait (up to 15 minutes but usually less) until the Source status is
indicated as Active .
Check your inventory to verify that there are instances that correspond to the
tags (and/or security groups) that you specified when you created your source.
As part of source creation, your project is automatically added as a target
project.
Cloud sources limitations
You can host a maximum of 15 cloud sources (AWS sources, Azure sources, or both
the sources combined) on a host project at a time. For example, you can host 10
AWS sources and 5 Azure sources on a host project at a time. Conversely, you
can host 7 AWS sources and 8 Azure sources on a host project at a time. If you
want to add a new cloud source to a project that already hosts 15 cloud
sources, you must delete an existing source, and then add the new source. You
can also try using a different project to host the new cloud source if you
don't want to delete any existing sources.
Next steps: Start your migration
After you've created an Azure source, you are ready to start your migration. The
rest of the process for migrating your workload from an Azure source matches the
process for other sources for Migrate to Virtual Machines.
For details on how to start your migration process, see
Migrating individual VMs .
Differences from using VMware as a source
There are several unique aspects about using Azure as a source for your migrations:
You can create and edit an Azure source from the UI.
There is no utilization report for an Azure source.
Differences from using AWS as a source
The usage is almost identical to the usage of AWS as a source.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
