---
title: "Cloud Functions API \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest
  title: "Cloud Functions API \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Cloud Functions API
Stay organized with collections
Save and categorize content based on your preferences.
Manages lightweight user-provided functions executed in response to events.
REST Resource: v2beta.projects.locations
REST Resource: v2beta.projects.locations.functions
REST Resource: v2beta.projects.locations.operations
REST Resource: v2beta.projects.locations.runtimes
REST Resource: v2alpha.projects.locations
REST Resource: v2alpha.projects.locations.functions
REST Resource: v2alpha.projects.locations.operations
REST Resource: v2alpha.projects.locations.runtimes
REST Resource: v2.projects.locations
REST Resource: v2.projects.locations.functions
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.locations.runtimes
REST Resource: v1.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.functions
Service: cloudfunctions.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudfunctions.googleapis.com/$discovery/rest?version=v2
https://cloudfunctions.googleapis.com/$discovery/rest?version=v2beta
https://cloudfunctions.googleapis.com/$discovery/rest?version=v2alpha
https://cloudfunctions.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudfunctions.googleapis.com
REST Resource: v2beta.projects.locations
Methods
list
GET /v2beta/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v2beta.projects.locations.functions
Methods
abortFunctionUpgrade
POST /v2beta/{name}:abortFunctionUpgrade
Aborts generation upgrade process for a function with the given name from the specified project.
commitFunctionUpgrade
POST /v2beta/{name}:commitFunctionUpgrade
Finalizes the upgrade after which function upgrade can not be rolled back.
create
POST /v2beta/{parent}/functions
Creates a new function.
delete
DELETE /v2beta/{name}
Deletes a function with the given name from the specified project.
detachFunction
POST /v2beta/{name}:detachFunction
Detaches 2nd Gen function to Cloud Run function.
generateDownloadUrl
POST /v2beta/{name}:generateDownloadUrl
Returns a signed URL for downloading deployed function source code.
generateUploadUrl
POST /v2beta/{parent}/functions:generateUploadUrl
Returns a signed URL for uploading a function source code.
get
GET /v2beta/{name}
Returns a function with the given name from the requested project.
getIamPolicy
GET /v2beta/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2beta/{parent}/functions
Returns a list of functions that belong to the requested project.
patch
PATCH /v2beta/{function.name}
Updates existing function.
redirectFunctionUpgradeTraffic
POST /v2beta/{name}:redirectFunctionUpgradeTraffic
Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy.
rollbackFunctionUpgradeTraffic
POST /v2beta/{name}:rollbackFunctionUpgradeTraffic
Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function.
setIamPolicy
POST /v2beta/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
setupFunctionUpgradeConfig
POST /v2beta/{name}:setupFunctionUpgradeConfig
Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name.
testIamPermissions
POST /v2beta/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2beta.projects.locations.operations
Methods
get
GET /v2beta/{name}
Gets the latest state of a long-running operation.
list
GET /v2beta/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2beta.projects.locations.runtimes
Methods
list
GET /v2beta/{parent}/runtimes
Returns a list of runtimes that are supported for the requested project.
REST Resource: v2alpha.projects.locations
Methods
list
GET /v2alpha/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v2alpha.projects.locations.functions
Methods
abortFunctionUpgrade
POST /v2alpha/{name}:abortFunctionUpgrade
Aborts generation upgrade process for a function with the given name from the specified project.
commitFunctionUpgrade
POST /v2alpha/{name}:commitFunctionUpgrade
Finalizes the upgrade after which function upgrade can not be rolled back.
create
POST /v2alpha/{parent}/functions
Creates a new function.
delete
DELETE /v2alpha/{name}
Deletes a function with the given name from the specified project.
detachFunction
POST /v2alpha/{name}:detachFunction
Detaches 2nd Gen function to Cloud Run function.
generateDownloadUrl
POST /v2alpha/{name}:generateDownloadUrl
Returns a signed URL for downloading deployed function source code.
generateUploadUrl
POST /v2alpha/{parent}/functions:generateUploadUrl
Returns a signed URL for uploading a function source code.
get
GET /v2alpha/{name}
Returns a function with the given name from the requested project.
getIamPolicy
GET /v2alpha/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2alpha/{parent}/functions
Returns a list of functions that belong to the requested project.
patch
PATCH /v2alpha/{function.name}
Updates existing function.
redirectFunctionUpgradeTraffic
POST /v2alpha/{name}:redirectFunctionUpgradeTraffic
Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy.
rollbackFunctionUpgradeTraffic
POST /v2alpha/{name}:rollbackFunctionUpgradeTraffic
Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function.
setIamPolicy
POST /v2alpha/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
setupFunctionUpgradeConfig
POST /v2alpha/{name}:setupFunctionUpgradeConfig
Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name.
testIamPermissions
POST /v2alpha/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2alpha.projects.locations.operations
Methods
get
GET /v2alpha/{name}
Gets the latest state of a long-running operation.
list
GET /v2alpha/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2alpha.projects.locations.runtimes
Methods
list
GET /v2alpha/{parent}/runtimes
Returns a list of runtimes that are supported for the requested project.
REST Resource: v2.projects.locations
Methods
list
GET /v2/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v2.projects.locations.functions
Methods
abortFunctionUpgrade
POST /v2/{name}:abortFunctionUpgrade
Aborts generation upgrade process for a function with the given name from the specified project.
commitFunctionUpgrade
POST /v2/{name}:commitFunctionUpgrade
Finalizes the upgrade after which function upgrade can not be rolled back.
create
POST /v2/{parent}/functions
Creates a new function.
delete
DELETE /v2/{name}
Deletes a function with the given name from the specified project.
detachFunction
POST /v2/{name}:detachFunction
Detaches 2nd Gen function to Cloud Run function.
generateDownloadUrl
POST /v2/{name}:generateDownloadUrl
Returns a signed URL for downloading deployed function source code.
generateUploadUrl
POST /v2/{parent}/functions:generateUploadUrl
Returns a signed URL for uploading a function source code.
get
GET /v2/{name}
Returns a function with the given name from the requested project.
getIamPolicy
GET /v2/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent}/functions
Returns a list of functions that belong to the requested project.
patch
PATCH /v2/{function.name}
Updates existing function.
redirectFunctionUpgradeTraffic
POST /v2/{name}:redirectFunctionUpgradeTraffic
Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy.
rollbackFunctionUpgradeTraffic
POST /v2/{name}:rollbackFunctionUpgradeTraffic
Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function.
setIamPolicy
POST /v2/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
setupFunctionUpgradeConfig
POST /v2/{name}:setupFunctionUpgradeConfig
Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name.
testIamPermissions
POST /v2/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2.projects.locations.operations
Methods
get
GET /v2/{name}
Gets the latest state of a long-running operation.
list
GET /v2/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.locations.runtimes
Methods
list
GET /v2/{parent}/runtimes
Returns a list of runtimes that are supported for the requested project.
REST Resource: v1.operations
Methods
get
GET /v1/{name}
Gets the latest state of a long-running operation.
list
GET /v1/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations
Methods
list
GET /v1/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.functions
Methods
call
POST /v1/{name}:call
Synchronously invokes a deployed Cloud Function.
create
POST /v1/{location}/functions
Creates a new function.
delete
DELETE /v1/{name}
Deletes a function with the given name from the specified project.
generateDownloadUrl
POST /v1/{name}:generateDownloadUrl
Returns a signed URL for downloading deployed function source code.
generateUploadUrl
POST /v1/{parent}/functions:generateUploadUrl
Returns a signed URL for uploading a function source code.
get
GET /v1/{name}
Returns a function with the given name from the requested project.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the IAM access control policy for a function.
list
GET /v1/{parent}/functions
Returns a list of functions that belong to the requested project.
patch
PATCH /v1/{function.name}
Updates existing function.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the IAM access control policy on the specified function.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Tests the specified permissions against the IAM access control policy for a function.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
