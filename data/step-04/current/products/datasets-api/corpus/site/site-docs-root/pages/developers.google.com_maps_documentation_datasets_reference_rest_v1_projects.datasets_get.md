---
title: "Method: projects.datasets.get \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/get
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/get
  title: "Method: projects.datasets.get \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Method: projects.datasets.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves a specific dataset's information using its resource name, including optional version tags.
Requires an empty request body and returns a Dataset object upon success.
Needs cloud-platform OAuth scope and mapsplatformdatasets.datasets.get IAM permission for access.
Utilizes gRPC Transcoding syntax in the HTTP request URL for resource identification.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Gets the dataset.
HTTP request
GET https://mapsplatformdatasets.googleapis.com/v1/{name=projects/*/datasets/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name. Format: projects/{project}/datasets/{datasetId}
Can also fetch some special versions by appending "@" and a tag. Format: projects/{project}/datasets/{datasetId}@{tag}
Tag "active": The info of the latest completed version will be included, and NOT_FOUND if the dataset does not have one.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Dataset .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
IAM Permissions
Requires the following IAM permission on the name resource:
mapsplatformdatasets.datasets.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["This outlines how to retrieve a dataset using a `GET` HTTP request to a specific URL, defined by a dataset `name` in the format `projects/{project}/datasets/{datasetId}`. The request body must be empty. A successful response returns a `Dataset` instance. Authorization requires the OAuth scope `https://www.googleapis.com/auth/cloud-platform` and the IAM permission `mapsplatformdatasets.datasets.get` on the dataset resource. You can fetch special versions by adding a tag.\n"]]
