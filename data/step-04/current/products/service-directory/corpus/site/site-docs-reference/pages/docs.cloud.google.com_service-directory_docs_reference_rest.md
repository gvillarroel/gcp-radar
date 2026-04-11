---
title: "Service Directory API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/reference/rest
  title: "Service Directory API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Reference
Send feedback
Service Directory API
Stay organized with collections
Save and categorize content based on your preferences.
Service Directory is a platform for discovering, publishing, and connecting services.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.namespaces
REST Resource: v1beta1.projects.locations.namespaces.services
REST Resource: v1beta1.projects.locations.namespaces.services.endpoints
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.namespaces
REST Resource: v1.projects.locations.namespaces.services
REST Resource: v1.projects.locations.namespaces.services.endpoints
Service: servicedirectory.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://servicedirectory.googleapis.com/$discovery/rest?version=v1
https://servicedirectory.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://servicedirectory.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.namespaces
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/namespaces
Creates a namespace, and returns the new namespace.
delete
DELETE /v1beta1/{name=projects/*/locations/*/namespaces/*}
Deletes a namespace.
get
GET /v1beta1/{name=projects/*/locations/*/namespaces/*}
Gets a namespace.
getIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/namespaces/*}:getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).
list
GET /v1beta1/{parent=projects/*/locations/*}/namespaces
Lists all namespaces.
patch
PATCH /v1beta1/{namespace.name=projects/*/locations/*/namespaces/*}
Updates a namespace.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/namespaces/*}:setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/namespaces/*}:testIamPermissions
Tests IAM permissions for a resource (namespace or service only).
REST Resource: v1beta1.projects.locations.namespaces.services
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/namespaces/*}/services
Creates a service, and returns the new service.
delete
DELETE /v1beta1/{name=projects/*/locations/*/namespaces/*/services/*}
Deletes a service.
get
GET /v1beta1/{name=projects/*/locations/*/namespaces/*/services/*}
Gets a service.
getIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/namespaces/*/services/*}:getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).
list
GET /v1beta1/{parent=projects/*/locations/*/namespaces/*}/services
Lists all services belonging to a namespace.
patch
PATCH /v1beta1/{service.name=projects/*/locations/*/namespaces/*/services/*}
Updates a service.
resolve
POST /v1beta1/{name=projects/*/locations/*/namespaces/*/services/*}:resolve
Returns a service and its associated endpoints.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/namespaces/*/services/*}:setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/namespaces/*/services/*}:testIamPermissions
Tests IAM permissions for a resource (namespace or service only).
REST Resource: v1beta1.projects.locations.namespaces.services.endpoints
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/namespaces/*/services/*}/endpoints
Creates an endpoint, and returns the new endpoint.
delete
DELETE /v1beta1/{name=projects/*/locations/*/namespaces/*/services/*/endpoints/*}
Deletes an endpoint.
get
GET /v1beta1/{name=projects/*/locations/*/namespaces/*/services/*/endpoints/*}
Gets an endpoint.
list
GET /v1beta1/{parent=projects/*/locations/*/namespaces/*/services/*}/endpoints
Lists all endpoints.
patch
PATCH /v1beta1/{endpoint.name=projects/*/locations/*/namespaces/*/services/*/endpoints/*}
Updates an endpoint.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.namespaces
Methods
create
POST /v1/{parent=projects/*/locations/*}/namespaces
Creates a namespace, and returns the new namespace.
delete
DELETE /v1/{name=projects/*/locations/*/namespaces/*}
Deletes a namespace.
get
GET /v1/{name=projects/*/locations/*/namespaces/*}
Gets a namespace.
getIamPolicy
POST /v1/{resource=projects/*/locations/*/namespaces/*}:getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).
list
GET /v1/{parent=projects/*/locations/*}/namespaces
Lists all namespaces.
patch
PATCH /v1/{namespace.name=projects/*/locations/*/namespaces/*}
Updates a namespace.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/namespaces/*}:setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).
testIamPermissions
POST /v1/{resource=projects/*/locations/*/namespaces/*}:testIamPermissions
Tests IAM permissions for a resource (namespace or service only).
REST Resource: v1.projects.locations.namespaces.services
Methods
create
POST /v1/{parent=projects/*/locations/*/namespaces/*}/services
Creates a service, and returns the new service.
delete
DELETE /v1/{name=projects/*/locations/*/namespaces/*/services/*}
Deletes a service.
get
GET /v1/{name=projects/*/locations/*/namespaces/*/services/*}
Gets a service.
getIamPolicy
POST /v1/{resource=projects/*/locations/*/namespaces/*/services/*}:getIamPolicy
Gets the IAM Policy for a resource (namespace or service only).
list
GET /v1/{parent=projects/*/locations/*/namespaces/*}/services
Lists all services belonging to a namespace.
patch
PATCH /v1/{service.name=projects/*/locations/*/namespaces/*/services/*}
Updates a service.
resolve
POST /v1/{name=projects/*/locations/*/namespaces/*/services/*}:resolve
Returns a service and its associated endpoints.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/namespaces/*/services/*}:setIamPolicy
Sets the IAM Policy for a resource (namespace or service only).
testIamPermissions
POST /v1/{resource=projects/*/locations/*/namespaces/*/services/*}:testIamPermissions
Tests IAM permissions for a resource (namespace or service only).
REST Resource: v1.projects.locations.namespaces.services.endpoints
Methods
create
POST /v1/{parent=projects/*/locations/*/namespaces/*/services/*}/endpoints
Creates an endpoint, and returns the new endpoint.
delete
DELETE /v1/{name=projects/*/locations/*/namespaces/*/services/*/endpoints/*}
Deletes an endpoint.
get
GET /v1/{name=projects/*/locations/*/namespaces/*/services/*/endpoints/*}
Gets an endpoint.
list
GET /v1/{parent=projects/*/locations/*/namespaces/*/services/*}/endpoints
Lists all endpoints.
patch
PATCH /v1/{endpoint.name=projects/*/locations/*/namespaces/*/services/*/endpoints/*}
Updates an endpoint.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
