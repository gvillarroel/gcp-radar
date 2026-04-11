---
title: "Method: providers.accounts.reject \_|\_ Google Cloud Marketplace Partners\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/reject
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/reject
  title: "Method: providers.accounts.reject \_|\_ Google Cloud Marketplace Partners\
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
Method: providers.accounts.reject
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Rejects an approval on an Account .
HTTP request
POST https://cloudcommerceprocurement.googleapis.com/v1/{name=providers/*/accounts/*}:reject
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the account.
Authorization requires the following IAM permission on the specified resource name :
commerceprocurement.providerAccounts.reject
Request body
The request body contains data with the following structure:
JSON representation
{
"approvalName" : string ,
"reason" : string
}
Fields
approvalName
string
The name of the approval being rejected. If absent and there is only one approval possible, that approval will be rejected. If absent and there are many approvals possible, the request will fail with a 400 Bad Request. Optional.
reason
string
Free form text string explaining the rejection reason.
Max allowed length: 256 bytes. Longer strings will be truncated.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-19 UTC."],[],[]]
