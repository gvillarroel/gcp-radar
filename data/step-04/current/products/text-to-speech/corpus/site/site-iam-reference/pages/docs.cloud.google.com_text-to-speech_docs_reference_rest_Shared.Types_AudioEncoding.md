---
title: "AudioEncoding \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/AudioEncoding
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/AudioEncoding
  title: "AudioEncoding \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
AudioEncoding
Stay organized with collections
Save and categorize content based on your preferences.
Configuration to set up audio encoder. The encoding determines the output audio format that we'd like.
Enums
AUDIO_ENCODING_UNSPECIFIED
Not specified. Only used by GenerateVoiceCloningKey. Otherwise, will return result google.rpc.Code.INVALID_ARGUMENT .
LINEAR16
Uncompressed 16-bit signed little-endian samples (Linear PCM). Audio content returned as LINEAR16 also contains a WAV header.
MP3
MP3 audio at 32kbps.
OGG_OPUS
Opus encoded audio wrapped in an ogg container. The result is a file which can be played natively on Android, and in browsers (at least Chrome and Firefox). The quality of the encoding is considerably higher than MP3 while using approximately the same bitrate.
MULAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law. Audio content returned as MULAW also contains a WAV header.
ALAW
8-bit samples that compand 14-bit audio samples using G.711 PCMU/A-law. Audio content returned as ALAW also contains a WAV header.
PCM
Uncompressed 16-bit signed little-endian samples (Linear PCM). Note that as opposed to LINEAR16, audio won't be wrapped in a WAV (or any other) header.
M4A
M4A audio.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
