---
title: "Class AudioConfig (2.36.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.AudioConfig
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.AudioConfig
  title: "Class AudioConfig (2.36.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class AudioConfig (2.36.0)
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
AudioConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Description of audio data to be synthesized.
Attributes
Name
Description
audio_encoding
google.cloud.texttospeech_v1.types.AudioEncoding
Required. The format of the audio byte
stream.
speaking_rate
float
Optional. Input only. Speaking rate/speed, in the range
[0.25, 2.0]. 1.0 is the normal native speed supported by the
specific voice. 2.0 is twice as fast, and 0.5 is half as
fast. If unset(0.0), defaults to the native 1.0 speed. Any
other values < 0.25="" or=""> 2.0 will return an error.
pitch
float
Optional. Input only. Speaking pitch, in the range [-20.0,
20.0]. 20 means increase 20 semitones from the original
pitch. -20 means decrease 20 semitones from the original
pitch.
volume_gain_db
float
Optional. Input only. Volume gain (in dB) of the normal
native volume supported by the specific voice, in the range
[-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will
play at normal native signal amplitude. A value of -6.0 (dB)
will play at approximately half the amplitude of the normal
native signal amplitude. A value of +6.0 (dB) will play at
approximately twice the amplitude of the normal native
signal amplitude. Strongly recommend not to exceed +10 (dB)
as there's usually no effective increase in loudness for any
value greater than that.
sample_rate_hertz
int
Optional. The synthesis sample rate (in hertz) for this
audio. When this is specified in SynthesizeSpeechRequest, if
this is different from the voice's natural sample rate, then
the synthesizer will honor this request by converting to the
desired sample rate (which might result in worse audio
quality), unless the specified sample rate is not supported
for the encoding chosen, in which case it will fail the
request and return
google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT] .
effects_profile_id
MutableSequence[str]
Optional. Input only. An identifier which selects 'audio
effects' profiles that are applied on (post synthesized)
text to speech. Effects are applied on top of each other in
the order they are given. See `audio
profiles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
