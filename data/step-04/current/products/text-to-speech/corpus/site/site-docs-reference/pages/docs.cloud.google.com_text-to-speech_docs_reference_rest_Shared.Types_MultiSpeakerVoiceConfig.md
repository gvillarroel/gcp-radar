---
title: "MultiSpeakerVoiceConfig \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/MultiSpeakerVoiceConfig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/MultiSpeakerVoiceConfig
  title: "MultiSpeakerVoiceConfig \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
MultiSpeakerVoiceConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
MultispeakerPrebuiltVoice
JSON representation
Configuration for a multi-speaker text-to-speech setup. Enables the use of up to two distinct voices in a single synthesis request.
JSON representation
{
"speakerVoiceConfigs" : [
{
object ( MultispeakerPrebuiltVoice )
}
]
}
Fields
speakerVoiceConfigs[]
object ( MultispeakerPrebuiltVoice )
Required. A list of configurations for the voices of the speakers. Exactly two speaker voice configurations must be provided.
MultispeakerPrebuiltVoice
Configuration for a single speaker in a Gemini TTS multi-speaker setup. Enables dialogue between two speakers.
JSON representation
{
"speakerAlias" : string ,
"speakerId" : string
}
Fields
speakerAlias
string
Required. The speaker alias of the voice. This is the user-chosen speaker name that is used in the multispeaker text input, such as "Speaker1".
speakerId
string
Required. The speaker ID of the voice. See https://cloud.google.com/text-to-speech/docs/gemini-tts#voice_options for available values.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-29 UTC."],[],[]]
