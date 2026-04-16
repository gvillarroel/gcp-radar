---
title: "Method: text.synthesize \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1beta1/text/synthesize
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1beta1/text/synthesize
  title: "Method: text.synthesize \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
Method: text.synthesize
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Request body
JSON representation
Response body
JSON representation
Authorization scopes
TimepointType
AdvancedVoiceOptions
JSON representation
Timepoint
JSON representation
Try it!
Synthesizes speech synchronously: receive results after all text input has been processed.
HTTP request
POST https://texttospeech.googleapis.com/v1beta1/text:synthesize
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"input" : {
object ( SynthesisInput )
} ,
"voice" : {
object ( VoiceSelectionParams )
} ,
"audioConfig" : {
object ( AudioConfig )
} ,
"enableTimePointing" : [
enum ( TimepointType )
] ,
"advancedVoiceOptions" : {
object ( AdvancedVoiceOptions )
}
}
Fields
input
object ( SynthesisInput )
Required. The Synthesizer requires either plain text or SSML as input.
voice
object ( VoiceSelectionParams )
Required. The desired voice of the synthesized audio.
audioConfig
object ( AudioConfig )
Required. The configuration of the synthesized audio.
enableTimePointing[]
enum ( TimepointType )
Whether and what timepoints are returned in the response.
advancedVoiceOptions
object ( AdvancedVoiceOptions )
Advanced voice options.
Response body
The message returned to the client by the text.synthesize method.
If successful, the response body contains data with the following structure:
JSON representation
{
"audioContent" : string ,
"timepoints" : [
{
object ( Timepoint )
}
] ,
"audioConfig" : {
object ( AudioConfig )
}
}
Fields
audioContent
string ( bytes format)
The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
A base64-encoded string.
timepoints[]
object ( Timepoint )
A link between a position in the original request input and a corresponding time in the output audio. It's only supported via <mark> of SSML input.
audioConfig
object ( AudioConfig )
The audio metadata of audioContent .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
TimepointType
The type of timepoint information that is returned in the response.
Enums
TIMEPOINT_TYPE_UNSPECIFIED
Not specified. No timepoint information will be returned.
SSML_MARK
Timepoint information of <mark> tags in SSML input will be returned.
AdvancedVoiceOptions
Used for advanced voice options.
JSON representation
{
"lowLatencyJourneySynthesis" : boolean
}
Fields
lowLatencyJourneySynthesis
boolean
Only for Journey voices. If false, the synthesis is context aware and has a higher latency.
Timepoint
This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
JSON representation
{
"markName" : string ,
"timeSeconds" : number
}
Fields
markName
string
Timepoint name as received from the client within <mark> tag.
timeSeconds
number
Time offset in seconds from the start of the synthesized audio.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
