---
title: "Configure VPC Service Controls \_|\_ Database Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls
  title: "Configure VPC Service Controls \_|\_ Database Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
Configure VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure Database Center with
VPC Service Controls, a Google Cloud feature to secure data and resources.
VPC Service Controls helps mitigate the risk of data exfiltration from
Database Center instances. You can use VPC Service Controls
to create service perimeters that protect the resources and data of
services that you explicitly specify.
For a general overview of VPC Service Controls, its security benefits, and its
capabilities across supported products, see
Overview of VPC Service Controls .
Before you begin
Before you begin, review Overview of VPC Service Controls
and
Database Center limitations when using VPC Service Controls .
Then, do the following steps to make sure you have the correct permissions to
use VPC Service Controls.
In the Google Cloud console, go to the Project Selector page.
Go to project selector
Select or
create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this
procedure, create a project instead of selecting an existing project. After
you finish these steps, you can delete the project, removing all resources
associated with the project.
Make sure that billing is enabled for your Google Cloud project. Learn how to
check if billing is enabled on a project .
Enable the Compute Engine API.
Enable the Compute Engine API
Enable the Service Networking API.
Enable the Service Networking API
Add the
Identity and Access Management (IAM) roles to the user or service
account you are using to set up and administer VPC Service Controls. For more
information, see
IAM Roles for Administering VPC Service Controls .
Review
limitations when using VPC Service Controls with Database Center.
How to secure Database Center service using VPC Service Controls
Configuring VPC Service Controls for Database Center project includes
the following steps:
Create and manage a service perimeter .
First, you select the Database Center project that you want
the service perimeter to protect, and then you create and manage the service
perimeter.
Create and manage access levels .
Optionally, to permit external access to protected resources inside a
perimeter, you can use access levels. Access levels apply only to requests
for protected resources coming from outside the service perimeter. You can't
use access levels to give protected resources or VMs permission to access
data and services outside the perimeter.
Create and manage a service perimeter
To create and manage a service perimeter, complete the following steps:
Select the Database Center project that you want the service
perimeter to protect.
Create a service perimeter by following the instructions in
Creating a service perimeter .
Add more instances to the service perimeter. To add existing
Database Center instances to the perimeter, follow the
instructions in
Updating a service perimeter .
Add APIs to the service perimeter. To mitigate the risk of your data being
exfiltrated from Database Center, you must restrict
Database Center API, Compute Engine API, Cloud Storage
API, Container Registry API, Certificate Authority Service API, and Cloud KMS
API. For more information, see
access-context-manager perimeters update .
To add APIs as restricted services, complete following steps:
Console
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
In the VPC Service Controls page, in the table, click the name of the
service perimeter that you want to modify.
Click Edit .
In the Edit VPC Service Perimeter page, click Add Services .
Select Database Center ( databasecenter.googleapis.com ).
Click Save .
gcloud
gcloud access-context-manager perimeters update PERIMETER_ID \
--policy= POLICY_ID \
--add-restricted-services=databasecenter.googleapis.com
PERIMETER_ID : The ID of the perimeter or the fully qualified
identifier for the perimeter.
POLICY_ID : The ID of the access policy.
Create and manage access levels
To create and manage access levels, follow the instructions in
Allowing access to protected resources from outside a perimeter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
