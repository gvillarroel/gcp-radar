---
title: "Package types (2.36.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types
  title: "Package types (2.36.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (2.36.0)
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
API documentation for texttospeech_v1.types package.
Classes
AdvancedVoiceOptions
Used for advanced voice options.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AudioConfig
Description of audio data to be synthesized.
AudioEncoding
Configuration to set up audio encoder. The encoding
determines the output audio format that we'd like.
CustomPronunciationParams
Pronunciation customization for a phrase.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
CustomPronunciations
A collection of pronunciation customizations.
CustomVoiceParams
Description of the custom voice to be synthesized.
ListVoicesRequest
The top-level message sent by the client for the ListVoices
method.
ListVoicesResponse
The message returned to the client by the ListVoices method.
MultiSpeakerMarkup
A collection of turns for multi-speaker synthesis.
MultiSpeakerVoiceConfig
Configuration for a multi-speaker text-to-speech setup.
Enables the use of up to two distinct voices in a single
synthesis request.
MultispeakerPrebuiltVoice
Configuration for a single speaker in a Gemini TTS
multi-speaker setup. Enables dialogue between two speakers.
SsmlVoiceGender
Gender of the voice as described in SSML voice
element <https://www.w3.org/TR/speech-synthesis11/#edef_voice> __.
StreamingAudioConfig
Description of the desired output audio data.
StreamingSynthesisInput
Input to be synthesized.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
StreamingSynthesizeConfig
Provides configuration information for the
StreamingSynthesize request.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
StreamingSynthesizeRequest
Request message for the StreamingSynthesize method. Multiple
StreamingSynthesizeRequest messages are sent in one call. The
first message must contain a streaming_config that fully
specifies the request configuration and must not contain input .
All subsequent messages must only have input set.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
StreamingSynthesizeResponse
StreamingSynthesizeResponse is the only message returned to the
client by StreamingSynthesize method. A series of zero or more
StreamingSynthesizeResponse messages are streamed back to the
client.
SynthesisInput
Contains text input to be synthesized. Either text or ssml
must be supplied. Supplying both or neither returns
google.rpc.Code.INVALID_ARGUMENT][google.rpc.Code.INVALID_ARGUMENT] .
The input size is limited to 5000 bytes.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SynthesizeLongAudioMetadata
Metadata for response returned by the SynthesizeLongAudio
method.
SynthesizeLongAudioRequest
The top-level message sent by the client for the
SynthesizeLongAudio method.
SynthesizeLongAudioResponse
The message returned to the client by the SynthesizeLongAudio
method.
SynthesizeSpeechRequest
The top-level message sent by the client for the
SynthesizeSpeech method.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SynthesizeSpeechResponse
The message returned to the client by the SynthesizeSpeech
method.
Voice
Description of a voice supported by the TTS service.
VoiceCloneParams
The configuration of Voice Clone feature.
VoiceSelectionParams
Description of which voice to use for a synthesis request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
