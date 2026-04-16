---
title: "AnnotateVideoProgress \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoProgress
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/reference/api-overview
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoProgress
  title: "AnnotateVideoProgress \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Reference
Send feedback
AnnotateVideoProgress
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
VideoAnnotationProgress
JSON representation
Video annotation progress. Included in the metadata field of the Operation returned by the operations.get call of the google::longrunning::Operations service.
JSON representation
{
"annotationProgress" : [
{
object ( VideoAnnotationProgress )
}
]
}
Fields
annotationProgress[]
object ( VideoAnnotationProgress )
Progress metadata for all videos specified in AnnotateVideoRequest .
VideoAnnotationProgress
Annotation progress for a single video.
JSON representation
{
"inputUri" : string ,
"progressPercent" : number ,
"startTime" : string ,
"updateTime" : string ,
"feature" : enum ( Feature ) ,
"segment" : {
object ( VideoSegment )
}
}
Fields
inputUri
string
Video file location in Google Cloud Storage .
progressPercent
number
Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.
startTime
string ( Timestamp format)
Time when the request was received.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Time of the most recent update.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z" .
feature
enum ( Feature )
Specifies which feature is being tracked if the request contains more than one features.
segment
object ( VideoSegment )
Specifies which segment is being tracked if the request contains more than one segments.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
