---
title: "Configure Managed Connection Pooling \_|\_ Cloud SQL for MySQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/configure-mcp
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/connect-connectors
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/configure-mcp
  title: "Configure Managed Connection Pooling \_|\_ Cloud SQL for MySQL \_|\_ Google\
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
MySQL
Guides
Send feedback
Configure Managed Connection Pooling
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to enable, configure, and monitor Managed Connection Pooling in
your Cloud SQL instances.
Managed Connection Pooling lets you scale your workloads by optimizing resource
utilization and connection latency for your instances using pooling. For
detailed information about Managed Connection Pooling and how to use it for your
instances, see
Managed Connection Pooling overview .
Before you begin
Confirm that your instance meets all
requirements
to use Managed Connection Pooling.
If you're using gcloud CLI , then confirm that your gcloud CLI
version is 515.0.0 or later.
Enable Managed Connection Pooling
You can enable Managed Connection Pooling for an instance at time of creation,
or edit an existing instance to enable it.
Enable Managed Connection Pooling for a new instance
To create a new instance with Managed Connection Pooling enabled, see
Create instances . You can enable
Managed Connection Pooling for a new instance using gcloud CLI or the
Cloud SQL API only.
Enable Managed Connection Pooling for an existing instance
To enable Managed Connection Pooling for an existing instance, do the following:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to enable Managed Connection Pooling for.
To open the Overview page of the instance, click the instance name.
Click Edit .
Under Customize your instance , expand Connections .
To enable Managed Connection Pooling, check the box for
Enable Managed Connection Pool .
Click Save .
Note: This will cause your instance to restart.
gcloud
Use the gcloud sql instances
command to enable Managed Connection Pooling.
gcloud sql instances patch INSTANCE_NAME \
--enable-connection-pooling
Replace the following:
INSTANCE_NAME : the name of the Cloud SQL
instance.
REST v1
Use the following command and set connectionPoolingEnabled :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID
INSTANCE_ID : the instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"connectionPoolConfig": {
"connectionPoolingEnabled": true
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
Use the following command and set connectionPoolingEnabled :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID
INSTANCE_ID : the instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"connectionPoolConfig": {
"connectionPoolingEnabled": true
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Terraform
Use the following
Terraform resource :
# This example shows creating an instance with Managed Connection Pooling enabled and custom flags set.
resource "google_sql_database_instance" "mysql_managed_connection_pooling_enable" {
name = "mysql-instance-managed-connection-pooling-enable"
region = "us-central1"
database_version = "MYSQL_8_0"
deletion_protection = false
settings {
tier = "db-perf-optimized-N-2"
edition = "ENTERPRISE_PLUS"
connection_pool_config {
connection_pooling_enabled = true
}
}
}
Modify Managed Connection Pooling for an instance
After you enable Managed Connection Pooling, you can customize
Managed Connection Pooling to meet the needs of your instance using advanced
configuration options. These configuration options are called Managed Connection Pooling
pool flags. For more
information on the advanced configuration options, their default values, and
ranges, see
Advanced configurations options .
To modify the advanced Managed Connection Pooling configuration options for an
instance, do the following:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to enable Managed Connection Pooling for.
To open the Overview page of the instance, click the instance name.
Click Edit .
Under Customize your instance , expand Connections .
Under Managed connection pool , expand Advanced pooling options .
Modify the advanced pooling options that you want to update.
Click Save .
gcloud
Use the gcloud sql instances
command to modify configuration options.
gcloud sql instances patch INSTANCE_NAME \
--connection-pool-flags= CONFIGURATION_NAME = CONFIGURATION_VALUE
Replace the following:
INSTANCE_NAME : the name of the Cloud SQL
instance.
CONFIGURATION_NAME : the name of the configuration
option. For a list of all advanced configuration
options, see Advanced configurations options .
CONFIGURATION_VALUE : the new value for the
selected configuration option.
REST v1
To modify Managed Connection Pooling
Advanced configurations ,
use the following command and set ConnectionPoolConfig :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID
INSTANCE_ID : the instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"connectionPoolConfig": {
"flags":
[
{
"name": " CONFIGURATION_NAME ",
"value":" CONFIGURATION_VALUE "
}
]
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
To modify Managed Connection Pooling
Advanced configurations ,
use the following command and set ConnectionPoolConfig :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID
INSTANCE_ID : the instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"connectionPoolConfig": {
"flags":
[
{
"name": " CONFIGURATION_NAME ",
"value":" CONFIGURATION_VALUE "
}
]
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Terraform
To modify Managed Connection Pooling
Advanced configurations ,
use the following
Terraform resource :
# This example shows modifying the flags of an existing Managed Connection Pooling configuration.
resource "google_sql_database_instance" "mysql_managed_connection_pooling_modify" {
name = "mysql-instance-managed-connection-pooling-modify"
region = "us-central1"
database_version = "MYSQL_8_0"
deletion_protection = false
settings {
tier = "db-perf-optimized-N-2"
edition = "ENTERPRISE_PLUS"
connection_pool_config {
connection_pooling_enabled = true
flags {
name = "max_pool_size" # Modify or add the name and value of an flag
value = "10"
}
}
}
}
Disable Managed Connection Pooling for an instance
You can disable Managed Connection Pooling for an existing instance using the
Google Cloud console, gcloud CLI , or the Cloud SQL API.
To disable Managed Connection Pooling for an instance, do the following:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to disable Managed Connection Pooling for.
To open the Overview page of the instance, click the instance name.
Click Edit .
Under Customize your instance , expand Connections .
To disable Managed Connection Pooling, clear the box for
Enable Managed Connection Pool .
Click Save .
Note: This will cause your instance to restart.
gcloud
Use the gcloud sql instances
command to disable Managed Connection Pooling.
gcloud sql instances patch INSTANCE_NAME \
--no-enable-connection-pooling
Replace the following:
PROJECT_ID : the name of the Cloud SQL
instance.
REST v1
To disable Managed Connection Pooling for an instance, use the following
command and set connectionPoolingEnabled :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID
INSTANCE_ID : the instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"connectionPoolConfig": {
"connectionPoolingEnabled": false
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
To disable Managed Connection Pooling for an instance, use the following
command and set connectionPoolingEnabled :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the project ID
INSTANCE_ID : the instance ID
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"settings": {
"connectionPoolConfig": {
"connectionPoolingEnabled": false
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-16T02:32:12.281Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Terraform
To disable Managed Connection Pooling for an instance, use the following
Terraform resource :
# This example shows disabling Managed Connection Pooling on an existing instance.
resource "google_sql_database_instance" "mysql_managed_connection_pooling_disable" {
name = "mysql-instance-managed-connection-pooling-disable"
region = "us-central1"
database_version = "MYSQL_8_0"
deletion_protection = false
settings {
tier = "db-perf-optimized-N-2"
edition = "ENTERPRISE_PLUS"
connection_pool_config {
# Set to false to disable Managed Connection Pooling. You can also remove the block entirely.
connection_pooling_enabled = false
}
}
}
View Managed Connection Pooling status for an instance
You can view the status of Managed Connection Pooling for an instance using
the Google Cloud console, gcloud CLI , or the Cloud SQL API.
To view the status of Managed Connection Pooling for a Cloud SQL Enterprise Plus edition instance, do the
following:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Find the instance you want to view the Managed Connection Pooling status for.
To open the Overview page of the instance, click the instance name.
The Connections section shows whether Managed Connection Pooling is
enabled or disabled.
gcloud
Use the gcloud sql instances describe
command to view Managed Connection Pooling status for an instance:
gcloud sql instances describe INSTANCE_NAME
--format="value(settings.connectionPoolConfig.connectionPoolingEnabled)"
Replace the following:
PROJECT_ID : the name of the Cloud SQL
instance.
If Managed Connection Pooling is enabled, the following response is returned:
connectionPoolingEnabled: true
REST v1
To view the status of Managed Connection Pooling for your Cloud SQL
instance, use the following command and look for connectionPoolingEnabled :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
INSTANCE_NAME : the name of the Cloud SQL instance. If this instance has Private Service Connect enabled for it, then Private Service Connect endpoints in VPC networks can connect to it.
HTTP method and URL:
GET https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": "MYSQL_8_0",
"settings": {
"authorizedGaeApplications": [],
"tier": "db-custom-2-7680",
"kind": "sql#settings",
"availabilityType": "REGIONAL",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"pscConfig": {
"allowedConsumerProjects": [
" ALLOWED_PROJECTS "
],
"pscEnabled": true
},
"ipv4Enabled": false
},
...
"createTime": "2023-06-14T18:48:34.975Z",
"sqlNetworkArchitecture": " NEW_NETWORK_ARCHITECTURE ",
"pscServiceAttachmentLink": "projects/ PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_ID ",
"dnsName": " DNS_NAME "
}
REST v1beta4
To view the status of Managed Connection Pooling for your Cloud SQL
instance, use the following command and look for connectionPoolingEnabled :
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID or project number of the Google Cloud project that contains the instance.
INSTANCE_NAME : the name of the Cloud SQL instance. If this instance has Private Service Connect enabled for it, then Private Service Connect endpoints in VPC networks can connect to it.
HTTP method and URL:
GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#instance",
"state": "RUNNABLE",
"databaseVersion": "MYSQL_8_0",
"settings": {
"authorizedGaeApplications": [],
"tier": "db-custom-2-7680",
"kind": "sql#settings",
"availabilityType": "REGIONAL",
"pricingPlan": "PER_USE",
"replicationType": "SYNCHRONOUS",
"activationPolicy": "ALWAYS",
"ipConfiguration": {
"authorizedNetworks": [],
"pscConfig": {
"allowedConsumerProjects": [
" ALLOWED_PROJECTS "
],
"pscEnabled": true
},
"ipv4Enabled": false
},
...
"createTime": "2023-06-14T18:48:34.975Z",
"sqlNetworkArchitecture": " NEW_NETWORK_ARCHITECTURE ",
"pscServiceAttachmentLink": "projects/ PROJECT_ID /regions/ REGION_NAME /serviceAttachments/ SERVICE_ATTACHMENT_ID ",
"dnsName": " DNS_NAME "
}
Monitor Managed Connection Pooling
You can monitor how
Managed Connection Pooling is running on your Cloud SQL instances using the
following Cloud SQL Managed Connection Pooling metrics:
Metric name
Description
threads
Tracks the threads count in the connection pool by its
status. The statuses included in this metric are:
idle : the number of idle threads in the
pool.
active : the number of active (non-idle)
threads in the pool.
pending_connection
The number of connections actively in the pooling
queue.
avg_wait_time
The average time spent by the connection request waiting
for a server.
For more information about these metrics, see
Cloud SQL metrics . To view these
metrics using the Google Cloud console, see
View metrics on the Cloud SQL instance overview page .
What's next
View metrics on the Cloud SQL instance overview page
Managed Connection Pooling overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
