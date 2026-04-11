---
title: "Regional availability \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/locations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/locations
  title: "Regional availability \_|\_ Cloud Speech-to-Text \_|\_ Google Cloud Documentation"
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
Regional availability
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
In Cloud Speech-to-Text API V2, there are different availabilities in different regions.
To understand the availabilities, use the Locations API.
Location Metadata
Each location returned by the Locations API has metadata associated with it that
details the languages, models, and model features that are available. A sample
location with its metadata is shown below.
{
"locationId" : "europe-west1" ,
"metadata" : {
"languages" : {
"models" : {
"es-ES" : {
"modelFeatures" : {
"latest_long" : {
"modelFeature" : [
{ "feature" : "profanity_filter" , "releaseState" : "GA" },
{ "feature" : "spoken_punctuation" , "releaseState" : "GA" },
{ "feature" : "automatic_punctuation" , "releaseState" : "GA" },
{ "feature" : "speaker_diarization" , "releaseState" : "PREVIEW_DIARIZATION" },
]
}
}
}
}
}
}
}
Filtering in List Locations
When listing all availabilities, a filter can be used. The different criteria
that can be used to filter are the following:
language Optional. The BCP-47 language tag of the language desired.
model Optional. The model desired.
model_feature Optional. The model feature desired.
A sample filter query is shown below. Please see
filter syntax for further reference.
"language = en-US AND model = latest_long AND model_feature != profanity_filter"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
