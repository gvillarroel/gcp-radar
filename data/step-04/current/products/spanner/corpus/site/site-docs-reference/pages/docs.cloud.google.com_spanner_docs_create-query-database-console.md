---
title: "Create and query a database in the Google Cloud console \_|\_ Spanner \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/create-query-database-console
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/create-query-database-console
  title: "Create and query a database in the Google Cloud console \_|\_ Spanner \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Create and query a database in the Google Cloud console
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart shows you how to use the Google Cloud console to create a database
in Spanner, insert data, and run a SQL query.
In the quickstart, you will:
Create a Spanner instance.
Create a database.
Create a schema.
Insert and modify data.
Run a query.
For information on the cost of using Spanner, see Pricing .
Note: To explore Spanner using a 90-day free trial instance,
see Create a Spanner free trial instance .
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
Optional: The Spanner API should be auto-enabled. If not, enable it manually:
Enable Spanner API
To get the permissions that
you need to create instances and databases,
ask your administrator to grant you the
Cloud Spanner Admin (roles/spanner.admin)
IAM role on your project.
Create an instance with the Google Cloud console
When you first use Spanner, you must create an instance, which is an
allocation of resources that are used by Spanner databases in that
instance.
In the Google Cloud console, go to the Spanner page.
Go to Spanner
Select or create a Google Cloud project if you haven't done so already.
On the Spanner page, click Create a provisioned instance .
If you've used Spanner before, you'll see the
Spanner Instances page instead of the product page. Click
Create instance .
In the Name your instance page, enter an instance name,
such as Test Instance .
The instance ID is automatically entered based on the instance name,
for example, as test-instance . Change it, if required. Click
Continue .
In the Configure your instance page, retain the default option
Regional and select a configuration from the drop-down menu.
Your instance configuration determines the geographic location where your
instances are stored and replicated.
Click Continue .
In the Allocate compute capacity page, select Processing units (PUs)
and retain the default value of 1000 processing units.
Click Create .
The Google Cloud console displays the Overview page for the instance
you created.
Create a database
In the Google Cloud console, go to the Spanner Instances page.
Go to Spanner instances
Click the instance you created, for example Test Instance .
In the instance Overview page that opens, click Create database .
For the database name, enter a name, such as example-db .
Select a database dialect.
For information about support for PostgreSQL and for guidance for
choosing a dialect, see
PostgreSQL interface .
If you selected GoogleSQL, you'll define the schema in the
Define your schema text field in the next section of this quickstart.
Your database creation page now looks like this:
Click Create .
The Google Cloud console displays the Overview page for the database
you created.
Create a schema for your database
Note: Spanner Studio (formerly labeled Query in the Google Cloud console)
supports SQL, DML, and DDL operations in a single editor. For more information,
see Manage your data using the Google Cloud console .
In the navigation menu, click Spanner Studio .
In the Spanner Studio page, click
add New tab or use the empty
editor tab.
Enter:
GoogleSQL
CREATE TABLE Singers (
SingerId INT64 NOT NULL ,
FirstName STRING ( 1024 ),
LastName STRING ( 1024 ),
SingerInfo BYTES ( MAX ),
BirthDate DATE
) PRIMARY KEY ( SingerId );
PostgreSQL
CREATE TABLE Singers (
BirthDate TIMESTAMPTZ ,
SingerId BIGINT PRIMARY KEY ,
FirstName VARCHAR ( 1024 ),
LastName VARCHAR ( 1024 ),
SingerInfo BYTEA
);
Click play_circle
Run .
The Google Cloud console returns to the database Overview page and
shows that Schema updates are underway. When the update is complete, the
page looks like this:
GoogleSQL
PostgreSQL
Notice that PostgreSQL converts the table name to lowercase.
Insert and modify data
The Google Cloud console provides an interface for inserting, editing, and
deleting data.
Insert data
In the list of tables on the database Overview page, click the Singers
table.
The Google Cloud console displays the Singers table's Schema page.
In the navigation menu, click Data to display the Singers table's
Data page.
Click Insert .
The Google Cloud console displays the Singers table's Spanner Studio
page with a new query tab that contains the INSERT statement that
you edit to insert a row in the Singers table and view the result of that
insertion:
GoogleSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
Singers ( SingerId ,
FirstName ,
LastName ,
SingerInfo ,
BirthDate )
VALUES
( < SingerId > , -- type: INT64
< FirstName > , -- type: STRING(1024)
< LastName > , -- type: STRING(1024)
< SingerInfo > , -- type: BYTES(MAX)
< BirthDate > -- type: DATE
)
THEN RETURN
SingerId ,
FirstName ,
LastName ,
SingerInfo ,
BirthDate ;
PostgreSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
singers ( singerid ,
firstname ,
lastname ,
singerinfo ,
birthdate )
VALUES
( < singerid > , -- type: bigint
< firstname > , -- type: character varying
< lastname > , -- type: character varying
< singerinfo > , -- type: bytea
< birthdate > -- type: timestamp with time zone
);
THEN RETURN
singerid ,
firstname ,
lastname ,
singerinfo ,
birthdate ;
Notice that PostgreSQL converts the column names to all lower
case.
Edit the INSERT statement's VALUES clause.
GoogleSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
Singers ( SingerId ,
BirthDate ,
FirstName ,
LastName ,
SingerInfo )
VALUES
( 1 , -- type: INT64
NULL , -- type: DATE
'Marc' , -- type: STRING(1024)
'Richards' , -- type: STRING(1024)
NULL -- type: BYTES(MAX)
)
THEN RETURN
SingerId ,
FirstName ,
LastName ,
SingerInfo ,
BirthDate ;
PostgreSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
singers ( singerid ,
birthdate ,
firstname ,
lastname ,
singerinfo )
VALUES
( 1 , -- type: bigint
NULL , -- type: timestamp with time zone
'Marc' , -- type: character varying
'Richards' , -- type: character varying
NULL -- type: bytea
);
THEN RETURN
singerid ,
firstname ,
lastname ,
singerinfo ,
birthdate ;
Click
play_circle
Run .
Spanner runs the statements. When finished, the Results
tab shows that the statement inserted one row:
GoogleSQL
PostgreSQL
In the Explorer, click more_vert
View actions next to the Singers table, and then click
Insert data .
Edit the INSERT statement's VALUES clause and the SELECT statement's
WHERE clause:
GoogleSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
Singers ( SingerId ,
BirthDate ,
FirstName ,
LastName ,
SingerInfo )
VALUES
( 2 , -- type: INT64
NULL , -- type: DATE
'Catalina' , -- type: STRING(1024)
'Smith' , -- type: STRING(1024)
NULL -- type: BYTES(MAX)
)
-- Change values in the WHERE condition to match the inserted row.
SELECT
*
FROM
Singers
WHERE
SingerId = 2 ;
PostgreSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
singers ( singerid ,
birthdate ,
firstname ,
lastname ,
singerinfo )
VALUES
( 2 , -- type: bigint
NULL , -- type: timestamp with time zone
'Catalina' , -- type: character varying
'Smith' , -- type: character varying
NULL -- type: bytea
);
-- Change values in the WHERE condition to match the inserted row.
SELECT
*
FROM
singers
WHERE
singerid = 2 ;
Click play_circle
Run .
After Spanner runs the statements, the Results tab
shows that the statement inserted one row.
In the Explorer, click more_vert
View actions next to the Singers table, and then click
Preview Data .
Click play_circle
Run . The Singers table now has two rows:
GoogleSQL
PostgreSQL
You can also insert empty string values when you enter data.
Click Insert to add a row.
Spanner again displays the Singers table's Spanner Studio
page with a new query tab that contains the same INSERT and SELECT
statements.
Edit the template INSERT statement's VALUES clause and SELECT
statement's WHERE clause:
GoogleSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
Singers ( SingerId ,
BirthDate ,
FirstName ,
LastName ,
SingerInfo )
VALUES
( 3 , -- type: INT64
NULL , -- type: DATE
'Kena' , -- type: STRING(1024)
'' , -- type: STRING(1024)
NULL -- type: BYTES(MAX)
);
-- Change values in the WHERE condition to match the inserted row.
SELECT
*
FROM
Singers
WHERE
SingerId = 3 ;
PostgreSQL
-- Add new values in the VALUES clause in order of the column list.
-- Each value must be type compatible with its associated column.
INSERT INTO
singers ( singerid ,
birthdate ,
firstname ,
lastname ,
singerinfo )
VALUES
( 3 , -- type: bigint
NULL , -- type: timestamp with time zone
'Kena' , -- type: character varying
'' , -- type: character varying
NULL -- type: bytea
);
-- Change values in the WHERE condition to match the inserted row.
SELECT
*
FROM
singers
WHERE
singerid = 3 ;
Notice that the value provided for the last name column is an empty string, '' , not a NULL value.
Click play_circle
Run .
After Spanner runs the statements, the Results tab
shows that the statement inserted one row.
In the Explorer, click more_vert
View actions next to the Singers table, and then click
Preview Data .
Click play_circle
Run . The Singers table now has three rows, and the
row with the primary key value of 3 has an empty string in the LastName
column:
GoogleSQL
PostgreSQL
Edit data
On the Singers table's Data page, select the checkbox on the row with the primary key value of 3 , and then click Edit .
The Spanner displays the Spanner Studio page with a
new tab containing template UPDATE and SET statements that you can edit.
Note that the WHERE clauses of both statements indicate that the row to
update is the one with the primary key value of 3 .
GoogleSQL
-- Change values in the SET clause to update the row where the WHERE condition is true.
UPDATE
Singers
SET
BirthDate = '' ,
FirstName = 'Kena' ,
LastName = '' ,
SingerInfo = ''
WHERE
SingerId = 3 ;
SELECT
*
FROM
Singers
WHERE
SingerId = 3 ;
PostgreSQL
-- Change values in the SET clause to update the row where the WHERE condition is true.
UPDATE
singers
SET
birthdate = NULL ,
firstname = 'Kena' ,
lastname = '' ,
singerinfo = NULL
WHERE
singerid = '3' ;
SELECT
*
FROM
singers
WHERE
singerid = '3' ;
Edit the UPDATE statement's SET clause to update only the birth date:
GoogleSQL
-- Change values in the SET clause to update the row where the WHERE condition is true.
UPDATE
Singers
SET
BirthDate = '1961-04-01'
WHERE
SingerId = 3 ;
SELECT
*
FROM
Singers
WHERE
SingerId = 3 ;
PostgreSQL
-- Change values in the SET clause to update the row where the WHERE condition is true.
UPDATE
singers
SET
birthdate = '1961-04-01 00:00:00 -8:00'
WHERE
singerid = '3' ;
SELECT
*
FROM
singers
WHERE
singerid = '3' ;
Click play_circle
Run .
Spanner runs the statements. When finished, the Results
tab shows that the first statement updated one row.
In the Explorer, click more_vert
View actions next to the Singers table, and then click
Preview Data .
Click play_circle
Run . The updated row now has a value for the birth date.
GoogleSQL
PostgreSQL
Delete data
On the Singers table's Data page, select the checkbox on the row with 2 in the first column, and then click Delete .
In the dialog that appears, click Confirm .
The Singers table now has two rows:
GoogleSQL
PostgreSQL
Run a query in the Google Cloud console
On the database Overview page, click Spanner Studio in the
navigation menu.
Click New tab to create a new query tab. Then, enter the following query
in the query editor:
GoogleSQL
SELECT * FROM Singers ;
PostgreSQL
SELECT * FROM singers ;
Click play_circle
Run .
Spanner runs the query. When finished, the Results
tab displays the result of your query:
GoogleSQL
PostgreSQL
Congratulations! You've successfully created a Spanner database
and executed a SQL statement by using the query editor!
Clean up
To avoid incurring additional charges to your Google Cloud account, delete
the database and instance. Disabling the Cloud Billing API doesn't stop
charges. When you delete an instance, all databases in the instance are deleted.
Delete the database
In the Google Cloud console, go to the Spanner Instances page.
Go to Spanner instances
Click the name of the instance that has the database that you want to delete,
for example, Test Instance .
Click the name of the database that you want to delete, for example,
example-db .
In the Database details page, click delete
Delete database .
Confirm that you want to delete the database by entering the database name
and clicking Delete .
Delete the instance
In the Google Cloud console, go to the Spanner Instances page.
Go to Spanner instances
Click the name of the instance that you want to delete, for example, Test Instance .
Click delete Delete instance .
Confirm that you want to delete the instance by entering the instance name and clicking Delete .
What's next
Learn about Instances .
Understand the Spanner Schema and Data Model .
Learn more about GoogleSQL Data Definition Language (DDL) .
Learn more about Query Execution Plans .
Learn how to use Spanner with C++ , C# , Go , Java ,
Node.js , PHP , Python , Ruby , REST , or gcloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
