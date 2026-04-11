---
title: "Delete a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/delete
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/delete
  title: "Delete a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Delete a dataset
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Permanently delete a dataset by sending an HTTP DELETE request to the specified endpoint with the dataset's ID.
Include the X-Goog-User-Project header to specify the project and an Authorization header with a valid bearer token for authentication.
Upon successful deletion, an empty JSON response ( {} ) is returned, indicating the dataset has been removed.
Delete a dataset by sending an HTTP DELETE request to the
delete dataset endpoint that
also includes the ID of the dataset:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID
For example:
curl -X DELETE \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e9fc46"
This request returns the following response:
{}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
