---
title: "Method: analyzeIamPolicyLongrunning \_|\_ Cloud Asset Inventory \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeIamPolicyLongrunning
  title: "Method: analyzeIamPolicyLongrunning \_|\_ Cloud Asset Inventory \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Method: analyzeIamPolicyLongrunning
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
JSON representation
JSON representation
JSON representation
JSON representation
JSON representation
Response body
Authorization scopes
IamPolicyAnalysisOutputConfig
JSON representation
GcsDestination
JSON representation
BigQueryDestination
JSON representation
PartitionKey
Try it!
Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse . This method implements the google.longrunning.Operation , which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
HTTP request
POST https://cloudasset.googleapis.com/v1/{analysisQuery.scope=*/*}:analyzeIamPolicyLongrunning
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
analysisQuery.scope
string
Required. The relative name of the root asset. Only resources and IAM policies within the scope will be analyzed.
This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
To know how to get organization ID, visit here .
To know how to get folder or project ID, visit here .
Authorization requires one or more of the following IAM permissions on the specified resource scope :
cloudasset.assets.analyzeIamPolicy
cloudasset.assets.searchAllResources
cloudasset.assets.searchAllIamPolicies
Request body
The request body contains data with the following structure:
JSON representation
{
"analysisQuery" : {
"scope" : string ,
"resourceSelector" : {
"fullResourceName" : string
} ,
"identitySelector" : {
"identity" : string
} ,
"accessSelector" : {
"roles" : [
string
] ,
"permissions" : [
string
]
} ,
"options" : {
"expandGroups" : boolean ,
"expandRoles" : boolean ,
"expandResources" : boolean ,
"outputResourceEdges" : boolean ,
"outputGroupEdges" : boolean ,
"analyzeServiceAccountImpersonation" : boolean
} ,
"conditionContext" : {
// Union field TimeContext can be only one of the following:
"accessTime" : string
// End of list of possible types for union field TimeContext .
}
} ,
"savedAnalysisQuery" : string ,
"outputConfig" : {
object ( IamPolicyAnalysisOutputConfig )
}
}
Fields
analysisQuery.resourceSelector
object ( ResourceSelector )
Optional. Specifies a resource for analysis.
analysisQuery.identitySelector
object ( IdentitySelector )
Optional. Specifies an identity for analysis.
analysisQuery.accessSelector
object ( AccessSelector )
Optional. Specifies roles or permissions for analysis. This is optional.
analysisQuery.options
object ( Options )
Optional. The query options.
analysisQuery.conditionContext
object ( ConditionContext )
Optional. The hypothetical context for IAM conditions evaluation.
savedAnalysisQuery
string
Optional. The name of a saved query, which must be in the format of:
projects/projectNumber/savedQueries/savedQueryId
folders/folder_number/savedQueries/savedQueryId
organizations/organization_number/savedQueries/savedQueryId
If both analysisQuery and savedAnalysisQuery are provided, they will be merged together with the savedAnalysisQuery as base and the analysisQuery as overrides. For more details of the merge behavior, refer to the MergeFrom doc.
Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn't support field presence yet.
outputConfig
object ( IamPolicyAnalysisOutputConfig )
Required. Output configuration indicating where the results will be output to.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IamPolicyAnalysisOutputConfig
Output configuration for export IAM policy analysis destination.
JSON representation
{
// Union field destination can be only one of the following:
"gcsDestination" : {
object ( GcsDestination )
} ,
"bigqueryDestination" : {
object ( BigQueryDestination )
}
// End of list of possible types for union field destination .
}
Fields
Union field destination . IAM policy analysis export destination. destination can be only one of the following:
gcsDestination
object ( GcsDestination )
Destination on Cloud Storage.
bigqueryDestination
object ( BigQueryDestination )
Destination on BigQuery.
GcsDestination
A Cloud Storage location.
JSON representation
{
"uri" : string
}
Fields
uri
string
Required. The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See Viewing and Editing Object Metadata for more information.
If the specified Cloud Storage object already exists and there is no hold , it will be overwritten with the analysis result.
BigQueryDestination
A BigQuery destination.
JSON representation
{
"dataset" : string ,
"tablePrefix" : string ,
"partitionKey" : enum ( PartitionKey ) ,
"writeDisposition" : string
}
Fields
dataset
string
Required. The BigQuery dataset in format "projects/projectId/datasets/datasetId", to which the analysis results should be exported. If this dataset does not exist, the export call will return an INVALID_ARGUMENT error.
tablePrefix
string
Required. The prefix of the BigQuery tables to which the analysis results will be written. Tables will be created based on this tablePrefix if not exist: * _analysis table will contain export operation's metadata. * _analysis_result will contain all the IamPolicyAnalysisResult . When [partitionKey] is specified, both tables will be partitioned based on the [partitionKey].
partitionKey
enum ( PartitionKey )
The partition key for BigQuery partitioned table.
writeDisposition
string
Optional. Specifies the action that occurs if the destination table or partition already exists. The following values are supported:
WRITE_TRUNCATE: If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data.
WRITE_APPEND: If the table or partition already exists, BigQuery appends the data to the table or the latest partition.
WRITE_EMPTY: If the table already exists and contains data, an error is returned.
The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Details are at https://cloud.google.com/bigquery/docs/loading-data-local#appending_to_or_overwriting_a_table_using_a_local_file .
PartitionKey
This enum determines the partition key column for the bigquery tables. Partitioning can improve query performance and reduce query cost by filtering partitions. Refer to https://cloud.google.com/bigquery/docs/partitioned-tables for details.
Enums
PARTITION_KEY_UNSPECIFIED
Unspecified partition key. Tables won't be partitioned using this option.
REQUEST_TIME
The time when the request is received. If specified as partition key, the result table(s) is partitioned by the RequestTime column, an additional timestamp column representing when the request was received.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
