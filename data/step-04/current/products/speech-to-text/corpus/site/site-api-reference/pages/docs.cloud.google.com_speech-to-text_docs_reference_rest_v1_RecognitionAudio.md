---
title: "RecognitionAudio \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionAudio
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionAudio
  title: "RecognitionAudio \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
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
RecognitionAudio
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Contains audio data in the encoding specified in the RecognitionConfig . Either content or uri must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT . See content limits .
JSON representation
{
// Union field audio_source can be only one of the following:
"content" : string ,
"uri" : string
// End of list of possible types for union field audio_source .
}
Fields
Union field audio_source . The audio source, which is either inline content or a Google Cloud Storage uri. audio_source can be only one of the following:
content
string ( bytes format)
The audio data bytes encoded as specified in RecognitionConfig . Note: as with all bytes fields, proto buffers use a pure binary representation, whereas JSON representations use base64.
A base64-encoded string.
uri
string
URI that points to a file that contains audio data bytes as specified in RecognitionConfig . The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: gs://bucket_name/object_name (other URI formats return google.rpc.Code.INVALID_ARGUMENT ). For more information, see Request URIs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
