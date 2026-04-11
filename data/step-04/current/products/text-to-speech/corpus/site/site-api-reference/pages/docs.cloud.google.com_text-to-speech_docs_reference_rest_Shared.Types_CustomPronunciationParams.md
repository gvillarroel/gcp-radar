---
title: "CustomPronunciationParams \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/CustomPronunciationParams
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/CustomPronunciationParams
  title: "CustomPronunciationParams \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\
    \ Documentation"
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
CustomPronunciationParams
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Pronunciation customization for a phrase.
JSON representation
{
"phrase" : string ,
"phoneticEncoding" : enum ( PhoneticEncoding ) ,
"pronunciation" : string
}
Fields
phrase
string
The phrase to which the customization is applied. The phrase can be multiple words, such as proper nouns, but shouldn't span the length of the sentence.
phoneticEncoding
enum ( PhoneticEncoding )
The phonetic encoding of the phrase.
pronunciation
string
The pronunciation of the phrase. This must be in the phonetic encoding specified above.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
