---
title: "AdRequest \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/AdRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/AdRequest
  title: "AdRequest \_|\_ Video Stitcher API \_|\_ Google Cloud Documentation"
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
AdRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
RequestMetadata
JSON representation
ResponseMetadata
JSON representation
Details of an ad request to an ad server.
JSON representation
{
"uri" : string ,
"requestMetadata" : {
object ( RequestMetadata )
} ,
"responseMetadata" : {
object ( ResponseMetadata )
}
}
Fields
uri
string
The ad tag URI processed with integrated macros.
requestMetadata
object ( RequestMetadata )
The request metadata used to make the ad request.
responseMetadata
object ( ResponseMetadata )
The response metadata received from the ad request.
RequestMetadata
Metadata for an ad request.
JSON representation
{
"headers" : {
object
}
}
Fields
headers
object ( Struct format)
The HTTP headers of the ad request.
ResponseMetadata
Metadata for the response of an ad request.
JSON representation
{
"error" : string ,
"headers" : {
object
} ,
"statusCode" : string ,
"sizeBytes" : integer ,
"duration" : string ,
"body" : string
}
Fields
error
string
Error message received when making the ad request.
headers
object ( Struct format)
Headers from the response.
statusCode
string
Status code for the response.
sizeBytes
integer
Size in bytes of the response.
duration
string ( Duration format)
Total time elapsed for the response.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
body
string
The body of the response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
