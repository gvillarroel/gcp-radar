---
title: "Test data quality \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/assertions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/assertions
  title: "Test data quality \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Test data quality
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to use
Dataform core to create
Dataform table assertions and test your workflow code.
About assertions
An assertion is a data quality test query that finds rows that violate one or
more conditions specified in the query. If the query returns any rows,
the assertion
fails. Dataform runs assertions every time it updates your workflow
and it alerts you if any assertions fail.
Dataform automatically creates views in BigQuery that contain
the results of compiled assertion queries. As
configured in your workflow settings file ,
Dataform creates these views in an assertions schema where you can
inspect assertion results.
For example, for the default dataform_assertions schema, Dataform
creates a view in BigQuery in the following format:
dataform_assertions.assertion_name .
You can create assertions for all Dataform table types: tables,
incremental tables, views, and materialized views.
You can create assertions in the following ways:
Add built-in assertions to the config block of a table .
You can add built-in assertions to the config block of a table and
specify their conditions.
Add manual assertions in a separate SQLX file .
You manually write custom assertions in a separate SQLX file for advanced
use cases or for datasets not created by Dataform.
Before you begin
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select or create a repository .
Select or create a development workspace .
Create a table .
Required roles
To get the permissions that
you need to create assertions,
ask your administrator to grant you the
Dataform Editor ( roles/dataform.editor )
IAM role on workspaces.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create built-in assertions
You can add built-in Dataform assertions to the config block of a
table. Dataform runs these assertions after table creation. After
Dataform creates the table, you can see if the assertion passed in the
Workflow execution logs tab of your workspace.
You can create the following assertions in the config block of a table:
nonNull
This condition asserts that the specified columns are not null across all
table rows. This condition is used for columns that can never be null.
The following code sample shows a nonNull assertion in the config block
of a table:
config {
type: "table",
assertions: {
nonNull: ["user_id", "customer_id", "email"]
}
}
SELECT ...
rowConditions
This condition asserts that all table rows follow the custom logic you
define. Each row condition is a custom SQL expression, and each table row is
evaluated against each row condition. The assertion fails if any table row
results in false .
The following code sample shows a custom rowConditions assertion in the
config block of an incremental table:
config {
type: "incremental",
assertions: {
rowConditions: [
'signup_date is null or signup_date > "2022-08-01"',
'email like "%@%.%"'
]
}
}
SELECT ...
uniqueKey
This condition asserts that, in a specified column, no table rows have the
same value.
The following code sample shows a uniqueKey assertion in the config
block of a view:
config {
type: "view",
assertions: {
uniqueKey: ["user_id"]
}
}
SELECT ...
uniqueKeys
This condition asserts that, in the specified columns, no table rows have
the same value. The assertion fails if there is more than one row in the
table with the same values for all the specified columns.
The following code sample shows a uniqueKeys assertion in the config
block of a table:
config {
type: "table",
assertions: {
uniqueKeys: [["user_id"], ["signup_date", "customer_id"]]
}
}
SELECT ...
Add assertions to the config block
To add assertions to the config block of a table, follow these steps:
In your development workspace, in the Files pane, select a table
definition SQLX file.
In the config block of the table file, enter assertions: {} .
Inside assertions: {} , add your assertions.
Optional: Click Format .
The following code sample shows the conditions added in the config block:
config {
type: "table",
assertions: {
uniqueKey: ["user_id"],
nonNull: ["user_id", "customer_id"],
rowConditions: [
'signup_date is null or signup_date > "2019-01-01"',
'email like "%@%.%"'
]
}
}
SELECT ...
Create manual assertions with SQLX
Manual assertions are SQL queries that you write in a dedicated SQLX file. A
manual assertion SQL query must return zero rows. If the query returns rows
when it's run, the assertion fails.
To add manual assertions in a new SQLX file, follow these steps:
In the Files pane, next to definitions/ , click the More menu.
Click Create file .
In the Add a file path field, enter the name of the file followed by
.sqlx . For example, definitions/custom_assertion.sqlx .
Filenames can only include numbers, letters, hyphens, and underscores.
Click Create file .
In the Files pane, click the new file.
In the file, enter:
config {
type: "assertion"
}
Below the config block, write your SQL query or multiple queries.
Optional: Click Format .
The following code sample shows a manual assertion in a SQLX file that asserts
that fields A , B , and c are never NULL in sometable :
config { type: "assertion" }
SELECT
*
FROM
${ref("sometable")}
WHERE
a IS NULL
OR b IS NULL
OR c IS NULL
What's next
To learn more about assertion types, see
Dataform API .
To learn how to define assertions with JavaScript, see
Create workflows exclusively with JavaScript .
To learn how to manually run workflows, see
Manually trigger runs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
