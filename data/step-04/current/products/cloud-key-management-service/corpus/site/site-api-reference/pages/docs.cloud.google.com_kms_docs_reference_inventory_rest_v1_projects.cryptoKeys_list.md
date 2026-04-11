---
title: "Method: projects.cryptoKeys.list \_|\_ Cloud Key Management Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys/list
  title: "Method: projects.cryptoKeys.list \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
Method: projects.cryptoKeys.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
HTTP request
GET https://kmsinventory.googleapis.com/v1/{parent=projects/*}/cryptoKeys
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The Google Cloud project for which to retrieve key metadata, in the format projects/*
Authorization requires the following IAM permission on the specified resource parent :
cloudkms.cryptoKeys.list
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of keys to return. The service may return fewer than this value. If unspecified, at most 1000 keys will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
pageToken
string
Optional. Pass this into a subsequent request in order to receive the next page of results.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response message for KeyDashboardService.ListCryptoKeys .
JSON representation
{
"cryptoKeys" : [
{
object ( CryptoKey )
}
] ,
"nextPageToken" : string
}
Fields
cryptoKeys[]
object ( CryptoKey )
The list of CryptoKeys .
nextPageToken
string
The page token returned from the previous response if the next page is desired.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
