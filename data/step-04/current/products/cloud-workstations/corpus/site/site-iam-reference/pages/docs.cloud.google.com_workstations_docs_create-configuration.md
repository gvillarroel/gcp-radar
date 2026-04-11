---
title: "Create a workstation configuration \_|\_ Cloud Workstations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/workstations/docs/create-configuration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/create-configuration
  title: "Create a workstation configuration \_|\_ Cloud Workstations \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Create a workstation configuration
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to get started creating a workstation configuration with
Cloud Workstations.
A workstation configuration acts as a template for the creation of consistent
workstations for multiple developers, and specifies configuration settings such
as machine type, zones, disk size, tools, and preinstalled libraries. Any
operations performed on a workstation configuration, such as changing the
machine type or container image, reflect on each workstation the next time the
workstation starts up.
This section explains the four steps of creating a workstation configuration:
Configure basics
Define machine settings
Customize the environment
Add users
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Before you begin using Cloud Workstations, be sure that you have the
required permissions
and that you complete these required setup steps.
You can skip this section if you've already completed this setup.
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
Enable the Cloud Workstations API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have a Cloud Workstations Admin IAM role on the
project so that you can create workstation configurations.
To check your IAM roles in the Google Cloud console, go to the
IAM page:
Go to IAM
Cloud Workstations are hosted on VMs booted from Compute Engine's preconfigured public
Container-Optimized OS (COS)
images. If the constraints/compute.trustedimageProjects organization
policy constraint is enforced, you must
set image access constraints
to allow users to create boot disks from projects/cos-cloud or all public images.
Optional: Enable the Container File System API to allow faster workstation startup.
Enable the Container File System API
For more information, see
Reduce workstation startup time with
Image streaming .
Configure basics
To configure the basics of a workstation configuration, follow these steps:
In the console,
navigate to Cloud Workstations >
Workstation configurations .
Go to Workstation configurations
From the Workstation configurations page, click
add_box Create .
In the Name field, enter test-configuration as the name of your configuration.
Choose the name of your workstation cluster from the list of Clusters
and click Continue .
If no workstation cluster is available, click the
arrow_drop_down expander arrow, and
select New Cluster .
For more information, see these settings described in
Creating a new workstation cluster .
For Quick start workstations , select Enabled for faster workstation
startup or Disabled for lower cost.
This value specifies the number of virtual machines (VMs) kept in a pre-started
state, which enables faster workstation start times. However, your project
is billed for these VMs. Choose a pool size based on the number
of new developers that you anticipate, your use cases, and your budget.
If you choose Disabled , new workstations take longer to start.
The default Quick start pool size is 1 .
Optional: Add Labels to apply key-value pair labels to the underlying
Compute Engine resources.
Click Continue to progress to the Machine configuration page.
Define machine settings
Select a Machine type based on your needs. For example, you might choose
e2-standard-4 (4 CPU, 16 GB memory).
Select two Zones within the region you selected. Cloud Workstations
creates VM resources and stores data in these zones.
The zone selection also affects the type of computing resources that are
available. For example, if you select the N1 machine type and want to use
GPUs, be sure to select two zones where the chosen GPU type is listed as
available in the
GPU availability by region and zone
table.
In the Cost savings section, set the amount of time to wait before
auto-sleep. Leave the Auto-sleep field set to
After 2 hours of inactivity (default) to automatically shut down
workstations inactive for more than two hours.
Optional: In the Advanced options section, click
expand_more Expand More.
To add network tags, enter text in the Network tags field.
Network tags are metadata applied to the underlying
Compute Engine VMs that allow you to make
firewall rules and routes applicable to specific VM instances. In
Cloud Workstations, you can use network tags to make firewall rules or
routes applicable to all the workstations under a workstation
configuration.
To turn off public IP addresses, select the
Disable public IP addresses checkbox.
If you disable public IP addresses, you must set up
Private Google Access
or Cloud NAT on your network.
If you use Private Google Access and you use
private.googleapis.com or restricted.googleapis.com for
Artifact Registry, make sure that you set up DNS records for
domains
*.pkg.dev .
To turn on nested virtualization, select the
Enable nested virtualization checkbox. Nested virtualization lets
you run VM instances inside your workstation.
Before enabling nested virtualization, consider the following important
considerations.
Cloud Workstations instances are also subject to the
same restrictions as Compute Engine instances :
Organization policy : projects, folders, or
organizations might be restricted from creating nested VMs if the
Disable VM nested virtualization constraint is enforced in
the organization policy. For more information, see the
Compute Engine section,
Check whether nested virtualization is allowed .
Performance : nested VMs might experience a 10% or greater
decrease in performance for workloads that are CPU-bound and
possibly greater than a 10% decrease for workloads that are
input or output bound.
Machine Type : nested virtualization can only be enabled on
workstation configurations that specify machine types in the N1 or
N2 machine series.
To encrypt your data while it is being processed on this VM, select the
Confidential VM service checkbox. For more information, see
Create a Confidential VM instance .
To set Shielded VM settings, select the corresponding feature checkbox.
Shielded VM features include trusted UEFI firmware and provides options
for boot, vTPM, and integrity monitoring.
By default, Cloud Workstations encrypts resources created with
this workstation configuration using a
Google-owned and Google-managed encryption key .
To use a customer-managed encryption key
instead, select Use customer-managed encryption key (CMEK) .
Click Continue to progress to the Environment settings page.
Customize the environment
Customize the Cloud Workstations environment by configuring the workstation container image and persistent storage using these steps:
Configure the container image by choosing whether to use one of the
preconfigured base images
or to provide a reference to a
customized container image
that you've created.
To use a preconfigured base image :
Leave the container type set to Code editors on base images .
In the Code editors menu, choose the Cloud Workstations
Base Editor (Code OSS for Cloud Workstations) .
If your organization prefers a different IDE, you can also choose from the
list of preconfigured IDEs .
Optional: In the Service account menu, choose from the list of
service accounts .
Optional: To use your own customized container image instead of one of the preconfigured base images :
Select Custom container image .
Specify the Container image URL .
Click the Service account menu and select the service account to be
used on VM instances created under workstation configuration. This service account must have
permissions to pull your customized container image (or the image must be publicly
accessible). For more information, see the description of serviceAccount
in Customize your development environment .
In the Storage settings section, choose preferences for the initial home
directory and for disk attributes:
To create an empty home directory, select Create a blank persistent
disk . To use a disk snapshot for the home directory, choose
Create a persistent disk from a source disk snapshot .
Set the Disk type of your persistent directory to Balanced ,
which has higher performance but is more economical than SSD .
Set the Disk size of your persistent directory. The default is 200
GB but valid values are 10 , 50 , 100 , 200 , 500 , or 1000 GB.
Choose the disk size that best fits your team's needs.
Set the Reclaim policy to Delete or Retain . The default is
Delete . This policy determines what happens to the
persistent disk when a workstation is deleted.
Notes :
You can't modify the disk size or disk type after creating a
workstation.
Choosing Retain allows administrators to audit the
content of workstation home disks after the workstations are deleted,
but administrators are responsible for manually deleting the disk.
If you choose the Retain option and then delete
your workstation, your persistent disk won't be deleted. However, if you
recreate your workstation, a new disk will be attached to the
workstation which won't contain the data from the deleted workstation.
To access the data on the disk, you can follow these steps:
Create a new Compute Engine instance .
Add your persistent disk to the instance .
Mount your disk on your VM .
You can also customize further by following these optional steps:
Optional: Add Readiness checks .
If needed, specify readiness checks to verify that the workstation accepts
requests at specific paths and ports when starting workstations that are
associated with this workstation configuration.
Optional: Expand Advanced container options .
If needed, specify additional parameters for the container image being used.
For example, specify a working directory override, user override, command
overrides, arguments to pass to the entrypoint command, and environment
variables.
Click Continue to progress to the IAM policy page.
Add users
To allow multiple users to create workstations, add users to your workstation
configuration:
From the IAM Policy page, click the Users field and enter the email
addresses of one or more users or Google groups to which you want to give
access.
This sets up a Cloud Workstations Creator IAM policy for these
users.
Optional: To add Cloud Workstations policy administrator access, expand
Advanced IAM options .
To grant the roles/workstations.policyAdmin role to workstation creators,
select the Grant Policy Admin role to workstation creators checkbox. This
lets the creator of a workstation update the IAM policy of
the workstation, which grants access to the workstation and its individual
ports.
For more information about Cloud Workstations port sharing, see the
Grant access to individual Cloud Workstations ports
page.
Note: By default, the creator of a workstation gets the roles/workstations.user
role on the workstation that they create, regardless of the
Grant Policy Admin role to workstation creators setting.
To create your workstation configuration and add these users to it, click
Create .
If you also elected to create a new cluster, cluster creation can take up
to 20 minutes.
You've just created your first workstation configuration and added users to it.
To create and launch a workstation based on this configuration, click Next .
Clean up
If you created a new workstation configuration to learn about Cloud Workstations
and you no longer need the configuration, you can delete it from
the Google Cloud console:
In the Google Cloud console, go to
Cloud Workstations > Workstation configurations .
Select the checkbox beside the workstation configuration that you
want to delete.
Click the more_vert More options menu and
select Delete to delete the selected workstation configuration.
For more about deleting workstations,
workstation clusters, and Google Cloud projects,
see Delete resources .
What's next
Create a workstation using your newly
created workstation configuration.
Use the
Cloud Workstations base editor .
Customize your
workstation configuration
through the API.
Create customized container images
that extend the
preconfigured base images
provided by Cloud Workstations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
