---
title: "Method: networks.adUnits.get \_|\_ Ad Manager API (Beta) \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/get
  title: "Method: networks.adUnits.get \_|\_ Ad Manager API (Beta) \_|\_ Google for\
    \ Developers"
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
Method: networks.adUnits.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document provides a reference for the API to retrieve an AdUnit object.
The API uses an HTTP GET request to the specified endpoint with a required name path parameter.
The request body must be empty.
A successful response contains an instance of an AdUnit object.
The API requires the https://www.googleapis.com/auth/admanager OAuth scope for authorization.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
API to retrieve an AdUnit object.
HTTP request
GET https://admanager.googleapis.com/v1/{name}
Path parameters
Parameters
name
string
Required. The resource name of the AdUnit. Format: networks/{networkCode}/adUnits/{adUnitId}
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of AdUnit .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/admanager
https://www.googleapis.com/auth/admanager.readonly
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],["The API uses a `GET` request to retrieve an AdUnit object at the specified URL: `https://admanager.googleapis.com/v1/{name}`. The `name` parameter, a string, is mandatory and follows the format `networks/{networkCode}/adUnits/{adUnitId}`. The request body must be empty. A successful response returns an AdUnit object. This action needs authorization and requires the OAuth scope: `https://www.googleapis.com/auth/admanager`.\n"]]
