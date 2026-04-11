---
title: "Set up Enterprise Knowledge Graph API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/setup
  title: "Set up Enterprise Knowledge Graph API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Enterprise Knowledge Graph
Guides
Send feedback
Set up Enterprise Knowledge Graph API
Stay organized with collections
Save and categorize content based on your preferences.
This guide provides all required setup steps to start using
Enterprise Knowledge Graph.
About the Google Cloud console
The Google Cloud console is a web UI used to provision, configure, manage,
and monitor systems that use Google Cloud products.
You use the Google Cloud console to set up and manage
Enterprise Knowledge Graph resources.
Create a project
To use services provided by Google Cloud,
you must create a project .
A project organizes all your Google Cloud resources.
A project consists of the following components:
A set of collaborators
Enabled APIs (and other resources)
Monitoring tools
Billing information
Authentication and access controls
You can create one project, or you can create multiple projects. You can use
your projects to organize your Google Cloud resources in a
resource hierarchy .
For more information about projects, see the
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
You must enable the Enterprise Knowledge Graph API for your project.
For more information about enabling APIs, see the
Service Usage documentation .
Enable the Enterprise Knowledge Graph API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up authentication
Any client application that uses the API
must be authenticated and granted access to the requested resources.
This section describes important authentication concepts
and provides steps for setting it up.
For more information, see the
Authentication overview .
About service accounts
There are multiple options for authentication,
but we recommend that you use service accounts
for authentication and access control.
A service account provides credentials for applications,
as opposed to end users.
Projects own their service accounts.
You can create many service accounts for a project.
For more information, see
Service accounts .
About roles
When calling an API, Google Cloud requires the calling identity
(any applicable person, entity, or process and their defined attributes)
to have the appropriate permissions.
You can grant permissions by granting roles to a service account.
For more information, see the
Identity and Access Management (IAM) documentation .
For the purpose of trying the Enterprise Knowledge Graph API,
you can use the Project > Owner role in the following steps.
The Project > Owner role grants the service account full permission to
resources in your project.
If your service account does not require full permissions, you specify
a more restrictive role using the
Google Cloud console .
For a list of permissions and roles for Enterprise Knowledge Graph, see
Enterprise Knowledge Graph permissions and
Enterprise Knowledge Graph roles .
For information about managing permissions using IAM roles, see
granting roles to service accounts .
About service account keys
Service accounts are associated with one or more public or private key pairs.
When you create a new key pair,
you download the private key.
The Google Cloud CLI uses your private key to generate credentials when calling
the API.
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
Create a service account and download the private key file
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Project > Owner role to the service account.
To grant the role, find the Select a role list, then select
Project > Owner .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
In production environments, do not grant the Owner, Editor, or Viewer roles. Instead, grant a
predefined role or
custom role that meets your needs.
Click Continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key:
In the Google Cloud console, click the email address for the service account that you
created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Use the service account key file in your environment
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
