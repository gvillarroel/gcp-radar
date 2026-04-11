---
title: "InputConfig \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/InputConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/InputConfig
  title: "InputConfig \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
InputConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GcsSource
JSON representation
The desired input location and metadata.
JSON representation
{
"gcsSource" : {
object ( GcsSource )
} ,
"content" : string ,
"mimeType" : string
}
Fields
gcsSource
object ( GcsSource )
The Google Cloud Storage location to read the input from.
content
string ( bytes format)
File content, represented as a stream of bytes. Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
Currently, this field only works for files.annotate requests. It does not work for files.asyncBatchAnnotate requests.
A base64-encoded string.
mimeType
string
The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.
GcsSource
The Google Cloud Storage location where the input will be read from.
JSON representation
{
"uri" : string
}
Fields
uri
string
Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
