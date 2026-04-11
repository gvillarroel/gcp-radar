---
title: "Handle request errors \_|\_ Maps Datasets API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/datasets/handle-errors
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/datasets/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/datasets/handle-errors
  title: "Handle request errors \_|\_ Maps Datasets API \_|\_ Google for Developers"
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
Handle request errors
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Maps Datasets API returns errors with codes, messages, and status information to help you troubleshoot issues.
Common errors include missing or expired authentication credentials (401), missing required parameters (400), and invalid dataset IDs (404).
Error responses provide details about the cause of the error, such as the missing credential or parameter.
Refer to the Google Cloud error documentation for comprehensive information on error handling and troubleshooting.
The Maps Datasets API returns error messages as part of the
response. For example, if you omit the OAuth token from the
request or if the token has expired, the request returns:
{
"error" : {
"code" : 401 ,
"message" : "Request is missing required authentication credential.
Expected OAuth 2 access token, login cookie or other valid authentication credential.
See https://developers.google.com/identity/sign-in/web/devconsole-project." ,
"status" : "UNAUTHENTICATED" ,
"details" : [
{
"@type" : "type.googleapis.com/google.rpc.ErrorInfo" ,
"reason" : "CREDENTIALS_MISSING" ,
"domain" : "googleapis.com" ,
"metadata" : {
"method" : "google.maps.mapsplatformdatasets.v1alpha.MapsPlatformDatasetsV1Alpha.ListDatasets" ,
"service" : "mapsplatformdatasets.googleapis.com"
}
}
]
}
}
If you omit a required body parameter, such as displayName when creating a
dataset, the request returns:
{
"error" : {
"code" : 400 ,
"message" : "display_name: Display name must be provided" ,
"status" : "INVALID_ARGUMENT"
}
}
If you pass an invalid dataset ID, the request returns:
{
"error" : {
"code" : 404 ,
"message" : "Dataset not found" ,
"status" : "NOT_FOUND"
}
}
For more information on errors and error handling, see
Errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
