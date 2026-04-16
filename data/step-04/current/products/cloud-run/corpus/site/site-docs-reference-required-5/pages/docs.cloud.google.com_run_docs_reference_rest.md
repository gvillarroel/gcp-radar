---
title: "Cloud Run Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/reference/about-api-versions
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/rest
  title: "Cloud Run Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
Cloud Run Admin API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v2.projects.locations.jobs
REST Resource: v2.projects.locations.jobs.executions
REST Resource: v2.projects.locations.jobs.executions.tasks
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.locations.services
REST Resource: v2.projects.locations.services.revisions
REST Resource: v2.projects.locations.workerPools
REST Resource: v2.projects.locations.workerPools.revisions
REST Resource: v1.namespaces.authorizeddomains
REST Resource: v1.namespaces.configurations
REST Resource: v1.namespaces.domainmappings
REST Resource: v1.namespaces.executions
REST Resource: v1.namespaces.jobs
REST Resource: v1.namespaces.revisions
REST Resource: v1.namespaces.routes
REST Resource: v1.namespaces.services
REST Resource: v1.namespaces.tasks
REST Resource: v1.namespaces.workerpools
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.jobs
REST Resource: v1.projects.locations.services
REST Resource: v1.projects.locations.workerpools
Service: run.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://run.googleapis.com/$discovery/rest?version=v2
https://run.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
Global endpoint
https://run.googleapis.com
For v2: This is the preferred endpoint for all methods.
Global list (e.g. using "-" as region) is not supported.
Locational endpoints are also supported.
For v1, this endpoint only supports Global List: use locational endpoints instead.
Locational endpoints
For v2, locational endpoints are supported, and region must match the location in the method path. For v1, locational endpoints are required.
REST Resource: v2.projects.locations.jobs
Methods
create
POST /v2/{parent}/jobs
Creates a Job.
delete
DELETE /v2/{name}
Deletes a Job.
get
GET /v2/{name}
Gets information about a Job.
getIamPolicy
GET /v2/{resource}:getIamPolicy
Gets the IAM Access Control policy currently in effect for the given Job.
list
GET /v2/{parent}/jobs
Lists Jobs.
patch
PATCH /v2/{job.name}
Updates a Job.
run
POST /v2/{name}:run
Triggers creation of a new Execution of this Job.
setIamPolicy
POST /v2/{resource}:setIamPolicy
Sets the IAM Access control policy for the specified Job.
testIamPermissions
POST /v2/{resource}:testIamPermissions
Returns permissions that a caller has on the specified Project.
REST Resource: v2.projects.locations.jobs.executions
Methods
cancel
POST /v2/{name}:cancel
Cancels an Execution.
delete
DELETE /v2/{name}
Deletes an Execution.
get
GET /v2/{name}
Gets information about an Execution.
list
GET /v2/{parent}/executions
Lists Executions from a Job.
REST Resource: v2.projects.locations.jobs.executions.tasks
Methods
get
GET /v2/{name}
Gets information about a Task.
list
GET /v2/{parent}/tasks
Lists Tasks from an Execution of a Job.
REST Resource: v2.projects.locations.operations
Methods
delete
DELETE /v2/{name}
Deletes a long-running operation.
get
GET /v2/{name}
Gets the latest state of a long-running operation.
list
GET /v2/{name}/operations
Lists operations that match the specified filter in the request.
wait
POST /v2/{name}:wait
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
REST Resource: v2.projects.locations.services
Methods
create
POST /v2/{parent}/services
Creates a new Service in a given project and location.
delete
DELETE /v2/{name}
Deletes a Service.
get
GET /v2/{name}
Gets information about a Service.
getIamPolicy
GET /v2/{resource}:getIamPolicy
Gets the IAM Access Control policy currently in effect for the given Cloud Run Service.
list
GET /v2/{parent}/services
Lists Services.
patch
PATCH /v2/{service.name}
Updates a Service.
setIamPolicy
POST /v2/{resource}:setIamPolicy
Sets the IAM Access control policy for the specified Service.
testIamPermissions
POST /v2/{resource}:testIamPermissions
Returns permissions that a caller has on the specified Project.
REST Resource: v2.projects.locations.services.revisions
Methods
delete
DELETE /v2/{name}
Deletes a Revision.
get
GET /v2/{name}
Gets information about a Revision.
list
GET /v2/{parent}/revisions
Lists Revisions from a given Service, or from a given location.
REST Resource: v2.projects.locations.workerPools
Methods
create
POST /v2/{parent}/workerPools
Creates a new WorkerPool in a given project and location.
delete
DELETE /v2/{name}
Deletes a WorkerPool.
get
GET /v2/{name}
Gets information about a WorkerPool.
getIamPolicy
GET /v2/{resource}:getIamPolicy
Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool.
list
GET /v2/{parent}/workerPools
Lists WorkerPools.
patch
PATCH /v2/{workerPool.name}
Updates a WorkerPool.
setIamPolicy
POST /v2/{resource}:setIamPolicy
Sets the IAM Access control policy for the specified WorkerPool.
testIamPermissions
POST /v2/{resource}:testIamPermissions
Returns permissions that a caller has on the specified Project.
REST Resource: v2.projects.locations.workerPools.revisions
Methods
delete
DELETE /v2/{name}
Deletes a Revision.
get
GET /v2/{name}
Gets information about a Revision.
list
GET /v2/{parent}/revisions
Lists Revisions from a given Service, or from a given location.
REST Resource: v1.namespaces.authorizeddomains
Methods
list
GET /apis/domains.cloudrun.com/v1/{parent}/authorizeddomains
List authorized domains.
REST Resource: v1.namespaces.configurations
Methods
get
GET /apis/serving.knative.dev/v1/{name}
Get information about a configuration.
list
GET /apis/serving.knative.dev/v1/{parent}/configurations
List configurations.
REST Resource: v1.namespaces.domainmappings
Methods
create
POST /apis/domains.cloudrun.com/v1/{parent}/domainmappings
Create a new domain mapping.
delete
DELETE /apis/domains.cloudrun.com/v1/{name}
Delete a domain mapping.
get
GET /apis/domains.cloudrun.com/v1/{name}
Get information about a domain mapping.
list
GET /apis/domains.cloudrun.com/v1/{parent}/domainmappings
List all domain mappings.
REST Resource: v1.namespaces.executions
Methods
cancel
POST /apis/run.googleapis.com/v1/{name}:cancel
Cancel an execution.
delete
DELETE /apis/run.googleapis.com/v1/{name}
Delete an execution.
get
GET /apis/run.googleapis.com/v1/{name}
Get information about an execution.
list
GET /apis/run.googleapis.com/v1/{parent}/executions
List executions.
REST Resource: v1.namespaces.jobs
Methods
create
POST /apis/run.googleapis.com/v1/{parent}/jobs
Create a job.
delete
DELETE /apis/run.googleapis.com/v1/{name}
Delete a job.
get
GET /apis/run.googleapis.com/v1/{name}
Get information about a job.
list
GET /apis/run.googleapis.com/v1/{parent}/jobs
List jobs.
replaceJob
PUT /apis/run.googleapis.com/v1/{name}
Replace a job.
run
POST /apis/run.googleapis.com/v1/{name}:run
Trigger creation of a new execution of this job.
REST Resource: v1.namespaces.revisions
Methods
delete
DELETE /apis/serving.knative.dev/v1/{name}
Delete a revision.
get
GET /apis/serving.knative.dev/v1/{name}
Get information about a revision.
list
GET /apis/serving.knative.dev/v1/{parent}/revisions
List revisions.
REST Resource: v1.namespaces.routes
Methods
get
GET /apis/serving.knative.dev/v1/{name}
Get information about a route.
list
GET /apis/serving.knative.dev/v1/{parent}/routes
List routes.
REST Resource: v1.namespaces.services
Methods
create
POST /apis/serving.knative.dev/v1/{parent}/services
Creates a new Service.
delete
DELETE /apis/serving.knative.dev/v1/{name}
Deletes the provided service.
get
GET /apis/serving.knative.dev/v1/{name}
Gets information about a service.
list
GET /apis/serving.knative.dev/v1/{parent}/services
Lists services for the given project and region.
replaceService
PUT /apis/serving.knative.dev/v1/{name}
Replaces a service.
REST Resource: v1.namespaces.tasks
Methods
get
GET /apis/run.googleapis.com/v1/{name}
Get information about a task.
list
GET /apis/run.googleapis.com/v1/{parent}/tasks
List tasks.
REST Resource: v1.namespaces.workerpools
Methods
create
POST /apis/run.googleapis.com/v1/{parent}/workerpools
Creates a new WorkerPool.
delete
DELETE /apis/run.googleapis.com/v1/{name}
Deletes the provided worker pool.
get
GET /apis/run.googleapis.com/v1/{name}
Gets information about a worker pool.
list
GET /apis/run.googleapis.com/v1/{parent}/workerpools
Lists worker pools for the given project and region.
replaceWorkerPool
PUT /apis/run.googleapis.com/v1/{name}
Replaces a worker pool.
REST Resource: v1.projects.locations
Methods
list
GET /v1/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.jobs
Methods
getIamPolicy
GET /v1/{resource}:getIamPolicy
Get the IAM Access Control policy currently in effect for the given job.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the IAM Access control policy for the specified job.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified job.
REST Resource: v1.projects.locations.services
Methods
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the IAM Access Control policy currently in effect for the given Cloud Run service.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the IAM Access control policy for the specified Service.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified Project.
REST Resource: v1.projects.locations.workerpools
Methods
getIamPolicy
GET /v1/{resource}:getIamPolicy
Get the IAM Access Control policy currently in effect for the given worker pool.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the IAM Access control policy for the specified worker pool.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified worker pool.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-13 UTC."],[],[]]
