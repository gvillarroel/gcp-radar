---
title: "Create and manage databases \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases
  title: "Create and manage databases \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\
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
Create and manage databases
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page contains information about creating, listing, and deleting PostgreSQL
databases on a Cloud SQL instance.
A newly-created instance has a postgres database.
For more information about PostgreSQL databases, see the
PostgreSQL documentation .
Before you begin
Before completing the tasks on this page, you must have:
Created a Cloud SQL instance. For more information,
see Creating instances .
If you plan to use the psql client to create or manage your databases,
you must have:
Configured access and connected to the instance with a psql client.
For more information about connection options, see
Connection Options for External Applications .
Create a database on the Cloud SQL instance
Note: The postgres database is the default
database
you connect to before you create any other databases. After you create
another database, switch to it to create tables and insert data. Don't
use the postgres database for your application's data because this database is used primarily for administrative purposes.
The maximum length of the database name is 64 characters. For more information
on other criteria for this name, see Identifiers and Key Words .
If you don't specify a character set and collation when you create your database,
the database will have the following default values:
Character set: UTF8
Collation: en_US.UTF8
Console
Note: You can't use the Google Cloud console to set values for the character
set and
collation. To set these values, use a psql client to
create your
database. For more information about using this client to create the database,
refer to the contents in the psql Client tab.
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Select Databases from the SQL navigation menu.
Click Create database .
In the New database dialog, specify the name of the database.
Click Create .
gcloud
Note: You can't use gcloud to set values for the character
set and
collation. To set these values, use a psql client to
create your
database. For more information about using this client to create the database,
refer to the contents in the psql Client tab.
For reference information, see gcloud
sql databases create .
gcloud sql databases create DATABASE_NAME \
--instance = INSTANCE_NAME
Terraform
Note: You can't use Terraform to set values for the character
set and
collation. To set these values, use a psql client to
create your
database. For more information about using this client to create the database,
refer to the contents in the psql Client tab.
To create a database, use a Terraform resource .
resource "google_sql_database" "database" {
name = "my-database"
instance = google_sql_database_instance.instance.name
}
Apply the changes
To apply your Terraform configuration in a Google Cloud project, complete the steps in the
following sections.
Prepare Cloud Shell
Launch Cloud Shell .
Set the default Google Cloud project
where you want to apply your Terraform configurations.
You only need to run this command once per project, and you can run it in any directory.
export GOOGLE_CLOUD_PROJECT= PROJECT_ID
Environment variables are overridden if you set explicit values in the Terraform
configuration file.
Prepare the directory
Each Terraform configuration file must have its own directory (also
called a root module ).
In Cloud Shell , create a directory and a new
file within that directory. The filename must have the
.tf extension—for example main.tf . In this
tutorial, the file is referred to as main.tf .
mkdir DIRECTORY && cd DIRECTORY && touch main.tf
If you are following a tutorial, you can copy the sample code in each section or step.
Copy the sample code into the newly created main.tf .
Optionally, copy the code from GitHub. This is recommended
when the Terraform snippet is part of an end-to-end solution.
Review and modify the sample parameters to apply to your environment.
Save your changes.
Initialize Terraform. You only need to do this once per directory.
terraform init
Optionally, to use the latest Google provider version, include the -upgrade
option:
terraform init -upgrade
Apply the changes
Review the configuration and verify that the resources that Terraform is going to create or
update match your expectations:
terraform plan
Make corrections to the configuration as necessary.
Apply the Terraform configuration by running the following command and entering yes
at the prompt:
terraform apply
Wait until Terraform displays the "Apply complete!" message.
Open your Google Cloud project to view
the results. In the Google Cloud console, navigate to your resources in the UI to make sure
that Terraform has created or updated them.
Note: Terraform samples typically assume that the required APIs are
enabled in your Google Cloud project.
Delete the changes
To delete your changes, do the following:
To disable deletion protection, in your Terraform configuration file set the
deletion_protection argument to false .
deletion_protection = "false"
Apply the updated Terraform configuration by running the following command and
entering yes at the prompt:
terraform apply
Remove resources previously applied with your Terraform configuration by running the following
command and entering yes at the prompt:
terraform destroy
REST v1
Note: You can't use REST APIs to set values for the character
set and
collation. To set these values, use a psql client to
create your
database. For more information about using this client to create the database,
refer to the contents in the psql Client tab.
The following request uses the
databases:insert
method to create a new database on the specified instance.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
database-name : The name of a database inside the Cloud SQL instance
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases
Request JSON body:
{
"project": " project-id ",
"instance": " instance-id ",
"name": " database-name "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "CREATE_DATABASE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
REST v1beta4
Note: You can't use REST APIs to set values for the character
set and
collation. To set these values, use a psql client to
create your
database. For more information about using this client to create the database,
refer to the contents in the psql Client tab.
The following request uses the
databases:insert
method to create a new database on the specified instance.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
database-name : The name of a database inside the Cloud SQL instance
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases
Request JSON body:
{
"project": " project-id ",
"instance": " instance-id ",
"name": " database-name "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "CREATE_DATABASE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
psql Client
For reference information, see CREATE
DATABASE in the PostgreSQL documentation.
See the following topics in the PostgreSQL documentation for background and a
list of supported character set values:
Collation Support
Character Set Support
CREATE DATABASE database_name
[[ ENCODING encoding ][ LC_COLLATE lc_collate ]];
For example: CREATE DATABASE "example_db" WITH OWNER "example_user"
ENCODING 'UTF8' LC_COLLATE = 'pl_PL.utf8' LC_CTYPE = 'pl_PL.utf8' TEMPLATE template0;
Note: The default template is template1 .
However, psql uses template0 because it's the only template
that accepts a specific encoding and character set. For more information,
see Template Databases .
List your databases
To list all databases on an instance:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Databases from the left side menu. The
Databases page lists databases along with their collation type,
character set, and database type.
gcloud
For reference information, see gcloud
sql databases list .
gcloud sql databases list \
--instance = INSTANCE_NAME
REST v1
The following request uses the
databases:list
method to list the databases for an instance.
When you list the databases using the API, you see
additional template databases and a system database that are not displayed by
the console. You cannot delete or manage the system database.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#database",
"charset": "utf8",
"collation": "utf8_general_ci",
"etag": " etag ",
"name": "sys",
"instance": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/sys",
"project": " project-id "
}
Note : The databases.list API supports only response payloads that
include up to 4 MB of text.
If you run a database list request on a
large instance, then you might receive an error. If this occurs, then to get the
list of databases, we recommend that you run the request directly from the
instance.
REST v1beta4
The following request uses the
databases:list
method to list the databases for an instance.
When you list the databases using the API, you see
additional template databases and a system database that are not displayed by
the console. You cannot delete or manage the system database.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases
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
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases"
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#database",
"charset": "utf8",
"collation": "utf8_general_ci",
"etag": " etag ",
"name": "sys",
"instance": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/sys",
"project": " project-id "
}
Note : The databases.list API supports only response payloads that
include up to 4 MB of text.
If you run a database list request on a
large instance, then you might receive an error. If this occurs, then to get the
list of databases, we recommend that you run the request directly from the
instance.
psql Client
For reference information, see list .
When you list the databases using the psql client, you see
additional template databases and a system database that are not displayed by
the console. You cannot delete or manage the system database.
\ l
Delete a database
To delete a database on the Cloud SQL instance:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Databases from the left side menu.
In the database list, find the database you want to delete and
click the trash can icon.
In the Delete database dialog, enter the name of the database
and then click Delete .
gcloud
For reference information, see gcloud
sql databases delete .
gcloud sql databases delete DATABASE_NAME \
--instance = INSTANCE_NAME
REST v1
The following request uses the
databases:delete
method to delete the specified database.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
database-name : The name of a database inside the Cloud SQL instance
HTTP method and URL:
DELETE https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/ database-name
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
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/ database-name "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/ database-name " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "DELETE_DATABASE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
REST v1beta4
The following request uses the
databases:delete
method to delete the specified database.
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
database-name : The name of a database inside the Cloud SQL instance
HTTP method and URL:
DELETE https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name
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
Execute the following command:
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name "
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
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "DELETE_DATABASE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
psql Client
For reference information, see DROP DATABASE
in the PostgreSQL documentation.
DROP DATABASE [ database_name ];
What's next
Manage users for your instance.
Import data into your instance.
Learn about options for connecting to your instance using the psql client .
Create a database table .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Cloud SQL performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Cloud SQL free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
