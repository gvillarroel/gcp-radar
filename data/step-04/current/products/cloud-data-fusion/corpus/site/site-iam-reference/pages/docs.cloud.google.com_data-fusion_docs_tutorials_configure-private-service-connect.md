---
title: "Create a private instance with Private Service Connect \_|\_ Cloud Data Fusion\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/tutorials/configure-private-service-connect
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/tutorials/configure-private-service-connect
  title: "Create a private instance with Private Service Connect \_|\_ Cloud Data\
    \ Fusion \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a private instance with Private Service Connect
Learn how to create a Cloud Data Fusion private instance with
Private Service Connect.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
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
Verify that billing is enabled for your Google Cloud project .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Data Fusion, BigQuery, Cloud Storage, and Dataproc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Get the roles and permissions required to create a network attachment
and a Cloud Data Fusion instance. For more information, see
Required roles and permissions .
Make sure that you have created a
VPC
or a Shared VPC
network.
Create a private instance with Private Service Connect
Go to the Cloud Data Fusion Instances page, and click Create instance .
Create an instance
In the Instance name field, enter a name for your new instance.
In the Description field, enter a description for your instance.
From the Region drop-down, select the Google Cloud region in which you
want to create the instance.
From the Version drop-down, select 6.10 or later.
Select an Edition .
Expand Advance options and do the following:
Select Enable private IP .
For Connectivity type , select Private Service Connect .
Note: The option to select the connectivity type appears only if you
selected a Cloud Data Fusion version that supports
Private Service Connect.
From the Network attachment drop-down, select a network attachment.
If a network attachment is not present, create a new one:
Click Create network attachment .
In the Name field, enter a name for your network attachment.
From the Network drop-down, select a VPC or a Shared VPC
network.
The Region field is auto-updated. Its value is same as the
the Cloud Data Fusion instance. You can't edit this field.
From the Subnetwork drop-down, select a subnetwork range.
Note: The provisioning of a secondary range for a subnet isn't required
for Cloud Data Fusion. Each Cloud Data Fusion instance requests
up to 32 IP addresses from the network attachment. Ensure that the
subnet has enough IP addresses to support the number of
Cloud Data Fusion instances that you plan to create.
For Connection preference , the option
Accept connections for selected projects is auto-selected.
When you create the Cloud Data Fusion instance, the
Cloud Data Fusion tenant project is automatically added to the
Accepted projects list.
Note: The option Automatically accept connections for all projects
is less secure because it allows any service to obtain IP addresses from
your subnet.
Click Create .
On the Create instance page, from the Network attachment
drop-down, select the newly created network attachment.
Click Create . It takes up to 30 minutes for the instance creation
process to complete.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the Cloud Data Fusion instance
Follow these instructions to
delete your Cloud Data Fusion instance .
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Create your first pipeline .
Learn more about Private Service Connect
in Cloud Data Fusion.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
