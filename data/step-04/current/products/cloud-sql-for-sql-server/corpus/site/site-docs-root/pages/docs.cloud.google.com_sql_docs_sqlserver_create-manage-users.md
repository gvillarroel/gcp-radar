---
title: "Create and manage users \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-users
  title: "Create and manage users \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
    \ Documentation"
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
Create and manage users
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to enable and use Cloud SQL built-in authentication.
For additional information about users you create using Cloud SQL, see
Other SQL Server users .
Before creating users
Create a Cloud SQL instance. For more information, see
Create instances .
If you plan to use your database's administrative client to manage users,
configure the default user on the instance by setting the password.
See Set the password for the default user account .
Set the password for the default user account
When you create a new Cloud SQL instance, you must set a password for the
default user account before you can connect to the instance.
For Cloud SQL for SQL Server, the default user is sqlserver .
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Select Users from the SQL navigation menu.
Find the sqlserver user and select Change password
from the more actions menu .
Provide a strong password that you can remember and
click OK .
gcloud
Use the
gcloud sql users set-password command as follows to set the password for the default user.
Replace INSTANCE_NAME with the name of the instance before running
the command.
gcloud sql users set-password sqlserver \
--instance = INSTANCE_NAME \
--prompt-for-password
REST v1
To update the password for the default user account, use a PUT request with the
users:update method.
Before using any of the request data,
make the following replacements:
project-id : Your project ID
instance-id : The desired instance ID
user-id : The ID of the user
password : The password for the user
HTTP method and URL:
PUT https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id
Request JSON body:
{
"name": " user-id ",
"password": " password "
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
curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PUT ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2020-02-07T22:38:41.217Z",
"startTime": "2020-02-07T22:38:41.217Z",
"endTime": "2020-02-07T22:38:44.801Z",
"operationType": "UPDATE_USER",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
REST v1beta4
To update the password for the default user account, use a PUT request with the
users:update method.
Before using any of the request data,
make the following replacements:
project-id : Your project ID
instance-id : The desired instance ID
user-id : The ID of the user
password : The password for the user
HTTP method and URL:
PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id
Request JSON body:
{
"name": " user-id ",
"password": " password "
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
curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PUT ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2020-02-07T22:38:41.217Z",
"startTime": "2020-02-07T22:38:41.217Z",
"endTime": "2020-02-07T22:38:44.801Z",
"operationType": "UPDATE_USER",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
Create a user
After setting up the default user account , you can create other users.
When you create a built-in user, you can assign the user with
one or more database roles.
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Select Users from the SQL navigation menu.
Click Add user account .
In the Add a user account to instance instance_name page,
add the following information:
A Username .
A Password (optional).
Click Add .
gcloud
To create a user, use the
gcloud sql users create command.
Replace the following:
USER_NAME : The user name.
INSTANCE_NAME : The name of the instance.
PASSWORD : The password for the user.
gcloud sql users create USER_NAME \
--instance = INSTANCE_NAME \
--password = PASSWORD
Username length limits are the same for Cloud SQL as for
on-premises SQL Server.
Terraform
To create a user, use a Terraform resource .
resource "random_password" "pwd" {
length = 16
special = false
}
resource "google_sql_user" "user" {
name = "user"
instance = google_sql_database_instance.default.name
password = random_password.pwd.result
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
To create a user, use a POST request with the
users:insert method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : the instance ID
USER_ID : the ID of the user
PASSWORD : the password for the user
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /users
Request JSON body:
{
"name": " USER_ID ",
"password": " PASSWORD "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /users"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /users" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2025-10-20T22:44:16.656Z",
"startTime": "2025-10-20T22:44:16.686Z",
"endTime": "2025-10-20T22:44:20.437Z",
"operationType": "CREATE_USER",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Username length limits are the same for Cloud SQL as for
on-premises SQL Server.
REST v1beta4
To create a user, use a POST request with the
users:insert method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : the instance ID
USER_ID : the ID of the user
PASSWORD : the password for the user
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /users
Request JSON body:
{
"name": " USER_ID ",
"password": " PASSWORD "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /users"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /users" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2025-10-20T22:44:16.656Z",
"startTime": "2025-10-20T22:44:16.686Z",
"endTime": "2025-10-20T22:44:20.437Z",
"operationType": "CREATE_USER",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Username length limits are the same for Cloud SQL as for
on-premises SQL Server.
List users
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Select Users from the SQL navigation menu.
gcloud
Use the
gcloud sql users list command to list the users for this instance:
gcloud sql users list \
--instance = INSTANCE_NAME
REST v1
To list the users defined for an instance, use a GET request with the
users:list method.
Before using any of the request data,
make the following replacements:
project-id : Your project ID
instance-id : The desired instance ID
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#usersList",
"items": [
{
"kind": "sql#user",
"etag": "--redacted--",
"name": "sqlserver",
"host": "",
"instance": " instance-id ",
"project": " project-id ",
"sqlserverUserDetails": {
"serverRoles": [
"CustomerDbRootRole"
]
}
},
{
"kind": "sql#user",
"etag": "--redacted--",
"name": " user-id-1 ",
"host": "",
"instance": " instance-id ",
"project": " project-id ",
"sqlserverUserDetails": {
"serverRoles": [
"CustomerDbRootRole"
]
}
},
{
"kind": "sql#user",
"etag": "--redacted--",
"name": " user-id-2 ",
"host": "",
"instance": " instance-id ",
"project": " project-id ",
"sqlserverUserDetails": {
"serverRoles": [
"CustomerDbRootRole"
]
}
},
{
...
},
{
...
}
]
}
Note : The users.list API supports only response payloads that
include up to 4 MB of text or roughly 12,000 users.
If your database has
a large number of users that exceeds these limits, then a request to list users
might result in an error. If this occurs, then to get the list of users, we
recommend that you run the request directly from the database.
REST v1beta4
To list the users defined for an instance, use a GET request with the
users:list method.
Before using any of the request data,
make the following replacements:
project-id : Your project ID
instance-id : The desired instance ID
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#usersList",
"items": [
{
"kind": "sql#user",
"etag": "--redacted--",
"name": "sqlserver",
"host": "",
"instance": " instance-id ",
"project": " project-id ",
"sqlserverUserDetails": {
"serverRoles": [
"CustomerDbRootRole"
]
}
},
{
"kind": "sql#user",
"etag": "--redacted--",
"name": " user-id-1 ",
"host": "",
"instance": " instance-id ",
"project": " project-id ",
"sqlserverUserDetails": {
"serverRoles": [
"CustomerDbRootRole"
]
}
},
{
"kind": "sql#user",
"etag": "--redacted--",
"name": " user-id-2 ",
"host": "",
"instance": " instance-id ",
"project": " project-id ",
"sqlserverUserDetails": {
"serverRoles": [
"CustomerDbRootRole"
]
}
},
{
...
},
{
...
}
]
}
Note : The users.list API supports only response payloads that
include up to 4 MB of text or roughly 12,000 users.
If your database has
a large number of users that exceeds these limits, then a request to list users
might result in an error. If this occurs, then to get the list of users, we
recommend that you run the request directly from the database.
Note: You can't use the Google Cloud console or
gcloud to display system users.
Change a user password
User passwords can be changed in one of the following ways.
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Select Users from the SQL navigation menu.
Click more actions for the user you want to update.
Select Change password .
Specify a new password.
Click OK .
gcloud
Use the
gcloud sql users set-password command to change a password.
Replace the following:
USER_NAME : The user name.
INSTANCE_NAME : The name of the instance.
gcloud sql users set-password USER_NAME \
--instance = INSTANCE_NAME \
--prompt-for-password
REST v1
To change a user password, use a PUT request with the
users:update method.
The following request updates the password for the user account
user_name .
Before using any of the request data,
make the following replacements:
project-id : Your project ID
instance-id : The desired instance ID
user-id : The ID of the user
password : The new password for the user
HTTP method and URL:
PUT https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id
Request JSON body:
{
"name": " user-id ",
"password": " password "
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
curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PUT ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?name= user-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2020-02-07T22:38:41.217Z",
"startTime": "2020-02-07T22:38:41.217Z",
"endTime": "2020-02-07T22:38:44.801Z",
"operationType": "UPDATE_USER",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
REST v1beta4
To change a user password, use a PUT request with the
users:update method.
The following request updates the password for the user account
user_name .
Before using any of the request data,
make the following replacements:
project-id : Your project ID
instance-id : The desired instance ID
user-id : The ID of the user
password : The new password for the user
HTTP method and URL:
PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id
Request JSON body:
{
"name": " user-id ",
"password": " password "
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
curl -X PUT \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PUT ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2020-02-07T22:38:41.217Z",
"startTime": "2020-02-07T22:38:41.217Z",
"endTime": "2020-02-07T22:38:44.801Z",
"operationType": "UPDATE_USER",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
Remove a user
The default user can remove users.
Before removing a user, you must drop all the objects it owns or reassign their
ownership, and revoke any privileges the role has been granted on other objects.
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Select Users from the SQL navigation menu.
Click more actions for the user you want
to remove.
Select Remove and then select Remove again.
gcloud
Use the
gcloud sql users delete command to remove a user.
Replace the following:
USER_NAME : The user name.
INSTANCE_NAME : The name of the instance.
gcloud sql users delete USER_NAME \
--instance = INSTANCE_NAME
REST v1
The request below uses the
users:delete method to delete the specified user account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID
INSTANCE_ID : The desired instance ID
USERNAME : The email address for the user or service account
HTTP method and URL:
DELETE https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /users?host=&name= USERNAME
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /users?host=&name= USERNAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID /users?host=&name= USERNAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2020-02-07T22:38:41.217Z",
"startTime": "2020-02-07T22:38:41.217Z",
"endTime": "2020-02-07T22:38:44.801Z",
"operationType": "DELETE_USER",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
The request below uses the
users:delete method to delete the specified user account.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID
INSTANCE_ID : The desired instance ID
USERNAME : The email address for the user or service account
HTTP method and URL:
DELETE https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /users?host=&name= USERNAME
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /users?host=&name= USERNAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID /users?host=&name= USERNAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "DONE",
"user": "user@example.com",
"insertTime": "2020-02-07T22:38:41.217Z",
"startTime": "2020-02-07T22:38:41.217Z",
"endTime": "2020-02-07T22:38:44.801Z",
"operationType": "DELETE_USER",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Update user properties
For information related to database-level roles in SQL Server, see
Working with Database-Level Roles
in the SQL Server documentation.
What's next
Learn more about how Cloud SQL works with users .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
