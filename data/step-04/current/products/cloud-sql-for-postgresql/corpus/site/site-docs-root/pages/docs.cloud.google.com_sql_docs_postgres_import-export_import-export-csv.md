---
title: "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv
  title: "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Guides
Send feedback
Export and import using CSV files
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes exporting and importing data into Cloud SQL instances using
CSV files.
Note: If you're migrating an entire database from
a supported database server (on-premises, in AWS, or Cloud SQL) to a new
Cloud SQL instance, you can use the
Database Migration Service instead of exporting
and then importing files.
If you're exporting because you want to create a new instance from the exported
file, consider
restoring from a backup to a different instance
or cloning the instance .
You can cancel the import of data into Cloud SQL instances and
the export of data from the instances.
This data is contained in CSV files. For
more information about cancelling an import or export operation, see Cancel the import
and export of data .
Before you begin
Before you begin an export or import operation:
Ensure that your database has adequate free space.
Export and import operations use database resources, but they do not
interfere with normal database operations unless the instance is under-provisioned.
Important : Before starting a large operation, ensure
that at least 25 percent of the disk is free on the instance.
Doing so helps prevent issues with aggressive autogrowth, which can
adversely affect the availability of the instance.
Verify that
the CSV file has the expected data and that it's in the correct format.
CSV files must have one line for each row of data fields.
Follow the best practices for exporting and importing data.
Export data from Cloud SQL for PostgreSQL
Required roles and permissions for exporting from Cloud SQL for PostgreSQL
To export
data from Cloud SQL into Cloud Storage, the user initiating the export must have
one of the following roles:
The Cloud SQL Editor role
A custom role ,
including the following permissions:
cloudsql.instances.get
cloudsql.instances.export
Additionally, the service account for the Cloud SQL instance must have one of the following roles:
The storage.objectAdmin Identity and Access Management (IAM) role
A custom role, including the following permissions:
storage.objects.create
storage.objects.list (for exporting files in parallel only)
storage.objects.delete (for exporting files in parallel only)
For help with
IAM roles, see
Identity and Access Management .
Note : The changes that you make to the IAM permissions and roles might take
a few minutes to take effect. For more information, see
Access change propagation .
Export data to a CSV file from Cloud SQL for PostgreSQL
You can export your data in CSV format, which is usable by other tools and
environments. Exports happen at the database level. During a CSV export, you can
specify the schemas to export. All schemas at the database level are
eligible for export.
Note: Cloud SQL uses double quotes (hex value
"22") as the default escape character. This can be a problem for databases where
values for NULL are entered as string literals. When importing a
file that was exported using the default escape character, the file doesn't
treat the value as NULL but as "NULL" . We recommend
that you use --escape="5C" to override the default when you export
the file.
Note: You cannot export to a CSV file from a read
replica instance. The export operation creates an export user and grants that
user select permissions on the database that the user wants to export. Because
read replica instances run in read-only mode, these operations fail.
To export data from a database on a Cloud SQL instance to a CSV file
in a Cloud Storage bucket:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Export .
Select Offload export
to allow other operations to occur while the export is ongoing.
In the Cloud Storage export location section add the name of the bucket,
folder, and file that you want to export, or click Browse to
find or create a bucket, folder, or file.
If you click Browse :
In the Location section, select a Cloud Storage bucket or folder
for your export.
Note: If you need to create a new storage
bucket, click the bucket with the + sign in the
Location section. This opens Create a bucket , where you can
add a name and other configurations for the bucket. Select a
standard storage class for your bucket.
In the Name box, add a name for the CSV
file, or select an existing file from the list
in the Location section.
You can use a file extension of .gz (the complete
extension would be .csv.gz ) to compress your export
file.
Click Select .
In the Format section, click CSV .
In the Database for export section, select the name of the database from the
drop-down menu.
For SQL query , enter a SQL query to specify the table to export
data from.
For example, to export the entire contents of the entries
table in the guestbook database, you enter
SELECT * FROM guestbook.entries ;
Your query must specify a table in the specified database. You can't
export an entire database in CSV format.
Note: While in-transit, the query might be
processed in intermediate locations other than the location of the target
instance
Click Export to start the export.
The Export database? box opens with a message that the
export process can take an hour or more for large databases. During the
export, the only operation you can perform on the instance is viewing
information. After the export starts, you can cancel the operation . If this is a good time
to start an export, click Export . Otherwise, click Cancel .
gcloud
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Find the service account for the Cloud SQL instance you're exporting
from. You can do this running the gcloud sql instances describe
command. Look for the serviceAccountEmailAddress field in the
output.
gcloud sql instances describe INSTANCE_NAME
Use
gcloud storage buckets add-iam-policy-binding to grant the
storage.objectAdmin
IAM role to
the Cloud SQL instance service account. For help with setting IAM
permissions, see Using IAM permissions .
Export the database:
Note: Use the --offload flag if you want to use
serverless export. Otherwise, remove it from the following command.
gcloud sql export csv INSTANCE_NAME gs:// BUCKET_NAME / FILE_NAME \
--database= DATABASE_NAME \
--offload \
--query= SELECT_QUERY
For information about using the export csv command, see the
sql export csv
command reference page.
Note: While in-transit, the SELECT_QUERY might be
processed in intermediate locations other than the location of the target
instance.
If you do not need to retain the IAM role you set
previously, revoke
it now.
REST v1
Create a bucket for the export:
gcloud storage buckets create gs:// BUCKET_NAME --location= LOCATION_NAME --project= PROJECT_NAME
This step is not required, but strongly recommended, so you do not open up
access to any other data.
Provide your instance with the storage.objectAdmin IAM role for
your bucket. For help with setting IAM permissions, see Using
IAM permissions .
Export your database:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
bucket_name : The Cloud Storage bucket name
path_to_csv_file : The path to the CSV file
database_name : The name of a database inside the Cloud SQL instance
offload : Enables serverless export. Set to true to
use serverless export.
Note: Serverless export costs extra. See the
pricing page .
select_query : SQL query for export (optional)
Note: While in-transit, the query might be
processed in intermediate locations other than the location of the target
instance.
escape_character : The character that should appear before a data character that needs to be escaped. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. (optional)
quote_character :The character that encloses values from columns that have a string data type. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. (optional)
fields_terminated_by : The character that split column values. The value of this argument has to be a character in Hex ASCII Code. For example, "2C" represents a comma. (optional)
lines_terminated_by : The character that split line records. The value of this argument has to be a character in Hex ASCII Code. For example, "0A" represents a new line. (optional)
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /export
Request JSON body:
{
"exportContext":
{
"fileType": "CSV",
"uri": "gs:// bucket_name / path_to_csv_file ",
"databases": " database_name ",
"offload": true | false
"csvExportOptions":
{
"selectQuery":" select_query ",
"escapeCharacter":" escape_character ",
"quoteCharacter":" quote_character ",
"fieldsTerminatedBy":" fields_terminated_by ",
"linesTerminatedBy":" lines_terminated_by "
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /export"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /export" | Select-Object -Expand Content
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
You must specify exactly one database with the databases
property, and if the select query specifies a database, it must be the
same.
If you do not need to retain the IAM permissions you
set previously, remove them now.
For the complete list of parameters for the request, see the
instances:export page.
REST v1beta4
Create a bucket for the export:
gcloud storage buckets create gs:// BUCKET_NAME --location = LOCATION_NAME --project = PROJECT_NAME
This step is not required, but strongly recommended, so you do not open up
access to any other data.
Provide your instance with the storage.objectAdmin IAM role for
your bucket. For help with setting IAM permissions, see Using
IAM permissions .
Export your database:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
bucket_name : The Cloud Storage bucket name
path_to_csv_file : The path to the CSV file
database_name : The name of a database inside the Cloud SQL instance
offload : Enables serverless export. Set to true to
use serverless export.
Note: Serverless export costs extra. See the
pricing page .
select_query : SQL query for export (optional)
Note: While in-transit, the query might be
processed in intermediate locations other than the location of the target
instance.
escape_character : The character that should appear before a data character that needs to be escaped. The value of this argument must be in ASCII hex format . For example, "22" represents double quotes. (optional)
quote_character : The character that encloses values from columns that have a string data type. The value of this argument must be in ASCII hex format . For example, "22" represents double quotes. (optional)
fields_terminated_by : The character that splits column values. The value of this argument must be in ASCII hex format . For example, "2C" represents a comma. (optional)
lines_terminated_by : The character that split line records. The value of this argument must be in ASCII hex format . For example, "0A" represents a new line. (optional)
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export
Request JSON body:
{
"exportContext":
{
"fileType": "CSV",
"uri": "gs:// bucket_name / path_to_csv_file ",
"databases": " database_name ",
"offload": true | false
"csvExportOptions":
{
"selectQuery": " select_query ",
"escapeCharacter": " escape_character ",
"quoteCharacter": " quote_character ",
"fieldsTerminatedBy": " fields_terminated_by ",
"linesTerminatedBy": " lines_terminated_by "
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export" | Select-Object -Expand Content
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
You must specify exactly one database with the databases
property, and if the select query specifies a database, it must be the
same.
If you do not need to retain the IAM role you set
previously, revoke
it now.
For the complete list of parameters for the request, see the
instances:export page.
Customize the format of a CSV export file
You can use gcloud or the REST API to customize your CSV file format. When you
perform an export, you can specify the following formatting options:
CSV option
Default value
gcloud flag
REST API property
Description
Escape
"5C"
ASCII hex code for file separator.
--escape
escapeCharacter
Character that appears before a data character that needs to be escaped.
Available only for MySQL and PostgreSQL.
Quote
"22"
ASCII hex code for double quotes.
--quote
quoteCharacter
Character that encloses values from columns that have a string data type.
Available only for MySQL and PostgreSQL.
Field delimiter
"2C"
ASCII hex code for comma.
--fields-terminated-by
fieldsTerminatedBy
Character that splits column values.
Available only for MySQL and PostgreSQL.
Newline character
"0A"
ASCII hex code for newline.
--lines-terminated-by
linesTerminatedBy
Character that splits line records.
Available only for MySQL.
For example, a gcloud command using all of these arguments could be
like the following:
gcloud sql export csv INSTANCE_NAME gs:// BUCKET_NAME / FILE_NAME \
--database = DATABASE_NAME \
--offload \
--query = SELECT_QUERY \
--quote = "22" \
--escape = "5C" \
--fields-terminated-by = "2C" \
--lines-terminated-by = "0A"
The equivalent REST API request body would look like this:
{
"exportContext" :
{
"fileType" : "CSV" ,
"uri" : "gs://bucket_name/path_to_csv_file" ,
"databases" : [ " DATABASE_NAME " ] ,
"offload" : true,
"csvExportOptions" :
{
"selectQuery" : " SELECT_QUERY " ,
"escapeCharacter" : "5C" ,
"quoteCharacter" : "22" ,
"fieldsTerminatedBy" : "2C" ,
"linesTerminatedBy" : "0A"
}
}
}
CSV export creates standard CSV output by default. If you need even more options
than Cloud SQL provides, you can use the following statement in a psql
client:
\c opy [ table_name ] TO '[csv_file_name].csv' WITH
( FORMAT csv, ESCAPE '[escape_character]' , QUOTE '[quote_character]' ,
DELIMITER '[delimiter_character]' , ENCODING 'UTF8' , NULL '[null_marker_string]' ) ;
Import data to Cloud SQL for PostgreSQL
Required roles and permissions for importing to Cloud SQL for PostgreSQL
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
storage.objects.list (for importing files in parallel only)
For help with
IAM roles, see
Identity and Access Management .
Note : The changes that you make to the IAM permissions and roles might take
a few minutes to take effect. For more information, see
Access change propagation .
Import data from a CSV file to Cloud SQL for PostgreSQL
The database and table you are importing into must exist on your
Cloud SQL instance.
For help with creating a database, see
Creating a database .
Your CSV file must conform to the CSV
file format requirements .
Note: The default behavior for Cloud SQL is to
import columns in your CSV file in the same order as the table schema. If the
order is different in your CSV file or if some columns are skipped, use
importContext.csvImportOptions.columns[] to import data from the CSV file.
Note: You cannot import a CSV file that was created using one database engine
into an instance created using another database engine.
CSV file format requirements
CSV files must have one line for each row of data and use comma-separated
fields.
To import data to a Cloud SQL instance using a CSV file:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Import .
In the Select source file section, enter the path to the bucket and
CSV file or upload a local CSV file to use for the import. To browse to the
file:
Click Browse .
In the Location section, double-click the name of the bucket in the list.
Select the file in the list.
Click Select .
You can import a compressed ( .gz ) or an uncompressed
( .csv ) file.
In the Format section, select CSV .
Specify the Database and Table in
your Cloud SQL instance where you want to import the CSV file.
You can optionally specify a user for the import operation.
Click the Import to start the import.
gcloud
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Upload data from the CSV file to the bucket.
Identify the service account for the Cloud SQL instance you're exporting
from. You can do this running the gcloud sql instances describe
command with the instance name. Look for the serviceAccountEmailAddress field in the
output.
gcloud sql instances describe INSTANCE_NAME
Copy the serviceAccountEmailAddress field.
Use
gcloud storage buckets add-iam-policy-binding to grant the
storage.objectAdmin
IAM role
to the Cloud SQL instance service account for the bucket. For help with setting IAM
permissions, see
Using IAM permissions .
Import the file:
gcloud sql import csv INSTANCE_NAME gs:// BUCKET_NAME / FILE_NAME \
--database = DATABASE_NAME \
--table = TABLE_NAME
For information about using the import csv command, see the
sql import csv
command reference page.
If you do not need to retain the IAM permissions you
set previously, remove them using
gcloud storage buckets remove-iam-policy-binding .
REST v1
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Provide your instance with the storage.objectAdmin and
objectViewer IAM roles for your
bucket. For help with setting IAM permissions, see
Using IAM permissions .
Import the file:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
bucket_name : The Cloud Storage bucket name
path_to_csv_file : The path to the CSV file
database_name : The name of a database inside the Cloud SQL instance
table_name : The name of the database table
escape_character : The character that should appear before a data character that needs to be escaped. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. (optional)
quote_character : The character that encloses values from columns that have a string data type. The value of this argument has to be a character in Hex ASCII Code. For example, "22" represents double quotes. (optional)
fields_terminated_by : The character that split column values. The value of this argument has to be a character in Hex ASCII Code. For example, "2C" represents a comma. (optional)
lines_terminated_by : The character that split line records. The value of this argument has to be a character in Hex ASCII Code. For example, "0A" represents a new line. (optional)
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import
Request JSON body:
{
"importContext":
{
"fileType": "CSV",
"uri": "gs:// bucket_name / path_to_csv_file ",
"database": " database_name ",
"csvImportOptions":
{
"table": " table_name ",
"escapeCharacter": " escape_character ",
"quoteCharacter": " quote_character ",
"fieldsTerminatedBy": " fields_terminated_by ",
"linesTerminatedBy": " lines_terminated_by "
}
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
set previously, remove the permissions.
REST v1beta4
Create a Cloud Storage bucket.
Upload the file to your bucket.
For help with uploading files to buckets, see
Uploading objects .
Provide your instance with the storage.objectAdmin
IAM role
for your bucket. For help with setting IAM permissions, see
Using IAM permissions .
Import the file:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
bucket_name : The Cloud Storage bucket name
path_to_csv_file : The path to the CSV file
database_name : The name of a database inside the Cloud SQL instance
table_name : The name of the database table
escape_character : The character that should appear before a data character that needs to be escaped. The value of this argument must be in ASCII hex format . For example,"22" represents double quotes. (optional)
quote_character : The character that encloses values from columns that have a string data type. The value of this argument must be in ASCII hex format . For example, "22" represents double quotes. (optional)
fields_terminated_by : The character that split column values. The value of this argument must be in ASCII hex format . For example, "2C" represents a comma. (optional)
lines_terminated_by : The character that split line records. The value of this argument must be in ASCII hex format . For example, "0A" represents a new line. (optional)
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import
Request JSON body:
{
"importContext":
{
"fileType": "CSV",
"uri": "gs:// bucket_name / path_to_csv_file ",
"database": " database_name ",
"csvImportOptions":
{
"table": " table_name ",
"escapeCharacter": " escape_character ",
"quoteCharacter": " quote_character ",
"fieldsTerminatedBy": " fields_terminated_by ",
"linesTerminatedBy": " lines_terminated_by "
}
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
set previously, remove the permissions.
Customize the format of a CSV file for Cloud SQL for PostgreSQL
You can use gcloud or the REST API to customize your CSV file format.
A sample gcloud command follows:
gcloud sql import csv INSTANCE_NAME gs:// BUCKET_NAME / FILE_NAME \
--database = DATABASE_NAME \
--table = TABLE_NAME \
--quote = "22" \
--escape = "5C" \
--fields-terminated-by = "2C" \
--lines-terminated-by = "0A"
The equivalent REST API request body would look like this:
{
"importContext" :
{
"fileType" : "CSV" ,
"uri" : "gs://bucket_name/path_to_csv_file" ,
"database" : [ " DATABASE_NAME " ] ,
"csvImportOptions" :
{
"table" : " TABLE_NAME " ,
"escapeCharacter" : "5C" ,
"quoteCharacter" : "22" ,
"fieldsTerminatedBy" : "2C" ,
"linesTerminatedBy" : "0A"
}
}
}
Note: If you use custom format options in your import
commands, make sure the exported file was created with the same options.
If you get an error such as ERROR_RDBMS , ensure the table
exists. If the table exists, confirm that you have the correct
permissions on the bucket. For help configuring access control in
Cloud Storage, see
Create and Manage Access Control Lists .
To see how the
underlying REST API request
is constructed for this task, see the
APIs Explorer on the instances:import page .
What's next
Learn how to check the status of import and export operations .
Learn more about best practices for importing and exporting data .
Known issues for imports and exports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
