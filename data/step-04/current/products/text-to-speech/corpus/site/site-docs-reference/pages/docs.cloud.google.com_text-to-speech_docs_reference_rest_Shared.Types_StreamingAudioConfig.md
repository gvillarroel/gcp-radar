---
title: "StreamingAudioConfig \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingAudioConfig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingAudioConfig
  title: "StreamingAudioConfig \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
StreamingAudioConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Description of the desired output audio data.
JSON representation
{
"audioEncoding" : enum ( AudioEncoding ) ,
"sampleRateHertz" : integer ,
"speakingRate" : number
}
Fields
audioEncoding
enum ( AudioEncoding )
Required. The format of the audio byte stream. Streaming supports PCM, ALAW, MULAW and OGG_OPUS. All other encodings return an error.
sampleRateHertz
integer
Optional. The synthesis sample rate (in hertz) for this audio.
speakingRate
number
Optional. Input only. Speaking rate/speed, in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 2.0 will return an error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
