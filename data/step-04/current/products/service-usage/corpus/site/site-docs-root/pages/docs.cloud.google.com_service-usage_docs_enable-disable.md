---
title: "Enable and disable services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/enable-disable
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/enable-disable
  title: "Enable and disable services \_|\_ Service Usage \_|\_ Google Cloud Documentation"
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
Enable and disable services
You can use Service Usage to enable or disable any available service
for your Google Cloud projects. This includes public
Google Cloud services and private
services created with Cloud Endpoints . To learn more
about the differences between public and private services, see
Public and private services .
Most users can enable and disable services with the Google Cloud console. For
scripts, use the Google Cloud CLI. To access the Service Usage API
programmatically, we recommend using a
client library . To try the API, you can send a
request without setting up a full development environment.
For Service Usage quota limits, see
Quotas and limits . You might want to limit the
billable usage. Depending on the API, you can explicitly
cap requests .
Before you begin
Before enabling and disabling services, you must set up your
Google Cloud project and environment for Service Usage.
Console
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Service Usage API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Service Usage API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
gcloud
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
Required roles
To get the permissions that
you need to enable and disable services,
ask your administrator to grant you the
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable a service
The process to enable a service can vary. Some APIs ask you to first accept
their Terms of Service, or are in preview and require approval before you can
use them. Other APIs might ask for additional information, such as your
organization's contact details and the name of your application. Any requested
information stays confidential within Google. We use it to understand API usage
and to contact you if necessary.
Console
In the Google Cloud console, go to the
APIs & Services > API Library page.
Go to API Library
Select a recent project or use the resource selector on the console
toolbar to select the Google Cloud project where you want to enable an API.
Click the API you want to enable or search for it using the
Search for APIs & Services box.
Click Enable .
gcloud
The
gcloud services enable
command enables a service with the name specified for the current project.
Before using any of the command data below,
make the following replacements:
SERVICE : the name of the service you want to enable.
Execute the
gcloud services enable
command:
Linux, macOS, or Cloud Shell
gcloud services enable SERVICE
Windows (PowerShell)
gcloud services enable SERVICE
Windows (cmd.exe)
gcloud services enable SERVICE
You should receive a response similar to the following:
Waiting for async operation operations/ OPERATION_ID to complete...
Operation finished successfully.
To enable multiple services, use space-delimited service names—for example, the following command
enables both the BigQuery and Pub/Sub services:
gcloud services enable bigquery.googleapis.com pubsub.googleapis.com
To retrieve the operation details, use the
gcloud services operations describe
command:
gcloud services operations describe operations/ OPERATION_ID
Replace OPERATION_ID with the operation ID you received in response to
your original request.
REST API
Enable a single service
To enable a single service use the
services.enable
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
SERVICE : the name of the service that you
want to enable.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://serviceusage.googleapis.com/v1/projects/ PROJECT_ID /services/ SERVICE :enable"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://serviceusage.googleapis.com/v1/projects/ PROJECT_ID /services/ SERVICE :enable" | Select-Object -Expand Content
If successful, the response body contains a newly created instance of
Operation :
{
"name": "operations/ OPERATION_ID "
}
Enable multiple services
To enable up to 20 services in a single operation use the
services.batchEnable
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
SERVICE1 : the name of a service that you
want to enable.
SERVICE2 : the name of another service
that you want to enable.
Request JSON body:
{
"serviceIds": [" SERVICE1 ", " SERVICE2 "]
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json SERVICE1 ", " SERVICE2 "]
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://serviceusage.googleapis.com/v1/projects/ PROJECT_ID /services:batchEnable"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"serviceIds": [" SERVICE1 ", " SERVICE2 "]
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://serviceusage.googleapis.com/v1/projects/ PROJECT_ID /services:batchEnable" | Select-Object -Expand Content
If successful, the response body contains a newly created instance of
Operation :
{
"name": "operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.api.serviceusage.v1.OperationMetadata"
}
}
Disable a service
You can disable an API for a project anytime. However, you'll still be charged
for any pending fees and billable API use in your projects. For more information,
see the Getting started guide
for Cloud APIs.
Many services, such as Cloud Storage and BigQuery, charge for data
storage. Disabling a service's API doesn't delete your data, and you'll continue
to be billed for it. To stop future charges and discontinue using a service,
delete all associated data before disabling its API.
If you disable the Kubernetes Engine API, running clusters in the project become
suspended. After 30 days, these suspended clusters are deleted. To reactivate
your clusters, re-enable the GKE API. It can take up to 24 hours
for clusters to be reinstated. For more information, see
Cluster lifecycle .
Note: If you try to disable a service that other enabled services depend on, the
request will fail and return an error. To disable the specified service and all
services that depend on it, set the disableDependentServices parameter in the
services.disable
request to true .
Console
In the Google Cloud console, go to the
APIs & Services > API Library page.
Go to API Library
Select a recent project or use the resource selector on the console
toolbar to select the Google Cloud project where you want to disable an API.
Click the API you want to disable or search for it using the
Search for APIs & Services box.
Click stop
Disable API .
gcloud
The
gcloud services disable
command disables a service with the name specified for the current project.
Before using any of the command data below,
make the following replacements:
SERVICE : the name of the service you want to disable.
Execute the
gcloud services disable
command:
Linux, macOS, or Cloud Shell
gcloud services disable SERVICE
Windows (PowerShell)
gcloud services disable SERVICE
Windows (cmd.exe)
gcloud services disable SERVICE
You should receive a response similar to the following:
Waiting for async operation operations/ OPERATION_ID to complete...
Operation finished successfully.
To disable multiple services, use space-delimited service names—for example, the following
command disables both the BigQuery and Pub/Sub services:
gcloud services disable bigquery.googleapis.com pubsub.googleapis.com
To retrieve the operation details, use the
gcloud services operations describe
command:
gcloud services operations describe operations/ OPERATION_ID
Replace OPERATION_ID with the operation ID you received in response to
your original request.
REST API
To disable a service use the
services.disable
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
SERVICE : the name of the service that you
want to disable.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://serviceusage.googleapis.com/v1/projects/ PROJECT_ID /services/ SERVICE :disable"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://serviceusage.googleapis.com/v1/projects/ PROJECT_ID /services/ SERVICE :disable" | Select-Object -Expand Content
If successful, the response body contains a newly created instance of
Operation :
{
"name": "operations/ OPERATION_ID "
}
Check the status of a long-running operation
Using the enable or disable method returns a long-running
operation (LRO). The LRO
tracks the status of the request and indicates whether the change to the service
is complete.
Before using any of the request data,
make the following replacements:
OPERATION_ID : the operation identifier.
You receive this ID in the response to your original request.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://serviceusage.googleapis.com/v1/operations/ OPERATION_ID "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://serviceusage.googleapis.com/v1/operations/ OPERATION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.protobuf.Empty"
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.api.serviceusage.v1.EnableServiceResponse",
"service": {
"name": "projects/ PROJECT_NUMBER /services/ SERVICE ",
"config": {
"name": " SERVICE ",
"title": " TITLE ",
"documentation": {},
"quota": {},
"authentication": {},
"usage": {
"requirements": [
"serviceusage.googleapis.com/tos/cloud"
]
},
"monitoring": {}
},
"state": "ENABLED",
"parent": "projects/ PROJECT_NUMBER "
}
}
}
When the done field is set to true , the operation is complete.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
