---
title: "Vision AI API \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/rest
  title: "Vision AI API \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Reference
Send feedback
Vision AI API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.applications
REST Resource: v1.projects.locations.applications.drafts
REST Resource: v1.projects.locations.applications.instances
REST Resource: v1.projects.locations.clusters
REST Resource: v1.projects.locations.clusters.analyses
REST Resource: v1.projects.locations.corpora
REST Resource: v1.projects.locations.corpora.assets
REST Resource: v1.projects.locations.corpora.assets.annotations
REST Resource: v1.projects.locations.corpora.assets.operations
REST Resource: v1.projects.locations.corpora.collections
REST Resource: v1.projects.locations.corpora.collections.operations
REST Resource: v1.projects.locations.corpora.dataSchemas
REST Resource: v1.projects.locations.corpora.indexes
REST Resource: v1.projects.locations.corpora.indexes.operations
REST Resource: v1.projects.locations.corpora.operations
REST Resource: v1.projects.locations.corpora.searchConfigs
REST Resource: v1.projects.locations.corpora.searchHypernyms
REST Resource: v1.projects.locations.indexEndpoints
REST Resource: v1.projects.locations.indexEndpoints.operations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.processors
REST Resource: v1.projects.locations.warehouseOperations
Service endpoint
A service endpoint
is a base URL that specifies the network address of an API service. One service might have
multiple service endpoints. This service has the following service endpoints and all URIs
below are relative to these service endpoints:
visionai.googleapis.com : Used for interacting with Streams and Applications.
warehouse-visionai.googleapis.com : Used for interacting with Vision AI's Media Warehouse.
Service endpoint: visionai.googleapis.com
REST Resource: v1.projects.locations.applications
Methods
addStreamInput
POST /v1/{name=projects/*/locations/*/applications/*}:addStreamInput
Adds target stream input to the Application.
create
POST /v1/{parent=projects/*/locations/*}/applications
Creates a new Application in a given project and location.
createApplicationInstances
POST /v1/{name=projects/*/locations/*/applications/*}:createApplicationInstances
Adds target stream input to the Application.
delete
DELETE /v1/{name=projects/*/locations/*/applications/*}
Deletes a single Application.
deleteApplicationInstances
POST /v1/{name=projects/*/locations/*/applications/*}:deleteApplicationInstances
Remove target stream input to the Application, if the Application is deployed, the corresponding instance based will be deleted.
deploy
POST /v1/{name=projects/*/locations/*/applications/*}:deploy
Deploys a single Application.
get
GET /v1/{name=projects/*/locations/*/applications/*}
Gets details of a single Application.
list
GET /v1/{parent=projects/*/locations/*}/applications
Lists Applications in a given project and location.
patch
PATCH /v1/{application.name=projects/*/locations/*/applications/*}
Updates the parameters of a single Application.
removeStreamInput
POST /v1/{name=projects/*/locations/*/applications/*}:removeStreamInput
Remove target stream input to the Application, if the Application is deployed, the corresponding instance based will be deleted.
undeploy
POST /v1/{name=projects/*/locations/*/applications/*}:undeploy
Undeploys a single Application.
updateApplicationInstances
POST /v1/{name=projects/*/locations/*/applications/*}:updateApplicationInstances
Adds target stream input to the Application.
updateStreamInput
POST /v1/{name=projects/*/locations/*/applications/*}:updateStreamInput
Update target stream input to the Application, if the Application is deployed, the corresponding instance based will be deployed.
REST Resource: v1.projects.locations.applications.drafts
Methods
create
POST /v1/{parent=projects/*/locations/*/applications/*}/drafts
Creates a new Draft in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/applications/*/drafts/*}
Deletes a single Draft.
get
GET /v1/{name=projects/*/locations/*/applications/*/drafts/*}
Gets details of a single Draft.
list
GET /v1/{parent=projects/*/locations/*/applications/*}/drafts
Lists Drafts in a given project and location.
patch
PATCH /v1/{draft.name=projects/*/locations/*/applications/*/drafts/*}
Updates the parameters of a single Draft.
REST Resource: v1.projects.locations.applications.instances
Methods
get
GET /v1/{name=projects/*/locations/*/applications/*/instances/*}
Gets details of a single Instance.
list
GET /v1/{parent=projects/*/locations/*/applications/*}/instances
Lists Instances in a given project and location.
REST Resource: v1.projects.locations.clusters
Methods
channels
POST /v1/{parent=projects/*/locations/*/clusters/*}/channels
Materialize a channel.
create
POST /v1/{parent=projects/*/locations/*}/clusters
Creates a new Cluster in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*}
Deletes a single Cluster.
get
GET /v1/{name=projects/*/locations/*/clusters/*}
Gets details of a single Cluster.
healthCheck
GET /v1/{cluster=projects/*/locations/*/clusters/*}:healthCheck
HealthCheck method checks the health status of the cluster.
list
GET /v1/{parent=projects/*/locations/*}/clusters
Lists Clusters in a given project and location.
patch
PATCH /v1/{cluster.name=projects/*/locations/*/clusters/*}
Updates the parameters of a single Cluster.
watchEvents
POST /v1/{cluster=projects/*/locations/*/clusters/*}:watchEvents
Watch for event updates happening on the given streams.
REST Resource: v1.projects.locations.clusters.analyses
Methods
create
POST /v1/{parent=projects/*/locations/*/clusters/*}/analyses
Creates a new Analysis in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*/analyses/*}
Deletes a single Analysis.
get
GET /v1/{name=projects/*/locations/*/clusters/*/analyses/*}
Gets details of a single Analysis.
list
GET /v1/{parent=projects/*/locations/*/clusters/*}/analyses
Lists Analyses in a given project and location.
patch
PATCH /v1/{analysis.name=projects/*/locations/*/clusters/*/analyses/*}
Updates the parameters of a single Analysis.
REST Resource: v1.projects.locations.clusters.events
Methods
create
POST /v1/{parent=projects/*/locations/*/clusters/*}/events
Creates a new Event in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*/events/*}
Deletes a single Event.
get
GET /v1/{name=projects/*/locations/*/clusters/*/events/*}
Gets details of a single Event.
list
GET /v1/{parent=projects/*/locations/*/clusters/*}/events
Lists Events in a given project and location.
patch
PATCH /v1/{event.name=projects/*/locations/*/clusters/*/events/*}
Updates the parameters of a single Event.
REST Resource: v1.projects.locations.clusters.processes
Methods
batchRun
POST /v1/{parent=projects/*/locations/*/clusters/*}/processes:batchRun
Run all of the processes to "completion".
create
POST /v1/{parent=projects/*/locations/*/clusters/*}/processes
Creates a new Process in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*/processes/*}
Deletes a single Process.
get
GET /v1/{name=projects/*/locations/*/clusters/*/processes/*}
Gets details of a single Process.
list
GET /v1/{parent=projects/*/locations/*/clusters/*}/processes
Lists Processes in a given project and location.
patch
PATCH /v1/{process.name=projects/*/locations/*/clusters/*/processes/*}
Updates the parameters of a single Process.
Service endpoint: warehouse-visionai.googleapis.com
REST Resource: v1.projects.locations.corpora
Methods
analyze
POST /v1/{name=projects/*/locations/*/corpora/*}:analyze
Analyzes a corpus.
create
POST /v1/{parent=projects/*/locations/*}/corpora
Creates a corpus inside a project.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*}
Deletes a corpus only if its empty.
get
GET /v1/{name=projects/*/locations/*/corpora/*}
Gets corpus details inside a project.
list
GET /v1/{parent=projects/*/locations/*}/corpora
Lists all corpora in a project.
patch
PATCH /v1/{corpus.name=projects/*/locations/*/corpora/*}
Updates a corpus in a project.
searchAssets
POST /v1/{corpus=projects/*/locations/*/corpora/*}:searchAssets
Search media asset.
REST Resource: v1.projects.locations.corpora.assets
Methods
analyze
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:analyze
Analyze asset to power search capability.
clip
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:clip
Generates clips for downloading.
create
POST /v1/{parent=projects/*/locations/*/corpora/*}/assets
Creates an asset inside corpus.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/assets/*}
Deletes asset inside corpus.
generateHlsUri
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:generateHlsUri
Generates a uri for an HLS manifest.
generateRetrievalUrl
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:generateRetrievalUrl
Generates a signed url for downloading the asset.
get
GET /v1/{name=projects/*/locations/*/corpora/*/assets/*}
Reads an asset inside corpus.
import
POST /v1/{parent=projects/*/locations/*/corpora/*}/assets:import
Imports assets (images plus annotations) from a meta file on cloud storage.
index
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:index
Index one asset for search.
list
GET /v1/{parent=projects/*/locations/*/corpora/*}/assets
Lists an list of assets inside corpus.
patch
PATCH /v1/{asset.name=projects/*/locations/*/corpora/*/assets/*}
Updates an asset inside corpus.
removeIndex
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:removeIndex
Remove one asset's index data for search.
upload
POST /v1/{name=projects/*/locations/*/corpora/*/assets/*}:upload
Upload asset by specifing the asset Cloud Storage uri.
REST Resource: v1.projects.locations.corpora.assets.annotations
Methods
create
POST /v1/{parent=projects/*/locations/*/corpora/*/assets/*}/annotations
Creates annotation inside asset.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/assets/*/annotations/*}
Deletes annotation inside asset.
get
GET /v1/{name=projects/*/locations/*/corpora/*/assets/*/annotations/*}
Reads annotation inside asset.
list
GET /v1/{parent=projects/*/locations/*/corpora/*/assets/*}/annotations
Lists a list of annotations inside asset.
patch
PATCH /v1/{annotation.name=projects/*/locations/*/corpora/*/assets/*/annotations/*}
Updates annotation inside asset.
REST Resource: v1.projects.locations.corpora.assets.operations
Methods
get
GET /v1/{name=projects/*/locations/*/corpora/*/assets/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.corpora.collections
Methods
addCollectionItem
POST /v1/{item.collection=projects/*/locations/*/corpora/*/collections/*}:addCollectionItem
Adds an item into a Collection.
create
POST /v1/{parent=projects/*/locations/*/corpora/*}/collections
Creates a collection.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/collections/*}
Deletes a collection.
get
GET /v1/{name=projects/*/locations/*/corpora/*/collections/*}
Gets a collection.
list
GET /v1/{parent=projects/*/locations/*/corpora/*}/collections
Lists collections inside a corpus.
patch
PATCH /v1/{collection.name=projects/*/locations/*/corpora/*/collections/*}
Updates a collection.
removeCollectionItem
POST /v1/{item.collection=projects/*/locations/*/corpora/*/collections/*}:removeCollectionItem
Removes an item from a collection.
viewCollectionItems
GET /v1/{collection=projects/*/locations/*/corpora/*/collections/*}:viewCollectionItems
View items inside a collection.
REST Resource: v1.projects.locations.corpora.collections.operations
Methods
get
GET /v1/{name=projects/*/locations/*/corpora/*/collections/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.corpora.dataSchemas
Methods
create
POST /v1/{parent=projects/*/locations/*/corpora/*}/dataSchemas
Creates data schema inside corpus.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/dataSchemas/*}
Deletes data schema inside corpus.
get
GET /v1/{name=projects/*/locations/*/corpora/*/dataSchemas/*}
Gets data schema inside corpus.
list
GET /v1/{parent=projects/*/locations/*/corpora/*}/dataSchemas
Lists a list of data schemas inside corpus.
patch
PATCH /v1/{dataSchema.name=projects/*/locations/*/corpora/*/dataSchemas/*}
Updates data schema inside corpus.
REST Resource: v1.projects.locations.corpora.indexes
Methods
create
POST /v1/{parent=projects/*/locations/*/corpora/*}/indexes
Creates an Index under the corpus.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/indexes/*}
Delete a single Index.
get
GET /v1/{name=projects/*/locations/*/corpora/*/indexes/*}
Gets the details of a single Index under a Corpus.
list
GET /v1/{parent=projects/*/locations/*/corpora/*}/indexes
List all Indexes in a given Corpus.
patch
PATCH /v1/{index.name=projects/*/locations/*/corpora/*/indexes/*}
Updates an Index under the corpus.
viewAssets
GET /v1/{index=projects/*/locations/*/corpora/*/indexes/*}:viewAssets
Lists a list of assets inside an index.
REST Resource: v1.projects.locations.corpora.indexes.operations
Methods
get
GET /v1/{name=projects/*/locations/*/corpora/*/indexes/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.corpora.operations
Methods
get
GET /v1/{name=projects/*/locations/*/corpora/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.corpora.searchConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*/corpora/*}/searchConfigs
Creates a search configuration inside a corpus.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/searchConfigs/*}
Deletes a search configuration inside a corpus.
get
GET /v1/{name=projects/*/locations/*/corpora/*/searchConfigs/*}
Gets a search configuration inside a corpus.
list
GET /v1/{parent=projects/*/locations/*/corpora/*}/searchConfigs
Lists all search configurations inside a corpus.
patch
PATCH /v1/{searchConfig.name=projects/*/locations/*/corpora/*/searchConfigs/*}
Updates a search configuration inside a corpus.
REST Resource: v1.projects.locations.corpora.searchHypernyms
Methods
create
POST /v1/{parent=projects/*/locations/*/corpora/*}/searchHypernyms
Creates a SearchHypernym inside a corpus.
delete
DELETE /v1/{name=projects/*/locations/*/corpora/*/searchHypernyms/*}
Deletes a SearchHypernym inside a corpus.
get
GET /v1/{name=projects/*/locations/*/corpora/*/searchHypernyms/*}
Gets a SearchHypernym inside a corpus.
list
GET /v1/{parent=projects/*/locations/*/corpora/*}/searchHypernyms
Lists SearchHypernyms inside a corpus.
patch
PATCH /v1/{searchHypernym.name=projects/*/locations/*/corpora/*/searchHypernyms/*}
Updates a SearchHypernym inside a corpus.
REST Resource: v1.projects.locations.indexEndpoints
Methods
create
POST /v1/{parent=projects/*/locations/*}/indexEndpoints
Creates an IndexEndpoint.
delete
DELETE /v1/{name=projects/*/locations/*/indexEndpoints/*}
Deletes an IndexEndpoint.
deployIndex
POST /v1/{indexEndpoint=projects/*/locations/*/indexEndpoints/*}:deployIndex
Deploys an Index to IndexEndpoint.
get
GET /v1/{name=projects/*/locations/*/indexEndpoints/*}
Gets an IndexEndpoint.
list
GET /v1/{parent=projects/*/locations/*}/indexEndpoints
Lists all IndexEndpoints in a project.
patch
PATCH /v1/{indexEndpoint.name=projects/*/locations/*/indexEndpoints/*}
Updates an IndexEndpoint.
searchIndexEndpoint
POST /v1/{indexEndpoint=projects/*/locations/*/indexEndpoints/*}:searchIndexEndpoint
Search a deployed index endpoint (IMAGE corpus type only).
undeployIndex
POST /v1/{indexEndpoint=projects/*/locations/*/indexEndpoints/*}:undeployIndex
Undeploys an Index from IndexEndpoint.
REST Resource: v1.projects.locations.indexEndpoints.operations
Methods
get
GET /v1/{name=projects/*/locations/*/indexEndpoints/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.warehouseOperations
Methods
get
GET /v1/{name=projects/*/locations/*/warehouseOperations/*}
Gets the latest state of a long-running operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
