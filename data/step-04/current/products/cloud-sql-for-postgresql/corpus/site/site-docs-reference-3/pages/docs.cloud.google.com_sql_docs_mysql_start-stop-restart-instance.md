---
title: "Start, stop, and restart instances \_|\_ Cloud SQL for MySQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/start-stop-restart-instance
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/start-stop-restart-instance
  title: "Start, stop, and restart instances \_|\_ Cloud SQL for MySQL \_|\_ Google\
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
Start, stop, and restart instances
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to start an instance, stop an instance, and restart an
instance that is running.
Activation policy
When you start, stop, or restart an instance, you need to set an activation
policy to use. The activation policy indicates if the instance is activated to
accept connection requests.
Activation policy options are:
ALWAYS - The instance is always up and running.
NEVER - The instance is not restarted.
If you are using a MySQL instance, you generally set your
activation policy to ALWAYS to accept connection requests. If you
are not using your instance, you can set its activation policy to
NEVER to avoid instance charges.
Note: NEVER is not supported for read replica instances.
Start an instance
To start a stopped instance:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Start .
In the Start database instance? dialog box, click
Start .
The activation policy of the instance is set
to Always and the instance is started.
gcloud
Use ALWAYS for the activation policy:
gcloud sql instances patch INSTANCE_NAME \
--activation-policy = ALWAYS
REST v1
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
activation-policy : The activation policy is ALWAYS or NEVER
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id
Request JSON body:
{
"settings": {
"activationPolicy": " activation-policy "
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-20T21:30:35.667Z",
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
activation-policy : The activation policy is ALWAYS or NEVER
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id
Request JSON body:
{
"settings": {
"activationPolicy": " activation-policy "
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-20T21:30:35.667Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
To see how the
underlying REST API request
is constructed for this task, see the
APIs Explorer on the instances:patch page .
Stop an instance
You can manually stop an instance when needed. When you stop an instance, it
remains stopped, and does not respond to application connections, until you
start it again.
Stopping an instance suspends instance charges. The instance data is unaffected,
and charges for storage and IP addresses continue to apply.
Note: When an instance is nearly out of storage capacity, it's stopped to
prevent the loss of information. A red circle with an exclamation mark indicates
this status. When you open the instance, a red banner suggests that you
increase the storage capacity
and enable automatic storage increases .
Click the Edit instance button on the banner to increase storage capacity.
As an alternative, you can restart the service to reduce storage requirements
by deleting any data that you don't require (and also perform any other operations
on the instance). After 24 hours, if the instance is still nearly out of
storage capacity, it's again stopped with the same message.
Note: You cannot stop a read replica instance.
To stop an instance:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Stop .
In the Stop database instance? dialog box, click
Stop .
The activation policy of the instance is set to Off (Never) and the
instance is stopped.
gcloud
gcloud sql instances patch INSTANCE_NAME \
--activation-policy = NEVER
REST v1
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
activation-policy : The activation policy is NEVER
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id
Request JSON body:
{
"settings": {
"activationPolicy": " activation-policy "
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-20T21:30:35.667Z",
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
activation-policy : The activation policy is NEVER
HTTP method and URL:
PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id
Request JSON body:
{
"settings": {
"activationPolicy": " activation-policy "
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
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-20T21:30:35.667Z",
"operationType": "UPDATE",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
To see how the
underlying REST API request
is constructed for this task, see the
APIs Explorer on the instances:patch page .
Restart an instance
Restarting an instance drains the connections from the instance and stops it.
Next, the instance restarts and is ready to accept new connections.
Restarting an instance doesn't change the public or private IP addresses of the
instance.
Note: Restarting a running instance can resolve some problems with the instance. However, restarting an instance causes a disruption in service, and empties the instance cache, which results in a temporary reduction in performance. If you have restarted your instance recently, check the instance logs to ensure it has fully recovered before restarting it again.
After you restart the instance, the process and buffer caches are stopped and then refreshed.
To restart an instance:
Console
In the Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
To open the Overview page of an instance, click the instance name.
Click Restart .
In the Restart database instance? dialog box,
click Restart .
gcloud
Restart the instance:
gcloud sql instances restart INSTANCE_NAME
REST v1
Before using any of the request data,
make the following replacements:
project-id : The project ID
instance-id : The instance ID
activation-policy : The activation policy is ALWAYS or NEVER
HTTP method and URL:
POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /restart
Request JSON body:
{
"settings": {
"activationPolicy": " activation-policy "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /restart"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /restart" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-20T21:30:35.667Z",
"operationType": "RESTART",
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
activation-policy : The activation policy is ALWAYS or NEVER
HTTP method and URL:
POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /restart
Request JSON body:
{
"settings": {
"activationPolicy": " activation-policy "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /restart"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /restart" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"kind": "sql#operation",
"targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ",
"status": "PENDING",
"user": "user@example.com",
"insertTime": "2020-01-20T21:30:35.667Z",
"operationType": "RESTART",
"name": " operation-id ",
"targetId": " instance-id ",
"selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ",
"targetProject": " project-id "
}
To see how the
underlying REST API request
is constructed for this task, see the
APIs Explorer on the instances:restart page .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
