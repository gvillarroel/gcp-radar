---
title: "Method: customerLicense.get \_|\_ Google Workspace Marketplace \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense/get
  title: "Method: customerLicense.get \_|\_ Google Workspace Marketplace \_|\_ Google\
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
Method: customerLicense.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves the license status for a specific customer to check if they have access to a particular application.
The request is made using an HTTP GET method to a designated URL with parameters for application ID and customer ID.
The response provides details regarding the customer's license through the CustomerLicense object if the request is successful.
Authorization is needed using the https://www.googleapis.com/auth/appsmarketplace.license scope.
Gets the customer's licensing status to determine if they have access to a given app. For more information, see Getting app installation and licensing details .
HTTP request
GET https://appsmarket.googleapis.com/appsmarket/v2/customerLicense/{applicationId}/{customerId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
applicationId
string
The ID of the application.
customerId
string
The ID of the customer.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of CustomerLicense .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/appsmarketplace.license
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],["This describes how to retrieve a customer's license status for a specific application. A `GET` request is made to `https://appsmarket.googleapis.com/appsmarket/v2/customerLicense/{applicationId}/{customerId}`, with the `applicationId` and `customerId` provided as path parameters. The request body is empty. A successful response returns a `CustomerLicense` object. Authorization requires the `https://www.googleapis.com/auth/appsmarketplace.license` OAuth scope.\n"]]
