---
title: "Storage Insights API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/insights/v1
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/insights/v1
  title: "Storage Insights API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
Storage Insights API
Stay organized with collections
Save and categorize content based on your preferences.
Provides insights capability on Google Cloud Storage
Service: storageinsights.googleapis.com
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://storageinsights.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.datasetConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/datasetConfigs
Creates a dataset configuration in a given project for a given location.
delete
DELETE /v1/{name=projects/*/locations/*/datasetConfigs/*}
Deletes a dataset configuration in a given project for a given location.
get
GET /v1/{name=projects/*/locations/*/datasetConfigs/*}
Gets the dataset configuration in a given project for a given location.
linkDataset
POST /v1/{name=projects/*/locations/*/datasetConfigs/*}:linkDataset
Links a dataset to BigQuery in a given project for a given location.
list
GET /v1/{parent=projects/*/locations/*}/datasetConfigs
Lists the dataset configurations in a given project for a given location.
patch
PATCH /v1/{datasetConfig.name=projects/*/locations/*/datasetConfigs/*}
Updates a dataset configuration in a given project for a given location.
unlinkDataset
POST /v1/{name=projects/*/locations/*/datasetConfigs/*}:unlinkDataset
Unlinks a dataset from BigQuery in a given project for a given location.
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
REST Resource: v1.projects.locations.reportConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/reportConfigs
Creates a new inventory report configuration in a given project for a given location.
delete
DELETE /v1/{name=projects/*/locations/*/reportConfigs/*}
Deletes an existing inventory report configuration in a given project for a given location.
get
GET /v1/{name=projects/*/locations/*/reportConfigs/*}
Gets the inventory report configuration in a given project for a given location.
list
GET /v1/{parent=projects/*/locations/*}/reportConfigs
Lists the inventory report configurations in a given project for a given location.
patch
PATCH /v1/{reportConfig.name=projects/*/locations/*/reportConfigs/*}
Updates an existing inventory report configuration in a given project for a given location.
REST Resource: v1.projects.locations.reportConfigs.reportDetails
Methods
get
GET /v1/{name=projects/*/locations/*/reportConfigs/*/reportDetails/*}
Gets an existing inventory report in a given project for a given location.
list
GET /v1/{parent=projects/*/locations/*/reportConfigs/*}/reportDetails
Lists the inventory reports in a given project for a given location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
