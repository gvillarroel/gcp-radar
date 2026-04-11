---
title: "FulfillIntentResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/FulfillIntentResponse
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/FulfillIntentResponse
  title: "FulfillIntentResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
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
FulfillIntentResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response of [FulfillIntent][]
JSON representation
{
"responseId" : string ,
"queryResult" : {
object ( QueryResult )
} ,
"outputAudio" : string ,
"outputAudioConfig" : {
object ( OutputAudioConfig )
}
}
Fields
responseId
string
Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
queryResult
object ( QueryResult )
The result of the conversational query.
outputAudio
string ( bytes format)
The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the queryResult.response_messages field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty.
In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
A base64-encoded string.
outputAudioConfig
object ( OutputAudioConfig )
The config used by the speech synthesizer to generate the output audio.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
