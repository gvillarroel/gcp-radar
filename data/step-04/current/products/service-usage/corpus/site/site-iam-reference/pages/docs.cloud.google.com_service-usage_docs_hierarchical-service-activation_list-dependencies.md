---
title: "List service dependencies \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/list-dependencies
  title: "List service dependencies \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
List service dependencies
Preview
— Hierarchical service activation
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Hierarchical service activation lets you manage service enablement that is
inherited through the Google Cloud resource hierarchy. For more information, see
the overview .
Many Google Cloud services need other services to function. When
you enable a service using hierarchical service activation, its required dependencies are
automatically added to the ConsumerPolicy . A service dependency group
contains these relied-on services, which you can list to better understand and
manage them.
This document shows you how to use the Google Cloud CLI to list service
dependencies for projects, folders, and organizations.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Service Usage API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable serviceusage.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Service Usage API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable serviceusage.googleapis.com
If you don't indicate the Google Cloud resource that you want to manage, the
commands in this document default to the current project. For example,
gcloud beta services groups list-members bigquery.googleapis.com dependencies
lists the members for the current project.
You can retrieve the current project ID:
gcloud config list --format = 'text(core.project)'
Required roles
To get the permissions that
you need to list service dependencies,
ask your administrator to grant you the
Service Usage Viewer ( roles/serviceusage.serviceUsageViewer )
IAM role on your target resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to list service dependencies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to list service dependencies:
List dependency group members:
serviceusage.groups.listMembers
List expanded dependency group members:
serviceusage.groups.listExpandedMembers
You might also be able to get
these permissions
with custom roles or
other predefined roles .
List dependency group members
You can list the direct members of a service dependency group for a project,
folder, or organization by using the
gcloud beta services groups list-members
command.
Project
gcloud beta services groups list-members SERVICE GROUP \
--project = PROJECT_ID
Replace the following:
SERVICE : the name of the service you want to
list members for.
GROUP : the name of the service dependency group
you want to list members for. The primary supported group is dependencies .
PROJECT_ID : your
Google Cloud project ID .
Or, omit the flag to default to the current project.
Folder
gcloud beta services groups list-members SERVICE GROUP \
--folder = FOLDER_ID
Replace the following:
SERVICE : the name of the service you want to
list members for.
GROUP : the name of the service dependency group
you want to list members for. The primary supported group is dependencies .
FOLDER_ID : your
Google Cloud folder ID .
Organization
gcloud beta services groups list-members SERVICE GROUP \
--organization = ORGANIZATION_ID
Replace the following:
SERVICE : the name of the service you want to
list members for.
GROUP : the name of the service dependency group
you want to list members for. The primary supported group is dependencies .
ORGANIZATION_ID : your
Google Cloud organization resource ID .
You can use
other flags
to filter and limit the members listed.
List expanded dependency group members
You can list the expanded members of a service dependency group for a project,
folder, or organization by using the
gcloud beta services groups list-expanded-members
command.
This command returns a flattened list of all dependencies, including those in
nested groups, to provide a complete, combined list of all service dependencies.
Project
gcloud beta services groups list-expanded-members SERVICE GROUP \
--project = PROJECT_ID
Replace the following:
SERVICE : the name of the service you want to
list members for.
GROUP : the name of the service dependency group
you want to list members for. The primary supported group is dependencies .
PROJECT_ID : your
Google Cloud project ID .
Or, omit the flag to default to the current project.
Folder
gcloud beta services groups list-expanded-members SERVICE GROUP \
--folder = FOLDER_ID
Replace the following:
SERVICE : the name of the service you want to
list members for.
GROUP : the name of the service dependency group
you want to list members for. The primary supported group is dependencies .
FOLDER_ID : your
Google Cloud folder ID .
Organization
gcloud beta services groups list-expanded-members SERVICE GROUP \
--organization = ORGANIZATION_ID
Replace the following:
SERVICE : the name of the service you want to
list members for.
GROUP : the name of the service dependency group
you want to list members for. The primary supported group is dependencies .
ORGANIZATION_ID : your
Google Cloud organization resource ID .
You can use
other flags
to filter and limit the members listed.
Examples
Listing direct dependency group members
Listing direct dependencies of BigQuery service for the current project:
gcloud beta services groups list-members bigquery.googleapis.com dependencies
Output:
NAME : services/analyticshub.googleapis.com
REASON : BigQuery depends on this group to allow users to exchange data and analytics assets.
NAME : services/bigquery.googleapis.com
REASON : The service representing BigQuery which owns this dependency group and depends on the other members of this group.
NAME : services/bigqueryconnection.googleapis.com
REASON : BigQuery depends on this group to allow users to manage connections to external data sources.
NAME : services/bigquerydatapolicy.googleapis.com
REASON : BigQuery depends on this group to allow users to manage their data policies.
...
Attempting to list dependencies of API keys service without a corresponding service dependency group:
gcloud beta services groups list-members apikeys.googleapis.com dependencies --project = test-project
Output:
Listed 0 items.
Listing expanded dependency group members
Listing expanded dependencies of BigQuery service for the current project:
gcloud beta services groups list-expanded-members bigquery.googleapis.com dependencies
Output:
services/analyticshub.googleapis.com
services/bigquery.googleapis.com
services/bigqueryconnection.googleapis.com
services/bigquerydatapolicy.googleapis.com
services/bigquerydatatransfer.googleapis.com
services/bigquerymigration.googleapis.com
services/bigqueryreservation.googleapis.com
services/bigquerystorage.googleapis.com
services/cloudresourcemanager.googleapis.com
services/dataform.googleapis.com
services/dataplex.googleapis.com
What's next
To enable and disable services, see
Manage service enablement .
To manage policies, see
Manage consumer policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
