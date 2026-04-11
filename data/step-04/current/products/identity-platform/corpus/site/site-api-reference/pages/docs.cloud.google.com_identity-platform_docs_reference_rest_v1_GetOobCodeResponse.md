---
title: "GetOobCodeResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetOobCodeResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/GetOobCodeResponse
  title: "GetOobCodeResponse \_|\_ Identity Platform \_|\_ Google Cloud Documentation"
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
GetOobCodeResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response message for accounts.sendOobCode.
JSON representation
{
"kind" : string ,
"oobCode" : string ,
"email" : string ,
"oobLink" : string
}
Fields
kind (deprecated)
string
This item is deprecated!
oobCode
string
If returnOobLink is true in the request, the OOB code to send.
email
string
If returnOobLink is false in the request, the email address the verification was sent to.
oobLink
string
If returnOobLink is true in the request, the OOB link to be sent to the user. This returns the constructed link including Firebase Dynamic Link related parameters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
