---
title: "Configure VPC Service Controls \_|\_ Cloud SQL for SQL Server \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls
  title: "Configure VPC Service Controls \_|\_ Cloud SQL for SQL Server \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Configure VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to enable VPC Service Controls on a Cloud SQL
project. Before you begin, review Overview of VPC Service Controls .
Also review the Cloud SQL limitations when using VPC Service Controls .
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
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enable the Service Networking API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Add the Identity and Access Management (IAM) roles
to the user or service account you are using to set up and administer
VPC Service Controls. See IAM Roles for Administering VPC Service Controls .
Review limitations when using VPC Service Controls with Cloud SQL.
Optionally, add an organization policy that restricts public IP on
instances in projects that use that policy. See
Connection organization policies and Configuring the organization policy .
Configure the Virtual Private Cloud (VPC) network
Perform the steps in Setting up private connectivity to Google APIs and services .
Note: If you're using
Shared VPC , we recommend that you include the
host project
in a service perimeter along with any projects that belong to the
Shared VPC.
Disallow or disable public IP for Cloud SQL instances
To constrain data within the VPC for your Cloud SQL project,
do not allow connections to Cloud SQL instances from public IPs. IP-based
connections bypass VPC Service Controls. You must also disable public IP for new
and existing Cloud SQL instances within the VPC.
To either disallow or disable public IP on Cloud SQL instances:
Organization administrators can apply organization policies that disallow
creating new instances with public IP. See
Configure the organization policy .
Users who create Cloud SQL instances can configure the instances to use
private IP instead of public IP. See
Disable public IP .
Create a service perimeter
During this procedure, you select the Cloud SQL projects that you want the
VPC service perimeter to protect.
Note: Sometimes, a Cloud SQL instance enabled with CMEK has the KMS key
hosted in a different cloud project. For this scenario, when you enable VPC-SC,
you must add the KMS key hosting project to the security perimeter.
To create a service perimeter, follow the instructions in
Creating a service perimeter .
Add more instances to the service perimeter
To add existing Cloud SQL projects to the perimeter, follow the instructions
in Updating a service perimeter .
Add the Cloud SQL and Cloud Storage APIs to the service perimeter
To mitigate the risk of your data being exfiltrated from Cloud SQL, for
example, using Cloud SQL import or export APIs, you must restrict both the
Google Cloud SQL Admin API and the Google Cloud Storage API .
Note: You can only import or export data from a Cloud Storage bucket
that is in a project that resides in the same service perimeter as Cloud SQL.
To add Cloud SQL and Cloud Storage APIs as restricted services:
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, in the table, click the name of
the service perimeter that you want to modify.
Click EDIT .
On the Edit VPC Service Perimeter page, click ADD SERVICES .
Add Cloud SQL Admin API and Cloud Storage API .
Click Save .
gcloud
gcloud access-context-manager perimeters update PERIMETER_ID \
--policy = POLICY_ID \
--add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com
Where:
PERIMETER_ID is the ID of the perimeter or the fully qualified
identifier for the perimeter.
POLICY_ID is the ID of the access policy.
For reference information, see access-context-manager perimeters update .
Create an access level
Optionally, to permit external access to protected resources inside a perimeter,
you can use access levels . Access levels apply only to requests for protected
resources coming from outside the service perimeter. You can't use access levels
to give protected resources or VMs permission to access data and services
outside the perimeter.
See Allowing access to protected resources from outside a perimeter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
