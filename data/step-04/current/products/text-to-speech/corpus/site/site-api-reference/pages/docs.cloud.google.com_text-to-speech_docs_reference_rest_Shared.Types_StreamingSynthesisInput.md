---
title: "StreamingSynthesisInput \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesisInput
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesisInput
  title: "StreamingSynthesisInput \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Reference
Send feedback
StreamingSynthesisInput
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Input to be synthesized.
JSON representation
{
// Union field input_source can be only one of the following:
"text" : string ,
"markup" : string ,
"multiSpeakerMarkup" : {
object ( MultiSpeakerMarkup )
}
// End of list of possible types for union field input_source .
"prompt" : string
}
Fields
Union field input_source .
input_source can be only one of the following:
text
string
The raw text to be synthesized. It is recommended that each input contains complete, terminating sentences, which results in better prosody in the output audio.
markup
string
Markup for HD voices specifically. This field may not be used with any other voices.
multiSpeakerMarkup
object ( MultiSpeakerMarkup )
Multi-speaker markup for Gemini TTS. This field may not be used with any other voices.
prompt
string
This is system instruction supported only for controllable voice models.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-29 UTC."],[],[]]
