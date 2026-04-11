---
title: "REST Resource: projects.datasets \_|\_ Maps Datasets API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets
  title: "REST Resource: projects.datasets \_|\_ Maps Datasets API \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Maps Datasets API
Reference
Send feedback
REST Resource: projects.datasets
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Dataset resource represents a collection of data with properties like name, description, version, and usage, sourced from local files or Google Cloud Storage.
Datasets have a lifecycle with states such as importing, processing, publishing, and completed, along with potential error states.
Users can manage Datasets via methods like create, delete, get, list, and patch to control their data resources.
Dataset data can be formatted as GeoJSON, KML, or CSV and is intended for use cases like data-driven styling.
The status of a Dataset indicates its current state and any associated error messages during processing.
Resource: Dataset
JSON representation
Usage
LocalFileSource
JSON representation
FileFormat
GcsSource
JSON representation
Status
JSON representation
State
Methods
Resource: Dataset
A representation of a dataset resource.
JSON representation
{
"name" : string ,
"displayName" : string ,
"description" : string ,
"versionId" : string ,
"usage" : [
enum ( Usage )
] ,
"status" : {
object ( Status )
} ,
"createTime" : string ,
"updateTime" : string ,
"versionCreateTime" : string ,
"versionDescription" : string ,
// Union field data_source can be only one of the following:
"localFileSource" : {
object ( LocalFileSource )
} ,
"gcsSource" : {
object ( GcsSource )
}
// End of list of possible types for union field data_source .
}
Fields
name
string
Resource name. Format: projects/{project}/datasets/{datasetId}
displayName
string
Human readable name, shown in the console UI.
Must be unique within a project.
description
string
A description of this dataset.
versionId
string
The version ID of the dataset.
usage[]
enum ( Usage )
Specified use case for this dataset.
status
object ( Status )
Output only. The status of this dataset version.
createTime
string ( Timestamp format)
Output only. Time when the dataset was first created.
updateTime
string ( Timestamp format)
Output only. Time when the dataset metadata was last updated.
versionCreateTime
string ( Timestamp format)
Output only. Time when this version was created.
versionDescription
string
Output only. The description for this version of dataset. It is provided when importing data to the dataset.
Union field data_source . Details about the source of the data for the dataset. data_source can be only one of the following:
localFileSource
object ( LocalFileSource )
A local file source for the dataset for a single upload.
gcsSource
object ( GcsSource )
A Google Cloud Storage file source for the dataset for a single upload.
Usage
Usage specifies where the data is intended to be used to inform how to process the data.
Enums
USAGE_UNSPECIFIED
The usage of this dataset is not set.
USAGE_DATA_DRIVEN_STYLING
This dataset will be used for data driven styling.
LocalFileSource
The details about the data source when it is a local file.
JSON representation
{
"filename" : string ,
"fileFormat" : enum ( FileFormat )
}
Fields
filename
string
The file name of the uploaded file.
fileFormat
enum ( FileFormat )
The format of the file that is being uploaded.
FileFormat
The format of the file being uploaded.
Enums
FILE_FORMAT_UNSPECIFIED
Unspecified file format.
FILE_FORMAT_GEOJSON
GeoJson file.
FILE_FORMAT_KML
KML file.
FILE_FORMAT_CSV
CSV file.
GcsSource
The details about the data source when it is in Google Cloud Storage.
JSON representation
{
"inputUri" : string ,
"fileFormat" : enum ( FileFormat )
}
Fields
inputUri
string
Source data URI. For example, gs://my_bucket/my_object .
fileFormat
enum ( FileFormat )
The file format of the Google Cloud Storage object. This is used mainly for validation.
Status
Status of the dataset.
JSON representation
{
"state" : enum ( State ) ,
"errorMessage" : string
}
Fields
state
enum ( State )
State enum for status.
errorMessage
string
Error message indicating reason of failure. It is empty if the datasets is not in a failed state.
State
A list of states for the dataset.
Enums
STATE_UNSPECIFIED
The state of this dataset is not set.
STATE_IMPORTING
Data is being imported to a dataset.
STATE_IMPORT_SUCCEEDED
Importing data to a dataset succeeded.
STATE_IMPORT_FAILED
Importing data to a dataset failed.
STATE_DELETING
The dataset is in the process of getting deleted.
STATE_DELETION_FAILED
The deletion failed state. This state represents that dataset deletion has failed. Deletion may be retried.
STATE_PROCESSING
Data is being processed.
STATE_PROCESSING_FAILED
The processing failed state. This state represents that processing has failed and may report errors.
STATE_NEEDS_REVIEW
This state is currently not used.
STATE_PUBLISHING
The publishing state. This state represents the publishing is in progress.
STATE_PUBLISHING_FAILED
The publishing failed states. This state represents that the publishing failed. Publishing may be retried.
STATE_COMPLETED
The completed state. This state represents the dataset being available for its specific usage.
Methods
create
Creates a new dataset for the specified project.
delete
Deletes the specified dataset.
fetchDatasetErrors
Gets all the errors of a dataset.
get
Gets the dataset.
list
Lists all the datasets for the specified project.
patch
Updates the metadata for the dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This document details dataset resource management, including creating, deleting, listing, and updating datasets. Datasets can be sourced from local files or Google Cloud Storage, supporting formats like GeoJSON, KML, and CSV. Each dataset has a `status` reflecting its `state` (e.g., importing, processing, completed), with potential error messages. The `usage` field specifies the data's intended purpose. Dataset operations include fetching errors and managing versions with their respective descriptions and creation timestamps.\n"]]
