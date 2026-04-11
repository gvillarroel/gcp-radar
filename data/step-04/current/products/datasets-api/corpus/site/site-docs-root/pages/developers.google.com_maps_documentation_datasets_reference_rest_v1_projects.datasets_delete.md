---
title: "Method: projects.datasets.delete \_|\_ Maps Datasets API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/delete
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/delete
  title: "Method: projects.datasets.delete \_|\_ Maps Datasets API \_|\_ Google for\
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
Method: projects.datasets.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This operation deletes a specified dataset within a Google Cloud project.
It requires a DELETE request to a specific URL, including the project and dataset IDs in the path.
Users need appropriate authorization with the cloud-platform scope and mapsplatformdatasets.datasets.delete permission.
The request body should be empty, and a successful deletion results in an empty response body.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Deletes the specified dataset.
HTTP request
DELETE https://mapsplatformdatasets.googleapis.com/v1/{name=projects/*/datasets/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the dataset to delete. Format: projects/{project}/datasets/{datasetId}
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.delete
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
