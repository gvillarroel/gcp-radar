---
title: "Method: media.upload \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/media/upload
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/media/upload
  title: "Method: media.upload \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Method: media.upload
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Imports a new version of data for a specified dataset using either a local file or a Google Cloud Storage source.
The request body requires specifying the data source (local file or GCS) and an optional description for the new version.
Successful import results in a response containing the resource name of the newly created dataset version.
Authorization requires the cloud-platform OAuth scope and the mapsplatformdatasets.datasets.import IAM permission.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
IAM Permissions
Imports a new version of the data for the dataset.
HTTP request
Upload URI, for media upload requests: POST https://mapsplatformdatasets.googleapis.com/upload/v1/{name=projects/*/datasets/*}:import
Metadata URI, for metadata-only requests: POST https://mapsplatformdatasets.googleapis.com/v1/{name=projects/*/datasets/*}:import
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name. Format: projects/{project}/datasets/{datasetId}
Request body
The request body contains data with the following structure:
JSON representation
{
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
versionDescription
string
A description of the new data being imported.
Union field data_source . Details about the source of the data for the dataset. data_source can be only one of the following:
localFileSource
object ( LocalFileSource )
A local file source for the dataset for a one time import.
gcsSource
object ( GcsSource )
A Google Cloud Storage file source for the dataset for a one time import.
Response body
Response object of media.upload.
If successful, the response body contains data with the following structure:
JSON representation
{
"name" : string
}
Fields
name
string
Required. Resource name of the newly created dataset version. Format: projects/{project}/datasets/{datasetId}@{versionId}
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.import
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
