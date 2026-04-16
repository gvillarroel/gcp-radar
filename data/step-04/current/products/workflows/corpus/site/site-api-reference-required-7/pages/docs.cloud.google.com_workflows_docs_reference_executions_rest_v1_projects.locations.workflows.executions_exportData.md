---
title: "Method: projects.locations.workflows.executions.exportData \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/exportData
knowledge_key: corpus
source_id: site-api-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions/exportData
  title: "Method: projects.locations.workflows.executions.exportData \_|\_ Workflows\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Method: projects.locations.workflows.executions.exportData
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.
HTTP request
GET https://workflowexecutions.googleapis.com/v1/{name=projects/*/locations/*/workflows/*/executions/*}:exportData
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Name of the execution for which data is to be exported. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
Authorization requires the following IAM permission on the specified resource name :
workflows.executions.get
Request body
The request body must be empty.
Response body
Response for the executions.exportData method.
If successful, the response body contains data with the following structure:
JSON representation
{
"data" : string
}
Fields
data
string
The JSON string with customer data and metadata for an execution with the given name
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
