---
title: "Vertex AI API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/googleapis/aiplatform/Overview
  title: "Vertex AI API Connector Overview \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Vertex AI API Connector Overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Workflows connector defines the built-in
functions that can be used to access other Google Cloud products within a
workflow.
This page provides an overview of the individual connector.
There is no need to import or load connector libraries in a workflow—connectors
work out of the box when used in a call step.
Vertex AI API
Train high-quality custom machine learning models with minimal machine learning expertise and effort.
To learn more, see the Vertex AI API documentation .
Vertex AI connector sample
YAML
# This workflow demonstrates how to use the aiplatform (Vertex AI) connector.
# This workflow creates a Vertex AI custom Job and then deletes the
# job once the long-running operation of creating the job completes.
# Expected successful output: "SUCCESS"
main :
steps :
- init :
assign :
- location : ${sys.get_env("GOOGLE_CLOUD_LOCATION")}
- project : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
# Follow https://cloud.google.com/vertex-ai/docs/training/create-custom-container to build
# a custom container image for training.
- container_image_uri : "IMAGE_URI"
- create_custom_job :
call : googleapis.aiplatform.v1.projects.locations.customJobs.create
args :
parent : ${"projects/" + project + "/locations/" + location}
region : ${location}
body :
displayName : "example-custom-job"
jobSpec :
workerPoolSpecs :
- machineSpec :
machineType : "n1-standard-4"
acceleratorType : "NVIDIA_TESLA_V100"
acceleratorCount : 1
replicaCount : 1
containerSpec :
imageUri : ${container_image_uri}
command : []
args : []
result : customJobsResponse
- delete_custom_job :
call : googleapis.aiplatform.v1.projects.locations.customJobs.delete
args :
name : ${customJobsResponse.name}
region : ${location}
result : deleteCustomJobResponse
- return :
return : "SUCCESS"
JSON
{
"main" : {
"steps" : [
{
"init" : {
"assign" : [
{
"location" : "${sys.get_env(\"GOOGLE_CLOUD_LOCATION\")}"
},
{
"project" : "${sys.get_env(\"GOOGLE_CLOUD_PROJECT_ID\")}"
},
{
"container_image_uri" : "IMAGE_URI"
}
]
}
},
{
"create_custom_job" : {
"call" : "googleapis.aiplatform.v1.projects.locations.customJobs.create" ,
"args" : {
"parent" : "${\"projects/\" + project + \"/locations/\" + location}" ,
"region" : "${location}" ,
"body" : {
"displayName" : "example-custom-job" ,
"jobSpec" : {
"workerPoolSpecs" : [
{
"machineSpec" : {
"machineType" : "n1-standard-4" ,
"acceleratorType" : "NVIDIA_TESLA_V100" ,
"acceleratorCount" : 1
},
"replicaCount" : 1 ,
"containerSpec" : {
"imageUri" : "${container_image_uri}" ,
"command" : [],
"args" : []
}
}
]
}
}
},
"result" : "customJobsResponse"
}
},
{
"delete_custom_job" : {
"call" : "googleapis.aiplatform.v1.projects.locations.customJobs.delete" ,
"args" : {
"name" : "${customJobsResponse.name}" ,
"region" : "${location}"
},
"result" : "deleteCustomJobResponse"
}
},
{
"return" : {
"return" : "SUCCESS"
}
}
]
}
}
Module: googleapis.aiplatform.v1.projects.locations.batchPredictionJobs
Functions
cancel
Cancels a BatchPredictionJob. Starts asynchronous cancellation on the
BatchPredictionJob. The server makes the best effort to cancel the job,
but success is not guaranteed. Clients can use
JobService.GetBatchPredictionJob or other methods to check whether the
cancellation succeeded or whether the job completed despite
cancellation. On a successful cancellation, the BatchPredictionJob is
not deleted;instead its BatchPredictionJob.state is set to CANCELLED .
Any files already outputted by the job are not deleted.
create
Creates a BatchPredictionJob. A BatchPredictionJob once created will
right away be attempted to start.
delete
Deletes a BatchPredictionJob. Can only be called on jobs that already
finished.
get
Gets a BatchPredictionJob
list
Lists BatchPredictionJobs in a Location.
Module: googleapis.aiplatform.v1.projects.locations.customJobs
Functions
cancel
Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob.
The server makes a best effort to cancel the job, but success is not
guaranteed. Clients can use JobService.GetCustomJob or other methods to
check whether the cancellation succeeded or whether the job completed
despite cancellation. On successful cancellation, the CustomJob is not
deleted; instead it becomes a job with a CustomJob.error value with a
google.rpc.Status.code of 1, corresponding to Code.CANCELLED , and
CustomJob.state is set to CANCELLED .
create
Creates a CustomJob. A created CustomJob right away will be attempted to
be run.
delete
Deletes a CustomJob.
get
Gets a CustomJob.
list
Lists CustomJobs in a Location.
Module: googleapis.aiplatform.v1.projects.locations.datasets
Functions
create
Creates a Dataset.
delete
Deletes a Dataset.
export
Exports data from a Dataset.
get
Gets a Dataset.
list
Lists Datasets in a Location.
patch
Updates a Dataset.
searchDataItems
Searches DataItems in a Dataset.
Module: googleapis.aiplatform.v1.projects.locations.datasets.annotationSpecs
Functions
get
Gets an AnnotationSpec.
Module: googleapis.aiplatform.v1.projects.locations.datasets.dataItems
Functions
list
Lists DataItems in a Dataset.
Module: googleapis.aiplatform.v1.projects.locations.datasets.dataItems.annotations
Functions
list
Lists Annotations belongs to a dataitem
Module: googleapis.aiplatform.v1.projects.locations.datasets.datasetVersions
Functions
create
Create a version from a Dataset.
delete
Deletes a Dataset version.
get
Gets a Dataset version.
list
Lists DatasetVersions in a Dataset.
restore
Restores a dataset version.
Module: googleapis.aiplatform.v1.projects.locations.datasets.savedQueries
Functions
delete
Deletes a SavedQuery.
list
Lists SavedQueries in a Dataset.
Module: googleapis.aiplatform.v1.projects.locations.deploymentResourcePools
Functions
create
Create a DeploymentResourcePool.
delete
Delete a DeploymentResourcePool.
get
Get a DeploymentResourcePool.
list
List DeploymentResourcePools in a location.
queryDeployedModels
List DeployedModels that have been deployed on this
DeploymentResourcePool.
Module: googleapis.aiplatform.v1.projects.locations.endpoints
Functions
create
Creates an Endpoint.
delete
Deletes an Endpoint.
deployModel
Deploys a Model into this Endpoint, creating a DeployedModel within it.
explain
Perform an online explanation. If deployed_model_id is specified, the
corresponding DeployModel must have explanation_spec populated. If
deployed_model_id is not specified, all DeployedModels must have
explanation_spec populated.
generateContent
Generate content with multimodal inputs.
get
Gets an Endpoint.
list
Lists Endpoints in a Location.
mutateDeployedModel
Updates an existing deployed model. Updatable fields include
min_replica_count , max_replica_count , autoscaling_metric_specs ,
disable_container_logging (v1 only), and enable_container_logging
(v1beta1 only).
patch
Updates an Endpoint.
predict
Perform an online prediction.
rawPredict
Perform an online prediction with an arbitrary HTTP payload. The
response includes the following HTTP headers: *
X-Vertex-AI-Endpoint-Id : ID of the Endpoint that served this
prediction. * X-Vertex-AI-Deployed-Model-Id : ID of the Endpoint's
DeployedModel that served this prediction.
serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM
streaming.
streamGenerateContent
Generate content with multimodal inputs with streaming support.
streamRawPredict
Perform a streaming online prediction with an arbitrary HTTP payload.
undeployModel
Undeploys a Model from an Endpoint, removing a DeployedModel from it,
and freeing all resources it's using.
Module: googleapis.aiplatform.v1.projects.locations.featureGroups
Functions
create
Creates a new FeatureGroup in a given project and location.
delete
Deletes a single FeatureGroup.
get
Gets details of a single FeatureGroup.
list
Lists FeatureGroups in a given project and location.
patch
Updates the parameters of a single FeatureGroup.
Module: googleapis.aiplatform.v1.projects.locations.featureGroups.features
Functions
create
Creates a new Feature in a given FeatureGroup.
delete
Deletes a single Feature.
get
Gets details of a single Feature.
list
Lists Features in a given FeatureGroup.
patch
Updates the parameters of a single Feature.
Module: googleapis.aiplatform.v1.projects.locations.featureOnlineStores
Functions
create
Creates a new FeatureOnlineStore in a given project and location.
delete
Deletes a single FeatureOnlineStore. The FeatureOnlineStore must not
contain any FeatureViews.
get
Gets details of a single FeatureOnlineStore.
list
Lists FeatureOnlineStores in a given project and location.
patch
Updates the parameters of a single FeatureOnlineStore.
Module: googleapis.aiplatform.v1.projects.locations.featureOnlineStores.featureViews
Functions
create
Creates a new FeatureView in a given FeatureOnlineStore.
delete
Deletes a single FeatureView.
fetchFeatureValues
Fetch feature values under a FeatureView.
get
Gets details of a single FeatureView.
list
Lists FeatureViews in a given FeatureOnlineStore.
patch
Updates the parameters of a single FeatureView.
searchNearestEntities
Search the nearest entities under a FeatureView. Search only works for
indexable feature view; if a feature view isn't indexable, returns
Invalid argument response.
sync
Triggers on-demand sync for the FeatureView.
Module: googleapis.aiplatform.v1.projects.locations.featureOnlineStores.featureViews.featureViewSyncs
Functions
get
Gets details of a single FeatureViewSync.
list
Lists FeatureViewSyncs in a given FeatureView.
Module: googleapis.aiplatform.v1.projects.locations.featurestores
Functions
batchReadFeatureValues
Batch reads Feature values from a Featurestore. This API enables batch
reading Feature values, where each read instance in the batch may read
Feature values of entities from one or more EntityTypes. Point-in-time
correctness is guaranteed for Feature values of each read instance as of
each instance's read timestamp.
create
Creates a new Featurestore in a given project and location.
delete
Deletes a single Featurestore. The Featurestore must not contain any
EntityTypes or force must be set to true for the request to succeed.
get
Gets details of a single Featurestore.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists Featurestores in a given project and location.
patch
Updates the parameters of a single Featurestore.
searchFeatures
Searches Features matching a query in a given project.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
Module: googleapis.aiplatform.v1.projects.locations.featurestores.entityTypes
Functions
create
Creates a new EntityType in a given Featurestore.
delete
Deletes a single EntityType. The EntityType must not have any Features
or force must be set to true for the request to succeed.
deleteFeatureValues
Delete Feature values from Featurestore. The progress of the deletion is
tracked by the returned operation. The deleted feature values are
guaranteed to be invisible to subsequent read operations after the
operation is marked as successfully done. If a delete feature values
operation fails, the feature values returned from reads and exports may
be inconsistent. If consistency is required, the caller must retry the
same delete request again and wait till the new operation returned is
marked as successfully done.
exportFeatureValues
Exports Feature values from all the entities of a target EntityType.
get
Gets details of a single EntityType.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
importFeatureValues
Imports Feature values into the Featurestore from a source storage. The
progress of the import is tracked by the returned operation. The
imported features are guaranteed to be visible to subsequent read
operations after the operation is marked as successfully done. If an
import operation fails, the Feature values returned from reads and
exports may be inconsistent. If consistency is required, the caller must
retry the same import request again and wait till the new operation
returned is marked as successfully done. There are also scenarios where
the caller can cause inconsistency. - Source data for import contains
multiple distinct Feature values for the same entity ID and timestamp. -
Source is modified during an import. This includes adding, updating, or
removing source data and/or metadata. Examples of updating metadata
include but are not limited to changing storage location, storage class,
or retention policy. - Online serving cluster is under-provisioned.
list
Lists EntityTypes in a given Featurestore.
patch
Updates the parameters of a single EntityType.
readFeatureValues
Reads Feature values of a specific entity of an EntityType. For reading
feature values of multiple entities of an EntityType, please use
StreamingReadFeatureValues.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
streamingReadFeatureValues
Reads Feature values for multiple entities. Depending on their size,
data for different entities may be broken up across multiple responses.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
writeFeatureValues
Writes Feature values of one or more entities of an EntityType. The
Feature values are merged into existing entities if any. The Feature
values to be written must have timestamp within the online storage
retention.
Module: googleapis.aiplatform.v1.projects.locations.featurestores.entityTypes.features
Functions
batchCreate
Creates a batch of Features in a given EntityType.
create
Creates a new Feature in a given EntityType.
delete
Deletes a single Feature.
get
Gets details of a single Feature.
list
Lists Features in a given EntityType.
patch
Updates the parameters of a single Feature.
Module: googleapis.aiplatform.v1.projects.locations.hyperparameterTuningJobs
Functions
cancel
Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on
the HyperparameterTuningJob. The server makes a best effort to cancel
the job, but success is not guaranteed. Clients can use
JobService.GetHyperparameterTuningJob or other methods to check whether
the cancellation succeeded or whether the job completed despite
cancellation. On successful cancellation, the HyperparameterTuningJob is
not deleted; instead it becomes a job with a
HyperparameterTuningJob.error value with a google.rpc.Status.code of 1,
corresponding to Code.CANCELLED , and HyperparameterTuningJob.state is
set to CANCELLED .
create
Creates a HyperparameterTuningJob
delete
Deletes a HyperparameterTuningJob.
get
Gets a HyperparameterTuningJob
list
Lists HyperparameterTuningJobs in a Location.
Module: googleapis.aiplatform.v1.projects.locations.indexEndpoints
Functions
create
Creates an IndexEndpoint.
delete
Deletes an IndexEndpoint.
deployIndex
Deploys an Index into this IndexEndpoint, creating a DeployedIndex
within it. Only non-empty Indexes can be deployed.
get
Gets an IndexEndpoint.
list
Lists IndexEndpoints in a Location.
mutateDeployedIndex
Update an existing DeployedIndex under an IndexEndpoint.
patch
Updates an IndexEndpoint.
undeployIndex
Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from
it, and freeing all resources it's using.
Module: googleapis.aiplatform.v1.projects.locations.indexes
Functions
create
Creates an Index.
delete
Deletes an Index. An Index can only be deleted when all its
DeployedIndexes had been undeployed.
get
Gets an Index.
list
Lists Indexes in a Location.
patch
Updates an Index.
removeDatapoints
Remove Datapoints from an Index.
upsertDatapoints
Add/update Datapoints into an Index.
Module: googleapis.aiplatform.v1.projects.locations.metadataStores
Functions
create
Initializes a MetadataStore, including allocation of resources.
delete
Deletes a single MetadataStore and all its child resources (Artifacts,
Executions, and Contexts).
get
Retrieves a specific MetadataStore.
list
Lists MetadataStores for a Location.
Module: googleapis.aiplatform.v1.projects.locations.metadataStores.artifacts
Functions
create
Creates an Artifact associated with a MetadataStore.
delete
Deletes an Artifact.
get
Retrieves a specific Artifact.
list
Lists Artifacts in the MetadataStore.
patch
Updates a stored Artifact.
purge
Purges Artifacts.
queryArtifactLineageSubgraph
Retrieves lineage of an Artifact represented through Artifacts and
Executions connected by Event edges and returned as a LineageSubgraph.
Module: googleapis.aiplatform.v1.projects.locations.metadataStores.contexts
Functions
addContextArtifactsAndExecutions
Adds a set of Artifacts and Executions to a Context. If any of the
Artifacts or Executions have already been added to a Context, they are
simply skipped.
addContextChildren
Adds a set of Contexts as children to a parent Context. If any of the
child Contexts have already been added to the parent Context, they are
simply skipped. If this call would create a cycle or cause any Context
to have more than 10 parents, the request will fail with an
INVALID_ARGUMENT error.
create
Creates a Context associated with a MetadataStore.
delete
Deletes a stored Context.
get
Retrieves a specific Context.
list
Lists Contexts on the MetadataStore.
patch
Updates a stored Context.
purge
Purges Contexts.
queryContextLineageSubgraph
Retrieves Artifacts and Executions within the specified Context,
connected by Event edges and returned as a LineageSubgraph.
removeContextChildren
Remove a set of children contexts from a parent Context. If any of the
child Contexts were NOT added to the parent Context, they are simply
skipped.
Module: googleapis.aiplatform.v1.projects.locations.metadataStores.executions
Functions
addExecutionEvents
Adds Events to the specified Execution. An Event indicates whether an
Artifact was used as an input or output for an Execution. If an Event
already exists between the Execution and the Artifact, the Event is
skipped.
create
Creates an Execution associated with a MetadataStore.
delete
Deletes an Execution.
get
Retrieves a specific Execution.
list
Lists Executions in the MetadataStore.
patch
Updates a stored Execution.
purge
Purges Executions.
queryExecutionInputsAndOutputs
Obtains the set of input and output Artifacts for this Execution, in the
form of LineageSubgraph that also contains the Execution and connecting
Events.
Module: googleapis.aiplatform.v1.projects.locations.metadataStores.metadataSchemas
Functions
create
Creates a MetadataSchema.
get
Retrieves a specific MetadataSchema.
list
Lists MetadataSchemas.
Module: googleapis.aiplatform.v1.projects.locations.migratableResources
Functions
batchMigrate
Batch migrates resources from ml.googleapis.com, automl.googleapis.com,
and datalabeling.googleapis.com to Vertex AI.
search
Searches all of the resources in automl.googleapis.com,
datalabeling.googleapis.com and ml.googleapis.com that can be migrated
to Vertex AI's given location.
Module: googleapis.aiplatform.v1.projects.locations.modelDeploymentMonitoringJobs
Functions
create
Creates a ModelDeploymentMonitoringJob. It will run periodically on a
configured interval.
delete
Deletes a ModelDeploymentMonitoringJob.
get
Gets a ModelDeploymentMonitoringJob.
list
Lists ModelDeploymentMonitoringJobs in a Location.
patch
Updates a ModelDeploymentMonitoringJob.
pause
Pauses a ModelDeploymentMonitoringJob. If the job is running, the server
makes a best effort to cancel the job. Will mark
ModelDeploymentMonitoringJob.state to 'PAUSED'.
resume
Resumes a paused ModelDeploymentMonitoringJob. It will start to run from
next scheduled time. A deleted ModelDeploymentMonitoringJob can't be
resumed.
searchModelDeploymentMonitoringStatsAnomalies
Searches Model Monitoring Statistics generated within a given time
window.
Module: googleapis.aiplatform.v1.projects.locations.models
Functions
copy
Copies an already existing Vertex AI Model into the specified Location.
The source Model must exist in the same Project. When copying custom
Models, the users themselves are responsible for Model.metadata content
to be region-agnostic, as well as making sure that any resources (e.g.
files) it depends on remain accessible.
delete
Deletes a Model. A model cannot be deleted if any Endpoint resource has
a DeployedModel based on the model in its deployed_models field.
deleteVersion
Deletes a Model version. Model version can only be deleted if there are
no DeployedModels created from it. Deleting the only version in the
Model is not allowed. Use DeleteModel for deleting the Model instead.
export
Exports a trained, exportable Model to a location specified by the user.
A Model is considered to be exportable if it has at least one supported
export format.
get
Gets a Model.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists Models in a Location.
listVersions
Lists versions of the specified model.
mergeVersionAliases
Merges a set of aliases for a Model version.
patch
Updates a Model.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
updateExplanationDataset
Incrementally update the dataset used for an examples model.
upload
Uploads a Model artifact into Vertex AI.
Module: googleapis.aiplatform.v1.projects.locations.models.evaluations
Functions
get
Gets a ModelEvaluation.
list
Lists ModelEvaluations in a Model.
Module: googleapis.aiplatform.v1.projects.locations.models.evaluations.slices
Functions
batchImport
Imports a list of externally generated EvaluatedAnnotations.
get
Gets a ModelEvaluationSlice.
list
Lists ModelEvaluationSlices in a ModelEvaluation.
Module: googleapis.aiplatform.v1.projects.locations.nasJobs
Functions
cancel
Cancels a NasJob. Starts asynchronous cancellation on the NasJob. The
server makes a best effort to cancel the job, but success is not
guaranteed. Clients can use JobService.GetNasJob or other methods to
check whether the cancellation succeeded or whether the job completed
despite cancellation. On successful cancellation, the NasJob is not
deleted; instead it becomes a job with a NasJob.error value with a
google.rpc.Status.code of 1, corresponding to Code.CANCELLED , and
NasJob.state is set to CANCELLED .
create
Creates a NasJob
delete
Deletes a NasJob.
get
Gets a NasJob
list
Lists NasJobs in a Location.
Module: googleapis.aiplatform.v1.projects.locations.nasJobs.nasTrialDetails
Functions
get
Gets a NasTrialDetail.
list
List top NasTrialDetails of a NasJob.
Module: googleapis.aiplatform.v1.projects.locations.notebookRuntimeTemplates
Functions
create
Creates a NotebookRuntimeTemplate.
delete
Deletes a NotebookRuntimeTemplate.
get
Gets a NotebookRuntimeTemplate.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists NotebookRuntimeTemplates in a Location.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
Module: googleapis.aiplatform.v1.projects.locations.notebookRuntimes
Functions
assign
Assigns a NotebookRuntime to a user for a particular Notebook file. This
method will either returns an existing assignment or generates a new
one.
delete
Deletes a NotebookRuntime.
get
Gets a NotebookRuntime.
list
Lists NotebookRuntimes in a Location.
start
Starts a NotebookRuntime.
Module: googleapis.aiplatform.v1.projects.locations.operations
Functions
cancel
Starts asynchronous cancellation on a long-running operation. The server
makes a best effort to cancel the operation, but success is not
guaranteed. If the server doesn't support this method, it returns
google.rpc.Code.UNIMPLEMENTED . Clients can use Operations.GetOperation
or other methods to check whether the cancellation succeeded or whether
the operation completed despite cancellation. On successful
cancellation, the operation is not deleted; instead, it becomes an
operation with an Operation.error value with a google.rpc.Status.code of
1, corresponding to Code.CANCELLED .
delete
Deletes a long-running operation. This method indicates that the client
is no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
google.rpc.Code.UNIMPLEMENTED .
get
Gets the latest state of a long-running operation. Clients can use this
method to poll the operation result at intervals as recommended by the
API service.
list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns UNIMPLEMENTED .
wait
Waits until the specified long-running operation is done or reaches at
most a specified timeout, returning the latest state. If the operation
is already done, the latest state is immediately returned. If the
timeout specified is greater than the default HTTP/RPC timeout, the
HTTP/RPC timeout is used. If the server does not support this method, it
returns google.rpc.Code.UNIMPLEMENTED . Note that this method is on a
best-effort basis. It may return the latest state before the specified
timeout (including immediately), meaning even an immediate response is
no guarantee that the operation is done.
Module: googleapis.aiplatform.v1.projects.locations.persistentResources
Functions
create
Creates a PersistentResource.
delete
Deletes a PersistentResource.
get
Gets a PersistentResource.
list
Lists PersistentResources in a Location.
patch
Updates a PersistentResource.
reboot
Reboots a PersistentResource.
Module: googleapis.aiplatform.v1.projects.locations.pipelineJobs
Functions
batchCancel
Batch cancel PipelineJobs. Firstly the server will check if all the jobs
are in non-terminal states, and skip the jobs that are already
terminated. If the operation failed, none of the pipeline jobs are
cancelled. The server will poll the states of all the pipeline jobs
periodically to check the cancellation status. This operation will
return an LRO.
batchDelete
Batch deletes PipelineJobs The Operation is atomic. If it fails, none of
the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs
are deleted.
cancel
Cancels a PipelineJob. Starts asynchronous cancellation on the
PipelineJob. The server makes a best effort to cancel the pipeline, but
success is not guaranteed. Clients can use
PipelineService.GetPipelineJob or other methods to check whether the
cancellation succeeded or whether the pipeline completed despite
cancellation. On successful cancellation, the PipelineJob is not
deleted; instead it becomes a pipeline with a PipelineJob.error value
with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED ,
and PipelineJob.state is set to CANCELLED .
create
Creates a PipelineJob. A PipelineJob will run immediately when created.
delete
Deletes a PipelineJob.
get
Gets a PipelineJob.
list
Lists PipelineJobs in a Location.
Module: googleapis.aiplatform.v1.projects.locations.publishers.models
Functions
generateContent
Generate content with multimodal inputs.
predict
Perform an online prediction.
rawPredict
Perform an online prediction with an arbitrary HTTP payload. The
response includes the following HTTP headers: *
X-Vertex-AI-Endpoint-Id : ID of the Endpoint that served this
prediction. * X-Vertex-AI-Deployed-Model-Id : ID of the Endpoint's
DeployedModel that served this prediction.
serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM
streaming.
streamGenerateContent
Generate content with multimodal inputs with streaming support.
streamRawPredict
Perform a streaming online prediction with an arbitrary HTTP payload.
Module: googleapis.aiplatform.v1.projects.locations.schedules
Functions
create
Creates a Schedule.
delete
Deletes a Schedule.
get
Gets a Schedule.
list
Lists Schedules in a Location.
patch
Updates an active or paused Schedule. When the Schedule is updated, new
runs will be scheduled starting from the updated next execution time
after the update time based on the time_specification in the updated
Schedule. All unstarted runs before the update time will be skipped
while already created runs will NOT be paused or canceled.
pause
Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule
is paused, no new runs will be created. Already created runs will NOT be
paused or canceled.
resume
Resumes a paused Schedule to start scheduling new runs. Will mark
Schedule.state to 'ACTIVE'. Only paused Schedule can be resumed. When
the Schedule is resumed, new runs will be scheduled starting from the
next execution time after the current time based on the
time_specification in the Schedule. If Schedule.catchUp is set up true,
all missed runs will be scheduled for backfill first.
Module: googleapis.aiplatform.v1.projects.locations.specialistPools
Functions
create
Creates a SpecialistPool.
delete
Deletes a SpecialistPool as well as all Specialists in the pool.
get
Gets a SpecialistPool.
list
Lists SpecialistPools in a Location.
patch
Updates a SpecialistPool.
Module: googleapis.aiplatform.v1.projects.locations.studies
Functions
create
Creates a Study. A resource name will be generated after creation of the
Study.
delete
Deletes a Study.
get
Gets a Study by name.
list
Lists all the studies in a region for an associated project.
lookup
Looks a study up using the user-defined display_name field instead of
the fully qualified resource name.
Module: googleapis.aiplatform.v1.projects.locations.studies.trials
Functions
addTrialMeasurement
Adds a measurement of the objective metrics to a Trial. This measurement
is assumed to have been taken before the Trial is complete.
checkTrialEarlyStoppingState
Checks whether a Trial should stop or not. Returns a long-running
operation. When the operation is successful, it will contain a
CheckTrialEarlyStoppingStateResponse.
complete
Marks a Trial as complete.
create
Adds a user provided Trial to a Study.
delete
Deletes a Trial.
get
Gets a Trial.
list
Lists the Trials associated with a Study.
listOptimalTrials
Lists the pareto-optimal Trials for multi-objective Study or the optimal
Trials for single-objective Study. The definition of pareto-optimal can
be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
stop
Stops a Trial.
suggest
Adds one or more Trials to a Study, with parameter values suggested by
Vertex AI Vizier. Returns a long-running operation associated with the
generation of Trial suggestions. When this long-running operation
succeeds, it will contain a SuggestTrialsResponse.
Module: googleapis.aiplatform.v1.projects.locations.tensorboards
Functions
batchRead
Reads multiple TensorboardTimeSeries' data. The data point number limit
is 1000 for scalars, 100 for tensors and blob references. If the number
of data points stored is less than the limit, all data is returned.
Otherwise, the number limit of data points is randomly selected from
this time series and returned.
create
Creates a Tensorboard.
delete
Deletes a Tensorboard.
get
Gets a Tensorboard.
list
Lists Tensorboards in a Location.
patch
Updates a Tensorboard.
readSize
Returns the storage size for a given TensorBoard instance.
readUsage
Returns a list of monthly active users for a given TensorBoard instance.
Module: googleapis.aiplatform.v1.projects.locations.tensorboards.experiments
Functions
batchCreate
Batch create TensorboardTimeSeries that belong to a
TensorboardExperiment.
create
Creates a TensorboardExperiment.
delete
Deletes a TensorboardExperiment.
get
Gets a TensorboardExperiment.
list
Lists TensorboardExperiments in a Location.
patch
Updates a TensorboardExperiment.
write
Write time series data points of multiple TensorboardTimeSeries in
multiple TensorboardRun's. If any data fail to be ingested, an error is
returned.
Module: googleapis.aiplatform.v1.projects.locations.tensorboards.experiments.runs
Functions
batchCreate
Batch create TensorboardRuns.
create
Creates a TensorboardRun.
delete
Deletes a TensorboardRun.
get
Gets a TensorboardRun.
list
Lists TensorboardRuns in a Location.
patch
Updates a TensorboardRun.
write
Write time series data points into multiple TensorboardTimeSeries under
a TensorboardRun. If any data fail to be ingested, an error is returned.
Module: googleapis.aiplatform.v1.projects.locations.tensorboards.experiments.runs.timeSeries
Functions
create
Creates a TensorboardTimeSeries.
delete
Deletes a TensorboardTimeSeries.
exportTensorboardTimeSeries
Exports a TensorboardTimeSeries' data. Data is returned in paginated
responses.
get
Gets a TensorboardTimeSeries.
list
Lists TensorboardTimeSeries in a Location.
patch
Updates a TensorboardTimeSeries.
read
Reads a TensorboardTimeSeries' data. By default, if the number of data
points stored is less than 1000, all data is returned. Otherwise, 1000
data points is randomly selected from this time series and returned.
This value can be changed by changing max_data_points, which can't be
greater than 10k.
readBlobData
Gets bytes of TensorboardBlobs. This is to allow reading blob data
stored in consumer project's Cloud Storage bucket without users having
to obtain Cloud Storage access permission.
Module: googleapis.aiplatform.v1.projects.locations.trainingPipelines
Functions
cancel
Cancels a TrainingPipeline. Starts asynchronous cancellation on the
TrainingPipeline. The server makes a best effort to cancel the pipeline,
but success is not guaranteed. Clients can use
PipelineService.GetTrainingPipeline or other methods to check whether
the cancellation succeeded or whether the pipeline completed despite
cancellation. On successful cancellation, the TrainingPipeline is not
deleted; instead it becomes a pipeline with a TrainingPipeline.error
value with a google.rpc.Status.code of 1, corresponding to
Code.CANCELLED , and TrainingPipeline.state is set to CANCELLED .
create
Creates a TrainingPipeline. A created TrainingPipeline right away will
be attempted to be run.
delete
Deletes a TrainingPipeline.
get
Gets a TrainingPipeline.
list
Lists TrainingPipelines in a Location.
Module: googleapis.aiplatform.v1.projects.locations.tuningJobs
Functions
cancel
Cancels a TuningJob. Starts asynchronous cancellation on the TuningJob.
The server makes a best effort to cancel the job, but success is not
guaranteed. Clients can use GenAiTuningService.GetTuningJob or other
methods to check whether the cancellation succeeded or whether the job
completed despite cancellation. On successful cancellation, the
TuningJob is not deleted; instead it becomes a job with a
TuningJob.error value with a google.rpc.Status.code of 1, corresponding
to Code.CANCELLED , and TuningJob.state is set to CANCELLED .
create
Creates a TuningJob. A created TuningJob right away will be attempted to
be run.
get
Gets a TuningJob.
list
Lists TuningJobs in a Location.
Module: googleapis.aiplatform.v1beta1.media
Functions
upload
Upload a file into a RagCorpus.
Module: googleapis.aiplatform.v1beta1.projects.locations
Functions
evaluateInstances
Evaluates instances based on a given metric.
retrieveContexts
Retrieves relevant contexts for a query.
Module: googleapis.aiplatform.v1beta1.projects.locations.batchPredictionJobs
Functions
cancel
Cancels a BatchPredictionJob. Starts asynchronous cancellation on the
BatchPredictionJob. The server makes the best effort to cancel the job,
but success is not guaranteed. Clients can use
JobService.GetBatchPredictionJob or other methods to check whether the
cancellation succeeded or whether the job completed despite
cancellation. On a successful cancellation, the BatchPredictionJob is
not deleted;instead its BatchPredictionJob.state is set to CANCELLED .
Any files already outputted by the job are not deleted.
create
Creates a BatchPredictionJob. A BatchPredictionJob once created will
right away be attempted to start.
delete
Deletes a BatchPredictionJob. Can only be called on jobs that already
finished.
get
Gets a BatchPredictionJob
list
Lists BatchPredictionJobs in a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.customJobs
Functions
cancel
Cancels a CustomJob. Starts asynchronous cancellation on the CustomJob.
The server makes a best effort to cancel the job, but success is not
guaranteed. Clients can use JobService.GetCustomJob or other methods to
check whether the cancellation succeeded or whether the job completed
despite cancellation. On successful cancellation, the CustomJob is not
deleted; instead it becomes a job with a CustomJob.error value with a
google.rpc.Status.code of 1, corresponding to Code.CANCELLED , and
CustomJob.state is set to CANCELLED .
create
Creates a CustomJob. A created CustomJob right away will be attempted to
be run.
delete
Deletes a CustomJob.
get
Gets a CustomJob.
list
Lists CustomJobs in a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.datasets
Functions
create
Creates a Dataset.
delete
Deletes a Dataset.
export
Exports data from a Dataset.
get
Gets a Dataset.
list
Lists Datasets in a Location.
patch
Updates a Dataset.
searchDataItems
Searches DataItems in a Dataset.
Module: googleapis.aiplatform.v1beta1.projects.locations.datasets.annotationSpecs
Functions
get
Gets an AnnotationSpec.
Module: googleapis.aiplatform.v1beta1.projects.locations.datasets.dataItems
Functions
list
Lists DataItems in a Dataset.
Module: googleapis.aiplatform.v1beta1.projects.locations.datasets.dataItems.annotations
Functions
list
Lists Annotations belongs to a dataitem
Module: googleapis.aiplatform.v1beta1.projects.locations.datasets.datasetVersions
Functions
create
Create a version from a Dataset.
delete
Deletes a Dataset version.
get
Gets a Dataset version.
list
Lists DatasetVersions in a Dataset.
restore
Restores a dataset version.
Module: googleapis.aiplatform.v1beta1.projects.locations.datasets.savedQueries
Functions
delete
Deletes a SavedQuery.
list
Lists SavedQueries in a Dataset.
Module: googleapis.aiplatform.v1beta1.projects.locations.deploymentResourcePools
Functions
create
Create a DeploymentResourcePool.
delete
Delete a DeploymentResourcePool.
get
Get a DeploymentResourcePool.
list
List DeploymentResourcePools in a location.
queryDeployedModels
List DeployedModels that have been deployed on this
DeploymentResourcePool.
Module: googleapis.aiplatform.v1beta1.projects.locations.endpoints
Functions
countTokens
Perform a token counting.
create
Creates an Endpoint.
delete
Deletes an Endpoint.
deployModel
Deploys a Model into this Endpoint, creating a DeployedModel within it.
explain
Perform an online explanation. If deployed_model_id is specified, the
corresponding DeployModel must have explanation_spec populated. If
deployed_model_id is not specified, all DeployedModels must have
explanation_spec populated.
generateContent
Generate content with multimodal inputs.
get
Gets an Endpoint.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists Endpoints in a Location.
mutateDeployedModel
Updates an existing deployed model. Updatable fields include
min_replica_count , max_replica_count , autoscaling_metric_specs ,
disable_container_logging (v1 only), and enable_container_logging
(v1beta1 only).
patch
Updates an Endpoint.
predict
Perform an online prediction.
rawPredict
Perform an online prediction with an arbitrary HTTP payload. The
response includes the following HTTP headers: *
X-Vertex-AI-Endpoint-Id : ID of the Endpoint that served this
prediction. * X-Vertex-AI-Deployed-Model-Id : ID of the Endpoint's
DeployedModel that served this prediction.
serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM
streaming.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
streamGenerateContent
Generate content with multimodal inputs with streaming support.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
undeployModel
Undeploys a Model from an Endpoint, removing a DeployedModel from it,
and freeing all resources it's using.
Module: googleapis.aiplatform.v1beta1.projects.locations.extensions
Functions
delete
Deletes an Extension.
get
Gets an Extension.
list
Lists Extensions in a location.
patch
Updates an Extension.
Module: googleapis.aiplatform.v1beta1.projects.locations.featureGroups
Functions
create
Creates a new FeatureGroup in a given project and location.
delete
Deletes a single FeatureGroup.
get
Gets details of a single FeatureGroup.
list
Lists FeatureGroups in a given project and location.
patch
Updates the parameters of a single FeatureGroup.
Module: googleapis.aiplatform.v1beta1.projects.locations.featureGroups.features
Functions
create
Creates a new Feature in a given FeatureGroup.
delete
Deletes a single Feature.
get
Gets details of a single Feature.
list
Lists Features in a given FeatureGroup.
patch
Updates the parameters of a single Feature.
Module: googleapis.aiplatform.v1beta1.projects.locations.featureOnlineStores
Functions
create
Creates a new FeatureOnlineStore in a given project and location.
delete
Deletes a single FeatureOnlineStore. The FeatureOnlineStore must not
contain any FeatureViews.
get
Gets details of a single FeatureOnlineStore.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists FeatureOnlineStores in a given project and location.
patch
Updates the parameters of a single FeatureOnlineStore.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
Module: googleapis.aiplatform.v1beta1.projects.locations.featureOnlineStores.featureViews
Functions
create
Creates a new FeatureView in a given FeatureOnlineStore.
delete
Deletes a single FeatureView.
fetchFeatureValues
Fetch feature values under a FeatureView.
get
Gets details of a single FeatureView.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists FeatureViews in a given FeatureOnlineStore.
patch
Updates the parameters of a single FeatureView.
searchNearestEntities
Search the nearest entities under a FeatureView. Search only works for
indexable feature view; if a feature view isn't indexable, returns
Invalid argument response.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
streamingFetchFeatureValues
Bidirectional streaming RPC to fetch feature values under a FeatureView.
Requests may not have a one-to-one mapping to responses and responses
may be returned out-of-order to reduce latency.
sync
Triggers on-demand sync for the FeatureView.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
Module: googleapis.aiplatform.v1beta1.projects.locations.featureOnlineStores.featureViews.featureViewSyncs
Functions
get
Gets details of a single FeatureViewSync.
list
Lists FeatureViewSyncs in a given FeatureView.
Module: googleapis.aiplatform.v1beta1.projects.locations.featurestores
Functions
batchReadFeatureValues
Batch reads Feature values from a Featurestore. This API enables batch
reading Feature values, where each read instance in the batch may read
Feature values of entities from one or more EntityTypes. Point-in-time
correctness is guaranteed for Feature values of each read instance as of
each instance's read timestamp.
create
Creates a new Featurestore in a given project and location.
delete
Deletes a single Featurestore. The Featurestore must not contain any
EntityTypes or force must be set to true for the request to succeed.
get
Gets details of a single Featurestore.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists Featurestores in a given project and location.
patch
Updates the parameters of a single Featurestore.
searchFeatures
Searches Features matching a query in a given project.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
Module: googleapis.aiplatform.v1beta1.projects.locations.featurestores.entityTypes
Functions
create
Creates a new EntityType in a given Featurestore.
delete
Deletes a single EntityType. The EntityType must not have any Features
or force must be set to true for the request to succeed.
deleteFeatureValues
Delete Feature values from Featurestore. The progress of the deletion is
tracked by the returned operation. The deleted feature values are
guaranteed to be invisible to subsequent read operations after the
operation is marked as successfully done. If a delete feature values
operation fails, the feature values returned from reads and exports may
be inconsistent. If consistency is required, the caller must retry the
same delete request again and wait till the new operation returned is
marked as successfully done.
exportFeatureValues
Exports Feature values from all the entities of a target EntityType.
get
Gets details of a single EntityType.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
importFeatureValues
Imports Feature values into the Featurestore from a source storage. The
progress of the import is tracked by the returned operation. The
imported features are guaranteed to be visible to subsequent read
operations after the operation is marked as successfully done. If an
import operation fails, the Feature values returned from reads and
exports may be inconsistent. If consistency is required, the caller must
retry the same import request again and wait till the new operation
returned is marked as successfully done. There are also scenarios where
the caller can cause inconsistency. - Source data for import contains
multiple distinct Feature values for the same entity ID and timestamp. -
Source is modified during an import. This includes adding, updating, or
removing source data and/or metadata. Examples of updating metadata
include but are not limited to changing storage location, storage class,
or retention policy. - Online serving cluster is under-provisioned.
list
Lists EntityTypes in a given Featurestore.
patch
Updates the parameters of a single EntityType.
readFeatureValues
Reads Feature values of a specific entity of an EntityType. For reading
feature values of multiple entities of an EntityType, please use
StreamingReadFeatureValues.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
streamingReadFeatureValues
Reads Feature values for multiple entities. Depending on their size,
data for different entities may be broken up across multiple responses.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
writeFeatureValues
Writes Feature values of one or more entities of an EntityType. The
Feature values are merged into existing entities if any. The Feature
values to be written must have timestamp within the online storage
retention.
Module: googleapis.aiplatform.v1beta1.projects.locations.featurestores.entityTypes.features
Functions
batchCreate
Creates a batch of Features in a given EntityType.
create
Creates a new Feature in a given EntityType.
delete
Deletes a single Feature.
get
Gets details of a single Feature.
list
Lists Features in a given EntityType.
patch
Updates the parameters of a single Feature.
Module: googleapis.aiplatform.v1beta1.projects.locations.hyperparameterTuningJobs
Functions
cancel
Cancels a HyperparameterTuningJob. Starts asynchronous cancellation on
the HyperparameterTuningJob. The server makes a best effort to cancel
the job, but success is not guaranteed. Clients can use
JobService.GetHyperparameterTuningJob or other methods to check whether
the cancellation succeeded or whether the job completed despite
cancellation. On successful cancellation, the HyperparameterTuningJob is
not deleted; instead it becomes a job with a
HyperparameterTuningJob.error value with a google.rpc.Status.code of 1,
corresponding to Code.CANCELLED , and HyperparameterTuningJob.state is
set to CANCELLED .
create
Creates a HyperparameterTuningJob
delete
Deletes a HyperparameterTuningJob.
get
Gets a HyperparameterTuningJob
list
Lists HyperparameterTuningJobs in a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.indexEndpoints
Functions
create
Creates an IndexEndpoint.
delete
Deletes an IndexEndpoint.
deployIndex
Deploys an Index into this IndexEndpoint, creating a DeployedIndex
within it. Only non-empty Indexes can be deployed.
get
Gets an IndexEndpoint.
list
Lists IndexEndpoints in a Location.
mutateDeployedIndex
Update an existing DeployedIndex under an IndexEndpoint.
patch
Updates an IndexEndpoint.
undeployIndex
Undeploys an Index from an IndexEndpoint, removing a DeployedIndex from
it, and freeing all resources it's using.
Module: googleapis.aiplatform.v1beta1.projects.locations.indexes
Functions
create
Creates an Index.
delete
Deletes an Index. An Index can only be deleted when all its
DeployedIndexes had been undeployed.
get
Gets an Index.
list
Lists Indexes in a Location.
patch
Updates an Index.
removeDatapoints
Remove Datapoints from an Index.
upsertDatapoints
Add/update Datapoints into an Index.
Module: googleapis.aiplatform.v1beta1.projects.locations.metadataStores
Functions
create
Initializes a MetadataStore, including allocation of resources.
delete
Deletes a single MetadataStore and all its child resources (Artifacts,
Executions, and Contexts).
get
Retrieves a specific MetadataStore.
list
Lists MetadataStores for a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.metadataStores.artifacts
Functions
create
Creates an Artifact associated with a MetadataStore.
delete
Deletes an Artifact.
get
Retrieves a specific Artifact.
list
Lists Artifacts in the MetadataStore.
patch
Updates a stored Artifact.
purge
Purges Artifacts.
queryArtifactLineageSubgraph
Retrieves lineage of an Artifact represented through Artifacts and
Executions connected by Event edges and returned as a LineageSubgraph.
Module: googleapis.aiplatform.v1beta1.projects.locations.metadataStores.contexts
Functions
addContextArtifactsAndExecutions
Adds a set of Artifacts and Executions to a Context. If any of the
Artifacts or Executions have already been added to a Context, they are
simply skipped.
addContextChildren
Adds a set of Contexts as children to a parent Context. If any of the
child Contexts have already been added to the parent Context, they are
simply skipped. If this call would create a cycle or cause any Context
to have more than 10 parents, the request will fail with an
INVALID_ARGUMENT error.
create
Creates a Context associated with a MetadataStore.
delete
Deletes a stored Context.
get
Retrieves a specific Context.
list
Lists Contexts on the MetadataStore.
patch
Updates a stored Context.
purge
Purges Contexts.
queryContextLineageSubgraph
Retrieves Artifacts and Executions within the specified Context,
connected by Event edges and returned as a LineageSubgraph.
removeContextChildren
Remove a set of children contexts from a parent Context. If any of the
child Contexts were NOT added to the parent Context, they are simply
skipped.
Module: googleapis.aiplatform.v1beta1.projects.locations.metadataStores.executions
Functions
addExecutionEvents
Adds Events to the specified Execution. An Event indicates whether an
Artifact was used as an input or output for an Execution. If an Event
already exists between the Execution and the Artifact, the Event is
skipped.
create
Creates an Execution associated with a MetadataStore.
delete
Deletes an Execution.
get
Retrieves a specific Execution.
list
Lists Executions in the MetadataStore.
patch
Updates a stored Execution.
purge
Purges Executions.
queryExecutionInputsAndOutputs
Obtains the set of input and output Artifacts for this Execution, in the
form of LineageSubgraph that also contains the Execution and connecting
Events.
Module: googleapis.aiplatform.v1beta1.projects.locations.metadataStores.metadataSchemas
Functions
create
Creates a MetadataSchema.
get
Retrieves a specific MetadataSchema.
list
Lists MetadataSchemas.
Module: googleapis.aiplatform.v1beta1.projects.locations.migratableResources
Functions
batchMigrate
Batch migrates resources from ml.googleapis.com, automl.googleapis.com,
and datalabeling.googleapis.com to Vertex AI.
search
Searches all of the resources in automl.googleapis.com,
datalabeling.googleapis.com and ml.googleapis.com that can be migrated
to Vertex AI's given location.
Module: googleapis.aiplatform.v1beta1.projects.locations.modelDeploymentMonitoringJobs
Functions
create
Creates a ModelDeploymentMonitoringJob. It will run periodically on a
configured interval.
delete
Deletes a ModelDeploymentMonitoringJob.
get
Gets a ModelDeploymentMonitoringJob.
list
Lists ModelDeploymentMonitoringJobs in a Location.
patch
Updates a ModelDeploymentMonitoringJob.
pause
Pauses a ModelDeploymentMonitoringJob. If the job is running, the server
makes a best effort to cancel the job. Will mark
ModelDeploymentMonitoringJob.state to 'PAUSED'.
resume
Resumes a paused ModelDeploymentMonitoringJob. It will start to run from
next scheduled time. A deleted ModelDeploymentMonitoringJob can't be
resumed.
searchModelDeploymentMonitoringStatsAnomalies
Searches Model Monitoring Statistics generated within a given time
window.
Module: googleapis.aiplatform.v1beta1.projects.locations.modelMonitors
Functions
create
Creates a ModelMonitor.
delete
Deletes a ModelMonitor.
get
Gets a ModelMonitor.
list
Lists ModelMonitors in a Location.
patch
Updates a ModelMonitor.
searchModelMonitoringAlerts
Returns the Model Monitoring alerts.
searchModelMonitoringStats
Searches Model Monitoring Stats generated within a given time window.
Module: googleapis.aiplatform.v1beta1.projects.locations.modelMonitors.modelMonitoringJobs
Functions
create
Creates a ModelMonitoringJob.
delete
Deletes a ModelMonitoringJob.
get
Gets a ModelMonitoringJob.
list
Lists ModelMonitoringJobs. Callers may choose to read across multiple
Monitors as per AIP-159 by using '-' (the
hyphen or dash character) as a wildcard character instead of
modelMonitor id in the parent. Format
projects/{project_id}/locations/{location}/moodelMonitors/-/modelMonitoringJobs
Module: googleapis.aiplatform.v1beta1.projects.locations.models
Functions
copy
Copies an already existing Vertex AI Model into the specified Location.
The source Model must exist in the same Project. When copying custom
Models, the users themselves are responsible for Model.metadata content
to be region-agnostic, as well as making sure that any resources (e.g.
files) it depends on remain accessible.
delete
Deletes a Model. A model cannot be deleted if any Endpoint resource has
a DeployedModel based on the model in its deployed_models field.
deleteVersion
Deletes a Model version. Model version can only be deleted if there are
no DeployedModels created from it. Deleting the only version in the
Model is not allowed. Use DeleteModel for deleting the Model instead.
export
Exports a trained, exportable Model to a location specified by the user.
A Model is considered to be exportable if it has at least one supported
export format.
get
Gets a Model.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists Models in a Location.
listVersions
Lists versions of the specified model.
mergeVersionAliases
Merges a set of aliases for a Model version.
patch
Updates a Model.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
updateExplanationDataset
Incrementally update the dataset used for an examples model.
upload
Uploads a Model artifact into Vertex AI.
Module: googleapis.aiplatform.v1beta1.projects.locations.models.evaluations
Functions
get
Gets a ModelEvaluation.
list
Lists ModelEvaluations in a Model.
Module: googleapis.aiplatform.v1beta1.projects.locations.models.evaluations.slices
Functions
batchImport
Imports a list of externally generated EvaluatedAnnotations.
get
Gets a ModelEvaluationSlice.
list
Lists ModelEvaluationSlices in a ModelEvaluation.
Module: googleapis.aiplatform.v1beta1.projects.locations.notebookRuntimeTemplates
Functions
create
Creates a NotebookRuntimeTemplate.
delete
Deletes a NotebookRuntimeTemplate.
get
Gets a NotebookRuntimeTemplate.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
list
Lists NotebookRuntimeTemplates in a Location.
setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy. Can return NOT_FOUND , INVALID_ARGUMENT , and
PERMISSION_DENIED errors.
testIamPermissions
Returns permissions that a caller has on the specified resource. If the
resource does not exist, this will return an empty set of permissions,
not a NOT_FOUND error. Note: This operation is designed to be used for
building permission-aware UIs and command-line tools, not for
authorization checking. This operation may "fail open" without
warning.
Module: googleapis.aiplatform.v1beta1.projects.locations.notebookRuntimes
Functions
assign
Assigns a NotebookRuntime to a user for a particular Notebook file. This
method will either returns an existing assignment or generates a new
one.
delete
Deletes a NotebookRuntime.
get
Gets a NotebookRuntime.
list
Lists NotebookRuntimes in a Location.
start
Starts a NotebookRuntime.
Module: googleapis.aiplatform.v1beta1.projects.locations.operations
Functions
cancel
Starts asynchronous cancellation on a long-running operation. The server
makes a best effort to cancel the operation, but success is not
guaranteed. If the server doesn't support this method, it returns
google.rpc.Code.UNIMPLEMENTED . Clients can use Operations.GetOperation
or other methods to check whether the cancellation succeeded or whether
the operation completed despite cancellation. On successful
cancellation, the operation is not deleted; instead, it becomes an
operation with an Operation.error value with a google.rpc.Status.code of
1, corresponding to Code.CANCELLED .
delete
Deletes a long-running operation. This method indicates that the client
is no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
google.rpc.Code.UNIMPLEMENTED .
get
Gets the latest state of a long-running operation. Clients can use this
method to poll the operation result at intervals as recommended by the
API service.
list
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns UNIMPLEMENTED .
wait
Waits until the specified long-running operation is done or reaches at
most a specified timeout, returning the latest state. If the operation
is already done, the latest state is immediately returned. If the
timeout specified is greater than the default HTTP/RPC timeout, the
HTTP/RPC timeout is used. If the server does not support this method, it
returns google.rpc.Code.UNIMPLEMENTED . Note that this method is on a
best-effort basis. It may return the latest state before the specified
timeout (including immediately), meaning even an immediate response is
no guarantee that the operation is done.
Module: googleapis.aiplatform.v1beta1.projects.locations.persistentResources
Functions
create
Creates a PersistentResource.
delete
Deletes a PersistentResource.
get
Gets a PersistentResource.
list
Lists PersistentResources in a Location.
patch
Updates a PersistentResource.
reboot
Reboots a PersistentResource.
Module: googleapis.aiplatform.v1beta1.projects.locations.pipelineJobs
Functions
batchCancel
Batch cancel PipelineJobs. Firstly the server will check if all the jobs
are in non-terminal states, and skip the jobs that are already
terminated. If the operation failed, none of the pipeline jobs are
cancelled. The server will poll the states of all the pipeline jobs
periodically to check the cancellation status. This operation will
return an LRO.
batchDelete
Batch deletes PipelineJobs The Operation is atomic. If it fails, none of
the PipelineJobs are deleted. If it succeeds, all of the PipelineJobs
are deleted.
cancel
Cancels a PipelineJob. Starts asynchronous cancellation on the
PipelineJob. The server makes a best effort to cancel the pipeline, but
success is not guaranteed. Clients can use
PipelineService.GetPipelineJob or other methods to check whether the
cancellation succeeded or whether the pipeline completed despite
cancellation. On successful cancellation, the PipelineJob is not
deleted; instead it becomes a pipeline with a PipelineJob.error value
with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED ,
and PipelineJob.state is set to CANCELLED .
create
Creates a PipelineJob. A PipelineJob will run immediately when created.
delete
Deletes a PipelineJob.
get
Gets a PipelineJob.
list
Lists PipelineJobs in a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.publishers.models
Functions
countTokens
Perform a token counting.
generateContent
Generate content with multimodal inputs.
getIamPolicy
Gets the access control policy for a resource. Returns an empty policy
if the resource exists and does not have a policy set.
predict
Perform an online prediction.
rawPredict
Perform an online prediction with an arbitrary HTTP payload. The
response includes the following HTTP headers: *
X-Vertex-AI-Endpoint-Id : ID of the Endpoint that served this
prediction. * X-Vertex-AI-Deployed-Model-Id : ID of the Endpoint's
DeployedModel that served this prediction.
serverStreamingPredict
Perform a server-side streaming online prediction request for Vertex LLM
streaming.
streamGenerateContent
Generate content with multimodal inputs with streaming support.
Module: googleapis.aiplatform.v1beta1.projects.locations.ragCorpora
Functions
create
Creates a RagCorpus.
delete
Deletes a RagCorpus.
get
Gets a RagCorpus.
list
Lists RagCorpora in a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.ragCorpora.ragFiles
Functions
delete
Deletes a RagFile.
get
Gets a RagFile.
list
Lists RagFiles in a RagCorpus.
Module: googleapis.aiplatform.v1beta1.projects.locations.reasoningEngines
Functions
create
Creates a reasoning engine.
delete
Deletes a reasoning engine.
get
Gets a reasoning engine.
list
Lists reasoning engines in a location.
query
Queries using a reasoning engine.
Module: googleapis.aiplatform.v1beta1.projects.locations.schedules
Functions
create
Creates a Schedule.
delete
Deletes a Schedule.
get
Gets a Schedule.
list
Lists Schedules in a Location.
patch
Updates an active or paused Schedule. When the Schedule is updated, new
runs will be scheduled starting from the updated next execution time
after the update time based on the time_specification in the updated
Schedule. All unstarted runs before the update time will be skipped
while already created runs will NOT be paused or canceled.
pause
Pauses a Schedule. Will mark Schedule.state to 'PAUSED'. If the schedule
is paused, no new runs will be created. Already created runs will NOT be
paused or canceled.
resume
Resumes a paused Schedule to start scheduling new runs. Will mark
Schedule.state to 'ACTIVE'. Only paused Schedule can be resumed. When
the Schedule is resumed, new runs will be scheduled starting from the
next execution time after the current time based on the
time_specification in the Schedule. If Schedule.catchUp is set up true,
all missed runs will be scheduled for backfill first.
Module: googleapis.aiplatform.v1beta1.projects.locations.specialistPools
Functions
create
Creates a SpecialistPool.
delete
Deletes a SpecialistPool as well as all Specialists in the pool.
get
Gets a SpecialistPool.
list
Lists SpecialistPools in a Location.
patch
Updates a SpecialistPool.
Module: googleapis.aiplatform.v1beta1.projects.locations.studies
Functions
create
Creates a Study. A resource name will be generated after creation of the
Study.
delete
Deletes a Study.
get
Gets a Study by name.
list
Lists all the studies in a region for an associated project.
lookup
Looks a study up using the user-defined display_name field instead of
the fully qualified resource name.
Module: googleapis.aiplatform.v1beta1.projects.locations.studies.trials
Functions
addTrialMeasurement
Adds a measurement of the objective metrics to a Trial. This measurement
is assumed to have been taken before the Trial is complete.
checkTrialEarlyStoppingState
Checks whether a Trial should stop or not. Returns a long-running
operation. When the operation is successful, it will contain a
CheckTrialEarlyStoppingStateResponse.
complete
Marks a Trial as complete.
create
Adds a user provided Trial to a Study.
delete
Deletes a Trial.
get
Gets a Trial.
list
Lists the Trials associated with a Study.
listOptimalTrials
Lists the pareto-optimal Trials for multi-objective Study or the optimal
Trials for single-objective Study. The definition of pareto-optimal can
be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
stop
Stops a Trial.
suggest
Adds one or more Trials to a Study, with parameter values suggested by
Vertex AI Vizier. Returns a long-running operation associated with the
generation of Trial suggestions. When this long-running operation
succeeds, it will contain a SuggestTrialsResponse.
Module: googleapis.aiplatform.v1beta1.projects.locations.tensorboards
Functions
batchRead
Reads multiple TensorboardTimeSeries' data. The data point number limit
is 1000 for scalars, 100 for tensors and blob references. If the number
of data points stored is less than the limit, all data is returned.
Otherwise, the number limit of data points is randomly selected from
this time series and returned.
create
Creates a Tensorboard.
delete
Deletes a Tensorboard.
get
Gets a Tensorboard.
list
Lists Tensorboards in a Location.
patch
Updates a Tensorboard.
readSize
Returns the storage size for a given TensorBoard instance.
readUsage
Returns a list of monthly active users for a given TensorBoard instance.
Module: googleapis.aiplatform.v1beta1.projects.locations.tensorboards.experiments
Functions
batchCreate
Batch create TensorboardTimeSeries that belong to a
TensorboardExperiment.
create
Creates a TensorboardExperiment.
delete
Deletes a TensorboardExperiment.
get
Gets a TensorboardExperiment.
list
Lists TensorboardExperiments in a Location.
patch
Updates a TensorboardExperiment.
write
Write time series data points of multiple TensorboardTimeSeries in
multiple TensorboardRun's. If any data fail to be ingested, an error is
returned.
Module: googleapis.aiplatform.v1beta1.projects.locations.tensorboards.experiments.runs
Functions
batchCreate
Batch create TensorboardRuns.
create
Creates a TensorboardRun.
delete
Deletes a TensorboardRun.
get
Gets a TensorboardRun.
list
Lists TensorboardRuns in a Location.
patch
Updates a TensorboardRun.
write
Write time series data points into multiple TensorboardTimeSeries under
a TensorboardRun. If any data fail to be ingested, an error is returned.
Module: googleapis.aiplatform.v1beta1.projects.locations.tensorboards.experiments.runs.timeSeries
Functions
create
Creates a TensorboardTimeSeries.
delete
Deletes a TensorboardTimeSeries.
exportTensorboardTimeSeries
Exports a TensorboardTimeSeries' data. Data is returned in paginated
responses.
get
Gets a TensorboardTimeSeries.
list
Lists TensorboardTimeSeries in a Location.
patch
Updates a TensorboardTimeSeries.
read
Reads a TensorboardTimeSeries' data. By default, if the number of data
points stored is less than 1000, all data is returned. Otherwise, 1000
data points is randomly selected from this time series and returned.
This value can be changed by changing max_data_points, which can't be
greater than 10k.
readBlobData
Gets bytes of TensorboardBlobs. This is to allow reading blob data
stored in consumer project's Cloud Storage bucket without users having
to obtain Cloud Storage access permission.
Module: googleapis.aiplatform.v1beta1.projects.locations.trainingPipelines
Functions
cancel
Cancels a TrainingPipeline. Starts asynchronous cancellation on the
TrainingPipeline. The server makes a best effort to cancel the pipeline,
but success is not guaranteed. Clients can use
PipelineService.GetTrainingPipeline or other methods to check whether
the cancellation succeeded or whether the pipeline completed despite
cancellation. On successful cancellation, the TrainingPipeline is not
deleted; instead it becomes a pipeline with a TrainingPipeline.error
value with a google.rpc.Status.code of 1, corresponding to
Code.CANCELLED , and TrainingPipeline.state is set to CANCELLED .
create
Creates a TrainingPipeline. A created TrainingPipeline right away will
be attempted to be run.
delete
Deletes a TrainingPipeline.
get
Gets a TrainingPipeline.
list
Lists TrainingPipelines in a Location.
Module: googleapis.aiplatform.v1beta1.projects.locations.tuningJobs
Functions
cancel
Cancels a TuningJob. Starts asynchronous cancellation on the TuningJob.
The server makes a best effort to cancel the job, but success is not
guaranteed. Clients can use GenAiTuningService.GetTuningJob or other
methods to check whether the cancellation succeeded or whether the job
completed despite cancellation. On successful cancellation, the
TuningJob is not deleted; instead it becomes a job with a
TuningJob.error value with a google.rpc.Status.code of 1, corresponding
to Code.CANCELLED , and TuningJob.state is set to CANCELLED .
create
Creates a TuningJob. A created TuningJob right away will be attempted to
be run.
get
Gets a TuningJob.
list
Lists TuningJobs in a Location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
