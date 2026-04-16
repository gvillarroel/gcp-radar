---
title: "Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset
  title: "Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
Analyze trace data with BigQuery
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
This document describes how to create a linked BigQuery dataset
for your trace data, and how to query that dataset. A linked dataset lets you
create and run queries that join your observability data with other business
data. For example, you can query a linked dataset
from BigQuery Studio and from Looker Studio. You can also run
your Observability Analytics queries on the BigQuery backend.
To get started with Observability Analytics, see
Query and analyze traces .
When you need a linked dataset
You don't need a linked BigQuery dataset when you
want to query your trace data, or query your trace and log data.
For those scenarios, you can use the Observability Analytics page. For information
about querying log data, see
Query and analyze logs with Observability Analytics .
You do need a linked BigQuery dataset when you
want to do any of the following:
Join trace data with other BigQuery datasets.
Query trace data from another service like the
BigQuery Studio page or Looker Studio.
Run queries from the Observability Analytics page on the BigQuery engine .
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
Create a linked BigQuery dataset
This section describes which APIs must be enabled, the roles required to
create a linked dataset, and how to create a linked dataset.
Prerequisites
Complete the steps in the Before you begin section.
To get the permissions that
you need to create a link on an observability dataset,
ask your administrator to grant you the
following IAM roles on your project:
Observability Editor ( roles/observability.editor )
BigQuery User ( roles/bigquery.user )
Logs Viewer ( roles/logging.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a link on an observability dataset
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
Query trace data from BigQuery Studio
This section describes how query to your trace data from the
BigQuery Studio page.
To learn about the costs associated with using BigQuery, see
BigQuery pricing .
Prerequisites
Complete the steps in the Before you begin section.
To get the permissions that
you need to query a linked dataset from BigQuery,
ask your administrator to grant you the
BigQuery Data Viewer ( roles/bigquery.dataViewer )
IAM role on your project or linked dataset.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Verify that the linked BigQuery dataset
for the observability bucket named _Trace exists. If the linked dataset
doesn't exist, then create it.
Use BigQuery Studio
To open BigQuery from the Observability Analytics page
and then query your trace data, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enter or load a query. For more information, see
Query and analyze traces .
In the toolbar, expand the menu labeled Run query or
Run on BigQuery , and select Open in BigQuery .
The BigQuery Studio page opens. On this page, the FROM statement
specifies the linked dataset by using the BigQuery
Table path syntax . You can perform any supported actions
on the query, such as editing it.
If the Open in BigQuery option is disabled, then either a linked dataset
doesn't exist or you don't have the necessary permissions to open and
view the query in BigQuery.
On the BigQuery Studio page, click Run query .
Run queries on BigQuery engine
By default, the Observability Analytics page runs the queries that you write on the
default query engine. The queries that you run compete with all other queries
for slots. Therefore, it is possible that the execution of a query is
delayed due to slots not being available. The default query engine can only
query observability views, views on log buckets, and analytics views.
When you create a linked dataset, the Observability Analytics page lets you choose
between the default query engine and the BigQuery engine. If
you have reserved BigQuery slots and if you
choose the option to run the query on the BigQuery engine, then
your reserved slots are used.
Queries that are run on the BigQuery engine can
query observability views, views on log buckets, and
analytics views. These queries can also join your observability data with
a BigQuery table.
There are two primary use cases for running queries on
the BigQuery engine:
You create SQL-based alerting policies. The queries for these policies must
be run the BigQuery engine.
Note: You can't configure a SQL-based alerting policy to query a
view on an observability dataset.
You want to save a chart to a dashboard where the chart displays the result
of a join between observability data and other business data.
The FROM clause must specify either a view on an observability dataset or
a view on a log bucket, and there must also be a linked dataset for the data
being queried. To join your observability data with other business data,
add a JOIN statement that specifies a BigQuery table.
You must have the required IAM permissions to query the
BigQuery table.
To learn about the costs associated with using BigQuery, see
BigQuery pricing .
Prerequisites
Complete the steps in the Before you begin section.
To get the permissions that
you need to run queries from Observability Analytics using
BigQuery slots,
ask your administrator to grant you the
following IAM roles:
Observability View Accessor ( roles/observability.viewAccessor )
on the observability views that you want to query. This role supports IAM conditions, which let you restrict the grant to a specific view. If you don't attach a condition to the role grant, then the principal can access all observability views.
Logs Viewer ( roles/logging.viewer )
on your project
BigQuery User ( roles/bigquery.user )
on your project
BigQuery Job User ( roles/bigquery.jobUser )
on your project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Verify that the linked BigQuery dataset
for the observability bucket named _Trace exists. If the linked dataset
doesn't exist, then create it.
If you plan to configure the Observability Analytics page to run queries on your
BigQuery slots and if you are using
projects with Virtual Private Cloud (VPC) Service Controls,
then verify you are using the Enterprise Edition of BigQuery.
For more information, see
Understand BigQuery editions .
Use BigQuery engine
To run a query on the BigQuery engine when using the
Observability Analytics page, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enter or load a query. For more information, see
Query and analyze traces .
Go to the toolbar and verify that a button labeled Run on BigQuery
is displayed.
If the toolbar displays Run Query , then
click settings Settings and select BigQuery .
A disabled Run on BigQuery button indicates that there isn't
a linked dataset. To resolve this failure,
create the linked BigQuery dataset .
Click Run on BigQuery .
What's next
Monitor your SQL query results with an alerting policy .
Save and share a SQL query .
Chart SQL query results .
Sample SQL queries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
