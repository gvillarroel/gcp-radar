---
title: "View your assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/view-assets
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/view-assets
  title: "View your assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
View your assets
This document shows you how to view your assets using Cloud Asset Inventory and the
Google Cloud CLI in Cloud Shell.
Before you begin
To complete the instructions in this document, you need to enable the
Cloud Asset Inventory API and set up permissions for access to Cloud Asset Inventory and
Compute Engine.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Enable the Cloud Asset Inventory API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Enable the Cloud Asset Inventory API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to complete these instructions,
ask your administrator to grant you the
following IAM roles on the organization, folder, or project:
To view asset metadata:
Cloud Asset Viewer ( roles/cloudasset.viewer )
To create and delete a Compute Engine VM instance:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Service Account User ( roles/iam.serviceAccountUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to complete these instructions. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to complete these instructions:
To list asset metadata:
cloudasset.assets.listResource
To create a Compute Engine VM instance:
compute.disks.create
compute.instances.create
compute.instances.delete
compute.instances.setServiceAccount
compute.projects.get
compute.subnetworks.use
compute.subnetworks.useExternalIp
compute.zoneOperations.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
View your assets
In a project of your choice, create a Compute Engine VM instance so that
you can view it in Cloud Asset Inventory:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click Create instance .
Enter a name for the instance.
Click Create .
Wait for the instance to be created.
List all the VM instances in your project:
In the Google Cloud console, click
terminal Activate Cloud Shell .
In Cloud Shell, run the following command:
gcloud asset list \
--project = PROJECT_ID \
--asset-types = compute.googleapis.com/Instance \
--content-type = resource
Replace PROJECT_ID with the ID of the project whose
assets you want to list.
In the previous code sample, an asset type of
compute.googleapis.com/Instance is used to only list
Compute Engine VM instances. To view all asset types, see
Asset types .
A content type of resource has also been set. This specifies that
resource metadata should also be returned in the response. If no
content type is set, then only basic information about each asset is
returned, such as the asset name, the last time it was updated, and what
project it's in.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the same row as the name of the VM instance you created, click
more_vert More actions .
Click Delete , and then confirm the deletion.
What's next
To explore more options related to viewing your assets, see
List assets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
