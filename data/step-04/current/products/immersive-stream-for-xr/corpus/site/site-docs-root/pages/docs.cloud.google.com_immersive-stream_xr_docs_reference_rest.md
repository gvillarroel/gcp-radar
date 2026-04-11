---
title: "Immersive Stream for XR API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest
  title: "Immersive Stream for XR API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Reference
Send feedback
Immersive Stream for XR API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1alpha1.projects.locations.streamContents
REST Resource: v1alpha1.projects.locations.streamInstances
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.streamContents
REST Resource: v1.projects.locations.streamInstances
Service: stream.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://stream.googleapis.com/$discovery/rest?version=v1
https://stream.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://stream.googleapis.com
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.operations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations.streamContents
Methods
build
POST /v1alpha1/{name=projects/*/locations/*/streamContents/*}:build
Builds the content to a Stream compatible format using the associated sources in a consumer cloud storage bucket.
create
POST /v1alpha1/{parent=projects/*/locations/*}/streamContents
Creates a new StreamContent that manages the metadata and builds of user-provided Stream compatible content sources in a consumer cloud storage bucket.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/streamContents/*}
Deletes a single StreamContent.
get
GET /v1alpha1/{name=projects/*/locations/*/streamContents/*}
Gets details of a single StreamContent.
list
GET /v1alpha1/{parent=projects/*/locations/*}/streamContents
Lists StreamContents in a given project and location.
patch
PATCH /v1alpha1/{streamContent.name=projects/*/locations/*/streamContents/*}
Updates the parameters of a single StreamContent.
REST Resource: v1alpha1.projects.locations.streamInstances
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/streamInstances
Creates a new StreamInstance that manages the turnup and rollout of the streaming service for a given StreamContent.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/streamInstances/*}
Deletes a single StreamInstance.
get
GET /v1alpha1/{name=projects/*/locations/*/streamInstances/*}
Gets details of a single StreamInstance.
list
GET /v1alpha1/{parent=projects/*/locations/*}/streamInstances
Lists StreamInstances in a given project and location.
patch
PATCH /v1alpha1/{streamInstance.name=projects/*/locations/*/streamInstances/*}
Updates the parameters of a single StreamInstance.
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
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.streamContents
Methods
build
POST /v1/{name=projects/*/locations/*/streamContents/*}:build
Builds the content to a Stream compatible format using the associated sources in a consumer cloud storage bucket.
create
POST /v1/{parent=projects/*/locations/*}/streamContents
Creates a new StreamContent that manages the metadata and builds of user-provided Stream compatible content sources in a consumer cloud storage bucket.
delete
DELETE /v1/{name=projects/*/locations/*/streamContents/*}
Deletes a single StreamContent.
get
GET /v1/{name=projects/*/locations/*/streamContents/*}
Gets details of a single StreamContent.
list
GET /v1/{parent=projects/*/locations/*}/streamContents
Lists StreamContents in a given project and location.
patch
PATCH /v1/{streamContent.name=projects/*/locations/*/streamContents/*}
Updates the parameters of a single StreamContent.
REST Resource: v1.projects.locations.streamInstances
Methods
create
POST /v1/{parent=projects/*/locations/*}/streamInstances
Creates a new StreamInstance that manages the turnup and rollout of the streaming service for a given StreamContent.
delete
DELETE /v1/{name=projects/*/locations/*/streamInstances/*}
Deletes a single StreamInstance.
get
GET /v1/{name=projects/*/locations/*/streamInstances/*}
Gets details of a single StreamInstance.
list
GET /v1/{parent=projects/*/locations/*}/streamInstances
Lists StreamInstances in a given project and location.
patch
PATCH /v1/{streamInstance.name=projects/*/locations/*/streamInstances/*}
Updates the parameters of a single StreamInstance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
