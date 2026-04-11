---
title: "Enable and disable Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/enable-service
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/enable-service
  title: "Enable and disable Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Enable and disable Dataproc Metastore
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to enable or disable Dataproc Metastore
for your Google Cloud project. For more information about the Service Usage API,
see Enabling and disabling services .
Before you begin
Understand How Dataproc Metastore works .
Required Roles
To get the permissions that
you need to enable and disable the Dataproc Metastore API,
ask your administrator to grant you the
Service Usage Administrator ( roles/serviceusage.serviceUsageAdmin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to enable and disable the Dataproc Metastore API. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to enable and disable the Dataproc Metastore API:
serviceusage.services.disable
serviceusage.services.enable
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information about specific Dataproc Metastore roles and permissions, see Dataproc Metastore IAM overview .
Enable Dataproc Metastore
You can use an existing Google Cloud project with Dataproc Metastore
or create a new one. In both cases, you need to enable billing and the
Dataproc Metastore API.
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
Enable the Dataproc Metastore API.
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
Enable the Dataproc Metastore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Disable Dataproc Metastore
Before you disable the Dataproc Metastore API, make sure you
Delete all of your metastore services .
You can't disable the API while a service is running or still exists.
Note: To avoid charges, delete all Cloud Storage buckets for your services.
You can delete your services before or after disabling the API.
To disable the Dataproc Metastore API, follow these steps:
In the Google Cloud console, select the project that contains the Dataproc Metastore API.
Go to the Dataproc Metastore API overview page .
Click Manage .
Click Disable API .
What's next
Quickstart for deploying Dataproc Metastore
Create a service
Service access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
