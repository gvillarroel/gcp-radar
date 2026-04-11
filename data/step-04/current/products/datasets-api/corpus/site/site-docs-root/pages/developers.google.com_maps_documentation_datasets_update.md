---
title: "Update a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/update
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/update
  title: "Update a dataset \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Update a dataset
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Update dataset metadata, such as displayName and description , using an HTTP PATCH request to the specified endpoint with the dataset ID.
To update the actual data within the dataset, a separate procedure outlined in the "Upload new data to the dataset" documentation should be followed.
By default, a PATCH request updates all provided fields ( displayName , description ), but you can selectively update fields using the updateMask query parameter.
The updateMask parameter accepts a comma-separated list of field names, allowing for granular control over which dataset attributes are modified.
Update information about a dataset by sending an HTTP PATCH request to the
patch dataset endpoint that
also includes the ID of the dataset:
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID
You can update either or both of the displayName and description properties
of the dataset.
Note: To update the data for the dataset, use the procedure described in
Upload new data to the dataset .
For example:
curl -X PATCH -d '{
"displayName": "My Updated Dataset",
"description": "This is an updated description"
}' \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46"
The request returns information about the updated dataset:
{
"name": "projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46",
"displayName": "My Updated Dataset",
"description": "This is an updated description",
"versionId": "5fb3b84e-1405-4ecd-8f81-9183631f1c07",
"usage": [
"USAGE_DATA_DRIVEN_STYLING"
],
"gcsSource": {
"inputUri": "gs://mybucket/my.csv",
"fileFormat": "FILE_FORMAT_CSV"
},
"createTime": "2023-03-24T14:47:37.308977Z",
"updateTime": "2023-03-28T15:17:17.919351Z",
"versionCreateTime": "2023-03-24T14:48:05.053114Z",
"status": {
"state": "STATE_COMPLETED"
}
}
Specify a field mask
By default, the update modifies all the supported fields specified in the body
of the request, meaning both displayName and description . However, you can
also include the
updateMask
query parameter in the request to explicitly specify the fields in the
request body to update.
Use updateMask to specify a comma-separated list of fully qualified names of
fields to update. For example, to update only the displayName field:
curl -X PATCH -d '{
"displayName": "My Updated Dataset",
"description": "This is an updated description"
}' \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN" \
"https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/f57074a0-a8b6-403e-9df1-e8a9e4f9fc46 ?updateMask=displayName "
The default value of the updateMask query parameter is * meaning
update all supported fields specified in the request body.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To update dataset information, send a `PATCH` request to the specified endpoint, including the dataset ID. Modify the `displayName` and/or `description` properties in the request body. To control which fields are updated, utilize the `updateMask` query parameter with a comma-separated list of field names. Without `updateMask`, both fields are updated if present. The request returns details of the modified dataset. Note that updating data within the dataset uses a separate process.\n"]]
