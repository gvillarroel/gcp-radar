---
title: "Set up a service perimeter by using VPC Service Controls \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/set-up-service-perimeter
  title: "Set up a service perimeter by using VPC Service Controls \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up a service perimeter by using VPC Service Controls
Learn how to set up a service perimeter using VPC Service Controls in the Google Cloud console.
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
Enable the Access Context Manager API.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Access Context Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
Access Context Manager Editor ( roles/accesscontextmanager.policyEditor )
IAM role on your organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to complete this quickstart. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to complete this quickstart:
accesscontextmanager.accessLevels.list
accesscontextmanager.policies.create
accesscontextmanager.servicePerimeters.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Set up a VPC Service Controls perimeter
In the following sections, you specify the perimeter details, add projects and services
to protect, and create the perimeter.
Add the VPC Service Controls perimeter details
In the Google Cloud console, go to the VPC Service
Controls page.
Go to VPC Service Controls
To create a new perimeter by using the default access policy,
select your organization from the project selector menu.
If your organization doesn't have an access policy, follow these steps:
On the VPC Service Controls page, click Manage policies .
On the Manage VPC Service Controls page, click Create .
On the Create access policy page, in the Access policy title field,
enter access_policy_1 .
Click Create access policy .
On the VPC Service Controls page, click New perimeter .
On the Create a service perimeter page, in the Title field, enter
perimeter_storage_services .
For Perimeter type and Enforcement mode , retain the default selections.
Click Continue .
Add projects to the perimeter
To add projects to the perimeter, click Add projects .
In the Add Projects pane, select the projects that you want to add to
the perimeter and then click Add selected projects .
Click Continue .
Warning: If you add a project to this perimeter, the Google Cloud resources in the project cannot communicate across the perimeter.
Secure the BigQuery and Cloud Storage services within the perimeter
In the Restricted services pane, click Add services .
In the Add services pane, select the checkboxes for the BigQuery
and Cloud Storage APIs.
To locate the services, you can use the filter query.
Click Add selected services .
Click Create .
You just created a perimeter! You can see your perimeter listed on the VPC Service Controls
page. The perimeter might take up to 30 minutes to propagate and take effect. When the changes have propagated, access
to the BigQuery and Cloud Storage services is limited to the projects you added to the perimeter.
Additionally, the Google Cloud console interface for the BigQuery
and Cloud Storage services that you protected with the perimeter might become partially
or fully inaccessible.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
On the VPC Service Controls page, in the row corresponding to the
perimeter that you created, click delete Delete .
In the dialog box, click Delete to confirm that you want to
delete the perimeter.
What's next
Learn more about creating service perimeters .
Learn about managing existing service perimeters .
Learn about the limitations of using specific services with VPC Service Controls .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
