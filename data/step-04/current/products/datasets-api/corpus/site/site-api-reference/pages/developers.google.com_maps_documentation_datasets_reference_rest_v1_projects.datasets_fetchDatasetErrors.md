---
title: "Method: projects.datasets.fetchDatasetErrors \_|\_ Maps Datasets API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors
  title: "Method: projects.datasets.fetchDatasetErrors \_|\_ Maps Datasets API \_\
    |\_ Google for Developers"
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
Method: projects.datasets.fetchDatasetErrors
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves all errors associated with a specific dataset within Google Maps Platform Datasets.
Allows for pagination to handle large lists of errors, specifying page size and using tokens for navigation.
Requires authentication with the https://www.googleapis.com/auth/cloud-platform OAuth scope and mapsplatformdatasets.datasets.get IAM permission.
Returns error details using a standardized Status object containing an error code, message, and optional details for debugging.
Provides details about the HTTP request structure, path and query parameters, and expected response format.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Status
JSON representation
Gets all the errors of a dataset.
HTTP request
GET https://mapsplatformdatasets.googleapis.com/v1/{dataset=projects/*/datasets/*}:fetchDatasetErrors
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
dataset
string
Required. The name of the dataset to list all the errors for. Format: projects/{project}/datasets/{datasetId}
Query parameters
Parameters
pageSize
integer
The maximum number of errors to return per page.
The maximum value is 500; values above 500 will be capped to 500.
If unspecified, at most 50 errors will be returned.
pageToken
string
The page token, received from a previous ListDatasetErrors call. Provide this to retrieve the subsequent page.
Request body
The request body must be empty.
Response body
Response object of datasets.fetchDatasetErrors.
If successful, the response body contains data with the following structure:
JSON representation
{
"nextPageToken" : string ,
"errors" : [
{
object ( Status )
}
]
}
Fields
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page.
If this field is omitted, there are no subsequent pages.
errors[]
object ( Status )
The errors associated with a dataset.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the dataset resource:
mapsplatformdatasets.datasets.get
For more information, see the IAM documentation .
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
A developer-facing error message, which should be in English.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This describes how to retrieve dataset errors via a `GET` HTTP request to a specific URL, including the dataset path parameter. You can use optional `pageSize` (max 500) and `pageToken` query parameters for pagination. The request body is empty. The response body contains a `nextPageToken` for pagination and an `errors` array. Authorization requires the `cloud-platform` OAuth scope and `mapsplatformdatasets.datasets.get` IAM permission. Each `Status` error has a code, message, and details.\n"]]
