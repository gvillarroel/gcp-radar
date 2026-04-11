---
title: "OutputConfig \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/OutputConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/OutputConfig
  title: "OutputConfig \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
OutputConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GcsDestination
JSON representation
BigQueryDestination
JSON representation
PartitionKey
WriteDisposition
CreateDisposition
Output configuration for export destination.
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
Union field destination . Export destination. destination can be only one of the following:
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
"uri" : string ,
"bucket" : string ,
"object" : string ,
"force" : boolean
}
Fields
uri
string
Optional. The path to the file in Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName . If the file already exists, the request succeeds, but the operation fails.
bucket
string
Required. The bucket name to which the export will be stored.
object
string
Required. The object name to which the export will be stored.
force
boolean
Optional. Flag to indicate overwrite in case file already exists.
BigQueryDestination
A BigQuery destination for exporting assets to.
JSON representation
{
"dataset" : string ,
"table" : string ,
"partitionKey" : enum ( PartitionKey ) ,
"writeDisposition" : enum ( WriteDisposition ) ,
"createDisposition" : enum ( CreateDisposition ) ,
"gcsLocation" : string
}
Fields
dataset
string
Required. The BigQuery dataset in format "projects/{projectId}/datasets/{datasetId}", to which the snapshot result should be exported. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.
table
string
Required. The BigQuery table to which the snapshot result should be written.
partitionKey
enum ( PartitionKey )
Optional. The partition key for BigQuery partitioned table.
writeDisposition
enum ( WriteDisposition )
Optional. Specifies the action that occurs if the destination table or partition already exists.
createDisposition
enum ( CreateDisposition )
Optional. Specifies the action that occurs if the destination table does not exist
gcsLocation
string
Optional. Specifies the Cloud Storage location. Users can choose to provide a location for Cloud Storage bucket to store the exported data. (as it is possible that some locations are restricted via org policy for that project) Temporary Cloud Storage bucket creation is an interim step for BigQuery upload. If no value is provided, the default location used will be 'US'.
PartitionKey
This enum determines the partition key column for the BigQuery tables. Partitioning can improve query performance and reduce query cost by filtering partitions. Refer to https://cloud.google.com/bigquery/docs/partitioned-tables for details.
Enums
PARTITION_KEY_UNSPECIFIED
Unspecified partition key. Tables won't be partitioned using this option.
REQUEST_TIME
The time when the request is received. If specified as partition key, the result table(s) is partitioned by the RequestTime column, an additional timestamp column representing when the request was received.
WriteDisposition
Specifies the action that occurs if the destination table or partition already exists. By default, the data will be appended to the existing table.
Enums
WRITE_DISPOSITION_UNSPECIFIED
Unspecified write disposition.
WRITE_APPEND
If the table or partition already exists, BigQuery appends the data to the table or the latest partition.
WRITE_TRUNCATE
If the table or partition already exists, BigQuery overwrites the entire table or all the partitions data.
WRITE_EMPTY
If the table already exists and contains data, an error is returned.
CreateDisposition
Specifies the action that occurs if the destination table does not exist. By default, a new table will be created.
Enums
CREATE_DISPOSITION_UNSPECIFIED
Unspecified create disposition.
CREATE_IF_NEEDED
If the table does not exist, BigQuery creates the table.
CREATE_NEVER
If the table does not exist, an error will be returned.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-29 UTC."],[],[]]
