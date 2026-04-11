---
title: "Create tables \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/create-tables
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/create-tables
  title: "Create tables \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Create tables
Stay organized with collections
Save and categorize content based on your preferences.
In Dataform, a table is one of the types of objects that make up a
workflow . You can create tables that
reference data from the data sources declared
for your workflow or from other tables in your workflow. Dataform
compiles your table definitions into SQL in real time. When you trigger
execution, Dataform runs the SQL code and creates your
defined tables in BigQuery.
You can create the following table types in a type: "table" SQLX file:
table : a regular table.
incremental : an incremental table.
view : a table view. For more information,
see Introduction to views .
materialized : a materialized table view. For more information, see
Introduction to materialized views .
You can also define table
partitions and clusters .
To keep a record of the purpose of a table or its relation to other tables in
your workflow, you can add documentation
to the table or its selected columns.
To test the data in a table against specific conditions, you can create data
quality test queries called assertions .
Dataform runs assertions every time it updates your workflow and
alerts you if any assertions fail.
To override the default schema, database, and name of a selected table, you can
override table settings .
To disable table creation or run a SQL statement before or after
table creation, you can
configure additional actions .
To organize your tables in BigQuery after you run them, you
can
add BigQuery labels .
To learn more, see
Introduction to labels .
To restrict data access at the table column level, you can add BigQuery
policy tags. To learn more, see
Introduction to column-level access control .
In addition to defining tables in a type: "table" SQLX file, you can
create empty tables
by defining a custom SQL query in a type: "operations" SQLX file.
You might want to create an empty table so that a different service
can populate it with data.
Before you begin
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Create and initialize a development workspace in your repository .
Optional: Declare a data source .
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
Create a table
This section shows you how to create tables with
Dataform core in Dataform.
About table definitions
To define a table, you define the table type and write a SELECT statement in
a type: "table" SQLX file. Dataform then compiles your
Dataform core code into SQL, runs the SQL code, and creates your
defined tables in BigQuery.
In a Dataform core SELECT statement, you define the table structure
and reference other objects of your workflow.
In addition to defining tables in a type: "table" SQLX file, you can create
empty tables by defining a custom SQL query in a type: "operations" SQLX file.
For more information, see
Create an empty table .
Reference dependencies with ref
To reference a workflow action in a SELECT statement and automatically
add it as a dependency, use the ref function. Dataform runs
dependencies before tables that depend on them to verify the correct pipeline ordering.
The ref function is a built-in Dataform core function that is
critical to dependency management in Dataform. The ref function lets
you reference and automatically depend on the following objects defined in your
Dataform workflow, instead of hard coding the schema and table names:
Tables of all supported table types .
Data source declarations .
Custom SQL operations with the hasOutput
property set to true .
Dataform uses the ref function to build a dependency tree of all the
tables to be created or updated.
After compiling, Dataform adds boilerplate statements to the SQL
statement, such as CREATE , REPLACE , INSERT , or MERGE .
The following code sample shows a table definition with the use of the
ref function:
config { type: "table" }
SELECT
order_date AS date,
order_id AS order_id,
order_status AS order_status,
SUM(item_count) AS item_count,
SUM(amount) AS revenue
FROM ${ref("store_clean")}
GROUP BY 1, 2
In the ref function, you provide the name of the table or data source
declaration that you want to depend on. This is typically the filename of the
SQLX file in which that table or data source declaration is defined.
If a table name is overridden, use the overridden name in the ref function.
For example, reference a table with config { name: "overridden_name" }
as ref("overridden_name") . For more information, see
Override table settings and
Reference a table with an overridden table name .
When you have multiple tables of the same name in different schemas, you can
reference a specific table by providing two arguments to the ref function:
schema name and table name.
The following code sample shows the ref function with two arguments to
specify a table within a specific schema:
config { type: "table" }
SELECT * FROM ${ref("schema", "store_clean")}
You can also add table dependencies manually to the config block for tables,
assertions, data source declarations, or custom SQL operations that are not
referenced in a ref function in the SELECT statement. Dataform
runs these dependencies before dependent tables.
The following code sample shows a table dependency in the config block:
config { dependencies: [ "unreferenced_table" ] }
SELECT * FROM ...
For more information on dependency management in your workflow, see
Set dependencies .
Reference other tables with resolve
The resolve function
lets you reference a table or data source declaration in a SELECT statement
like the ref function, but it doesn't add the reference as a dependency. This
means that the object referenced using the resolve function does not affect
the execution of the table that uses the resolve function.
For more information on built-in Dataform core functions, see
Dataform core reference .
Create a SQLX file for a table definition
Store table definition SQLX files in the definitions/ directory. To create a
new SQLX file in the definitions/ directory, follow these steps:
In Google Cloud console, go to the Dataform page.
Go to Dataform
To open a repository, click the repository name.
To open a development workspace, click the workspace name.
In the Files pane, next to definitions/ , click More .
Click Create file .
In the Add a file path field, enter the name of the file followed by
.sqlx after definitions/ . For example, definitions/my-table.sqlx .
Filenames can only include numbers, letters, hyphens, and underscores.
Click Create file .
Define the table type
To create a new table type definition, follow these steps:
In your development workspace, in the Files pane, expand the
definitions/ directory.
Select the table definition SQLX file that you want to edit.
In the file, enter the following code snippet:
config { type: " TABLE_TYPE " }
Replace TABLE_TYPE with one of the following table types:
table
incremental
view
Optional: To define a materialized view, enter the materialized property
under type: "view" in the following format:
config {
type: "view",
materialized: true
}
For more information, see
ITableConfig .
Optional: Click Format .
Define table structure and dependencies
To write a table definition SELECT statement and define the table structure
and dependencies, follow these steps:
In your development workspace, in the Files pane, expand
the definitions/ directory.
Select the table definition SQLX file that you want to edit.
Below the config block, write a SELECT statement.
Optional: Click Format .
The following code sample shows a table definition with a SELECT statement
and the ref function:
config { type: "table" }
SELECT
customers.id AS id,
customers.first_name AS first_name,
customers.last_name AS last_name,
customers.email AS email,
customers.country AS country,
COUNT(orders.id) AS order_count,
SUM(orders.amount) AS total_spent
FROM
dataform-samples.dataform_sample.crm_customers AS customers
LEFT JOIN ${ref('order_stats')} orders
ON customers.id = orders.customer_id
WHERE
customers.id IS NOT NULL
AND customers.first_name <> 'Internal account'
AND country IN ('UK', 'US', 'FR', 'ES', 'NG', 'JP')
GROUP BY 1, 2, 3, 4, 5
Add manual table dependencies
To add table dependencies that are not referenced in the SELECT statement
but that need to be run before the current table, follow these steps:
In your development workspace, in the Files pane, expand
the definitions/ directory.
Select the table definition SQLX file that you want to edit.
In the config block of the table, enter the following code snippet:
dependencies: [ " DEPENDENCY_TABLE ", ]
Replace DEPENDENCY_TABLE with the filename of the table you want
to add as a dependency. You can enter multiple filenames.
Optional: Click Format .
The following code sample shows two tables added as manual table dependencies
to the config block of a table definition file:
config { dependencies: [ "some_table", "some_other_table" ] }
Override table settings
You can override the default schema, database, and name of a selected table.
By default, a table follows the schema and database configuration you set in
workflow_settings.yaml . The name of a table is the same as the name of the table
definition SQLX file.
To override the schema and name of a selected table, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a SQLX table definition file.
In the config block, enter the following code snippet:
{
schema: " OVERRIDDEN_SCHEMA ",
database: " OVERRIDDEN_DATABASE ",
name: " OVERRIDDEN_NAME "
}
Replace the following:
OVERRIDDEN_SCHEMA : the BigQuery
dataset in which you want to create the table.
OVERRIDDEN_DATABASE : the ID of the
BigQuery project in which you want to create the table.
OVERRIDDEN_NAME : the name for the table,
which is different from the SQLX table definition filename.
Optional: Click Format .
For more information, see
Reference a table with an overridden table name .
Create BigLake tables for Apache Iceberg in BigQuery
Use Dataform to create BigQuery tables in
Iceberg table format. These tables are known as
BigLake Iceberg tables in BigQuery . For more information about required roles
and other setup tasks, see the
Before you begin steps for
BigLake Iceberg table in BigQuery workflows.
Create the Iceberg table definition
To create the tables, define the Iceberg configuration in
the bigquery block of a table definition file.
To define the tables, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a table definition SQLX file.
In the config block, add a bigquery block that contains an iceberg
block in the following format:
config {
type : "table" ,
name : "my_table" ,
uniqueKey : [ "uniquekey" ],
bigquery : {
iceberg : {
bucket_name : " BUCKET_NAME "
}
}
}
Replace BUCKET_NAME with the name of the
Cloud Storage bucket where the table data is stored.
Other properties are optional and have default values if not specified. For
more information, see the iceberg properties .
You can provide the values for each table or
set workflow-level defaults
in workflow_settings.yaml . You can override workflow-level defaults by
explicitly setting the properties in the iceberg block.
Create table partitions and clusters
This section shows you how to use
Dataform core to create
table partitions and clusters. BigQuery supports partitioned tables and
table clustering. For more information, see
Introduction to partitioned tables and
Creating and using clustered tables .
Create a table partition
To create a table partition, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a table definition SQLX file.
In the config block, add the bigquery block below the table type
declaration in the following format:
config {
type: "table",
bigquery: {
}
}
In the bigquery block, enter the following code snippet:
partitionBy: " PARTITION_EXPRESSION "
Replace PARTITION_EXPRESSION with an
expression for partitioning the table .
Optional: Click Format .
The following code sample shows partitioning a table by hour in a
table definition SQLX file:
config {
type: "table",
bigquery: {
partitionBy: "DATETIME_TRUNC(<timestamp_column>, HOUR)"
}
}
The following code sample shows partitioning a table by an integer value in a
table definition SQLX file:
config {
type: "table",
bigquery: {
partitionBy: "RANGE_BUCKET(<integer_column>, GENERATE_ARRAY(0, 1000000, 1000))"
}
}
Set a partition filter
To set a partition filter, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a partitioned table definition SQLX file.
In the bigquery block, enter the following code snippet:
requirePartitionFilter : true
Optional: Click Format .
The following code sample shows a partition filter set in the bigquery block
of a partitioned table SQLX file:
config {
type: "table",
bigquery: {
partitionBy: "DATE(ts)",
requirePartitionFilter : true
}
}
SELECT CURRENT_TIMESTAMP() AS ts
For more information on the partition filter in BigQuery, see
Setting the require partition filter attribute on a partitioned table .
Set a retention period for partitions
To control the retention of all partitions in a partitioned table, follow these
steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a partitioned table definition SQLX file.
In the bigquery block, enter the following code snippet:
partitionExpirationDays: NUMBER_OF_DAYS
Replace NUMBER_OF_DAYS with the number of days that you want
to retain the partitions for.
Optional: Click Format .
The following code sample shows a retention period for partitions set to
14 days in the bigquery block of a partitioned table SQLX file:
config {
type: "table",
bigquery: {
partitionBy: "DATE(ts)",
partitionExpirationDays: 14,
}
}
SELECT CURRENT_TIMESTAMP() AS ts
Create a table cluster
To create a table cluster, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open a table definition SQLX file.
In the bigquery block, enter the following code snippet:
clusterBy: [" CLUSTER_COLUMN "]
Replace CLUSTER_COLUMN with the name of the column by which
you want to cluster the table. For more information, see
clustering_column_list .
Optional: Click Format .
The following code sample shows a partitioned table clustered by
name and revenue columns:
config {
type: "table",
bigquery: {
partitionBy: "DATE(ts)",
clusterBy: ["name", "revenue"]
}
}
SELECT CURRENT_TIMESTAMP() as ts, name, revenue
Configure an incremental table
This section shows you how to use
Dataform core to configure an
incremental table.
About incremental tables
Dataform updates tables differently based on the table type. During
each execution of a table or a view, Dataform rebuilds the whole
table or view from scratch.
When you define an incremental table, Dataform builds the incremental
table from scratch only for the first time. During subsequent executions,
Dataform only inserts or merges new rows into the incremental table
according to the conditions that you configure.
Dataform inserts new rows only into columns that already exist in
the incremental table. If you make changes to the incremental table definition
query—for example, by adding a new column—you must decide if you should rebuild
the table from scratch. To rebuild the table, the next time you trigger a table
run, select the Run with full refresh option. For other options, see
Change an incremental table schema without a full refresh .
Here are some common use cases for incremental tables:
Performance optimization
For some kinds of data, such as web logs or analytics data, you might want
to only process new records instead of reprocessing the entire table.
Latency reduction
You can use incremental tables to run workflows quickly but frequently,
reducing the downstream latency of the output tables.
Daily snapshots
You can configure an incremental table to create daily snapshots of the
table data, for example, for longitudinal analysis of user settings stored
in a production database.
Process a subset of rows in an incremental table
To determine a subset of rows for Dataform to process during each
execution, add a conditional WHERE clause to the incremental table SQLX
definition file. In the WHERE clause, you can specify an incremental condition
and a non-incremental condition. Dataform applies the incremental
condition during table execution without a full refresh, and the non-incremental
condition during execution with a full refresh.
To configure an incremental table, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Open an incremental table definition SQLX file.
Enter a WHERE clause in the following format:
config { type: "incremental" }
SELECT_STATEMENT
${when(incremental(), `WHERE INCREMENTAL_CONDITION `, `WHERE NON_INCREMENTAL_CONDITION `) }
Replace the following:
SELECT_STATEMENT : the SELECT statement that
defines your table.
INCREMENTAL_CONDITION : the condition you specify in the WHERE
clause to select rows for Dataform to process during table execution
without a full refresh.
NON_INCREMENTAL_CONDITION : the condition you specify in the
WHERE clause to select rows for Dataform to process during table
execution with a full refresh.
Optional: Click Format .
The following code sample shows an incremental table that incrementally
processes rows of the productiondb.logs table:
config { type: "incremental" }
SELECT timestamp, message FROM ${ref("productiondb", "logs")}
${when(incremental(),
`WHERE date > (SELECT MAX(date) FROM ${self()}) AND country = "UK"`,
`WHERE country = "UK"`)}
The following code sample shows an incremental table that creates a snapshot
of the productiondb.customers table:
config { type: "incremental" }
SELECT CURRENT_DATE() AS snapshot_date, customer_id, name, account_settings FROM ${ref("productiondb", "customers")}
${when(incremental(), `WHERE snapshot_date > (SELECT MAX(snapshot_date) FROM ${self()})`) }
Merge rows in an incremental table
To verify that an incremental table contains only one row corresponding to a
selected combination of columns, set the selected columns as uniqueKey to
merge rows that have the same uniqueKey value. When updating the table,
Dataform merges rows with the same uniqueKey value instead of
appending them.
To configure merging in an incremental table, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select an incremental table definition SQLX file
In the config block, set the selected columns as uniqueKey
in the following format:
uniqueKey: [" COLUMN_NAME "]
Replace COLUMN_NAME with the name of a selected column.
Optional: Click Format .
The following code sample shows an incremental table with the transaction_id
column set as uniqueKey to verify it always contains one row:
config {
type: "incremental",
uniqueKey: ["transaction_id"]
}
SELECT timestamp, action FROM weblogs.user_actions
${ when(incremental(), `WHERE timestamp > (SELECT MAX(timestamp) FROM ${self()})`) }
Filter rows in an incremental table
In an incremental partitioned table, to avoid Dataform scanning the
whole table to find matching rows, set updatePartitionFilter to only consider
a subset of records.
Note: The updatePartitionFilter property is only functional when at least
one column is defined in the uniqueKey property. If you configure
the updatePartitionFilter property without the uniqueKey property,
Dataform uses an insert strategy instead of a merge strategy.
The following code sample shows an incremental partitioned table with merging
configured by the updatePartitionFilter and uniqueKey properties, using two
distinct types of filtering:
Target pruning using the updatePartitionFilter property: limits the
partitions scanned in the target table during a MERGE operation to find rows
that match the uniqueKey .
Source pruning using a WHERE clause: limits which rows are fetched
from the source table during an incremental run. This is achieved using the
${when(incremental(), ...)} function.
config {
type: "incremental",
uniqueKey: ["transaction_id"],
bigquery: {
partitionBy: "DATE(timestamp)",
updatePartitionFilter:
"timestamp >= timestamp_sub(current_timestamp(), interval 24 hour)"
}
}
SELECT timestamp, action FROM weblogs.user_actions
${ when(incremental(), `WHERE timestamp > (SELECT MAX(timestamp) FROM ${self()})`) }
Avoid full table scans when ingesting from a partitioned table
When you create an incremental table that references a partitioned table,
we recommend that you build your table query to avoid full table scans of
the partitioned table during each incremental update.
You can limit the number of partitions that BigQuery scans to update
the incremental table by using a constant expression in your table query. To
turn a value from the partitioned table into a constant expression, use
BigQuery scripting to declare the value as a variable in the
pre_operations block. Then, use the variable as a constant expression in a
WHERE clause in the SELECT query.
With this configuration, Dataform updates the incremental table based
on the most recent partitions of the referenced partitioned table, without
scanning the entire table.
To configure an incremental table that references a partitioned table and avoids
full table scans, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select an incremental table definition SQLX file
In the pre_operations block,
declare a variable with BigQuery scripting .
Filter the SELECT statement that defines the table with a WHERE clause
that references the declared variable.
Optional: Click Format .
The following code sample shows an incremental table in which the referenced
raw_events table is partitioned by event_timestamp :
config {
type: "incremental",
}
pre_operations {
DECLARE event_timestamp_checkpoint DEFAULT (
${when(incremental(),
`SELECT max(event_timestamp) FROM ${self()}`,
`SELECT timestamp("2000-01-01")`)}
)
}
SELECT
*
FROM
${ref("raw_events")}
WHERE event_timestamp > event_timestamp_checkpoint
In the preceding code sample, the event_timestamp_checkpoint variable is
defined in the pre_operations block. The event_timestamp_checkpoint variable
is then used as a constant expression in the WHERE clause.
Rebuild an incremental table from scratch with full refresh
You can force an incremental table to be rebuilt from scratch using either the
command-line interface with the --full-refresh option
or the Run with full refresh option when
triggering a workflow execution .
When you select the full refresh option, in your development workspace or by
using the Dataform CLI, Dataform ignores the
${when(incremental(), ... } parameter during execution and recreates the
table with a CREATE OR REPLACE statement.
Protect an incremental table from full refresh
To protect an incremental table from being rebuilt from scratch and potential
data loss, you can set the incremental table as protected . You might want to
prevent an incremental table from being rebuilt if your data source is temporary.
To mark an incremental table as protected , follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select an incremental table definition SQLX file.
In the config block, enter protected: true .
Optional: Click Format .
The following code sample shows an incremental table marked as protected :
config {
type: "incremental",
protected: true
}
SELECT ...
Change an incremental table schema without a full refresh
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To provide feedback or request support, contact
dataform-preview-support@google.com .
You can modify an incremental table schema in the SELECT query without
a full refresh of the table by using the onSchemaChange configuration
property. This property lets you add new columns to or
remove existing columns from a table while preserving historical data. This
approach helps to prevent data loss and avoids manual updates in
BigQuery.
To use this feature, you must install
Dataform core 3.0.11 or later .
Note: This feature isn't available with the
Dataform CLI .
After you set the onSchemaChange property, Dataform
checks the SELECT query to determine if columns were added or removed.
Dataform then performs the action specified by the
onSchemaChange property's value.
To set the onSchemaChange property, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select an incremental table definition SQLX file.
In the config block, enter the following code snippet:
onSchemaChange: " ON_CHANGE_ACTION "
Replace ON_CHANGE_ACTION with one of the following actions:
IGNORE (default): ignores added columns and shows an error for missing
columns. If onSchemaChange is unset, this is the default behavior when
the schema changes.
FAIL : stops the action if Dataform detects any schema
change, which helps to keep the schema consistent.
EXTEND : adds new columns from the query to the incremental table, and
adds NULL values for previous records. Shows an error if a column is
removed or missing from the original schema in the query. You can use this
setting to add new columns to your incremental tables during runtime.
SYNCHRONIZE : adds new columns from the query to the incremental table,
and adds NULL values for previous records. Removes columns that were in
the original schema but that are now missing from the current query.
Caution: The SYNCHRONIZE action cannot be undone, and you might lose
data when you remove columns with this option. Note: Deleting partitioned and clustered columns isn't supported, as
deleting these columns can have negative consequences. If a
partitioned or clustered column is still deleted, it's handled
with the
ALTER TABLE DROP COLUMN statement .
Dataform doesn't perform checks or validations to
prevent the running of ALTER TABLE DROP COLUMN statements on
partitioned or clustered columns. Therefore, if you drop such columns,
proceed cautiously and be aware of potential negative consequences.
Optional: Click Format .
The following code sample shows an incremental table with the EXTEND action
set for the onSchemaChange property:
config {
type: "incremental",
onSchemaChange: "EXTEND",
}
SELECT ...
Add table documentation
This section shows you how to add descriptions of a table and its columns and
records to a Dataform core SQLX file.
You can add table, column, and record descriptions to all table types in
Dataform: tables, incremental tables, and views.
You might want to document the following:
The purpose of the table.
The content or role of columns or records in the table.
The relationship of the table and other actions of your workflow, for
example, the tables or views that depend on the current table.
The assertions applied to the table.
The pre-operations or post-operations applied to the table.
The owner of the table—that is, the user who created it. This information
might be useful if multiple team members work on a workflow.
Add a table description
To add a description to a table in a SQLX file, follow these steps:
In Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository.
Select a development workspace.
In the Files pane, click the table definition SQLX file that you want to
edit.
In the config block of the file, enter the table description in the
following format:
description: "Description of the table",
Optional: Click Format .
The following code sample shows a table description added to the config block
of a SQLX table definition file:
config {
type: "table",
description: "Description of the table",
}
Add column and record descriptions
To add descriptions of individual columns and records to a SQLX file, follow
these steps:
In the config block of your table definition file, enter columns: {} .
Inside columns: {} , enter column descriptions in the following format:
column_name: "Description of the column",
Inside columns: {} , enter record descriptions in the following format:
record_name: {
description: "Description of the record",
columns: {
record_column_name: "Description of the record column"
}
}
Optional: Click Format .
The following code sample shows table, column, and record descriptions in
the config block of a SQLX table definition file:
config {
type: "table",
description: "Description of the table.",
columns: {
column1_name: "Description of the first column",
column2_name: "Description of the second column",
column3_name: "Description of the third column",
record_name: {
description: "Description of the record.",
columns: {
record_column1_name: "Description of the first record column",
record_column2_name: "Description of the second record column",
}
}
}
}
SELECT
"first_column_value" AS column_1_name,
"second_column_value" AS column_2_name,
"third_column_value" AS column_3_name,
STRUCT("first" AS record_column1_name,
"second" AS record_column2_name) AS record_name
Reuse column documentation with includes
You can reuse descriptions of columns in Dataform across your SQL
workflow with JavaScript includes. You might want to reuse column documentation
if you have multiple columns with the same name and description in your SQL
workflow.
To create a reusable column description,
define a JavaScript include constant
with the name of the column and its description.
You can define a constant with a description of a single column, or a constant
with a set of column descriptions to reuse the descriptions of all columns in a
table. For more information on creating and using includes in Dataform,
see
Reuse code across a single repository with includes .
The following code sample shows multiple constants with descriptions of
individual columns defined in the includes/docs.js JavaScript file:
// filename is includes/docs.js
const user_id = `A unique identifier for a user` ;
const age = `The age of a user` ;
const creation_date = `The date this user signed up` ;
const user_tenure = `The number of years since the user's creation date` ;
const badge_count = `The all-time number of badges the user has received` ;
const questions_and_answer_count = `The all-time number of questions and answers the user has created` ;
const question_count = `The all-time number of questions the user has created` ;
const answer_count = `The all-time number of answers the user has created` ;
const last_badge_received_at = `The time the user received their most recent badge` ;
const last_posted_at = `The time the user last posted a question or answer` ;
const last_question_posted_at = `The time the user last posted an answer` ;
const last_answer_posted_at = `The time the user last posted a question` ;
module . exports = {
user_id ,
age ,
creation_date ,
user_tenure ,
badge_count ,
questions_and_answer_count ,
question_count ,
answer_count ,
last_badge_received_at ,
last_posted_at ,
last_question_posted_at ,
last_answer_posted_at ,
};
The following code sample shows the user_id and age constants, defined in
includes/docs.js , used in the definitions/my_table.sqlx SQLX table
definition file to generate documentation for selected columns in the table:
config {
type: "table",
description: "Table description.",
columns: {
user_id: docs.user_id,
column2_name: "Description of the second column",
column3_name: "Description of the third column",
age: docs.age,
}
}
SELECT ...
The following code sample shows a constant with a set of column descriptions
defined in the includes/docs.js JavaScript file:
// filename is includes/docs.js
const columns = {
user_id = `A unique identifier for a user` ,
age = `The age of a user` ,
creation_date = `The date this user signed up` ,
user_tenure = `The number of years since the user's creation date` ,
badge_count = `The all-time number of badges the user has received` ,
questions_and_answer_count = `The all-time number of questions and answers the user has created` ,
question_count = `The all-time number of questions the user has created` ,
answer_count = `The all-time number of answers the user has created` ,
last_badge_received_at = `The time the user received their most recent badge` ,
last_posted_at = `The time the user last posted a question or answer` ,
last_question_posted_at = `The time the user last posted an answer` ,
last_answer_posted_at = `The time the user last posted a question` ,
}
module . exports = {
columns
};
The following code sample shows the columns constant, which is defined in
includes/table_docs.js and used in the definitions/my_table.sqlx SQLX table
definition file to generate documentation for all columns in the table:
config { type: "table",
description: "My table description",
columns: docs.columns
}
SELECT 1 AS one
Add BigQuery labels
This section shows you how to add labels to tables in Dataform.
BigQuery supports adding labels to resources. For more information
on labels in BigQuery, see
Introduction to labels .
To add a BigQuery label to a table in Dataform,
add the label to the bigquery block in the config block of the
table definition SQLX file.
To add a BigQuery label to a table definition file, follow these steps:
Go to your development workspace.
In the Files pane, expand definitions/ .
Select a SQLX table definition file.
In the config block, add a label in the following format:
bigquery: {
labels: {
LABEL1 : " VALUE_OF_LABEL1 "
}
}
Replace the following:
LABEL1 : the name of your label
VALUE_OF_LABEL1 : the value of your label
Optional: To add a label with a name that contains special characters,
enter the label name in quotes ( "" ).
Optional: Click Format .
The following code sample shows the department:shipping and
cost-center:logistics labels added to the bigquery block in a
partitioned table definition SQLX file:
config {
type: "table",
bigquery: {
partitionBy: "DATE(ts)",
labels: {
department: "shipping",
"cost-center": "logistics"
}
}
}
SELECT CURRENT_TIMESTAMP() AS ts
What's next
To learn how to test table data with assertions, see
Test data quality .
To learn how to define tables with JavaScript, see
Create workflows exclusively with JavaScript .
To learn how to reuse code with includes, see
Reuse code across a single repository with includes .
To learn how to use the Dataform command-line interface, see
Use the Dataform CLI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
