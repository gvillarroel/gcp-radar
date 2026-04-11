---
title: "Cloud Billing Budget API Setup \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup
  title: "Cloud Billing Budget API Setup \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
APIs & Reference
Send feedback
Cloud Billing Budget API Setup
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides all required setup steps to start using the
Cloud Billing Budget API.
Before you begin
You should do the following before reading this guide:
Read Cloud Billing Budget API Overview .
Read Cloud Billing Budget API Prerequisites .
About the Google Cloud console
The Google Cloud console
( visit documentation ,
open console )
is a web UI used to provision, configure, manage, and monitor systems that use
Google Cloud products. You use the Google Cloud console to set up and
manage Google Cloud and Cloud Billing resources.
1. Select or Create a project
To use services provided by Google Cloud, you must create a project .
A project organizes all your Google Cloud resources. A project consists
of a set of collaborators, enabled APIs (and other resources), monitoring tools,
billing information, and authentication and access controls. You can create
one project, or you can create multiple projects and use them to organize your
Google Cloud resources in a
resource hierarchy .
For more information on projects, see the
Resource Manager documentation .
Recommendation about projects : We recommend that you create and use a
separate Google Cloud project to contain all of your FinOps and billing
administration needs for a Cloud Billing account, including your use of
the Cloud Billing Budget API.
Learn more about the benefits to using a FinOps-focused project
for your billing administration use cases.
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
Go to project selector
2. Enable billing
You need to make sure that billing is enabled on the project you are using for
calling the Cloud Billing Budget API. If you followed the recommendation in the
project section ,
this is your FinOps or billing administration Google Cloud project.
Verify that billing is enabled for your Google Cloud project .
A Cloud Billing account is used to define who pays for a given set of
Google Cloud resources. Resources, such as enabled APIs, are organized
in projects. A Cloud Billing account can be linked to one or more projects.
Project usage is charged to the linked billing account.
In most cases, you configure billing when you create a project. For more
information, see the
Cloud Billing documentation .
Cost of use
You set up Cloud Billing budgets to monitor costs incurred in a
Cloud Billing account. The Cloud Billing account you are monitoring can
be the same Cloud Billing account that is linked to the project you use to
call the Cloud Billing Budget API. Note that the Cloud Billing Budget API is
free to use
for Google Cloud customers. If you choose to configure
programmatic budget notifications ,
you will be charged the
standard Pub/Sub prices .
3. Enable the API
You must enable the Cloud Billing Budget API in the project you are using to call
the Cloud Billing Budget API. If you followed the recommendation in the
project section ,
this is your FinOps or billing administration Google Cloud project.
For more information on enabling APIs, see the
Service Usage documentation .
Enable the Cloud Billing Budget API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
4. Set up authentication and authorization
If you plan to use the Cloud Billing Budget API, you need to set up authentication.
Any client application that uses the API must confirm its identity by
authenticating. For details, see
Authenticate to Cloud Billing .
You authenticate as a specific principal , such as a Google Account or a
service account. That principal must have Identity and Access Management (IAM) roles that
contain the required permissions for the Cloud Billing Budget API.
To ensure that the principal has the necessary
permissions to manage budgets,
ask your administrator to grant the
Billing Account Administrator ( roles/billing.admin )
IAM role to the principal on your billing account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the principal
the required permissions through custom
roles or other predefined
roles .
To learn how to grant roles on a billing account, see
Update Cloud Billing permissions .
5. Install and initialize the gcloud CLI
If you plan to use the Cloud Billing Budget API,
you need to install and initialize the Google Cloud CLI.
Google Cloud CLI is a set of tools that you can use
to manage resources and applications hosted on Google Cloud.
This includes the gcloud CLI .
The following link provides instructions:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
6. Test the SDK and authentication
If you have set up authentication in previous steps,
you can use the gcloud CLI to test your authentication environment.
Execute the following command to verify that
no error occurs and that credentials are returned:
gcloud auth print-access-token
That command is used by all Cloud Billing Budget API command line REST samples
to authenticate API calls.
7. Install the Cloud Billing Budget API client library
The Cloud Billing Budget API is built on HTTP and JSON, so any standard HTTP
client can send requests to it and parse the responses.
You have three options for calling the API:
Google supported client libraries
(recommended)
Client libraries provide better language integration, improved security, and
support for making calls that require user authorization. The Google supported
client libraries are available for several popular languages, and these are
the recommended option.
REST
gRPC
Previous
arrow_back
Prerequisites
Next
Using the Budget API
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
