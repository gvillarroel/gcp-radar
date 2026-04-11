---
title: "REST Resource: projects.locations.entityReconciliationJobs \_|\_ Enterprise\
  \ Knowledge Graph \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/enterprise-knowledge-graph/docs/reference/rest/v1/projects.locations.entityReconciliationJobs
  title: "REST Resource: projects.locations.entityReconciliationJobs \_|\_ Enterprise\
    \ Knowledge Graph \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Enterprise Knowledge Graph
Reference
Send feedback
REST Resource: projects.locations.entityReconciliationJobs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: EntityReconciliationJob
Entity reconciliation job message.
JSON representation
{
"name" : string ,
"inputConfig" : {
object ( InputConfig )
} ,
"outputConfig" : {
object ( OutputConfig )
} ,
"state" : enum ( JobState ) ,
"error" : {
object ( Status )
} ,
"createTime" : string ,
"endTime" : string ,
"updateTime" : string ,
"reconConfig" : {
object ( ReconConfig )
}
}
Fields
name
string
Output only. Resource name of the EntityReconciliationJob.
inputConfig
object ( InputConfig )
Required. Information about the input BigQuery tables.
outputConfig
object ( OutputConfig )
Required. The desired output location.
state
enum ( JobState )
Output only. The detailed state of the job.
error
object ( Status )
Output only. Only populated when the job's state is JOB_STATE_FAILED or JOB_STATE_CANCELLED.
createTime
string ( Timestamp format)
Output only. Time when the EntityReconciliationJob was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
endTime
string ( Timestamp format)
Output only. Time when the EntityReconciliationJob entered any of the following states: JOB_STATE_SUCCEEDED , JOB_STATE_FAILED , JOB_STATE_CANCELLED .
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. Time when the EntityReconciliationJob was most recently updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
reconConfig
object ( ReconConfig )
Optional. Recon configs to adjust the clustering behavior.
InputConfig
The desired input location and metadata.
JSON representation
{
"bigqueryInputConfigs" : [
{
object ( BigQueryInputConfig )
}
] ,
"entityType" : enum ( EntityType ) ,
"previousResultBigqueryTable" : string
}
Fields
bigqueryInputConfigs[]
object ( BigQueryInputConfig )
Set of input BigQuery tables.
entityType
enum ( EntityType )
Entity type
previousResultBigqueryTable
string
Optional. Provide the bigquery table containing the previous results if cluster ID stability is desired. Format is projects/*/datasets/*/tables/* .
BigQueryInputConfig
The input config for BigQuery tables.
JSON representation
{
"bigqueryTable" : string ,
"gcsUri" : string
}
Fields
bigqueryTable
string
Required. Format is projects/*/datasets/*/tables/* .
gcsUri
string
Required. Schema mapping file
EntityType
The type of entities we will support. Currently, we only support people, establishment, property, and product types. If the type is unspecified, it will be generic type.
Enums
ENTITY_TYPE_UNSPECIFIED
The default value.
PEOPLE
People entity.
This item is deprecated!
ESTABLISHMENT
Establishment entity.
This item is deprecated!
PROPERTY
Property entity. e.g. real estate property.
This item is deprecated!
PRODUCT
Product entity.
ORGANIZATION
Organization entity.
LOCAL_BUSINESS
Local Business entity.
PERSON
Person entity.
OutputConfig
The desired output location and metadata.
JSON representation
{
"bigqueryDataset" : string
}
Fields
bigqueryDataset
string
Format is projects/*/datasets/* .
JobState
Describes the state of a job.
Enums
JOB_STATE_UNSPECIFIED
The job state is unspecified.
JOB_STATE_PENDING
The service is preparing to run the job.
JOB_STATE_RUNNING
The job is in progress.
JOB_STATE_SUCCEEDED
The job completed successfully.
JOB_STATE_FAILED
The job failed.
JOB_STATE_CANCELLED
The job has been cancelled.
JOB_STATE_KNOWLEDGE_EXTRACTION
Entity Recon API: The knowledge extraction job is running.
JOB_STATE_RECON_PREPROCESSING
Entity Recon API: The preprocessing job is running.
JOB_STATE_CLUSTERING
Entity Recon API: The clustering job is running.
JOB_STATE_EXPORTING_CLUSTERS
Entity Recon API: The exporting clusters job is running.
Status
The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC . Each Status message contains three pieces of data: error code, error message, and error details.
You can find out more about this error model and how to work with it in the API Design Guide .
JSON representation
{
"code" : integer ,
"message" : string ,
"details" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
code
integer
The status code, which should be an enum value of google.rpc.Code .
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
ReconConfig
Recon configs
JSON representation
{
"options" : {
object ( Options )
} ,
"modelConfig" : {
object ( ModelConfig )
} ,
// Union field clustering_config can be only one of the following:
"connectedComponentsConfig" : {
object ( ConnectedComponentsConfig )
} ,
"affinityClusteringConfig" : {
object ( AffinityClusteringConfig )
}
// End of list of possible types for union field clustering_config .
}
Fields
options
object ( Options )
Extra options that affect entity clustering behavior.
modelConfig
object ( ModelConfig )
Model Configs
Union field clustering_config . Choice of clustering algorithm. Default is ConnectedComponentsConfig. clustering_config can be only one of the following:
connectedComponentsConfig
object ( ConnectedComponentsConfig )
Configs for connected components.
affinityClusteringConfig
object ( AffinityClusteringConfig )
Configs for affinity clustering.
ConnectedComponentsConfig
Options for connected components.
JSON representation
{
"weightThreshold" : number
}
Fields
weightThreshold
number
Threshold used for connected components. Default value is 0.85.
AffinityClusteringConfig
Options for affinity clustering.
JSON representation
{
"compressionRoundCount" : string
}
Fields
compressionRoundCount
string ( int64 format)
Number of iterations to perform. Default value is 1.
Options
Options for experimental changes on entity clustering behavior.
JSON representation
{
"enableGeocodingSeparation" : boolean
}
Fields
enableGeocodingSeparation
boolean
If true, separate clusters by their geographic region (from geocoding). Uses the following entity features:
schema.org/addressLocality
schema.org/addressRegion
schema.org/addressCountry Warning: processing will no longer be regionalized!
ModelConfig
Model Configs
JSON representation
{
"modelName" : string ,
"versionTag" : string
}
Fields
modelName
string
Model name. Refer to external documentation for valid names. If unspecified, it defaults to the one mentioned in the documentation.
versionTag
string
Model version tag. Refer to external documentation for valid tags. If unspecified, it defaults to the one mentioned in the documentation.
Methods
cancel
Cancels a EntityReconciliationJob.
create
Creates a EntityReconciliationJob.
delete
Deletes a EntityReconciliationJob.
get
Gets a EntityReconciliationJob.
list
Lists Entity Reconciliation Jobs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-03 UTC."],[],[]]
