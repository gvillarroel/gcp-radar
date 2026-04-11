---
title: "Interface ListVoicesRequestOrBuilder (2.89.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.ListVoicesRequestOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-texttospeech/latest/com.google.cloud.texttospeech.v1.ListVoicesRequestOrBuilder
  title: "Interface ListVoicesRequestOrBuilder (2.89.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface ListVoicesRequestOrBuilder (2.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.89.0 (latest)
2.88.0
2.86.0
2.84.0
2.83.0
2.81.0
2.79.0
2.77.0
2.76.0
2.75.0
2.74.0
2.73.0
2.71.0
2.69.0
2.68.0
2.65.0
2.64.0
2.63.0
2.61.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.50.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.38.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.25.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.9
2.3.0
2.2.1
2.1.5
public interface ListVoicesRequestOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getLanguageCode()
public abstract String getLanguageCode ()
Optional. Recommended.
BCP-47 language tag.
If not specified, the API will return all supported voices.
If specified, the ListVoices call will only return voices that can be used
to synthesize this language_code. For example, if you specify "en-NZ" ,
all "en-NZ" voices will be returned. If you specify "no" , both
"no-\ " (Norwegian) and "nb-\" (Norwegian Bokmal) voices will be
returned.
string language_code = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
String
The languageCode.
getLanguageCodeBytes()
public abstract ByteString getLanguageCodeBytes ()
Optional. Recommended.
BCP-47 language tag.
If not specified, the API will return all supported voices.
If specified, the ListVoices call will only return voices that can be used
to synthesize this language_code. For example, if you specify "en-NZ" ,
all "en-NZ" voices will be returned. If you specify "no" , both
"no-\ " (Norwegian) and "nb-\" (Norwegian Bokmal) voices will be
returned.
string language_code = 1 [(.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
ByteString
The bytes for languageCode.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
