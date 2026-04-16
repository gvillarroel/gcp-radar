---
title: "Develop code using Posit Workbench (including RStudio Pro) \_|\_ Cloud Workstations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/develop-code-using-posit-workbench-rstudio
  title: "Develop code using Posit Workbench (including RStudio Pro) \_|\_ Cloud Workstations\
    \ \_|\_ Google Cloud Documentation"
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
Develop code using Posit Workbench (including RStudio Pro)
Stay organized with collections
Save and categorize content based on your preferences.
Caution: A third-party provider maintains the container image listed in this
section. Google Cloud does not build, maintain, or officially support this
image. Carefully evaluate any solution before deploying it in your production
environment.
Learn how to start developing code using Posit Workbench and RStudio Pro with
Cloud Workstations. This guide takes you through configuring your environment,
creating a workstation, and launching a RStudio Pro session.
Before you begin
This guide covers steps for administrators to set up Cloud Workstations and for developers
to use the workstations.
To set up Cloud Workstations, complete the following steps:
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
Enable the Cloud Workstations API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to manage and use workstations,
ask your administrator to grant you the
following IAM roles:
Create and manage workstation clusters and configurations:
Cloud Workstations Admin ( roles/workstations.admin )
on the project
Create workstations using a configuration:
Cloud Workstations Creator ( roles/workstations.workstationCreator )
on the project or the workstation configuration
Use a workstation:
Cloud Workstations User ( roles/workstations.user )
on the workstation. This is automatically granted on workstations you create.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For a detailed overview of all Cloud Workstations roles, see
Access control with IAM .
Create the workstation configuration
To use Posit Workbench (including RStudio Pro) the you must create a workstation configuration
for the developers in your organization:
Find your Posit Workbench license key and keep it nearby because you
need it in a subsequent step. If you need a Posit Workbench license key,
contact your Posit Customer Success representative or email
sales@posit.co .
Follow the instructions to
create a workstation configuration .
When you get to the
Environment customization
step, select Code editors on base images .
From the Code editors menu, select
' Posit Workbench (including RStudio Pro) Third-party provided'.
Click the arrow_drop_down expander
arrow in the Advanced container options section.
Go to the Environment variables section, and then click
Add variable .
Enter RSW_LICENSE in the Key field and paste your
Posit Workbench license key into the Value field.
Click Continue .
When you get to the
Add users
step, give your developers
Cloud Workstations IAM access permissions
to the workstation configuration.
To create your workstation configuration and add these users to it,
click Create .
If you also elected to create a new cluster, cluster creation can take up
to 20 minutes.
Developers in your team should now be able to create workstations with
Posit Workbench.
Set up your workstation
To create a workstation, follow these steps:
In the Google Cloud console, navigate to the
Cloud Workstations > Workstations
page.
Go to Workstations
Click add_box Create .
The Create link might be disabled if there aren't any
configurations in the project or if you don't have permissions to view them.
Ask your organization's Cloud Workstations Admin to create
a workstation configuration for you.
Enter your workstation Name .
Follow the Compute Engine resource
naming conventions
and choose a name that is unique within the workstation cluster.
Click the arrow_drop_down expander
arrow in the Configuration field and select the
Posit Workbench (Third-party) workstation configuration.
Click Create
to create your workstation.
Launch your workstation
Now that you have created your workstation, you can start it and then launch it
to begin development:
Click Workstations .
Find the workstation that you created in the list of available workstations,
select the checkbox beside it, and then click Start . This starts your
workstation, and matches it to the parent workstation configuration.
If prompted to start your workstation, click Start to confirm.
The status changes to Starting and the status icon
refresh spins while the start
operation is in progress. It might take a few minutes to start your
workstation.
When your workstation is ready, the status changes to Running and the
status icon changes to a
check_circle checkmark.
Click Launch .
Launch a Posit Workbench RStudio Pro session
The following example shows the welcome page for the Posit Workbench.
Your page might look different, depending on how your organization defines
your workstation configuration:
Click New Session .
Select RStudio Pro as the IDE and leave Cluster set to Local .
For more information about Posit Workbench and the IDEs that it
supports, such as Jupyter Notebook, JupyterLab, and VS Code, see the
Posit documentation .
Click Start Session .
Wait for the session to start up and then begin coding!
Upload files to your workstation
To upload files from your local machine to your workstation, click Upload .
Select the Target directory where you want to store files on your
workstation.
Click Choose File to select the file to upload.
To begin the upload, click OK .
To upload multiple files or a directory, create a ZIP file. The ZIP
file is expanded after upload.
Import files from your workstation
To import files from your workstation, click Import dataset and select
the type of dataset.
Navigate to and select the dataset to import from your workstation.
The Posit Workbench IDE has dependencies on various R packages for
different pieces of features. For example, if you are uploading an Excel
file, certain packages need to be installed. If prompted to install required
packages, click Yes .
To begin the import, click Import .
Get support for Posit Workbench issues
If you encounter issues with Posit Workbench or with the Posit Workbench
container image, report them to Posit at support@posit.co .
What's next
Learn how to
customize container images
to your organization's needs.
Refer to the Posit Software
documentation hub
to learn more about Posit Workbench.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
