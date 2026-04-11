---
title: "Method: projects.datasets.list \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/list
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/list
  title: "Method: projects.datasets.list \_|\_ Maps Datasets API \_|\_ Google for\
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
Method: projects.datasets.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Lists all datasets within a specified Google Cloud project, returning details like dataset information and pagination tokens for accessing further results.
Allows filtering by page size, page token, and version tag to customize the dataset retrieval process.
Requires authorization with the cloud-platform OAuth scope and the mapsplatformdatasets.datasets.list IAM permission on the target project.
Uses a simple HTTP GET request with path and query parameters to specify the project and filtering criteria.
Returns a JSON response containing an array of datasets and a token for retrieving subsequent pages if available.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Lists all the datasets for the specified project.
HTTP request
GET https://mapsplatformdatasets.googleapis.com/v1/{parent=projects/*}/datasets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The name of the project to list all the datasets for. Format: projects/{project}
Query parameters
Parameters
pageSize
integer
The maximum number of datasets to return per page.
If unspecified (or zero), all datasets will be returned.
pageToken
string
The page token, received from a previous datasets.list call. Provide this to retrieve the subsequent page.
tag
string
The tag that specifies the desired version for each dataset.
Note that when pagination is also specified, some filtering can happen after pagination, which may cause the response to contain fewer datasets than the page size, even if it's not the last page.
Tag "active": Each dataset in the response will include the info of its latest completed version, and the dataset will be skipped if it does not have one.
Request body
The request body must be empty.
Response body
Response object of datasets.list.
If successful, the response body contains data with the following structure:
JSON representation
{
"datasets" : [
{
object ( Dataset )
}
] ,
"nextPageToken" : string
}
Fields
datasets[]
object ( Dataset )
All the datasets for the project.
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page.
If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the parent resource:
mapsplatformdatasets.datasets.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This document outlines the process of listing datasets within a specified project. It uses a `GET` request to the provided URL, including the project name as a required path parameter. Optional query parameters like `pageSize`, `pageToken`, and `tag` can filter and paginate results. The request body must be empty. The response includes an array of dataset objects and a `nextPageToken` for further pagination. The request requires the `mapsplatformdatasets.datasets.list` IAM permission and `https://www.googleapis.com/auth/cloud-platform` OAuth scope.\n"]]
