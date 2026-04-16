---
title: "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/cancel_tuning_job
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/reference/rest/Shared.Types/Policy
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/cancel_tuning_job
  title: "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
MCP Tools Reference: aiplatform.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: cancel_tuning_job
Starts an asynchronous cancellation request for a running GenAI tuning job. The server makes a best effort to cancel the job, but success is not guaranteed. Cancellation does not delete the tuning job resource, but transitions its state to CANCELLED. Use this to stop a job that is no longer needed or was started with incorrect parameters. Format: 'projects/{project_id}/locations/{region}'. CRITICAL: For {region}, use the region specified in the current context window. If no region is specified, prompt the user to provide one. Do not use 'global'. IMPORTANT: This parameter requires the 19-digit numeric ID. Request the full ID if a shorter one is given.
The following sample demonstrate how to use curl to invoke the cancel_tuning_job MCP tool.
Curl Request
curl --location 'https://aiplatform.googleapis.com/mcp/generate' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "cancel_tuning_job",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for GenAiTuningService.CancelTuningJob .
CancelTuningJobRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. The name of the tuning job to cancel. Format: projects/{project}/locations/{location}/tuningJobs/{tuning_job}
Output Schema
A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
service Foo {
rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
}
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
