---
title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/delete_snapshot
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/delete_snapshot
  title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
MCP Tools Reference: pubsub.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: delete_snapshot
Delete an existing Cloud Pub/Sub snapshot.
Parameters
snapshot : The name of the snapshot to delete in the format projects/{project_id}/snapshots/{name} .
Returns
google.protobuf.Empty if the snapshot exists.
A NOT_FOUND error if the snapshot does not exist.
Important Notes
A snapshot is a named resource that captures the acknowledgment state of messages in an existing subscription to allow for managing acknowledgments in bulk.
A project ID and snapshot name must be provided.
When the snapshot is deleted, all messages retained in the snapshot are immediately dropped.
The following sample demonstrate how to use curl to invoke the delete_snapshot MCP tool.
Curl Request
curl --location 'https://pubsub.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "delete_snapshot",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for the DeleteSnapshot method.
DeleteSnapshotRequest
JSON representation
{
"snapshot" : string
}
Fields
snapshot
string
Required. The name of the snapshot to delete. Format is projects/{project}/snapshots/{snap} .
Output Schema
A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
service Foo {
rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
}
Tool Annotations
Destructive Hint: ✅ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
