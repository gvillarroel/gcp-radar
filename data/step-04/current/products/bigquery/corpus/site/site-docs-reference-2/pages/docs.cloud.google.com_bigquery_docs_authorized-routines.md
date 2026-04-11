---
title: "Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/authorized-routines
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/authorized-routines
  title: "Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Authorized routines
Authorized routines let you share query results with specific users or groups
without giving them access to the underlying tables that generated the results.
For example, an authorized routine can compute an aggregation
over data or look up a table value and use that value in a computation.
By default, if a user invokes a routine, the user must have access to read the
data in the table. As an alternative, you can authorize the routine
to access the dataset that contains the referenced table. An authorized routine
can query the tables in the dataset, even if the user who calls the routine
can't query those tables directly.
The following types of routines can be authorized:
Table functions
User-defined functions (UDFs)
Stored procedures
Caution: Stored procedures authorized as routines have DDL and DML access.
These procedures can create, modify, and delete database objects. Principals
with access to authorized stored procedures can bypass
Identity and Access Management (IAM) permissions and perform actions that are normally
denied to them. Only grant authorized stored procedure access to principals
that you trust to run the procedure in its entirety.
Authorize routines
To authorize a routine, use the Google Cloud console, the bq command-line tool, or the REST API:
Console
Go to the BigQuery page in the Google Cloud console.
Go to BigQuery
In the left pane, click explore Explorer :
If you don't see the left pane, click last_page Expand left pane to open the pane.
In the Explorer pane, expand your project, click Datasets , and
then select a dataset.
In the details pane, click Share > Authorize Routines .
In the Authorized routines page, in the Authorize routine
section, select the Project , Dataset , and Routine for the
routine that you want to authorize.
Click Add authorization .
bq
Use the bq show command to get the JSON representation of the dataset
that you want the routine to access. The output from the command is a
JSON representation of the
Dataset resource.
Save the result to a local file.
bq show --format = prettyjson TARGET_DATASET > dataset.json
Replace TARGET_DATASET with the name of the dataset that
the routine can access.
Edit the file to add the following JSON object to the access array in
the Dataset resource:
{
"routine" : {
"datasetId" : " DATASET_NAME " ,
"projectId" : " PROJECT_ID " ,
"routineId" : " ROUTINE_NAME "
}
}
Replace the following:
DATASET_NAME : the name of the dataset that
contains the routine.
PROJECT_ID : the project ID of the project that
contains the routine.
ROUTINE_NAME : the name of the routine.
Optional: If you are authorizing a
stored procedure, attach an IAM role. This role restricts
access to the authorized procedure based on its permissions. To do this,
add "role" to the JSON object:
{
"role" : " ROLE_NAME " ,
"routine" : {
"datasetId" : " DATASET_NAME " ,
"projectId" : " PROJECT_ID " ,
"routineId" : " ROUTINE_NAME "
}
}
Replace ROLE_NAME with the name of the role that
you want to attach. You can attach the following roles to a stored
procedure:
BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer )
BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer )
BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor )
BigQuery Routine Admin ( roles/bigquery.routineAdmin )
Note: You can attach these roles only to stored procedures. Other types
of routines don't support roles.
Use the bq update command to update the dataset:
bq upda te -- source da taset .jso n TARGET_DATASET
API
Call the datasets.get
method to fetch the dataset that you want the routine to access. The
response body contains a representation of the
Dataset resource.
Add the following JSON object to the access array in the Dataset
resource:
{
"routine" : {
"datasetId" : " DATASET_NAME " ,
"projectId" : " PROJECT_ID " ,
"routineId" : " ROUTINE_NAME "
}
}
Replace the following:
DATASET_NAME : the name of the dataset that
contains the UDF.
PROJECT_ID : the project ID of the project that
contains the UDF.
ROUTINE_NAME : the name of the routine.
Optional: If you are authorizing a stored procedure, attach an
IAM role. This role restricts access to the authorized
procedure based on its permissions. To do this, add "role" to the JSON
object:
{
"role" : " ROLE_NAME " ,
"routine" : {
"datasetId" : " DATASET_NAME " ,
"projectId" : " PROJECT_ID " ,
"routineId" : " ROUTINE_NAME "
}
}
Replace ROLE_NAME with the name of the role that
you want to attach. You can attach the following roles to a stored
procedure:
BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer )
BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer )
BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor )
BigQuery Routine Admin ( roles/bigquery.routineAdmin )
Note: You can attach these roles only to stored procedures. Other types
of routines don't support roles.
Call the dataset.update
method with the modified Dataset representation.
Note: If you modify a routine by running a CREATE OR REPLACE statement
( CREATE OR REPLACE FUNCTION ,
CREATE OR REPLACE PROCEDURE ,
CREATE OR REPLACE TABLE FUNCTION ),
or by calling the routines.update method, then you must re-authorize the routine.
Quotas and limits
Authorized routines are subject to dataset limits. For more information, see
Dataset limits .
If you update a routine, then its existing authorized routines authorization
expires. BigQuery automatically removes stale authorized routines
authorization entries within 24 hours. To update the entries immediately, you
must manually delete the entry from the 'Currently authorized routines' list
before re-authorizing it.
Authorized routine example
The following is an end-to-end example of creating and using an authorized UDF.
Create two datasets named private_dataset and public_dataset . For more
information about creating a dataset, see
Creating a dataset .
Run the following statement to create a table named private_table in
private_dataset :
CREATE OR REPLACE TABLE private_dataset . private_table
AS SELECT key FROM UNNEST ( [ 'key1' , 'key1' , 'key2' , 'key3' ] ) key ;
Run the following statement to create a UDF named count_key in
public_dataset . The UDF includes a SELECT statement on private_table .
CREATE OR REPLACE FUNCTION public_dataset . count_key ( input_key STRING )
RETURNS INT64
AS
(( SELECT COUNT ( 1 ) FROM private_dataset . private_table t WHERE t . key = input_key ));
Grant the bigquery.dataViewer role to a user on the public_dataset
dataset. This role includes the bigquery.routines.get permission, which
lets the user call the routine.
For information about how to assign access controls to a dataset, see
Controlling access to datasets .
Note: Instead of using a built-in role, consider creating a custom role
with minimal permissions. For more information, see
Creating and managing custom roles .
At this point, the user has permission to call the count_key routine
but cannot access the table in private_dataset . If the user tries to
call the routine, they get an error message similar to the following:
Access Denied: Table myproject:private_dataset.private_table: User does
not have permission to query table myproject:private_dataset.private_table.
Using the bq command-line tool, run the show command as follows:
bq show --format = prettyjson private_dataset > dataset.json
The output is saved to a local file named dataset.json .
Edit dataset.json to add the following JSON object to the access
array:
{
"routine" : {
"datasetId" : "public_dataset" ,
"projectId" : " PROJECT_ID " ,
"routineId" : "count_key"
}
}
Replace PROJECT_ID with the project ID for
public_dataset .
Using the bq command-line tool, run the update command as follows:
bq upda te -- source da taset .jso n priva te _da taset
To verify that the UDF has access to private_dataset , the user can run the
following query:
SELECT public_dataset . count_key ( 'key1' );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
