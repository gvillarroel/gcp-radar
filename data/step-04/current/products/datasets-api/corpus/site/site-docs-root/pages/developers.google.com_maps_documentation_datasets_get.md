---
title: "Get a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/get
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/get
  title: "Get a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Send feedback
Get a dataset
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
After creating and uploading data to a dataset, you can access it using HTTP GET requests to list all datasets, retrieve information about a specific dataset, or download the dataset data.
When data is successfully uploaded, it creates a new, active version of the dataset, which is the version used by your application.
You can retrieve details for all datasets or filter by the active version using specific API endpoints and parameters.
Downloading a dataset involves sending a GET request to a dedicated endpoint, specifying the dataset ID and desired output location.
After you create a dataset and upload data to it, you can use HTTP GET requests
to access the dataset. This page describes how to list all of your datasets,
how to get information about a specific dataset, and how to download the data
from a dataset.
About dataset versions
After a successful data upload, the state of the dataset is set to
STATE_COMPLETED and that dataset becomes the active version. That means the
dataset is ready to use in your app. To determine the state of the dataset,
you can either list all datasets or get a specific dataset.
You can upload new data to the dataset to create a new version of the
dataset:
If the new data uploads successfully, the new version becomes the "active"
version and is the version used by your app.
If there is an error in the upload, the previous successful dataset version
stays as the "active" version and is the version used by your app.
For more information about creating a new version of a dataset, see
Upload new data to the dataset .
List all datasets
List all datasets by sending an HTTP GET request to the
list datasets endpoint:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets
This request returns information about the latest version of all datasets,
regardless of whether the version is the active version. If you only want to
list the active version of each dataset, append the tag=active query parameter
to the request:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets ?tag=active
For example, this call returns information about the latest version of all
datasets:
curl -X GET \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H 'Authorization: Bearer $TOKEN' \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets"
This call returns a response in the form:
{
"datasets": [
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46",
"displayName": "My Test Dataset",
"versionId": "5fb34e-1405-4ecd-8f81-31f1c07",
"usage": [
"USAGE_DATA_DRIVEN_STYLING"
],
"gcsSource": {
"inputUri": "gs://mybucket/my.csv",
"fileFormat": "FILE_FORMAT_CSV"
},
"createTime": "2023-03-24T14:47:37.308977Z",
"updateTime": "2023-03-24T14:48:05.053114Z",
"versionCreateTime": "2023-03-24T14:48:05.053114Z",
"status": {
"state": "STATE_COMPLETED"
}
},
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/2c8ae479-96704-89c6435ca959",
"displayName": "My Other Test Dataset",
"versionId": "0d2e3-b9da-47cc-819f-7ac67562",
"usage": [
"USAGE_DATA_DRIVEN_STYLING"
],
"localFileSource": {
"fileFormat": "FILE_FORMAT_CSV"
},
"createTime": "2023-03-24T14:41:52.579755Z",
"updateTime": "2023-03-24T14:42:56.784122Z",
"versionCreateTime": "2023-03-24T14:42:56.784122Z",
"status": {
"state": "STATE_COMPLETED"
}
}
]
}
Get information about a dataset
To get information about a specific dataset, send an HTTP GET request to the
get dataset endpoint that also
includes the ID of the dataset:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID
This request returns information about the latest version of the dataset,
regardless of whether the version is the active version. If you want information
about the active version of the dataset, append the @active tag to the
request:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID @active
For example:
curl -X GET \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H 'Authorization: Bearer $TOKEN' \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46@active"
This request returns a response in the form:
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46",
"displayName": "My Test Dataset",
"versionId": "5fb34e-1405-4ecd-8f81-31f1c07",
"usage": [
"USAGE_DATA_DRIVEN_STYLING"
],
"gcsSource": {
"inputUri": "gs://mybucket/my.csv",
"fileFormat": "FILE_FORMAT_CSV"
},
"createTime": "2023-03-24T14:47:37.308977Z",
"updateTime": "2023-03-24T14:48:05.053114Z",
"versionCreateTime": "2023-03-24T14:48:05.053114Z",
"status": {
"state": "STATE_COMPLETED"
}
}
Download a dataset
To download the data from the latest version of a dataset, send an HTTP GET
request to the
download dataset
endpoint that also includes the ID of the dataset:
Note: The latest version might not be the active version of the dataset.
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID :download?alt=media
For example:
curl -X GET -L \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H 'Authorization: Bearer $TOKEN' \
--output LOCAL_LOCATION_TO_OUTPUT \
"https://mapsplatformdatasets.googleapis.com/download/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46:download?alt=media"
In this example, you use the cURL --output option to specify the name of the
file that holds the downloaded data. For example, the following --output flag
specifies to download the dataset to a file named myjson.json in the same
directory used to run the cURL command:
--output myjson.json
Or use the following flag to download the data to myjson.json in the /tmp
directory:
--output /tmp/myjson.json
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
