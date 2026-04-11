---
title: "Cloud TPU API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tpu/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/tpu/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/tpu/docs/reference/rest
  title: "Cloud TPU API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud TPU
Reference
Send feedback
Cloud TPU API
Stay organized with collections
Save and categorize content based on your preferences.
TPU API provides customers with access to Google TPU technology.
REST Resource: v2alpha1.projects.locations
REST Resource: v2alpha1.projects.locations.acceleratorTypes
REST Resource: v2alpha1.projects.locations.nodes
REST Resource: v2alpha1.projects.locations.operations
REST Resource: v2alpha1.projects.locations.queuedResources
REST Resource: v2alpha1.projects.locations.reservations
REST Resource: v2alpha1.projects.locations.runtimeVersions
REST Resource: v2.projects.locations
REST Resource: v2.projects.locations.acceleratorTypes
REST Resource: v2.projects.locations.nodes
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.locations.queuedResources
REST Resource: v2.projects.locations.runtimeVersions
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.acceleratorTypes
REST Resource: v1alpha1.projects.locations.nodes
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1alpha1.projects.locations.tensorflowVersions
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.acceleratorTypes
REST Resource: v1.projects.locations.nodes
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.tensorflowVersions
Service: tpu.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://tpu.googleapis.com/$discovery/rest?version=v2
https://tpu.googleapis.com/$discovery/rest?version=v2alpha1
https://tpu.googleapis.com/$discovery/rest?version=v1
https://tpu.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://tpu.googleapis.com
REST Resource: v2alpha1.projects.locations
Methods
generate Service Identity
POST /v2alpha1/{parent=projects/*/locations/*}:generateServiceIdentity
Generates the Cloud TPU service identity for the project.
get
GET /v2alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v2alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v2alpha1.projects.locations.acceleratorTypes
Methods
get
GET /v2alpha1/{name=projects/*/locations/*/acceleratorTypes/*}
Gets AcceleratorType.
list
GET /v2alpha1/{parent=projects/*/locations/*}/acceleratorTypes
Lists accelerator types supported by this API.
REST Resource: v2alpha1.projects.locations.nodes
Methods
create
POST /v2alpha1/{parent=projects/*/locations/*}/nodes
Creates a node.
delete
DELETE /v2alpha1/{name=projects/*/locations/*/nodes/*}
Deletes a node.
get
GET /v2alpha1/{name=projects/*/locations/*/nodes/*}
Gets the details of a node.
get Guest Attributes
POST /v2alpha1/{name=projects/*/locations/*/nodes/*}:getGuestAttributes
Retrieves the guest attributes for the node.
list
GET /v2alpha1/{parent=projects/*/locations/*}/nodes
Lists nodes.
patch
PATCH /v2alpha1/{node.name=projects/*/locations/*/nodes/*}
Updates the configurations of a node.
perform Maintenance
POST /v2alpha1/{name=projects/*/locations/*/nodes/*}:performMaintenance
Perform manual maintenance on a node.
simulate Maintenance Event
POST /v2alpha1/{name=projects/*/locations/*/nodes/*}:simulateMaintenanceEvent
Simulates a maintenance event.
start
POST /v2alpha1/{name=projects/*/locations/*/nodes/*}:start
Starts a node.
stop
POST /v2alpha1/{name=projects/*/locations/*/nodes/*}:stop
Stops a node.
REST Resource: v2alpha1.projects.locations.operations
Methods
cancel
POST /v2alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v2alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v2alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2alpha1.projects.locations.queuedResources
Methods
create
POST /v2alpha1/{parent=projects/*/locations/*}/queuedResources
Creates a QueuedResource TPU instance.
delete
DELETE /v2alpha1/{name=projects/*/locations/*/queuedResources/*}
Deletes a QueuedResource TPU instance.
get
GET /v2alpha1/{name=projects/*/locations/*/queuedResources/*}
Gets details of a queued resource.
list
GET /v2alpha1/{parent=projects/*/locations/*}/queuedResources
Lists queued resources.
perform Maintenance Queued Resource
POST /v2alpha1/{name=projects/*/locations/*/queuedResources/*}:performMaintenanceQueuedResource
Perform manual maintenance on specific nodes of a QueuedResource.
reset
POST /v2alpha1/{name=projects/*/locations/*/queuedResources/*}:reset
Resets a QueuedResource TPU instance
REST Resource: v2alpha1.projects.locations.reservations
Methods
list
GET /v2alpha1/{parent=projects/*/locations/*}/reservations
Retrieves the reservations for the given project in the given location.
REST Resource: v2alpha1.projects.locations.runtimeVersions
Methods
get
GET /v2alpha1/{name=projects/*/locations/*/runtimeVersions/*}
Gets a runtime version.
list
GET /v2alpha1/{parent=projects/*/locations/*}/runtimeVersions
Lists runtime versions supported by this API.
REST Resource: v2.projects.locations
Methods
generate Service Identity
POST /v2/{parent=projects/*/locations/*}:generateServiceIdentity
Generates the Cloud TPU service identity for the project.
get
GET /v2/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v2/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v2.projects.locations.acceleratorTypes
Methods
get
GET /v2/{name=projects/*/locations/*/acceleratorTypes/*}
Gets AcceleratorType.
list
GET /v2/{parent=projects/*/locations/*}/acceleratorTypes
Lists accelerator types supported by this API.
REST Resource: v2.projects.locations.nodes
Methods
create
POST /v2/{parent=projects/*/locations/*}/nodes
Creates a node.
delete
DELETE /v2/{name=projects/*/locations/*/nodes/*}
Deletes a node.
get
GET /v2/{name=projects/*/locations/*/nodes/*}
Gets the details of a node.
get Guest Attributes
POST /v2/{name=projects/*/locations/*/nodes/*}:getGuestAttributes
Retrieves the guest attributes for the node.
list
GET /v2/{parent=projects/*/locations/*}/nodes
Lists nodes.
patch
PATCH /v2/{node.name=projects/*/locations/*/nodes/*}
Updates the configurations of a node.
start
POST /v2/{name=projects/*/locations/*/nodes/*}:start
Starts a node.
stop
POST /v2/{name=projects/*/locations/*/nodes/*}:stop
Stops a node.
REST Resource: v2.projects.locations.operations
Methods
cancel
POST /v2/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v2/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v2/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v2/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.locations.queuedResources
Methods
create
POST /v2/{parent=projects/*/locations/*}/queuedResources
Creates a QueuedResource TPU instance.
delete
DELETE /v2/{name=projects/*/locations/*/queuedResources/*}
Deletes a QueuedResource TPU instance.
get
GET /v2/{name=projects/*/locations/*/queuedResources/*}
Gets details of a queued resource.
list
GET /v2/{parent=projects/*/locations/*}/queuedResources
Lists queued resources.
reset
POST /v2/{name=projects/*/locations/*/queuedResources/*}:reset
Resets a QueuedResource TPU instance
REST Resource: v2.projects.locations.runtimeVersions
Methods
get
GET /v2/{name=projects/*/locations/*/runtimeVersions/*}
Gets a runtime version.
list
GET /v2/{parent=projects/*/locations/*}/runtimeVersions
Lists runtime versions supported by this API.
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.acceleratorTypes
Methods
get
GET /v1alpha1/{name=projects/*/locations/*/acceleratorTypes/*}
Gets AcceleratorType.
list
GET /v1alpha1/{parent=projects/*/locations/*}/acceleratorTypes
Lists accelerator types supported by this API.
REST Resource: v1alpha1.projects.locations.nodes
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/nodes
Creates a node.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/nodes/*}
Deletes a node.
get
GET /v1alpha1/{name=projects/*/locations/*/nodes/*}
Gets the details of a node.
list
GET /v1alpha1/{parent=projects/*/locations/*}/nodes
Lists nodes.
reimage
POST /v1alpha1/{name=projects/*/locations/*/nodes/*}:reimage
Reimages a node's OS.
start
POST /v1alpha1/{name=projects/*/locations/*/nodes/*}:start
Starts a node.
stop
POST /v1alpha1/{name=projects/*/locations/*/nodes/*}:stop
Stops a node.
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
REST Resource: v1alpha1.projects.locations.tensorflowVersions
Methods
get
GET /v1alpha1/{name=projects/*/locations/*/tensorflowVersions/*}
Gets TensorFlow Version.
list
GET /v1alpha1/{parent=projects/*/locations/*}/tensorflowVersions
Lists TensorFlow versions supported by this API.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.acceleratorTypes
Methods
get
GET /v1/{name=projects/*/locations/*/acceleratorTypes/*}
Gets AcceleratorType.
list
GET /v1/{parent=projects/*/locations/*}/acceleratorTypes
Lists accelerator types supported by this API.
REST Resource: v1.projects.locations.nodes
Methods
create
POST /v1/{parent=projects/*/locations/*}/nodes
Creates a node.
delete
DELETE /v1/{name=projects/*/locations/*/nodes/*}
Deletes a node.
get
GET /v1/{name=projects/*/locations/*/nodes/*}
Gets the details of a node.
list
GET /v1/{parent=projects/*/locations/*}/nodes
Lists nodes.
reimage
POST /v1/{name=projects/*/locations/*/nodes/*}:reimage
Reimages a node's OS.
start
POST /v1/{name=projects/*/locations/*/nodes/*}:start
Starts a node.
stop
POST /v1/{name=projects/*/locations/*/nodes/*}:stop
Stops a node, this operation is only available with single TPU nodes.
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
REST Resource: v1.projects.locations.tensorflowVersions
Methods
get
GET /v1/{name=projects/*/locations/*/tensorflowVersions/*}
Gets TensorFlow Version.
list
GET /v1/{parent=projects/*/locations/*}/tensorflowVersions
List TensorFlow versions supported by this API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
