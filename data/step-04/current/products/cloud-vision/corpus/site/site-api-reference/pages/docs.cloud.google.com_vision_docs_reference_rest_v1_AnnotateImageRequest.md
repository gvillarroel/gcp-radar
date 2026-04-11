---
title: "AnnotateImageRequest \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/reference/rest/v1/AnnotateImageRequest
  title: "AnnotateImageRequest \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
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
AnnotateImageRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Image
JSON representation
ImageSource
JSON representation
Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
JSON representation
{
"image" : {
object ( Image )
} ,
"features" : [
{
object ( Feature )
}
] ,
"imageContext" : {
object ( ImageContext )
}
}
Fields
image
object ( Image )
The image to be processed.
features[]
object ( Feature )
Requested features.
imageContext
object ( ImageContext )
Additional context that may accompany the image.
Image
Client image to perform Google Cloud Vision API tasks over.
JSON representation
{
"content" : string ,
"source" : {
object ( ImageSource )
}
}
Fields
content
string ( bytes format)
Image content, represented as a stream of bytes. Note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
Currently, this field only works for images.annotate requests. It does not work for images.asyncBatchAnnotate requests.
A base64-encoded string.
source
object ( ImageSource )
Google Cloud Storage image location, or publicly-accessible image URL. If both content and source are provided for an image, content takes precedence and is used to perform the image annotation request.
ImageSource
External image source (Google Cloud Storage or web URL image location).
JSON representation
{
"gcsImageUri" : string ,
"imageUri" : string
}
Fields
gcsImageUri
string
Use imageUri instead.
The Google Cloud Storage URI of the form gs://bucket_name/object_name . Object versioning is not supported. See Google Cloud Storage Request URIs for more info.
imageUri
string
The URI of the source image. Can be either:
A Google Cloud Storage URI of the form gs://bucket_name/object_name . Object versioning is not supported. See Google Cloud Storage Request URIs for more info.
A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications.
When both gcsImageUri and imageUri are specified, imageUri takes precedence.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
