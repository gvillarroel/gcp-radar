---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:19:08.128Z"
product_name: "Datasets API"
product_slug: "datasets-api"
feature_name: "Dataset versions"
feature_slug: "dataset-versions"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1"
  - "https://developers.google.com/maps/documentation/datasets/create"
  - "https://developers.google.com/maps/documentation/datasets/get"
keywords:
  - "dataset"
  - "versions"
  - "let"
  - "you"
  - "upload"
  - "new"
  - "to"
  - "an"
---

# Dataset versions

Product: Datasets API
Coverage: LOW

## Step 02 Summary

Dataset versions let you upload new data to an existing dataset to create a new version.

## Extended Definition

Dataset versions let you upload new data to an existing dataset to create a new version.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1](https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1)
- [https://developers.google.com/maps/documentation/datasets/create](https://developers.google.com/maps/documentation/datasets/create)
- [https://developers.google.com/maps/documentation/datasets/get](https://developers.google.com/maps/documentation/datasets/get)

## Supporting Pages

### "Package google.maps.mapsplatformdatasets.v1 \_|\_ Maps Datasets API \_|\_\

- URL: [https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1](https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Details about the source of the data for the dataset. data source can be only one of the following: local file source LocalFileSource A local file source for the dataset for a single upload. gcs source GcsSource A Google Cloud Storage file source for the dataset for a single upload.
- Page Summary outlined flag The Maps Platform Datasets API allows you to create, manage, and utilize datasets for various purposes, including data-driven styling.
- Datasets go through various states, such as importing, processing, and publishing, and you can monitor their status and errors.
- Details about the source of the data for the dataset. data source can be only one of the following: local file source LocalFileSource A local file source for the dataset for a one time import. gcs source GcsSource A Google Cloud Storage file source for the dataset for a one time import.

### Create a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/datasets/create](https://developers.google.com/maps/documentation/datasets/create)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there is an error in the upload: The state of the new dataset version is set to one of the following states: STATE IMPORT FAILED STATE PROCESSING FAILED STATE PUBLISHING FAILED STATE DELETION FAILED The previous dataset successful version stays as the "active" version and is the version used by your app.
- Upload new data to the dataset After you create the dataset and upload the initial data successfully, the state of the dataset is set to STATE COMPLETED .
- After the initial data upload, you can upload new data to the dataset to create a new version of the dataset.
- You can also upload new data to the dataset to create a new version of the dataset.

### Get a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/datasets/get](https://developers.google.com/maps/documentation/datasets/get)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- You can upload new data to the dataset to create a new version of the dataset: If the new data uploads successfully, the new version becomes the "active" version and is the version used by your app.
- About dataset versions After a successful data upload, the state of the dataset is set to STATE COMPLETED and that dataset becomes the active version.
- If you only want to list the active version of each dataset, append the tag=active query parameter to the request: https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets ?tag=active For example, this call returns information about the latest version of all datasets: curl -X GET \ -H 'X-Goog-User-Project: PROJECT NUMBER OR ID ' \ -H 'Authorization: Bearer $TOKEN' \ "https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets" This call returns a response in the form: { "datasets": [ { "name": "projects/ PROJECT NUMBER OR ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46", "displayName": "My Test Dataset", "versionId": "5fb34e-1405-4ecd-8f81-31f1c07", "usage": [ "USAGE DATA DRIVEN STYLING" ], "gcsSource": { "inputUri": "gs://mybucket/my.csv", "fileFormat": "FILE FORMAT CSV" }, "createTime": "2023-03-24T14:47:37.308977Z", "updateTime": "2023-03-24T14:48:05.053114Z", "versionCreateTime": "2023-03-24T14:48:05.053114Z", "status": { "state": "STATE COMPLETED" } }, { "name": "projects/ PROJECT NUMBER OR ID /datasets/2c8ae479-96704-89c6435ca959", "displayName": "My Other Test Dataset", "versionId": "0d2e3-b9da-47cc-819f-7ac67562", "usage": [ "USAGE DATA DRIVEN STYLING" ], "localFileSource": { "fileFormat": "FILE FORMAT CSV" }, "createTime": "2023-03-24T14:41:52.579755Z", "updateTime": "2023-03-24T14:42:56.784122Z", "versionCreateTime": "2023-03-24T14:42:56.784122Z", "status": { "state": "STATE COMPLETED" } } ] } Get information about a dataset To get information about a specific dataset, send an HTTP GET request to the get dataset endpoint that also includes the ID of the dataset: https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets/ DATASET ID This request returns information about the latest version of the dataset, regardless of whether the version is the active version.
- If you want information about the active version of the dataset, append the @active tag to the request: https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets/ DATASET ID @active For example: curl -X GET \ -H 'X-Goog-User-Project: PROJECT NUMBER OR ID ' \ -H 'Authorization: Bearer $TOKEN' \ "https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46@active" This request returns a response in the form: { "name": "projects/ PROJECT NUMBER OR ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46", "displayName": "My Test Dataset", "versionId": "5fb34e-1405-4ecd-8f81-31f1c07", "usage": [ "USAGE DATA DRIVEN STYLING" ], "gcsSource": { "inputUri": "gs://mybucket/my.csv", "fileFormat": "FILE FORMAT CSV" }, "createTime": "2023-03-24T14:47:37.308977Z", "updateTime": "2023-03-24T14:48:05.053114Z", "versionCreateTime": "2023-03-24T14:48:05.053114Z", "status": { "state": "STATE COMPLETED" } } Download a dataset To download the data from the latest version of a dataset, send an HTTP GET request to the download dataset endpoint that also includes the ID of the dataset: Note: The latest version might not be the active version of the dataset. https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets/ DATASET ID :download?alt=media For example: curl -X GET -L \ -H 'X-Goog-User-Project: PROJECT NUMBER OR ID ' \ -H 'Authorization: Bearer $TOKEN' \ --output LOCAL LOCATION TO OUTPUT \ "https://mapsplatformdatasets.googleapis.com/download/v1/projects/ PROJECT NUMBER OR ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46:download?alt=media" In this example, you use the cURL --output option to specify the name of the file that holds the downloaded data.

