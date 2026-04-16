---
title: "ImportIntentsResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ImportIntentsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3-overview
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ImportIntentsResponse
  title: "ImportIntentsResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
ImportIntentsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ConflictingResources
JSON representation
The response message for Intents.ImportIntents .
JSON representation
{
"intents" : [
string
] ,
"conflictingResources" : {
object ( ConflictingResources )
}
}
Fields
intents[]
string
The unique identifier of the imported intents. Format: projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/intents/<IntentID> .
conflictingResources
object ( ConflictingResources )
Info which resources have conflicts when [REPORT_CONFLICT][ImportIntentsResponse.REPORT_CONFLICT] mergeOption is set in ImportIntentsRequest.
ConflictingResources
Conflicting resources detected during the import process. Only filled when [REPORT_CONFLICT][ImportIntentsResponse.REPORT_CONFLICT] is set in the request and there are conflicts in the display names.
JSON representation
{
"intentDisplayNames" : [
string
] ,
"entityDisplayNames" : [
string
]
}
Fields
intentDisplayNames[]
string
Display names of conflicting intents.
entityDisplayNames[]
string
Display names of conflicting entities.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
