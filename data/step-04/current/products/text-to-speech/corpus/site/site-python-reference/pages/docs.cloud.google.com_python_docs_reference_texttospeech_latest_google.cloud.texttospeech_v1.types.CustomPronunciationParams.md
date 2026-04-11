---
title: "Class CustomPronunciationParams (2.36.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.CustomPronunciationParams
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/texttospeech/latest/google.cloud.texttospeech_v1.types.CustomPronunciationParams
  title: "Class CustomPronunciationParams (2.36.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class CustomPronunciationParams (2.36.0)
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
CustomPronunciationParams ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Pronunciation customization for a phrase.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
phrase
str
The phrase to which the customization is
applied. The phrase can be multiple words, such
as proper nouns, but shouldn't span the length
of the sentence.
This field is a member of oneof _ _phrase .
phonetic_encoding
google.cloud.texttospeech_v1.types.CustomPronunciationParams.PhoneticEncoding
The phonetic encoding of the phrase.
This field is a member of oneof _ _phonetic_encoding .
pronunciation
str
The pronunciation of the phrase. This must be
in the phonetic encoding specified above.
This field is a member of oneof _ _pronunciation .
Classes
PhoneticEncoding
PhoneticEncoding ( value )
The phonetic encoding of the phrase.
The pronunciation can also contain pitch accents. The start
of a pitch phrase is specified with `^` and the down-pitch
position is specified with `!`, for example:
::
phrase:端 pronunciation:^はし
phrase:箸 pronunciation:^は!し
phrase:橋 pronunciation:^はし!
We currently only support the Tokyo dialect, which allows at
most one down-pitch per phrase (i.e. at most one `!`
between `^`).
PHONETIC_ENCODING_PINYIN (4):
Used to specify pronunciations for Mandarin
words. See https://en.wikipedia.org/wiki/Pinyin.
For example: 朝阳, the pronunciation is "chao2
yang2". The number represents the tone, and
there is a space between syllables. Neutral
tones are represented by 5, for example 孩子 "hai2
zi5".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
