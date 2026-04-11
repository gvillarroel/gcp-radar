---
title: "GetAccountInfoResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetAccountInfoResponse
  title: "GetAccountInfoResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
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
GetAccountInfoResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response message for accounts.lookup.
JSON representation
{
"kind" : string ,
"users" : [
{
object ( UserInfo )
}
]
}
Fields
kind (deprecated)
string
This item is deprecated!
users[]
object ( UserInfo )
The information of specific user account(s) matching the parameters in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
