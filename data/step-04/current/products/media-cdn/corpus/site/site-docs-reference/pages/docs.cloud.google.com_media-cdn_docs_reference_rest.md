---
title: "Network Services API \_|\_ Media CDN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/media-cdn/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/media-cdn/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/media-cdn/docs/reference/rest
  title: "Network Services API \_|\_ Media CDN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Media CDN
Reference
Send feedback
Network Services API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.edgeCacheKeysets
REST Resource: v1alpha1.projects.locations.edgeCacheOrigins
REST Resource: v1alpha1.projects.locations.edgeCacheServices
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.edgeCacheKeysets
REST Resource: v1.projects.locations.edgeCacheOrigins
REST Resource: v1.projects.locations.edgeCacheServices
REST Resource: v1.projects.locations.operations
Service: networkservices.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://networkservices.googleapis.com/$discovery/rest?version=v1
https://networkservices.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://networkservices.googleapis.com
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.edgeCacheKeysets
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/edgeCacheKeysets
Creates a new EdgeCacheKeyset in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/edgeCacheKeysets/*}
Deletes a single EdgeCacheKeyset.
get
GET /v1alpha1/{name=projects/*/locations/*/edgeCacheKeysets/*}
Gets details of a single EdgeCacheKeyset.
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/edgeCacheKeysets/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha1/{parent=projects/*/locations/*}/edgeCacheKeysets
Lists EdgeCacheKeysets in a given project and location.
patch
PATCH /v1alpha1/{edgeCacheKeyset.name=projects/*/locations/*/edgeCacheKeysets/*}
Updates the parameters of a single EdgeCacheKeyset.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/edgeCacheKeysets/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/edgeCacheKeysets/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha1.projects.locations.edgeCacheOrigins
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/edgeCacheOrigins
Creates a new EdgeCacheOrigin in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/edgeCacheOrigins/*}
Deletes a single EdgeCacheOrigin.
get
GET /v1alpha1/{name=projects/*/locations/*/edgeCacheOrigins/*}
Gets details of a single EdgeCacheOrigin.
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/edgeCacheOrigins/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha1/{parent=projects/*/locations/*}/edgeCacheOrigins
Lists EdgeCacheOrigins in a given project and location.
patch
PATCH /v1alpha1/{edgeCacheOrigin.name=projects/*/locations/*/edgeCacheOrigins/*}
Updates the parameters of a single EdgeCacheOrigin.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/edgeCacheOrigins/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/edgeCacheOrigins/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha1.projects.locations.edgeCacheServices
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/edgeCacheServices
Creates a new EdgeCacheService in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/edgeCacheServices/*}
Deletes a single EdgeCacheService.
get
GET /v1alpha1/{name=projects/*/locations/*/edgeCacheServices/*}
Gets details of a single EdgeCacheService.
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/edgeCacheServices/*}:getIamPolicy
Gets the access control policy for a resource.
invalidateCache
POST /v1alpha1/{edgeCacheService=projects/*/locations/*/edgeCacheServices/*}:invalidateCache
Sends a cache invalidation request.
list
GET /v1alpha1/{parent=projects/*/locations/*}/edgeCacheServices
Lists EdgeCacheServices in a given project and location.
patch
PATCH /v1alpha1/{edgeCacheService.name=projects/*/locations/*/edgeCacheServices/*}
Updates the parameters of a single EdgeCacheService.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/edgeCacheServices/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/edgeCacheServices/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.edgeCacheKeysets
Methods
create
POST /v1/{parent=projects/*/locations/*}/edgeCacheKeysets
Creates a new EdgeCacheKeyset in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/edgeCacheKeysets/*}
Deletes a single EdgeCacheKeyset.
get
GET /v1/{name=projects/*/locations/*/edgeCacheKeysets/*}
Gets details of a single EdgeCacheKeyset.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/edgeCacheKeysets/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/edgeCacheKeysets
Lists EdgeCacheKeysets in a given project and location.
patch
PATCH /v1/{edgeCacheKeyset.name=projects/*/locations/*/edgeCacheKeysets/*}
Updates the parameters of a single EdgeCacheKeyset.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/edgeCacheKeysets/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/edgeCacheKeysets/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.edgeCacheOrigins
Methods
create
POST /v1/{parent=projects/*/locations/*}/edgeCacheOrigins
Creates a new EdgeCacheOrigin in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/edgeCacheOrigins/*}
Deletes a single EdgeCacheOrigin.
get
GET /v1/{name=projects/*/locations/*/edgeCacheOrigins/*}
Gets details of a single EdgeCacheOrigin.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/edgeCacheOrigins/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/edgeCacheOrigins
Lists EdgeCacheOrigins in a given project and location.
patch
PATCH /v1/{edgeCacheOrigin.name=projects/*/locations/*/edgeCacheOrigins/*}
Updates the parameters of a single EdgeCacheOrigin.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/edgeCacheOrigins/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/edgeCacheOrigins/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.edgeCacheServices
Methods
create
POST /v1/{parent=projects/*/locations/*}/edgeCacheServices
Creates a new EdgeCacheService in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/edgeCacheServices/*}
Deletes a single EdgeCacheService.
get
GET /v1/{name=projects/*/locations/*/edgeCacheServices/*}
Gets details of a single EdgeCacheService.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/edgeCacheServices/*}:getIamPolicy
Gets the access control policy for a resource.
invalidateCache
POST /v1/{edgeCacheService=projects/*/locations/*/edgeCacheServices/*}:invalidateCache
Sends a cache invalidation request.
list
GET /v1/{parent=projects/*/locations/*}/edgeCacheServices
Lists EdgeCacheServices in a given project and location.
patch
PATCH /v1/{edgeCacheService.name=projects/*/locations/*/edgeCacheServices/*}
Updates the parameters of a single EdgeCacheService.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/edgeCacheServices/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/edgeCacheServices/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
