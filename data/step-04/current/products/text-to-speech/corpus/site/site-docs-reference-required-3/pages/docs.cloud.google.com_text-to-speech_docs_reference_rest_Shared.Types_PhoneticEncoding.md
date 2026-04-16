---
title: "PhoneticEncoding \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/PhoneticEncoding
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/libraries
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/PhoneticEncoding
  title: "PhoneticEncoding \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
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
PhoneticEncoding
Stay organized with collections
Save and categorize content based on your preferences.
The phonetic encoding of the phrase.
Enums
PHONETIC_ENCODING_UNSPECIFIED
Not specified.
PHONETIC_ENCODING_IPA
IPA, such as apple -> ˈæpəl. https://en.wikipedia.org/wiki/International_Phonetic_Alphabet
PHONETIC_ENCODING_X_SAMPA
X-SAMPA, such as apple -> "{ p@l" . https://en.wikipedia.org/wiki/X-SAMPA
PHONETIC_ENCODING_JAPANESE_YOMIGANA
For reading-to-pron conversion to work well, the pronunciation field should only contain Kanji, Hiragana, and Katakana.
The pronunciation can also contain pitch accents. The start of a pitch phrase is specified with ^ and the down-pitch position is specified with ! , for example:
phrase:端 pronunciation:^はし
phrase:箸 pronunciation:^は!し
phrase:橋 pronunciation:^はし!
We currently only support the Tokyo dialect, which allows at most one down-pitch per phrase (i.e. at most one ! between ^ ).
PHONETIC_ENCODING_PINYIN
Used to specify pronunciations for Mandarin words. See https://en.wikipedia.org/wiki/Pinyin .
For example: 朝阳, the pronunciation is "chao2 yang2". The number represents the tone, and there is a space between syllables. Neutral tones are represented by 5, for example 孩子 "hai2 zi5".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
