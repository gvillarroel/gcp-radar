---
title: "BatchAnnotateFilesResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/reference/rest/v1/BatchAnnotateFilesResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/reference/rest/v1/BatchAnnotateFilesResponse
  title: "BatchAnnotateFilesResponse \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
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
BatchAnnotateFilesResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AnnotateFileResponse
JSON representation
A list of file annotation responses.
JSON representation
{
"responses" : [
{
object ( AnnotateFileResponse )
}
]
}
Fields
responses[]
object ( AnnotateFileResponse )
The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.
AnnotateFileResponse
Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
JSON representation
{
"inputConfig" : {
object ( InputConfig )
} ,
"responses" : [
{
object ( AnnotateImageResponse )
}
] ,
"totalPages" : integer ,
"error" : {
object ( Status )
}
}
Fields
inputConfig
object ( InputConfig )
Information about the file for which this response is generated.
responses[]
object ( AnnotateImageResponse )
Individual responses to images found within the file. This field will be empty if the error field is set.
totalPages
integer
This field gives the total number of pages in the file.
error
object ( Status )
If set, represents the error message for the failed request. The responses field will not be set in this case.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
