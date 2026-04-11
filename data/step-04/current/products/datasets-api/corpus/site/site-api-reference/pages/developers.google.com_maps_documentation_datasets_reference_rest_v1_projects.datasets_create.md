---
title: "Method: projects.datasets.create \_|\_ Maps Datasets API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/create
  title: "Method: projects.datasets.create \_|\_ Maps Datasets API \_|\_ Google for\
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
Method: projects.datasets.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Creates a new dataset within a specified Google Cloud project.
Requires a POST request to the designated URL with specific path parameters and request body structure.
Utilizes OAuth scope https://www.googleapis.com/auth/cloud-platform and IAM permission mapsplatformdatasets.datasets.create for authorization.
The response body provides the newly created dataset's details upon successful creation.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Creates a new dataset for the specified project.
HTTP request
POST https://mapsplatformdatasets.googleapis.com/v1/{parent=projects/*}/datasets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Parent project that will own the dataset. Format: projects/{project}
Request body
The request body contains an instance of Dataset .
Response body
If successful, the response body contains a newly created instance of Dataset .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the parent resource:
mapsplatformdatasets.datasets.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This content outlines how to create a new dataset within a specified project. A `POST` HTTP request is sent to a designated URL, including a required `parent` path parameter representing the project. The request body contains the new dataset information. Upon success, the response body returns the created dataset. This process requires authorization via the `cloud-platform` OAuth scope and the `mapsplatformdatasets.datasets.create` IAM permission on the parent project.\n"]]
