---
title: "Create and manage prediction results \_|\_ Anti Money Laundering AI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-prediction-results
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-prediction-results
  title: "Create and manage prediction results \_|\_ Anti Money Laundering AI \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create and manage prediction results | Anti Money Laundering AI | Google Cloud Documentation
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
Prepare Big Query datasets and tables
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
Create prediction results Send the request
Check for the result
Export metadata
Get prediction results
Update prediction results
List the prediction results
Delete prediction results
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Create and manage prediction results
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create prediction results Send the request
Check for the result
Export metadata
Get prediction results
Update prediction results
List the prediction results
Delete prediction results
This page shows you how to create and manage AML AI prediction
results. Prediction results are saved to BigQuery tables.
For more information about the content of prediction results, see
Understand prediction outputs .
Before you begin
To get the permissions that
you need to create and manage prediction results,
ask your administrator to grant you the
Financial Services Admin ( financialservices.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create an instance
Create a model
Create a dataset
Create prediction results
Some API methods return a
long-running operation (LRO).
These methods are asynchronous and return an Operation object; for details, see
REST Reference . The
operation might not be completed when the method returns a response. For these methods, send the
request and then check for the result. In general, all POST, PUT, UPDATE, and DELETE operations are
long-running.
Send the request
To create prediction results, use the
projects.locations.instances.predictionResults.create
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1predictions.create
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance;
use one of the
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
PREDICTION_RESULTS_ID : a user-defined identifier for the prediction results
MODEL_ID : a user-defined identifier for the model
DATASET_ID : the user-defined identifier for the
dataset
used for predictions; tables should not have the training label columns
PREDICTION_END_DATE : The latest time from which
data is used to generate features for predictions. This date should be the same or earlier than the
end time of the datasets. Use RFC3339 UTC "Zulu" format (for example, 2014-10-02T15:01:23Z ).
PREDICTION_PERIODS : The number
of consecutive months to produce predictions for, ending with the last full month prior to the
prediction end date according to the dataset's timezone.
BQ_OUTPUT_DATASET_NAME : the name of the output
BigQuery dataset used for prediction
BQ_OUTPUT_PREDICTION_TABLE : the user-defined
identifier for the output BigQuery table used for predictions
BQ_OUTPUT_PREDICTION_EXPLAINABILITY_TABLE : the user-defined
identifier for the output explainability BigQuery table used for prediction;
remove the optional explainabilityDestination object from the request JSON if you don't
want to export to a BigQuery table
WRITE_DISPOSITION : the action that occurs
if the destination table already exists; use one of the following values:
WRITE_EMPTY : Only export data if the BigQuery table is empty.
WRITE_TRUNCATE : Erase all existing data in the BigQuery table
before writing to the table.
Request JSON body:
{
"model": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /models/ MODEL_ID ",
"dataset": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /datasets/ DATASET_ID ",
"endTime": " PREDICTION_END_DATE ",
"predictionPeriods": " PREDICTION_PERIODS ",
"outputs": {
"predictionDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"explainabilityDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_EXPLAINABILITY_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
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
"model": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /models/ MODEL_ID ",
"dataset": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /datasets/ DATASET_ID ",
"endTime": " PREDICTION_END_DATE ",
"predictionPeriods": " PREDICTION_PERIODS ",
"outputs": {
"predictionDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"explainabilityDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_EXPLAINABILITY_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
}
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults?prediction_result_id= PREDICTION_RESULTS_ID "
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
"model": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /models/ MODEL_ID ",
"dataset": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /datasets/ DATASET_ID ",
"endTime": " PREDICTION_END_DATE ",
"predictionPeriods": " PREDICTION_PERIODS ",
"outputs": {
"predictionDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"explainabilityDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_EXPLAINABILITY_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults?prediction_result_id= PREDICTION_RESULTS_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
Check for the result
Use the
projects.locations.operations.get
method to check if prediction results have been created. If the response contains
"done": false , repeat the command until the response contains "done": true .
These operations can take a few minutes to several hours to complete.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.operations.get
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed
in the IAM Settings
LOCATION : the location of the instance;
use one of the
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
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": true,
"response": {
"@type": "type.googleapis.com/dataresidency.monitoring.DataResidencyAugmentedView",
"tpIds": [
"i608e8cf4abb2a7d9-tp"
]
}
}
Export metadata
To export metadata from prediction results, use the
projects.locations.instances.predictionResults.exportMetadata
method.
For more information, see Exported metadata in the AML output data model .
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1predictions.exportMetadata
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
PREDICTION_RESULTS_ID : the user-defined identifier for the prediction results
BQ_OUTPUT_DATASET_NAME : a
BigQuery dataset in which to export a table that describes the structured metadata of the prediction results
STRUCTURED_METADATA_TABLE : the table to
write the structured metadata to
WRITE_DISPOSITION : the action that occurs
if the destination table already exists; use one of the following values:
WRITE_EMPTY : Only export data if the BigQuery table is empty.
WRITE_TRUNCATE : Erase all existing data in the BigQuery table
before writing to the table.
Request JSON body:
{
"structuredMetadataDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . STRUCTURED_METADATA_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
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
"structuredMetadataDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . STRUCTURED_METADATA_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
}
EOF
Then execute the following command to send your REST request:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID :exportMetadata"
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
"structuredMetadataDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . STRUCTURED_METADATA_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID :exportMetadata" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
"verb": "exportMetadata",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
For more information on how to get the result of the long-running operation (LRO), see
Check for the result .
Get prediction results
To get prediction results, use the
projects.locations.instances.predictionResults.get
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1predictions.get
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance;
use one of the
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
PREDICTION_RESULTS_ID : the user-defined identifier for the prediction results
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
"createTime": "2023-03-14T15:52:55.358979323Z",
"updateTime": "2023-03-15T15:52:55.358979323Z",
"state": "ACTIVE",
"model": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /models/ MODEL_ID ",
"dataset": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /datasets/ DATASET_ID ",
"endTime": " PREDICTION_END_DATE ",
"predictionPeriods": PREDICTION_PERIODS ,
"outputs": {
"predictionDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"explainabilityDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_EXPLAINABILITY_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
},
"lineOfBusiness": "RETAIL"
}
Update prediction results
To update prediction results, use the
projects.locations.instances.predictionResults.patch
method.
Only the labels field in prediction results can be updated. The following example
updates the key-value pair
user labels
associated with the prediction results.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1predictions.update
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance;
use one of the
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
PREDICTION_RESULTS_ID : the user-defined identifier for the prediction results
KEY : The key in a key-value pair used to organize
prediction results. See
labels
for more information.
VALUE : The value in a key-value pair used to organize
prediction results. See
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ?updateMask=labels"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ?updateMask=labels" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
For more information on how to get the result of the long-running operation (LRO), see
Check for the result .
List the prediction results
To list the prediction results for a given instance, use the
projects.locations.instances.predictionResults.list
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1predictions.list
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance;
use one of the
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"predictionResults": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
"createTime": "2023-03-14T15:52:55.358979323Z",
"updateTime": "2023-03-15T15:52:55.358979323Z",
"state": "ACTIVE",
"model": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /models/ MODEL_ID ",
"dataset": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /datasets/ DATASET_ID ",
"endTime": " PREDICTION_END_DATE ",
"predictionPeriods": PREDICTION_PERIODS ,
"outputs": {
"predictionDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
},
"explainabilityDestination": {
"tableUri": "bq:// PROJECT_ID . BQ_OUTPUT_DATASET_NAME . BQ_OUTPUT_PREDICTION_EXPLAINABILITY_TABLE ",
"writeDisposition": " WRITE_DISPOSITION "
}
},
"lineOfBusiness": "RETAIL"
}
]
}
Delete prediction results
To delete prediction results, use the
projects.locations.instances.predictionResults.delete
method.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
financialservices.v1predictions.delete
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the instance;
use one of the
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
PREDICTION_RESULTS_ID : the user-defined identifier for the prediction results
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /predictionResults/ PREDICTION_RESULTS_ID ",
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
