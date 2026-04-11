---
title: "Quickstart: Set up the Document AI API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/setup
  title: "Quickstart: Set up the Document AI API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Quickstart: Set up the Document AI API
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides all required setup steps to start using
Document AI.
About the Google Cloud console
The Google Cloud console is a web UI used to provision, configure, manage,
and monitor systems that use Google Cloud products.
You use the Google Cloud console to set up and manage
Document AI resources.
Create a project
To use services provided by Google Cloud, you must create a project, which
organizes all your Google Cloud resources and consists of the following
components:
A set of collaborators
Enabled APIs (and other resources)
Monitoring tools
Billing information
Authentication and access controls
Document AI processors
You can create one project, or you can create multiple projects. You can use
your projects to organize your Google Cloud resources in a
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
Enable the API
You must enable the Document AI API for your project.
For more information on enabling APIs, see the
Service Usage documentation .
Enable the Document AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enable billing
A billing account defines who pays for a given set of resources.
Billing accounts can be linked to one or more projects.
Project usage is charged to the linked billing account.
You configure billing when you create a project.
For more information, see the
Billing documentation .
Verify that billing is enabled for your Google Cloud project .
Obtain required roles
To get the permissions that
you need to give a principal access to files in Cloud Storage,
ask your administrator to grant you the
Storage Admin ( roles/storage.admin )
IAM role on the bucket.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Locations
Document AI offers you some control over where the resources for your
project are stored and processed. In particular, when you create a processor,
you must choose a location to store and process your data. By default
Document AI stores and processes resources in a US location. If you choose
the European Union location, your data and processes are only stored in the
European Union.
Note: You and your users can access the data from any location.
Setting location using API
You must specify your processor's location whenever you send a processing
request using the API. For example, if your processor is configured to store and
process your data in the European Union, then use the URI
eu-documentai.googleapis.com as follows:
Process
https://eu-documentai.googleapis.com/v1/projects/$PROJECT_ID/locations/eu/processors/$PROCESSOR_ID:process
https://eu-documentai.googleapis.com/v1beta3/projects/$PROJECT_ID/locations/eu/processors/$PROCESSOR_ID:process
batchProcess
https://eu-documentai.googleapis.com/v1/projects/$PROJECT_ID/locations/eu/processors/$PROCESSOR_ID:batchProcess
https://eu-documentai.googleapis.com/v1beta3/projects/$PROJECT_ID/locations/eu/processors/$PROCESSOR_ID:batchProcess
Install the Document AI API client library
You have three options for calling the Document AI API:
Google supported client libraries (recommended)
REST
gRPC
The client libraries are available for several popular languages. For
information on installing the client libraries, see
Document AI API client libraries .
Install and initialize the Google Cloud CLI
The gcloud CLI provides a set of tools that you can
use to manage resources and applications hosted on Google Cloud.
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
About roles
When an authenticated principal attempts to access a Google Cloud
resource, IAM checks whether the principal has the required
permissions. You give permissions to principals by
granting roles in IAM allow policies .
For more information about principals, roles, resources, and allow policies, see
the IAM overview .
Follow the principle of least privilege when granting roles on
Google Cloud resources to principals. Don't give a principal more
permissions than it needs to complete the request. For more information about
best practices for access control, see
Use IAM securely .
To access resources in Document AI, use a role that has the
specific permissions that you need. For more information, see
Document AI permissions and
Document AI roles .
Cross project file access setup
When you set up your Document AI processor in one project, you might
want this project to access input files stored in a different project in the
same organization that hosts Document AI processors.
To allow cross-project access, you must grant the Storage Object Viewer role
( roles/storage.objectViewer ) to the Document AI service
agent , as shown in the following figure.
Example
Suppose project A hosts Document AI processors, and optionally
hosts a bucket processor output is written to.
Project B owns the bucket that contains input files for
Document AI processors.
To make files in project B accessible to project A , you must grant the
the Storage Object Viewer role ( roles/storage.objectViewer ) for the
input bucket in project B to the Document AI service agent
of project A .
For more information about IAM and the Storage Object Viewer
role, see IAM roles for Cloud Storage .
Built-in service accounts
A Document AI service agent follows this naming convention:
service-{project number}@gcp-sa-prod-dai-core.iam.gserviceaccount.com
Example: service-361747088407@gcp-sa-prod-dai-core.iam.gserviceaccount.com
Next Steps: Use cases
After the Document AI API has been enabled, Document AI
processors can be created and used. Which type of processor is best depends on
your use case.
Next
Enrichment
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
