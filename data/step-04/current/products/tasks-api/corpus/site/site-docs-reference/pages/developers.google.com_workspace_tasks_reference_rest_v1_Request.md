---
title: "Request \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/Request
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/Request
  title: "Request \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Reference
Send feedback
Request
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A request message sent as part of a batch execution.
JSON representation
{
"requestId" : string ,
"methodName" : string ,
"request" : {
"@type" : string ,
field1 : ... ,
...
} ,
"extensions" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
requestId
string
Unique id of this request within the batch. The Response message with a matching requestId is the response to this request. For request-streaming methods, the same requestId may be used multiple times to pass all request messages that are part of a single method. For response-streaming methods, the same requestId may show up in multiple Response messages.
methodName
string
The method being called. Must be a fully qualified method name. Example: google.rpc.batch.Batch.Execute
request
object
The request payload.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
extensions[]
object
Application specific request metadata.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-13 UTC."],[],[]]
