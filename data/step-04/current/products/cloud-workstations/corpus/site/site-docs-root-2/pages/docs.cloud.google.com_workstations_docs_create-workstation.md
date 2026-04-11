---
title: "Create and launch a workstation \_|\_ Cloud Workstations \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/workstations/docs/create-workstation
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/create-workstation
  title: "Create and launch a workstation \_|\_ Cloud Workstations \_|\_ Google Cloud\
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
Create and launch a workstation
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to get started creating a workstation with Cloud Workstations.
A workstation is a preconfigured development environment that administrators
or platform teams define in a workstation configuration . The workstation
configuration includes the container image used by the workstation. Your
administrators choose whether to use one of the Cloud Workstations
preconfigured base images
or whether to provide a reference to a
customized container image .
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
Optional: If you don't have workstation configurations available in the
Google Cloud console ,
ask your administrator to create a workstation configuration for
you, or make sure that you have a Cloud Workstations Admin IAM role on the
project so that you can create these resources yourself.
To check your IAM roles, go to the IAM
page in the Google Cloud console:
Go to IAM
Create a workstation
To create a workstation, follow these steps:
In the Google Cloud console, navigate to the
Cloud Workstations > Workstations
page.
Go to Workstations
Click add_box Create .
The Create link might be disabled if there aren't any
workstation configurations in the project or if you don't have permissions
to view them.
Ask your organization's Cloud Workstations Admin to create a
workstation configuration for you.
Accept the default workstation Name .
If you prefer, you can enter your own resource name for your
workstation—for example, test-workstation .
Follow the Compute Engine resource
naming conventions
and choose a name that is unique within the workstation cluster.
Click the arrow_drop_down expander
arrow in the Configuration field and select the
workstation configuration to define your workstation.
Click Create
to create your workstation.
Launch a workstation
Now that you have created a workstation, launch it to begin development:
Click Workstations .
In the list of workstations, find your workstation name and
click Launch .
The workstation connects to port 80 by default.
If the workstation is stopped, clicking Launch also starts it.
Tip: You can bookmark the launch page to restart and access your
workstation.
Optional: You can also click the
arrow_drop_down expander
arrow next to Launch and select from the list of launch options:
Start
Connect to port 80 (default)
Connect to web app on port
Port forwarding
Connect using SSH
Launch with JetBrains Gateway (if you are using a JetBrains IDE)
The Start option starts the workstation without launching it.
The following example shows the welcome page for the Cloud Workstations
base editor .
Your page might look different, depending on how you define your
workstation configuration:
For more information about connecting through SSH, see
SSH support .
For more information about connecting to web apps running on your
workstation, see
Access HTTP servers running on a workstation .
Clean up
To delete a workstation from the Google Cloud console:
In the Google Cloud console, go to
Cloud Workstations > Workstations .
Select the checkbox beside the workstation that you want to delete.
Click the more_vert More options menu and
select Delete to delete the selected workstation.
If your workstation configuration uses persistent disks and the
reclaim policy
is set to retain persistent disks after you delete the workstation, be sure to
remind your Cloud Workstations Admin to manually delete the
persistent disk for you.
For more about deleting workstation configurations,
workstation clusters, and Google Cloud projects,
see Delete resources .
What's next
Use the
Cloud Workstations base editor .
Learn more about configuring additional options in your
workstation configuration .
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
