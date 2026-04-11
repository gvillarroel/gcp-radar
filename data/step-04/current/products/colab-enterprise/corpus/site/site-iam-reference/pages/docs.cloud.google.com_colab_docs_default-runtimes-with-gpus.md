---
title: "Enable default runtimes with GPUs \_|\_ Colab Enterprise \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus
  title: "Enable default runtimes with GPUs \_|\_ Colab Enterprise \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Enable default runtimes with GPUs
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For support during the preview, email
vertex-notebooks-previews-external@google.com .
This document describes how to enable a default runtime with GPUs for
Colab Enterprise users in a project. After enabling a
default runtime with GPUs, users can switch from a regular default runtime
to a default runtime with GPUs by clicking a button in their notebook.
This document is intended for Colab Enterprise administrators who
want to enable default runtimes with GPUs for other users in their
organization. It assumes you have knowledge of the following:
How to manage Colab Enterprise runtimes and runtime templates.
How to use Identity and Access Management (IAM) to control access.
Overview
To enable users to switch to a default runtime with GPUs, an administrator
( roles/aiplatform.colabEnterpriseAdmin )
or a user account with the aiplatform.notebookRuntimeTemplates.create
permission must first create a default runtime with GPUs.
The first time that you create a default runtime with GPUs,
Colab Enterprise creates a new default runtime template that
includes GPUs in its specifications. The original default runtime isn't
affected and exists until it expires or it's deleted. After the
new default runtime template with GPUs is created, any user with
the aiplatform.notebookRuntimes.assign permission on the project
and the aiplatform.notebookRuntimeTemplates.apply permission on the
runtime template can create and use a default runtime with GPUs. These
permissions are included in the Colab Enterprise User
( roles/aiplatform.colabEnterpriseUser )
role.
Specifications
The default runtime with GPUs has different specifications than
the original default runtime. The machine types, GPUs, and data disk types
that are available vary by region, so some specifications can be different
from your original default runtime.
The following table describes the specifications for
a default runtime with GPUs based on the region of the default runtime.
Region description
Default runtime specifications
Regions that support L4 GPUs
Machine type : g2-standard-4
Accelerator : 1 NVIDIA_L4 accelerator
Data disk : 100 GB pd-balanced
Regions that don't support L4 GPUs but do support T4 GPUs
Machine type : n1-standard-4
Accelerator : 1 NVIDIA_TESLA_T4 accelerator
Data disk : 100 GB pd-standard
Regions that don't support L4 or T4 GPUs
Default runtimes with GPUs aren't supported.
Accelerator availability
Colab Enterprise supports default runtimes with the following
accelerator types:
L4
T4
To learn about the regional availability of these accelerators, see
Using accelerators .
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To ensure that your user account has the necessary
permissions to enable default runtimes with GPUs in Colab Enterprise,
ask your administrator to grant the
Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin )
IAM role to your user account on the project.
Important: You must grant this role
to your user account, not to your user account. Failure to grant the role to the correct principal might result in permission errors.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give your user account
the required permissions through custom
roles or other predefined
roles .
One or more of the required roles includes the dataform.repositories.list
permission. Users who are granted the dataform.repositories.list permission or the
Code Creator
( roles/dataform.codeCreator ) role in a project can list the
names of code assets in that project by using the Dataform API or the
Dataform command-line interface (CLI). Non-administrators using
BigQuery Studio can only see code assets that they created or that were
shared with them.
Enable GPUs for default runtimes
To enable GPUs for default runtimes, do the following:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Click the notebook that you want to open. If you haven't created a notebook yet,
create a notebook .
In your notebook, click Connect .
After Colab Enterprise connects to the default runtime, in the
top right corner of your notebook, click the button to switch to
a default runtime with GPUs. For example, if your notebook is in
a region that supports L4 accelerators, click
Switch to L4 .
Colab Enterprise creates a new default runtime that has
GPUs, and then connects to the runtime. The ability to switch to a
default runtime with GPUs is enabled for other users in the project.
Turn off GPUs for default runtimes
To turn off the ability to switch to a default runtime with GPUs, you
must delete the runtime template named Default with GPU .
See Delete a runtime template .
Limitations
Default runtimes with GPUs are only available in regions that support
specific accelerator availability. See
Accelerator availability .
You must first connect a notebook to a default runtime to be able to switch to
a default runtime with GPUs.
What's next
To manage your runtime, see Manage runtimes .
Learn more about runtimes and runtime templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
