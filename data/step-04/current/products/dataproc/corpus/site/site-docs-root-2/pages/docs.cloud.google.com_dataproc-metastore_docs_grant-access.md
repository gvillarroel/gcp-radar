---
title: "Grant basic Dataproc Metastore IAM roles to users \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/grant-access
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/grant-access
  title: "Grant basic Dataproc Metastore IAM roles to users \_|\_ Google Cloud Documentation"
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
Grant basic Dataproc Metastore IAM roles to users
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant a Google Cloud user account or service
account access to basic Dataproc Metastore resources in a project. These roles described on this page provide access to create a Dataproc Metastore service.
Depending on the scope of control you want the account to have, you grant it one of these predefined IAM roles:
roles/metastore.editor to grant full control of Dataproc Metastore resources
roles/metastore.admin to grant full control of Dataproc Metastore resources, including updating IAM permissions.
For detailed information about the specific IAM permissions these roles provide, see Dataproc Metastore IAM roles .
Note: Completing other actions with your metastore—such as importing MYSQL files—require you to add extra roles that are not detailed on this page.
You can find more information about these roles in the respective feature guides.
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
Required Roles
You must have the roles/owner (Owner) basic IAM role in the
Google Cloud project you are using, or a role that grants these permissions:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
To gain these permissions while following the principle of least privilege,
ask your administrator to grant you the roles/resourcemanager.projectIamAdmin (Project IAM Admin)
role.
How to grant access roles
gcloud
To use the gcloud CLI, you can install and initialize the Google Cloud CLI, or you can use Cloud Shell .
Run the following add-iam-policy-binding command to grant a Dataproc Metastore predefined role to an IAM principal
(user account or service account).
gcloud projects add-iam-policy-binding PROJECT_ID \
--member= PRINCIPAL \
--role= METASTORE_ROLE
Replace the following:
PROJECT_ID : The ID of the project you want to enable Metastore access to.
PRINCIPAL : The type and email ID (email address) of the principal.
For user accounts: user: EMAIL_ID
For service accounts: serviceAccount: EMAIL_ID
For Google Groups: group: EMAIL_ID
METASTORE_ROLE : One of the following values, depending on the role you want to grant the principal: roles/metastore.editor , or roles/metastore.admin . For details about the permissions these roles grant, see Dataproc Metastore IAM roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
