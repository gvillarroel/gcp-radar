---
title: "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql
  title: "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Export and import using SQL dump files
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes exporting and importing data into Cloud SQL instances using
SQL dump files.
Note:
Importing from a SQL file is much slower and is
more suited to a subset of data or a few small tables.
Importing from a SQL file is prone to failure, due to syntax, file size, or
file format. If you're exporting to create a new instance from the exported
file, consider
restoring from a backup to a different instance
or cloning the instance .
Exporting from Cloud SQL to a SQL dump file isn't supported for
SQL Server.
Before you begin
Important: Before starting a large export, ensure that at least 25 percent
of the database size is free (on the instance). Doing so helps prevent
issues with aggressive autogrowth, which can affect the availability
of the instance.
Exports use database resources, but they do not interfere with normal database
operations unless the instance is under-provisioned.
For best practices, see
Best Practices for Importing and
Exporting Data .
After completing an import operation,
verify the
results.
Export data from Cloud SQL for SQL Server
Exporting from Cloud SQL to a SQL dump file is not supported for
SQL Server.
Import data to Cloud SQL for SQL Server
Required roles and permissions for importing to Cloud SQL for SQL Server
To import
data from Cloud Storage into Cloud SQL, the user initiating the import must have
one of the following roles:
The Cloud SQL Admin role
A custom role ,
including the following permissions:
cloudsql.instances.get
cloudsql.instances.import
Additionally, the service account for the Cloud SQL instance must have one of the following roles:
The storage.objectAdmin IAM role
A custom role, including the following permissions:
storage.objects.get
storage.objects.list (for striped import only)
For help with
IAM roles, see
Identity and Access Management .
Note : The changes that you make to the IAM permissions and roles might take
a few minutes to take effect. For more information, see
Access change propagation .
Import a SQL dump file to Cloud SQL for SQL Server
SQL files are plain text files with a sequence of SQL commands.
In the following procedure, prepare to specify an existing database to
import your SQL files from.
Note: You cannot import a database that was exported
from a higher version of SQL Server or import from a higher compatibility level
into a lower one. For example, if you exported a SQL Server 2017
version, you cannot import it into a SQL Server 2014 version.
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Import .
In the Choose the file you'd like to import data from section, enter the path
to the bucket and SQL dump file to use for the import, browse to an existing
file, or upload a local file.
You can import a compressed ( .gz ) or an uncompressed
( .sql ) file.
For Format , select SQL .
Select the database you want the data to be imported into.
This causes Cloud SQL to run the USE DATABASE
statement before the import.
If your SQL dump file includes a
USE DATABASE statement, it overrides the database you set in
the Google Cloud console.
If you want to specify a user to perform the import,
select the user.
If your import file contains statements that must be performed
by a specific user, use this field to specify that user.
Click Import to start the import.
gcloud
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Describe the instance you are importing to:
gcloud sql instances describe INSTANCE_NAME
Copy the serviceAccountEmailAddress field.
Use gcloud storage buckets add-iam-policy-binding
to grant the storage.objectAdmin
IAM role to the
service account for the bucket.
gcloud storage buckets add-iam-policy-binding gs:// BUCKET_NAME \
--member = serviceAccount: SERVICE-ACCOUNT \
--role = roles/storage.objectAdmin
For help with setting IAM permissions, see
Using IAM permissions .
Import the database:
gcloud sql import sql INSTANCE_NAME gs:// BUCKET_NAME / IMPORT_FILE_NAME \
--database = DATABASE_NAME
For information about using the import sql command, see the
sql import sql
command reference page.
If the command returns an error like ERROR_RDBMS , review the
permissions; this error is often due to permissions issues.
If you do not need to retain the IAM permissions you
set previously, remove them using gcloud storage buckets remove-iam-policy-binding .
REST v1
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Provide your instance with the storage.objectAdmin and
objectViewer IAM roles for your
bucket. For help with setting IAM permissions, see
Using IAM permissions .
Import your dump file:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
bucket_name : The Cloud Storage bucket name
path_to_sql_file : The path to the SQL file
database_name : The name of a database inside the Cloud SQL instance
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import
Request JSON body:
{
"importContext":
{
"fileType": "SQL",
"uri": "gs:// bucket_name / path_to_sql_file ",
"database": " database_name "
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
For the complete list of parameters for the request, see the
instances:import page.
If you do not need to retain the IAM permissions you
set previously, remove them now.
REST v1beta4
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Provide your instance with the storage.objectAdmin
IAM role for your
bucket. For help with setting IAM permissions, see
Using IAM permissions .
Import your dump file:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
bucket_name : The Cloud Storage bucket name
path_to_sql_file : The path to the SQL file
database_name : The name of a database inside the Cloud SQL instance
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import
Request JSON body:
{
"importContext":
{
"fileType": "SQL",
"uri": "gs:// bucket_name / path_to_sql_file ",
"database": " database_name "
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
For the complete list of parameters for the request, see the
instances:import page.
If you do not need to retain the IAM permissions you
set previously, remove them now.
What's next
Learn how to check the status of import and export operations .
Learn more about best practices for importing and exporting data .
Learn more about Cloud Storage .
Known issues for imports and exports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
