---
title: "HttpBody \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/HttpBody
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/HttpBody
  title: "HttpBody \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Generative AI on Vertex AI
API reference
Send feedback
HttpBody
Stay organized with collections
Save and categorize content based on your preferences.
message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.
This message can be used both in streaming and non-streaming API methods in the request as well as the response.
It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.
Example:
message GetResourceRequest {
// A unique request id.
string requestId = 1;
// The raw HTTP body is bound to this field.
google.api.HttpBody httpBody = 2;
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
Fields
contentType
string
The HTTP Content-type header value specifying the content type of the body.
data
string ( bytes format)
The HTTP request/response body as raw binary.
A base64-encoded string.
extensions[]
object
Application specific response metadata. Must be set in the first response for streaming APIs.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
