---
title: "LongRunningRecognizeMetadata \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/LongRunningRecognizeMetadata
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/LongRunningRecognizeMetadata
  title: "LongRunningRecognizeMetadata \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Reference
Send feedback
LongRunningRecognizeMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Describes the progress of a long-running LongRunningRecognize call. It is included in the metadata field of the Operation returned by the operations.get call of the google::longrunning::Operations service.
JSON representation
{
"progressPercent" : integer ,
"startTime" : string ,
"lastUpdateTime" : string ,
"uri" : string
}
Fields
progressPercent
integer
Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available.
startTime
string ( Timestamp format)
Time when the request was received.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastUpdateTime
string ( Timestamp format)
Time of the most recent processing update.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
uri
string
Output only. The URI of the audio file being transcribed. Empty if the audio was sent as byte content.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
