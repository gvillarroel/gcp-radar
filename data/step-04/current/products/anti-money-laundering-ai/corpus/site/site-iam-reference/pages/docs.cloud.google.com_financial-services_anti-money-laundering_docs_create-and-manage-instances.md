---
title: "Create and manage instances \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-instances
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-instances
  title: "Create and manage instances \_|\_ Anti Money Laundering AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create and manage instances | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Process overview
Architectural overview
Security and compliance features
Documentation policy
Glossary
Quickstart
Train and test models designed to detect money laundering
Get started
Set up a project and permissions
Create an instance
Prepare BigQuery datasets and tables
Prepare data for AML AI
Understand the AML data model and requirements
Understand data scope and duration
Select data for best performance and typology coverage
Create and manage AML AI datasets
Generate a model and evaluate performance
Overview of model preparation
Configure an engine
Manage engine versions
Create and manage engine configs
Generate a model
Create and manage models
Evaluate a model
Copy models to new instances
Create and manage backtest results
Generate risk scores and explainability
Register your parties
Party registration sharing for multiple instances
Prepare to generate prediction outputs
Create and manage prediction results
Understand prediction outputs
Best practices for your investigation process
Prepare for model and risk governance
Collect model and risk governance artifacts
Evaluate model fairness
Troubleshoot
Troubleshoot AML AI
Data validation errors
Administer AML AI
Access control
Access control with IAM
Authenticate to AML AI
Data residency
VPC service controls
Encryption
Understand encryption in transit
Encrypt data at rest (CMEK)
Monitor AML AI resources
Use audit logs
Use platform logs
Manage instances
Manage long-running operations
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Create an instance Send the request
Check for the result
Get an instance
Update an instance
List the instances
Import registered parties
Export registered parties
Delete an instance
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Create and manage instances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create an instance Send the request
Check for the result
Get an instance
Update an instance
List the instances
Import registered parties
Export registered parties
Delete an instance
This page shows you how to create and manage AML AI instances
and can be used as a quick reference guide.
Before you begin
Note: Before importing registered parties for an instance, consider whether there is another instance which uses the same parties. If so, see Party registration sharing for multiple instances .
To get the permissions that
you need to create and manage instances,
ask your administrator to grant you the
Financial Services Admin ( financialservices.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create an encryption key and grant access to the key
Create an instance
Some API methods return a
long-running operation (LRO).
These methods are asynchronous and return an Operation object; for details, see
REST Reference . The
operation might not be completed when the method returns a response. For these methods, send the
request and then check for the result. In general, all POST, PUT, UPDATE, and DELETE operations are
long-running.
Send the request
To create an instance, use the
projects.locations.instances.create
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.create
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the key ring
and the instance; use one of the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
INSTANCE_ID : a user-defined identifier for the instance
KMS_PROJECT_ID : the Google Cloud project
ID for the project containing the key ring
KEY_RING_ID : the user-defined identifier for the
key ring
KEY_ID : the user-defined identifier for the key
Note : You can't change to a different CMEK key after the instance has been
created.
Request JSON body:
{
"kmsKey": "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID "
}
To send your request, choose one of these options:
curl PowerShell
More
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
cat > request.json << 'EOF'
{
"kmsKey": "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID "
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances?instance_id= INSTANCE_ID "
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
"kmsKey": "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances?instance_id= INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
Check for the result
Use the
projects.locations.operations.get
method to check if the instance has been created. If the response contains
"done": false , repeat the command until the response contains "done": true .
This operation can take a few minutes to complete.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.operations.get
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed
in the IAM Settings
LOCATION : the location of the instance; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
OPERATION_ID : the identifier for the operation
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"endTime": "2023-03-14T16:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": true,
"response": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.Instance",
"name": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"createTime": CREATE_TIME ,
"updateTime": UPDATE_TIME ,
"state": "ACTIVE",
"kmsKey": "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID "
}
}
Get an instance
To get an instance, use the
projects.locations.instances.get
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.get
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
INSTANCE_ID : the user-defined identifier for the instance
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"createTime": "2023-03-14T15:52:55.358979323Z",
"updateTime": "2023-03-15T15:52:55.358979323Z",
"kmsKey": "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID ",
"state": "ACTIVE"
}
Update an instance
To update an instance, use the
projects.locations.instances.patch
method.
Not all fields in an instance can be updated. The following example updates the
key-value pair
user labels
associated with the instance.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.update
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
INSTANCE_ID : the user-defined identifier for the instance
KEY : The key in a key-value pair used to organize
instances. See
labels
for more information.
VALUE : The value in a key-value pair used to organize
instances. See
labels
for more information.
Request JSON body:
{
"labels": {
" KEY ": " VALUE "
}
}
To send your request, choose one of these options:
curl PowerShell
More
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
cat > request.json << 'EOF'
{
"labels": {
" KEY ": " VALUE "
}
}
EOF
Then execute the following command to send your REST request:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ?updateMask=labels"
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
"labels": {
" KEY ": " VALUE "
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ?updateMask=labels" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
For more information on how to get the result of the long-running operation (LRO), see
Check for the result .
List the instances
To list the instances for a given instance, use the
projects.locations.instances.list
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.list
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instances; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"instances": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"createTime": "2023-03-14T15:52:55.358979323Z",
"updateTime": "2023-03-15T15:52:55.358979323Z",
"kmsKey": "projects/ KMS_PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING_ID /cryptoKeys/ KEY_ID ",
"state": "ACTIVE"
}
]
}
Import registered parties
To import registered parties, first prepare a BigQuery table for
the line of business you want to register parties for. For more information, see
Register your customers .
Use one of the following schemas:
Retail parties schema
Column Type Description
party_id STRING Unique identifier of the party in the instance's datasets
party_size STRING NULL; content is ignored for retail party registrations
Commercial parties schema
Column Type Description
party_id STRING Unique identifier of the party in the instance's datasets
party_size STRING
Requested party size. The tier is based on the average number of monthly transactions for
the party over the preceding 365 days:
SMALL for small commercial parties with less than 500 average monthly transactions
LARGE for large commercial parties with greater than or equal to 500 average monthly transactions
All values are case sensitive.
To import registered parties, use the
projects.locations.instances.importRegisteredParties
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.importRegisteredParties
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
INSTANCE_ID : the user-defined identifier for the instance
BQ_INPUT_REGISTERED_PARTIES_DATASET_NAME : a
BigQuery dataset that contains a table that describes the registered parties
PARTY_REGISTRATION_TABLE : the table that
lists the registered parties
Note : You can provide multiple tables that list the registered parties. Use the
format "bq://{project}.{bqDatasetID}.{bqTableID}" for each table in the partyTables
array.
UPDATE_MODE : use REPLACE to replace parties that
are removable in the registered parties table with new parties, or use APPEND to add new parties to the
registered parties table
LINE_OF_BUSINESS : this field must match the
lineOfBusiness value in the
engine version
used by the
engine config ;
use COMMERCIAL for commercial banking customers (legal and natural entities), or use
RETAIL for retail banking customers
Request JSON body:
{
"partyTables": [
"bq:// PROJECT_ID . BQ_INPUT_REGISTERED_PARTIES_DATASET_NAME . PARTY_REGISTRATION_TABLE "
],
"mode": " UPDATE_MODE ",
"lineOfBusiness": " LINE_OF_BUSINESS "
}
To send your request, choose one of these options:
curl PowerShell
More
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
cat > request.json << 'EOF'
{
"partyTables": [
"bq:// PROJECT_ID . BQ_INPUT_REGISTERED_PARTIES_DATASET_NAME . PARTY_REGISTRATION_TABLE "
],
"mode": " UPDATE_MODE ",
"lineOfBusiness": " LINE_OF_BUSINESS "
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID :importRegisteredParties"
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
"partyTables": [
"bq:// PROJECT_ID . BQ_INPUT_REGISTERED_PARTIES_DATASET_NAME . PARTY_REGISTRATION_TABLE "
],
"mode": " UPDATE_MODE ",
"lineOfBusiness": " LINE_OF_BUSINESS "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID :importRegisteredParties" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"verb": "importRegisteredParties",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
For more information on how to get the result of the long-running operation (LRO), see
Check for the result .
When the LRO completes, the response indicates the number of parties that the
operation added, removed, or updated.
Response field Type Description
partiesAdded integer
Number of parties added by this operation
partiesRemoved integer
Number of parties removed by this operation
partiesTotal integer
Total number of parties that are registered in this instance, after the update operation was
completed
partiesUptiered integer
Total number of commercial parties that are uptiered from small to large
partiesDowntiered integer
Total number of commercial parties that are downtiered from large to small
partiesFailedToDowntier integer
Total number of commercial parties that failed to downtier from large to small
partiesFailedToRemove integer
Number of parties that failed to be removed by this operation
Export registered parties
To export registered parties, use the
projects.locations.instances.exportRegisteredParties
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.exportRegisteredParties
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
INSTANCE_ID : the user-defined identifier for the instance
BQ_OUTPUT_DATASET_NAME : a
BigQuery dataset in which to export a table that describes the registered parties
PARTY_REGISTRATION_TABLE : the table to
write the registered parties to
WRITE_DISPOSITION : the action that occurs
if the destination table already exists; use one of the following values:
WRITE_EMPTY : Only export data if the BigQuery table is empty.
WRITE_TRUNCATE : Erase all existing data in the BigQuery table
before writing to the table.
LINE_OF_BUSINESS : use COMMERCIAL for
commercial banking customers (legal and natural entities), or use RETAIL for retail banking
customers
Request JSON body:
{
"dataset": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . PARTY_REGISTRATION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"lineOfBusiness": " LINE_OF_BUSINESS "
}
To send your request, choose one of these options:
curl PowerShell
More
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
cat > request.json << 'EOF'
{
"dataset": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . PARTY_REGISTRATION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"lineOfBusiness": " LINE_OF_BUSINESS "
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID :exportRegisteredParties"
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
"dataset": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . PARTY_REGISTRATION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"lineOfBusiness": " LINE_OF_BUSINESS "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID :exportRegisteredParties" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"verb": "exportRegisteredParties",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
For more information on how to get the result of the long-running operation (LRO), see
Check for the result .
This method outputs a BigQuery table with the following schema:
Column Type Description
party_id STRING Unique identifier of the party in the instance's datasets
party_size STRING
Specifies the tier for commercial customers (large versus small). This field does not apply
to retail customers.
NULL for all retail customers
SMALL for small commercial parties with less than 500 average monthly transactions
LARGE for large commercial parties with greater than or equal to 500 average monthly transactions
All values are case sensitive.
earliest_remove_time STRING The earliest time at which the party can be removed
party_with_prediction_intent STRING The indicator that suggests if a party has been predicted on since the registration
registration_or_uptier_time STRING The time at which the party was registered or uptiered
For more information, see
Register your customers .
Delete an instance
To delete an instance, use the
projects.locations.instances.delete
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1instances.delete
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance; use one of
the
supported regions
Show locations
us-central1
us-east1
asia-south1
europe-west1
europe-west2
europe-west4
northamerica-northeast1
southamerica-east1
australia-southeast1
INSTANCE_ID : the user-defined identifier for the instance
To send your request, choose one of these options:
curl PowerShell
More
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ",
"verb": "delete",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
For more information on how to get the result of the long-running operation (LRO), see
Check for the result .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
