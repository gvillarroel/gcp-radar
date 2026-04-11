---
title: "Storage Transfer API \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
  title: "Storage Transfer API \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
Storage Transfer API
Stay organized with collections
Save and categorize content based on your preferences.
Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.
Service: storagetransfer.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://storagetransfer.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://storagetransfer.googleapis.com
REST Resource: v1.googleServiceAccounts
Methods
get
GET /v1/googleServiceAccounts/{projectId}
Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects.
REST Resource: v1.projects.agentPools
Methods
create
POST /v1/projects/{projectId}/agentPools
Creates an agent pool resource.
delete
DELETE /v1/{name=projects/*/agentPools/*}
Deletes an agent pool.
get
GET /v1/{name=projects/*/agentPools/*}
Gets an agent pool.
list
GET /v1/projects/{projectId}/agentPools
Lists agent pools.
patch
PATCH /v1/{agentPool.name=projects/*/agentPools/*}
Updates an existing agent pool resource.
REST Resource: v1.transferJobs
Methods
create
POST /v1/transferJobs
Creates a transfer job that runs periodically.
delete
DELETE /v1/{jobName=transferJobs/**}
Deletes a transfer job.
get
GET /v1/{jobName=transferJobs/**}
Gets a transfer job.
list
GET /v1/transferJobs
Lists transfer jobs.
patch
PATCH /v1/{jobName=transferJobs/**}
Updates a transfer job.
run
POST /v1/{jobName=transferJobs/**}:run
Starts a new operation for the specified transfer job.
REST Resource: v1.transferOperations
Methods
cancel
POST /v1/{name=transferOperations/**}:cancel
Cancels a transfer.
get
GET /v1/{name=transferOperations/**}
Gets the latest state of a long-running operation.
list
GET /v1/{name=transferOperations}
Lists transfer operations.
pause
POST /v1/{name=transferOperations/**}:pause
Pauses a transfer operation.
resume
POST /v1/{name=transferOperations/**}:resume
Resumes a transfer operation that is paused.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
