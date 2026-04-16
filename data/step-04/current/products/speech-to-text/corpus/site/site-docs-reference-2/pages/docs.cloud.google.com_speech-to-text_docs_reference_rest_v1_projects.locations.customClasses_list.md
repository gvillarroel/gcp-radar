---
title: "Method: projects.locations.customClasses.list \_|\_ Cloud Speech-to-Text \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/projects.locations.customClasses/list
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/projects.locations.customClasses/list
  title: "Method: projects.locations.customClasses.list \_|\_ Cloud Speech-to-Text\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Speech-to-Text
Reference
Send feedback
Method: projects.locations.customClasses.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
List custom classes.
HTTP request
GET https://speech.googleapis.com/v1/{parent=projects/*/locations/*}/customClasses
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of custom classes. Format:
projects/{project}/locations/{location}/customClasses
Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint with matching us or eu location value.
Authorization requires the following IAM permission on the specified resource parent :
speech.customClasses.list
Query parameters
Parameters
pageSize
integer
The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
pageToken
string
A page token, received from a previous ListCustomClass call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to ListCustomClass must match the call that provided the page token.
Request body
The request body must be empty.
Response body
Message returned to the client by the customClasses.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"customClasses" : [
{
object ( CustomClass )
}
] ,
"nextPageToken" : string
}
Fields
customClasses[]
object ( CustomClass )
The custom classes.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
