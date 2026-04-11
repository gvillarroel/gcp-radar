---
title: "MultiSpeakerMarkup \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/MultiSpeakerMarkup
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/MultiSpeakerMarkup
  title: "MultiSpeakerMarkup \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
MultiSpeakerMarkup
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Turn
JSON representation
A collection of turns for multi-speaker synthesis.
JSON representation
{
"turns" : [
{
object ( Turn )
}
]
}
Fields
turns[]
object ( Turn )
Required. Speaker turns.
Turn
A multi-speaker turn.
JSON representation
{
"speaker" : string ,
"text" : string
}
Fields
speaker
string
Required. The speaker of the turn, for example, 'O' or 'Q'. Please refer to documentation for available speakers.
text
string
Required. The text to speak.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-29 UTC."],[],[]]
