---
title: "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql/connect-connectors
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture
  title: "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\
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
MySQL
Guides
Send feedback
Configure performance capture
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Performance capture
lets you diagnose transient issues with your database by capturing detailed
metrics for your instance when performance is degraded.
To use performance capture, enable performance capture for your
instance and configure the thresholds that trigger the detailed metrics-based
snapshots of your Cloud SQL instance.
Before you begin
To use performance capture,
you must enable query insights
for your instance.
Required roles
To get the permissions that
you need to create an instance and enable performance capture,
ask your administrator to grant you the
following IAM roles on the project:
Cloud SQL Admin ( roles/cloudsql.admin )
Compute Viewer ( roles/compute.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable and configure performance capture
You can enable performance capture when you create or update
your Cloud SQL instance.
gcloud
Create and configure an instance
To enable performance capture when you create your Cloud SQL instance,
run the following command:
gcloud beta sql instances create INSTANCE_NAME \
--database-version = DATABASE_VERSION \
--region = REGION \
--tier = TIER \
--edition = EDITION_TYPE \
--performance-capture-config = "enabled=true, PROBE_CONFIGURATION , PERFORMANCE_CAPTURE_THRESHOLDS "
Replace the following:
INSTANCE_NAME : your instance name
DATABASE_VERSION : the database version.
For example: MYSQL_8_4 or MYSQL_8_0_37 . If
you don't specify a database version, then default database version is MYSQL_8_0 .
REGION : the region
TIER : your machine type
EDITION_TYPE : your Cloud SQL edition
Note : If you specify MYSQL_8_4 for the database version and
don't specify an edition type, then the default Cloud SQL edition of the instance is
ENTERPRISE_PLUS . If you specify a database version earlier than
MySQL 8.4 (or don't specify a database version) and don't specify an edition type, then the
default Cloud SQL edition of the instance is ENTERPRISE .
If you specify MYSQL_8_4 for the database version, but the region you specify
doesn't support Cloud SQL Enterprise Plus edition, then you must specify a
region that supports Cloud SQL Enterprise Plus edition , or
create an Cloud SQL Enterprise edition instance instead.
For the performance-capture-config flag, include enabled=true . In the same flag definition,
you can specify optional configurations
for PROBE_CONFIGURATION and
for PERFORMANCE_CAPTURE_THRESHOLDS ,
or you can specify them later by updating the instance.
For example:
gcloud beta sql instances create my-instance \
--database-version = MYSQL_8_0 \
--edition = ENTERPRISE_PLUS \
--tier = db-perf-optimized-N-4 \
--region = us-west1 \
--performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300"
Update an existing instance
To enable performance capture for an existing Cloud SQL instance,
run the following command:
gcloud beta sql instances patch INSTANCE_NAME \
--performance-capture-config = "enabled=true, PROBE_CONFIGURATION , PERFORMANCE_CAPTURE_THRESHOLDS "
For the performance-capture-config flag, include enabled=true .
For the same flag, you can specify optional configurations
for PROBE_CONFIGURATION and
for PERFORMANCE_CAPTURE_THRESHOLDS .
You can also use the gcloud beta sql instances patch command
to update the threshold configuration values for performance capture on an existing instance.
Configure the probing interval and consecutive probes of performance metrics
You can replace PROBE_CONFIGURATION with one or both of the
following flag settings. If you don't set the flags, then the monitoring agent
uses the default value.
probing-interval-seconds= SECONDS : an integer
between 20 and 86400 . The time interval, in seconds,
between metric probes.
For example, 30 , 60 , 100 .
Default is 30 .
probe-threshold= PROBES : the number of consecutive
times a threshold must be exceeded to trigger a performance capture.
Valid range is 1 to 20 .
Default is 3 .
Configure performance capture thresholds
You can replace PERFORMANCE_CAPTURE_THRESHOLDS with one or more of
the following flag settings. If you don't set values for the flags, then the
monitoring agent uses the default values for the thresholds.
running-threads-threshold= THREADS : for primary
instances, the minimum number of
active threads considered to be over the threshold. For example, 10 .
Must be greater than or equal to 10 .
If not set, then the default is based on the size of the instance.
Default is MIN(600, cpuCount * 20) .
seconds-behind-source-threshold= SECONDS : for
read replicas, the minimum replication lag, in
seconds, considered to be over the threshold. Must be greater than 0 .
Default is 900 .
transaction-duration-threshold= SECONDS : the
duration, in seconds, of an uncommitted transaction before the transaction
is tracked and included in a performance capture log.
For example, 300 , 600 . Minimum value is 60 .
Default is 3600 .
REST v1
Create and configure an instance
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : your instance ID
DATABASE_VERSION : the database version.
For example: MYSQL_8_4 or MYSQL_8_0_37 . If
you don't specify a database version, then default database version is MYSQL_8_4 .
REGION : the region
MACHINE_TYPE : your machine type
EDITION_TYPE : your Cloud SQL edition
Note : If you specify MYSQL_8_4 for the database version (or don't specify a database version) and
don't specify an edition type, then the default Cloud SQL edition of the instance is
ENTERPRISE_PLUS . If you specify a database version earlier than
MySQL 8.4 and don't specify an edition type, then the
default Cloud SQL edition of the instance is ENTERPRISE .
If you specify MYSQL_8_4 for the database version (or don't specify a database version), but the region you specify
doesn't support Cloud SQL Enterprise Plus edition, then you must specify a
region that supports Cloud SQL Enterprise Plus edition , or
create an Cloud SQL Enterprise edition instance instead.
PROBING_INTERVAL_SECONDS : an integer between 20 and 86400 .
The time interval, in seconds, between metric probes. Default is 30 .
PROBE_THRESHOLD : the number of consecutive times a threshold must be exceeded to
trigger a performance capture. Valid range is 1 to 20 . Default is 3 .
RUNNING_THREADS_THRESHOLD : for primary instances, the minimum number of
active threads considered to be over the threshold. For example, 10 .
Must be greater than or equal to 10 .
If not set, then the default is based on the size of the instance.
Default is MIN(600, cpuCount * 20) .
SECONDS_BEHIND_SOURCE_THRESHOLD : for read replicas, the minimum replication lag, in
seconds, considered to be over the threshold. Must be greater than 0 . Default is 900 .
TRANSACTION_DURATION_THRESHOLD : the duration, in seconds, of an uncommitted
transaction before the transaction is tracked and included in a performance capture log.
For example, 300 , 600 . Minimum value is 60 . Default is 3600 .
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances
Request JSON body:
{
"name": " INSTANCE_ID ",
"region": " REGION ",
"databaseVersion": " DATABASE_VERSION ",
"settings": {
"tier": " MACHINE_TYPE ",
"edition": " EDITION_TYPE "
},
"performanceCaptureConfig": {
"enabled": true,
"probingIntervalSeconds": PROBING_INTERVAL_SECONDS ,
"probeThreshold": PROBE_THRESHOLD ,
"runningThreadsThreshold": RUNNING_THREADS_THRESHOLD ,
"secondsBehindSourceThreshold": SECONDS_BEHIND_SOURCE_THRESHOLD ,
"transactionDurationThreshold": TRANSACTION_DURATION_THRESHOLD
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2025-11-10T22:19:33.735Z",
"operationType": "CREATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Update an existing instance
Before using any of the request data,
make the following replacements:
PERFORMANCE_CAPTURE_ENABLE : set to true to enable
performance capture for your instance.
PROBING_INTERVAL_SECONDS : an integer between 20 and 86400 .
The time interval, in seconds, between metric probes. Default is 30 .
PROBE_THRESHOLD : the number of consecutive times a threshold must be exceeded to
trigger a performance capture. Valid range is 1 to 20 . Default is 3 .
RUNNING_THREADS_THRESHOLD : for primary instances, the minimum number of
active threads considered to be over the threshold. For example, 10 .
Must be greater than or equal to 10 .
If not set, then the default is based on the size of the instance.
Default is MIN(600, cpuCount * 20) .
SECONDS_BEHIND_SOURCE_THRESHOLD : for read replicas, the minimum replication lag, in
seconds, considered to be over the threshold. Must be greater than 0 . Default is 900 .
TRANSACTION_DURATION_THRESHOLD : the duration, in seconds, of an uncommitted
transaction before the transaction is tracked and included in a performance capture log.
For example, 300 , 600 . Minimum value is 60 . Default is 3600 .
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"performanceCaptureConfig": {
"enabled": PERFORMANCE_CAPTURE_ENABLE ,
"probingIntervalSeconds": PROBING_INTERVAL_SECONDS ,
"probeThreshold": PROBE_THRESHOLD ,
"runningThreadsThreshold": RUNNING_THREADS_THRESHOLD ,
"secondsBehindSourceThreshold": SECONDS_BEHIND_SOURCE_THRESHOLD ,
"transactionDurationThreshold": TRANSACTION_DURATION_THRESHOLD
},
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
"insertTime": "2025-11-10T22:19:33.735Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
Create and configure an instance
Before using any of the request data,
make the following replacements:
PROJECT_ID : your project ID
INSTANCE_ID : your instance ID
DATABASE_VERSION : the database version.
For example: MYSQL_8_4 or MYSQL_8_0_37 . If
you don't specify a database version, then default database version is MYSQL_8_4 .
REGION : the region
MACHINE_TYPE : your machine type
EDITION_TYPE : your Cloud SQL edition
Note : If you specify MYSQL_8_4 for the database version (or don't specify a database version) and
don't specify an edition type, then the default Cloud SQL edition of the instance is
ENTERPRISE_PLUS . If you specify a database version earlier than
MySQL 8.4 and don't specify an edition type, then the
default Cloud SQL edition of the instance is ENTERPRISE .
If you specify MYSQL_8_4 for the database version (or don't specify a database version), but the region you specify
doesn't support Cloud SQL Enterprise Plus edition, then you must specify a
region that supports Cloud SQL Enterprise Plus edition , or
create an Cloud SQL Enterprise edition instance instead.
PROBING_INTERVAL_SECONDS : an integer between 20 and 86400 .
The time interval, in seconds, between metric probes. Default is 30 .
PROBE_THRESHOLD : the number of consecutive times a threshold must be exceeded to
trigger a performance capture. Valid range is 1 to 20 . Default is
3 .
RUNNING_THREADS_THRESHOLD : for primary instances, the minimum number of
active threads considered to be over the threshold. For example, 10 .
Must be greater than or equal to 10 .
If not set, then the default is based on the size of the instance.
Default is MIN(600, cpuCount * 20) .
SECONDS_BEHIND_SOURCE_THRESHOLD : for read replicas, the minimum replication lag, in
seconds, considered to be over the threshold. Must be greater than 0 . Default is
900 .
TRANSACTION_DURATION_THRESHOLD : the duration, in seconds, of an uncommitted
transaction before the transaction is tracked and included in a performance capture log.
For example, 300 , 600 . Minimum value is 60 . Default is
3600 .
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances
Request JSON body:
{
"name": " INSTANCE_ID ",
"region": " REGION ",
"databaseVersion": " DATABASE_VERSION ",
"settings": {
"tier": " MACHINE_TYPE ",
"edition": " EDITION_TYPE ",
},
"performanceCaptureConfig": {
"enabled": true,
"probingIntervalSeconds": PROBING_INTERVAL_SECONDS ,
"probeThreshold": PROBE_THRESHOLD ,
"runningThreadsThreshold": RUNNING_THREADS_THRESHOLD ,
"secondsBehindSourceThreshold": SECONDS_BEHIND_SOURCE_THRESHOLD ,
"transactionDurationThreshold": TRANSACTION_DURATION_THRESHOLD
},
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2025-11-10T22:19:33.735Z",
"operationType": "CREATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Update an existing instance
Before using any of the request data,
make the following replacements:
PERFORMANCE_CAPTURE_ENABLE : set to true to enable
performance capture for your instance.
PROBING_INTERVAL_SECONDS : an integer between 20 and 86400 .
The time interval, in seconds, between metric probes. Default is 30 .
PROBE_THRESHOLD : the number of consecutive times a threshold must be exceeded to
trigger a performance capture. Valid range is 1 to 20 . Default is 3 .
RUNNING_THREADS_THRESHOLD : for primary instances, the minimum number of
active threads considered to be over the threshold. For example,
10 . Must be greater than or equal to 10 .
If not set, then the default is based on the size of the instance.
Default is MIN(600, cpuCount * 20) .
SECONDS_BEHIND_SOURCE_THRESHOLD : for read replicas, the minimum replication lag, in
seconds, considered to be over the threshold. Must be greater than 0 . Default is 900 .
TRANSACTION_DURATION_THRESHOLD : the duration, in seconds, of an uncommitted
transaction before the transaction is tracked and included in a performance capture log.
For example, 300 , 600 . Minimum value is 60 . Default is 3600 .
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"performanceCaptureConfig": {
"enabled": PERFORMANCE_CAPTURE_ENABLE ,
"probingIntervalSeconds": PROBING_INTERVAL_SECONDS ,
"probeThreshold": PROBE_THRESHOLD ,
"runningThreadsThreshold": RUNNING_THREADS_THRESHOLD ,
"secondsBehindSourceThreshold": SECONDS_BEHIND_SOURCE_THRESHOLD ,
"transactionDurationThreshold": TRANSACTION_DURATION_THRESHOLD
},
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
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2025-11-10T22:19:33.735Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
Disable performance capture
To disable performance capture, use the following command.
gcloud
gcloud beta sql instances patch INSTANCE_NAME \
--performance-capture-config = "enabled=false"
Replace INSTANCE_NAME with the name of the instance where you want
to disable performance capture.
REST v1
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"performanceCaptureConfig": {
"enabled": false
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
"insertTime": " INSERT_TIME ",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
REST v1beta4
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID
Request JSON body:
{
"performanceCaptureConfig": {
"enabled": false
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
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /instances/ INSTANCE_ID ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2025-11-10T22:19:33.735Z",
"operationType": "UPDATE",
"name": " OPERATION_ID ",
"targetId": " INSTANCE_ID ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT_ID /operations/ OPERATION_ID ",
"targetProject": " PROJECT_ID "
}
What's next
View performance capture logs
Monitor instances
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
