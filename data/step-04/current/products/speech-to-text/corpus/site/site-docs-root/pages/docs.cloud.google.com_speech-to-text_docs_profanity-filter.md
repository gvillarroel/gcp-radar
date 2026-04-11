---
title: "Enable profanity filtering \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/profanity-filter
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/profanity-filter
  title: "Enable profanity filtering \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\
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
Send feedback
Enable profanity filtering
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use Cloud Speech-to-Text to automatically detect
profanity in your audio data and censor them in the transcript.
You can enable the profanity filter by setting profanityFilter=true in
the RecognitionFeatures .
If enabled, Cloud Speech-to-Text will attempt to detect profane words and return
only the first letter followed by asterisks in the transcript (for example,
f***). If this field is set to false or not set, Cloud Speech-to-Text will
not attempt to filter profanities.
The following sample demonstrates how to enable the profanity filter to
recognize audio stored in a Cloud Storage bucket.
Python
To learn how to install and use the client library for Cloud STT, see
Cloud STT client libraries .
For more information, see the
Cloud STT Python API
reference documentation .
To authenticate to Cloud STT, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import speech
from google.cloud.speech import RecognizeResponse
def sync_recognize_with_profanity_filter_gcs ( audio_uri : str ) - > RecognizeResponse :
"""Recognizes speech from an audio file in Cloud Storage and filters out profane language.
Args:
audio_uri (str): The Cloud Storage URI of the input audio, e.g., gs://[BUCKET]/[FILE]
Returns:
cloud_speech.RecognizeResponse: The full response object which includes the transcription results.
"""
# Define the audio source
audio = { "uri" : audio_uri }
client = speech . SpeechClient ()
config = speech . RecognitionConfig (
encoding = speech . RecognitionConfig . AudioEncoding . FLAC , # Audio format
sample_rate_hertz = 16000 ,
language_code = "en-US" ,
# Enable profanity filter
profanity_filter = True ,
)
response = client . recognize ( config = config , audio = audio )
for result in response . results :
alternative = result . alternatives [ 0 ]
print ( f "Transcript: { alternative . transcript } " )
return response . results
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
