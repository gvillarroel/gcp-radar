---
title: "Create a managed instance group (MIG) \_|\_ Compute Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/compute/docs/quickstart-mig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/images/guest-agent
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/quickstart-mig
  title: "Create a managed instance group (MIG) \_|\_ Compute Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a managed instance group (MIG)
Learn how to create a
managed instance group (MIG)
in Compute Engine by using the Google Cloud console.
A MIG is a collection of virtual machine (VM) instances that you can manage as a
single entity. MIGs support features such as autohealing, autoscaling, load
balancing, multiple zone coverage, and stateful workloads.
Each VM in a MIG is based on an
instance template . You need to create an
instance template before you create a MIG.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Enable the API
Required roles
To get the permissions that
you need to create an instance template and a MIG,
ask your administrator to grant you the
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create an instance template and a MIG. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create an instance template and a MIG:
Create an instance template:
compute.instanceTemplates.create
Create a MIG:
compute.instanceGroupManagers.create
Delete a MIG:
compute.instanceGroupManagers.delete
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Create an instance template
In the Google Cloud console, go to the Instance templates page.
Go to Instance templates
Click
Create instance template .
To create a template that uses an Ubuntu OS, perform the following steps:
In the Boot disk section, click Change .
In the Operating system list, select
Ubuntu .
Click Select .
The template applies these settings to all the VMs that are created using
this template. Note the name of the template, which you use later in the
tutorial.
To create the instance template, click Create .
Allow a few minutes for Compute Engine to create the template. When the
template is ready, it's listed on the Instance templates page.
Create a MIG by using the instance template
Go to the Instance groups page.
Go to Instance groups
Click Create instance group ,
and then perform the following steps:
In the Name field, accept the default name or enter
quickstart-instance-group-1 .
In the Instance template list,
select the instance template that you created earlier.
In the
Location section, ensure that
Single zone is selected.
In the Region field, select a region where you want to create the
MIG.
In the
Autoscaling section, accept the
default settings unless you need to modify them.
To create the MIG, click Create .
Allow a few minutes for Compute Engine to create the group and its VMs.
After the group is ready, it's listed on the Instance groups page.
You have successfully created a managed instance group.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Delete the resources
If you used an existing Google Cloud project, delete the resources that
you created to avoid incurring charges to your account:
Go to the Instance groups page.
Go to Instance groups
Select the instance group that you want to delete.
Click Delete .
When you're prompted, enter the required value, and then click Delete .
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
Learn how to work with managed instances .
Learn about other basic scenarios for creating a MIG .
Learn more about autoscaling and about using
different autoscaling signals to automatically create VMs when load increases
and delete VMs when load goes down.
To improve the availability of your application, set up an
application-based autohealing health check .
An application-based health check tells the MIG to automatically recreate
unhealthy VMs if your application fails to respond as expected.
To further improve availability, learn about distributing a MIG's VMs across
multiple zones within a region by
creating a regional MIG .
To update the configuration of the VMs in your MIG, create and apply a new
instance template. For more information, see
Applying new configurations to VMs in a MIG .
If you need to support a stateful workload, learn how to
add a stateful configuration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
