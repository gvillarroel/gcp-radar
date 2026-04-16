---
title: "ListOperationsResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ListOperationsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ListOperationsResponse
  title: "ListOperationsResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Reference
Send feedback
ListOperationsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response message for Operations.ListOperations .
JSON representation
{
"operations" : [
{
object ( Operation )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
operations[]
object ( Operation )
A list of operations that matches the specified filter in the request.
nextPageToken
string
The standard List next-page token.
unreachable[]
string
Unordered list. Unreachable resources. Populated when the request sets ListOperationsRequest.return_partial_success and reads across collections. For example, when attempting to list all resources across all supported locations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-13 UTC."],[],[]]
