---
title: "Single utterance behavior \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/single-utterance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/single-utterance
  title: "Single utterance behavior \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud\
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
Single utterance behavior
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Cloud Speech-to-Text provides the latest_short model for recognizing speech that
consists of single utterances. This may be useful for applications where users
are issuing single voice commands as opposed to long-form monologue or
dictation.
When a recognizer with the latest_short model is used for a recognition
request, Cloud STT will stop performing recognition once it detects
an utterance has finished. Cloud STT will return a speech activity
event response with the type END_OF_SINGLE_UTTERANCE followed by the
transcription results.
Single utterance and StreamingRecognize
In the case where a latest_short model Recognizer
is selected for a StreamingRecognize request, Cloud STT will close
the stream automatically after the utterance has ended.
With voice activity events
In the case where voice activity events have also been enabled for a
StreamingRecognize request, Cloud STT will still return speech
begin and end voice activity events.
Voice activity timeouts for speech begin will still be applied. Voice activity
timeouts for speech end won't be applied, since the stream will be closed as
soon as the utterance ends.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
