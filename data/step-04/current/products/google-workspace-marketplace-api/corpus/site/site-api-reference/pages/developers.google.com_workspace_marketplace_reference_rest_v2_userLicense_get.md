---
title: "Method: userLicense.get \_|\_ Google Workspace Marketplace \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get
  title: "Method: userLicense.get \_|\_ Google Workspace Marketplace \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Reference
Send feedback
Method: userLicense.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves a user's licensing status for a specific application to determine their usage permission.
Utilizes a GET request with the application ID and user ID specified in the URL path.
Requires authorization with the https://www.googleapis.com/auth/appsmarketplace.license scope.
Returns a UserLicense object containing the user's license information upon successful request.
Gets the user's licensing status to determine if they have permission to use a given app. For more information, see Getting app installation and licensing details .
HTTP request
GET https://appsmarket.googleapis.com/appsmarket/v2/userLicense/{applicationId}/{userId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
applicationId
string
The ID of the application.
userId
string
The ID of the user.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of UserLicense .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/appsmarketplace.license
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],["This content describes how to retrieve a user's licensing status for an application. A `GET` request is made to `https://appsmarket.googleapis.com/appsmarket/v2/userLicense/{applicationId}/{userId}`, with the `applicationId` and `userId` specified as path parameters. The request body must be empty. A successful response returns a `UserLicense` object. Authorization requires the `https://www.googleapis.com/auth/appsmarketplace.license` OAuth scope.\n"]]
