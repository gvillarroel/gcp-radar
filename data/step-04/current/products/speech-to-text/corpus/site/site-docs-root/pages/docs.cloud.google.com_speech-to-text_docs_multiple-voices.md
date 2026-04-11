---
title: "Detect different speakers in an audio recording \_|\_ Cloud Speech-to-Text\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/multiple-voices
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/multiple-voices
  title: "Detect different speakers in an audio recording \_|\_ Cloud Speech-to-Text\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Send feedback
Detect different speakers in an audio recording
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to get labels for different speakers in audio
data transcribed by Cloud Speech-to-Text.
Sometimes, audio data contains samples of more than one person
talking. For example, audio from a telephone call usually features
voices from two or more people. A transcription of the call ideally
includes who speaks at which times.
Speaker diarization
Cloud Speech-to-Text can recognize multiple speakers in the same audio
clip. When you send an audio transcription request to
Cloud Speech-to-Text, you can include a parameter telling Cloud Speech-to-Text
to identify the different speakers in the audio sample. This feature,
called speaker diarization , detects when speakers change and
labels by number the individual voices detected in the audio.
When you enable speaker diarization in your transcription request,
Cloud Speech-to-Text attempts to distinguish the different voices
included in the audio sample. The
transcription result tags each word with a number assigned to
individual speakers. Words spoken by the same speaker bear the same
number. A transcription result can include numbers up to as many
speakers as Cloud Speech-to-Text can uniquely identify in the
audio sample.
When you use speaker diarization, Cloud Speech-to-Text produces a running
aggregate of all the results provided in the transcription. Each
result includes the words from the previous result. Thus, the words
array in the final result provides the complete, diarized results
of the transcription.
Review the language support page
to see if this feature is available for your language.
Enable speaker diarization in a request
To enable speaker diarization, you need to set the
diarization_config field in
RecognitionFeatures . You must set the min_speaker_count
and max_speaker_count values according to how many speakers you expect in the transcript.
Cloud STT supports speaker
diarization for all speech recognition methods:
speech:recognize and Streaming .
Use a local file
The following code snippet demonstrates how to enable speaker
diarization in a transcription request to Cloud Speech-to-Text using a local file
REST
Refer to the speech:recognize API endpoint for
complete details.
To perform synchronous speech recognition, make a POST request and provide the
appropriate request body. The following shows an example of a POST request using
curl . The example uses the Google Cloud CLI to generate an access
token. For instructions on installing the gcloud CLI,
see the quickstart .
curl -s -H "Content-Type: application/json" \
-H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \
https://speech.googleapis.com/v2/projects/ { project } /locations/ { location } /recognizers/ { recognizer } :recognize \
--data '{
"config": {
"features": {
"diarizationConfig": {
"minSpeakerCount": 2,
"maxSpeakerCount": 2
},
}
},
"uri": "gs://cloud-samples-tests/speech/commercial_mono.wav"
}' > speaker-diarization.txt
If the request is successful, the server returns a 200 OK HTTP
status code and the response in JSON format, saved to a file named
speaker-diarization.txt .
{
"results" : [
{
"alternatives" : [
{
"transcript" : "hi I'd like to buy a Chromecast and I was wondering whether you could help me with that certainly which color would you like we have blue black and red uh let's go with the black one would you like the new Chromecast Ultra model or the regular Chrome Cast regular Chromecast is fine thank you okay sure we like to ship it regular or Express Express please terrific it's on the way thank you thank you very much bye" ,
"confidence" : 0 .92142606,
"words" : [
{
"startOffset" : "0s" ,
"endOffset" : "1.100s" ,
"word" : "hi" ,
"speakerLabel" : "2"
} ,
{
"startOffset" : "1.100s" ,
"endOffset" : "2s" ,
"word" : "I'd" ,
"speakerLabel" : "2"
} ,
{
"startOffset" : "2s" ,
"endOffset" : "2s" ,
"word" : "like" ,
"speakerLabel" : "2"
} ,
{
"startOffset" : "2s" ,
"endOffset" : "2.100s" ,
"word" : "to" ,
"speakerLabel" : "2"
} ,
...
{
"startOffset" : "6.500s" ,
"endOffset" : "6.900s" ,
"word" : "certainly" ,
"speakerLabel" : "1"
} ,
{
"startOffset" : "6.900s" ,
"endOffset" : "7.300s" ,
"word" : "which" ,
"speakerLabel" : "1"
} ,
{
"startOffset" : "7.300s" ,
"endOffset" : "7.500s" ,
"word" : "color" ,
"speakerLabel" : "1"
} ,
...
]
}
] ,
"languageCode" : "en-us"
}
]
}
Go
To learn how to install and use the client library for Cloud STT, see
Cloud STT client libraries .
For more information, see the
Cloud STT Go API
reference documentation .
To authenticate to Cloud STT, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
"os"
"strings"
speech "cloud.google.com/go/speech/apiv1"
"cloud.google.com/go/speech/apiv1/speechpb"
)
// transcribe_diarization_gcs_beta Transcribes a remote audio file using speaker diarization.
func transcribe_diarization ( w io . Writer ) error {
ctx := context . Background ()
client , err := speech . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
diarizationConfig := & speechpb . SpeakerDiarizationConfig {
EnableSpeakerDiarization : true ,
MinSpeakerCount : 2 ,
MaxSpeakerCount : 2 ,
}
recognitionConfig := & speechpb . RecognitionConfig {
Encoding : speechpb . RecognitionConfig_LINEAR16 ,
SampleRateHertz : 8000 ,
LanguageCode : "en-US" ,
DiarizationConfig : diarizationConfig ,
}
// Get the contents of the local audio file
content , err := os . ReadFile ( "../resources/commercial_mono.wav" )
if err != nil {
return fmt . Errorf ( "error reading file %w" , err )
}
audio := & speechpb . RecognitionAudio {
AudioSource : & speechpb . RecognitionAudio_Content { Content : content },
}
longRunningRecognizeRequest := & speechpb . LongRunningRecognizeRequest {
Config : recognitionConfig ,
Audio : audio ,
}
operation , err := client . LongRunningRecognize ( ctx , longRunningRecognizeRequest )
if err != nil {
return fmt . Errorf ( "error running recognize %w" , err )
}
response , err := operation . Wait ( ctx )
if err != nil {
return err
}
// Speaker Tags are only included in the last result object, which has only one
// alternative.
alternative := response . Results [ len ( response . Results ) - 1 ]. Alternatives [ 0 ]
wordInfo := alternative . GetWords ()[ 0 ]
currentSpeakerTag := wordInfo . GetSpeakerTag ()
var speakerWords strings . Builder
speakerWords . WriteString ( fmt . Sprintf ( "Speaker %d: %s" , wordInfo . GetSpeakerTag (), wordInfo . GetWord ()))
// For each word, get all the words associated with one speaker, once the speaker changes,
// add a new line with the new speaker and their spoken words.
for i := 1 ; i < len ( alternative . Words ); i ++ {
wordInfo := alternative . Words [ i ]
if currentSpeakerTag == wordInfo . GetSpeakerTag () {
speakerWords . WriteString ( " " )
speakerWords . WriteString ( wordInfo . GetWord ())
} else {
speakerWords . WriteString ( fmt . Sprintf ( "\nSpeaker %d: %s" ,
wordInfo . GetSpeakerTag (), wordInfo . GetWord ()))
currentSpeakerTag = wordInfo . GetSpeakerTag ()
}
}
fmt . Fprint ( w , speakerWords . String ())
return nil
}
Python
To learn how to install and use the client library for Cloud STT, see
Cloud STT client libraries .
For more information, see the
Cloud STT Python API
reference documentation .
To authenticate to Cloud STT, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import speech_v1p1beta1 as speech
client = speech . SpeechClient ()
speech_file = "resources/commercial_mono.wav"
with open ( speech_file , "rb" ) as audio_file :
content = audio_file . read ()
audio = speech . RecognitionAudio ( content = content )
diarization_config = speech . SpeakerDiarizationConfig (
enable_speaker_diarization = True ,
min_speaker_count = 2 ,
max_speaker_count = 10 ,
)
config = speech . RecognitionConfig (
encoding = speech . RecognitionConfig . AudioEncoding . LINEAR16 ,
sample_rate_hertz = 8000 ,
language_code = "en-US" ,
diarization_config = diarization_config ,
)
print ( "Waiting for operation to complete..." )
response = client . recognize ( config = config , audio = audio )
# The transcript within each result is separate and sequential per result.
# However, the words list within an alternative includes all the words
# from all the results thus far. Thus, to get all the words with speaker
# tags, you only have to take the words list from the last result:
result = response . results [ - 1 ]
words_info = result . alternatives [ 0 ] . words
# Printing out the output:
for word_info in words_info :
print ( f "word: ' { word_info . word } ', speaker_tag: { word_info . speaker_tag } " )
return result
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
