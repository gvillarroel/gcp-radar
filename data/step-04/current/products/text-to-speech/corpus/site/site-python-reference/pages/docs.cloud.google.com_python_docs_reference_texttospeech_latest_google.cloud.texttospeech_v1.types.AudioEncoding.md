---
title: "Class AudioEncoding (2.36.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.AudioEncoding
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.AudioEncoding
  title: "Class AudioEncoding (2.36.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AudioEncoding (2.36.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.36.0 (latest)
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.26.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.1
2.20.0
2.19.0
2.18.0
2.17.2
2.16.5
2.15.1
2.14.2
2.13.0
2.12.3
2.11.1
2.10.2
2.9.1
2.8.0
2.7.1
2.6.0
2.5.3
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.0.3
0.5.0
AudioEncoding ( value )
Configuration to set up audio encoder. The encoding
determines the output audio format that we'd like.
Enums
Name
Description
AUDIO_ENCODING_UNSPECIFIED
Not specified. Only used by GenerateVoiceCloningKey. Otherwise, will return result `google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT]`.
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
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
