---
title: "Cloud Datastore API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest
  title: "Cloud Datastore API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Reference
Send feedback
Cloud Datastore API
Stay organized with collections
Save and categorize content based on your preferences.
Accesses the schemaless NoSQL database to provide fully managed, robust, scalable storage for your application.
REST Resource: v1beta1.projects
REST Resource: v1.projects
REST Resource: v1.projects.indexes
REST Resource: v1.projects.operations
Service: datastore.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://datastore.googleapis.com/$discovery/rest?version=v1
https://datastore.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://datastore.googleapis.com
Regional service endpoint
A regional service endpoint is a base URL that specifies the network address of an API service in a single region. A service that is available in multiple regions might have multiple regional endpoints. Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 asia-southeast3 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-north2 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-central2 me-west1 northamerica-northeast1 northamerica-northeast2 northamerica-south1 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 eu us
https://datastore.googleapis.com
REST Resource: v1beta1.projects
Methods
export
POST /v1beta1/projects/{projectId}:export
Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage.
import
POST /v1beta1/projects/{projectId}:import
Imports entities into Google Cloud Datastore.
REST Resource: v1.projects
Methods
export
POST /v1/projects/{projectId}:export
Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage.
import
POST /v1/projects/{projectId}:import
Imports entities into Google Cloud Datastore.
REST Resource: v1.projects.indexes
Methods
create
POST /v1/projects/{projectId}/indexes
Creates the specified index.
delete
DELETE /v1/projects/{projectId}/indexes/{indexId}
Deletes an existing index.
get
GET /v1/projects/{projectId}/indexes/{indexId}
Gets an index.
list
GET /v1/projects/{projectId}/indexes
Lists the indexes that match the specified filters.
REST Resource: v1.projects.operations
Methods
cancel
POST /v1/{name=projects/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],[]]
