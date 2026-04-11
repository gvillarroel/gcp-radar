---
title: "Method: files.annotate \_|\_ Vision API Product Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/files/annotate
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/files/annotate
  title: "Method: files.annotate \_|\_ Vision API Product Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
Method: files.annotate
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Request body
JSON representation
Response body
Authorization Scopes
Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported.
This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
HTTP request
POST https://vision.googleapis.com/v1/files:annotate
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"requests" : [
{
object ( AnnotateFileRequest )
}
] ,
"parent" : string
}
Fields
requests[]
object ( AnnotateFileRequest )
Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.
parent
string
Optional. Target project and location to make a call.
Format: projects/{project-id}/locations/{location-id} .
If no parent is specified, a region will be chosen automatically.
Supported location-ids: us : USA country only, asia : East asia areas, like Japan, Taiwan, eu : The European Union.
Example: projects/project-A/locations/eu .
Response body
If successful, the response body contains an instance of BatchAnnotateFilesResponse .
Authorization Scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-vision
For more information, see the Authentication Overview .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
