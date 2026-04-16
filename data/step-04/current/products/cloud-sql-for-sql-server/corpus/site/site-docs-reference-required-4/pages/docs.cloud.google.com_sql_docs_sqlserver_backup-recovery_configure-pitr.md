---
title: "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/use-cloudsql-mcp
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr
  title: "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\
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
Configure point-in-time recovery (PITR)
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Note:
To speed up instance creation when PITR is enabled, Cloud SQL uses an initial
instant snapshot for PITR instead of a
standard backup .
This snapshot is later converted to a standard backup in the background to support restore
operations.
This page discusses point-in-time recovery (PITR)
and automated backups .
You can configure PITR for any existing instance by doing the following:
Enable PITR
Disable PITR
Set transaction log retention
Check storage location of transaction logs used in PITR
Before you begin
Before you begin, review the following:
If you enable PITR on an existing instance, then the instance restarts.
PITR is enabled by default when you create a
Cloud SQL Enterprise edition
instance in the Google Cloud console. If you are using the gcloud CLI ,
Terraform, or the Cloud SQL Admin API and you want to enable the feature, then you
must do so manually.
PITR is enabled by default when you create a Cloud SQL Enterprise Plus edition
instance, regardless of the method used. If you want to
disable the feature ,
then you must do so manually.
Automated backups
are enabled by default when you create an instance in the Google Cloud console. If
you are using the gcloud CLI , Terraform, or the Cloud SQL Admin API and you want
to enable the feature, then you must do so manually.
Make sure that all databases on the Cloud SQL for SQL Server instance have unique physical filenames on the data disk.
For more information, see Logical and physical files .
To detect this, run the following T-SQL query:
SELECT d . name AS DatabaseName , mf . physical_name FROM
sys . master_files mf JOIN sys . databases d ON
mf . database_id = d . database_id WHERE mf . type = 0 AND mf . file_id = 1 ;
If the query returns two or more databases with the same value for the
physical_name field, then complete the following steps:
If PITR is enabled on the instance, then disable PITR.
Export the BAK file associated with each affected database.
Delete each affected database on the Cloud SQL for SQL Server instance.
Import the BAK file associated with each affected database.
Re-enable PITR on the instance.
Enable PITR
The following procedure enables PITR on an existing primary instance.
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Open the more actions menu for the instance you
want to enable PITR on and click Edit .
Under Customize your instance , expand the
Data Protection section.
Select the Enable point-in-time recovery checkbox.
In the Days of logs field, enter the number of days to retain
logs, from 1-35 for Cloud SQL Enterprise Plus edition, or 1-7 for Cloud SQL Enterprise edition.
Click Save .
gcloud
Display the instance overview:
gcloud sql instances describe INSTANCE_NAME
If you see enabled: false in the
backupConfiguration section, enable scheduled backups:
gcloud sql instances patch INSTANCE_NAME \
--backup-start-time = HH:MM
Specify the backup-start-time parameter using 24-hour
time in UTC±00 time zone.
Enable PITR:
gcloud sql instances patch INSTANCE_NAME \
--enable-point-in-time-recovery
If you're enabling PITR on a
primary instance, you can also configure the number of days for which you want
to retain transaction logs by adding the following parameter:
--retained-transaction-log-days = RETAINED_TRANSACTION_LOG_DAYS
Confirm your change:
gcloud sql instances describe INSTANCE_NAME
In the backupConfiguration section, you see
pointInTimeRecoveryEnabled: true
if the change was successful.
Terraform
To enable PITR, use a
Terraform resource .
Enable PITR for Cloud SQL Enterprise Plus edition
Use the following Terraform code sample to create a Cloud SQL Enterprise Plus edition instance
with PITR enabled:
# Creates a SQL SERVER Enterprise Plus edition instance. Unless specified otherwise, PITR is enabled by default.
resource "google_sql_database_instance" "enterprise_plus" {
name = "sqlserver-enterprise-plus-instance-pitr"
region = "asia-northeast1"
database_version = "SQLSERVER_2019_ENTERPRISE"
root_password = "INSERT-PASSWORD-HERE"
settings {
tier = "db-perf-optimized-N-2"
edition = "ENTERPRISE_PLUS"
backup_configuration {
enabled = true
}
}
# Setting the `deletion_protection` flag to true ensures you can't accidentally delete the instance
# using Terraform. Setting the `deletion_protection_enabled` flag to true protects the instance at the
# Google Cloud level.
deletion_protection = false
}
Enable PITR for Cloud SQL Enterprise edition
Use the following Terraform code sample to create a Cloud SQL Enterprise edition instance
with PITR enabled:
# Creates a SQL SERVER Enterprise edition instance with PITR enabled. Unless specified otherwise,
# PITR is disabled by default.
resource "google_sql_database_instance" "enterprise" {
name = "sqlserver-enterprise-instance-pitr"
region = "asia-northeast1"
database_version = "SQLSERVER_2019_ENTERPRISE"
root_password = "INSERT-PASSWORD-HERE"
settings {
tier = "db-custom-4-26624"
edition = "ENTERPRISE"
backup_configuration {
enabled = true
point_in_time_recovery_enabled = true
}
}
# Setting the `deletion_protection` flag to true ensures you can't accidentally delete the instance
# using Terraform. Setting the `deletion_protection_enabled` flag to true protects the instance at the
# Google Cloud level.
deletion_protection = false
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
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
INSTANCE_NAME : the name of the primary or read replica instance that you're configuring for high availability
START_TIME : the time (in hours and minutes)
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
Request JSON body:
{
"settings":
{
"backupConfiguration":
{
"startTime": " START_TIME ",
"enabled": true,
"pointInTimeRecoveryEnabled": true
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_NAME ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance
INSTANCE_NAME : the name of the primary or read replica instance that you're configuring for high availability
START_TIME : the time (in hours and minutes)
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME
Request JSON body:
{
"settings":
{
"backupConfiguration":
{
"startTime": " START_TIME ",
"enabled": true,
"pointInTimeRecoveryEnabled": true
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_NAME ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Disable PITR
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Open the more actions menu for the instance you
want to deactivate and select Edit .
Under Customize your instance , expand the Data Protection
section.
Clear Enable point-in-time recovery .
Click Save .
gcloud
Deactivate point-in-time recovery:
gcloud sql instances patch INSTANCE_NAME \
--no-enable-point-in-time-recovery
Confirm your change:
gcloud sql instances describe INSTANCE_NAME
In the backupConfiguration section, you see
pointInTimeRecoveryEnabled: false
if the change was successful.
REST v1
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id
Request JSON body:
{
"settings":
{
"backupConfiguration":
{
"enabled": false,
"pointInTimeRecoveryEnabled": false
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
REST v1beta4
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id
Request JSON body:
{
"settings":
{
"backupConfiguration":
{
"enabled": false,
"pointInTimeRecoveryEnabled": false
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
Set transaction log retention
To set the number of days to retain transaction logs:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Open the more actions menu for the instance you
want to set the transaction log on and select Edit .
Under Customize your instance , expand the Data Protection
section.
In the Enable point-in-time recovery section, expand
Advanced options .
Enter the number of days to retain logs, from 1-35 for Cloud SQL Enterprise Plus edition or
1-7 for Cloud SQL Enterprise edition.
Click Save .
gcloud
Edit the instance to set the number of days to retain
transaction logs.
Replace the following:
INSTANCE_NAME : The name of the instance you want to
set the transaction log on.
DAYS_TO_RETAIN : The number of days of transaction logs
to keep. For Cloud SQL Enterprise Plus edition, the valid range is between 1 and 35 days,
with a default of 14 days. For Cloud SQL Enterprise edition, the valid range is
between 1 and 7 days, with a default of 7 days.
If you don't
specify a value, then Cloud SQL uses the default value.
This is valid only when PITR is enabled. Keeping more days of
transaction logs requires a bigger storage size.
gcloud sql instances patch INSTANCE_NAME
--retained-transaction-log-days = DAYS_TO_RETAIN
REST v1
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID.
INSTANCE_ID : the instance ID.
DAYS_TO_RETAIN : the number of days to retain transaction logs. For Cloud SQL Enterprise Plus edition, the valid range is between 1 and 35 days, with a default of 14 days. For Cloud SQL Enterprise edition, the valid range is between 1 and 7 days, with a default of 7 days.
If no value is specified, then the default value is used. This is valid only when PITR is enabled. Keeping more days of transaction logs requires a bigger storage size.
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings":
{
"backupConfiguration":
{
"transactionLogRetentionDays": " DAYS_TO_RETAIN "
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID.
INSTANCE_ID : the instance ID.
DAYS_TO_RETAIN : the number of days to retain transaction logs. For Cloud SQL Enterprise Plus edition, the valid range is between 1 and 35 days, with a default of 14 days. For Cloud SQL Enterprise edition, the valid range is between 1 and 7 days, with a default of 7 days.
If no value is specified, then the default value is used. This is valid only when PITR is enabled. Keeping more days of transaction logs requires a bigger storage size.
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings":
{
"backupConfiguration":
{
"transactionLogRetentionDays": " DAYS_TO_RETAIN "
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-21T22:43:37.981Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Check the storage location of transaction logs used for PITR
You can check where your Cloud SQL instance is storing the transaction
logs used for PITR.
gcloud
To determine whether your instance stores logs for PITR on
disk or Cloud Storage, use the following command:
gcloud sql instances describe INSTANCE_NAME
Replace INSTANCE_NAME with the name of the instance.
For multiple instances in the same project, you can also check the storage
location of the transaction logs. To determine the location for multiple
instances, use the following command:
gcloud sql instances list --show-transactional-log-storage-state
Example response:
NAME DATABASE_VERSION LOCATION TRANSACTIONAL_LOG_STORAGE_STATE
my_01 SQLSERVER_2019_STANDARD us-central-1 DISK
my_02 SQLSERVER_2019_STANDARD us-central-1 CLOUD_STORAGE
...
In the output of the command, the transactionalLogStorageState
field or the TRANSACTIONAL_LOG_STORAGE_STATE column provides
information about where the transaction
logs for PITR are stored for the instance.
The possible transaction log
storage states are the following:
DISK : the instance stores the transaction logs
used for PITR on disk.
CLOUD_STORAGE : the instance stores the
transaction logs used for PITR in Cloud Storage.
What's next
Configure flags on your clone
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
