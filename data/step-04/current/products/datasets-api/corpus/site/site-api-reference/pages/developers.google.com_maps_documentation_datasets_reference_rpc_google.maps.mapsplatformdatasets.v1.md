---
title: "Package google.maps.mapsplatformdatasets.v1 \_|\_ Maps Datasets API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1
  title: "Package google.maps.mapsplatformdatasets.v1 \_|\_ Maps Datasets API \_|\_\
    \ Google for Developers"
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
Package google.maps.mapsplatformdatasets.v1
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Maps Platform Datasets API allows you to create, manage, and utilize datasets for various purposes, including data-driven styling.
You can import data from local files or Google Cloud Storage, and the API supports formats like GeoJSON, KML, and CSV.
Datasets go through various states, such as importing, processing, and publishing, and you can monitor their status and errors.
You can download and update datasets, as well as list all datasets associated with your project.
Authorization and IAM permissions are required to access and manage datasets using the API.
Index
MapsPlatformDatasets (interface)
CreateDatasetRequest (message)
Dataset (message)
DeleteDatasetRequest (message)
DownloadDatasetRequest (message)
DownloadDatasetResponse (message)
FetchDatasetErrorsRequest (message)
FetchDatasetErrorsResponse (message)
FileFormat (enum)
GcsSource (message)
GetDatasetRequest (message)
ImportDatasetRequest (message)
ImportDatasetResponse (message)
ListDatasetsRequest (message)
ListDatasetsResponse (message)
LocalFileSource (message)
Status (message)
Status.State (enum)
UpdateDatasetMetadataRequest (message)
Usage (enum)
MapsPlatformDatasets
Service definition for the Maps Platform Datasets API.
CreateDataset
rpc CreateDataset( CreateDatasetRequest ) returns ( Dataset )
Creates a new dataset for the specified project.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the parent resource:
mapsplatformdatasets.datasets.create
For more information, see the IAM documentation .
DeleteDataset
rpc DeleteDataset( DeleteDatasetRequest ) returns ( Empty )
Deletes the specified dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.delete
For more information, see the IAM documentation .
DownloadDataset
rpc DownloadDataset( DownloadDatasetRequest ) returns ( DownloadDatasetResponse )
Downloads a dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.export
For more information, see the IAM documentation .
FetchDatasetErrors
rpc FetchDatasetErrors( FetchDatasetErrorsRequest ) returns ( FetchDatasetErrorsResponse )
Gets all the errors of a dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the dataset resource:
mapsplatformdatasets.datasets.get
For more information, see the IAM documentation .
GetDataset
rpc GetDataset( GetDatasetRequest ) returns ( Dataset )
Gets the dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.get
For more information, see the IAM documentation .
ImportDataset
rpc ImportDataset( ImportDatasetRequest ) returns ( ImportDatasetResponse )
Imports a new version of the data for the dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.import
For more information, see the IAM documentation .
ListDatasets
rpc ListDatasets( ListDatasetsRequest ) returns ( ListDatasetsResponse )
Lists all the datasets for the specified project.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the parent resource:
mapsplatformdatasets.datasets.list
For more information, see the IAM documentation .
UpdateDatasetMetadata
rpc UpdateDatasetMetadata( UpdateDatasetMetadataRequest ) returns ( Dataset )
Updates the metadata for the dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.update
For more information, see the IAM documentation .
CreateDatasetRequest
Request to create a maps dataset.
Fields
parent
string
Required. Parent project that will own the dataset. Format: projects/{project}
dataset
Dataset
Required. The dataset version to create.
Dataset
A representation of a dataset resource.
Fields
name
string
Resource name. Format: projects/{project}/datasets/{dataset_id}
display_name
string
Human readable name, shown in the console UI.
Must be unique within a project.
description
string
A description of this dataset.
version_id
string
The version ID of the dataset.
usage[]
Usage
Specified use case for this dataset.
status
Status
Output only. The status of this dataset version.
create_time
Timestamp
Output only. Time when the dataset was first created.
update_time
Timestamp
Output only. Time when the dataset metadata was last updated.
version_create_time
Timestamp
Output only. Time when this version was created.
version_description
string
Output only. The description for this version of dataset. It is provided when importing data to the dataset.
Union field data_source . Details about the source of the data for the dataset. data_source can be only one of the following:
local_file_source
LocalFileSource
A local file source for the dataset for a single upload.
gcs_source
GcsSource
A Google Cloud Storage file source for the dataset for a single upload.
DeleteDatasetRequest
Request to delete a dataset.
Fields
name
string
Required. The name of the dataset to delete. Format: projects/{project}/datasets/{dataset_id}
DownloadDatasetRequest
Request to download the dataset.
Fields
name
string
Resource name of the dataset to fetch. Format: projects/{project}/datasets/{dataset_id}
DownloadDatasetResponse
Response object of DownloadDataset.
FetchDatasetErrorsRequest
Request to list detailed errors belonging to a dataset.
Fields
dataset
string
Required. The name of the dataset to list all the errors for. Format: projects/{project}/datasets/{dataset_id}
page_size
int32
The maximum number of errors to return per page.
The maximum value is 500; values above 500 will be capped to 500.
If unspecified, at most 50 errors will be returned.
page_token
string
The page token, received from a previous ListDatasetErrors call. Provide this to retrieve the subsequent page.
FetchDatasetErrorsResponse
Response object of FetchDatasetErrors.
Fields
next_page_token
string
A token that can be sent as page_token to retrieve the next page.
If this field is omitted, there are no subsequent pages.
errors[]
Status
The errors associated with a dataset.
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
Fields
input_uri
string
Source data URI. For example, gs://my_bucket/my_object .
file_format
FileFormat
The file format of the Google Cloud Storage object. This is used mainly for validation.
GetDatasetRequest
Request to get the specified dataset.
Fields
name
string
Required. Resource name. Format: projects/{project}/datasets/{dataset_id}
Can also fetch some special versions by appending "@" and a tag. Format: projects/{project}/datasets/{dataset_id}@{tag}
Tag "active": The info of the latest completed version will be included, and NOT_FOUND if the dataset does not have one.
ImportDatasetRequest
Request to import a new version of the dataset.
Fields
name
string
Required. Resource name. Format: projects/{project}/datasets/{dataset_id}
version_description
string
A description of the new data being imported.
Union field data_source . Details about the source of the data for the dataset. data_source can be only one of the following:
local_file_source
LocalFileSource
A local file source for the dataset for a one time import.
gcs_source
GcsSource
A Google Cloud Storage file source for the dataset for a one time import.
ImportDatasetResponse
Response object of ImportDataset.
Fields
name
string
Required. Resource name of the newly created dataset version. Format: projects/{project}/datasets/{dataset_id}@{version_id}
ListDatasetsRequest
Request to list datasets for the project.
Fields
parent
string
Required. The name of the project to list all the datasets for. Format: projects/{project}
page_size
int32
The maximum number of datasets to return per page.
If unspecified (or zero), all datasets will be returned.
page_token
string
The page token, received from a previous ListDatasets call. Provide this to retrieve the subsequent page.
tag
string
The tag that specifies the desired version for each dataset.
Note that when pagination is also specified, some filtering can happen after pagination, which may cause the response to contain fewer datasets than the page size, even if it's not the last page.
Tag "active": Each dataset in the response will include the info of its latest completed version, and the dataset will be skipped if it does not have one.
ListDatasetsResponse
Response object of ListDatasets.
Fields
datasets[]
Dataset
All the datasets for the project.
next_page_token
string
A token that can be sent as page_token to retrieve the next page.
If this field is omitted, there are no subsequent pages.
LocalFileSource
The details about the data source when it is a local file.
Fields
filename
string
The file name of the uploaded file.
file_format
FileFormat
The format of the file that is being uploaded.
Status
Status of the dataset.
Fields
state
State
State enum for status.
error_message
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
UpdateDatasetMetadataRequest
Request to update the metadata fields of the dataset.
Fields
dataset
Dataset
Required. Resource name of the dataset to update. Format: projects/{project}/datasets/{dataset_id}
update_mask
FieldMask
The list of fields to be updated.
The value "*" is used for full replacement (default).
Usage
Usage specifies where the data is intended to be used to inform how to process the data.
Enums
USAGE_UNSPECIFIED
The usage of this dataset is not set.
USAGE_DATA_DRIVEN_STYLING
This dataset will be used for data driven styling.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
