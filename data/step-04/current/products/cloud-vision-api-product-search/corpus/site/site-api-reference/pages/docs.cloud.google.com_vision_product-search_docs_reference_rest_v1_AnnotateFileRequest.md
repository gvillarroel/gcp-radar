---
title: "AnnotateFileRequest \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/AnnotateFileRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/AnnotateFileRequest
  title: "AnnotateFileRequest \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
AnnotateFileRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
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
"pages" : [
number
]
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
pages[]
number
Pages of the file to perform image annotation.
Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative.
Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page.
If the file is GIF instead of PDF or TIFF, page refers to GIF frames.
If this field is empty, by default the service performs image annotation for the first 5 pages of the file.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
