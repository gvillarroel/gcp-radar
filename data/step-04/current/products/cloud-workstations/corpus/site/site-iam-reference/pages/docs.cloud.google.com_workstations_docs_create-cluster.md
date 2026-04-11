---
title: "Create a workstation cluster \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/create-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/create-cluster
  title: "Create a workstation cluster \_|\_ Cloud Workstations \_|\_ Google Cloud\
    \ Documentation"
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
Create a workstation cluster
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to get started creating a workstation cluster with
Cloud Workstations.
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
Create your workstation cluster
Workstation clusters define a group of workstations in a particular region,
manage workstations during their lifecycle, and provide configurable
network connectivity.
Workstation clusters aren't related to Google Kubernetes Engine (GKE) clusters.
To create a workstation cluster, follow these steps:
In the console,
navigate to the Cloud Workstations >
Cluster management page.
Go to Cluster management
From the workstations Cluster management page, click
add_box Create .
In the Name field, enter a name for your workstation cluster.
Select the Region that is closest to you.
Optional: To create your workstations inside a
VPC ,
expand the Network settings section and select your custom network.
In the Network field, enter the name for your network—for example,
test-network .
In the Subnetwork field, enter the name for your subnetwork—for
example, test-subnetwork .
In the Gateway type section, select Public gateway or
Private gateway .
To make your workstations accessible from public networks, select
Public gateway .
If you require data residency
for data in transit, select Private gateway .
To allow ingress and egress to the workstations service from inside
the selected network, select Private gateway .
For more information about creating a private clusters, see
Configure VPC Service Controls and private clusters
Click Create , which begins the cluster creation process.
Workstation cluster creation can take up to 20 minutes, but in most
cases is only needed once.
Clean up
To delete a workstation cluster from the Google Cloud console:
In the Google Cloud console, go to
Cloud Workstations > Clusters .
Select the checkbox beside the cluster that you want to delete.
Click the more_vert More options
menu and select Delete to delete the selected workstation cluster.
For more about deleting workstations, workstation configurations,
and Google Cloud projects,
see Delete resources .
What's next
Learn more about configuring options in your
workstation configuration .
Use the
Cloud Workstations base editor .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
