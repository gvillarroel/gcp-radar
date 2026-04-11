---
title: "Class AdvancedVoiceOptions (2.36.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.AdvancedVoiceOptions
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.AdvancedVoiceOptions
  title: "Class AdvancedVoiceOptions (2.36.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AdvancedVoiceOptions (2.36.0)
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
AdvancedVoiceOptions ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Used for advanced voice options.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
low_latency_journey_synthesis
bool
Only for Journey voices. If false, the
synthesis is context aware and has a higher
latency.
This field is a member of oneof _ _low_latency_journey_synthesis .
relax_safety_filters
bool
Optional. Input only. Deprecated, use safety_settings
instead. If true, relaxes safety filters for Gemini TTS.
safety_settings
google.cloud.texttospeech_v1.types.AdvancedVoiceOptions.SafetySettings
Optional. Input only. This applies to Gemini
TTS only. If set, the category specified in the
safety setting will be blocked if the harm
probability is above the threshold. Otherwise,
the safety filter will be disabled by default.
enable_textnorm
bool
Optional. If true, textnorm will be applied
to text input. This feature is enabled by
default. Only applies for Gemini TTS.
This field is a member of oneof _ _enable_textnorm .
Classes
HarmBlockThreshold
HarmBlockThreshold ( value )
Harm block thresholds for the safety settings.
HarmCategory
HarmCategory ( value )
Harm categories that will block the content.
SafetySetting
SafetySetting ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Safety setting for a single harm category.
SafetySettings
SafetySettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Safety settings for the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
