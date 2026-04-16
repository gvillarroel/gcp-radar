---
title: "ListSessionEntityTypesResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ListSessionEntityTypesResponse
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ConversationTurn
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ListSessionEntityTypesResponse
  title: "ListSessionEntityTypesResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
ListSessionEntityTypesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The response message for SessionEntityTypes.ListSessionEntityTypes .
JSON representation
{
"sessionEntityTypes" : [
{
object ( SessionEntityType )
}
] ,
"nextPageToken" : string
}
Fields
sessionEntityTypes[]
object ( SessionEntityType )
The list of session entity types. There will be a maximum number of items returned based on the pageSize field in the request.
nextPageToken
string
Token to retrieve the next page of results, or empty if there are no more results in the list.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
