---
title: "Method: projects.datasets.patch \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/patch
  title: "Method: projects.datasets.patch \_|\_ Maps Datasets API \_|\_ Google for\
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
Method: projects.datasets.patch
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Updates the metadata for an existing dataset using a PATCH request.
The request requires specifying the dataset's resource name in the URL path.
You can optionally use the updateMask query parameter to specify which fields to update.
The request body should contain the updated Dataset object.
Proper authorization with OAuth scope https://www.googleapis.com/auth/cloud-platform and IAM permission mapsplatformdatasets.datasets.update is necessary.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Updates the metadata for the dataset.
HTTP request
PATCH https://mapsplatformdatasets.googleapis.com/v1/{dataset.name=projects/*/datasets/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
dataset.name
string
Resource name. Format: projects/{project}/datasets/{datasetId}
Query parameters
Parameters
updateMask
string ( FieldMask format)
The list of fields to be updated.
The value "*" is used for full replacement (default).
Request body
The request body contains an instance of Dataset .
Response body
If successful, the response body contains an instance of Dataset .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],[]]
