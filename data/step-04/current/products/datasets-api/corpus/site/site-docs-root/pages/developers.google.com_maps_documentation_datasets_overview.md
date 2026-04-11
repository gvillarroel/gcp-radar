---
title: "Maps Datasets API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/overview
  title: "Maps Datasets API overview \_|\_ Google for Developers"
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
Maps Datasets API overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Maps Datasets API allows you to create and manage datasets for use with data-driven styling in Google Maps Platform applications, enabling custom visualizations of geospatial data.
Datasets can be populated with data from CSV, GeoJSON, or KML files, supporting point, polyline, and polygon geometries for data features.
You can use the API to create, upload data to, list, retrieve information about, update, download data from, and delete datasets.
There is no charge for using the Maps Datasets API.
To get started, you'll need to set up your Google Cloud project and follow the provided instructions for dataset creation and management.
Datasets are containers for data that you want to use in your
Google Maps Platform apps as part of data-driven styling .
Maps Datasets API lets you create and manage datasets using a REST API.
Note: There is no charge for using the Maps Datasets API.
For example, with data-driven styling for datasets, you upload your own
geospatial data to a dataset, apply custom styling to the data features, and
display those data features on maps. You can create data visualizations based on
point, polyline, and polygon geometries, and make data features respond to click
events.
Creating a dataset is a two step process:
Make a request to create the dataset.
Make a request to upload data to the dataset from your desktop or Google
Cloud Storage. Your upload data must be represented by a CSV, GeoJSON, or
KML file.
For more on using datasets as part of data-driven styling, see:
Maps JavaScript API .
Maps SDK for Android
Maps SDK for iOS
How the Maps Datasets API works
The Maps Datasets API has the following methods:
Create dataset : Use the
create endpoint
to create a dataset.
Upload data : Use the upload endpoint
to upload data to your dataset.
List datasets : Use the list
endpoint to fetch a list of all datasets.
Get dataset : Use the get
endpoint to retrieve information about a specific dataset.
Get dataset errors : Use the
fetchDatasetErrors
endpoint to retrieve error information about a dataset.
Update dataset : Use the patch
endpoint to update information about a specific dataset.
Download dataset : Use the download
endpoint to download the data from a dataset.
Delete dataset : Use the delete
endpoint to delete a dataset.
How to use the Maps Datasets API
1
Get set up
Start with Set up your
Google Cloud project and complete the instructions that follow.
2
Create a dataset and upload your data
See Create a dataset .
3
Get dataset information and status
See Get a dataset .
What's next
Set up your Google Cloud project
Use OAuth
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Maps Datasets API facilitates the creation and management of datasets for data-driven styling in Google Maps Platform apps. Users can create a dataset via a REST API, then upload geospatial data (CSV, GeoJSON, or KML) from their desktop or Google Cloud Storage. Datasets can be listed, retrieved, updated, downloaded, or deleted using specific API endpoints. The process involves project setup, dataset creation and data upload, and then status retrieval. Using the Maps Datasets API has no charge.\n"]]
