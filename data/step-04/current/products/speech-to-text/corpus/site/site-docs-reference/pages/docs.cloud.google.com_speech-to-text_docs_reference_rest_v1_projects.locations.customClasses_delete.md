---
title: "Method: projects.locations.customClasses.delete \_|\_ Cloud Speech-to-Text\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/projects.locations.customClasses/delete
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/speech-to-text/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/projects.locations.customClasses/delete
  title: "Method: projects.locations.customClasses.delete \_|\_ Cloud Speech-to-Text\
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
Method: projects.locations.customClasses.delete
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Delete a custom class.
HTTP request
DELETE https://speech.googleapis.com/v1/{name=projects/*/locations/*/customClasses/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the custom class to delete. Format:
projects/{project}/locations/{location}/customClasses/{customClass}
Speech-to-Text supports three locations: global , us (US North America), and eu (Europe). If you are calling the speech.googleapis.com endpoint, use the global location. To specify a region, use a regional endpoint with matching us or eu location value.
Authorization requires the following IAM permission on the specified resource name :
speech.customClasses.delete
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
