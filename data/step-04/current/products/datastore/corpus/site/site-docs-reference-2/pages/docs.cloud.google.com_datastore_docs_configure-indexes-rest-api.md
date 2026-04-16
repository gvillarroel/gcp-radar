---
title: "Configuring indexes with the REST API \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/configure-indexes-rest-api
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/configure-indexes-rest-api
  title: "Configuring indexes with the REST API \_|\_ Datastore \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Configuring indexes with the REST API
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create, delete, and list Datastore mode
composite indexes using the Datastore mode REST API.
The Google Cloud CLI provides a convenient way to access
the Datastore mode REST API and manage your composite indexes.
However, you can directly access the Datastore mode REST API to create
your own tools for managing your composite indexes. For example, you can
create tools to automate index provisioning and management.
Authentication and authorization
To access the Firestore in Datastore mode REST API methods below,
you must authenticate your request by providing a Google OAuth 2.0 access token
with one of the following scopes:
https://www.googleapis.com/auth/datastore
https://www.googleapis.com/auth/cloud-platform
The cURL and PowerShell examples below use the
gcloud auth print-access-token command to authenticate requests. For more
information about obtaining an access token, see
Using OAuth 2.0 to Access Google APIs .
Authorization
The authenticated user, group, or service account in the request
must have authorization to access the API methods. To authorize access to the
indexing methods, assign one of the following Identity and Access Management (IAM)
roles:
For full index read and edit access, grant one of these roles:
roles/owner
roles/editor
roles/datastore.owner
roles/datastore.indexAdmin
For index read access only (get and list), grant one of these roles:
roles/viewer
roles/datastore.user
roles/datastore.viewer
For more information about assigning these roles, see
granting, changing, and revoking access to resources .
Before you begin
The curl and PowerShell examples below use the Google Cloud CLI
(Google Cloud CLI) to authenticate requests. To run these examples locally,
install and initialize the Google Cloud CLI .
Alternatively, you can access gcloud and curl from the
Google Cloud console using Cloud Shell .
Start Cloud Shell
Creating a composite index
To create a new composite index, use the projects.indexes.create method.
Before using any of the request data,
make the following replacements:
project-id : your project ID
kind : the entity kind to index
include-ancestors : whether or not to include entity ancestors in the index
to support ancestor queries ,
either NONE or ALL_ANCESTORS
property-name : the property to index, must specify two or more properties
index-direction : the sort order for each property, ASCENDING or DESCENDING
HTTP method and URL:
POST https://datastore.googleapis.com/v1/projects/ project-id /indexes
Request JSON body:
{
"kind": " kind ",
"ancestor": " include-ancestors ",
"properties": [
{
"name": " property-name ",
"direction": " index-direction "
},
{
"name": " property-name ",
"direction": " index-direction "
}
]
}
To send your request, choose one of these options:
curl
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://datastore.googleapis.com/v1/projects/ project-id /indexes"
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://datastore.googleapis.com/v1/projects/ project-id /indexes" | Select-Object -Expand Content
APIs Explorer
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"name": "projects/ project-id /operations/S01vcFVpSmdBQ0lDDCoDIDgxZGVhZDM0ZDc4MS1jMjJhLWQ1ZTQtYmMyNS1iYjY2NWVlZCQadGx1YWZlZAcSMXJoLXJleGVkbmktbmltZGERClIS",
"metadata": {
"@type": "type.googleapis.com/google.datastore.admin.v1.IndexOperationMetadata",
"common": {
"startTime": "2019-12-05T22:27:19.238Z",
"operationType": "CREATE_INDEX",
"state": "INITIALIZING"
},
"indexId": "CICAgJiUpoMK"
}
}
Getting index status
Datastore mode gives each index a unique index ID. You can use this
index ID to get the status of a single index with the
projects.indexes.get method:
Before using any of the request data,
make the following replacements:
project-id : your project ID
index-id : a composite index ID
HTTP method and URL:
GET https://datastore.googleapis.com/v1/projects/ project-id /indexes/ index-id
To send your request, choose one of these options:
curl
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://datastore.googleapis.com/v1/projects/ project-id /indexes/ index-id "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://datastore.googleapis.com/v1/projects/ project-id /indexes/ index-id " | Select-Object -Expand Content
APIs Explorer
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"projectId": " project-id ",
"indexId": " index-id ",
"kind": "Task",
"ancestor": "NONE",
"properties": [
{
"name": "done",
"direction": "ASCENDING"
},
{
"name": "priority",
"direction": "ASCENDING"
}
],
"state": "READY"
}
Index state
See the index state for progress information and
error messages. You cannot use an index for queries until it reaches the
READY state. Possible index statuses include:
CREATING : index creation in progress.
ALREADY_EXISTS : cannot complete operation because this index already exists.
ERROR : index creation failed. Fix the data that caused the error,
delete this index, and then
create the index again.
READY : index creation complete. The index is ready to use for queries.
Deleting a composite index
HTTP method and URL:
DELETE https://datastore.googleapis.com/v1/projects/ project-id /indexes/ index-id
To send your request, choose one of these options:
curl
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://datastore.googleapis.com/v1/projects/ project-id /indexes/ index-id "
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://datastore.googleapis.com/v1/projects/ project-id /indexes/ index-id " | Select-Object -Expand Content
APIs Explorer
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a successful status code (2xx) and an empty response.
Listing all composite indexes
To list all the composite indexes for a Datastore mode database use
the projects.indexes.list method.
Before using any of the request data,
make the following replacements:
project-id : your project ID
HTTP method and URL:
GET https://datastore.googleapis.com/v1/projects/ project-id /indexes
To send your request, choose one of these options:
curl
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://datastore.googleapis.com/v1/projects/ project-id /indexes"
PowerShell
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://datastore.googleapis.com/v1/projects/ project-id /indexes" | Select-Object -Expand Content
APIs Explorer
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
You should receive a JSON response similar to the following:
{
"indexes": [
{
"projectId": " project-id ",
"indexId": "CICAgOjXh4EK",
"kind": "Task",
"ancestor": "NONE",
"properties": [
{
"name": "done",
"direction": "ASCENDING"
},
{
"name": "priority",
"direction": "ASCENDING"
}
],
"state": "READY"
},
{
"projectId": " project-id ",
"indexId": "CICAgNiroIEK",
"kind": "Task",
"ancestor": "NONE",
"properties": [
{
"name": "due-date",
"direction": "DESCENDING"
},
{
"name": "priority",
"direction": "ASCENDING"
}
],
"state": "CREATING"
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
