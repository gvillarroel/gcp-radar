---
title: "Method: projects.locations.cdnKeys.create \_|\_ Video Stitcher API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/projects.locations.cdnKeys/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/projects.locations.cdnKeys/create
  title: "Method: projects.locations.cdnKeys.create \_|\_ Video Stitcher API \_|\_\
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
Method: projects.locations.cdnKeys.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Creates a new CDN key.
HTTP request
POST https://videostitcher.googleapis.com/v1/{parent=projects/*/locations/*}/cdnKeys
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The project in which the CDN key should be created, in the form of projects/{project_number}/locations/{location} .
Query parameters
Parameters
cdnKeyId
string
Required. The ID to use for the CDN key, which will become the final component of the CDN key's resource name.
This value should conform to RFC-1034, which restricts to lower-case letters, numbers, and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
Request body
The request body contains an instance of CdnKey .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
videostitcher.cdnKeys.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
