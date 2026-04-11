---
title: "Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/storage-manage
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/storage-manage
  title: "Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Manage trace storage
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to use the Observability API to get
information about the observability bucket that stores your trace data.
It includes information about how to list datasets, links, and views.
To learn more about how your trace data is stored, see
Trace storage overview .
Before you begin
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
Verify that billing is enabled for your Google Cloud project .
Enable the Observability API.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Observability API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
To get the permissions that
you need to list buckets, links, and views,
ask your administrator to grant you the
Observability Viewer ( roles/observability.viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Select the tab for how you plan to use the samples on this page:
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
List observability buckets
gcloud
Note : You must use
gcloud CLI version 563.0.0 or later.
Before using any of the command data below,
make the following replacements:
LOCATION : The location of the observability buckets. To list all observability buckets,
regardless of location, set the location to a hyphen ( - ).
PROJECT_ID : The identifier of the project..
Execute the
gcloud beta observability buckets list
command:
Linux, macOS, or Cloud Shell
gcloud beta observability buckets list \
--location = LOCATION --project = PROJECT_ID
Windows (PowerShell)
gcloud beta observability buckets list `
--location = LOCATION --project = PROJECT_ID
Windows (cmd.exe)
gcloud beta observability buckets list ^
--location = LOCATION --project = PROJECT_ID
The response lists the name, description, and create time of each observability buckets.
The following is an example of a response when the command is successful:
---
createTime: '2026-01-21T21:39:22.381083860Z'
description: Bucket for storing spans from Cloud Trace.
name: projects/my-project/locations/us/buckets/_Trace
REST
To list the observability buckets that are in your project and in a specific
location, send a request to the
projects.locations.buckets.list
endpoint.
You must specify the parent parameter, which has the following form:
projects/ PROJECT_ID /locations/ LOCATION
The fields in the previous expression have the following meanings:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the observability bucket .
If you set LOCATION to a hyphen, (-) , then all observability buckets
in your project are listed.
The response is an array of
Bucket objects. For each object, the value of the
name field has the following format:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID
For example, when a command was issued to the buckets.list endpoint with the
parent parameter set to projects/my-project/locations/us ,
the response was:
{
"buckets": [
{
"name": "projects/my-project/locations/us/buckets/_Trace",
"description": "Trace Bucket",
"createTime": "2025-01-01T15:42:30.988919645Z",
"updateTime": "2025-02-04T15:42:30.988919645Z",
"retentionDays": 30
}
]
}
You can issue commands to other Observability API endpoints to get more
information about the bucket whose ID is BUCKET_ID . For example, you can
list the datasets on that bucket, and the views and links on each
dataset. For a complete list of Observability API endpoints,
see the Observability API reference documentation .
List datasets on a observability bucket
gcloud
Note : You must use
gcloud CLI version 563.0.0 or later.
Before using any of the command data below,
make the following replacements:
BUCKET_ID : The ID of the observability bucket. For example, this ID might be
_Trace .
LOCATION : The location of the observability buckets.
PROJECT_ID : The identifier of the project..
Execute the
gcloud beta observability buckets datasets list
command:
Linux, macOS, or Cloud Shell
gcloud beta observability buckets datasets list \
--bucket = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID \
--location = LOCATION \
--project = PROJECT_ID
Windows (PowerShell)
gcloud beta observability buckets datasets list `
--bucket = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID `
--location = LOCATION `
--project = PROJECT_ID
Windows (cmd.exe)
gcloud beta observability buckets datasets list ^
--bucket = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID ^
--location = LOCATION ^
--project = PROJECT_ID
The response lists the name, description, and create time of each dataset. The following is
an example of a response when the command is successful:
---
createTime: '2026-01-21T21:39:22.381083860Z'
description: Dataset for storing spans from Cloud Trace.
name: projects/my-project/locations/us/buckets/_Trace/datasets/Spans
REST
To list the datasets for an observability bucket, send a request to the
projects.locations.buckets.datasets.list
endpoint.
You must specify the parent parameter, which has the following form:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID
The fields in the previous expression have the following meanings:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the observability bucket .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be _Trace .
The response is an array of Dataset objects.
For each object, the value of the name field has the following format:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /dataset/ DATASET_ID
For example, when a command was issued to the
buckets.datasets.list endpoint with the
parent parameter set to projects/my-project/locations/us/buckets/_Trace ,
the response was:
{
"datasets": [
{
"name": "projects/my-project/locations/us/buckets/_Trace/datasets/Spans",
"description": "Trace Spans",
"createTime": "2025-01-01T15:42:30.988919645Z",
"updateTime": "2025-02-04T15:42:30.988919645Z",
}
]
}
You can issue commands to other Observability API endpoints to get
information about the dataset whose ID is DATASET_ID . For example, you can
list the views and links on each dataset.
For a complete list of Observability API endpoints,
see the Observability API reference documentation .
List views on a dataset
gcloud
Note : You must use
gcloud CLI version 563.0.0 or later.
Before using any of the command data below,
make the following replacements:
DATASET_ID : The ID of the dataset. Your trace data is stored in a dataset named
Spans .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be
_Trace .
LOCATION : The location of the observability buckets.
PROJECT_ID : The identifier of the project..
Execute the
gcloud beta observability buckets datasets views list
command:
Linux, macOS, or Cloud Shell
gcloud beta observability buckets datasets views list \
--dataset = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID \
--bucket = BUCKET_ID \
--location = LOCATION \
--project = PROJECT_ID
Windows (PowerShell)
gcloud beta observability buckets datasets views list `
--dataset = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID `
--bucket = BUCKET_ID `
--location = LOCATION `
--project = PROJECT_ID
Windows (cmd.exe)
gcloud beta observability buckets datasets views list ^
--dataset = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID ^
--bucket = BUCKET_ID ^
--location = LOCATION ^
--project = PROJECT_ID
The response lists the name, create time, and update time of each observability views.
The following is an example of a response when the command is successful:
---
createTime: '2026-01-21T21:39:22.381083860Z'
displayName: _AllSpans
name: projects/pamstestproject1/locations/us/buckets/_Trace/datasets/Spans/views/_AllSpans
updateTime: '2026-01-21T21:39:22.381083860Z'
REST
To list the views on a dataset, send a request to the
projects.locations.buckets.datasets.views.list
endpoint.
You must specify the parent parameter, which has the following form:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID /views
The fields in the previous expression have the following meanings:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the observability bucket .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be _Trace .
DATASET_ID : The ID of the dataset being queried. For example, this ID
might be Spans .
The response is an array of
View objects.
For each object, the value of the name field has the following format:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /views/ OBS_VIEW_ID
In the previous express, the ID of a view is represented by OBS_VIEW_ID .
For example, this field might have a value of _AllSpans .
For example, when a command was issued to the buckets.datasets.views.list
endpoint with the parent parameter set to
projects/my-project/locations/us/buckets/_Trace/datasets/Spans/views ,
the response was:
{
"views": [
{
"name": "projects/my-project/locations/us/buckets/_Trace/datasets/Spans/views/_AllSpans",
"filter": "",
"createTime": "2025-01-01T15:42:30.988919645Z",
"updateTime": "2025-02-04T15:42:30.988919645Z",
}
]
}
For a complete list of Observability API endpoints,
see the Observability API reference documentation .
List links on a dataset
gcloud
Note : You must use
gcloud CLI version 563.0.0 or later.
Before using any of the command data below,
make the following replacements:
DATASET_ID : The ID of the dataset. Your trace data is stored in a dataset named
Spans .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be
_Trace .
LOCATION : The location of the observability buckets.
PROJECT_ID : The identifier of the project..
Execute the
gcloud beta observability buckets datasets links list
command:
Linux, macOS, or Cloud Shell
gcloud beta observability buckets datasets links list \
--dataset = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID \
--bucket = BUCKET_ID \
--location = LOCATION \
--project = PROJECT_ID
Windows (PowerShell)
gcloud beta observability buckets datasets links list `
--dataset = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID `
--bucket = BUCKET_ID `
--location = LOCATION `
--project = PROJECT_ID
Windows (cmd.exe)
gcloud beta observability buckets datasets links list ^
--dataset = projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID ^
--bucket = BUCKET_ID ^
--location = LOCATION ^
--project = PROJECT_ID
The response lists the name and create time of each link. The following is
an example of a response when the command is successful:
---
createTime: '2026-04-02T21:23:09.272323714Z'
name: projects/my-project/locations/us/buckets/_Trace/datasets/Spans/links/mydataset
REST
To list the links on a dataset, send a request to the
projects.locations.buckets.datasets.links.list
endpoint.
You must specify the parent parameter, which has the following form:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID
The fields in the previous expression have the following meanings:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the observability bucket .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be _Trace .
DATASET_ID : The ID of the dataset being queried. For example, this ID
might be Spans .
The response is an array of
Link objects.
For each object, the value of the name field has the following format:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /links/ LINK_ID
The LINK_ID is the name of the BigQuery dataset. This field
is globally unique for your Google Cloud project.
For example, when a command was issued to the buckets.datasets.links.list
endpoint with the parent parameter set to
projects/my-project/locations/us/buckets/_Trace/datasets/Spans/links ,
the response was:
{
"links": [
{
"name": "projects/my-project/locations/us/buckets/_Trace/datasets/Spans/links/my_link",
"description": "My link for traces to BigQuery",
"createTime": "2025-01-12T15:42:30.988919645Z"
}
]
}
For a complete list of Observability API endpoints,
see the Observability API reference documentation .
Create a link on a dataset
This section describes how to create a link on a dataset, which lets your trace
data be queried from BigQuery.
Before you begin
Complete the required setup to list links .
To get the permissions that
you need to create a link on a dataset,
ask your administrator to grant you the
following IAM roles on your project:
Observability Editor ( roles/observability.editor )
BigQuery User ( roles/bigquery.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a linked BigQuery dataset
gcloud
Note : You must use
gcloud CLI version 563.0.0 or later.
Before using any of the command data below,
make the following replacements:
LINK_ID : The name of the BigQuery dataset.
DATASET_ID : The ID of the dataset. Your trace data is stored in a dataset named
Spans .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be
_Trace .
LOCATION : The location of the observability buckets.
PROJECT_ID : The identifier of the project..
Execute the
gcloud beta observability buckets datasets links create
command:
Linux, macOS, or Cloud Shell
gcloud beta observability buckets datasets links create \
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID /links/ LINK_ID \
--dataset = DATASET_ID \
--bucket = BUCKET_ID \
--location = LOCATION \
--project = PROJECT_ID
Windows (PowerShell)
gcloud beta observability buckets datasets links create `
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID /links/ LINK_ID `
--dataset = DATASET_ID `
--bucket = BUCKET_ID `
--location = LOCATION `
--project = PROJECT_ID
Windows (cmd.exe)
gcloud beta observability buckets datasets links create ^
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID /links/ LINK_ID ^
--dataset = DATASET_ID ^
--bucket = BUCKET_ID ^
--location = LOCATION ^
--project = PROJECT_ID
The create command initiates a long-running operation. The following is
an example of a response when the command is successful:
Create request issued for: [mydataset]
Waiting for operation [projects/my-project/locations/us/operations/operation-1775164903749-64e80c9817833-9ff804b6-c3e9cbe7] to complete...done.
Created link [mydataset].
REST
To create a link to a BigQuery dataset, send a request to the
projects.locations.buckets.datasets.links.create
endpoint.
You must specify the parent parameter, which has the following form:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /datasets/ DATASET_ID
The fields in the previous expression have the following meaning:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the observability bucket .
BUCKET_ID : The ID of the observability bucket. For example, this ID might be _Trace .
DATASET_ID : The ID of the dataset being queried. For example, this ID
might be Spans .
This command requires a query parameter and a request body:
The query parameter, linkId , must be specified and set to the name of the
BigQuery dataset. For example, linkId="my_link" . The
BigQuery dataset name must be unique for your Google Cloud project,
and must be limited to 100 characters and can include only letters,
digits, and underscores.
The request body is a Link object. The value of the
name field has the following format:
projects/ PROJECT_ID /locations/ LOCATION /buckets/ BUCKET_ID /dataset/ DATASET_ID /links/ LINK_ID
The value you provide for the name field must match the
linked BigQuery dataset referenced by the query parameter.
The LINK_ID field is the name of the BigQuery dataset.
The response is an Operation object.
This object contains information about the progress of the method. When the
method completes, the Operation object contains status data.
For a complete list of Observability API endpoints,
see the Observability API reference documentation .
What's next
To learn more about using the Trace Explorer page, see
Find and explore traces .
To learn how to analyze your trace spans with SQL, see
Query and analyze traces .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
