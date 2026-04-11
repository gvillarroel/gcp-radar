---
title: "Cloud Vision setup and cleanup \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/setup
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs/setup
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/setup
  title: "Cloud Vision setup and cleanup \_|\_ Cloud Vision API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Vision API
Guides
Send feedback
Cloud Vision setup and cleanup
Stay organized with collections
Save and categorize content based on your preferences.
To start using Cloud Vision to get image information you need to complete
several steps using the Google Cloud console and command line. This
includes:
General tasks: Creating a Google Cloud project, enabling billing,
installing the Google Cloud CLI, setting up authentication and access
control, and performing cleanup after testing the product.
Vision API-specific tasks: Enabling the Vision API and installing
its client libraries.
About the Google Cloud Console
The Google Cloud Console
( visit documentation ,
open console )
is a web UI used to provision, configure, manage,
and monitor systems that use Google Cloud products.
You use the Google Cloud Console to set up and manage Vision resources.
Create a project
To use services provided by Google Cloud,
you must create a project .
A project organizes all your Google Cloud resources.
A project consists of a set of collaborators,
enabled APIs (and other resources), monitoring tools, billing information,
and authentication and access controls.
You can create one project,
or you can create multiple projects
and use them to organize your Google Cloud resources in a
resource hierarchy .
When creating a project, take note of the
project ID .
You will need this ID to make API calls.
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
You must enable the Vision API for your project.
For more information on enabling APIs, see the
Service Usage documentation .
Enable the Vision API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install and initialize the Google Cloud CLI
If you plan to use the Vision API,
you need to install and initialize the Google Cloud CLI .
The gcloud CLI is a set of tools that you can use
to manage resources and applications hosted on Google Cloud.
The following link provides instructions:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Set up authentication and access control
If you plan to use the Vision API,
you need to set up authentication.
Any client application that uses the API
must be authenticated and granted access to the requested resources.
This section describes important authentication concepts
and provides steps for setting it up.
For more information, see the
Google Cloud authentication overview .
Authentication with user accounts
User accounts are the best authentication option
when learning the Vision API and for local development.
You can utilize your user account to authenticate for either
REST command line executions or client library calls.
REST command line user account authentication
Note: If you're using
Cloud Shell ,
you are automatically logged in to gcloud,
so you do not need to execute
gcloud auth login .
To authenticate for REST command line calls,
you use the gcloud CLI.
The
gcloud auth login
command logs you in to gcloud with your user account,
which should be done before calling the API.
The
gcloud auth print-access-token
command is used throughout the REST command line samples in this documentation
to authenticate REST calls.
To create user credentials for your local environment:
gcloud auth login
Client library user account authentication
To authenticate for client library calls,
you use the gcloud CLI.
The
gcloud auth application-default login
command logs you in to gcloud for application default credentials with your user account,
which should be done before calling the API.
The
gcloud auth application-default set-quota-project
command must be used to set your project for billing and quotas
related to API calls.
Normally, this is the same project used by your agent,
and you supply the project ID for the project you created in steps above.
The
GOOGLE_APPLICATION_CREDENTIALS
environment variable must not be set in order for your
application default credentials to be used by client libraries.
To create application default credentials for your local environment:
gcloud auth application-default login
gcloud auth application-default set-quota-project PROJECT_ID
Authentication with service accounts
Service accounts provide credentials for applications,
as opposed to end-users.
Service accounts are owned by projects,
and you can create many service accounts for a project.
For more information, see:
The service account overview
Service account best practices
Create and manage service accounts
Access control with roles
When a principal (user account, service account, and so on)
calls an API,
Google Cloud requires that the principal has the appropriate permissions.
You can grant permissions by granting roles to a principal.
For more information, see the
role overview .
If you have created your project with your user account,
your user account has the
Owner basic role
for the project.
This role provides access to call any API for the project.
However, if a different account created the project,
you may need to have roles granted to your user account
before you can call the API.
Install the Vision API client library
You have three options for calling the Vision API:
Google supported client libraries (recommended)
REST
gRPC
The client libraries are available for several popular languages. For
information about installing the client libraries, see
Vision API client libraries .
Cleanup
After setup and trying or testing Vision,
you may want to delete resources you created:
You may want to
shutdown your project .
If you called gcloud auth login ,
this stores credentials in your user directory on your computer.
You may want to delete these credentials by calling:
gcloud auth revoke
If you called gcloud auth application-default login ,
this stores credentials in your user directory on your computer.
You may want to delete these credentials by calling:
gcloud auth application-default revoke
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
