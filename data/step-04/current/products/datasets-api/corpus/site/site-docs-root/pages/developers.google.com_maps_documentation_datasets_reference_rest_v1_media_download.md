---
title: "Method: media.download \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/media/download
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/media/download
  title: "Method: media.download \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Method: media.download
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Downloads a specified dataset using an HTTP GET request.
Requires the cloud-platform OAuth scope and the mapsplatformdatasets.datasets.export IAM permission on the requested dataset.
Uses the dataset's resource name ( projects/{project}/datasets/{datasetId} ) as a path parameter in the request URL.
The request body should be empty, and a successful response will also be empty, indicating the download has been initiated.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Downloads a dataset.
HTTP request
GET https://mapsplatformdatasets.googleapis.com/v1/{name=projects/*/datasets/*}:download
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Resource name of the dataset to fetch. Format: projects/{project}/datasets/{datasetId}
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.export
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
