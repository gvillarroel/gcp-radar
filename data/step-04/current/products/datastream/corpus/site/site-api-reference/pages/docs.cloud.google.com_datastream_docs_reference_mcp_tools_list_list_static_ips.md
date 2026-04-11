---
title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_static_ips
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_static_ips
  title: "MCP Tools Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
MCP Tools Reference: datastream
Stay organized with collections
Save and categorize content based on your preferences.
Tool: list_static_ips
Lists static IP addresses of the provided resource name that need to be allowlisted by the customer when using the static-IP connectivity method. Returns up to 100 IP addresses.
The resource name parameter is in the form projects/{project name}/locations/{location} , for example: projects/my-project/locations/us-central1 .
The following sample demonstrate how to use curl to invoke the list_static_ips MCP tool.
Curl Request
curl --location 'https://datastream.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_static_ips",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for 'ListStaticIps' request.
ListStaticIpsRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. The resource name for the location for which static IPs should be returned. Must be in the format projects/*/locations/* . For example: 'projects/my-project/locations/us-central1'
Output Schema
Response message for a 'FetchStaticIps' response.
FetchStaticIpsResponse
JSON representation
{
"staticIps" : [
string
] ,
"nextPageToken" : string
}
Fields
staticIps[]
string
list of static ips by account
nextPageToken
string
A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
