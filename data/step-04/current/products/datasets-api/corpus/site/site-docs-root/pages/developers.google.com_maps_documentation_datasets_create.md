---
title: "Create a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/create
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/create
  title: "Create a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Create a dataset
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Datasets are created with a POST request and require a unique displayName and usage set to USAGE_DATA_DRIVEN_STYLING .
Data can be uploaded to a dataset from Google Cloud Storage or a local file using a POST request to a specific endpoint with the dataset ID.
The data upload and processing is asynchronous, requiring monitoring the dataset's state using a GET request until it reaches STATE_COMPLETED .
Data processing errors can be retrieved in detail using the fetchDatasetErrors API, which provides error codes and messages.
New data uploads create a new version of the dataset, making it the active version upon successful completion, while previous versions remain accessible if uploads fail.
Creating a dataset is a two-step process:
Make a request to create the dataset.
Make a request to upload data to the dataset.
After the initial data upload, you can upload new data to the dataset to create
a new version of the dataset.
Create the dataset
Create a dataset by sending a POST request to the
datasets endpoint:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets
Pass a JSON body
to the request defining the dataset. You must:
Specify the displayName of the dataset. The value of displayName must
be unique for all datasets.
Set usage to USAGE_DATA_DRIVEN_STYLING .
Note: USAGE_DATA_DRIVEN_STYLING is the only value supported for
usage .
For example:
curl -X POST -d '{
"displayName": "My Test Dataset",
"usage": "USAGE_DATA_DRIVEN_STYLING"
}' \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H 'Content-Type: application/json' \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets"
The response contains the ID of the dataset, in the form
projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID
along with additional information. Use the dataset ID when making requests to
update or modify the dataset.
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/ f57074a0-a8b6-403e-9df1-e9fc46 ",
"displayName": "My Test Dataset",
"usage": [
"USAGE_DATA_DRIVEN_STYLING"
],
"createTime": "2022-08-15T17:50:00.189682Z",
"updateTime": "2022-08-15T17:50:00.189682Z"
}
Upload data to the dataset
After you create the dataset, upload the data from
Google Cloud Storage
or from a local file to the dataset.
The upload operation is asynchronous. After you upload the data, the data is
ingested and processed. That means you must make an HTTP GET request to monitor
the state of the dataset to determine when the dataset is ready to use or if
there were any errors. For more information, see Get data processing
state .
Upload data from Cloud Storage
You upload from Cloud Storage to your dataset by sending a POST request to the
datasets endpoint that also
includes the ID of the dataset:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID :import
In the JSON request body:
Use inputUri to specify the file path to the resource containing the data
in Cloud Storage. This path is in the form
gs:// GCS_BUCKET / FILE .
The user making the request requires the Storage Object
Viewer
role, or any other role that includes the storage.objects.get permission. For
more information about managing access to Cloud Storage, see
Overview of access control .
Use fileFormat to specify the file format of the data as either:
FILE_FORMAT_GEOJSON (GeoJson file), FILE_FORMAT_KML (KML file), or
FILE_FORMAT_CSV (CSV file).
For example:
curl -X POST -d '{
"gcs_source":{
"inputUri": "gs://my_bucket/my_csv_file",
"fileFormat": "FILE_FORMAT_CSV"
}
}' \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "content-type: application/json" \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46:import"
The response is in the form:
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID @ VERSION_NUMBER "
}
Upload data from a file
To upload data from a file, send an HTTP POST request to the
datasets endpoint that also
includes the ID of the dataset::
https://mapsplatformdatasets.googleapis.com/upload/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID :import
Note: The request URL to upload data from a file is different from the URL
to upload data from Google Cloud Storage.
The request contains:
The Goog-Upload-Protocol header is set to multipart .
The metadata property specifying the path to a file that specifies the
type of data to upload, as either: FILE_FORMAT_GEOJSON (GeoJSON file),
FILE_FORMAT_KML (KML file), or FILE_FORMAT_CSV (CSV file).
The contents of this file have the following format:
{"local_file_source": {"file_format": "FILE_FORMAT_GEOJSON"}}
The rawdata property specifying the path to the GeoJSON, KML, or CSV file
containing the data to upload.
The following request uses the curl -F option to specify the path to the two
files:
curl -X POST \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "Authorization: Bearer $TOKEN" \
-H "X-Goog-Upload-Protocol: multipart" \
-F "metadata=@csv_metadata_file" \
-F "rawdata=@csv_data_file" \
"https://mapsplatformdatasets.googleapis.com/upload/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46:import"
The response is in the form:
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID @ VERSION_NUMBER "
}
Get data processing state
The upload operation is asynchronous. That means after the API call to upload
the data to the dataset returns, you must then poll the dataset to determine
whether data ingestion and processing succeeded or failed.
To determine the state of the
dataset, use Get a dataset . For example, while the data is being
processed, the state is set to STATE_PROCESSING . When the dataset is ready
to use in your app, the state is set to STATE_COMPLETED .
For example, make a GET call on the dataset:
curl -X GET \
-H "X-Goog-User-Project: PROJECT_NUMBER_OR_ID " \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46"
For a successful upload, the state of the dataset is STATE_COMPLETED :
{
"name" : "projects/119757857/datasets/f57074a0-a8b6-403e-9df1-e9fc46" ,
"displayName" : "My Test Dataset" ,
"description" : " " ,
"versionId" : "837c5a9e-c885-4a5f-a462-7e35673e5218" ,
"usage" : [
"USAGE_DATA_DRIVEN_STYLING"
],
"localFileSource" : {
"filename" : "Parks_Properties_20240529.csv" ,
"fileFormat" : "FILE_FORMAT_CSV"
},
"createTime" : "2024-05-30T16:41:11.130816Z" ,
"updateTime" : "2024-05-30T16:41:14.416130Z" ,
"versionCreateTime" : "2024-05-30T16:41:14.416130Z" ,
"status" : {
"state" : "STATE_COMPLETED" ,
},
"sizeBytes" : "6916924" ,
"downloadable" : true
}
When data processing fails, state is set to a value other than
STATE_COMPLETED , such as STATE_PUBLISHING_FAILED or any status ending in the
string _FAILED .
For example, you upload data to a dataset and then make a GET
request to get the dataset details. Along with the state property, the
response also includes a single errorMessage property containing a description
of the error.
{
"name" : "projects/119757857/datasets/f57074a0-a8b6-403e-9df1-e9fc46" ,
"displayName" : "My Test Dataset" ,
"description" : " " ,
"versionId" : "837c5a9e-c885-4a5f-a462-7e35673e5218" ,
"usage" : [
"USAGE_DATA_DRIVEN_STYLING"
],
"localFileSource" : {
"filename" : "Parks_Properties_20240529.csv" ,
"fileFormat" : "FILE_FORMAT_CSV"
},
"createTime" : "2024-05-30T16:41:11.130816Z" ,
"updateTime" : "2024-05-30T16:41:14.416130Z" ,
"versionCreateTime" : "2024-05-30T16:41:14.416130Z" ,
"status" : {
"state" : "STATE_PUBLISHING_FAILED" ,
"errorMessage" : "INVALID_ARGUMENT: Skipping row because address could not be geocoded: 5521 18 AVENUE (from line 79)"
},
"sizeBytes" : "6916924" ,
"downloadable" : true
}
Get data processing errors
When data ingestion and processing fails, the errorMessage property contains a
single message describing the error. However, a single error message doesn't
necessarily provide sufficient information to identify and fix the problems.
To get complete error information, call the
fetchDatasetErrors
API. This API returns all data processing errors associated with a dataset:
curl -X GET \
-H "X-Goog-User-Project: PROJECT_NUMBER_OR_ID " \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46: fetchDatasetErrors "
The response contains the errors array. This array contains up to 50 errors of
type Status
per call, and supports up to 500 errors in total:
{
"nextPageToken" : "cigKJkIkMTU3MzM0NjQtYzlmMy00YzYxLWIxM2YtYmVkYjFjYjRkYzRj" ,
"errors" : [
{
"code" : 3 ,
"message" : "INVALID_ARGUMENT: No address was derived from fields 2. (from line 631)"
},
{
"code" : 3 ,
"message" : "INVALID_ARGUMENT: No address was derived from fields 2. (from line 457)"
},
{
"code" : 3 ,
"message" : "INVALID_ARGUMENT: No address was derived from fields 2. (from line 31)"
},
...
]
}
If there are more than 50 errors, meaning more than one page of
errors, then the response contains a page token in the nextPageToken field.
Pass that value in the pageToken query parameter of a subsequent call to get
the next page of errors. When nextPageToken is empty, there are no more pages.
For example, to get the next page of errors using the token from the previous
response:
curl -X GET \
-H "content-type: application/json" \
-H "X-Goog-User-Project: PROJECT_NUMBER_OR_ID " \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46:fetchDatasetErrors?pageToken=cigKJkIkMTU3MzM0NjQtYzlmMy00YzYxLWIxM2YtYmVkYjFjYjRkYzRj"
By default, the response contains a maximum of 50 errors per page. Use
the pageSize query parameter to control the page size.
Upload new data to the dataset
After you create the dataset and upload the initial data successfully, the state
of the dataset is set to STATE_COMPLETED . That means the dataset is ready to
use in your app. To determine the state of the dataset, see Get a
dataset .
You can also upload new data to the dataset to create a new version of the
dataset. To upload new data, use the same process as you did to Upload data
from Cloud Storage or Upload data from a file ,
and specify the new data to upload.
If the new data uploads successfully:
The state of the new version of the dataset is set to STATE_COMPLETED .
The new version becomes the "active" version and is the version used by your
app.
If there is an error in the upload:
The state of the new dataset version is set to one of the following states:
STATE_IMPORT_FAILED
STATE_PROCESSING_FAILED
STATE_PUBLISHING_FAILED
STATE_DELETION_FAILED
The previous dataset successful version stays as the "active" version and is
the version used by your app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To create a dataset, send a `POST` request to the datasets endpoint, specifying a unique `displayName` and `USAGE_DATA_DRIVEN_STYLING`. Next, upload data via another `POST` request to the import endpoint, choosing either Cloud Storage or a local file. The request must specify the file path and format. Monitor the dataset's processing state using a `GET` request; the state will be `STATE_COMPLETED` on success. If there are errors, the `fetchDatasetErrors` endpoint can be used to retrieve them. You can upload new data to create new versions.\n"]]
