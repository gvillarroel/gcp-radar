---
title: "Set up multi-tenancy in Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/multi-tenancy-quickstart
  title: "Set up multi-tenancy in Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up multi-tenancy in Identity Platform
This quickstart shows you how to enable multi-tenancy in Identity Platform and
create and select new tenants using the Google Cloud console.
To learn more about multi-tenancy in Identity Platform, see multi-tenancy .
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
Required roles
To get the permissions that
you need to set up multi-tenancy,
ask your administrator to grant you the
Identity Platform Admin ( roles/identityplatform.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to set up multi-tenancy. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to set up multi-tenancy:
firebaseauth.configs.update
identitytoolkit.tenants.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Enable multi-tenancy
In the Google Cloud console, go to the Identity Platform > Settings page.
Go to Settings
Click the Security tab.
In the Multi-tenancy section, click Allow tenants .
This enables multi-tenancy and opens the Tenants page.
You are now ready to create your first tenant.
Create a tenant
In the Tenants page, click Add tenant .
In the Name field, enter a name for the tenant.
This does not need to be unique; Identity Platform automatically
assigns a distinct ID.
Click Save .
Congratulations! You've created an Identity Platform tenant.
Select a tenant
In the Settings page, select your tenant from the Scope to a tenant list.
Each tenant has its own providers and users. After you've selected a
tenant, you can manage it the same way you manage a non-tenant
Identity Platform project.
Disable multi-tenancy
To disable multi-tenancy, use the Identity Toolkit API .
What's next
Sign in users with tenants
Create a sign-in page for multiple tenants
Migrate existing users to a tenant
Manage tenants programmatically
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
