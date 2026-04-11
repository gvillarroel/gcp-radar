---
title: "Decode base64-encoded audio content \_|\_ Cloud Text-to-Speech \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/base64-decoding
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/base64-decoding
  title: "Decode base64-encoded audio content \_|\_ Cloud Text-to-Speech \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Send feedback
Decode base64-encoded audio content
Stay organized with collections
Save and categorize content based on your preferences.
Audio data is binary data. You can read the binary data directly from a gRPC
response; however, JSON is used when responding to a REST request. Because JSON
is a text format that does not directly support binary data,
Cloud Text-to-Speech returns a response string encoded in
Base64 . You must convert the base64-encoded
text data from the response to binary before you can play it on a device.
JSON responses from the Cloud Text-to-Speech include base64-encoded audio
content in the audioContent field. For example:
{
"audioContent": " //NExAARqoIIAAhEuWAAAGNmBGMY4EBcxvABAXBPmPIAF//yAuh9Tn5CEap3/o... "
}
To decode base64 into an audio file:
Linux
Copy only the base-64 encoded content into a text file.
Decode the source text file using the base64 command line tool
by using the -d flag:
$ base64 SOURCE_BASE64_TEXT_FILE -d > DESTINATION_AUDIO_FILE
Mac OSX
Copy only the base-64 encoded content into a text file.
Decode the source text file using the base64 command line tool:
$ base64 --decode -i SOURCE_BASE64_TEXT_FILE > DESTINATION_AUDIO_FILE
Windows
Copy only the base-64 encoded content into a text file.
Decode the source text file using the
certutil command.
certutil -decode SOURCE_BASE64_TEXT_FILE DESTINATION_AUDIO_FILE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
