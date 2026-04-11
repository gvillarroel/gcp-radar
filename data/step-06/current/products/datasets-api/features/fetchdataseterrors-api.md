---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:19:08.127Z"
product_name: "Datasets API"
product_slug: "datasets-api"
feature_name: "fetchDatasetErrors API"
feature_slug: "fetchdataseterrors-api"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors"
  - "https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1"
  - "https://developers.google.com/maps/documentation/datasets/create"
keywords:
  - "fetchdataseterrors"
  - "api"
  - "the"
  - "returns"
  - "all"
  - "errors"
  - "associated"
  - "with"
---

# fetchDatasetErrors API

Product: Datasets API
Coverage: LOW

## Step 02 Summary

The fetchDatasetErrors API returns all errors associated with a failed dataset upload.

## Extended Definition

The fetchDatasetErrors API returns all errors associated with a failed dataset upload.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors](https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors)
- [https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1](https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1)
- [https://developers.google.com/maps/documentation/datasets/create](https://developers.google.com/maps/documentation/datasets/create)

## Supporting Pages

### "Method: projects.datasets.fetchDatasetErrors \_|\_ Maps Datasets API \_\

- URL: [https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors](https://developers.google.com/maps/documentation/datasets/reference/rest/v1/projects.datasets/fetchDatasetErrors)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Google Maps Platform Documentation Maps Datasets API Reference Send feedback Method: projects.datasets.fetchDatasetErrors Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://mapsplatformdatasets.googleapis.com/v1/{dataset=projects/ /datasets/ }:fetchDatasetErrors The URL uses gRPC Transcoding syntax.
- If this field is omitted, there are no subsequent pages. errors[] object ( Status ) The errors associated with a dataset.
- Page Summary outlined flag Retrieves all errors associated with a specific dataset within Google Maps Platform Datasets.

### "Package google.maps.mapsplatformdatasets.v1 \_|\_ Maps Datasets API \_|\_\

- URL: [https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1](https://developers.google.com/maps/documentation/datasets/reference/rpc/google.maps.mapsplatformdatasets.v1)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FetchDatasetErrors rpc FetchDatasetErrors( FetchDatasetErrorsRequest ) returns ( FetchDatasetErrorsResponse ) Gets all the errors of a dataset.
- Index MapsPlatformDatasets (interface) CreateDatasetRequest (message) Dataset (message) DeleteDatasetRequest (message) DownloadDatasetRequest (message) DownloadDatasetResponse (message) FetchDatasetErrorsRequest (message) FetchDatasetErrorsResponse (message) FileFormat (enum) GcsSource (message) GetDatasetRequest (message) ImportDatasetRequest (message) ImportDatasetResponse (message) ListDatasetsRequest (message) ListDatasetsResponse (message) LocalFileSource (message) Status (message) Status.State (enum) UpdateDatasetMetadataRequest (message) Usage (enum) MapsPlatformDatasets Service definition for the Maps Platform Datasets API.
- If this field is omitted, there are no subsequent pages. errors[] Status The errors associated with a dataset.
- Page Summary outlined flag The Maps Platform Datasets API allows you to create, manage, and utilize datasets for various purposes, including data-driven styling.

### Create a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/datasets/create](https://developers.google.com/maps/documentation/datasets/create)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This API returns all data processing errors associated with a dataset: curl -X GET \ -H "X-Goog-User-Project: PROJECT NUMBER OR ID " \ -H "Authorization: Bearer $TOKEN" \ "https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46: fetchDatasetErrors " The response contains the errors array.
- To get complete error information, call the fetchDatasetErrors API.
- For example, to get the next page of errors using the token from the previous response: curl -X GET \ -H "content-type: application/json" \ -H "X-Goog-User-Project: PROJECT NUMBER OR ID " \ -H "Authorization: Bearer $TOKEN" \ "https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT NUMBER OR ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46:fetchDatasetErrors?pageToken=cigKJkIkMTU3MzM0NjQtYzlmMy00YzYxLWIxM2YtYmVkYjFjYjRkYzRj" By default, the response contains a maximum of 50 errors per page.
- That means after the API call to upload the data to the dataset returns, you must then poll the dataset to determine whether data ingestion and processing succeeded or failed.

