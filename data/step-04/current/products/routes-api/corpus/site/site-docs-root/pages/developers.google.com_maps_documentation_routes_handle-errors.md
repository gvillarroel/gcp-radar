---
title: "Handle request errors \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/handle-errors
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/handle-errors
  title: "Handle request errors \_|\_ Routes API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Routes API
Send feedback
Handle request errors
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API provides error messages within its responses to indicate issues with the request.
Errors are returned as JSON objects containing an error field with details about the issue, such as a code, message, and status.
Missing API keys result in a PERMISSION_DENIED error with a 403 code.
Omitting required parameters like origin leads to an INVALID_ARGUMENT error with a 400 code.
Further details on errors and their handling can be found in the Google Cloud API Design Guide on Errors.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Routes API returns error messages as part of the
response to a method call. For example, if you omit the API key from the
request, the method returns:
{
"error" : {
"code" : 403 ,
"message" : "The request is missing a valid API key." ,
"status" : "PERMISSION_DENIED"
}
}
If you omit a required body parameter, such as origin , the method
returns:
{
"error" : {
"code" : 400 ,
"message" : "Origin and destination must be set." ,
"status" : "INVALID_ARGUMENT"
}
}
For more information on errors and error handling, see
Errors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
