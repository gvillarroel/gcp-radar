---
title: "Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary\
  \ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.locations.keyRings.cryptoKeys/getProtectedResourcesSummary
  title: "Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary\
    \ \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
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
Method: projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey . Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.
HTTP request
GET https://kmsinventory.googleapis.com/v1/{name=projects/*/locations/*/keyRings/*/cryptoKeys/**}/protectedResourcesSummary
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the CryptoKey .
Authorization requires the following IAM permission on the specified resource name :
cloudkms.cryptoKeys.get
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.
JSON representation
{
"name" : string ,
"resourceCount" : string ,
"projectCount" : integer ,
"resourceTypes" : {
string : string ,
...
} ,
"cloudProducts" : {
string : string ,
...
} ,
"locations" : {
string : string ,
...
}
}
Fields
name
string
The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary
resourceCount
string ( int64 format)
The total number of protected resources in the same Cloud organization as the key.
projectCount
integer
The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.
resourceTypes
map (key: string, value: string ( int64 format))
The number of resources protected by the key grouped by resource type.
cloudProducts
map (key: string, value: string ( int64 format))
The number of resources protected by the key grouped by Cloud product.
locations
map (key: string, value: string ( int64 format))
The number of resources protected by the key grouped by region.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
