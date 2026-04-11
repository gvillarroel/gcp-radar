---
title: "Method: networks.adUnits.create \_|\_ Ad Manager API (Beta) \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/create
  title: "Method: networks.adUnits.create \_|\_ Ad Manager API (Beta) \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
Method: networks.adUnits.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
API to create an AdUnit object.
HTTP request
POST https://admanager.googleapis.com/v1/{parent}/adUnits
Path parameters
Parameters
parent
string
Required. The parent resource where this AdUnit will be created. Format: networks/{networkCode}
Request body
The request body contains an instance of AdUnit .
Response body
If successful, the response body contains a newly created instance of AdUnit .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admanager
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],[]]
