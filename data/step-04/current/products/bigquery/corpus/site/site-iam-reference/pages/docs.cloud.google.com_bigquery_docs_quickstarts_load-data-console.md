---
title: "Load and query data \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/quickstarts/load-data-console
  title: "Load and query data \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Load and query data
Get started with BigQuery by creating a dataset, loading data into a
table, and querying the table.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
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
Enable the BigQuery API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
For new projects, the BigQuery API is
automatically enabled.
Optional:
Enable
billing for the project. If you don't want to enable billing or provide
a credit card, the steps in this document still work. BigQuery
provides you a sandbox to perform the steps. For more information, see
Enable the BigQuery sandbox .
Note: If your project has a billing account and you want to use the
BigQuery sandbox, then
disable billing for your project .
Required roles
To get the permissions that
you need to create a dataset, create a table, load data, and query data,
ask your administrator to grant you the
following IAM roles on the project:
Run load jobs and query jobs:
BigQuery Job User ( roles/bigquery.jobUser )
Create a dataset, create a table, load data into a table, and query a table:
BigQuery Data Editor ( roles/bigquery.dataEditor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a BigQuery dataset
Use the Google Cloud console to create a dataset to store the data. You
create your dataset in the US multi-region location. For information on
BigQuery regions and multi-regions, see
Locations .
In the Google Cloud console, open the BigQuery
page.
Go to BigQuery
In the left pane, click explore
Explorer .
In the
Explorer
pane, click your project name.
Click more_vert
View actions .
Select Create dataset .
On the Create dataset page, do the following:
For Dataset ID , enter babynames .
For Location type , select Multi-region , and then choose
US (multiple regions in United States) . The public datasets are
stored in the us multi-region location. For simplicity,
store your dataset in the same location.
Leave the remaining default settings as they are, and click
Create dataset .
Download the file that contains the source data
The file that you're downloading contains approximately 7 MB of data about
popular baby names. It's provided by the US Social Security Administration.
For more information about the data, see the Social Security Administration's
Background information for popular names .
Download the US Social Security Administration's data by opening the
following URL in a new browser tab:
https://www.ssa.gov/OACT/babynames/names.zip
Extract the file.
For more information about the dataset schema, see the zip file's
NationalReadMe.pdf file.
To see what the data looks like, open the yob2024.txt file. This file
contains comma-separated values for name, assigned sex at birth, and number
of children with that name. The file has no header row.
Note the location of the yob2024.txt file so that you can find it later.
Load data into a table
Next, load the data into a new table.
In the left pane, click explore
Explorer .
In the
Explorer
pane, expand your project name.
Click Datasets and then next to the babynames dataset, click
more_vert View
actions and select Open .
Click
add_box Create
table .
Unless otherwise indicated, use the default values for all settings.
On the Create table page, do the following:
In the Source section, for
Create table
from , choose Upload from the
list.
In the Select file field, click Browse .
Navigate to and open your local yob2024.txt file, and click
Open .
From the
File
format list, choose CSV .
In the Destination section, in the
Table
field, enter names_2024 .
In the Schema section, click the
Edit
as text toggle, and paste the following
schema definition into the text field:
name:string,assigned_sex_at_birth:string,count:integer
Click
Create
table .
Wait for BigQuery to create the table and load the data.
Preview table data
To preview the table data, follow these steps:
In the left pane, click explore
Explorer .
In the
Explorer
pane, expand your project and click Datasets .
Click the babynames dataset, and then
select the names_2024 table.
Click the
Preview tab. BigQuery displays the first
few rows of the table.
The Preview tab is not available for all table types. For example, the
Preview tab is not displayed for external tables or views.
Query table data
Next, query the table.
Next to the names_2024 tab, click the add_box
SQL query option. A new editor tab opens.
In the query editor, paste the following query. This query retrieves the
top five names for babies born in the US that were assigned male at birth in
2024.
SELECT
name ,
count
FROM
`babynames.names_2024`
WHERE
assigned_sex_at_birth = 'M'
ORDER BY
count DESC
LIMIT
5 ;
Click Run .
The results are displayed in the Query results section.
You have successfully queried a table in a public dataset and then loaded your
sample data into BigQuery using the Google Cloud console.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, open the BigQuery page.
Go to BigQuery
In the left pane, click explore
Explorer .
In the Explorer pane, click Datasets and then click the babynames dataset
that you created.
Expand the more_vert
View actions option and click Delete .
In the Delete dataset dialog, confirm the delete command: type the word
delete and then click Delete .
What's next
To learn more about loading data into BigQuery, see
Introduction to loading data .
To learn more about querying data, see
Overview of BigQuery analytics .
To learn how to load a JSON file with nested and repeated data, see
Loading nested and repeated JSON data .
To learn more about accessing BigQuery programmatically, see
the REST API reference or the
BigQuery client libraries page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
