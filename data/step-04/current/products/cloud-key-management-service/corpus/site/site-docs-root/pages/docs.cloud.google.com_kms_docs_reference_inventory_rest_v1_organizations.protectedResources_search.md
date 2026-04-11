---
title: "Method: organizations.protectedResources.search \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/organizations.protectedResources/search
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/organizations.protectedResources/search
  title: "Method: organizations.protectedResources.search \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
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
Method: organizations.protectedResources.search
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
Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
HTTP request
GET https://kmsinventory.googleapis.com/v1/{scope=organizations/*}/protectedResources:search
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scope
string
Required. Resource name of the organization. Example: organizations/123
Authorization requires the following IAM permission on the specified resource scope :
cloudkms.protectedResources.search
Query parameters
Parameters
cryptoKey
string
Required. The resource name of the CryptoKey .
Authorization requires the following IAM permission on the specified resource cryptoKey :
cloudkms.cryptoKeys.get
pageSize
integer
The maximum number of resources to return. The service may return fewer than this value. If unspecified, at most 500 resources will be returned. The maximum value is 500; values above 500 will be coerced to 500.
pageToken
string
A page token, received from a previous KeyTrackingService.SearchProtectedResources call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to KeyTrackingService.SearchProtectedResources must match the call that provided the page token.
resourceTypes[]
string
Optional. A list of resource types that this request searches for. If empty, it will search all the trackable resource types .
Regular expressions are also supported. For example:
compute.googleapis.com.* snapshots resources whose type starts with compute.googleapis.com .
.*Image snapshots resources whose type ends with Image .
.*Image.* snapshots resources whose type contains Image .
See RE2 for all supported regular expression syntax. If the regular expression does not match any supported resource type, an INVALID_ARGUMENT error will be returned.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response message for KeyTrackingService.SearchProtectedResources .
JSON representation
{
"protectedResources" : [
{
object ( ProtectedResource )
}
] ,
"nextPageToken" : string
}
Fields
protectedResources[]
object ( ProtectedResource )
Protected resources for this page.
nextPageToken
string
A token that can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
