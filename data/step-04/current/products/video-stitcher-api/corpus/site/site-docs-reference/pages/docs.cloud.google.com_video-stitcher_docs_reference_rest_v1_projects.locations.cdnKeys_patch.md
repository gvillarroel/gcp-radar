---
title: "Method: projects.locations.cdnKeys.patch \_|\_ Video Stitcher API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/projects.locations.cdnKeys/patch
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/projects.locations.cdnKeys/patch
  title: "Method: projects.locations.cdnKeys.patch \_|\_ Video Stitcher API \_|\_\
    \ Google Cloud Documentation"
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
Method: projects.locations.cdnKeys.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Updates the specified CDN key. Only update fields specified in the call method body.
HTTP request
PATCH https://videostitcher.googleapis.com/v1/{cdnKey.name=projects/*/locations/*/cdnKeys/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
cdnKey.name
string
The resource name of the CDN key, in the form of projects/{project}/locations/{location}/cdnKeys/{id} . The name is ignored when creating a CDN key.
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of CdnKey .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
videostitcher.cdnKeys.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
