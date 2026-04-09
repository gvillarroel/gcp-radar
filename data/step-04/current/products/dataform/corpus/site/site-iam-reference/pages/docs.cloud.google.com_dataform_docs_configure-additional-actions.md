---
title: "Configure additional actions \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/configure-additional-actions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/configure-additional-actions
  title: "Configure additional actions \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Configure additional actions
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to do the following:
Define a SQL statement to be run before table creation .
Define a SQL statement to be run after table creation .
Disable table creation .
Add execution tags .
Before you begin
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select or create a repository .
Select or create a development workspace .
Create a table .
Define a SQLX file of any of the following types:
type: table
type: view
type: incremental
type: assertion
type: operations
Required roles
To get the permissions that
you need to complete the tasks in this document,
ask your administrator to grant you the
Dataform Editor ( roles/dataform.editor )
IAM role on workspaces.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Define a SQL statement to be run before table creation
You can configure Dataform to run one or more SQL statements
before creating a selected table in BigQuery. To run a SQL
statement before Dataform creates a selected table, add your
statement to the pre_operations block in the table definition SQLX file.
To create a custom SQL statement that's run before Dataform creates
a specific table, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a SQLX table definition file.
Outside the config block, enter pre_operations { ... } .
Inside pre_operations { ... } , add your SQL statement.
Optional: To add multiple statements, separate them with --- .
Optional: Click Format .
The following code sample shows a pre_operations statement that creates a
temporary function that can be used in the select statement:
pre_operations {
CREATE TEMP FUNCTION AddFourAndDivide(x INT64, y INT64)
RETURNS FLOAT64
AS ((x + 4) / y);
}
Define a SQL statement to be run after table creation
You can configure Dataform to run one or more SQL statements
after creating a selected table in BigQuery. To run a SQL statement
after Dataform creates a selected table, add your statement to
the post_operations block in the table definition SQLX file. You can add
multiple SQL statements to the post_operations block.
To create a custom SQL statement that's run after Dataform creates
a specific table, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a SQLX table definition file.
Outside the config block, enter post_operations { ... } .
Inside post_operations { ... } , add your SQL statement.
Optional: Click Format .
The following code sample shows post_operations statements that grant groups
access to the created table:
post_operations {
GRANT `roles/bigquery.dataViewer`
ON
TABLE ${self()}
TO "group:allusers@example.com", "user:otheruser@example.com"
}
Disable table creation
To stop Dataform from creating a selected table in
BigQuery, you can disable the table in its SQLX table definition file.
Dataform keeps a disabled table in the dependency graph, but it does
not compile and create it. This can be useful, for example, if a table fails and
you don't want your whole workflow to fail while you fix the issue.
To disable a table, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select a SQLX table definition file.
In the config block of the file, enter disabled: true .
Optional: Click Format .
The following code sample shows a disabled table:
config {
type: "table",
disabled: true
}
select * from ${ref("source_data")}
Add execution tags
This section shows you how to add tags to
Dataform core SQLX files to
categorize your workflow.
To organize the components of your workflow into collections, you can add
custom tags to SQLX files of the following types:
table
view
incremental
assertion
operations
During a workflow run, you can
run only files with a selected tag .
With Cloud Composer or
Workflows together with Cloud Scheduler ,
you can create a schedule that runs a Dataform workflow with
a selected tag at a specific interval.
Add a tag
You can add multiple tags to a SQLX file.
To add a tag to a SQLX file, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select a SQLX file.
In the config block, add a tag in the following format:
tags: [" CUSTOM_TAG "]
Replace CUSTOM_TAG with your tag.
Optional: To add multiple tags, separate them with a comma ( , ).
Optional: Click Format .
The following code sample shows the user_counts view with the daily and
hourly tags:
config {
type: "view",
name: "user_counts",
tags: ["daily", "hourly"]
}
What's next
To learn how to configure Dataform settings in
workflow_settings.yaml , see
Configure Dataform workflow settings .
To learn how to test table data with assertions, see
Test data quality .
To learn how to reuse code with includes, see
Reuse code across a single repository with includes .
To learn to manually trigger executions, see
Manually trigger runs .
To learn how to add BigQuery policy tags in Dataform, see
Control column access .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
