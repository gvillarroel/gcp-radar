---
title: "Create operations \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/custom-sql
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/custom-sql
  title: "Create operations \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Create operations
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to define custom SQL operations in a
dedicated SQLX file.
Dataform can run custom SQL operations that don't fit into the
Dataform model of publishing a table or writing an assertion. You can
define custom SQL commands for Dataform to run in BigQuery.
Before you begin
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select or create a repository .
Select or create a development workspace .
Required roles
To get the permissions that
you need to define a custom SQL operation,
ask your administrator to grant you the
Dataform Editor ( roles/dataform.editor )
IAM role on workspaces.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a file for custom operation definition
Store custom operation definition SQLX files in the definitions/ directory.
To create a new SQLX file in the definitions/ directory, follow these steps:
Go to your development workspace.
In the Files pane, next to definitions/ , click the
More menu.
Click Create file .
In the Add a file path field, enter the name of the file followed by
.sqlx after definitions/ . For example, definitions/sample-operation.sqlx .
Filenames can only include numbers, letters, hyphens, and underscores.
Click Create file .
Define a custom SQL operation
You can define a custom SQL operation in a SQLX file of type: operations .
You can write any BigQuery SQL statement in an operations file.
Dataform runs your custom SQL operations in BigQuery
without modification.
You can define multiple custom SQL operations in one SQLX file.
BigQuery runs all the operations in a file in the same context, and
creates the run SQL by joining all operations with a semicolon ( ; ).
To define multiple custom SQL operations when using the open source
Dataform framework
with a data warehouse other than BigQuery,
separate operations with --- .
To define a custom SQL operation in a dedicated SQLX file, follow these steps:
In your development workspace, select the SQLX file for custom operation
definition.
In the file, enter the following code snippet:
config { type: "operations" }
Outside the config block, write your SQL operation.
Optional: Click Format .
The following code sample shows multiple custom SQL operations defined in an
operations file:
config { type: "operations" }
DELETE FROM dataset.table WHERE country = 'GB';
DELETE FROM dataset.table WHERE country = 'FR';
The following code sample shows a custom SQL operation that manually
creates a view:
config { type: "operations" }
CREATE OR REPLACE VIEW dataset.table AS (SELECT 1 AS TEST)
Create a referenceable output table
You can manually create a table in a custom SQL operation that you can
reference in other scripts. To create a table available to other scripts, you
need to declare that the operation has an output.
To make the name of the output table match the name of the operations file,
you can use the self function in the CREATE operation.
To create a table in a custom operation and make it available to other scripts,
follow these steps:
In your development workspace, select the SQLX file for custom
operation definition.
In the SQLX file, enter the following code snippet:
config {
type : "operations" ,
hasOutput : true
}
Important: When hasOutput is set to true , this
action must create a table that has the same name as the action. Use the self() context function to ensure that the name is the same.
To match the name of the output table with the name of the file,
write a SQL CREATE operation with the self function in the following format:
CREATE OR REPLACE TABLE ${self()} AS ( CUSTOM_SQL_QUERY )
Replace CUSTOM_SQL_QUERY with your table definition SQL SELECT statement.
Optional: Click Format .
Reference a custom SQL operation output table
To reference a custom SQL operation output table in a SQLX definition of a
different table, enter the output table filename in the ref function.
The following code sample shows a custom SQL operation in a
custom_SQL_operation_table.sqlx file that creates a referenceable table
called custom_SQL_operation_table :
// filename is custom_SQL_operation_table.sqlx
config {
type: "operations",
hasOutput: true
}
CREATE OR REPLACE VIEW ${self()} AS (SELECT 1 AS TEST)
The following code sample shows referencing the
custom\_SQL\_operation\_table table in a table definition SQLX file:
config { type: "table" }
SELECT * FROM ${ref("custom_SQL_operation_table")}
Create an empty table
You might want to create an empty table so that a different service can
populate it with data. You can create an empty table in a custom SQL operation
with the CREATE TABLE function. To be able to reference the empty table in
other workflow action definitions, for example, tables and views, you can
add the hasOutput:true property to the config block of the empty table operation.
To create an empty table, use the CREATE TABLE function in a
type: "operations" file in the following format:
config {
type: "operations",
hasOutput: true // optional, lets you reference the empty table
}
CREATE TABLE ${self()} (
)
The following code sample shows a custom SQL operation that creates an empty
table with an integer and a string column. The created empty table cannot be
referenced by other workflow actions:
config {
type: "operations"
}
CREATE TABLE ${self()} (
x INT64,
y STRING
)
What's next
To learn how to create custom SQL operations with JavaScript, see
Create workflows exclusively with JavaScript .
To learn how to trigger runs manually, see
Manually trigger runs .
To learn how to use BigQuery DML, see
Using data manipulation language (DML) .
To learn more about the self function and other Dataform
built-in functions, see Dataform API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
