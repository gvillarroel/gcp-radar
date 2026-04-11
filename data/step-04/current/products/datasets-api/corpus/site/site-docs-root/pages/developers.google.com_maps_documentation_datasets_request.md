---
title: "Required request parameters \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/request
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/request
  title: "Required request parameters \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Required request parameters
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
All Maps Datasets API requests require a Google Cloud project number or ID for billing and usage quota, specified in the X-Goog-User-Project header or using a service account.
An OAuth token is necessary for authentication and should be included in the Authorization header of each request.
The request URL must contain the Google Cloud project number or ID and the dataset ID to specify the location of the dataset.
Additional parameters may be required for certain requests, as detailed in the specific request documentation.
You can obtain your Google Cloud project number or ID from the project's Overview page in the Cloud Console and generate an OAuth token using the gcloud command.
To make any request to Maps Datasets API, you must include:
The number or ID of your Google Cloud project in the
X-Goog-User-Project header of the request. This value determines the
project used for billing and usage quota calculations.
Note: If you are using a service account for authentication, you can omit
the X-Goog-User-Project header. For more information about
service accounts, see
Authentication at Google .
An OAuth token in the Authorization header of the request. For more
information about using OAuth with Maps Datasets API, see
Use OAuth .
A Google Cloud project number or ID in the request URL. This value
specifies the project containing the dataset. While this project is usually
the same as the project specified in the X-Goog-User-Project header, it
is not required to be the same.
The dataset ID in the request URL. Whenever you perform an action on a
specific dataset, you pass the ID of the dataset as part of the request URL.
Note: Some requests require additional parameters that are described in the
documentation on those requests.
For example, to delete a dataset:
curl -X DELETE \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID
Get the project number
To get the PROJECT_NUMBER_OR_ID of your Google Cloud project:
Go to the project's
Overview page
in the Cloud console.
If prompted, select your project.
The Project number and Project ID appear in the Project info
area of the overview screen.
Get an OAuth token
Note: The procedure below to generate an OAuth token is not intended for use in
a production environment. Use this procedure for a development or testing
environment only.
For authentication, your API request must contain an OAuth token in the
Authorization header. For more, see Use OAuth .
For example, use the following gcloud command to generate the token:
gcloud auth application-default print-access-token
You can include the gcloud command directly in the Authorization header in a
cURL command to generate a new token on each request, as shown in the example
above.
Alternatively, you can set an environment variable containing the token and then
pass the environment variable as part of the request:
export TOKEN=$(gcloud auth application-default print-access-token)
curl -X DELETE \
-H 'X-Goog-User-Project: PROJECT_NUMBER_OR_ID ' \
-H "Authorization: Bearer $TOKEN" \
https://mapsplatformdatasets.googleapis.com/v1/projects/ PROJECT_NUMBER_OR_ID /datasets/ DATASET_ID
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To interact with the Maps Datasets API, requests must include: the Google Cloud project number or ID in the `X-Goog-User-Project` header for billing and quota (unless using a service account); an OAuth token in the `Authorization` header; the project number or ID in the URL; and the dataset ID in the URL. The project number and ID can be found on the project's overview page. An OAuth token can be generated using the `gcloud auth application-default print-access-token` command.\n"]]
