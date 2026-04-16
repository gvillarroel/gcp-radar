---
title: "Method: projects.locations.workflows.executions.callbacks.sendHttpCallback\
  \ \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.callbacks/sendHttpCallback
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.callbacks/sendHttpCallback
  title: "Method: projects.locations.workflows.executions.callbacks.sendHttpCallback\
    \ \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Method: projects.locations.workflows.executions.callbacks.sendHttpCallback
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
HttpBody
JSON representation
Try it!
Sends an HTTP callback to resume the corresponding workflow execution.
HTTP request
NONE https://workflowexecutions.googleapis.com/v1/{workflow=projects/*/locations/*/workflows/*}/executions/{executionId}/callbacks/{callbackId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
workflow
string
Required. Resource path for the workflow the callback belongs to.
Authorization requires the following IAM permission on the specified resource workflow :
workflows.callbacks.send
executionId
string
Required. The ID of the execution.
callbackId
string
Required. The ID of the callback.
Request body
The request body contains an instance of HttpBody .
Response body
If successful, the response body is empty.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
HttpBody
Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.
This message can be used both in streaming and non-streaming API methods in the request as well as the response.
It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.
Example:
message GetResourceRequest {
// A unique request id.
string request_id = 1;
// The raw HTTP body is bound to this field.
google.api.HttpBody http_body = 2;
}
service ResourceService {
rpc GetResource(GetResourceRequest)
returns (google.api.HttpBody);
rpc UpdateResource(google.api.HttpBody)
returns (google.protobuf.Empty);
}
Example with streaming methods:
service CaldavService {
rpc GetCalendar(stream google.api.HttpBody)
returns (stream google.api.HttpBody);
rpc UpdateCalendar(stream google.api.HttpBody)
returns (stream google.api.HttpBody);
}
Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
JSON representation
{
"contentType" : string ,
"data" : string ,
"extensions" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
contentType
string
The HTTP Content-Type header value specifying the content type of the body.
data
string ( bytes format)
The HTTP request/response body as raw binary.
A base64-encoded string.
extensions[]
object
Application specific response metadata. Must be set in the first response for streaming APIs.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
