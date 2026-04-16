---
title: "Recover FHIR resources with point-in-time recovery (PITR) \_|\_ Cloud Healthcare\
  \ API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/fhir-pitr
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/fhir-pitr
  title: "Recover FHIR resources with point-in-time recovery (PITR) \_|\_ Cloud Healthcare\
    \ API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Guides
Send feedback
Recover FHIR resources with point-in-time recovery (PITR)
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use point-in-time recovery (PITR)
to recover FHIR resources in a FHIR store to a state within
the last 21 days.
You can use PITR to recover from unwanted changes, such as accidentally
deleting FHIR resources.
Before you begin
PITR requests are categorized as advanced operation requests and are billed
accordingly. Before using PITR, review the pricing for
advanced-operation requests .
PITR and FHIR resource version history
PITR doesn't depend on FHIR resource version history .
You can still use PITR if the disableResourceVersioning field in a FHIR store is true , or if a FHIR resource's historical
versions have been purged .
Recovery workflow
To ensure a production recovery runs as expected, first do a dry run .
The dry run outputs one or more files containing the IDs and types of the
FHIR resources to recover. Verify the correctness of the output files before
running the recovery again in production .
To recover specific resources, or recover resources according to a filtering
criteria, specify a filter .
Do a dry run
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
Permissions
healthcare.fhirStores.rollback
Roles
Healthcare FHIR Store Administrator
( roles/healthcare.fhirStoreAdmin )
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Cloud Healthcare API resources .
You might also be able to get the required permissions through
custom roles or other
predefined roles .
Note : If you created a Google Cloud project for this guide, then, as the project creator, you're automatically granted the Owner ( roles/owner ) IAM role, which has the permissions. You don't need to be granted any additional IAM roles.
Before recovering FHIR resources in production, do a dry run.
The following samples show how to do a dry run
using the fhirStores.rollback
method.
Console
To rollback a FHIR store to a previous state, follow these steps:
In the Google Cloud console, go to the Datasets page.
Go to Datasets
Select the dataset that contains the FHIR store you wish to roll back.
In the Data Stores list, click the Actions drop-down menu for the data store
you wish to roll back. In the menu, click Rollback .
In the first step, you can parametrize the rollback by broader scopes, such as a point in time
to roll the FHIR store back to and to roll back all operations of a certain type that have
taken place in a FHIR store. Note that the point in time parameter is mandatory.
Click Continue .
In the second step, optional resource-related parameters can be set. You can choose to roll
back all resources of a certain type (e.g. Patient s), provide a list of all
resources by identifier (e.g. Patient/123 ) to roll back (stored in Google
Cloud Storage), or specify filters on resource.meta field values for resources to
roll back.
For more information on resource.meta filters,
refer to the API documentation
.
Click Continue .
In the final step, you can configure the behavior of the rollback. Select an output
destination for the rollback's results in Google Cloud Storage (this is a required field) and
indicate if you want to initiate a dry-run and ignore previous rollbacks .
A dry-run will not actually affect resources in the store. The result output in your
selected Cloud Storage destination will indicate what would happen should the roll
back take effect. Enable this option.
If Ignore previous rollbacks is selected, the effects of previous roll back
operations will not be considered when performing this rollback.
Click Rollback . An operation will be initialized.
REST
Recover the FHIR resources.
To do a dry run, ensure the force
field is false .
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the dataset location
DATASET_ID : the FHIR store's parent dataset
FHIR_STORE_ID : the FHIR store ID
RECOVERY_TIMESTAMP : a recovery point within the last 21 days. Use the RFC 3339 format. Specify the time to the second and include a time zone, for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z .
CLOUD_STORAGE_BUCKET : the fully qualified URI to a Cloud Storage folder or bucket where output files are written
Request JSON body:
{
"rollbackTime": " RECOVERY_TIMESTAMP ",
"resultGcsBucket": "gs:// CLOUD_STORAGE_BUCKET ",
"force": "false"
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json RECOVERY_TIMESTAMP ",
"resultGcsBucket": "gs:// CLOUD_STORAGE_BUCKET ",
"force": "false"
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID :rollback"
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"rollbackTime": " RECOVERY_TIMESTAMP ",
"resultGcsBucket": "gs:// CLOUD_STORAGE_BUCKET ",
"force": "false"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID :rollback" | Select-Object -Expand Content
APIs Explorer
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The output is the following. The response contains an identifier for a
long-running operation (LRO).
Long-running operations are returned when method calls might take additional time to complete.
Note the value of OPERATION_ID . You need this value in the next step.
Response
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID "
}
Use the projects.locations.datasets.operations.get method to get the status of the long-running operation.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your Google Cloud project
DATASET_ID : the dataset ID
LOCATION : the dataset location
OPERATION_ID : the ID returned from the long-running operation
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID " | Select-Object -Expand Content
APIs Explorer
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
The output is the following. When the response contains "done": true , the
long-running operation has finished.
Response
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata",
"apiMethodName": "google.cloud.healthcare.v1.fhir.FhirStoreService.RollbackFhirResources",
"createTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ",
"endTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ",
"logsUrl": "https://console.cloud.google.com/ CLOUD_LOGGING_URL ",
"counter": {
"success": " SUCCESS_COUNT ",
"failure": " FAILURE_COUNT "
}
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.healthcare.v1.fhir.RollbackFhirResourcesResponse",
"fhirStore": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/myfhirstore"
}
}
View dry run output files
Each dry run outputs one or more files containing the IDs and types of the FHIR
resources to recover. The files are created in a subfolder in the rollback_resources folder in the destination
Cloud Storage bucket. The subfolder name is the LRO ID returned in the
fhirStores.rollback response. To view the files and ensure the recovery works
as expected, see
View object metadata .
The number of files is proportional to the number of recovered FHIR resources.
File names use the format trial- NUMBER -of- TOTAL_NUMBER .txt ,
where NUMBER is the file number and TOTAL_NUMBER
is the total number of files.
Dry run output file schema
The output files from a dry run recovery use the schema shown in the
following table:
RESOURCE_TYPE
RESOURCE_ID
TIMESTAMP
The FHIR resource type.
The FHIR resource ID.
The time when the FHIR resource was created or updated in the FHIR store.
Recover in production
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following Identity and Access Management (IAM) roles:
Permissions
healthcare.fhirStores.rollback
Roles
Healthcare FHIR Store Administrator
( roles/healthcare.fhirStoreAdmin )
To write the production output files to
Cloud Storage, you must grant permissions to the Cloud Healthcare Service Agent
service account. For instructions, see Write output files to Cloud Storage .
You can ask your administrator to grant you these Identity and Access Management roles. For instructions on
granting roles, see Manage access or
Control access to Cloud Healthcare API resources .
You might also be able to get the required permissions through
custom roles or other
predefined roles .
Note : If you created a Google Cloud project for this guide, then, as the project creator, you're automatically granted the Owner ( roles/owner ) IAM role, which has the permissions. You don't need to be granted any additional IAM roles.
Before recovering in production, do a dry run and inspect the
dry run output files to ensure the production recovery runs as expected.
The following samples show how to restore FHIR resources in production
using the fhirStores.rollback
method.
Console
To rollback a FHIR store to a previous state, follow these steps:
In the Google Cloud console, go to the Datasets page.
Go to Datasets
Select the dataset that contains the FHIR store you wish to roll back.
In the Data Stores list, click the Actions drop-down menu for the data store
you wish to roll back. In the menu, click Rollback .
In the first step, you can parametrize the rollback by broader scopes, such as a point in time
to roll the FHIR store back to and to roll back all operations of a certain type that have
taken place in a FHIR store. Note that the point in time parameter is mandatory.
Click Continue .
In the second step, optional resource-related parameters can be set. You can choose to roll
back all resources of a certain type (e.g. Patient s), provide a list of all
resources by identifier (e.g. Patient/123 ) to roll back (stored in Google
Cloud Storage), or specify filters on resource.meta field values for resources to
roll back.
For more information on resource.meta filters,
refer to the API documentation
.
Click Continue .
In the final step, you can configure the behavior of the rollback. Select an output
destination for the rollback's results in Google Cloud Storage (this is a required field) and
indicate if you want to initiate a dry-run and ignore previous rollbacks .
A dry-run will not actually affect resources in the store. The result output in your
selected Cloud Storage destination will indicate what would happen should the roll
back take effect. Disable this option.
If Ignore previous rollbacks is selected, the effects of previous roll back
operations will not be considered when performing this rollback.
Click Rollback . An operation will be initialized.
REST
Recover the FHIR resources.
Ensure the force
field is true .
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your Google Cloud project
LOCATION : the dataset location
DATASET_ID : the FHIR store's parent dataset
FHIR_STORE_ID : the FHIR store ID
RECOVERY_TIMESTAMP : a recovery point within the last 21 days. Use the RFC 3339 format. Specify the time to the second and include a time zone, for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z .
CLOUD_STORAGE_BUCKET : the fully qualified URI to a Cloud Storage folder or bucket where output files are written
Request JSON body:
{
"rollbackTime": " RECOVERY_TIMESTAMP ",
"resultGcsBucket": "gs:// CLOUD_STORAGE_BUCKET ",
"force": "true"
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json RECOVERY_TIMESTAMP ",
"resultGcsBucket": "gs:// CLOUD_STORAGE_BUCKET ",
"force": "true"
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID :rollback"
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
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"rollbackTime": " RECOVERY_TIMESTAMP ",
"resultGcsBucket": "gs:// CLOUD_STORAGE_BUCKET ",
"force": "true"
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/ FHIR_STORE_ID :rollback" | Select-Object -Expand Content
APIs Explorer
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
The output is the following. The response contains an identifier for a
long-running operation (LRO).
Long-running operations are returned when method calls might take additional time to complete.
Note the value of OPERATION_ID . You need this value in the next step.
Response
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID "
}
Use the projects.locations.datasets.operations.get method to get the status of the long-running operation.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of your Google Cloud project
DATASET_ID : the dataset ID
LOCATION : the dataset location
OPERATION_ID : the ID returned from the long-running operation
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://healthcare.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID " | Select-Object -Expand Content
APIs Explorer
Open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Complete any required fields and click Execute .
The output is the following. When the response contains "done": true , the
long-running operation has finished.
Response
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.healthcare.v1.OperationMetadata",
"apiMethodName": "google.cloud.healthcare.v1.fhir.FhirStoreService.RollbackFhirResources",
"createTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ",
"endTime": " YYYY-MM-DDTHH:MM:SS+ZZ:ZZ ",
"logsUrl": "https://console.cloud.google.com/ CLOUD_LOGGING_URL ",
"counter": {
"success": " SUCCESS_COUNT ",
"failure": " FAILURE_COUNT "
}
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.healthcare.v1.fhir.RollbackFhirResourcesResponse",
"fhirStore": "projects/ PROJECT_ID /locations/ LOCATION /datasets/ DATASET_ID /fhirStores/myfhirstore"
}
}
View production recovery output files
A production recovery outputs the following files. The files are created in a
subfolder in the rollback_resources folder in the destination
Cloud Storage bucket. The subfolder name is the LRO ID returned in the
fhirStores.rollback response. To view the files, see
View object metadata .
success- NUMBER -of- TOTAL_NUMBER .txt : Contains successfully recovered FHIR resources.
fail- NUMBER -of- TOTAL_NUMBER .txt : Contains
FHIR resources that failed to be recovered. An empty file is generated even if
there are no failures.
In the file names, NUMBER is the file number, and TOTAL_NUMBER
is the total number of files.
Production output file schema
The success and failure files from a production recovery use the following
schema. Error files contain an additional
ERROR_MESSAGE column.
RESOURCE_TYPE
RESOURCE_ID
ROLLBACK_VERSION_ID
NEW_VERSION_ID
ERROR_MESSAGE (Error files only)
The FHIR resource type.
The FHIR resource ID.
The current version ID of the resource at the time when the recovery started.
The current version ID of the resource after the recovery. If the disableResourceVersioning is true , or if recovering a resource would delete the resource, ROLLBACK_VERSION_ID and NEW_VERSION_ID are empty.
Error files only. Describes why the FHIR resource filed to be recovered.
Use filters to recover specific FHIR resources
The following sections describe how to use filters to recover
FHIR resources based on a filter criteria.
You specify the filters in the RollbackFhirResourceFilteringFields object when sending
a fhirStores.rollback request.
You can combine filters or use them individually for multiple use cases,
including the following:
Recovering specific FHIR resources after accidental deletion
while leaving others unchanged.
Restoring a FHIR store to a state before a specific import operation
imported certain FHIR resources.
Use a filter file
By default, PITR recovers all FHIR resources in a FHIR store. To recover
specific FHIR resources, specify the resource types and their resource IDs in a file,
and then upload the file to
Cloud Storage. Specify the location of the file in the
inputGcsObject field.
To read a filter file from Cloud Storage, you must grant permissions to the Cloud Healthcare Service Agent
service account. For more information, see Read filter files from Cloud Storage .
The filter file can have any extension. It must use the following schema,
with one FHIR resource per line:
FHIR_RESOURCE_TYPE / FHIR_RESOURCE_ID
For example, to recover a Patient resource with the ID 8f25b0ac and two
Observation resources with the IDs d507417e90e and e9950d90e , specify
the following in the filter file:
Patient/8f25b0ac
Observation/d507417e90e
Observation/e9950d90e
Use custom functions
The Cloud Healthcare API provides the following custom filtering functions.
You can combine the custom functions with the
rollbackTime
field to to apply an additional filter.
tag
Details
Function syntax
tag(" system ") = " code "
Description
Filters FHIR resources based on the resource Meta.tag element.
Arguments
system
string
A URL that references a code system. For more information, see Using Codes in Resources .
code
string
A value that identifies a concept as defined by the code system. For more information, see Using Codes in Resources .
extension_value_ts
Details
Function syntax
extension_value_ts(" url ")
Description
Filters FHIR resources based on the url value in an extension element where url is a Unix timestamp. Supports the following comparison operators: =
!=
<
>
<=
>=
Arguments
url
string
The canonical URL of a StructureDefinition resource that defines an extension.
For example, in the following extension element, the
url is http://hl7.org/fhir/StructureDefinition/timezone :
"extension" : [{
"url" : "http://hl7.org/fhir/StructureDefinition/timezone",
"valueCode" : "America/New_York"
}]
For more information, see Defining Extensions .
Filter by FHIR resource type
To filter FHIR resources
more broadly based only on the resource type, specify the resource types in the
types[]
array.
Filter by operation type
To filter for FHIR resources that were modified by a CREATE , UPDATE , or
DELETE transaction,
specify a value in the ChangeType
enum.
For example,
to only recover FHIR resources that were deleted, specify the
DELETE
value.
If you specify CHANGE_TYPE_UNSPECIFIED ,
ALL ,
or you don't specify a value, all FHIR resources are recovered.
Exclude previous recoveries
To exclude previous recoveries when recovering FHIR resources, set the
excludeRollbacks field to true . You can exclude previous recoveries if the
recoveries worked correctly and you don't want to overwrite their changes.
You can also run multiple recoveries with overlapping timestamps.
Consider the following scenario:
At 1:00 , you start a recovery with the recovery timestamp set to 0:01 .
At 2:00 , the recovery operation deletes the Patient/1 and Patient/2 Patient resources
in the FHIR store. The recovery operation ends at 3:00 .
Several days later, you run a recovery operation with the recovery timestamp
set to 1:00 . By default, running the operation would result in the following:
Incorrectly recreating the Patient/1 and Patient/2 Patient resources.
Correctly recovering FHIR resources created or updated after 3:00 .
To exclude the initial recovery operation that deleted
the Patient/1 and Patient/2 Patient resources, and avoid recreating them,
set excludeRollbacks to true .
Filter using long-running operation (LRO) IDs
If FHIR resources were modified by one or more long-running operations (LROs) ,
you can specify the LRO IDs in the operationIds field
to recover the modified resources.
See Listing LROs
for information on listing and viewing LRO IDs in a Cloud Healthcare API dataset.
Retry FHIR resources that failed to recover in production
If some FHIR resources failed a production recovery, you can retry the
recovery. Use the generated production output file ,
to find the FHIR resources that failed. Specify the types of these FHIR resources
and their IDs in a filter file , and run the recovery again.
Each time you run a recovery, the recovery is idempotent if you use the
same configuration in each request and
the timestamp is within the last 21 days.
Limitations
PITR doesn't enforce referential integrity, regardless of the
disableReferentialIntegrity setting on the FHIR store. Restoring only some FHIR
resources might leave the FHIR store in a state that violates referential
integrity.
PITR skips FHIR profile validation because the restored FHIR resources
were validated when they were created or updated. If the FHIR store profile
configuration changed, PITR might leave the FHIR store in a state that
violates profile validation.
If the value of rollbackTime precedes the time when a FHIR resource was deleted
in the FHIR store, the FHIR store must have enableUpdateCreate enabled or the resource
won't be recovered.
You can update a FHIR store or read and write data during a recovery,
but you might see unexpected results depending on the recovery stage. For example,
a read request might return a combination of recovered and non-recovered
FHIR resources. If you update a resource, the recovery might overwrite the
update.
PITR keeps FHIR resource history. Each restored resource
gets a new current version and its history is retained.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
