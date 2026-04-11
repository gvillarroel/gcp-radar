---
title: "EncodingType \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/EncodingType
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/EncodingType
  title: "EncodingType \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Reference
Send feedback
EncodingType
Stay organized with collections
Save and categorize content based on your preferences.
Represents the text encoding that the caller uses to process the output. Providing an EncodingType is recommended because the API provides the beginning offsets for various outputs, such as tokens and mentions, and languages that natively use different text encodings may access offsets differently.
Enums
NONE
If EncodingType is not specified, encoding-dependent information (such as beginOffset ) will be set at -1 .
UTF8
Encoding-dependent information (such as beginOffset ) is calculated based on the UTF-8 encoding of the input. C++ and Go are examples of languages that use this encoding natively.
UTF16
Encoding-dependent information (such as beginOffset ) is calculated based on the UTF-16 encoding of the input. Java and JavaScript are examples of languages that use this encoding natively.
UTF32
Encoding-dependent information (such as beginOffset ) is calculated based on the UTF-32 encoding of the input. Python is an example of a language that uses this encoding natively.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
