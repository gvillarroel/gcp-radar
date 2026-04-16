---
title: "LongRunningRecognizeResponse \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/LongRunningRecognizeResponse
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/LongRunningRecognizeResponse
  title: "LongRunningRecognizeResponse \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\
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
LongRunningRecognizeResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The only message returned to the client by the LongRunningRecognize method. It contains the result as zero or more sequential SpeechRecognitionResult messages. It is included in the result.response field of the Operation returned by the operations.get call of the google::longrunning::Operations service.
JSON representation
{
"results" : [
{
object ( SpeechRecognitionResult )
}
] ,
"totalBilledTime" : string ,
"outputConfig" : {
object ( TranscriptOutputConfig )
} ,
"outputError" : {
object ( Status )
} ,
"speechAdaptationInfo" : {
object ( SpeechAdaptationInfo )
} ,
"requestId" : string
}
Fields
results[]
object ( SpeechRecognitionResult )
Sequential list of transcription results corresponding to sequential portions of audio.
totalBilledTime
string ( Duration format)
When available, billed audio seconds for the corresponding request.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
outputConfig
object ( TranscriptOutputConfig )
Original output config if present in the request.
outputError
object ( Status )
If the transcript output fails this field contains the relevant error.
speechAdaptationInfo
object ( SpeechAdaptationInfo )
Provides information on speech adaptation behavior in response
requestId
string ( int64 format)
The ID associated with the request. This is a unique ID specific only to the given request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
