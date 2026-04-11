---
title: "Method: projects.patchTraces \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects/patchTraces
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v1/rest/v1/projects/patchTraces
  title: "Method: projects.patchTraces \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
Method: projects.patchTraces
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Traces
JSON representation
Try it!
Sends trace spans to Cloud Trace. Spans cannot be updated. If the trace ID and span ID already exist, an additional copy of the span will be stored.
HTTP request
PATCH https://cloudtrace.googleapis.com/v1/projects/{projectId}/traces
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
projectId
string
Required. ID of the Cloud project where the trace data is stored.
Authorization requires the following IAM permission on the specified resource projectId :
cloudtrace.traces.patch
Request body
The request body contains an instance of Traces .
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/trace.append
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Traces
List of new or updated traces.
JSON representation
{
"traces" : [
{
object ( Trace )
}
]
}
Fields
traces[]
object ( Trace )
List of traces.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
