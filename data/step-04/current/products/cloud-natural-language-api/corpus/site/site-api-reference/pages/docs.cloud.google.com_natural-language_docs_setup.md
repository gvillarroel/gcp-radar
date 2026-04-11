---
title: "Quickstart: Setup the Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/setup
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/setup
  title: "Quickstart: Setup the Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Guides
Send feedback
Quickstart: Setup the Natural Language API
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides all required setup steps to start using Natural Language.
About the Google Cloud console
The
Google Cloud console ,
is a web UI used to provision, configure, manage,
and monitor systems that use Google Cloud products.
You use the Google Cloud console to set up and manage Natural Language resources.
Create a project
To use services provided by Google Cloud,
you must create a project .
A project organizes all your Google Cloud resources.
A project consists of the following components:
a set of collaborators
enabled APIs (and other resources)
monitoring tools
billing information
authentication and access controls
You can create one project, or you can create multiple projects and use them to organize your Google Cloud resources in a
resource hierarchy .
For more information on projects, see the
Resource Manager documentation .
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
Enable billing
A billing account is used to define who pays for a given set of resources,
and it can be linked to one or more projects.
Project usage is charged to the linked billing account.
In most cases, you configure billing when you create a project.
For more information, see the
Billing documentation .
Verify that billing is enabled for your Google Cloud project .
Enable the API
You must enable the Cloud Natural Language API for your project.
For more information on enabling APIs, see the
Service Usage documentation .
Enable the Cloud Natural Language API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install and initialize the gcloud CLI
If you plan to use the Natural Language API,
you need to install and initialize the gcloud CLI.
gcloud CLI is a set of tools that you can use
to manage resources and applications hosted on Google Cloud.
This includes the gcloud CLI .
The following link provides instructions:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Set up authentication
Any client application that uses the API must be authenticated and granted
access to the requested resources. How you set up authentication depends on
whether you are working in a local development environment or setting up a
production environment. For more information, see
Set up Application Default Credentials .
Select the tabs for how you plan to access the API:
gcloud
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Client libraries
To use client libraries in a local development environment, install and initialize the
gcloud CLI, and then set up Application Default Credentials with your user
credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up ADC for a local development environment
in the Google Cloud authentication documentation.
REST
To use the REST API in a local development environment, you use the credentials you provide to
the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
For information about setting up authentication for a production environment, see
Set up Application Default Credentials for code running on Google Cloud
in the Google Cloud authentication documentation.
Install the Natural Language API client library
You have three options for calling the Natural Language API:
Google supported client libraries (recommended)
REST
gRPC
The client libraries are available for several popular languages. For information
on installing the client libraries, see
Cloud Natural Language Client Libraries .
IAM roles
To get the permissions that
you need to access the Cloud Natural Language API,
ask your administrator to grant you the
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
IAM role on your quota project .
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
