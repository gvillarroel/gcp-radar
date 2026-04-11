---
title: "BatchDeleteAccountsResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/BatchDeleteAccountsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/BatchDeleteAccountsResponse
  title: "BatchDeleteAccountsResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Reference
Send feedback
BatchDeleteAccountsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
BatchDeleteErrorInfo
JSON representation
Response message to accounts.batchDelete.
JSON representation
{
"errors" : [
{
object ( BatchDeleteErrorInfo )
}
]
}
Fields
errors[]
object ( BatchDeleteErrorInfo )
Detailed error info for accounts that cannot be deleted.
BatchDeleteErrorInfo
Error info for account failed to be deleted.
JSON representation
{
"index" : integer ,
"localId" : string ,
"message" : string
}
Fields
index
integer
The index of the errored item in the original localIds field.
localId
string
The corresponding user ID.
message
string
Detailed error message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
