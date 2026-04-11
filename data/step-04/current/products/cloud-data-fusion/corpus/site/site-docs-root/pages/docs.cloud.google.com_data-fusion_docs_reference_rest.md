---
title: "Cloud Data Fusion API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/reference/rest
  title: "Cloud Data Fusion API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Reference
Send feedback
Cloud Data Fusion API
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Data Fusion is a fully-managed, cloud native, enterprise data integration service for quickly building and managing data pipelines. It provides a graphical interface to increase time efficiency and reduce complexity, and allows business users, developers, and data scientists to easily and reliably build scalable data integration solutions to cleanse, prepare, blend, transfer and transform data without having to wrestle with infrastructure.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.instances
REST Resource: v1beta1.projects.locations.instances.dnsPeerings
REST Resource: v1beta1.projects.locations.instances.namespaces
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1beta1.projects.locations.versions
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.instances
REST Resource: v1.projects.locations.instances.dnsPeerings
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.versions
Service: datafusion.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://datafusion.googleapis.com/$discovery/rest?version=v1
https://datafusion.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://datafusion.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
removeIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/**}:removeIamPolicy
Remove IAM policy that is currently set on the given resource.
REST Resource: v1beta1.projects.locations.instances
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/instances
Creates a new Data Fusion instance in the specified project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/instances/*}
Deletes a single Data Fusion instance.
get
GET /v1beta1/{name=projects/*/locations/*/instances/*}
Gets details of a single Data Fusion instance.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/instances/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/*}/instances
Lists Data Fusion instances in the specified project and location.
patch
PATCH /v1beta1/{instance.name=projects/*/locations/*/instances/*}
Updates a single Data Fusion instance.
restart
POST /v1beta1/{name=projects/*/locations/*/instances/*}:restart
Restart a single Data Fusion instance.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/instances/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/instances/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
upgrade
POST /v1beta1/{name=projects/*/locations/*/instances/*}:upgrade
Upgrade a single Data Fusion instance.
REST Resource: v1beta1.projects.locations.instances.dnsPeerings
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/instances/*}/dnsPeerings
Creates DNS peering on the given resource.
delete
DELETE /v1beta1/{name=projects/*/locations/*/instances/*/dnsPeerings/*}
Deletes DNS peering on the given resource.
list
GET /v1beta1/{parent=projects/*/locations/*/instances/*}/dnsPeerings
Lists DNS peerings for a given resource.
REST Resource: v1beta1.projects.locations.instances.namespaces
Methods
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/instances/*/namespaces/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/*/instances/*}/namespaces
List namespaces in a given instance
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/instances/*/namespaces/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/instances/*/namespaces/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.versions
Methods
list
GET /v1beta1/{parent=projects/*/locations/*}/versions
Lists possible versions for Data Fusion instances in the specified project and location.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.instances
Methods
create
POST /v1/{parent=projects/*/locations/*}/instances
Creates a new Data Fusion instance in the specified project and location.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*}
Deletes a single Date Fusion instance.
get
GET /v1/{name=projects/*/locations/*/instances/*}
Gets details of a single Data Fusion instance.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/instances/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/instances
Lists Data Fusion instances in the specified project and location.
patch
PATCH /v1/{instance.name=projects/*/locations/*/instances/*}
Updates a single Data Fusion instance.
restart
POST /v1/{name=projects/*/locations/*/instances/*}:restart
Restart a single Data Fusion instance.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/instances/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/instances/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.instances.dnsPeerings
Methods
create
POST /v1/{parent=projects/*/locations/*/instances/*}/dnsPeerings
Creates DNS peering on the given resource.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/dnsPeerings/*}
Deletes DNS peering on the given resource.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/dnsPeerings
Lists DNS peerings for a given resource.
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
REST Resource: v1.projects.locations.versions
Methods
list
GET /v1/{parent=projects/*/locations/*}/versions
Lists possible versions for Data Fusion instances in the specified project and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
