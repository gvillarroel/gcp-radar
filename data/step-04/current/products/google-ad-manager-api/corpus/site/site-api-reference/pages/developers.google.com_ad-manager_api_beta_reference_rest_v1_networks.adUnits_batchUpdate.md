---
title: "Method: networks.adUnits.batchUpdate \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/batchUpdate
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks.adUnits/batchUpdate
  title: "Method: networks.adUnits.batchUpdate \_|\_ Ad Manager API (Beta) \_|\_ Google\
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
Method: networks.adUnits.batchUpdate
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
UpdateAdUnitRequest
JSON representation
Try it!
API to batch update AdUnit objects.
HTTP request
POST https://admanager.googleapis.com/v1/{parent}/adUnits:batchUpdate
Path parameters
Parameters
parent
string
Required. The parent resource where AdUnits will be updated. Format: networks/{networkCode} The parent field in the UpdateAdUnitRequest must match this field.
Request body
The request body contains data with the following structure:
JSON representation
{
"requests" : [
{
object ( UpdateAdUnitRequest )
}
]
}
Fields
requests[]
object ( UpdateAdUnitRequest )
Required. The AdUnit objects to update. A maximum of 100 objects can be updated in a batch.
Response body
Response object for adUnits.batchUpdate method.
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
The AdUnit objects updated.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/admanager
For more information, see the OAuth 2.0 Overview .
UpdateAdUnitRequest
Request object for adUnits.patch method.
JSON representation
{
"adUnit" : {
object ( AdUnit )
} ,
"updateMask" : string
}
Fields
adUnit
object ( AdUnit )
Required. The AdUnit to update.
The AdUnit 's name is used to identify the AdUnit to update. Format: networks/{networkCode}/adUnits/{adUnitId}
updateMask
string ( FieldMask format)
Optional. The list of fields to update.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
