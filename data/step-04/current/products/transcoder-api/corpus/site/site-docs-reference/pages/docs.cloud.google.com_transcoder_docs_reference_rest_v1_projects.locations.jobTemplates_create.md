---
title: "Method: projects.locations.jobTemplates.create \_|\_ Transcoder API \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobTemplates/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/projects.locations.jobTemplates/create
  title: "Method: projects.locations.jobTemplates.create \_|\_ Transcoder API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Reference
Send feedback
Method: projects.locations.jobTemplates.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Creates a job template in the specified region.
HTTP request
POST https://transcoder.googleapis.com/v1/{parent=projects/*/locations/*}/jobTemplates
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent location to create this job template. Format: projects/{project}/locations/{location}
Authorization requires the following IAM permission on the specified resource parent :
transcoder.jobTemplates.create
Query parameters
Parameters
jobTemplateId
string
Required. The ID to use for the job template, which will become the final component of the job template's resource name.
This value should be 4-63 characters, and valid characters must match the regular expression [a-zA-Z][a-zA-Z0-9_-]* .
Request body
The request body contains an instance of JobTemplate .
Response body
If successful, the response body contains a newly created instance of JobTemplate .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
