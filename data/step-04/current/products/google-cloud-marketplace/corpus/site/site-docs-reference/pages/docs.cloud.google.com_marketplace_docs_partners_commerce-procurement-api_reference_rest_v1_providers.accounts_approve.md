---
title: "Method: providers.accounts.approve \_|\_ Google Cloud Marketplace Partners\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/approve
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts/approve
  title: "Method: providers.accounts.approve \_|\_ Google Cloud Marketplace Partners\
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
Method: providers.accounts.approve
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Grants an approval on an Account .
HTTP request
POST https://cloudcommerceprocurement.googleapis.com/v1/{name=providers/*/accounts/*}:approve
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name of the account, with the format providers/{providerId}/accounts/{accountId} .
Authorization requires the following IAM permission on the specified resource name :
commerceprocurement.providerAccounts.approve
Request body
The request body contains data with the following structure:
JSON representation
{
"properties" : {
string : string ,
...
} ,
"approvalName" : string ,
"reason" : string
}
Fields
properties
map (key: string, value: string)
Set of properties that should be associated with the account. Optional.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
approvalName
string
The name of the approval being approved. If absent and there is only one approval possible, that approval will be granted. If absent and there are many approvals possible, the request will fail with a 400 Bad Request. Optional.
reason
string
Free form text string explaining the approval reason. Optional.
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
