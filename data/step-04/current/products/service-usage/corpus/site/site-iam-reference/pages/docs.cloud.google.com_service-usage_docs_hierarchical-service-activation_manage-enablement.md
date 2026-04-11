---
title: "Manage service enablement \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement
  title: "Manage service enablement \_|\_ Service Usage \_|\_ Google Cloud Documentation"
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
Manage service enablement
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
This document shows you how to use the Google Cloud CLI to manage service
enablement for projects, folders, and organizations.
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
gcloud beta services list --enabled returns a list of enabled services for the
current project.
You can retrieve the current project ID:
gcloud config list --format = 'text(core.project)'
Required roles
To get the permissions that
you need to manage service enablement,
ask your administrator to grant you the
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
IAM role on your target resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage service enablement. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage service enablement:
List services:
serviceusage.effectivepolicy.get
serviceusage.services.list
serviceusage.services.get
Enable services:
serviceusage.consumerpolicy.get
serviceusage.consumerpolicy.update
serviceusage.groups.listExpandedMembers
Disable services:
serviceusage.consumerpolicy.get
serviceusage.consumerpolicy.update
serviceusage.consumerpolicy.analyze
You might also be able to get
these permissions
with custom roles or
other predefined roles .
List services
You can list the Google APIs and services that are enabled or available for a
project, folder, or organization by using the
gcloud beta services list command.
Service enablement and availability can be inherited from resource ancestors. A
resource's enabled services include services that are enabled on the resource
itself and enabled on all resource ancestors.
Note: Services hidden in the previous Service Usage release might now
appear in the list of enabled services when using hierarchical service activation. This
doesn't necessarily mean they were newly enabled. If required, you can
disable them.
Project
gcloud beta services list --enabled \
--project = PROJECT_ID
Replace PROJECT_ID with your
Google Cloud project ID .
Or, omit the flag to default to the current project.
Folder
gcloud beta services list --enabled \
--folder = FOLDER_ID
Replace FOLDER_ID with your
Google Cloud folder ID .
Organization
gcloud beta services list --enabled \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with your
Google Cloud organization resource ID .
Note the following:
You must specify one of the following flags:
--available to list services that can be enabled for consumption.
--enabled to list the services that are enabled for consumption.
You can use
other flags to filter and limit the
services listed.
Enable services
You can enable one or more services for a project, folder, or organization by
using the
gcloud beta services enable
command.
This command updates the ConsumerPolicy at the target resource. For more
information, see
Manage consumer policies .
Project
gcloud beta services enable SERVICE \
--project = PROJECT_ID
Replace the following:
SERVICE : the name of the service you want to
enable. To enable multiple services, use space-delimited service names—for
example, the following command enables both the API keys and
BigQuery services:
gcloud beta services enable apikeys.googleapis.com bigquery.googleapis.com .
PROJECT_ID : your
Google Cloud project ID .
Or, omit the flag to default to the current project.
Folder
gcloud beta services enable SERVICE \
--folder = FOLDER_ID
Replace the following:
SERVICE : the name of the service you want to
enable. To enable multiple services, use space-delimited service names—for
example: gcloud beta services enable apikeys.googleapis.com bigquery.googleapis.com .
FOLDER_ID : your
Google Cloud folder ID .
Organization
gcloud beta services enable SERVICE \
--organization = ORGANIZATION_ID
Replace the following:
SERVICE : the name of the service you want to
enable. To enable multiple services, use space-delimited service names—for
example: gcloud beta services enable apikeys.googleapis.com bigquery.googleapis.com .
ORGANIZATION_ID : your
Google Cloud organization resource ID .
Supported flags:
--async to return immediately, without waiting for the operation in
progress to complete.
--skip-dependency to skip enabling any service dependencies. Otherwise,
all service dependencies are enabled by default.
You can inspect service dependencies. For more information, see
List service dependencies .
--validate-only to validate the enablement without actually performing
the operation.
Note the following:
If you try to enable a service that is already enabled, you will receive an
error stating that the service is already enabled and present in the consumer
policy. (If the service is already enabled but its dependencies are not, the
command will succeed.)
If you enable a service at the folder or organization level, the organization
policy constraint constraints/serviceuser.services might not work as expected.
We recommend that you use the Restrict Resource Service Usage constraint instead.
For more information, see
Restricting resource usage .
Google Cloud creates and manages service accounts for many
Google Cloud services. These service accounts are known as
service agents . If you
encounter a service account not found error, you might need to create a
service agent using the
gcloud beta services identity create
command.
Disable services
You can disable one or more services for a project, folder, or organization by
using the
gcloud beta services disable
command.
This command updates the ConsumerPolicy at the target resource. For more
information, see
Manage consumer policies .
Note: Existing resources might prevent you from disabling a service. You can
delete these resources and try to disable the service again. Alternatively, you
can
restrict resource usage
using an organization policy constraint.
Project
gcloud beta services disable SERVICE \
--project = PROJECT_ID
Replace the following:
SERVICE : the name of the service you want to
disable. To disable multiple services, use space-delimited service names—for
example: gcloud beta services disable apikeys.googleapis.com bigquery.googleapis.com .
PROJECT_ID : your
Google Cloud project ID .
Or, omit the flag to default to the current project.
Folder
gcloud beta services disable SERVICE \
--folder = FOLDER_ID
Replace the following:
SERVICE : the name of the service you want to
disable. To disable multiple services, use space-delimited service names—for
example: gcloud beta services disable apikeys.googleapis.com bigquery.googleapis.com .
FOLDER_ID : your
Google Cloud folder ID .
Organization
gcloud beta services disable SERVICE \
--organization = ORGANIZATION_ID
Replace the following:
SERVICE : the name of the service you want to
disable. To disable multiple services, use space-delimited service names—for
example: gcloud beta services disable apikeys.googleapis.com bigquery.googleapis.com .
ORGANIZATION_ID : your
Google Cloud organization resource ID .
Supported flags:
--async to return immediately, without waiting for the operation in
progress to complete.
--bypass-api-usage-check to bypass usage checks. Otherwise, the system
returns an error if the service you want to disable was used in the last 30
days or enabled in the last 3 days.
You can specify one of the following flags:
--bypass-dependency-service-check to bypass the check for dependencies;
any enabled services that depend on the service you are disabling remain
enabled.
--disable-dependency-services to proceed with disabling the service
and any enabled services that depend on the service you are disabling.
You can inspect service dependencies. For more information, see
List service dependencies .
--force to proceed even if there are enabled services that depend on the
service, or the service was used in the last 30 days, or enabled in the last 3
days. Any dependent services are also disabled.
The --bypass-api-usage-check , --bypass-dependency-service-check , and
--disable-dependency-services flags all take precedence over the
--force flag.
Using both the --disable-dependency-services and
--bypass-api-usage-check flags is equivalent to using the --force flag.
The service and its dependencies are disabled without checking their usage.
--validate-only to validate the disablement without actually performing the
operation.
Examples
Enabling a service
Enabling BigQuery service without its dependencies:
gcloud beta services enable bigquery.googleapis.com --skip-dependency
Output:
Opera t io n [ opera t io ns /ucpa t .p 39-581601899707-73 a 57 d 57- aa 46-4 d 0 b - a 5ee-57034 a 42 f 2 b 3 ] comple te . Resul t : {
"@type" : "type.googleapis.com/google.api.serviceusage.with Hierarchical Service Activationbeta.ConsumerPolicy" ,
"createTime" : "2025-01-31T20:17:37.272343Z" ,
"enableRules" :[
{
"services" :[
"services/apikeys.googleapis.com" ,
"services/compute.googleapis.com" ,
"services/oslogin.googleapis.com" ,
"services/serviceusage.googleapis.com" ,
"services/bigquery.googleapis.com"
]
}
],
"etag" : "W/\"W9nsVJK0V1m7ee7tM7pFDg==\"" ,
"name" : "projects/ PROJECT_ID /consumerPolicies/default" ,
"updateTime" : "2025-09-11T23:05:22.758394Z"
}
Enabling BigQuery service with its dependencies:
gcloud beta services enable bigquery.googleapis.com
Output:
Opera t io n [ opera t io ns /ucpa t .p 39-581601899707-73192 b 0 f -053 c -46ee-911 a -7e ca 6 b 8 fe 899 ] comple te . Resul t : {
"@type" : "type.googleapis.com/google.api.serviceusage.with Hierarchical Service Activationbeta.ConsumerPolicy" ,
"createTime" : "2025-01-31T20:17:37.272343Z" ,
"enableRules" :[
{
"services" :[
"services/apikeys.googleapis.com" ,
"services/compute.googleapis.com" ,
"services/oslogin.googleapis.com" ,
"services/serviceusage.googleapis.com" ,
"services/cloudresourcemanager.googleapis.com" ,
"services/dataplex.googleapis.com" ,
"services/bigquery.googleapis.com" ,
"services/bigquerystorage.googleapis.com" ,
"services/bigqueryconnection.googleapis.com" ,
"services/analyticshub.googleapis.com" ,
"services/bigquerymigration.googleapis.com" ,
"services/dataform.googleapis.com" ,
"services/bigquerydatapolicy.googleapis.com" ,
"services/bigquerydatatransfer.googleapis.com" ,
"services/bigqueryreservation.googleapis.com"
]
}
],
"etag" : "W/\"FDXMAIdsBW7BrXjL7oP6FA==\"" ,
"name" : "projects/ PROJECT_ID /consumerPolicies/default" ,
"updateTime" : "2025-09-12T19:44:23.675769Z"
}
Disabling a service
Attempting to disable BigQuery service with active
dependencies:
gcloud beta services disable bigquery.googleapis.com
Error message:
ERROR: ( gcloud.beta.services.disable ) The services are depended on by the following active service ( s ) { "bigquery.googleapis.com" : [ "services/bigquerystorage.googleapis.com" ]} . Please remove the active dependent services or provide the --disable-dependency-services flag to disable them, or --bypass-dependency-service-check to ignore this check.
Attempting to disable BigQuery service with recent usage:
gcloud beta services disable bigquery.googleapis.com --disable-dependency-services
Error message:
ERROR: ( gcloud.beta.services.disable ) The operation "operations/ucpat.p39-581601899707-d35c2e2b-d2a3-47af-a1c0-033ed65df236" resulted in a failure "The services bigquery.googleapis.com,bigquerystorage.googleapis.com have usage in the last 30 days or were enabled in the past 3 days. Please specify force if you want to proceed with the destructive policy change.
Disabling BigQuery service and its dependencies and
bypassing the usage check:
gcloud beta services disable bigquery.googleapis.com --disable-dependency-services --bypass-api-usage-check
Output:
Opera t io n [ opera t io ns /ucpa t .p 39-581601899707-5 c 02 aa 04-7 ad 7-4e b 6- a 6 a 1- dc 68653 bcdb 4 ] comple te . Resul t : {
"@type" : "type.googleapis.com/google.api.serviceusage.v2beta.ConsumerPolicy" ,
"createTime" : "2025-01-31T20:17:37.272343Z" ,
"enableRules" :[
{
"services" :[
"services/analyticshub.googleapis.com" ,
"services/apikeys.googleapis.com" ,
"services/bigqueryconnection.googleapis.com" ,
"services/bigquerydatapolicy.googleapis.com" ,
"services/bigquerydatatransfer.googleapis.com" ,
"services/bigquerymigration.googleapis.com" ,
"services/bigqueryreservation.googleapis.com" ,
"services/cloudresourcemanager.googleapis.com" ,
"services/compute.googleapis.com" ,
"services/dataform.googleapis.com" ,
"services/dataplex.googleapis.com" ,
"services/oslogin.googleapis.com" ,
"services/serviceusage.googleapis.com"
]
}
],
"etag" : "W/\"TqbPaELDHlZQOj7As1P06g==\"" ,
"name" : "projects/ PROJECT_ID /consumerPolicies/default" ,
"updateTime" : "2025-09-30T21:39:40.746125Z"
}
What's next
To manage policies, see
Manage consumer policies .
To inspect service dependencies, see
List service dependencies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
