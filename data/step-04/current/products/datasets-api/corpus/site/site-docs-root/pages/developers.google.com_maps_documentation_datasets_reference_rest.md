---
title: "Maps Platform Datasets API \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/reference/rest
  title: "Maps Platform Datasets API \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Maps Platform Datasets API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The mapsplatformdatasets.googleapis.com API provides programmatic access to manage and interact with datasets, using a RESTful interface with a base endpoint of https://mapsplatformdatasets.googleapis.com .
The API allows for downloading and uploading dataset media through the v1.media resource, enabling data transfer and versioning.
Developers can create, delete, retrieve, update, and list datasets using the v1.projects.datasets resource, offering comprehensive dataset management capabilities.
It's recommended to use Google-provided client libraries for easier integration, but direct API calls are also supported using the documented service endpoint and resource paths.
Dataset error information can be retrieved using the fetchDatasetErrors method, aiding in troubleshooting and data validation.
mapsplatformdatasets.googleapis.com API.
REST Resource: v1.media
REST Resource: v1.projects.datasets
Service: mapsplatformdatasets.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://mapsplatformdatasets.googleapis.com
REST Resource: v1.media
Methods
download
GET /v1/{name=projects/*/datasets/*}:download
Downloads a dataset.
upload
POST /v1/{name=projects/*/datasets/*}:import
POST /upload/v1/{name=projects/*/datasets/*}:import
Imports a new version of the data for the dataset.
REST Resource: v1.projects.datasets
Methods
create
POST /v1/{parent=projects/*}/datasets
Creates a new dataset for the specified project.
delete
DELETE /v1/{name=projects/*/datasets/*}
Deletes the specified dataset.
fetchDatasetErrors
GET /v1/{dataset=projects/*/datasets/*}:fetchDatasetErrors
Gets all the errors of a dataset.
get
GET /v1/{name=projects/*/datasets/*}
Gets the dataset.
list
GET /v1/{parent=projects/*}/datasets
Lists all the datasets for the specified project.
patch
PATCH /v1/{dataset.name=projects/*/datasets/*}
Updates the metadata for the dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-27 UTC."],[],["The `mapsplatformdatasets.googleapis.com` API provides two main resources: `v1.media` and `v1.projects.datasets`. `v1.media` allows users to `download` datasets using a GET request and `upload` new data versions via POST requests. `v1.projects.datasets` manages dataset lifecycle, enabling users to `create`, `delete`, `get`, `list`, and `patch` datasets. Furthermore, it provides a way to `fetchDatasetErrors` for a specific dataset. The base URL for the service is `https://mapsplatformdatasets.googleapis.com`.\n"]]
