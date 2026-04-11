---
title: "Declare a data source \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/declare-source
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/declare-source
  title: "Declare a data source \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Declare a data source
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to declare BigQuery data sources with
Dataform core .
You can declare any BigQuery table type
as a data source in Dataform. Declaring BigQuery data sources
that are external to Dataform lets you treat those data sources as
Dataform objects.
Declaring data sources is optional , but can be useful when you want to do the following:
Reference or resolve declared sources in the same way as any other table in Dataform.
View declared sources in the visualized Dataform graph.
Use Dataform to manage the table-level and column-level descriptions of externally created tables.
Trigger workflow invocations that include all the dependents of an external data source.
You can declare data sources using JavaScript or SQLX files. In a JavaScript file, you can declare multiple data sources per file. In a SQLX file, you can declare one data source per file.
Before you begin
Before you declare a data source,
create and initialize a development workspace in your repository .
Required roles
To get the permissions that
you need to declare a data source,
ask your administrator to grant you the
Dataform Editor ( roles/dataform.editor )
IAM role on workspaces.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a JavaScript file for multiple data source declarations
Store JavaScript files for data source declarations in the definitions/ directory.
To create a new JavaScript file in the definitions/ directory, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select a repository.
Select a development workspace.
In the Files pane, next to definitions/ , click the More menu.
Click Create file .
In the Create new file pane, do the following:
In the Add a file path field, after definitions/ , enter the name
of the file followed by .js . For example,
definitions/declarations.js .
Filenames can only include numbers, letters, hyphens, and underscores.
Click Create file .
Add a declaration to a JavaScript file
You can declare multiple data sources per JavaScript file. To add a new declaration, follow these steps:
In your development workspace, in the Files pane, click your JavaScript file
for data source declarations.
In the file, for each data source, add the following code snippet:
declare ({
database : " DATABASE_PROJECT_ID " ,
schema : " BIGQUERY_SCHEMA " ,
name : " RELATION_NAME " ,
});
Replace the following:
DATABASE_PROJECT_ID : the project ID of the project which contains
the data source.
BIGQUERY_SCHEMA : the BigQuery dataset in which the
data source exists.
RELATION_NAME : the name of the table or view that you want to use as the
data source. You can later use that name to reference the data source
in Dataform.
Create a SQLX file for data source declaration
Store SQLX files for data source declarations in the definitions/ directory.
To create a new SQLX file in the definitions/ directory, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select a repository.
Select a development workspace.
In the Files pane, next to definitions/ , click the More menu.
Click Create file .
In the Create new file pane, do the following:
In the Add a file path field, after definitions/ , enter the name
of the file followed by .sqlx . For example,
definitions/dataset-declaration.sqlx .
Filenames can only include numbers, letters, hyphens, and underscores.
Click Create file .
Declare a data source
You can declare one data source per a SQLX declaration file. To declare a data
source in the configuration block of an SQLX file, follow these steps:
In your development workspace, in the Files pane, click your SQLX file
for data source declaration.
In the file, enter the following code snippet:
config {
type: "declaration",
database: " DATABASE ",
schema: " SCHEMA ",
name: " NAME ",
}
Replace the following:
DATABASE : the project ID of the project which contains
the data source.
SCHEMA : the BigQuery dataset in which the
data source exists.
NAME : the name of the table or view that you want to use as the
data source. You can later use that name to reference the data source
in Dataform.
Optional: Click Format .
The following code sample shows a sample declaration of the shakespeare
table in the samples dataset of the bigquery-public-data project as
a data source:
config {
type: "declaration",
database: "bigquery-public-data",
schema: "samples",
name: "shakespeare",
}
What's next
To learn how to declare a data source with JavaScript, see
Create workflows exclusively with JavaScript .
To learn how to define a table, see
Create tables .
To learn how to configure table partitions and clusters, see
Create table partitions and clusters .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
