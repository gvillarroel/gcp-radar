---
title: "Financial Services API \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
  title: "Financial Services API \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
Financial Services API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.instances
REST Resource: v1.projects.locations.instances.backtestResults
REST Resource: v1.projects.locations.instances.datasets
REST Resource: v1.projects.locations.instances.engineConfigs
REST Resource: v1.projects.locations.instances.engineVersions
REST Resource: v1.projects.locations.instances.models
REST Resource: v1.projects.locations.instances.predictionResults
REST Resource: v1.projects.locations.operations
Service: financialservices.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://financialservices.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://financialservices.googleapis.com
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
Creates an instance.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*}
Deletes an instance.
exportRegisteredParties
POST /v1/{name=projects/*/locations/*/instances/*}:exportRegisteredParties
Exports the list of registered parties.
get
GET /v1/{name=projects/*/locations/*/instances/*}
Gets an instance.
importRegisteredParties
POST /v1/{name=projects/*/locations/*/instances/*}:importRegisteredParties
Imports the list of registered parties.
list
GET /v1/{parent=projects/*/locations/*}/instances
Lists instances.
patch
PATCH /v1/{instance.name=projects/*/locations/*/instances/*}
Updates the parameters of a single Instance.
REST Resource: v1.projects.locations.instances.backtestResults
Methods
create
POST /v1/{parent=projects/*/locations/*/instances/*}/backtestResults
Create a BacktestResult.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/backtestResults/*}
Deletes a BacktestResult.
exportMetadata
POST /v1/{backtestResult=projects/*/locations/*/instances/*/backtestResults/*}:exportMetadata
Export governance information for a BacktestResult resource.
get
GET /v1/{name=projects/*/locations/*/instances/*/backtestResults/*}
Gets a BacktestResult.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/backtestResults
List BacktestResults.
patch
PATCH /v1/{backtestResult.name=projects/*/locations/*/instances/*/backtestResults/*}
Updates the parameters of a single BacktestResult.
REST Resource: v1.projects.locations.instances.datasets
Methods
create
POST /v1/{parent=projects/*/locations/*/instances/*}/datasets
Creates a dataset.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/datasets/*}
Deletes a dataset.
get
GET /v1/{name=projects/*/locations/*/instances/*/datasets/*}
Gets a dataset.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/datasets
Lists datasets.
patch
PATCH /v1/{dataset.name=projects/*/locations/*/instances/*/datasets/*}
Updates the parameters of a single Dataset.
REST Resource: v1.projects.locations.instances.engineConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*/instances/*}/engineConfigs
Creates an engine config.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/engineConfigs/*}
Deletes an engine config.
exportMetadata
POST /v1/{engineConfig=projects/*/locations/*/instances/*/engineConfigs/*}:exportMetadata
Export governance information for an EngineConfig resource.
get
GET /v1/{name=projects/*/locations/*/instances/*/engineConfigs/*}
Gets an engine config.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/engineConfigs
Lists engine configs.
patch
PATCH /v1/{engineConfig.name=projects/*/locations/*/instances/*/engineConfigs/*}
Updates the parameters of a single EngineConfig.
REST Resource: v1.projects.locations.instances.engineVersions
Methods
get
GET /v1/{name=projects/*/locations/*/instances/*/engineVersions/*}
Gets a single EngineVersion.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/engineVersions
Lists EngineVersions for given location.
REST Resource: v1.projects.locations.instances.models
Methods
copy
POST /v1/{parent=projects/*/locations/*/instances/*}/models:copy
Copies a model from one instance to another.
create
POST /v1/{parent=projects/*/locations/*/instances/*}/models
Creates a model.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/models/*}
Deletes a model.
exportMetadata
POST /v1/{model=projects/*/locations/*/instances/*/models/*}:exportMetadata
Export governance information for a Model resource.
get
GET /v1/{name=projects/*/locations/*/instances/*/models/*}
Gets a model.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/models
Lists models.
patch
PATCH /v1/{model.name=projects/*/locations/*/instances/*/models/*}
Updates the parameters of a single Model.
REST Resource: v1.projects.locations.instances.predictionResults
Methods
create
POST /v1/{parent=projects/*/locations/*/instances/*}/predictionResults
Create a PredictionResult.
delete
DELETE /v1/{name=projects/*/locations/*/instances/*/predictionResults/*}
Deletes a PredictionResult.
exportMetadata
POST /v1/{predictionResult=projects/*/locations/*/instances/*/predictionResults/*}:exportMetadata
Export governance information for a PredictionResult resource.
get
GET /v1/{name=projects/*/locations/*/instances/*/predictionResults/*}
Gets a PredictionResult.
list
GET /v1/{parent=projects/*/locations/*/instances/*}/predictionResults
List PredictionResults.
patch
PATCH /v1/{predictionResult.name=projects/*/locations/*/instances/*/predictionResults/*}
Updates the parameters of a single PredictionResult.
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
Last updated 2026-02-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-04 UTC."],[],[]]
