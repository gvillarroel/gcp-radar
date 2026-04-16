---
title: "Cloud Tasks API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/rest
  title: "Cloud Tasks API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Reference
Send feedback
Cloud Tasks API
Stay organized with collections
Save and categorize content based on your preferences.
Manages the execution of large numbers of distributed requests.
REST Resource: v2beta3.projects.locations
REST Resource: v2beta3.projects.locations.queues
REST Resource: v2beta3.projects.locations.queues.tasks
REST Resource: v2.projects.locations
REST Resource: v2.projects.locations.queues
REST Resource: v2.projects.locations.queues.tasks
Service: cloudtasks.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudtasks.googleapis.com/$discovery/rest?version=v2
https://cloudtasks.googleapis.com/$discovery/rest?version=v2beta3
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudtasks.googleapis.com
REST Resource: v2beta3.projects.locations
Methods
get
GET /v2beta3/{name=projects/*/locations/*}
Gets information about a location.
getCmekConfig
GET /v2beta3/{name=projects/*/locations/*/cmekConfig}
Gets the CMEK config.
list
GET /v2beta3/{name=projects/*}/locations
Lists information about the supported locations for this service.
updateCmekConfig
PATCH /v2beta3/{cmekConfig.name=projects/*/locations/*/cmekConfig}
Creates or Updates a CMEK config.
REST Resource: v2beta3.projects.locations.queues
Methods
create
POST /v2beta3/{parent=projects/*/locations/*}/queues
Creates a queue.
delete
DELETE /v2beta3/{name=projects/*/locations/*/queues/*}
Deletes a queue.
get
GET /v2beta3/{name=projects/*/locations/*/queues/*}
Gets a queue.
getIamPolicy
POST /v2beta3/{resource=projects/*/locations/*/queues/*}:getIamPolicy
Gets the access control policy for a Queue .
list
GET /v2beta3/{parent=projects/*/locations/*}/queues
Lists queues.
patch
PATCH /v2beta3/{queue.name=projects/*/locations/*/queues/*}
Updates a queue.
pause
POST /v2beta3/{name=projects/*/locations/*/queues/*}:pause
Pauses the queue.
purge
POST /v2beta3/{name=projects/*/locations/*/queues/*}:purge
Purges a queue by deleting all of its tasks.
resume
POST /v2beta3/{name=projects/*/locations/*/queues/*}:resume
Resume a queue.
setIamPolicy
POST /v2beta3/{resource=projects/*/locations/*/queues/*}:setIamPolicy
Sets the access control policy for a Queue .
testIamPermissions
POST /v2beta3/{resource=projects/*/locations/*/queues/*}:testIamPermissions
Returns permissions that a caller has on a Queue .
REST Resource: v2beta3.projects.locations.queues.tasks
Methods
buffer
POST /v2beta3/{queue=projects/*/locations/*/queues/*}/tasks/{taskId}:buffer
Creates and buffers a new task without the need to explicitly define a Task message.
create
POST /v2beta3/{parent=projects/*/locations/*/queues/*}/tasks
Creates a task and adds it to a queue.
delete
DELETE /v2beta3/{name=projects/*/locations/*/queues/*/tasks/*}
Deletes a task.
get
GET /v2beta3/{name=projects/*/locations/*/queues/*/tasks/*}
Gets a task.
list
GET /v2beta3/{parent=projects/*/locations/*/queues/*}/tasks
Lists the tasks in a queue.
run
POST /v2beta3/{name=projects/*/locations/*/queues/*/tasks/*}:run
Forces a task to run now.
REST Resource: v2.projects.locations
Methods
get
GET /v2/{name=projects/*/locations/*}
Gets information about a location.
getCmekConfig
GET /v2/{name=projects/*/locations/*/cmekConfig}
Gets the CMEK config.
list
GET /v2/{name=projects/*}/locations
Lists information about the supported locations for this service.
updateCmekConfig
PATCH /v2/{cmekConfig.name=projects/*/locations/*/cmekConfig}
Creates or Updates a CMEK config.
REST Resource: v2.projects.locations.queues
Methods
create
POST /v2/{parent=projects/*/locations/*}/queues
Creates a queue.
delete
DELETE /v2/{name=projects/*/locations/*/queues/*}
Deletes a queue.
get
GET /v2/{name=projects/*/locations/*/queues/*}
Gets a queue.
getIamPolicy
POST /v2/{resource=projects/*/locations/*/queues/*}:getIamPolicy
Gets the access control policy for a Queue .
list
GET /v2/{parent=projects/*/locations/*}/queues
Lists queues.
patch
PATCH /v2/{queue.name=projects/*/locations/*/queues/*}
Updates a queue.
pause
POST /v2/{name=projects/*/locations/*/queues/*}:pause
Pauses the queue.
purge
POST /v2/{name=projects/*/locations/*/queues/*}:purge
Purges a queue by deleting all of its tasks.
resume
POST /v2/{name=projects/*/locations/*/queues/*}:resume
Resume a queue.
setIamPolicy
POST /v2/{resource=projects/*/locations/*/queues/*}:setIamPolicy
Sets the access control policy for a Queue .
testIamPermissions
POST /v2/{resource=projects/*/locations/*/queues/*}:testIamPermissions
Returns permissions that a caller has on a Queue .
REST Resource: v2.projects.locations.queues.tasks
Methods
buffer
POST /v2/{queue=projects/*/locations/*/queues/*}/tasks/{taskId}:buffer
Creates and buffers a new task without the need to explicitly define a Task message.
create
POST /v2/{parent=projects/*/locations/*/queues/*}/tasks
Creates a task and adds it to a queue.
delete
DELETE /v2/{name=projects/*/locations/*/queues/*/tasks/*}
Deletes a task.
get
GET /v2/{name=projects/*/locations/*/queues/*/tasks/*}
Gets a task.
list
GET /v2/{parent=projects/*/locations/*/queues/*}/tasks
Lists the tasks in a queue.
run
POST /v2/{name=projects/*/locations/*/queues/*/tasks/*}:run
Forces a task to run now.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
