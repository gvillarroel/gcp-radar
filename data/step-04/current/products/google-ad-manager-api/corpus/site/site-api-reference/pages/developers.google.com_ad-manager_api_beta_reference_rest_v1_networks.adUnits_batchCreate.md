---
title: "Method: networks.adUnits.batchCreate \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/batchCreate
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/batchCreate
  title: "Method: networks.adUnits.batchCreate \_|\_ Ad Manager API (Beta) \_|\_ Google\
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
Method: networks.adUnits.batchCreate
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
CreateAdUnitRequest
JSON representation
Try it!
API to batch create AdUnit objects.
HTTP request
POST https://admanager.googleapis.com/v1/{parent}/adUnits:batchCreate
Path parameters
Parameters
parent
string
Required. The parent resource where AdUnits will be created. Format: networks/{networkCode} The parent field in the CreateAdUnitRequest must match this field.
Request body
The request body contains data with the following structure:
JSON representation
{
"requests" : [
{
object ( CreateAdUnitRequest )
}
]
}
Fields
requests[]
object ( CreateAdUnitRequest )
Required. The AdUnit objects to create. A maximum of 100 objects can be created in a batch.
Response body
Response object for adUnits.batchCreate method.
If successful, the response body contains data with the following structure:
JSON representation
{
"adUnits" : [
{
object ( AdUnit )
}
]
}
Fields
adUnits[]
object ( AdUnit )
The AdUnit objects created.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admanager
For more information, see the OAuth 2.0 Overview .
CreateAdUnitRequest
Request object for adUnits.create method.
JSON representation
{
"parent" : string ,
"adUnit" : {
object ( AdUnit )
}
}
Fields
parent
string
Required. The parent resource where this AdUnit will be created. Format: networks/{networkCode}
adUnit
object ( AdUnit )
Required. The AdUnit to create.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],[]]
