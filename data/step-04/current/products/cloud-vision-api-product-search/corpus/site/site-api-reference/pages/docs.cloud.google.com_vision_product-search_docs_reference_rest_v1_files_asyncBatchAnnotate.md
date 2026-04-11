---
title: "Method: files.asyncBatchAnnotate \_|\_ Vision API Product Search \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/files/asyncBatchAnnotate
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/files/asyncBatchAnnotate
  title: "Method: files.asyncBatchAnnotate \_|\_ Vision API Product Search \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
Method: files.asyncBatchAnnotate
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Request body
JSON representation
Response body
Authorization Scopes
Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the google.longrunning.Operations interface. Operation.metadata contains OperationMetadata (metadata). Operation.response contains AsyncBatchAnnotateFilesResponse (results).
HTTP request
POST https://vision.googleapis.com/v1/files:asyncBatchAnnotate
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"requests" : [
{
object ( AsyncAnnotateFileRequest )
}
] ,
"parent" : string
}
Fields
requests[]
object ( AsyncAnnotateFileRequest )
Required. Individual async file annotation requests for this batch.
parent
string
Optional. Target project and location to make a call.
Format: projects/{project-id}/locations/{location-id} .
If no parent is specified, a region will be chosen automatically.
Supported location-ids: us : USA country only, asia : East asia areas, like Japan, Taiwan, eu : The European Union.
Example: projects/project-A/locations/eu .
Response body
If successful, the response body contains an instance of Operation .
Authorization Scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-vision
For more information, see the Authentication Overview .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
