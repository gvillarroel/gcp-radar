---
title: "Cloud Workstations API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/reference/rest
  title: "Cloud Workstations API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Reference
Send feedback
Cloud Workstations API
Stay organized with collections
Save and categorize content based on your preferences.
Allows administrators to create managed developer environments in the cloud.
REST Resource: v1beta.projects.locations.operations
REST Resource: v1beta.projects.locations.workstationClusters
REST Resource:
v1beta.projects.locations.workstationClusters.workstationConfigs
REST Resource:
v1beta.projects.locations.workstationClusters.workstationConfigs.workstations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.workstationClusters
REST Resource: v1.projects.locations.workstationClusters.workstationConfigs
REST Resource:
v1.projects.locations.workstationClusters.workstationConfigs.workstations
Service: workstations.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://workstations.googleapis.com/$discovery/rest?version=v1
https://workstations.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://workstations.googleapis.com
REST Resource: v1beta.projects.locations.operations
Methods
cancel
POST /v1beta/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta.projects.locations.workstationClusters
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/workstationClusters
Creates a new workstation cluster.
delete
DELETE /v1beta/{name=projects/*/locations/*/workstationClusters/*}
Deletes the specified workstation cluster.
get
GET /v1beta/{name=projects/*/locations/*/workstationClusters/*}
Returns the requested workstation cluster.
list
GET /v1beta/{parent=projects/*/locations/*}/workstationClusters
Returns all workstation clusters in the specified location.
patch
PATCH /v1beta/{workstationCluster.name=projects/*/locations/*/workstationClusters/*}
Updates an existing workstation cluster.
REST Resource: v1beta.projects.locations.workstationClusters.workstationConfigs
Methods
create
POST /v1beta/{parent=projects/*/locations/*/workstationClusters/*}/workstationConfigs
Creates a new workstation configuration.
delete
DELETE /v1beta/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}
Deletes the specified workstation configuration.
get
GET /v1beta/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}
Returns the requested workstation configuration.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/*/workstationClusters/*}/workstationConfigs
Returns all workstation configurations in the specified cluster.
listUsable
GET /v1beta/{parent=projects/*/locations/*/workstationClusters/*}/workstationConfigs:listUsable
Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
patch
PATCH /v1beta/{workstationConfig.name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}
Updates an existing workstation configuration.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.workstationClusters.workstationConfigs.workstations
Methods
create
POST /v1beta/{parent=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}/workstations
Creates a new workstation.
delete
DELETE /v1beta/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}
Deletes the specified workstation.
generateAccessToken
POST /v1beta/{workstation=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:generateAccessToken
Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
get
GET /v1beta/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}
Returns the requested workstation.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}/workstations
Returns all Workstations using the specified workstation configuration.
listUsable
GET /v1beta/{parent=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}/workstations:listUsable
Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
patch
PATCH /v1beta/{workstation.name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}
Updates an existing workstation.
pushCredentials
POST /v1beta/{workstation=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:pushCredentials
Pushes credentials to a running workstation on behalf of a user.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:setIamPolicy
Sets the access control policy on the specified resource.
start
POST /v1beta/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:start
Starts running a workstation so that users can connect to it.
stop
POST /v1beta/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:stop
Stops running a workstation, reducing costs.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.workstationClusters
Methods
create
POST /v1/{parent=projects/*/locations/*}/workstationClusters
Creates a new workstation cluster.
delete
DELETE /v1/{name=projects/*/locations/*/workstationClusters/*}
Deletes the specified workstation cluster.
get
GET /v1/{name=projects/*/locations/*/workstationClusters/*}
Returns the requested workstation cluster.
list
GET /v1/{parent=projects/*/locations/*}/workstationClusters
Returns all workstation clusters in the specified location.
patch
PATCH /v1/{workstationCluster.name=projects/*/locations/*/workstationClusters/*}
Updates an existing workstation cluster.
REST Resource: v1.projects.locations.workstationClusters.workstationConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*/workstationClusters/*}/workstationConfigs
Creates a new workstation configuration.
delete
DELETE /v1/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}
Deletes the specified workstation configuration.
get
GET /v1/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}
Returns the requested workstation configuration.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/workstationClusters/*}/workstationConfigs
Returns all workstation configurations in the specified cluster.
listUsable
GET /v1/{parent=projects/*/locations/*/workstationClusters/*}/workstationConfigs:listUsable
Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
patch
PATCH /v1/{workstationConfig.name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}
Updates an existing workstation configuration.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.workstationClusters.workstationConfigs.workstations
Methods
create
POST /v1/{parent=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}/workstations
Creates a new workstation.
delete
DELETE /v1/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}
Deletes the specified workstation.
generateAccessToken
POST /v1/{workstation=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:generateAccessToken
Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
get
GET /v1/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}
Returns the requested workstation.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}/workstations
Returns all Workstations using the specified workstation configuration.
listUsable
GET /v1/{parent=projects/*/locations/*/workstationClusters/*/workstationConfigs/*}/workstations:listUsable
Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
patch
PATCH /v1/{workstation.name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}
Updates an existing workstation.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:setIamPolicy
Sets the access control policy on the specified resource.
start
POST /v1/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:start
Starts running a workstation so that users can connect to it.
stop
POST /v1/{name=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:stop
Stops running a workstation, reducing costs.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/workstationClusters/*/workstationConfigs/*/workstations/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
