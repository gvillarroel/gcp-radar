---
title: "Method: providers.accounts.list \_|\_ Google Cloud Marketplace Partners \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/list
  title: "Method: providers.accounts.list \_|\_ Google Cloud Marketplace Partners\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
APIs and Reference
Send feedback
Method: providers.accounts.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists Account s that the provider has access to.
HTTP request
GET https://cloudcommerceprocurement.googleapis.com/v1/{parent=providers/*}/accounts
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent resource name.
Authorization requires the following IAM permission on the specified resource parent :
commerceprocurement.providerAccounts.list
Query parameters
Parameters
pageSize
integer
The maximum number of entries that are requested. The default page size is 25 and the maximum page size is 200.
pageToken
string
The token for fetching the next page.
Request body
The request body must be empty.
Response body
Response message for [PartnerProcurementService.ListAccounts[].
If successful, the response body contains data with the following structure:
JSON representation
{
"accounts" : [
{
object ( Account )
}
] ,
"nextPageToken" : string
}
Fields
accounts[]
object ( Account )
The list of accounts in this response.
nextPageToken
string
The token for fetching the next page.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
