---
title: "Quickstart: Create a Vertex AI Workbench instance by using the Google Cloud\
  \ console \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create-console-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create-console-quickstart
  title: "Quickstart: Create a Vertex AI Workbench instance by using the Google Cloud\
    \ console \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create an instance by using the Google Cloud console
Learn how to create a Vertex AI Workbench instance
and open JupyterLab by using the Google Cloud console.
This page also describes how to stop, start, reset, or delete
an instance.
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
Enable the Notebooks API.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Notebooks API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Note: The Notebooks API lets you
manage Vertex AI Workbench resources. For managing
Vertex AI resources, see the
Vertex AI API .
Required roles
To get the permissions that
you need to create and manage a Vertex AI Workbench instance,
ask your administrator to grant you the
Notebooks Admin ( roles/notebooks.admin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create an instance
In the Google Cloud console,
go to the Instances page.
Go to Instances
Click add_box Create new .
For Name , enter my-instance .
Click Create .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Open JupyterLab
After you create your instance, Vertex AI Workbench automatically starts
the instance. When the instance is ready to use, Vertex AI Workbench
activates an Open JupyterLab link.
Next to your instance's name,
click Open JupyterLab .
Your Vertex AI Workbench instance opens JupyterLab.
Open a new notebook file
In JupyterLab,
select File > New > Notebook .
In the Select kernel dialog, select Python 3 ,
and then click Select .
Your new notebook file opens.
Stop your instance
In the Google Cloud console, go to the Instances page.
Go to Instances
Select the instance that you want to stop.
Click square Stop .
Start your instance
In the Google Cloud console, go to the Instances page.
Go to Instances
Select the instance that you want to start.
Click arrow_right Start .
Reset your instance
Resetting an instance forcibly wipes the memory contents of your instance and
resets the instance to its initial state. To learn more about how resetting an
instance works, see
Reset operation .
In the Google Cloud console, go to the Instances page.
Go to Instances
Select the instance that you want to reset.
Click
Reset , and then click Reset to confirm.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
If you created a new project to learn about Vertex AI Workbench instances
and you no longer need the project, then
delete the project .
If you used an existing Google Cloud project, then delete the resources
you created to avoid incurring charges to your account:
In the Google Cloud console, go to the Instances page.
Go to Instances
Select the row containing the instance that you want to delete.
Click delete Delete .
(Depending on the size of your window,
the Delete button might be in
the more_vert options menu.)
To confirm, click Confirm .
What's next
Read the Introduction to
Vertex AI Workbench instances .
To use a notebook to help you get started using Vertex AI and
other Google Cloud services, see
Vertex AI
notebook tutorials .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
