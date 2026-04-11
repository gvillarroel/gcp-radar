---
title: "WaitOperationRequest \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/WaitOperationRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/WaitOperationRequest
  title: "WaitOperationRequest \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Reference
Send feedback
WaitOperationRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The request message for Operations.WaitOperation .
JSON representation
{
"name" : string ,
"timeout" : string
}
Fields
name
string
The name of the operation resource to wait on.
timeout
string ( Duration format)
The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
