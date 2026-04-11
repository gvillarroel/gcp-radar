---
title: "AsyncAnnotateFileRequest \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/reference/rest/v1/AsyncAnnotateFileRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/reference/rest/v1/AsyncAnnotateFileRequest
  title: "AsyncAnnotateFileRequest \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Vision API
Reference
Send feedback
AsyncAnnotateFileRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
An offline file annotation request.
JSON representation
{
"inputConfig" : {
object ( InputConfig )
} ,
"features" : [
{
object ( Feature )
}
] ,
"imageContext" : {
object ( ImageContext )
} ,
"outputConfig" : {
object ( OutputConfig )
}
}
Fields
inputConfig
object ( InputConfig )
Required. Information about the input file.
features[]
object ( Feature )
Required. Requested features.
imageContext
object ( ImageContext )
Additional context that may accompany the image(s) in the file.
outputConfig
object ( OutputConfig )
Required. The desired output location and metadata (e.g. format).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
