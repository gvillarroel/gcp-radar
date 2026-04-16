---
title: "Add predefined organization policies \_|\_ Cloud SQL for MySQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/org-policy/configure-org-policy
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/org-policy/configure-org-policy
  title: "Add predefined organization policies \_|\_ Cloud SQL for MySQL \_|\_ Google\
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
MySQL
Guides
Send feedback
Add predefined organization policies
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to add organization policies on Cloud SQL
instances, to put restrictions on Cloud SQL at the project, folder, or
organization level. For an overview, see Cloud SQL organization policies .
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
Install the gcloud CLI .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Install the gcloud CLI .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Add the Organization Policy Administrator role
( roles/orgpolicy.policyAdmin )
to your user or service account from the IAM & Admin page.
Go to the IAM accounts page
See Restrictions
before performing this procedure.
Add the connection organization policy
For an overview see Connection organization policies .
To add a connection organization policy:
Go to the Organization policies page.
Go to the Organization policies page
Click projects dropdown menu in the top tab, and then select the project, folder,
or organization that requires the organization policy. The
Organization policies page displays a list of organization policy
constraints that are available.
Filter for the constraint name or display_name .
To disable access to or from the Internet:
name : "constraints/sql.restrictPublicIp"
display_name : "Restrict Public IP access on Cloud SQL instances"
To disable access from the internet when IAM authentication is missing
(this does not affect access using Private IP):
name : "constraints/sql.restrictAuthorizedNetworks"
display_name : "Restrict Authorized Networks on Cloud SQL instances"
Select the policy Name from the list.
Click Edit .
Click Customize .
Click Add rule .
Under Enforcement , click On .
Click Save .
Add the CMEK organization policy
For an overview, see Customer-managed encryption keys organization policies .
To add a CMEK organization policy:
Go to the Organization policies page.
Go to the Organization policies page
Click projects dropdown menu in the top tab, and then select the project, folder,
or organization that requires the organization policy. The
Organization policies page displays a list of organization policy
constraints that are available.
Filter for the constraint name or display_name .
To put service names in a DENY list to ensure that CMEK is used in the
resources for that service:
name : "constraints/gcp.restrictNonCmekServices"
display_name : "Restrict which services may create resources without CMEK"
You must add sqladmin.googleapis.com to the list of restricted services
with Deny.
To put project IDs in an ALLOW list to ensure that only keys from an
instance of Cloud KMS within that project are used for CMEK.
name : "constraints/gcp.restrictCmekCryptoKeyProjects"
display_name : "Restrict which projects may supply KMS CryptoKeys for CMEK"
Select the policy Name from the list.
Click Edit .
Click Customize .
Click Add rule .
Under Policy values , click Custom .
For constraints/gcp.restrictNonCmekServices :
a. Under Policy types , select Deny .
b. Under Custom values , enter sqladmin.googleapis.com .
For constraints/gcp.restrictCmekCryptoKeyProjects :
a. Under Policy types , select Allow .
b. Under Custom values , enter the resource using the following format:
under:organizations/ORGANIZATION_ID ,
under:folders/FOLDER_ID , or projects/PROJECT_ID .
Click Done .
Click Save .
What's next
Learn about Organization policies .
Learn about how private IP works with Cloud SQL.
Learn how to configure private IP for Cloud SQL.
Learn about the organization policy service .
Learn about organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
