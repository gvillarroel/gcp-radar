---
title: "Grant access to other users \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/user-grant-access
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/user-grant-access
  title: "Grant access to other users \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Grant access to other users
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant a Google Cloud user account or service
account access to all AlloyDB resources in a project.
Depending on the scope of control you want the account to have, you grant it one
of these predefined IAM roles:
roles/alloydb.admin (Cloud AlloyDB Admin) to grant full control for all
AlloyDB resources
roles/alloydb.client (Cloud AlloyDB Client) and
roles/serviceusage.serviceUsageConsumer (Service Usage Consumer) to grant
connectivity access to AlloyDB instances from clients
connecting with the AlloyDB Auth proxy
roles/alloydb.databaseUser (Cloud AlloyDB Database User) to grant database-user authentication to
AlloyDB instances
roles/alloydb.viewer (Cloud AlloyDB Viewer) to grant read-only access to all
AlloyDB resources
For detailed information about the specific IAM permissions these
roles provide, see
Predefined AlloyDB IAM roles .
Before you begin
The Google Cloud project you are using must have been
enabled to access AlloyDB .
You must have the roles/owner (Owner) basic IAM role in the
Google Cloud project you are using, or a role that grants these permissions:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
To gain these permissions while following the principle of least privilege,
ask your administrator to grant you the
roles/resourcemanager.projectIamAdmin (Project IAM Admin)
role.
Enable the Cloud Resource Manager API in the Google Cloud project you are using.
Enable
the API
Procedure
Console
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project enabled to access AlloyDB.
Select a principal (user or service account) to grant access to:
To grant a role to a principal who already has other roles on the project,
find the row containing the principal's email address, click
edit Edit principal in that
row, and click add Add another role .
To grant a role to a principal who does not already have other roles on the
project, click person_add
Add , then enter the principal's email address.
From the drop-down list, select one of these roles:
Cloud AlloyDB Admin
Cloud AlloyDB Viewer
Cloud AlloyDB Client and Service Usage Consumer
Cloud AlloyDB Database User
Click Save . The principal is granted the role.
Note: In general, the policy changes will take effect within 60
seconds. However, under certain circumstances, it can take up to 7 minutes
for such changes to fully propagate across the system.
gcloud
To use the gcloud CLI, you can
install and initialize the Google Cloud CLI, or you
can use Cloud Shell .
Use the add-iam-policy-binding command to grant
an AlloyDB predefined role to an IAM principal
(user account or service account).
gcloud projects add-iam-policy-binding PROJECT_ID \
--member= PRINCIPAL \
--role= ALLOYDB_ROLE
PROJECT_ID : The ID of the project enabled to
access AlloyDB.
PRINCIPAL : The type and email ID (email address)
of the principal:
For user accounts: user: EMAIL_ID
For service accounts: serviceAccount: EMAIL_ID
ALLOYDB_ROLE : The role you want to grant
the principal. The value must be one of the following:
roles/alloydb.admin
roles/alloydb.viewer
roles/alloydb.client and roles/serviceusage.serviceUsageConsumer
roles/alloydb.databaseUser
For details about the permissions these roles grant, see
Predefined
AlloyDB IAM roles .
Note: In general, the policy changes will take effect within 60
seconds. However, under certain circumstances, it can take up to 7 minutes
for such changes to fully propagate across the system.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
