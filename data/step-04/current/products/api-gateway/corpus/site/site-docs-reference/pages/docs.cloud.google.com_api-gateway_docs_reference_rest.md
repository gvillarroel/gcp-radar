---
title: "API Gateway API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/reference/rest
  title: "API Gateway API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Reference
Send feedback
API Gateway API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1beta.projects.locations
REST Resource: v1beta.projects.locations.apis
REST Resource: v1beta.projects.locations.apis.configs
REST Resource: v1beta.projects.locations.gateways
REST Resource: v1beta.projects.locations.operations
REST Resource: v1alpha2.projects.locations
REST Resource: v1alpha2.projects.locations.apis
REST Resource: v1alpha2.projects.locations.apis.configs
REST Resource: v1alpha2.projects.locations.gateways
REST Resource: v1alpha2.projects.locations.operations
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.apis
REST Resource: v1alpha1.projects.locations.apis.configs
REST Resource: v1alpha1.projects.locations.gateways
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.apis
REST Resource: v1.projects.locations.apis.configs
REST Resource: v1.projects.locations.gateways
REST Resource: v1.projects.locations.operations
Service: apigateway.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://apigateway.googleapis.com/$discovery/rest?version=v1
https://apigateway.googleapis.com/$discovery/rest?version=v1beta
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha2
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://apigateway.googleapis.com
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.apis
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/apis
Creates a new Api in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/apis/*}
Deletes a single Api.
get
GET /v1beta/{name=projects/*/locations/*/apis/*}
Gets details of a single Api.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/*/apis/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/*}/apis
Lists Apis in a given project and location.
patch
PATCH /v1beta/{api.name=projects/*/locations/*/apis/*}
Updates the parameters of a single Api.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/*/apis/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/*/apis/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.apis.configs
Methods
create
POST /v1beta/{parent=projects/*/locations/*/apis/*}/configs
Creates a new ApiConfig in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/apis/*/configs/*}
Deletes a single ApiConfig.
get
GET /v1beta/{name=projects/*/locations/*/apis/*/configs/*}
Gets details of a single ApiConfig.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/*/apis/*/configs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/*/apis/*}/configs
Lists ApiConfigs in a given project and location.
patch
PATCH /v1beta/{apiConfig.name=projects/*/locations/*/apis/*/configs/*}
Updates the parameters of a single ApiConfig.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/*/apis/*/configs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/*/apis/*/configs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.gateways
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/gateways
Creates a new Gateway in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/gateways/*}
Deletes a single Gateway.
get
GET /v1beta/{name=projects/*/locations/*/gateways/*}
Gets details of a single Gateway.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/*/gateways/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/*}/gateways
Lists Gateways in a given project and location.
patch
PATCH /v1beta/{gateway.name=projects/*/locations/*/gateways/*}
Updates the parameters of a single Gateway.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/*/gateways/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/*/gateways/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
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
Service: apigateway.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://apigateway.googleapis.com/$discovery/rest?version=v1
https://apigateway.googleapis.com/$discovery/rest?version=v1beta
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha2
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://apigateway.googleapis.com
REST Resource: v1alpha2.projects.locations
Methods
get
GET /v1alpha2/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha2/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha2.projects.locations.apis
Methods
getIamPolicy
GET /v1alpha2/{resource=projects/*/locations/*/apis/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha2/{resource=projects/*/locations/*/apis/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource=projects/*/locations/*/apis/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.projects.locations.apis.configs
Methods
getIamPolicy
GET /v1alpha2/{resource=projects/*/locations/*/apis/*/configs/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha2/{resource=projects/*/locations/*/apis/*/configs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource=projects/*/locations/*/apis/*/configs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.projects.locations.gateways
Methods
getIamPolicy
GET /v1alpha2/{resource=projects/*/locations/*/gateways/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha2/{resource=projects/*/locations/*/gateways/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource=projects/*/locations/*/gateways/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.projects.locations.operations
Methods
cancel
POST /v1alpha2/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha2/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha2/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha2/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
Service: apigateway.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://apigateway.googleapis.com/$discovery/rest?version=v1
https://apigateway.googleapis.com/$discovery/rest?version=v1beta
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha2
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://apigateway.googleapis.com
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.apis
Methods
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/apis/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/apis/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/apis/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha1.projects.locations.apis.configs
Methods
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/apis/*/configs/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/apis/*/configs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/apis/*/configs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha1.projects.locations.gateways
Methods
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/gateways/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/gateways/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/gateways/*}:testIamPermissions
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
Service: apigateway.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://apigateway.googleapis.com/$discovery/rest?version=v1
https://apigateway.googleapis.com/$discovery/rest?version=v1beta
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha2
https://apigateway.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://apigateway.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.apis
Methods
create
POST /v1/{parent=projects/*/locations/*}/apis
Creates a new Api in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/apis/*}
Deletes a single Api.
get
GET /v1/{name=projects/*/locations/*/apis/*}
Gets details of a single Api.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/apis/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/apis
Lists Apis in a given project and location.
patch
PATCH /v1/{api.name=projects/*/locations/*/apis/*}
Updates the parameters of a single Api.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/apis/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/apis/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.apis.configs
Methods
create
POST /v1/{parent=projects/*/locations/*/apis/*}/configs
Creates a new ApiConfig in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/apis/*/configs/*}
Deletes a single ApiConfig.
get
GET /v1/{name=projects/*/locations/*/apis/*/configs/*}
Gets details of a single ApiConfig.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/apis/*/configs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/apis/*}/configs
Lists ApiConfigs in a given project and location.
patch
PATCH /v1/{apiConfig.name=projects/*/locations/*/apis/*/configs/*}
Updates the parameters of a single ApiConfig.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/apis/*/configs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/apis/*/configs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.gateways
Methods
create
POST /v1/{parent=projects/*/locations/*}/gateways
Creates a new Gateway in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/gateways/*}
Deletes a single Gateway.
get
GET /v1/{name=projects/*/locations/*/gateways/*}
Gets details of a single Gateway.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/gateways/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/gateways
Lists Gateways in a given project and location.
patch
PATCH /v1/{gateway.name=projects/*/locations/*/gateways/*}
Updates the parameters of a single Gateway.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/gateways/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/gateways/*}:testIamPermissions
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
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
