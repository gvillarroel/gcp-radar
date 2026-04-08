---
title: "Manage long-running operations \_|\_ Anti Money Laundering AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/manage-long-running-operations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/manage-long-running-operations
  title: "Manage long-running operations \_|\_ Anti Money Laundering AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage long-running operations | Anti Money Laundering AI | Google Cloud Documentation
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
Get details about a long-running operation
List long-running operations
Cancel a long-running operation
Delete a long-running operation
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Manage long-running operations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Get details about a long-running operation
List long-running operations
Cancel a long-running operation
Delete a long-running operation
This page describes how to manage the lifecycle of a Financial Services API
Long-Running Operation (LRO).
Long-Running Operations are returned when method
calls might take a long time to complete. For example, the Financial Services API
creates an LRO every time you call
projects.locations.instances.create .
The LRO tracks the status of the processing job.
You can use the projects.locations.operations methods
that the Financial Services API provides to check the status of
LROs. You can also list , cancel ,
or delete LROs.
LROs are managed at the Google Cloud project and location level.
When making a request to the API, include the Google Cloud project
and the location in which the LRO is running.
The record of an LRO is kept for approximately 30 days after the LRO
finishes. You can't view or list an LRO after that point.
Get details about a long-running operation
Suppose you created an instance .
The name value in the response shows that the Financial Services API
created an LRO named projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID .
Use the
projects.locations.operations.get
method to check if the instance has been created. If the response contains
"done": false , repeat the command until the response contains "done": true .
This operation can take a few minutes to complete.
Note: Some operations may take hours to complete.
You can also retrieve the LRO name by listing long-running operations .
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
List long-running operations
Use the
projects.locations.operations.list
method to list all of the operations in a given location.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the operations;
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
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"operations": [
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": "2023-03-14T15:52:55.358979323Z",
"endTime": "2023-03-14T16:52:55.358979323Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID /engineConfigs/ ENGINE_CONFIG_ID ",
"verb": "create",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
},
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ my-other-operation ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.financialservices.v1.OperationMetadata",
"createTime": CREATE_TIME ,
"endTime": END_TIME ,
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
]
}
Cancel a long-running operation
Use the
projects.locations.operations.cancel
method to start asynchronous cancellation on a long-running operation. The
server makes a best effort to cancel the operation, but success is not
guaranteed.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the operation;
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID :cancel"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID :cancel" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{}
Delete a long-running operation
Use the
projects.locations.operations.delete
method to delete a completed long-running operation. This method indicates that
the client is no longer interested in the operation result. It does not cancel
the operation.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud project ID listed in
the IAM Settings
LOCATION : the location of the operation;
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
curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method DELETE ` -Headers $headers ` -Uri "https://financialservices.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{}
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
