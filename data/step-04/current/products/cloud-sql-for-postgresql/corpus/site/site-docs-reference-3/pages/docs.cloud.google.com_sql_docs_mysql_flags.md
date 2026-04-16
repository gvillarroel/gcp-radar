---
title: "Configure database flags \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/flags
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/flags
  title: "Configure database flags \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Configure database flags
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to configure database flags for Cloud SQL, and
lists the flags that you can set for your instance. You use database flags
for many operations, including adjusting MySQL parameters, adjusting
options, and configuring and tuning an instance.
Note: Some database flag settings can affect instance availability or
stability, and remove the instance from the Cloud SQL SLA . For
information about these flags, see Operational Guidelines .
In some cases, setting
one flag may require that you set another flag to fully enable the
functionality you want to use. For example, to enable
slow query logging ,
you must set both the slow_query_log flag to on and the log_output flag
to FILE to make your logs available using the Google Cloud console Logs Explorer.
When you set, remove, or modify a flag for a database instance, the database
might be restarted. The flag value is then persisted for the instance until you
remove it. If the instance is the source of a replica, and the instance is
restarted, the replica is also restarted to align with the current configuration
of the instance.
Configure database flags
The following sections cover common flag management tasks.
Set a database flag
Console
In the Google Cloud console ,
select the project that contains the Cloud SQL instance for which you want to set a database flag.
Open the instance and click Edit .
Go to the Flags section.
To set a flag that has not been set on the instance before, click
Add item , choose the flag from the drop-down menu, and set its value.
Click Save to save your changes.
Confirm your changes under Flags on the Overview page.
gcloud
Edit the instance:
gcloud sql instances patch INSTANCE_NAME --database-flags = FLAG1 = VALUE1 , FLAG2 = VALUE2
This command will overwrite all database flags
previously set. To keep those and add new ones, include the values for all
flags you want set on the instance; any flag not specifically included is
set to its default value. For flags that don't take a value, specify the
flag name followed by an equals sign ("=").
For example, to set the general_log ,
skip_show_database , and wait_timeout flags, you
can use the following command:
gcloud sql instances patch INSTANCE_NAME \
--database-flags = general_log = on,skip_show_database = on,wait_timeout = 200000
Terraform
To add database flags, use a Terraform resource .
resource "google_sql_database_instance" "instance" {
database_version = "MYSQL_8_0"
name = "mysql-instance"
region = "us-central1"
settings {
database_flags {
name = "general_log"
value = "on"
}
database_flags {
name = "skip_show_database"
value = "on"
}
database_flags {
name = "wait_timeout"
value = "200000"
}
disk_type = "PD_SSD"
tier = "db-n1-standard-2"
}
# set `deletion_protection` to true, will ensure that one cannot accidentally delete this instance by
# use of Terraform whereas `deletion_protection_enabled` flag protects this instance at the GCP level.
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
To set a flag for an existing database:
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
"databaseFlags":
[
{
"name": " flag_name ",
"value": " flag_value "
}
]
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
For example, to set the general_log flag for an existing
database use:
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
"databaseFlags":
[
{
"name": "general_log",
"value": "on"
}
]
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
If there are existing flags configured for the database, modify the previous
command to include them. The PATCH command overwrites the existing
flags with the ones specified in the request.
REST v1beta4
To set a flag for an existing database:
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
"databaseFlags":
[
{
"name": " flag_name ",
"value": " flag_value "
}
]
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
For example, to set the general_log flag for an existing
database use:
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
"databaseFlags":
[
{
"name": "general_log",
"value": "on"
}
]
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
If there are existing flags configured for the database, modify the previous
command to include them. The PATCH command overwrites the existing
flags with the ones specified in the request.
Clear all flags to their default values
Console
In the Google Cloud console ,
select the project that contains the Cloud SQL instance for which you want to clear all flags.
Open the instance and click Edit .
Open the Database flags section.
Click the X next to all of the flags shown.
Click Save to save your changes.
gcloud
Clear all flags to their default values on an instance:
gcloud sql instances patch INSTANCE_NAME \
--clear-database-flags
You are prompted to confirm that the instance will be restarted.
REST v1
To clear all flags for an existing instance:
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
"databaseFlags": []
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
To clear all flags for an existing instance:
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
"databaseFlags": []
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
View current values of database flags
To view all current values of the MySQL system variables, log into
your instance with the mysql client and enter the following statement:
SHOW VARIABLES ;
Note that you can change the value only for supported flags (as listed below).
Determine which database flags have been set for an instance
To see which flags have been set for a Cloud SQL instance:
Console
In the Google Cloud console ,
select the project that contains the Cloud SQL instance for which you want to see the database flags that have been set.
Select the instance to open its Instance Overview page.
The database flags that have been set are listed under the
Database flags section.
gcloud
Get the instance state:
gcloud sql instances describe INSTANCE_NAME
In the output, database flags are listed under the settings as
the collection databaseFlags . For more information
about the representation of the flags in the output, see
Instances Resource Representation .
REST v1
To list flags configured for an instance:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"settings":
{
"authorizedGaeApplications": [],
"tier": " machine-type ",
"kind": "sql#settings",
"availabilityType": "REGIONAL",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration":
{
"privateNetwork": "projects/ project-id /global/networks/default",
"authorizedNetworks": [],
"ipv4Enabled": false
},
"locationPreference":
{
"zone": " zone ",
"kind": "sql#locationPreference"
},
"databaseFlags": [
{
"name": "general_log",
"value": "on"
}
],
"dataDiskType": "PD_SSD",
"maintenanceWindow":
{
"kind": "sql#maintenanceWindow",
"hour": 0,
"day": 0
},
"backupConfiguration":
{
"startTime": "03:00",
"kind": "sql#backupConfiguration",
"enabled": true,
"binaryLogEnabled": true
},
"settingsVersion": "54",
"storageAutoResizeLimit": "0",
"storageAutoResize": true,
"dataDiskSizeGb": "10"
}
}
In the output, look for the databaseFlags field.
REST v1beta4
To list flags configured for an instance:
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
Response
{
"settings":
{
"authorizedGaeApplications": [],
"tier": " machine-type ",
"kind": "sql#settings",
"availabilityType": "REGIONAL",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration":
{
"privateNetwork": "projects/ project-id /global/networks/default",
"authorizedNetworks": [],
"ipv4Enabled": false
},
"locationPreference":
{
"zone": " zone ",
"kind": "sql#locationPreference"
},
"databaseFlags": [
{
"name": "general_log",
"value": "on"
}
],
"dataDiskType": "PD_SSD",
"maintenanceWindow":
{
"kind": "sql#maintenanceWindow",
"hour": 0,
"day": 0
},
"backupConfiguration":
{
"startTime": "03:00",
"kind": "sql#backupConfiguration",
"enabled": true,
"binaryLogEnabled": true
},
"settingsVersion": "54",
"storageAutoResizeLimit": "0",
"storageAutoResize": true,
"dataDiskSizeGb": "10"
}
}
In the output, look for the databaseFlags field.
Flags managed by Cloud SQL
Cloud SQL adjusts certain system flags depending on the instance machine
type.
innodb_buffer_pool_instances
1 for db-f1-micro and db-g1-small.
1 if RAM 2 if 7.5 GB 4 if 13 GB 8 if RAM >= 26 GB.
Supported flags
The flags supported in Cloud SQL are the most commonly requested flags for
MySQL. Flags not mentioned below are not supported.
For a given flag, Cloud SQL might support a different value or range
from the corresponding MySQL parameter or option.
The flags apply to all versions of MySQL supported by Cloud SQL
except where noted.
A | B | C | D | E | F | G | H | I | L | M | N | O | P | Q | R | S | T | U | W
Cloud SQL Flag
Type Acceptable Values and Notes
Restart Required?
activate_all_roles_on_login
boolean on | off
default: off
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
autocommit
boolean on | off
default: on
No
auto_increment_increment
integer 1 ... 65535
No
auto_increment_offset
integer 1 ... 65535
No
automatic_sp_privileges
boolean on | off
default: on
No
back_log
integer 1 ... 65535
default: max_connections
Note: The max_connections flag
enables the permitted backlog to
adjust to the maximum permitted number of simultaneous client
connections.
Yes
binlog_cache_size
integer 4096 ... 9223372036854775807
No
binlog_expire_logs_seconds
integer 0 or 86400 (1 day) ... 4294967295 (max value) Default is 86400, which equals 1 day.
See the
Tips
section for more information about this flag.
No
binlog_group_commit_sync_delay
0 ... 1000000
Supported in MySQL 5.7 and later
Default is 0 .
No
binlog_group_commit_sync_no_delay_count
0 ... 1000000
Supported in MySQL 5.7 and later
Default is 0 .
No
binlog_gtid_simple_recovery
boolean on | off
default: on
Yes
binlog_order_commits
boolean on | off
default: on
See the
Tips
section for more information about this flag.
No
binlog_row_image
enumeration full (default), minimal , or noblob
No
binlog_row_metadata
enumeration full or minimal (default)
No
binlog_row_value_options
string PARTIAL_JSON
No
binlog_rows_query_log_events
boolean on | off
default: off
No
binlog_stmt_cache_size
4096 ... 9223372036854775807
No
binlog_transaction_dependency_history_size
integer
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
No
binlog_transaction_dependency_tracking
enumeration
For information about how to use this flag and its acceptable values,
see Configuring parallel replication . This flag is not supported in MySQL 8.4.
No
block_encryption_mode
string aes-keylen-mode
default: aes-128-ECB
Note: This flag
takes a value in aes-keylen-mode format, where keylen
is the key length (in bits) and mode is the encryption mode.
The value isn't case-sensitive.
Allowed keylen values are 128 , 192 ,
and 256 .
Allowed mode values are ECB , CBC ,
CFB1 , CFB8 , CFB128 , and
OFB .
No
bulk_insert_buffer_size
integer 0 ... 4294967295
default: 8388608
No
collation_connection
string
default:
MySQL 8.0 and later - utf8mb4_0900_ai_ci
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
collation_server
string
default:
MySQL 5.7 - utf8_general_ci
MySQL 8.0 and later - utf8mb4_0900_ai_ci
Note: The collation_server flag
should always be set to a value that is compatible with the character_set_server .
No
character_set_client
string
default:
MySQL 5.7: utf8
MySQL 8.0 and later: utf8mb4
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
character_set_connection
string
default:
MySQL 5.7: utf8
MySQL 8.0 and later: utf8mb4
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
character_set_results
string utf8 or
utf8mb4
default:
MySQL 5.7: utf8
MySQL 8.0 and later: utf8mb4
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
character_set_server
string utf8 or
utf8mb4
(recommended)
Yes
check_proxy_users
boolean on | off
default: off
No
cloudsql_allow_analyze_table
boolean on | off
default: off
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
cloudsql_avoid_parse_session_logging
boolean on | off
default: off
No
cloudsql_iam_authentication
boolean on | off
default: off
Supported in MySQL 5.7 and later for Cloud SQL.
No
cloudsql_ignore_innodb_encryption
boolean on | off
default: off
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
cloudsql_mysql_audit_data_masking_cmds
string "" , dql , dml , ddl , dcl , show , call , create_udf , drop_function , create_procedure , create_function , drop_procedure , alter_procedure , alter_function , create_trigger , drop_trigger , create_event , alter_event , drop_event , create_db , drop_db , alter_db , create_user , drop_user , rename_user , alter_user , create_table , create_index , alter_table , drop_table , drop_index , create_view , drop_view , rename_table , update , insert , insert_select , delete , truncate , replace , replace_select , delete_multi , update_multi , load , select , call_procedure , connect ,
disconnect , grant , revoke , revoke_all , show_triggers , show_create_proc , show_create_func , show_procedure_code , show_function_code , show_create_event , show_events , show_create_trigger , show_grants , show_binlog_events , show_relaylog_events
default: create_user , alter_user ,
grant , and update
No
cloudsql_mysql_audit_data_masking_regex
string max_string_length: 2048
default: Click here .
No
cloudsql_mysql_audit_log_write_period
integer 0...5000 milliseconds
default: 500 milliseconds
No
cloudsql_mysql_audit_max_query_length
integer -1...1073741824
default: -1
No
cloudsql_vector
boolean on | off
default: off
Note: The flag is supported in MySQL 8.0.36 and later for Cloud SQL.
Yes
cloudsql_vector_iterative_filtering
boolean
default: off
Note: The flag is supported in MySQL 8.0.36 and later for Cloud SQL.
No
cloudsql_vector_iterative_filtering_max_neighbors
integer 10...1000
default: 500
Note: The flag is supported in MySQL 8.0.36 and later for Cloud SQL.
No
cloudsql_vector_max_mem_size
integer 1073741824...innodb_buffer_pool_size/2
default: 1073741824 in bytes
Note: The flag is supported in MySQL 8.0.36 and later for Cloud SQL.
Yes
completion_type
enumeration NO_CHAIN (default),
CHAIN , or RELEASE
No
concurrent_insert
enumeration NEVER , AUTO
(default), or ALWAYS
No
connect_timeout
integer 2 ... 31536000
default: 10
No
connection_memory_chunk_size
integer 0 ... 536870912
Default:
MySQL 8.0.28 to 8.0.33: 8912
MySQL 8.0.34 and later: 8192
Note : The flag is supported in MySQL 8.0.28 and later
for Cloud SQL.
No
connection_memory_limit
integer 2097152 ... 9223372036854775807
Note : The flag is supported in MySQL 8.0.28 and later
for Cloud SQL.
No
cte_max_recursion_depth
integer 0 ... 4294967295
default: 1000
No
default_authentication_plugin
string mysql_native_password|caching_sha2_password
Note : This flag is supported in MySQL 8.0
for Cloud SQL only. The flag is not supported in MySQL 8.4.
Yes
default_password_lifetime
integer 0...65535
default: 0
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
default_time_zone
string There are two ways to specify timezones: as timezone
offsets and timezone names. For example, +00:00 is the
timezone offset for London (which is in the UTC timezone), and
Europe/London is its timezone name.
You use values to specify timezone offsets, from -12:59 to +13:00 . Leading zeros are required.
When using timezone names, automatic adjustment to daylight saving time is supported. When using timezone offsets, it isn't supported. See a list of timezone names that Cloud SQL for MySQL supports. You must update this flag manually, on the primary instance and on all read replicas, to account for it.
To set the timezone without causing a restart of the Cloud SQL instance, use the set time_zone= timezone_offset or timezone_name command with the init_connect flag.
Yes
default_tmp_storage_engine
string INNODB|MEMORY
default: INNODB
No
default_week_format
integer 0 ... 7
default: 0
No
delay_key_write
enumeration OFF , ON (default),
or ALL
No
disconnect_on_expired_password
boolean on | off
default: on
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
Yes
div_precision_increment
integer 0 ... 30
default: 4
No
end_markers_in_json
boolean on | off
default: off
No
eq_range_index_dive_limit
integer 0 ... 2147483647
No
event_scheduler
boolean on | off
If you are using the Event Scheduler, configure your
instance with an
activation policy of ALWAYS to ensure that scheduled events run.
See the
Tips
section for more information about this flag.
No
expire_logs_days
integer 0 ... 99 Default is 0, which means no automatic removal.
Note : This flag is not supported in MySQL 8.4.
Use binlog_expire_logs_seconds instead. See the
Tips
section for more information about this flag.
No
explicit_defaults_for_timestamp
boolean on | off
Note: The flag only requires a restart for MySQL 5.6.x or earlier.
No
flush_time
integer 0 ... 31536000
default: 0
No
foreign_key_checks
boolean on | off
default: on
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
ft_max_word_len
integer 10 ... 252
Yes
ft_min_word_len
integer 1 ... 16
Yes
ft_query_expansion_limit
integer 0 ... 1000
Yes
ft_stopword_file
string
Yes
general_log
boolean on | off
See the Tips section for more information about general logs.
No
generated_random_password_length
integer 5-255
default: 20
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
global_connection_memory_limit
integer 16777216 ... 9223372036854775807
Note : The flag is supported in MySQL 8.0.28 and later
for Cloud SQL.
No
global_connection_memory_tracking
boolean on | off
Default: off
Note : The flag is supported in MySQL 8.0.28 and later
for Cloud SQL.
No
group_concat_max_len
integer 4 ... 17179869184
No
gtid_executed_compression_period
integer 0 ... 4294967295
default (up to version 8.0.22): 1000
default (version 8.0.23+): 0
No
histogram_generation_max_mem_size
integer 1000000 ... 4294967295
default: 20000000
No
init_connect
string
No
innodb_adaptive_hash_index
boolean on | off
No
innodb_adaptive_hash_index_parts
integer 1 ... 512
Yes
innodb_adaptive_max_sleep_delay
integer 0 ... 1000000
No
innodb_autoextend_increment
integer 1 ... 1000
No
innodb_autoinc_lock_mode
integer 0 ... 2
Yes
innodb_buffer_pool_chunk_size
integer 1048576 ... (innodb_buffer_pool_size/innodb_buffer_pool_instances)
This flag value is dependent on innodb_buffer_pool_size
and innodb_buffer_pool_instances . MySQL can auto-tune the
value of innodb_buffer_pool_chunk_size based on these two
flags.
Yes
innodb_buffer_pool_dump_pct
integer 1 ... 100
Default: 25
No
innodb_buffer_pool_dump_at_shutdown
boolean on | off
No
innodb_buffer_pool_dump_now
boolean on | off
See the Tips
section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
innodb_buffer_pool_instances
integer 1 ... 64
Yes
innodb_buffer_pool_load_abort
boolean on | off
See the Tips
section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
innodb_buffer_pool_load_at_startup
boolean on | off
Yes
innodb_buffer_pool_load_now
boolean on | off
See the Tips
section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
innodb_buffer_pool_size
integer
Setting this flag for MySQL 5.6 requires a restart. See the
Tips section for
more information about this flag.
No
innodb_change_buffer_max_size
integer 0 ... 50
No
innodb_change_buffering
string Options: none ,
inserts , deletes , changes ,
purges , all .
No
innodb_checksum_algorithm
string Options: crc32 ,
strict_crc32 , innodb ,
strict_innod , none , strict_none .
No
innodb_cloudsql_managed_buffer_pool
boolean on | off
Default: off
( Preview )
No
innodb_cloudsql_managed_buffer_pool_threshold_pct
integer 50 ... 99
Default: 95
( Preview )
No
innodb_cloudsql_optimized_write
boolean
This flag is available only for instances with Cloud SQL Enterprise Plus edition.
For more information about this flag, see the
Tips section.
Yes
innodb_cmp_per_index_enabled
boolean on | off
No
innodb_commit_concurrency
integer 0 ... 1000
Yes
innodb_compression_failure_threshold_pct
integer 0 ... 100
No
innodb_compression_level
integer 0 ... 9
No
innodb_compression_pad_pct_max
integer 0 ... 75
No
innodb_concurrency_tickets
integer 1 ... 4294967295
No
innodb_deadlock_detect
boolean on | off
Supported in MySQL 5.7 and later.
Default: on
No
innodb_disable_sort_file_cache
boolean on | off
No
innodb_doublewrite_batch_size
integer 0 ... 256
Default: 0
Yes
innodb_doublewrite_files
integer 2 ... 128
Yes
innodb_doublewrite_pages
integer 4 ... 512
Default: 64
Yes
innodb_file_per_table
boolean on | off
See the Tips section for more information about this flag.
No
innodb_fill_factor
integer 10 ... 100
No
innodb_flush_log_at_timeout
double 0.0001 ... 2700
Default: 1
Supported in MySQL 5.7
and later.
See the Tips section for more information about this flag.
No
innodb_flush_log_at_trx_commit
integer 1, 2
Default: 1
If you promote a replica with this flag enabled,
the flag is automatically removed causing the promoted replica to have full durability
by default. To use this flag with a promoted replica, you can update the flag to
the replica after promotion.
Note: If you change the default value for the innodb_flush_log_at_trx_commit
flag on an HA-enabled instance, then the instance loses SLA coverage because durability might decrease.
See the Tips section for more information about this flag.
No
innodb_flush_method
string Options: fsync ,
O_DIRECT , O_DSYNC
Default: O_DIRECT
Yes
innodb_flush_neighbors
enumeration 0 ... 2
Default values:
MySQL 5.6: 0
MySQL 5.7 and later: 2
No
innodb_flush_sync
boolean on | off
No
innodb_flushing_avg_loops
integer 1 ... 1000
Default: 30
No
innodb_fsync_threshold
integer 0 ... 9223372036854775807
Default: 0
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
innodb_ft_aux_table
string
See the Tips section for more information about this flag.
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
Yes
innodb_ft_cache_size
integer 1600000 ... 80000000
Yes
innodb_ft_enable_diag_print
boolean on | off
No
innodb_ft_enable_stopword
boolean on | off
No
innodb_ft_max_token_size
integer 10 ... 252
Yes
innodb_ft_min_token_size
integer 0 ... 16
Yes
innodb_ft_num_word_optimize
integer 1000 ... 10000
No
innodb_ft_result_cache_limit
integer 1000000 ... 4294967295
No
innodb_ft_server_stopword_table
string
No
innodb_ft_sort_pll_degree
integer 1 ... 32
Yes
innodb_ft_total_cache_size
integer 32000000 ... 1600000000
Yes
innodb_ft_user_stopword_table
string
No
innodb_idle_flush_pct
integer 0 ... 100
Default: 100
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
innodb_io_capacity
integer 100 ... 100000
Default: 5000
To learn more about configuring the disk performance, see the E2 VMs table in
Configure disks to meet performance requirements.
No
innodb_io_capacity_max
integer 100 ... 100000
Default: 10000
To learn more about configuring the disk performance, see the E2 VMs table in
Configure disks to meet performance requirements.
No
innodb_large_prefix
boolean on | off
Supported only in MySQL 5.6.
No
innodb_lock_wait_timeout
integer 1 ... 1073741824
No
innodb_log_buffer_size
integer 262144 ... 4294967295
Yes
innodb_log_checksums
boolean on | off
default: on
No
innodb_log_file_size
integer
MySQL 5.6: 1048576 ... 274877906944
MySQL 5.7 and later: 4194304 ... 274877906944
Yes
For more information about this flag, see the Tips section.
innodb_log_spin_cpu_abs_lwm
integer 0 ... 4294967295
default: 80
No
innodb_log_spin_cpu_pct_hwm
integer 0 ... 100
default: 50
No
innodb_log_wait_for_flush_spin_hwm
integer 0 ... 4294967295
default: 400
No
innodb_log_write_ahead_size
integer 512 ... 65536
default: 8192
No
innodb_lru_scan_depth
integer 100 ... 9223372036854775807
No
innodb_max_dirty_pages_pct
float 0 ... 99.99
default: 90
No
innodb_max_dirty_pages_pct_lwm
float 0 ... 99.99
default: 10
No
innodb_max_purge_lag
integer 0 ... 4294967295
default: 0
No
innodb_max_undo_log_size
integer 10485760 ... 9223372036854775807
default: 1073741824
No
innodb_max_purge_lag_delay
integer 0 ... 10000000
default: 0
No
innodb_monitor_disable
string
No
innodb_monitor_enable
string
No
innodb_monitor_reset
string counter , module , pattern , all
No
innodb_monitor_reset_all
enumeration Valid values: counter , module , pattern , all
No
innodb_old_blocks_pct
integer 5 ... 95
No
innodb_old_blocks_time
integer 0 ... 4294967295
No
innodb_online_alter_log_max_size
integer 65536 ... 9223372036854775807
No
innodb_open_files
integer 100 ... 2147483647
default: MySQL 5.7: 2000
MySQL 8.0 and later: 4000
≥ 8.0.28 : No ≤ 8.0.27 : Yes
innodb_optimize_fulltext_only
boolean on | off
No
innodb_page_cleaners
integer 1 ... 64
Supported in MySQL 5.7 and later.
For MySQL 5.7 and 8.0, the default is 4 .
For MySQL 8.4, the default is equal to the value
of configured for the innodb_buffer_pool_instances flag.
Yes
innodb_parallel_read_threads
integer 1 ... 256
default: 4
No
innodb_print_all_deadlocks
boolean on | off
default: off
No
innodb_print_ddl_logs
boolean on | off
No
innodb_purge_batch_size
integer 1 ... 5000
default: 300
No
innodb_purge_rseg_truncate_frequency
integer 1 ... 128
default: 128
No
innodb_purge_threads
integer 1 ... 32
Default values:
MySQL 5.6: 1
MySQL 5.7 and later: 4
Yes
innodb_random_read_ahead
boolean on | off
No
innodb_read_ahead_threshold
integer 0 ... 64
No
innodb_read_io_threads
integer
1 ... 64
Yes
innodb_redo_log_capacity
integer
MySQL 8.0.33 and earlier: 8388608 (8 MB) ... 137438953472 (128 GB)
MySQL 8.0.34 and later: 8388608 (8 MB) ... 549755813888 (512 GB)
For more information about this flag, see the Tips section.
No
innodb_replication_delay
integer 0 ... 4294967295
No
innodb_rollback_on_timeout
boolean on | off
Yes
innodb_rollback_segments
integer 1 ... 128
No
innodb_segment_reserve_factor
float .03 ... 40
default: 12.5
No
innodb_sort_buffer_size
integer 65536 ... 67108864
Yes
innodb_spin_wait_delay
integer
MySQL 5.7: 0 ... 1000000
MySQL 8.0.13+: 0 ... 1000
default: 6
No
innodb_stats_auto_recalc
boolean on | off
No
innodb_stats_include_delete_marked
boolean on | off
default: off
No
innodb_stats_method
enumeration nulls_equal | nulls_unequal | nulls_ignored
No
innodb_stats_on_metadata
boolean on | off
No
innodb_stats_persistent
boolean on | off
No
innodb_stats_persistent_sample_pages
integer 1 ... 9223372036854775807
No
innodb_stats_sample_pages
integer 1 ... 9223372036854775807
No
innodb_stats_transient_sample_pages
integer 1 ... 9223372036854775807
No
innodb_status_output
boolean on | off
No
innodb_status_output_locks
boolean on | off
No
innodb_strict_mode
boolean on | off
No
innodb_sync_array_size
1 ... 1024
Default is 1 .
Yes
innodb_sync_spin_loops
integer 0 ... 4294967295
default: 30
No
innodb_table_locks
boolean on | off
default: on
No
innodb_thread_concurrency
integer 0 ... 1000
No
innodb_thread_sleep_delay
integer 0 ... 1000000
No
innodb_undo_log_truncate
boolean on | off
default: on
No
innodb_use_native_aio
boolean on | off
default: on
Yes
innodb_write_io_threads
integer 1 ... 64
Yes
interactive_timeout
integer 1 ... 31536000
No
internal_tmp_disk_storage_engine
enumeration INNODB | MYISAM
Default: INNODB
Note : This flag is supported in MySQL 5.7
for Cloud SQL only.
No
internal_tmp_mem_storage_engine
enumeration MEMORY , TempTable
Note : The flag is supported in MySQL 8.0 and later
for Cloud SQL. .
No
join_buffer_size
integer 128 ... 9223372036854775807
No
keep_files_on_create
boolean on | off
default: off
No
key_buffer_size
integer 4096 ... 4294967295
default: 8388608
No
key_cache_age_threshold
integer 100 ... 9223372036854775807
default: 300
No
key_cache_block_size
integer 512 ... 16384
default: 1024
No
key_cache_division_limit
integer 1 ... 100
default: 100
No
lc_times_names
string en_US | cs_CZ | da_DK | nl_NL | et_EE | fr_FR | de_DE | el_GR | hu_HU | it_IT | ja_JP | ko_KR | no_NO | nb_NO | pl_PL | pt_PT | ro_RO | ru_RU | sr_RS | sk_SK | es_ES | sv_SE | uk_UA
default: en_US
No
local_infile
boolean on | off
No
lock_wait_timeout
integer 1 ... 31536000
No
log_bin_trust_function_creators
boolean on | off
No
log_output
set FILE | TABLE | NONE
No
log_error_verbosity
integer 1 ... 3
default:
MySQL 5.7: 3
MySQL 8.0 and later: 2
No
log_queries_not_using_indexes
boolean on | off
No
log_slow_admin_statements
boolean on | off
default: off
No
log_slow_extra
boolean on | off
default: off
No
log_slow_replica_statements
boolean
on | off
Default: off
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use the log_slow_slave_statements flag. For more information, see Aliased flags .
No
log_slow_slave_statements
boolean
on | off
Default: off
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the log_slow_replica_statements flag. For more information, see Aliased flags .
No
log_throttle_queries_not_using_indexes
integer 0 ... 9223372036854775807
No
log_timestamps
string "UTC | SYSTEM"
default: UTC
No
long_query_time
float 0 ... 30000000
Cloud SQL provides the ability to set this flag to less than 1 if needed.
If the log_queries_not_using_indexes flag is also
enabled, you may see queries with less than the time specified here.
No
lower_case_table_names 5.7 | 8.0
integer 0 or 1
Default: 0
If you use the default value of 0 for this flag,
table and database names are
case sensitive. When set to 1 ,
table and database names are case insensitive.
For MySQL 5.7 instances, you can change the value of this flag at any
time. If you do, then make sure that you understand how the change affects your
existing tables and databases.
For MySQL 8.0 and later instances, you can set the value of this flag
to a desired value only while an instance is being created. After you set this value,
you can't change it. Also, for an existing instance, you can't change the value of this flag.
When creating read replicas for MySQL 5.7, MySQL 8.0, or MySQL 8.4 instances,
the replica inherits this flag value from the primary.
Yes
mandatory_roles
string role name
default: empty string
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
master_verify_checksum
boolean
on | off
Default: off
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the source_verify_checksum flag. For more information, see Aliased flags .
No
max_allowed_packet
integer 16384 ... 1073741824
This value must be a multiple of 1024, if sql_mode=TRADITIONAL or sql_mode=STRICT_ALL_TABLES.
No
max_binlog_cache_size
integer 4096 ... 4294967296
default: 4294967296
No
max_binlog_size
integer 4096 ... 1073741824
No
max_binlog_stmt_cache_size
integer 4096 ... 4294967296
default: 4294967296
No
max_connect_errors
integer 1 ... 9223372036854775807
default: 100
No
max_connections
integer 1 ... 100000
No
max_digest_length
integer 0 ... 1048576
Yes
max_error_count
integer 0 ... 65535
default:
MySQL 5.7 or lower: 64
MySQL 8.0 and later: 1024
No
max_execution_time
integer 0 ... 9223372036854775807
No
max_heap_table_size
integer 16384 ... 67108864
See the Tips section for more information about this flag.
No
max_join_size
integer 16 ... 9223372036854775807
No
max_length_for_sort_data
integer 4 ... 8388608
No
max_points_in_geometry
integer 3 ... 1048576
No
max_prepared_stmt_count
integer 0 ... 1048576
No
max_seeks_for_key
integer 1 ... 9223372036854775807
No
max_sort_length
integer 4 ... 8388608
No
max_sp_recursion_depth
integer 0 ... 255
No
max_user_connections
integer 0 ... 4294967295
No
max_write_lock_count
integer 1 ... 9223372036854775807
No
min_examined_row_limit
integer 0 ... 4294967295
default: 0
No
myisam_data_pointer_size
integer 2...7
default: 6
No
myisam_max_sort_file_size
integer 0...9223372036853727232
default: 9223372036853727232
No
myisam_mmap_size
integer 7...9223372036854775807
default: 9223372036854775807
Yes
myisam_sort_buffer_size
integer 4096...4294967295
default: 8388608
No
myisam_stats_method
string "nulls_unequal, nulls_equal, nulls_ignored"
default: nulls_unequal
No
myisam_use_mmap
boolean on | off
default: off
No
mysql_native_password_proxy_users
boolean on | off
default: off
No
net_buffer_length
integer 1024 ... 1048576
default: 16384
No
net_read_timeout
integer 30 ... 4294967295
No
net_retry_count
integer 10 ... 4294967295
No
net_write_timeout
integer 60 ... 4294967295
No
ngram_token_size
integer 1 ... 10
default: 2
Yes
optimizer_prune_level
integer 0 ... 1
No
optimizer_search_depth
integer 0 ... 62
No
optimizer_switch
multi-value repeated string
See the Tips section for more information about multi-value flags.
No
optimizer_trace
multi-value repeated string enabled=on , enabled=off , one_line=on , one_line=off
See the Tips section for more information about multi-value flags.
No
optimizer_trace_features
multi-value repeated string
See the Tips section for more information about multi-value flags.
No
optimizer_trace_max_mem_size
integer 0 ... 9223372036854775807
No
optimizer_trace_offset
integer -9223372036854775808 ... 9223372036854775807
No
parser_max_mem_size
integer 10000000 ... 9223372036854775807
No
password_history
integer 0-4294967295
default: 0
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
password_require_current
boolean on | off
default: off
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
password_reuse_interval
integer 0-4294967295
default: 0
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
performance_schema
boolean on | off
default: off for MySQL 5.6, 5.7
default: off for MySQL 8.0 and later
instances with RAM less than 12 GB
default: on for MySQL 8.0 and later
instances with RAM greater than or equal to 12 GB
See Tips
section for more information about performance_schema flags.
Yes
performance_schema_accounts_size
integer -1 ... 1048576
See Tips
section for more information about performance_schema flags.
Yes
performance_schema_digests_size
integer -1 ... 1048576
See Tips
section for more information about performance_schema flags.
Yes
performance_schema_error_size
integer 0 ... 1048576
Yes
performance_schema_events_stages_history_long_size
integer -1 ... 1048576
Yes
performance_schema_events_stages_history_size
integer -1 ... 1024
See Tips
section for more
information about performance_schema flags.
Yes
performance_schema_events_statements_history_long_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_events_statements_history_size
integer -1 ... 1024
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_events_transactions_history_long_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_events_transactions_history_size
integer -1 ... 1024
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_events_waits_history_long_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_events_waits_history_size
integer -1 ... 1024
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_hosts_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_cond_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_cond_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_digest_length
integer 0 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_digest_sample_age
integer 0 ... 1048576
default: 60
No
performance_schema_max_file_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_file_handles
integer 0 ... 1048576
See Tips section for more
information about p performance_schema flags.
Yes
performance_schema_max_file_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_index_stat
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_memory_classes
integer 0 ... 1024
See Tips
section for more information about performance_schema flags.
Yes
performance_schema_max_metadata_locks
integer -1 ... 104857600
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_mutex_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_mutex_instances
integer -1 ... 104857600
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_prepared_statements_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_program_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_rwlock_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_rwlock_instances
integer -1 ... 104857600
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_socket_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_socket_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_sql_text_length
integer 0 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_stage_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_statement_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_statement_stack
integer 1 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_table_handles
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_table_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_table_lock_stat
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_thread_classes
integer 0 ... 256
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_max_thread_instances
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_session_connect_attrs_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_setup_actors_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_setup_objects_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
performance_schema_show_processlist
boolean on | off
Default: off
Note: The flag is supported in MySQL 8.0.26 and later
for Cloud SQL.
No
performance_schema_users_size
integer -1 ... 1048576
See Tips section for more
information about performance_schema flags.
Yes
preload_buffer_size
integer 1024 ... 1073741824
default: 32768
No
query_alloc_block_size
integer 1024 ... 4294967295
No
query_cache_limit
integer 0 ... 223338299392
This flag is not available for MySQL 8.0 and later as the query cache is deprecated as of MySQL 5.7.20, and is removed in MySQL 8.0.
No
query_cache_min_res_unit
integer 0 ... 9223372036854775807
This flag is not available for MySQL 8.0 and later as the query cache is deprecated as of MySQL 5.7.20, and is removed in MySQL 8.0.
No
query_cache_size
integer 0 ... 223338299392
This flag is not available for MySQL 8.0 and later as the query cache is deprecated as of MySQL 5.7.20, and is removed in MySQL 8.0.
No
query_cache_type
enumeration 0 ... 2
This flag is not available for MySQL 8.0 and later as the query cache is deprecated as of MySQL 5.7.20, and is removed in MySQL 8.0.
Yes
query_cache_wlock_invalidate
boolean on | off
This flag is not available for MySQL 8.0 and later as the query cache is deprecated as of MySQL 5.7.20, and is removed in MySQL 8.0.
No
query_prealloc_size
integer 8192 ... 9223372036854775807
No
range_alloc_block_size
integer 4096 ... 4294967295
No
range_optimizer_max_mem_size
integer 0 ... 9223372036854775807
No
read_buffer_size
integer 8192 ... 2147483647
No
read_only
boolean on | off
Has no effect for replicas.
No
read_rnd_buffer_size
integer 1 ... 2147483647
No
regexp_stack_limit
integer 0 ... 2147483647
No
regexp_time_limit
integer 0 ... 2147483647
default: 32
No
replica_checkpoint_group
integer 32 ... 524280
Default is 512.
This flag doesn't affect replicas that don't have multithreading
enabled.
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use the slave_checkpoint_group flag. For more information, see Aliased flags .
No
replica_checkpoint_period
integer 1 ... 4294967295
Default is 300.
The unit is milliseconds.
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_checkpoint_period flag. For more information, see Aliased flags .
No
replica_compressed_protocol
boolean on | off
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_compressed_protocol flag. For more information, see Aliased flags .
No
replica_net_timeout
integer
1 ... 31536000
The unit is seconds.
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_net_timeout flag. For more information, see Aliased flags .
No
replica_parallel_type
enumeration DATABASE , LOGICAL_CLOCK
Default:
MySQL 8.0.26 or earlier: DATABASE
MySQL 8.0.27 or later: LOGICAL_CLOCK
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_parallel_type flag. For more information, see Aliased flags .
No
replica_parallel_workers
integer
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_parallel_workers flag. For more information, see Aliased flags .
No
replica_pending_jobs_size_max
integer
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_pending_jobs_size_max flag. For more information, see Aliased flags .
No
replica_preserve_commit_order
boolean
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_preserve_commit_order flag. For more information, see Aliased flags .
No
replica_skip_errors
string
Default: OFF
For more information about this flag, see the
Tips
section.
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_skip_errors flag. For more information, see Aliased flags .
Yes
replica_sql_verify_checksum
boolean
on | off
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_sql_verify_checksum flag. For more information, see Aliased flags .
No
replica_transaction_retries
integer
0 ... 9223372036854775807
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use
the slave_transaction_retries flag. For more information, see Aliased flags .
No
replica_type_conversions
String
values: ALL_LOSSY , ALL_NON_LOSSY , ALL_SIGNED , ALL_UNSIGNED
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use the slave_type_conversions flag. For more information, see Aliased flags .
No
replicate_do_db
string
For more information about how to use this flag, see the Replication filters section.
No
replicate_do_table
string
For more information about how to use this flag, see the Replication filters section.
No
replicate_ignore_db
string
For more information about how to use this flag, see the Replication filters section.
No
replicate_ignore_table
string
For more information about how to use this flag, see the Replication filters section.
No
replicate_wild_do_table
string
For more information about how to use this flag, see the Replication filters section.
No
replicate_wild_ignore_table
string
For more information about how to use this flag, see the Replication filters section.
No
rpl_read_size
integer 8192 ... 4294959104
default: 8192
No
schema_definition_cache
integer 256 ... 524288
default: 256
No
session_track_gtids
string
OFF | OWN_GTID | ALL_GTIDS
default: OFF
No
session_track_schema
boolean
on | off
default: on
No
session_track_state_change
boolean
on | off
default: off
No
session_track_transaction_info
string
OFF | STATE | CHARACTERISTICS
default: OFF
No
sha256_password_proxy_users
boolean on | off
default: off
No
show_create_table_verbosity
boolean on | off
default: off
No
show_compatibility_56
boolean on | off
Supported in MySQL 5.7 only.
No
skip_character_set_client_handshake
boolean on | off
default: off
Yes
skip_show_database
flag on | off
Yes
slave_checkpoint_group
integer 32 ... 524280
Default is 512.
This flag doesn't affect replicas that don't have multithreading
enabled.
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_checkpoint_group flag. For more information, see Aliased flags .
No
slave_checkpoint_period
integer 1 ... 4294967295
Default is 300.
The unit is milliseconds.
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_checkpoint_period flag. For more information, see Aliased flags .
No
slave_compressed_protocol
boolean on | off
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_compressed_protocol flag. For more information, see Aliased flags .
No
slave_net_timeout
integer
1 ... 31536000
The unit is seconds.
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_net_timeout flag. For more information, see Aliased flags .
No
slave_parallel_type
enumeration DATABASE , LOGICAL_CLOCK
Default:
MySQL 8.0.26 or earlier: DATABASE
MySQL 8.0.27 or later: LOGICAL_CLOCK
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_parallel_type flag. For more information, see Aliased flags .
No
slave_parallel_workers
integer
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_parallel_workers flag. For more information, see Aliased flags .
No
slave_preserve_commit_order
boolean
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_preserve_commit_order flag. For more information, see Aliased flags .
No
slave_pending_jobs_size_max
integer
For information about how to use this flag and its acceptable values,
see Configuring parallel replication .
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_pending_jobs_size_max flag. For more information, see Aliased flags .
No
slave_skip_errors
string
Default: OFF
For more information about this flag, see the
Tips
section.
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_skip_errors flag. For more information, see Aliased flags .
Yes
slave_sql_verify_checksum
boolean
on | off
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_sql_verify_checksum flag. For more information, see Aliased flags .
No
slave_transaction_retries
integer
0 ... 9223372036854775807
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_transaction_retries flag. For more information, see Aliased flags .
No
slave_type_conversions
string
values: ALL_LOSSY , ALL_NON_LOSSY , ALL_SIGNED , ALL_UNSIGNED
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the replica_type_conversions flag. For more information, see Aliased flags .
No
slow_launch_time
Integer 0 ... 31536000
Default: 2
No
slow_query_log
boolean on | off
See the Tips section for more information on slow query logs.
No
sort_buffer_size
integer 32768 ... 9223372036854775807
No
source_verify_checksum
boolean
on | off
Default: off
Note : This flag name is available for MySQL 8.0.26 and later only. For MySQL versions 8.0.18 and earlier, use the master_verify_checksum flag. For more information, see Aliased flags .
No
sql_generate_invisible_primary_key
boolean
on | off
Default: off
Note: The flag is supported in MySQL 8.0.30 and later
for Cloud SQL.
No
sql_mode
string
See the Server SQL Modes
in the MySQL documentation for allowed values, including combined modes,
such as ANSI . NO_DIR_IN_CREATE is not
supported.
Cloud SQL for MySQL doesn't support empty values for the
sql_mode flag. Instead of using an empty value, set this
flag to the
NO_ENGINE_SUBSTITUTION
mode.
If specifying a comma-separated list of modes using
gcloud CLI commands, then use the --flags-file argument.
No
sql_require_primary_key
boolean on | off
Default: off
No
sql_select_limit
integer 0...18446744073709551615
default: 18446744073709551615
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0
for Cloud SQL and later.
No
stored_program_cache
integer 16 ... 524288
No
stored_program_definition_cache
integer 256 ... 524288
Default: 256
No
sync_binlog
integer 0 ... 4294967295
The default setting of 1 enables the synchronization of the binary
log to disk before transactions are committed.
If you promote a replica with this flag enabled,
the flag is automatically removed causing the promoted replica to have full durability
by default. To use this flag with a promoted replica, you can update the flag to
the replica after promotion.
Note : Changing the default value for the sync_binlog
flag will cause the instance to lose SLA coverage as it may reduce durability of the instance's data.
See the Tips section for more information about this flag.
No
sync_master_info
integer 0 ... 4294967295
Default: 10000
This flag name is deprecated for MySQL 8.0.26 and later. Instead, use the sync_source_info flag. For more information, see Aliased flags .
No
sync_relay_log
integer 0 ... 4294967295
Default: 10000
No
sync_relay_log_info
integer 0 ... 4294967295
Default: 10000
No
sync_source_info
integer 0 ... 4294967295
Default: 10000
This flag name is only available for MySQL 8.0.26 and later. For MySQL versions 8.0.18 and earlier, use the sync_master_info flag. For more information, see Aliased flags .
No
sysdate_is_now
boolean on | off
default: off
Yes
table_definition_cache
integer 400 ... 524288
No
tablespace_definition_cache
integer 256 ... 524288
Default: 256
No
table_open_cache
integer 1 ... 524288
No
table_open_cache_instances
integer 1 ... 64
Yes
temptable_max_mmap
integer 0 ... 68719476736
Default: 1073741824
No
temptable_max_ram
integer 2097152 ... 68719476736
Default: 1073741824
No
thread_cache_size
integer 0 ... 16384
No
thread_stack
integer 131072 ... 9223372036854775807
Yes
tls_version
String
Version 5.7 to Version 8.0.27: TLSv1, TLSv1.1
Version 8.0.28 or later: TLSv1.2
Version 5.7 : Yes
Version 8.0 or later : No
tmp_table_size
integer 1024 ... 67108864
See the
Tips
section for more information about this flag.
No
transaction_alloc_block_size
integer 1024 ... 131072
No
transaction_isolation
enumeration READ-UNCOMMITTED | READ-COMMITTED | REPEATABLE-READ | SERIALIZABLE
Yes
transaction_prealloc_size
integer 1024 ... 131072
No
transaction_write_set_extraction
enumeration
For information about how to use this flag and its acceptable values,
see Configuring parallel replication . This flag is not supported in MySQL 8.4.
No
unique_checks
boolean on | off
default: on
See the Tips section for more information about this flag.
Note: The flag is supported in MySQL 8.0 and later
for Cloud SQL.
No
updatable_views_with_limit
integer 0 ... 1
No
wait_timeout
integer 1 ... 31536000
No
windowing_use_high_precision
boolean on | off
Default: on
No
Timezone names
In this section, you'll learn about the time-zone names that Cloud SQL for MySQL supports.
The table in this section displays the following:
Timezone name: The name that Cloud SQL for MySQL supports.
STD: The time-zone offset in standard time (STD).
DST: The time-zone offset in daylight savings time (DST).
Synonym names: The names for time zones that you may want to use, but they aren't supported by Cloud SQL for MySQL. If this situation occurs, then use the corresponding time-zone name.
Time-zone names are case insensitive. You can supply the time-zone name in any case. The format for the STD and DST time-zone offsets is +/-hh:mm , and the offsets are in UTC. Not all time-zone names have corresponding synonym names. If this occurs, then use the time-zone name.
time-zone name
STD
DST
Synonym names
Africa/Cairo
+02:00
+02:00
Egypt
Africa/Casablanca
+01:00
+00:00
Africa/Harare
+02:00
+02:00
Africa/Maputo
Africa/Monrovia
+00:00
+00:00
Africa/Nairobi
+03:00
+03:00
Africa/Addis_Ababa
Africa/Asmera
Africa/Dar_es_Salaam
Africa/Djibouti
Africa/Kampala
Africa/Mogadishu
Indian/Antananarivo
Indian/Comoro
Indian/Mayotte
Africa/Tripoli
+02:00
+02:00
Libya
Africa/Windhoek
+02:00
+02:00
America/Araguaina
−03:00
−03:00
America/Asuncion
−04:00
−03:00
America/Bogota
−05:00
−05:00
America/Buenos_Aires
−03:00
−03:00
America/Argentina/Buenos_Aires
America/Caracas
−04:00
−04:00
America/Chicago
−06:00
−05:00
America/Chihuahua
−07:00
−06:00
America/Ojinaga
America/Cuiaba
−04:00
−04:00
America/Denver
−07:00
−06:00
America/Shiprock
Navajo
MST7MDT
US/Mountain
America/Detroit
−05:00
−04:00
America/Fortaleza
−03:00
−03:00
America/Guatemala
−06:00
−06:00
America/Halifax
−04:00
−03:00
Canada/Atlantic
America/Los_Angeles
−08:00
−07:00
America/Manaus
−04:00
−04:00
Brazil/West
America/Matamoros
−06:00
−05:00
America/Mexico_City
−06:00
−05:00
America/Monterrey
−06:00
−05:00
America/Montevideo
−03:00
−03:00
America/New_York
−05:00
−04:00
America/Phoenix
−07:00
−07:00
US/Arizona
MST
America/Creston
America/Santiago
−04:00
−03:00
Chile/Continental
America/Sao_Paolo
−03:00
−03:00
America/Tijuana
−08:00
−07:00
Mexico/BajaNorte
America/Ensenada
America/Santa_Isabel
Asia/Amman
+02:00
+03:00
Asia/Ashgabat
+05:00
+05:00
Asia/Ashkhabad
Asia/Baghdad
+03:00
+03:00
Asia/Baku
+04:00
+04:00
Asia/Bangkok
+07:00
+07:00
Asia/Phnom_Penh
Asia/Vientiane
Asia/Beirut
+02:00
+03:00
Asia/Calcutta
+05:30
+05:30
Asia/Kolkata
Asia/Damascus
+02:00
+03:00
Asia/Dhaka
+06:00
+06:00
Asia/Dacca
Asia/Irkutsk
+08:00
+08:00
Asia/Jerusalem
+02:00
+03:00
Asia/Tel_Aviv
Israel
Asia/Kabul
+04:30
+04:30
Asia/Karachi
+05:00
+05:00
Asia/Kathmandu
+05:45
+05:45
Asia/Katmandu
Asia/Kolkata
+05:30
+05:30
Asia/Krasnoyarsk
+07:00
+07:00
Asia/Magadan
+11:00
+11:00
Asia/Muscat
+04:00
+04:00
Asia/Dubai
Asia/Novosibirsk
+07:00
+07:00
Asia/Riyadh
+03:00
+03:00
Asia/Kuwait
Antarctica/Syowa
Asia/Aden
Asia/Seoul
+09:00
+09:00
ROK
Asia/Shanghai
+08:00
+08:00
Asia/Chongqing
Asia/Chungking
Asia/Harbin
PRC
Asia/Singapore
+08:00
+08:00
Singapore
Asia/Taipei
+08:00
+08:00
ROC
Asia/Tehran
+03:30
+04:30
Iran
Asia/Tokyo
+09:00
+09:00
Japan
Asia/Ulaanbaatar
+08:00
+08:00
Asia/Ulan_Bator
Asia/Vladivostok
+10:00
+10:00
Asia/Yakutsk
+09:00
+09:00
Asia/Yerevan
+04:00
+04:00
Atlantic/Azores
−01:00
+00:00
Australia/Adelaide
+09:30
+10:30
Australia/South
Australia/Brisbane
+10:00
+10:00
Australia/Queensland
Australia/Darwin
+09:30
+09:30
Australia/North
Australia/Hobart
+10:00
+11:00
Australia/Currie
Australia/Tasmania
Australia/Perth
+08:00
+08:00
Australia/West
Australia/Sydney
+10:00
+11:00
Australia/NSW
Australia/ACT
Australia/Canberra
Brazil/East
−03:00
−03:00
America/Sao_Paulo
Canada/Newfoundland
−03:30
−02:30
America/St_Johns
Canada/Saskatchewan
−06:00
−06:00
America/Regina
Canada/Yukon
−07:00
−07:00
America/Whitehorse
Europe/Amsterdam
+01:00
+02:00
Europe/Athens
+02:00
+03:00
Europe/Dublin
+01:00
+00:00
Eire
Europe/Helsinki
+02:00
+03:00
Europe/Mariehamn
Europe/Istanbul
+03:00
+03:00
Turkey
Asia/Istanbul
Europe/Kaliningrad
+02:00
+02:00
Europe/Madrid
+01:00
+02:00
Europe/Moscow
+03:00
+03:00
W-SU
Europe/Paris
+01:00
+02:00
MET
CET
Europe/Prague
+01:00
+02:00
Europe/Bratislava
Europe/Sarajevo
+01:00
+02:00
Europe/Belgrade
Europe/Ljubljana
Europe/Podgorica
Europe/Skopje
Europe/Zagreb
Pacific/Auckland
+12:00
+13:00
NZ
Antarctica/McMurdo
Antarctica/South_Pole
Pacific/Fiji
+12:00
+13:00
Pacific/Guam
+10:00
+10:00
Pacific/Saipan
Pacific/Honolulu
−10:00
−10:00
US/Hawaii
Pacific/Johnston
HST
Pacific/Samoa
−11:00
−11:00
Pacific/Pago_Pago
US/Samoa
US/Alaska
−09:00
−08:00
America/Anchorage
America/Juneau
America/Metlakatla
America/Nome
America/Sitka
America/Yakutat
US/Central
−06:00
−05:00
America/Chicago
US/Eastern
−05:00
−04:00
America/New_York
US/East-Indiana
−05:00
−04:00
America/Indiana/Indianapolis
America/Indianapolis
America/Fort_Wayne
US/Mountain
−07:00
−06:00
America/Denver
US/Pacific
−08:00
−07:00
America/Los_Angeles
UTC
+00:00
+00:00
Etc/UTC
Etc/UCT
Etc/Universal
Etc/Zulu
Timezone tables in Cloud SQL might need refreshing with the latest data. For example, a country might shift from a DST timezone offset to an STD offset or
a country might introduce a new timezone.
For every critical service agent (CSA) release for Cloud SQL, timezone tables are refreshed with the latest data. When this happens, during the non-maintenance window, the replica instances are refreshed. Primary instances are then refreshed during the maintenance window.
You can either wait until the regular maintenance window for the CSA release or you can perform self service maintenance to refresh the timezone tables with the latest data. For more information about viewing the available maintenance versions, see Determine the target maintenance version .
Note: For MySQL 8.0 and later, the timezone tables are read-only. You can write to timezone tables for MySQL 5.6 and 5.7. However, we don't recommend that you write to, or delete from, these tables because this can cause issues with the replica instances.
Tips for working with flags
general_log, slow_query_log
To make your general or slow query logs available,
enable the corresponding flag and set the log_output flag to
FILE .
This makes the log output available using the
Logs Viewer in the Google Cloud console .
Note that Google Cloud Observability logging charges apply.
To minimize instance storage cost,
general and slow query logs on the instance disk are
rotated when the log file is older than 24 hours (and no changes have been
made within that duration) or greater than 100MB in size. Old log files are
automatically deleted after the rotation.
If the log_output is set to NONE , you can't
access the logs. If you set log_output to TABLE , the
log output is placed in a table in the mysql system database. It might consume
a considerable amount of disk space. If this table becomes large, it can
affect instance restart time or cause the instance to lose its SLA coverage.
For this reason, the TABLE option is not recommended. In
addition, the log content isn't available in
Logs Explorer and it isn't rotated. If
needed, you can truncate your log tables by using the API. For more
information, see the
instances.truncateLog reference page .
MySQL provides a more sophisticated utility for examining
and processing binary log files called mysqlbinlog . This utility is available with the MySQL Server
software. If you have a MySQL instance, then you can use
mysqlbinlog to determine your desired recovery position.
expire_logs_days, binlog_expire_logs_seconds
If you enable point-in-time recovery, the expiration period of your binary
logs is determined by the lesser of your transaction log retention period
and the values of these flags. You can use these flags to manage how long
binary logs are stored on your replicas. The expire_logs_days
flag is removed from MySQL 8.4 and later. For more information,
see the
transaction log retention page.
innodb_buffer_pool_size
The value of this flag is the size in bytes of the buffer pool. The buffer pool size must always be equal to or a multiple of the value that you get when you multiply innodb_buffer_pool_chunk_size by innodb_buffer_pool_instances . If you alter the
buffer pool size to a value that's not equal to or a multiple of
innodb_buffer_pool_chunk_size multiplied by innodb_buffer_pool_instances , then Cloud SQL adjusts the buffer pool size automatically. You can't enable this flag on instances that have fewer than
3,840 MiB of RAM.
You can't configure this flag for shared-core machine types (f1_micro and
g1_small). Changing this flag on MySQL 5.6 requires a restart.
In Cloud SQL, the default, minimum allowable, and maximum allowable
values of the innodb_buffer_pool_size flag depend on the instance's memory.
These values can be roughly calculated as a percentage of the instance's RAM.
By default, the value of this flag is typically set close to the maximum
allowable value. The maximum allowable allocation percentage increases with
instance size. The minimum allowable value is usually about 20% of the
instance's RAM.
Approximate values for this flag:
Instance RAM Range Min % Default % Max %
0 - 4.0GB of RAM ~34%
4.0GB - 7.5GB ~20% ~34% ~34%
7.5GB - 12GB ~20% ~52% ~52%
12GB - 24GB ~20% ~67% ~67%
24GB and above ~20% ~72% ~72%
Your exact values may vary. When managed buffer pool
is enabled, it makes adjustments to the innodb_buffer_pool_size that are not
reflected in Google Cloud console. To calculate the current value for your
instance, you can run the query:
show global variables like 'innodb_buffer_pool_size' ;
For reference, the minimum allowable, default, and maximum allowable values
are provided for the machine types below.
Machine type
Instance RAM (GB)
Min (GB) (% of total)
Default (GB) (% of total)
Max (GB) (% of total)
db-f1-micro
0.6
-
0.053
-
db-g1-small
1.7
-
0.625
-
db-custom-1-3840
3.75
0.875 (23%)
1.375 (37%)
1.375 (37%)
db-custom-2-7680
7.5
1.5 (20%)
4 (53%)
4 (53%)
db-custom-4-15360
15
3 (20%)
10.5 (70%)
10.5 (70%)
db-custom-8-30720
30
6 (20%)
22 (73%)
22 (73%)
db-custom-16-61440
60
12 (20%)
44 (73%)
44 (73%)
db-custom-32-122880
120
24 (20%)
87 (73%)
87 (73%)
db-custom-64-245760
240
48 (20%)
173 (72%)
173 (72%)
db-custom-96-368640
360
72 (20%)
260 (72%)
260 (72%)
db-custom-2-13312
13
3 (23%)
9 (69%)
9 (69%)
db-custom-4-26624
26
6 (23%)
19 (73%)
19 (73%)
db-custom-8-53248
52
11 (21%)
38 (73%)
38 (73%)
db-custom-16-106496
104
21 (20%)
75 (72%)
75 (72%)
db-custom-32-212992
208
42 (20%)
150 (72%)
150 (72%)
db-custom-64-425984
416
84 (20%)
300 (72%)
300 (72%)
db-custom-96-638976
624
125 (20%)
450 (72%)
450 (72%)
If the memory usage is high for your instance and you're
experiencing out-of-memory (OOM) events, then you can enable the
innodb_cloudsql_managed_buffer_pool flag to reduce the value
of your innodb_buffer_pool_size temporarily.
For more information, see
Enable managed buffer pool .
( Preview )
When managed buffer pool makes adjustments to value of innodb_buffer_pool_size , the
changes aren't reflected in the flag value displayed in Google Cloud console. In order to view the
current value of innodb_buffer_pool_size when managed buffer pool is enabled, you
can query the flag value by using the MySQL client:
show global variables like 'innodb_buffer_pool_size' ;
innodb_cloudsql_optimized_write
This flag is available only for Cloud SQL Enterprise Plus edition instances. The default value
is `ON`.
This flag improves write performance by optimizing the flushing algorithm,
controlling flush limits, and adjusting background activity to prioritize
your database write operations. In addition, this flag enables an improved crash
recovery algorithm to reduce crash recovery time and
utilizes unused disk I/O throughput adaptively to accelerate buffer pool warm-up.
For the majority of use cases,
you can experience better performance such as improved throughput and reduced
latency with this flag enabled.
However, if your database write operations cause extremely heavy load
on the server, then the flag can delay some background activities.
This delay can cause a small increase in disk usage, which decreases automatically after the load subsides.
By default, the innodb_cloudsql_optimized_write flag is
enabled for all new and upgraded Cloud SQL Enterprise Plus edition instances. For existing Cloud SQL Enterprise Plus edition instances, this flag is enabled after the related maintenance update is applied.
If you need to disable the flag, then run the following command.
gcloud sql instances patch INSTANCE_NAME \
--database-flags = "innodb_cloudsql_optimized_write=OFF"
Changing the value of the flag requires restarting the instance.
innodb_file_per_table
For all MySQL versions 5.6 and higher, the default value is ON .
innodb_flush_log_at_trx_commit, sync_binlog
For full ACID compliance, and to maintain durability and consistency in a replication setup,
the innodb_flush_log_at_trx_commit and the sync_binlog
flags must be set to the default value of 1 . If you change the default value,
then durability might decrease, which might lead to
inconsistency between the primary instance and replicas. Therefore, the instance
loses its SLA coverage. In addition, any of the following might occur:
Data loss in certain situations, such as a VM crash or failover for regional HA instance
Out-of-sync data in binary log and InnoDB data files
PITR data loss or failure
Data inconsistency between a primary instance and its replicas
A replication break
Setting the value of the
innodb_flush_log_at_trx_commit or sync_binlog
flag to non-default values for primary, standalone, and HA instances causes
reduced durability.
If you need higher performance for read replicas, then we recommend setting the
innodb_flush_log_at_trx_commit value to 2 .
Cloud SQL does not support setting the value for this flag to 0. If you
set the flag value to 2, you must either disable the binary log on the
replica, or set
sync_binlog to a
value other than 1 for higher performance.
Cloud SQL might temporarily change the innodb_flush_log_at_trx_commit
and sync_binlog flag values to default when taking a backup. This might
cause reduced performance when taking backups. To avoid this from impacting
your instance, you can change
the backup window when instance usage is low. For more information,
see Create and manage on-demand and
automatic backups .
innodb_flush_log_at_timeout
innodb_flush_log_at_timeout lets you modify the frequency
of page flushes so you can avoid impacting the performance of binary log group
commit. The default setting is once per second.
Cloud SQL has extended this flag to support specifying a time period
in microseconds.
Examples:
0.001 to specify 1 ms
0.0001 to specify 100 us
12.5 to specify 12.5 seconds
12.005 to specify 12 seconds and 5 ms
0.005100 to specify 5 ms and 100 us
For certain workloads, using whole second granularity for
flushing pages might be unacceptable in terms of
potential transaction loss. Instead, you can flush pages using microsecond
granularity to maintain performance without significantly
compromising durability.
The microsecond time periods for the innodb_flush_log_at_timeout
flag are only applicable when the innodb_flush_log_at_trx_commit
durability flag is set to 2 .
The flushing of pages might happen more or less frequently than the value
specified for innodb_flush_log_at_timeout and the value is not the
upper bound.
innodb_redo_log_capacity, innodb_log_file_size
If you configure a value for the innodb_redo_log_capacity
flag,
then Cloud SQL ignores any value that you define for
the innodb_log_file_size flag.
If you don't configure any values for
the innodb_redo_log_capacity or innodb_log_file_size
flags, then Cloud SQL uses
the default value of the innodb_redo_log_capacity flag, or 104857600 (100 MB).
If you don't configure the innodb_redo_log_capacity flag, but configure
the innodb_log_file_size flag,
then the value of your innodb redo log size is calculated by innodb_log_file_size * innodb_log_file_in_group . For example, if you configure
innodb_log_file_size to a value of 10 GB and the default value of
innodb_log_file_in_group is 2 , then the effective
value of your innodb redo log size is 20 GB.
max_heap_table_size, tmp_table_size
Exhausting the available instance memory can occur when you set
tmp_table_size and max_heap_table_size too high for
the number of concurrent queries the instance processes. Exhausting the memory
results in an instance crash and restart.
For more information about working with these flags, see
How MySQL Uses Internal Temporary Tables
and The MEMORY Storage Engine .
performance_schema
You can't enable this flag on instances with a shared core (less than 3 GB of RAM).
If you enable this flag, then you can't change your machine type to a size
that does not support the flag; you must first disable this flag.
For MySQL 8.0 and later instances with 12 GB to 15 GB RAM,
the default value of the performance_schema is on ;
however, the default performance schema instruments are
disabled. For more information about default performance
schema instruments, see
The setup_instruments Table (MySQL 8.0) or
The setup_instruments Table (MySQL 8.4) . If you want to enable and use
performance schema instruments in a 12 GB to 15 GB
RAM instance, then you must explicitly set the performance_schema
flag to on instead of deferring to the default value.
For MySQL 8.0 and later instances with ≥15 GB RAM,
the default value of the performance_schema is on
the default performance schema instruments are enabled.
event_scheduler
MySQL Events, also known as scheduled events, are tasks that you can schedule.
Scheduled events are a group of one or more SQL statements that are set to
execute at one or more specified intervals. The default value for MySQL 5.7 is
OFF and the default value for MySQL 8.0 is ON . To
learn more about the event_scheduler flag, see
event_scheduler .
If the event_scheduler flag is set to ON for a read
replica, it can cause errors based on the type of statements defined in the
events:
If your scheduled event is a write event on a read
replica, it causes an error as read replicas are read only. See
Read Replicas for
more information.
If your scheduled event contains a stop operation, such as
kill , event_scheduler applies it to the replica.
This stops the replication and delete the replica.
To avoid such errors, set the event_scheduler flag to OFF
when creating replicas.
For more information on how to enable or disable event_scheduler ,
see Configure database flags .
replica_skip_errors,slave_skip_errors
Setting the replica_skip_errors or the slave_skip_errors
flag can cause replication issues. In general,
if an error occurs while executing a statement, the replication is stopped.
Using this flag will cause the error to be skipped and replication to continue,
leading to inconsistency between the primary instance and replica.
This can also make it harder to troubleshoot replication issues.
Cloud SQL recommends only using this flag if necessary. If you
are experiencing replication errors, see
Troubleshooting Cloud SQL: Replication more information on how to resolve
this issue.
character_set_client
character_set_connection
character_set_results
collation_connection
innodb_buffer_pool_dump_now
innodb_buffer_pool_load_abort
innodb_buffer_pool_load_now
innodb_ft_aux_table
foreign_key_checks
sql_select_limit
unique_checks
These flags can't be selected directly in the Google Cloud console or using gcloud CLI.
To use these flags, use the following command:
SET GLOBAL FLAG_NAME = FLAG_VALUE
Using the SET GLOBAL command requires the CLOUDSQL_SPECIAL_SYSEM_VARIABLES_ADMIN
privilege, which is granted to the cloudsqlsuperuser role.
Note: The CLOUDSQL_SPECIAL_SYSEM_VARIABLES_ADMIN privilege
is only available in MySQL 8.0 for Cloud SQL.
For more information on how to grant special privilege access to a specific user, see
About MySQL users .
These flags are non-persisted. When your Cloud SQL instance is recreated or
restarted, the flag settings are reset back to default value.
binlog_order_commits
The default value for the binlog_order_commits flag is
ON . Cloud SQL recommends to not change the default
value of this flag. If the default value is changed to
OFF , transactions in the same binary log group will
commit in a different order than when they were written in the binary
log. This impacts the following operations that execute transactions
in the binary log order:
Replication : may lead to data inconsistency
between the source and replicas
Point-in-time-recovery : may lead to data
inconsistency between the PITR restored state and historical state
optimizer_switch,optimizer_trace,optimizer_trace_features
Optimizer flags have comma-separated values. You can set these flags using
the Console or gcloud. For more information on how to set this flag using the
console, see Configure database flags .
If using gcloud, you can specify the value for these flags using two different ways:
gcloud topic flags-file
gcloud topic escaping-file
To set multiple optimizer sub-flags in one command, use the comma delimiter to separate
each flag name. If you set a single sub-flag value using the
gcloud command, it overwrites all previously set sub-flags.
For example, if you run the following command, the expected value for
the batched_key_access sub-flag is set to on and all
other sub-flags for optimizer_flags are set to their default values.
gcloud sql instances patch my-instance --database-flags = ^~^optimizer_switch = batched_key_access = on
If you run the following command, the value of the
block_nested_loop sub-flag is set to on and all
other sub-flags for optimizer_switch are overwritten and set to their default values.
gcloud sql instances patch my-instance --database-flags = ^~^optimizer_switch = block_nested_loop = on
This includes batched_key_access , which was set to on
by the previous command. To keep all previously set sub-flags and add new
ones, you must add the values of all sub-flags you want to set when adding a
new sub-flag.
System flags changed in Cloud SQL
All other database system flags that are not listed in the
supported flags section are called managed flags. For
certain managed flags, Cloud SQL sets the flag to a value other than the
default setting to ensure Cloud SQL instances run reliably. You can't change
the values on these system flags.
Managed flags with a non-default setting are listed below.
Variable Name
Setting in Cloud SQL.
Notes
binlog_format
ROW
Differs in MySQL 5.6 only
binlog_error_action
ABORT_SERVER
Differs in MySQL 5.6 only
innodb_doublewrite_pages
64
Applies to MySQL 8.0.26 and above
innodb_file_format
Barracuda
Differs in MySQL 5.6 only
memlock
true
skip_name_resolve
ON
relay_log_info_repository
TABLE
Removed in MySQL 8.4
relay_log_recovery
ON
master_info_repository
TABLE
Removed in MySQL 8.4
rpl_semi_sync_master_enabled
1
rpl_semi_sync_master_timeout
3000
admin_address
127.0.0.1
Differs in MySQL 8.0 and later.
create_admin_listener_thread
ON
port-open-timeout
120
Differs in MySQL 8.0 and later.
partial_revokes
ON
MySQL 8.0 and later. For more information about this flag, see
Partial revokes system flag in MySQL 8.0 .
partial_revokes system flag in MySQL 8.0 and later
The partial_revokes flag allows you to limit user access on a databases schema.
In Cloud SQL for MySQL version 8.0 and later, the partial_revokes flag is set to
ON . This limits the use of wildcard characters when granting or
revoking user privileges to database schemas in MySQL 8.0. Update your
GRANT statement to use the full name of the database schema
instead of using wildcard characters.
For example, if you use the following command with the %\ wildcard character
to grant privileges to a user in MySQL 5.7, then the user will be granted
privileges to all databases ending with _foobar .
GRANT ALL PRIVILEGES ON `% \ _foobar ` . * TO 'testuser' @ '%' ;
However, in MySQL 8.0, users will only be granted access to the database that
is an exact match to %\_foobar .
There are two different ways to grant access to multiple databases in MySQL 8.0 and later.
You can grant permissions to specific databases using the full
database names as shown in the command below:
grant select on test1_foobar . * to 'testuser' @ '%' ;
grant select on test2_foobar . * to 'testuser' @ '%' ;
grant select on test3_foobar . * to 'testuser' @ '%' ;
With partial_revokes , you can use the grant and
revoke command to grant user privileges on all database schemas while
restricting access to a few database schemas.
grant select on * . * to 'testuser' @ '%' ;
revoke select on test3_foobar . * from 'testuser' @ '%' ;
This grants access to all database schemas while restricting access to
test3_foobar.* .
Replication filters
Replication filters can be set only on Cloud SQL replicas. Each replication
filter is set as a single flag for multiple databases where each database name
is separate by a comma. You can set up a replication filter on a Cloud SQL replica using
console or the following command:
gcloud sql instances patch REPLICA_NAME --database-flags = ^~^ REPLICATION_FILTER_NAME = DATABASE_NAME1 , DATABASE_NAME , etc
Replication filters don't support database names that contain comma values. The
^~^ value in the preceding command is necessary for database flags that are
comma-separated values.
When you set a replication filter flag, keep the following in mind:
If the replica becomes unhealthy, then data filtered by replication filters
can appear on the replica as Cloud SQL uses source data from the primary to
rebuild the instance replica.
You can't set replication filters on the mysql schema.
Replication filter rules don't apply to serverless exports.
Index advisor flags
The following is a list of database flags that Cloud SQL for MySQL uses
to enable and manage features specific to the
index advisor .
Flag name
Type Acceptable values and notes
Restart Required?
cloudsql_index_advisor_auto_advisor_schedule
string
default: 00:00
No
cloudsql_index_advisor_run_at_timestamp
Datetime
default: 00:00:00
No
Aliased flags
The following list below contains the flag names that have been changed by Cloud SQL
for MySQL versions 8.0.26 and above.
Deprecated flag name
New flag name
log_slow_slave_statements
log_slow_replica_statements
master_verify_checksum
source_verify_checksum
slave_checkpoint_group
replica_checkpoint_group
slave_checkpoint_period
replica_checkpoint_period
slave_compressed_protocol
replica_compressed_protocol
slave_net_timeout
replica_net_timeout
slave_parallel_type
replica_parallel_type
slave_parallel_workers
replica_parallel_workers
slave_pending_jobs_size_max
replica_pending_jobs_size_max
slave_preserve_commit_order
replica_preserve_commit_order
slave_skip_errors
replica_skip_errors
slave_sql_verify_checksum
replica_sql_verify_checksum
slave_transaction_retries
replica_transaction_retries
slave_type_conversions
replica_type_conversions
sync_master_info
sync_source_info
If your Cloud SQL instance is using a deprecated flag name, then
edit your Cloud SQL instance, delete the deprecated flag name, and add the
new flag to your instance. For more information, see
Setup a database flag .
Troubleshooting
Issue
Troubleshooting
After enabling a flag the instance loops between panicking and crashing.
Contact customer support to
request flag removal followed by a hard drain . This forces the
instance to restart on a different host with a fresh configuration without
the undesired flag or setting.
You see the error message Bad syntax for dict arg when
trying to set a flag.
Complex parameter values , such as comma-separated lists, require special
treatment when used with gcloud commands.
What's next
Learn more about MySQL system variables .
Learn more about Operational Guidelines .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
