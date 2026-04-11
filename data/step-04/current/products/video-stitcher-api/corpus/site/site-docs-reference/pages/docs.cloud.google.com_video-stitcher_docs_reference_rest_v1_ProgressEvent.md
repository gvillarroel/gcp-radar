---
title: "ProgressEvent \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/ProgressEvent
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/ProgressEvent
  title: "ProgressEvent \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Reference
Send feedback
ProgressEvent
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Indicates a time in which a list of events should be triggered during media playback.
JSON representation
{
"timeOffset" : string ,
"events" : [
{
object ( Event )
}
]
}
Fields
timeOffset
string ( Duration format)
The time when the following tracking events occurs. The time is in seconds relative to the start of the VOD asset.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
events[]
object ( Event )
The list of progress tracking events for the ad break. These can be of the following IAB types: BREAK_START , BREAK_END , IMPRESSION , CREATIVE_VIEW , START , FIRST_QUARTILE , MIDPOINT , THIRD_QUARTILE , COMPLETE , PROGRESS .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
